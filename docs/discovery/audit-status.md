# Audit status

Date: 2026-08-26

## Current limitation

Both `https://ssc-tuebingen.de/` and `https://www.ssc-tuebingen.de/` currently
fail certificate validation with `ERR_CERT_COMMON_NAME_INVALID`. The browser
warning was not bypassed. Direct web retrieval also returned a gateway error.

The initial findings therefore come from search results crawled mostly during
July and August 2026. They are sufficient to establish the main content types
and navigation, but not to claim a complete inventory of pages, documents or
media.

## What is already established

- The current site appears to be a TYPO3-style installation using
  `/fileadmin/user_upload/` for public files.
- The navigation contains more activities than the initial brief listed:
  Lauftreff and Kindersport must be considered alongside Fußball, Volleyball,
  American Football, Cheerleading, Tanzen and Inklusion.
- American Football largely delegates current news to `red-knights.de`.
- The public site includes a contact form, an OpenStreetMap integration,
  external league/result links and social-network links.
- Public PDFs include a membership application, statutes, contribution rules,
  privacy rules and clubhouse rental documents.
- Search results expose duplicate or conflicting rental PDFs and information;
  these must be reconciled before migration.
- Some pages contain named personal contacts, historical team rosters, bank
  account details and information about children. Each needs a publication and
  minimization review rather than automatic migration.
- The legal notice still references older statutory terminology (`TMG`,
  `RStV`) and a template source. It must be reviewed by the club or qualified
  counsel for the new architecture; generated replacement text is not legal
  advice.

## Next audit steps

1. Ask the current hosting administrator to repair the TLS certificate or
   provide a safe read-only export/backup of the public site.
2. Crawl the repaired site and record HTTP status, canonical URL, title,
   content owner, last-known update and all internal links.
3. Download public documents and media while retaining original paths and
   checksums.
4. Reconcile the crawl with search-indexed URLs and external backlinks.
5. Send questionable content to named club owners for keep/update/archive
   decisions.

## Primary evidence

- [Current SSC homepage](https://www.ssc-tuebingen.de/)
- [Indexed current navigation](https://www.ssc-tuebingen.de/fussball/news/)
- [Central contacts](https://www.ssc-tuebingen.de/ansprechpartner/)
- [Membership page](https://www.ssc-tuebingen.de/derclub/mitglied-werden/)
- [Clubhouse rental page](https://www.ssc-tuebingen.de/derclub/vereinsheim/)

