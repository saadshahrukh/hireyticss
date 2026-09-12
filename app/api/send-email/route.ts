import { NextResponse } from "next/server";
import https from "https";

// Helper function to send HTTPS requests with IPv4 reliability
function sendBrevoRequest(apiKey: string, path: string, method = "GET", body: any = null): Promise<{ status: number; data: any }> {
  return new Promise((resolve, reject) => {
    const dataString = body ? JSON.stringify(body) : null;
    const req = https.request(
      {
        hostname: "api.brevo.com",
        port: 443,
        path: path,
        method: method,
        family: 4, // Force IPv4 to prevent Windows timeout issues
        headers: {
          "api-key": apiKey,
          "accept": "application/json",
          "content-type": "application/json",
          ...(dataString ? { "content-length": Buffer.byteLength(dataString) } : {}),
        },
      },
      (res) => {
        let responseBody = "";
        res.on("data", (chunk) => (responseBody += chunk));
        res.on("end", () => {
          try {
            const parsed = responseBody ? JSON.parse(responseBody) : {};
            resolve({ status: res.statusCode || 200, data: parsed });
          } catch (e) {
            resolve({ status: res.statusCode || 200, data: { raw: responseBody } });
          }
        });
      }
    );

    req.on("error", (err) => {
      console.error("Brevo HTTPS request error:", err);
      reject(err);
    });

    req.setTimeout(12000, () => {
      req.destroy(new Error("Request to Brevo API timed out after 12s"));
    });

    if (dataString) {
      req.write(dataString);
    }
    req.end();
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formType, subject, data } = body;

    const apiKey = process.env.BREVO_API || process.env.BREVO_API_KEY;

    if (!apiKey) {
      console.error("BREVO_API environment variable is not configured.");
      return NextResponse.json(
        { error: "Email service is not configured. Missing API key." },
        { status: 500 }
      );
    }

    const leadName = data.fullName || data.name || `${data.firstName || ""} ${data.lastName || ""}`.trim() || "New Lead";
    const leadEmail = data.workEmail || data.email || data.personalEmail || "info@hireytics.com";
    const company = data.companyName || data.company || "N/A";
    const submissionType = formType || "Form Submission";

    // 1. Fetch verified senders from Brevo account to ensure 100% deliverability
    let senderEmail = "saad122sharukh@gmail.com";
    let senderName = "Hireytics Notifications";

    try {
      const sendersRes = await sendBrevoRequest(apiKey, "/v3/senders", "GET");
      if (sendersRes.status === 200 && Array.isArray(sendersRes.data?.senders) && sendersRes.data.senders.length > 0) {
        const activeSender = sendersRes.data.senders.find((s: any) => s.active) || sendersRes.data.senders[0];
        if (activeSender?.email) {
          senderEmail = activeSender.email;
        }
      }
    } catch (e) {
      console.warn("Could not fetch senders dynamically, using default verified sender:", e);
    }

    // 2. Format all submitted fields into clean HTML table rows with bold labels
    const formatFieldKey = (key: string) => {
      return key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())
        .trim();
    };

    const tableRows = Object.entries(data)
      .filter(([_, val]) => val !== undefined && val !== null && val !== "")
      .map(([key, value]) => {
        const displayValue = typeof value === "object" ? JSON.stringify(value) : String(value);
        return `
          <tr style="border-bottom: 1px solid #E2E8F0;">
            <td style="padding: 12px 16px; font-weight: 700; color: #1E293B; width: 35%; background-color: #F8FAFC; vertical-align: top; font-size: 13px;">
              ${formatFieldKey(key)}
            </td>
            <td style="padding: 12px 16px; color: #334155; font-size: 13px; font-family: monospace, sans-serif;">
              ${displayValue}
            </td>
          </tr>
        `;
      })
      .join("");

    const emailSubject = subject || `[Hireytics] New ${submissionType} - ${leadName} (${company})`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <title>${emailSubject}</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F1F5F9; margin: 0; padding: 30px 15px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; border: 1px solid #E2E8F0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          
          <!-- Header Banner -->
          <div style="background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%); padding: 28px 24px; text-align: center; border-bottom: 3px solid #6366F1;">
            <h1 style="color: #FFFFFF; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">
              Hireytics<span style="color: #38BDF8;">.</span> Platform
            </h1>
            <div style="display: inline-block; background-color: rgba(99, 102, 241, 0.25); border: 1px solid rgba(165, 180, 252, 0.4); border-radius: 20px; padding: 4px 14px; margin-top: 10px;">
              <span style="color: #C7D2FE; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;">
                ${submissionType}
              </span>
            </div>
          </div>

          <!-- Content Body -->
          <div style="padding: 24px;">
            <p style="color: #475569; font-size: 14px; line-height: 1.6; margin-top: 0; margin-bottom: 18px;">
              A new <strong>${submissionType}</strong> has been received on the Hireytics platform. Complete details below:
            </p>

            <table style="width: 100%; border-collapse: collapse; border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden; margin-bottom: 20px;">
              <tbody>
                ${tableRows}
              </tbody>
            </table>

            <!-- Quick Action Box -->
            <div style="background-color: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 10px; padding: 14px 18px; margin-top: 20px;">
              <p style="margin: 0; font-size: 12px; color: #166534;">
                <strong>Lead Contact Email:</strong> <a href="mailto:${leadEmail}" style="color: #15803D; font-weight: bold; text-decoration: underline;">${leadEmail}</a>
              </p>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #F8FAFC; border-top: 1px solid #E2E8F0; padding: 16px 24px; text-align: center;">
            <p style="color: #94A3B8; font-size: 11px; margin: 0;">
              This notification was automatically sent to info@hireytics.com via Brevo Platform.
            </p>
            <p style="color: #94A3B8; font-size: 11px; margin: 4px 0 0 0;">
              Queries: <a href="mailto:contact@hireytics.com" style="color: #6366F1; text-decoration: none;">contact@hireytics.com</a> • Support: <a href="mailto:support@hireytics.com" style="color: #6366F1; text-decoration: none;">support@hireytics.com</a>
            </p>
          </div>

        </div>
      </body>
      </html>
    `;

    // 3. Dispatch to info@hireytics.com (and account email) using verified sender
    const emailPayload = {
      sender: {
        name: senderName,
        email: senderEmail,
      },
      to: [
        {
          email: "info@hireytics.com",
          name: "Hireytics Admin",
        },
        {
          email: senderEmail,
          name: "Hireytics Lead Alerts",
        },
      ],
      replyTo: {
        email: leadEmail,
        name: leadName,
      },
      subject: emailSubject,
      htmlContent: htmlContent,
    };

    const sendRes = await sendBrevoRequest(apiKey, "/v3/smtp/email", "POST", emailPayload);

    if (sendRes.status >= 400) {
      console.error("Brevo API send error:", sendRes.data);
      return NextResponse.json(
        { error: sendRes.data?.message || "Failed to dispatch email via Brevo." },
        { status: sendRes.status }
      );
    }

    console.log("Brevo email sent successfully, messageId:", sendRes.data?.messageId);

    return NextResponse.json({
      success: true,
      messageId: sendRes.data?.messageId || "sent",
    });
  } catch (error: any) {
    console.error("Error in /api/send-email:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error." },
      { status: 500 }
    );
  }
}
