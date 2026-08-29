# Technical recommendation

## Recommendation

Use Astro with local content collections, Pages CMS, GitHub Actions and GitHub
Pages. Confirm the choice by implementing the representative Phase 2 prototype
and having at least one nontechnical volunteer perform the standard editing
tasks before full migration.

## Comparison

| Criterion | Astro | Hugo | Jekyll |
| --- | --- | --- | --- |
| Structured local content | Strong: content collections and schema validation | Strong: content types/data and front matter | Capable: collections/data/front matter, less typed |
| Pages CMS fit | Direct file-based Markdown/YAML/JSON fit | Direct file-based fit | Direct file-based fit |
| GitHub Pages deployment | Official Astro GitHub Action | Official documented Actions workflow | Native Pages heritage or Actions |
| Build speed | Fast for this scale | Typically fastest | Adequate, usually slower |
| Volunteer-facing complexity | Hidden behind Pages CMS | Hidden behind Pages CMS | Hidden behind Pages CMS |
| Future webmaster experience | Modern HTML/CSS/JS/TypeScript ecosystem | Go templates and single binary | Ruby/Liquid ecosystem |
| Dependency surface | Node plus pinned packages | Small runtime surface; single Hugo binary | Ruby, Bundler and gems |
| Accessible custom design | Excellent control with minimal client JS | Excellent control | Excellent control |
| Main trade-off | Node dependency maintenance | Less familiar templating/content tooling for many web volunteers | Older ecosystem and Pages plugin constraints |

Astro wins narrowly because its content schemas map well to the required
central references and validation, its components make accessible reusable UI
straightforward, and its official GitHub Pages action keeps deployment simple.
Hugo is the strongest fallback if minimizing dependency count and maximizing
build speed outweigh TypeScript schema ergonomics. Jekyll remains viable but
offers no decisive advantage here once a custom Actions workflow and structured
editorial model are required.

## Pages CMS recommendation

Begin with the hosted Pages CMS service for the prototype. It edits repository
files directly and supports collaborators invited by email who do not have
GitHub accounts. Restrict create/rename/delete operations per collection and
separate image and document media sources with safe renaming.

Hosted-service implications to document and approve:

- collaborator records live in the hosted service database and require a
  separate export/import when migrating installations;
- collaborator writes use the repository's GitHub App installation identity by
  default unless user commit identity is configured;
- the service and GitHub App become processors/components of the editorial
  workflow and must be covered in the privacy/security review;
- availability of editing depends on the hosted service, but the website and
  content remain independently buildable from Git.

Do not self-host initially. Current self-hosting requires a PostgreSQL database,
secrets, a GitHub App, migrations, application hosting and HTTPS. That would add
exactly the operational burden the static architecture is intended to avoid.
Reconsider self-hosting only if the club has a concrete data-processing,
availability or governance requirement and an identified maintainer.

## Proposed repository shape

```text
src/
├── content/
│   ├── news/
│   ├── departments/
│   └── teams/
├── data/
│   ├── contacts.yml
│   ├── schedules.yml
│   ├── venues.yml
│   ├── documents.yml
│   ├── sponsors.yml
│   └── site.yml
├── components/
├── layouts/
└── pages/
public/
├── images/
└── documents/
docs/
.pages.yml
```

## Primary technical sources

- [Astro deployment to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
- [Astro content collections](https://docs.astro.build/en/guides/content-collections/)
- [Hugo deployment to GitHub Pages](https://gohugo.io/host-and-deploy/host-on-github-pages/)
- [Jekyll and GitHub Pages](https://jekyllrb.com/docs/github-pages/)
- [Pages CMS configuration](https://pagescms.org/docs/configuration/)
- [Pages CMS collaborators](https://pagescms.org/docs/configuration/collaborators/)
- [Pages CMS self-hosting](https://pagescms.org/docs/guides/installing/self-host/)
- [GitHub Pages custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

