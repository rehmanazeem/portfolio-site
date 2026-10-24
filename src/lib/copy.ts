/**
 * Page copy for the single page. Capabilities are stated, not proven; the employer stays anonymous.
 * German is a draft for review (DE: needs review).
 */
import type { Locale } from '../i18n/ui';

export interface Layer { id: string; name: string; points: string[] }

interface Copy {
  title: string; description: string; hook: string; h1: string;
  how: { title: string; description: string; lead: string; steps: { name: string; text: string }[] };
  diagramTitle: string; layers: Layer[];
  about: {
    title: string; description: string; eyebrow: string; alt: string;
    story: { title: string; paragraphs: string[]; beyond: string };
    skills: { title: string; groups: { level: string; items: string[] }[] };
    cv: { text: string; button: string };
  };
  contact: { title: string; description: string; eyebrow: string; h1: string; lead: string };
  mail: { talk: { subject: string; body: string }; cv: { subject: string; body: string } };
}

export const copy: Record<Locale, Copy> = {
  en: {
    title: 'Azeem Ur Rehman | Structured product building',
    description: 'I design complete systems and build products for growing businesses.',
    hook: 'Have an idea that should be a working product?',
    h1: 'I design complete systems and build products for growing businesses.',
    how: { title: 'How I work', description: 'A structured way of working in four steps: understand, structure, build, finish.', lead: 'A structured way of working, in four steps.', steps: [
      { name: 'Understand', text: 'Users, requirements and constraints are established before any code is written.' },
      { name: 'Structure', text: 'The system is divided into parts that can change independently, and the plan is agreed upfront.' },
      { name: 'Build', text: 'End-to-end implementation, with tests written alongside the code.' },
      { name: 'Finish', text: 'Packaging, documentation and a clean handover, with the limits stated plainly.' },
    ] },
    diagramTitle: 'What I work across',
    layers: [
      { id: 'hmi', name: 'HMI and UX', points: ['Interfaces that feel obvious to the people using them', 'Clear, guided flows for complex machines and systems', 'Careful design down to the last detail'] },
      { id: 'agents', name: 'Agentic systems', points: ['AI agents that take repetitive business tasks off your team', 'Clear rules and full traceability, so every step can be trusted', 'Insights from your data, delivered where decisions are made'] },
      { id: 'middleware', name: 'Middleware', points: ['Connecting the tools your business already runs on', 'Replacing manual handoffs between teams and systems', 'Dependable data flow from design to production'] },
      { id: 'embedded', name: 'Embedded systems', points: ['Smart, connected devices for your products', 'Reliable software between devices and your systems', 'Safe by default, from the first prototype'] },
    ],
    about: {
      title: 'About',
      description: 'A short introduction to Azeem Ur Rehman, a software engineer.',
      eyebrow: 'About',
      alt: 'Portrait of Azeem Ur Rehman',
      story: {
        title: 'From data to robots to products people use',
        paragraphs: [
          'I started in computer science in New Delhi, then worked with real data, first at a space agency on remote sensing applications, leading into ML modelling and data pipeline work at an analytics firm for international fintech clients, with teams across China, India and the USA. Moving on to a Master\'s in Medical Robotics at FAU Erlangen-Nürnberg, with research on machine learning at a university institute for factory automation, took me from data to machines.',
          'For more than four years I have worked across data science, business intelligence, AI/ML research, UI/UX design and software development, and I build embedded systems on the side. Today, at a lab-automation company, I lead the integration of AI and ML into everyday workflows, maintain and develop the main software product for high-throughput research, and connect robots and devices into one system. I also own an internal calibration tool, taken from the first user interview to the shipped tool, that enables teams in the production phase, and I build the AI workflows my colleagues use every day.',
          'What I enjoy most is solving real problems in the real world: taking a messy, manual process and automating it until it simply works. I like real challenges, with real machines and real users, and I build systems with fine detail, where every part is engineered with care and runs smoothly.',
        ],
        beyond: 'Beyond work: building IoT projects at home, guitar jam sessions, photography and road trips.',
      },
      skills: { title: 'Skills', groups: [
        { level: 'Every day', items: ['Python', 'FastAPI', 'Flask', 'asyncio', 'pytest', 'Claude Code'] },
        { level: 'Strong', items: ['PySide6 / Qt', 'LangChain', 'Ollama', 'LangSmith', 'RAG', 'Qdrant', 'Agent workflows', 'Claude skills', 'MQTT', 'Docker', 'Git and CI/CD', 'pandas'] },
        { level: 'Working knowledge', items: ['PyTorch', 'scikit-learn', 'MLflow', 'Optuna', 'OpenCV', 'JavaScript', 'C++', 'C#', 'SQL', 'SAS', 'MongoDB', 'AWS Bedrock', 'Azure OpenAI', 'OpenAI API', 'N8N', 'PyInstaller', 'BLE', 'ESP8266 / Arduino', 'Raspberry Pi'] },
        { level: 'Creative and design', items: ['UI/UX design', 'Prototyping', 'HTML', 'CSS', 'Figma', 'Canva', 'Technical writing', 'Documentation'] },
      ] },
      cv: { text: 'Want to know more?', button: 'Get my CV' },
    },
    contact: {
      title: 'Contact',
      description: 'Contact Azeem Ur Rehman by email, LinkedIn or GitHub.',
      eyebrow: 'Contact',
      h1: 'A short message is welcome.',
      lead: 'You can find me at',
    },
    mail: {
      talk: { subject: 'A conversation about my project', body: 'Hi Azeem,\n\nWhat I am building:\n\n\nWhere it hurts right now:\n\n\nWhat a good outcome would look like:\n\n\nThanks!' },
      cv: { subject: 'CV request', body: 'Hi Azeem,\n\nCould you send me your CV?\n\nRole or project:\n\n\nThanks!' },
    },
  },

  // DE: needs review
  de: {
    title: 'Azeem Ur Rehman | Strukturierter Produktbau',
    description: 'Ich entwerfe vollständige Systeme und baue Produkte für wachsende Unternehmen.',
    hook: 'Haben Sie eine Idee, die ein funktionierendes Produkt werden sollte?',
    h1: 'Ich entwerfe vollständige Systeme und baue Produkte für wachsende Unternehmen.',
    how: { title: 'Wie ich arbeite', description: 'Eine strukturierte Arbeitsweise in vier Schritten: verstehen, strukturieren, bauen, abschließen.', lead: 'Eine strukturierte Arbeitsweise in vier Schritten.', steps: [
      { name: 'Verstehen', text: 'Nutzer, Anforderungen und Randbedingungen werden geklärt, bevor Code entsteht.' },
      { name: 'Strukturieren', text: 'Das System wird in Teile gegliedert, die sich unabhängig ändern lassen, und der Plan wird vorab vereinbart.' },
      { name: 'Bauen', text: 'Durchgängige Umsetzung, mit Tests parallel zum Code.' },
      { name: 'Abschließen', text: 'Paketierung, Dokumentation und eine saubere Übergabe, mit klar benannten Grenzen.' },
    ] },
    diagramTitle: 'Worauf ich arbeite',
    layers: [
      { id: 'hmi', name: 'HMI und UX', points: ['Oberflächen, die für Nutzer selbsterklärend wirken', 'Klare, geführte Abläufe für komplexe Maschinen und Systeme', 'Sorgfältiges Design bis ins letzte Detail'] },
      { id: 'agents', name: 'Agentische Systeme', points: ['KI-Agenten, die Ihrem Team wiederkehrende Aufgaben abnehmen', 'Klare Regeln und volle Nachvollziehbarkeit, damit jedem Schritt vertraut werden kann', 'Erkenntnisse aus Ihren Daten, geliefert dort, wo Entscheidungen fallen'] },
      { id: 'middleware', name: 'Middleware', points: ['Verbindung der Werkzeuge, auf denen Ihr Unternehmen bereits läuft', 'Manuelle Übergaben zwischen Teams und Systemen ersetzen', 'Verlässlicher Datenfluss von der Konstruktion bis zur Fertigung'] },
      { id: 'embedded', name: 'Eingebettete Systeme', points: ['Vernetzte, intelligente Geräte für Ihre Produkte', 'Zuverlässige Software zwischen Geräten und Ihren Systemen', 'Sicher von Anfang an, schon im ersten Prototyp'] },
    ],
    about: {
      title: 'Über mich',
      description: 'Eine kurze Vorstellung von Azeem Ur Rehman, Softwareingenieur.',
      eyebrow: 'Über mich',
      alt: 'Porträt von Azeem Ur Rehman',
      story: {
        title: 'Von Daten über Roboter zu Produkten, die Menschen nutzen',
        paragraphs: [
          'Ich habe in Neu-Delhi mit Informatik begonnen und danach mit echten Daten gearbeitet, zuerst bei einer Raumfahrtbehörde an Anwendungen der Fernerkundung, daran anschließend an ML-Modellierung und Datenpipelines bei einem Analysehaus für internationale Fintech-Kunden mit Teams in China, Indien und den USA. Der Wechsel zu einem Master in Medizinischer Robotik an der FAU Erlangen-Nürnberg, mit Forschung zu maschinellem Lernen an einem Universitätsinstitut für Fabrikautomation, hat mich von Daten zu Maschinen geführt.',
          'Seit mehr als vier Jahren arbeite ich in Data Science, Business Intelligence, KI-/ML-Forschung, UI/UX-Design und Softwareentwicklung, und ich baue nebenbei eingebettete Systeme. Heute leite ich bei einem Unternehmen für Laborautomation die Integration von KI und ML in alltägliche Abläufe, pflege und entwickle das zentrale Softwareprodukt für Forschung mit hohem Durchsatz und verbinde Roboter und Geräte zu einem System. Außerdem verantworte ich ein internes Kalibrierwerkzeug, vom ersten Nutzergespräch bis zum ausgelieferten Werkzeug, das Teams in der Produktionsphase befähigt, und baue die KI-Workflows, die meine Kollegen täglich nutzen.',
          'Am meisten schätze ich es, echte Probleme in der echten Welt zu lösen: einen unübersichtlichen, manuellen Ablauf so zu automatisieren, dass er einfach funktioniert. Ich mag echte Herausforderungen, mit echten Maschinen und echten Nutzern, und ich baue Systeme mit feinem Detail, in denen jedes Teil sorgfältig entwickelt ist und reibungslos läuft.',
        ],
        beyond: 'Neben der Arbeit: IoT-Projekte zu Hause bauen, Gitarren-Jamsessions, Fotografie und Roadtrips.',
      },
      skills: { title: 'Kenntnisse', groups: [
        { level: 'Täglich', items: ['Python', 'FastAPI', 'Flask', 'asyncio', 'pytest', 'Claude Code'] },
        { level: 'Stark', items: ['PySide6 / Qt', 'LangChain', 'Ollama', 'LangSmith', 'RAG', 'Qdrant', 'Agenten-Workflows', 'Claude Skills', 'MQTT', 'Docker', 'Git und CI/CD', 'pandas'] },
        { level: 'Praxiswissen', items: ['PyTorch', 'scikit-learn', 'MLflow', 'Optuna', 'OpenCV', 'JavaScript', 'C++', 'C#', 'SQL', 'SAS', 'MongoDB', 'AWS Bedrock', 'Azure OpenAI', 'OpenAI API', 'N8N', 'PyInstaller', 'BLE', 'ESP8266 / Arduino', 'Raspberry Pi'] },
        { level: 'Kreativ und Design', items: ['UI/UX-Design', 'Prototyping', 'HTML', 'CSS', 'Figma', 'Canva', 'Technisches Schreiben', 'Dokumentation'] },
      ] },
      cv: { text: 'Möchten Sie mehr erfahren?', button: 'Lebenslauf holen' },
    },
    contact: {
      title: 'Kontakt',
      description: 'Kontakt zu Azeem Ur Rehman per E-Mail, LinkedIn oder GitHub.',
      eyebrow: 'Kontakt',
      h1: 'Eine kurze Nachricht ist willkommen.',
      lead: 'Sie finden mich hier',
    },
    mail: {
      talk: { subject: 'Ein Gespräch über mein Projekt', body: 'Hallo Azeem,\n\nWas ich baue:\n\n\nWo es gerade hakt:\n\n\nWie ein gutes Ergebnis aussähe:\n\n\nDanke!' },
      cv: { subject: 'Anfrage Lebenslauf', body: 'Hallo Azeem,\n\nkönnten Sie mir Ihren Lebenslauf schicken?\n\nRolle oder Projekt:\n\n\nDanke!' },
    },
  },
};
