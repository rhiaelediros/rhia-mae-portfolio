# Rhia Mae C. Elediros — Digital Portfolio

A responsive student portfolio built with plain HTML, CSS, and JavaScript. No framework or build step is required.

## Folder structure

```text
rhia-mae-portfolio/
├── index.html
├── about.html
├── projects.html
├── experience.html
├── documents.html
├── style.css
├── script.js
├── assets/
└── documents/
    ├── activities.html
    ├── quizzes.html
    ├── exams.html
    └── projects.html
```

## How to edit

1. Open the folder in Visual Studio Code.
2. Replace the Home-page photo placeholder with your own image.
   - Recommended: put your photo in `assets/profile.jpg`.
   - In `index.html`, replace the `.photo-placeholder` div with:
     `<img class="profile-photo" src="assets/profile.jpg" alt="Rhia Mae C. Elediros">`
3. Edit the About, Experience, and Projects pages.
4. In `about.html`, replace the GitHub, LinkedIn, and Gmail placeholders.
5. In `documents.html`, change each document card's `href` to the GitHub file you uploaded.
6. Add more document cards by copying an existing `.doc-card`.
7. Commit and push the folder to GitHub.

## GitHub Pages

For a repository such as `rhia-mae-portfolio`, push these files to the default branch, then enable:

Settings → Pages → Deploy from a branch → your default branch → `/ (root)`

Because this portfolio uses only relative paths, it works well on GitHub Pages.

## Adding a PDF

If a PDF is inside your repository, for example:

`documents/activities/activity-01.pdf`

use:

```html
<a class="doc-card" data-category="activities" href="documents/activities/activity-01.pdf" target="_blank">
```

The same approach works for PDF, PPTX, DOCX, and other files that the browser/GitHub can serve.

## Design

Theme: black / charcoal with yellow-orange gradient accents.

The active navigation item is automatically highlighted based on the current page. The Documents page also has category filters.
