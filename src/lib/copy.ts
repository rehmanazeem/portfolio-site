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
  about: { title: string; description: string; paragraphs: string[]; alt: string };
  contact: { title: string; description: string; lead: string; location: string; note: string };
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
      description: 'A short introduction to Azeem Ur Rehman, a software engineer in Nürnberg.',
      paragraphs: [
        'I am Azeem, a software engineer in Nürnberg with a background in medical robotics. My favourite moment is when a system stops being a diagram and starts being something people use.',
        'Open to conversations about systems and products that need careful design and careful finishing.',
      ],
      alt: 'Portrait of Azeem Ur Rehman',
    },
    contact: {
      title: 'Contact',
      description: 'Contact Azeem Ur Rehman by email, LinkedIn or GitHub.',
      lead: 'Tell me what you are building and where it hurts.',
      location: 'Nürnberg, Germany',
      note: 'The email address is assembled in your browser. Without JavaScript, write to rehmanazeem915 [at] gmail [dot] com.',
    },
    mail: {
      talk: { subject: 'A conversation about my project', body: 'Hi Azeem,\n\nWhat I am building:\n\n\nWhere it hurts right now:\n\n\nThanks!' },
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
      description: 'Eine kurze Vorstellung von Azeem Ur Rehman, Softwareingenieur in Nürnberg.',
      paragraphs: [
        'Ich bin Azeem, Softwareingenieur in Nürnberg mit einem Hintergrund in der medizinischen Robotik. Mein liebster Moment ist, wenn ein System aufhört, ein Diagramm zu sein, und etwas wird, das Menschen benutzen.',
        'Offen für Gespräche über Systeme und Produkte, die sorgfältigen Entwurf und sorgfältige Fertigstellung brauchen.',
      ],
      alt: 'Porträt von Azeem Ur Rehman',
    },
    contact: {
      title: 'Kontakt',
      description: 'Kontakt zu Azeem Ur Rehman per E-Mail, LinkedIn oder GitHub.',
      lead: 'Erzählen Sie mir, was Sie bauen und wo es hakt.',
      location: 'Nürnberg, Deutschland',
      note: 'Die E-Mail-Adresse wird in Ihrem Browser zusammengesetzt. Ohne JavaScript schreiben Sie an rehmanazeem915 [at] gmail [dot] com.',
    },
    mail: {
      talk: { subject: 'Ein Gespräch über mein Projekt', body: 'Hallo Azeem,\n\nWas ich baue:\n\n\nWo es gerade hakt:\n\n\nDanke!' },
      cv: { subject: 'Anfrage Lebenslauf', body: 'Hallo Azeem,\n\nkönnten Sie mir Ihren Lebenslauf schicken?\n\nRolle oder Projekt:\n\n\nDanke!' },
    },
  },
};
