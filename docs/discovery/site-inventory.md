# Preliminary site inventory

This is a discovery inventory, not approved migration content. `Review` means
the club must confirm accuracy, publication rights and content ownership.

## Main sections and pages

| Current URL | Observed purpose | Preliminary disposition | Key review |
| --- | --- | --- | --- |
| `/` | Homepage | Rebuild | Current features and announcements unknown until crawl |
| `/fussball/` | Football landing page | Keep | Intro and contact wording |
| `/fussball/news/` | Football news/archive | Merge into structured news | Dates, duplicates, archival cut-off |
| `/fussball/abteilungsleitung-sponsoren/` | Leadership and sponsors | Split | Central contacts and sponsor records |
| `/fussball/herren-i/` | First men's team | Keep as team | Trainers, schedule, old roster/archive |
| `/fussball/herren-ii/` | Second men's team | Keep as team | Current staff and schedule |
| `/fussball/junioren/` | Junior overview | Keep as group landing | Current age structure |
| `/fussball/a-junioren/` | A juniors | Keep if active | Current team and schedule |
| `/fussball/b-junioren/` | B juniors | Keep if active | Current team and schedule |
| `/fussball/c-junioren/` | C juniors | Keep if active | Current team and schedule |
| `/fussball/d-jugend/` | D juniors | Keep if active | Current team and schedule |
| `/fussball/e-jugend/` | E juniors | Keep if active | Current team and schedule |
| `/fussball/f-jugend/` | F juniors | Keep if active | Current team and schedule |
| `/fussball/bambini/` | Bambini | Keep if active | Current team and schedule |
| `/volleyball/news/` | Volleyball landing/news | Split landing and news | Current teams and wording |
| `/volleyball/abteilungsleitung/` | Leadership | Centralize contacts | Public names and roles |
| `/volleyball/sponsoren/` | Sponsors | Structured sponsor records | Agreements and logo rights |
| `/volleyball/mannschaften/` | Team overview | Keep | Current team list |
| `/volleyball/mannschaften/herren/` | Men's team | Keep as team | League and seasonal training times |
| `/volleyball/mannschaften/damen/` | Women's team | Keep as team | League and training times |
| `/volleyball/mannschaften/weibliche-jugend/` | Girls' youth | Keep if active | Age groups and safeguarding |
| `/volleyball/mannschaften/maennliche-jugend/` | Boys' youth | Keep if active | Age groups and safeguarding |
| `/american-football/` | American football landing | Keep as concise gateway | Relationship to `red-knights.de` |
| `/american-football/abteilungsleitung/` | Leadership | Centralize contacts | Public roles |
| `/american-football/trainingszeiten/` | Training times | Move to structured schedules | All teams and validity dates |
| `/american-football/kontakt/` | External site link | Merge into landing/contact | Correct canonical Red Knights URL |
| `/cheerleading/` | Cheerleading landing | Keep | Sponsor and team overview |
| `/cheerleading/seniors-dragonstorm/team/` | Senior team | Keep as team | Achievements and external links |
| `/cheerleading/seniors-dragonstorm/training/` | Training | Structured schedule | Current venue/time/contact |
| `/cheerleading/seniors-dragonstorm/news/` | Team news | Merge into news | Archive policy |
| `/cheerleading/juniors-dragonfire/team/` | Junior team | Keep as team | Current age limits and contacts |
| `/cheerleading/juniors-dragonfire/training/` | Training | Structured schedule | Current venue/time/contact |
| `/cheerleading/juniors-dragonfire/news/` | Team news | Merge into news | Archive policy |
| `/cheerleading/peewees-dragonsparks/team/` | Children's team | Keep as team | Safeguarding, media and contacts |
| `/cheerleading/peewees-dragonsparks/training/` | Training | Structured schedule | Public personal/Gmail contact |
| `/cheerleading/unisport/` | University sport | Keep if current | University relationship |
| `/cheerleading/rent-us/` | Booking information | Keep if approved | Contact route and event terms |
| `/tanzen/` | Children's dance | Keep as activity/group | Page contains a recruitment notice dated for 2025 |
| `/inklusion/` | Tübingen United | Keep as department/cooperation | Partners, named staff, donations |
| `/lauftreff/` | Open running/Nordic walking | Keep as activity | Contact and current schedule |
| `/kindersport/` | Children's sport | Keep as activity/group | Schedule, contact, image consent |
| `/derclub/mitglied-werden/` | Membership and cancellation | Keep under `/verein/` | Deadlines, current forms and rules |
| `/derclub/vereinsheim/` | Clubhouse rental | Keep under `/verein/` | Conflicting contracts/prices |
| `/ansprechpartner/` | Role-based contact list | Keep and centralize | Add Kindersport if applicable |
| `/kontakt/` | Address and contact form | Simplify | Decide on form provider |
| `/kontakt/anfahrt/` | Directions and OSM map | Keep | Privacy-preserving map approach |
| `/impressum/` | Legal notice | Keep | Mandatory legal review |
| `/datenschutz/` | Privacy statement | Keep | Rewrite for new services, then review |

## Known documents

| Current asset | Category | Preliminary disposition | Key review |
| --- | --- | --- | --- |
| `/fileadmin/user_upload/Club_allgemein/Satzung_SSC.pdf` | Statutes | Keep latest approved version | Approval date/version |
| `/fileadmin/user_upload/Club_allgemein/Ordnungen/Beitragsordnung.pdf` | Contribution rules | Replace with current approved version | Search copy says 2025; external Red Knights page says 2026 |
| `/fileadmin/user_upload/Club_allgemein/Mitgliedsantrag_SSC_Tübingen_2023.pdf` | Membership | Replace or reconfirm | Old filename/year; contains personal-data fields |
| Privacy rules linked from membership page | Privacy | Keep latest approved version | Exact asset path and date unavailable |
| `/fileadmin/user_upload/Club_allgemein/Vereinsheim/Mietvertrag_Vereinsheim.pdf` | Rental | Do not migrate until reconciled | Search copy indicates 250 EUR/day |
| `/fileadmin/user_upload/Club_allgemein/Mietvertrag_Vereinsheim_HP.pdf` | Rental | Likely obsolete duplicate | Search copy indicates older terms and 2014 placeholders |

Files containing blank forms may be public downloads, but completed forms must
never be committed to the repository.

## Known integrations and external destinations

| Integration | Current evidence | Recommended discovery direction |
| --- | --- | --- |
| OpenStreetMap | `Simple OSM` / `ODS_OSM` on directions page | Prefer static map image plus link, or consent-free implementation after privacy review |
| Contact form | Contact navigation exposes a form | Prefer role-address links unless spam/privacy requirements justify an external form service |
| Football results/tables | `fussball.de` links/iframe | Prefer external links; evaluate embed consent/accessibility |
| Volleyball results | `VLW` links | Prefer external links |
| American Football | `red-knights.de` | Treat as authoritative departmental destination if the club confirms |
| Social media | Facebook and Instagram references | Prefer links; avoid feeds by default |
| University sport | University of Tübingen link | Preserve as external link if current |
| Sponsors | Multiple department-specific lists/logos | Structured records with rights and validity dates |

## Inventory fields for the complete crawl

Each row in the final machine-readable inventory should contain: current URL,
HTTP status, canonical URL, title, content type, parent section, owner, last
known update, keep/update/merge/archive decision, destination URL, redirect
requirement, document/media dependencies, personal-data flag, rights flag and
review notes.

