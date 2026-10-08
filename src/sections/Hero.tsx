import { ArrowRight, ArrowUpRight, Activity } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div
        className="hero-photo"
        role="img"
        aria-label="Pasillos y estanterías de un almacén"
      />
      <div className="hero-content">
        <div className="eyebrow">
          <span>01</span>Warehouse operations intelligence
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Operaciones
          <br />
          más inteligentes.
          <br />
          <span>Resultados reales.</span>
        </motion.h1>
        <p>
          Consultoría tecnológica especializada en almacenes y operaciones
          logísticas. Conectamos procesos, datos y sistemas para mejorar
          visibilidad, trazabilidad y control operativo.
        </p>
        <a className="button" href="#contacto">
          Analizar mi operación <ArrowRight size={18} />
        </a>
      </div>
      <div
        className="hero-panels"
        aria-label="Ejemplo ilustrativo de visualización operativa"
      >
        <div className="data-panel operations">
          <div className="panel-heading">
            <Activity size={14} /> Operación conectada
          </div>
          {[
            ["Inventario", "98.7%"],
            ["Pedidos", "1,248"],
            ["Picking", "97.9%"],
            ["Despacho", "99.3%"],
          ].map(([label, value]) => (
            <div className="metric" key={label}>
              <span>{label}</span>
              <span className="metric-track">
                <i />
              </span>
              <strong>{value}</strong>
            </div>
          ))}
          <small>Datos ilustrativos</small>
        </div>
        <div className="data-panel throughput">
          <div className="panel-heading">
            Flujo de pedidos <ArrowUpRight size={14} />
          </div>
          <div className="chart">
            <div className="chart-bars">
              {[24, 38, 32, 52, 47, 68, 81, 94].map((height, index) => (
                <i key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
            <div>
              <strong>1,248</strong>
              <span>
                +12% <ArrowUpRight size={12} />
              </span>
            </div>
          </div>
          <small>Vista de demostración</small>
        </div>
        <div className="warehouse-tag">
          <span className="status-dot" />
          Procesos / Datos / Tecnología
        </div>
      </div>
      <div className="hero-footer">
        <span>México · 2026</span>
        <span>De la operación a la información.</span>
        <span>Scroll para explorar ↓</span>
      </div>
    </section>
  );
}
