import { ArrowRight, CircleAlert, Check, Boxes } from "lucide-react";
import { Section } from "../components/Section";
import { capabilities, problems, sources, steps } from "../data/content";

export function HomeSections() {
  return (
    <>
      <Section
        id="problema"
        number="02"
        label="El problema"
        title="Tu almacén no debería depender de soluciones improvisadas."
        description="Sistemas desconectados. Procesos manuales. Información fragmentada. Decisiones sin visibilidad."
      >
        <div className="problem-flow">
          <div className="flow-list">
            {sources.map(({ label, icon: Icon }) => (
              <div className="flow-item" key={label}>
                <Icon size={21} />
                {label}
              </div>
            ))}
          </div>
          <ArrowRight className="flow-arrow" />
          <div className="flow-center">
            <CircleAlert />
            <span>
              Procesos
              <br />
              manuales
            </span>
          </div>
          <ArrowRight className="flow-arrow" />
          <div className="flow-list">
            {problems.map(({ label, icon: Icon }) => (
              <div className="flow-item" key={label}>
                <Icon size={20} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section
        id="enfoque"
        number="03"
        label="Nuestro enfoque"
        title="Entendemos tu operación. Construimos lo que necesitas."
        description="Combinamos conocimiento operativo con tecnología para diseñar soluciones que funcionen en el piso del almacén."
      >
        <ol className="steps">
          {steps.map(({ title, text, icon: Icon }, index) => (
            <li key={title}>
              <span className="step-number">0{index + 1}</span>
              <div className="step-icon">
                <Icon size={27} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section
        id="capacidades"
        number="04"
        label="Capacidades"
        title="Tecnología aplicada a operaciones reales."
        description="Desde el diagnóstico hasta la implementación, conectamos procesos, datos, software y automatización."
      >
        <div className="capabilities">
          {capabilities.map(({ title, text, icon: Icon, detail }) => (
            <details className="capability" key={title}>
              <summary>
                <div className="capability-art">
                  <Icon size={42} strokeWidth={1} />
                  <span className="art-grid" />
                </div>
                <div className="capability-title">
                  <h3>{title}</h3>
                  <span className="expand-icon">+</span>
                </div>
                <p>{text}</p>
              </summary>
              <p className="capability-detail">{detail}</p>
            </details>
          ))}
        </div>
      </Section>
      <Section
        id="casos"
        number="05"
        label="Soluciones en contexto"
        title="Problemas operativos. Soluciones tecnológicas."
        description="Así puede verse una operación cuando sus datos y procesos trabajan juntos."
      >
        <div className="case">
          <div>
            <div className="case-label">Escenario ilustrativo / 001</div>
            <h3>Visibilidad de inventario y cumplimiento FEFO</h3>
            <p>
              Unificar lotes, caducidades y movimientos para priorizar las
              salidas y detectar materiales que requieren atención.
            </p>
            <div className="tags">
              <span>Inventario</span>
              <span>Trazabilidad</span>
              <span>Dashboards</span>
            </div>
            <ul className="case-benefits">
              {[
                "Seguimiento por lote y material",
                "Alertas de próximas caducidades",
                "Prioridad de salida por almacén",
              ].map((text) => (
                <li key={text}>
                  <Check size={15} />
                  {text}
                </li>
              ))}
            </ul>
            <a className="text-link" href="#contacto">
              Explorar un caso como el tuyo <ArrowRight size={16} />
            </a>
          </div>
          <div className="dashboard">
            <div className="dashboard-header">
              <Boxes size={16} /> INVENTARIO / VISIBILIDAD
              <span className="status-dot" />
            </div>
            <div className="dashboard-stats">
              <div>
                <small>Lotes visibles</small>
                <strong>128</strong>
              </div>
              <div>
                <small>Almacenes</small>
                <strong>03</strong>
              </div>
              <div>
                <small>Por revisar</small>
                <strong className="red">08</strong>
              </div>
            </div>
            <div className="dashboard-chart">
              <small>Movimientos por día</small>
              <div className="bars">
                {[35, 57, 42, 76, 63, 88, 72, 95, 80, 66, 87, 99].map(
                  (value, index) => (
                    <i key={index} style={{ height: `${value}%` }} />
                  ),
                )}
              </div>
            </div>
            <div className="dashboard-row">
              <span>LT-024 / Material A</span>
              <span className="badge">Prioridad</span>
            </div>
            <div className="dashboard-row">
              <span>LT-025 / Material B</span>
              <span className="badge good">En control</span>
            </div>
            <small className="demo-note">
              Demostración conceptual · Sin datos de clientes
            </small>
          </div>
        </div>
      </Section>
      <Section
        id="nosotros"
        number="06"
        label="Nosotros"
        title="Tecnología con los pies en la operación."
        description="Somos Atlas Solutions. Nuestro foco está en los almacenes y en las personas que los hacen funcionar."
      >
        <div className="about">
          <p>
            Empezamos por escuchar y observar. Aprovechamos lo que ya funciona,
            conectamos lo que está aislado y construimos lo que hace falta.
          </p>
          <p>
            Implementamos por etapas, validamos en campo y acompañamos al equipo
            para que cada cambio tenga sentido en su trabajo diario.
          </p>
          <div className="about-signature">
            <span className="status-dot" />
            Procesos claros. Sistemas conectados. Mejor control.
          </div>
        </div>
      </Section>
    </>
  );
}
