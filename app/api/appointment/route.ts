import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {

  try {

    const { name, phone, reason } = await request.json();
        await resend.emails.send({

      from: "Estudio Dental Catalunya <citas@estudiodentalcatalunya.es>",

      to: "estudiodentalcataluna@gmail.com",

      subject: "🦷 Nueva solicitud de cita",

      html: `
        <div style="font-family:Arial,sans-serif;padding:30px;background:#f8fafc">

          <h2 style="color:#0891b2">
            Nueva solicitud de cita
          </h2>

          <table style="border-collapse:collapse;width:100%;max-width:650px;background:white">

            <tr>
              <td style="padding:12px;font-weight:bold;border:1px solid #e5e7eb;">
                Nombre
              </td>

              <td style="padding:12px;border:1px solid #e5e7eb;">
                ${name}
              </td>
            </tr>

            <tr>
              <td style="padding:12px;font-weight:bold;border:1px solid #e5e7eb;">
                Teléfono
              </td>

              <td style="padding:12px;border:1px solid #e5e7eb;">
                ${phone}
              </td>
            </tr>

            <tr>
              <td style="padding:12px;font-weight:bold;border:1px solid #e5e7eb;">
                Motivo
              </td>

              <td style="padding:12px;border:1px solid #e5e7eb;">
                ${reason}
              </td>
            </tr>

          </table>

          <p style="margin-top:25px;color:#64748b">
            Este correo ha sido enviado automáticamente desde la web de
            <strong>Estudio Dental Catalunya</strong>.
          </p>

        </div>
      `,
    });
        return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "No se ha podido enviar el correo.",
      },
      {
        status: 500,
      }
    );

  }

}