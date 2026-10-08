import { useState } from "react";
import { ArrowRight, Copy, Check } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [request, setRequest] = useState("");
  const [error, setError] = useState("");
  async function copyRequest() {
    try {
      await navigator.clipboard.writeText(request);
      setCopied(true);
      setError("");
    } catch {
      setError(
        "No fue posible copiar automáticamente. Selecciona y copia el texto de arriba.",
      );
    }
  }
  return (
    <section id="contacto" className="contact-section">
      <div>
        <div className="eyebrow">
          <span>07</span>El siguiente paso
        </div>
        <h2>
          Hablemos de
          <br />
          tu operación.
        </h2>
        <p>Cuéntanos qué está pasando en tu almacén y qué necesitas mejorar.</p>
        <span className="contact-note">
          El canal de contacto se configurará antes de publicar.
        </span>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          setRequest(
            `Solicitud de diagnóstico\nNombre: ${data.get("name")}\nEmpresa: ${data.get("company")}\nCorreo: ${data.get("email")}\nSituación: ${data.get("message")}`,
          );
          setCopied(false);
        }}
      >
        <div className="form-row">
          <label>
            Tu nombre
            <input name="name" required autoComplete="name" maxLength={100} />
          </label>
          <label>
            Empresa
            <input
              name="company"
              required
              autoComplete="organization"
              maxLength={150}
            />
          </label>
        </div>
        <label>
          Correo de contacto
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            maxLength={254}
          />
        </label>
        <label>
          ¿Qué te gustaría mejorar?
          <textarea name="message" rows={3} required maxLength={2000} />
        </label>
        <button className="button" type="submit">
          Preparar solicitud <ArrowRight size={17} />
        </button>
        <small>Este prototipo prepara tu solicitud; todavía no la envía.</small>
        {request && (
          <div className="request-result" role="status">
            <p>Solicitud preparada. Puedes copiarla para compartirla.</p>
            <pre>{request}</pre>
            <button className="text-link" type="button" onClick={copyRequest}>
              {copied ? <Check size={16} /> : <Copy size={16} />}{" "}
              {copied ? "Copiada" : "Copiar solicitud"}
            </button>
            {error && <p>{error}</p>}
          </div>
        )}
      </form>
    </section>
  );
}
