import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_NAME_LENGTH = 100;
const MAX_PHONE_LENGTH = 20;
const MAX_REASON_LENGTH = 500;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function cleanText(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");

  return digits.length >= 9 && digits.length <= 15;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = cleanText(body?.name);
    const phone = cleanText(body?.phone);
    const reason = cleanText(body?.reason);
    const privacyAccepted = body?.privacyAccepted === true;

    if (!name || name.length < 2 || name.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        {
          success: false,
          message: "El nombre indicado no es válido.",
        },
        { status: 400 }
      );
    }

    if (!phone || phone.length > MAX_PHONE_LENGTH || !isValidPhone(phone)) {
      return NextResponse.json(
        {
          success: false,
          message: "El número de teléfono indicado no es válido.",
        },
        { status: 400 }
      );
    }

    if (
      !reason ||
      reason.length < 3 ||
      reason.length > MAX_REASON_LENGTH
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "El motivo de la consulta no es válido.",
        },
        { status: 400 }
      );
    }

    if (!privacyAccepted) {
      return NextResponse.json(
        {
          success: false,
          message: "Es necesario aceptar la política de privacidad.",
        },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY no está configurada.");

      return NextResponse.json(
        {
          success: false,
          message: "El servicio de correo no está configurado.",
        },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeReason = escapeHtml(reason);

    const { error } = await resend.emails.send({
      from: "Estudio Dental Catalunya <citas@estudiodentalcatalunya.es>",
      to: "estudiodentalcataluna@gmail.com",
      subject: "Nueva solicitud de cita - Estudio Dental Catalunya",
      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            padding: 30px;
            background: #f8fafc;
            color: #0f172a;
          "
        >
          <div
            style="
              max-width: 650px;
              margin: 0 auto;
              background: #ffffff;
              border-radius: 16px;
              padding: 30px;
              border: 1px solid #e2e8f0;
            "
          >
            <h2 style="margin-top: 0; color: #0891b2;">
              Nueva solicitud de cita
            </h2>

            <p style="color: #475569; line-height: 1.7;">
              Se ha recibido una nueva solicitud desde la web de
              <strong>Estudio Dental Catalunya</strong>.
            </p>

            <table
              style="
                border-collapse: collapse;
                width: 100%;
                margin-top: 24px;
              "
            >
              <tr>
                <td
                  style="
                    padding: 12px;
                    font-weight: bold;
                    border: 1px solid #e5e7eb;
                    width: 35%;
                  "
                >
                  Nombre
                </td>

                <td
                  style="
                    padding: 12px;
                    border: 1px solid #e5e7eb;
                  "
                >
                  ${safeName}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 12px;
                    font-weight: bold;
                    border: 1px solid #e5e7eb;
                  "
                >
                  Teléfono
                </td>

                <td
                  style="
                    padding: 12px;
                    border: 1px solid #e5e7eb;
                  "
                >
                  ${safePhone}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 12px;
                    font-weight: bold;
                    border: 1px solid #e5e7eb;
                    vertical-align: top;
                  "
                >
                  Motivo de la consulta
                </td>

                <td
                  style="
                    padding: 12px;
                    border: 1px solid #e5e7eb;
                    white-space: pre-wrap;
                  "
                >
                  ${safeReason}
                </td>
              </tr>
            </table>

            <p
              style="
                margin-top: 25px;
                color: #64748b;
                font-size: 13px;
                line-height: 1.6;
              "
            >
              Solicitud recibida automáticamente desde el formulario
              de citas de la web de Estudio Dental Catalunya.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Error de Resend:", error);

      return NextResponse.json(
        {
          success: false,
          message: "No se ha podido enviar la solicitud.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Error en /api/appointment:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Ha ocurrido un error al procesar la solicitud.",
      },
      { status: 500 }
    );
  }
}