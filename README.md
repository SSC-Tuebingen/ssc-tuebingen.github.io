# SSC Tübingen website migration

Modernization of the public SSC Tübingen website using a static-site workflow.

## Status

Phase 1 (discovery) is in progress. A local representative Astro skeleton now
covers the prototype routes and editorial model. No production system, DNS
record, email setting, external account, or public website has been changed.

The current public domain presents an invalid TLS certificate for both the apex
and `www` hostnames as observed on 2026-08-26. Direct crawling is therefore
paused; the preliminary inventory uses recent search-engine copies.

## Discovery documents

- [Audit status](docs/discovery/audit-status.md)
- [Site inventory](docs/discovery/site-inventory.md)
- [Content model](docs/discovery/content-model.md)
- [Proposed information architecture](docs/discovery/information-architecture.md)
- [Technical recommendation](docs/discovery/technical-recommendation.md)
- [Decisions required from the club](docs/discovery/decisions-required.md)

## Local prototype

The skeleton includes the homepage, sport-offer overview, a football department
and team page, news archive and article, consolidated training schedule,
membership, contacts, documents, legal placeholders, mobile navigation and a
German Pages CMS configuration.

All migrated-looking content is marked as sample or unconfirmed. No public
download is linked until the club identifies its current approved version.

Local development uses `pnpm dev`. Because Dropbox may lock transient build
folders on Windows, use `pnpm build:local` for local validation; continuous
deployment uses the standard `pnpm build` command.

## Safeguards

- Discovery is read-only with respect to the current website.
- Downloads of public project material into this folder are authorized.
- Production publishing, DNS and email changes require explicit approval.
- Private member data and credentials must never enter this repository.
