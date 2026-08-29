# Proposed content model

The model is intentionally structured. Editors should use German-labelled
forms in Pages CMS and should not need to see YAML or Markdown source.

## News

- Title (required)
- Slug (generated/safe)
- Publication date (required)
- Expiration date (optional)
- Summary (required)
- Body (rich text, source switch hidden)
- Lead image and required alternative text
- Related department/activity (reference)
- Related teams (references)
- Homepage feature toggle
- Status: draft, published, archived
- Original URL (migration metadata, administrator-facing)

Expired news should disappear from homepage promotion, not be deleted from the
archive automatically.

## Departments and activities

- Name, slug and type (`department`, `activity`, `cooperation`)
- Short introduction and full description
- Lead image and alternative text
- Primary role-based contact reference
- Teams/groups references
- Schedule references
- External links
- Sponsor references
- Navigation order and visibility

This shared type accommodates Lauftreff, Kindersport and Tübingen United without
forcing them into an inaccurate organizational category.

## Teams and groups

- Name, slug and parent department/activity
- Age group and optional gender/category
- Description
- Training-session references
- Role-based contact reference
- Optional public contact person
- Team photograph and alternative text
- External results/table links
- Active-from and active-until season/date
- Publication status

## Training sessions

- Team/group reference
- Day of week
- Start and end time
- Venue reference
- Seasonal validity (`valid_from`, `valid_until`)
- School-holiday exception
- Free-form exception note
- Contact reference

Schedules should be separate records so the same session can appear on team,
department and consolidated schedule pages.

## Contacts

- Internal identifier
- Public label/role
- Role-based email address
- Optional public name
- Optional telephone number (off by default)
- Related department/team
- Publication consent/review date
- Active flag

Pages should reference contact records instead of duplicating names or email
addresses.

## Venues

- Name
- Postal address
- Accessible-arrival notes
- Latitude/longitude only when needed for map links
- Public-transport, bicycle and parking notes
- External map link

## Documents

- Title and slug
- Category
- Date/version
- File
- Description
- Owning club role
- Supersedes document reference
- Public flag
- Review date

Deletion should be disabled for ordinary document editors; replacement and
archiving are safer operations.

## Sponsors

- Name
- Logo and alternative text
- Website
- Related departments/teams
- Display level/order
- Valid from/until
- Rights/approval confirmed

## Site settings

- Club identity and address
- General role-based contacts
- Homepage introduction
- Urgent announcement and expiry
- Social links
- Footer and legal links
- Default metadata/social image

## Migration-only metadata

Keep original URL, source asset path, migration date and review status in
administrator-controlled fields. These fields support traceability and redirect
generation but should not clutter the volunteer editor interface.

