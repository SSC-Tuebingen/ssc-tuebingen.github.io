# Proposed information architecture

This is a working proposal derived from the indexed site. It should be reviewed
after the full crawl and with department representatives.

```text
/
├── aktuelles/
│   └── [article]/
├── sportangebote/
│   ├── fussball/
│   │   └── [team]/
│   ├── volleyball/
│   │   └── [team]/
│   ├── american-football/
│   ├── cheerleading/
│   │   └── [team]/
│   ├── tanzen/
│   ├── inklusion/
│   ├── kindersport/
│   └── lauftreff/
├── trainingszeiten/
├── verein/
│   ├── ueber-uns/
│   ├── vorstand/
│   ├── ansprechpersonen/
│   ├── mitglied-werden/
│   ├── vereinsheim/
│   └── sponsoren/
├── dokumente/
├── kontakt/
│   └── anfahrt/
├── impressum/
└── datenschutz/
```

## Rationale

- `Sportangebote` gives visitors one inclusive entry point and avoids implying
  that every offering has the same formal departmental status.
- A consolidated `/trainingszeiten/` answers a high-frequency visitor need
  while the same structured records also render on team pages.
- Club administration, rental and membership remain under `/verein/`.
- Documents have a single searchable index while contextual pages link to the
  relevant current document.
- Team URLs should remain durable across seasons; season is data, not part of
  the URL.

## Redirect principles

- Preserve every important existing path with an HTML redirect page or other
  GitHub Pages-compatible strategy.
- Never reuse an old URL for unrelated content.
- Redirect merged departmental news to the relevant filtered archive or article.
- Keep a versioned redirect map generated from migration metadata.
- Test backlinks to documents separately; old PDFs may need retained filenames
  or lightweight redirect pages depending on GitHub Pages behavior.

