# BOSSO Website

The public website for the **Business of Sports Student Organization at UT Austin**, maintained as part of my work as Technical Director.

**[Visit txbosso.com](https://txbosso.com/)**

The site gives prospective members, partners, and students one place to find the organization's projects, newsletters, team, and recruitment information.

## What I built and maintain

- Responsive pages for the organization, leadership team, projects, and recruitment.
- A newsletter archive and individual article pages.
- Shared JavaScript header and footer components.
- Integration with Google Forms, Calendar, and Apps Script for organization workflows.
- Search metadata, a sitemap, and a custom domain for the GitHub Pages deployment.

The website showcases work by BOSSO members and project teams; those projects and their findings belong to their credited contributors.

## Stack

HTML, CSS, vanilla JavaScript, and GitHub Pages. The site uses Google services for forms and calendar embeds rather than a custom application backend.

## Preview locally

```bash
git clone https://github.com/riddhimayadav/TSAG.git
cd TSAG
python3 -m http.server 8000
```

Open [localhost:8000](http://localhost:8000). Use the local server so JavaScript components and relative assets load consistently.

## Repository layout

```text
index.html          Homepage
newsletter.html     Newsletter hub
pages/              About, recruitment, articles, newsletters, and projects
assets/images/      Organization photos, logos, and illustrations
assets/js/          Shared navigation and footer components
docs/               Maintenance notes and content guidance
```

## Maintenance

The custom domain is configured by `CNAME`. After changing public pages, check navigation, image paths, mobile layouts, and relevant sitemap entries. Contributor guidance is in [docs/README.md](docs/README.md).

The separate **[BOSSO member portal](https://github.com/utbosso/bosso-portal)** handles authenticated member and administrative workflows.
