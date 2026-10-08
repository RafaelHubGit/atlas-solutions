import {
  Scan,
  Search,
  Box,
  Settings2,
  ChartNoAxesCombined,
  Workflow,
  Warehouse,
  Code2,
  Database,
  Radio,
  Cloud,
  FileSpreadsheet,
  Mail,
  UserRound,
  CircleAlert,
  Clock3,
  Layers3,
} from "lucide-react";

export const navigation = [
  ["inicio", "Inicio"],
  ["enfoque", "Enfoque"],
  ["capacidades", "Capacidades"],
  ["casos", "Casos"],
  ["nosotros", "Nosotros"],
] as const;
export const steps = [
  {
    title: "Observa",
    text: "Entendemos tu operación, en el lugar donde sucede.",
    icon: Scan,
  },
  {
    title: "Diagnostica",
    text: "Identificamos fricción, errores y oportunidades.",
    icon: Search,
  },
  {
    title: "Diseña",
    text: "Definimos los procesos y la tecnología adecuados.",
    icon: Box,
  },
  {
    title: "Implementa",
    text: "Integramos y ponemos en marcha, por etapas.",
    icon: Settings2,
  },
  {
    title: "Evoluciona",
    text: "Medimos, acompañamos y mejoramos.",
    icon: ChartNoAxesCombined,
  },
];
export const capabilities = [
  {
    title: "Operaciones y procesos",
    text: "Diagnóstico · Layout · KPIs · Productividad",
    icon: Workflow,
    detail:
      "Analizamos recepción, ubicación, surtido y despacho para diseñar flujos claros y reducir tareas innecesarias.",
  },
  {
    title: "Sistemas logísticos",
    text: "WMS · TMS · ERP · Integraciones",
    icon: Warehouse,
    detail:
      "Evaluamos las herramientas que ya usas antes de recomendar otra. Conectamos sistemas para evitar capturas duplicadas.",
  },
  {
    title: "Desarrollo de software",
    text: "Aplicaciones · APIs · Automatización",
    icon: Code2,
    detail:
      "Construimos las herramientas que tu operación necesita cuando las soluciones existentes no cubren el problema.",
  },
  {
    title: "Datos e inteligencia",
    text: "Dashboards · BI · Trazabilidad",
    icon: Database,
    detail:
      "Convertimos movimientos y registros en información útil para conocer existencias, detectar desviaciones y tomar decisiones.",
  },
  {
    title: "Automatización física",
    text: "Pick-to-light · RFID · Códigos · IoT",
    icon: Radio,
    detail:
      "Integramos dispositivos con software para guiar tareas y registrar lo que sucede en el piso del almacén.",
  },
  {
    title: "Infraestructura cloud",
    text: "Arquitectura · Monitoreo · Escalabilidad",
    icon: Cloud,
    detail:
      "Diseñamos infraestructura acorde al tamaño de tu operación, con monitoreo y espacio para crecer.",
  },
];
export const sources = [
  { label: "ERP / WMS", icon: Layers3 },
  { label: "Archivos", icon: FileSpreadsheet },
  { label: "Reportes", icon: Mail },
  { label: "Operador", icon: UserRound },
];
export const problems = [
  { label: "Reportes tardíos", icon: Clock3 },
  { label: "Datos incompletos", icon: Database },
  { label: "Errores operativos", icon: CircleAlert },
  { label: "Falta de trazabilidad", icon: Search },
];
