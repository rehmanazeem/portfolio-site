/** UI strings only. Page copy lives in src/lib/copy.ts. */
export const languages = { en: 'English', de: 'Deutsch' } as const;
export type Locale = keyof typeof languages;

/** One place to change the name shown in the header, footer and metadata (a studio name could go here later). */
export const brand = 'Azeem Ur Rehman';

export const ui = {
  en: {
    'nav.main': 'Main',
    'menu.toggle': 'Toggle menu',
    'nav.how': 'How I work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'skip': 'Skip to content',
    'theme.toggle': 'Toggle dark mode',
    'lang.switch': 'Deutsch',
    'cta.talk': "Let's get in touch",
    'cta.contact': 'Contact',
    'cta.how': 'How I work',
    'cta.cv': 'Get my CV',
    'cta.copy': 'Copy email',
    'cta.copied': 'Copied',
    'footer.impressum': 'Legal notice (Impressum)',
    'footer.privacy': 'Privacy',
    'icon.github': 'GitHub',
    'icon.linkedin': 'LinkedIn',
    'icon.mail': 'Email',
    '404.title': 'Page not found',
    '404.body': 'That page does not exist.',
    '404.home': 'Back to the home page',
  },
  de: {
    'nav.main': 'Hauptnavigation',
    'menu.toggle': 'Menü umschalten',
    'nav.how': 'Wie ich arbeite',
    'nav.about': 'Über mich',
    'nav.contact': 'Kontakt',
    'skip': 'Zum Inhalt springen',
    'theme.toggle': 'Dunkelmodus umschalten',
    'lang.switch': 'English',
    'cta.talk': 'Nehmen wir Kontakt auf',
    'cta.contact': 'Kontakt',
    'cta.how': 'Wie ich arbeite',
    'cta.cv': 'Lebenslauf holen',
    'cta.copy': 'E-Mail kopieren',
    'cta.copied': 'Kopiert',
    'footer.impressum': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'icon.github': 'GitHub',
    'icon.linkedin': 'LinkedIn',
    'icon.mail': 'E-Mail',
    '404.title': 'Seite nicht gefunden',
    '404.body': 'Diese Seite existiert nicht.',
    '404.home': 'Zurück zur Startseite',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UiKey = keyof (typeof ui)['en'];

export function useTranslations(locale: Locale) {
  return (key: UiKey): string => ui[locale][key];
}
