# Local Website Change Log

This file tracks local-only edits for review and approval. Changes are not pushed or deployed unless explicitly approved later.

## August 19, 2026

### Homepage constitution update

- Updated the mission statement to specify BOSSO's five key pillars.
- Revised the Consulting, Education, and Media pillar descriptions.
- Updated “industry titans” to “industry leaders” in BOSS Leaders Lectures.
- Added the new fifth pillar, Philanthropy.
- Kept the Vision Statement off the public website because it is for internal use only.
- Updated homepage SEO, Open Graph, Twitter, and structured-data descriptions to include Philanthropy.

Files changed:

- `index.html`
- `docs/LOCAL_CHANGELOG.md`

### About and Sponsor page alignment

- Updated the About overview to represent Consulting, Research, Education, Media, and Philanthropy.
- Updated About page SEO, social metadata, and structured data to reflect all five pillars.
- Updated the Sponsor page partnership narrative to explain opportunities across all five pillars.
- Expanded “Ways to Make an Impact” to include media collaboration, community service, mentorship, and philanthropy.
- Updated Sponsor page SEO, social metadata, and structured data while retaining the existing member statistics.

Files changed:

- `pages/about.html`
- `pages/contact.html`
- `docs/LOCAL_CHANGELOG.md`

### Fall 2026 recruitment activation

- Updated the application page from Spring 2026 to Fall 2026.
- Kept the existing interest form link and Google Calendar embed unchanged.
- Replaced the active application link with a disabled control stating that applications open August 28.
- Updated the application deadline to Wednesday, September 9, 2026, at 10:00 PM.
- Temporarily changed shared header and footer “Join Us” links to the application page for recruitment season.
- Updated recruitment SEO, social metadata, and structured data for Fall 2026.

Files changed:

- `pages/joinus_app.html`
- `assets/js/header-component.js`
- `assets/js/footer-component.js`
- `docs/LOCAL_CHANGELOG.md`

### Board approval documentation

- Created a non-technical board approval packet summarizing all proposed local website changes.
- Included a local screenshot of the Fall 2026 recruitment page.
- Added exact public-copy examples and approve/revise checkboxes.
- Added the outstanding Portfolio, article, Vision Statement, calendar, application-requirement, interest-form, and application-link checklist.
- Clarified that a newly updated Fall 2026 interest form and link are needed if BOSSO continues using an interest form this semester.

Files added:

- `docs/BOSSO_WEBSITE_BOARD_APPROVAL_PACKET.html`
- `docs/BOSSO_Website_Updates_Board_Approval.pdf`
- `docs/approval-assets/recruitment.png`

## August 20, 2026

### Board packet simplification

- Removed the cover and executive-summary pages so the packet begins with the homepage mission and pillars.
- Added a note that the Mission Statement and all pillar language were copied word-for-word from the updated mission document received.
- Removed About and Partnerships screenshots and all “Request revisions before deployment” prompts.
- Removed the internal SEO guide item and the final approval-record page.
- Reworded the calendar item to state that the public calendar needs to be updated with the upcoming events.
- Renumbered the remaining board checklist from 1 through 7.
- Removed the “BOSSO Website Approval Packet” footer label and “Board Clarifications” headings.

Files changed:

- `docs/BOSSO_WEBSITE_BOARD_APPROVAL_PACKET.html`
- `docs/BOSSO_Website_Updates_Board_Approval.pdf`
- `docs/LOCAL_CHANGELOG.md`

### Leadership roster draft

- Renamed the roster heading from “Directors” to “Leadership Team” so it accurately includes officers, directors, and senior advisors.
- Reordered Ricardo Vazquez to the first team position and retitled him President.
- Retitled Freya Laronga as Internal Vice President; retained Gurdas Kakar as External Vice President.
- Retitled Allison Chadwell as Media Director, Douglas Brito as Membership Director, and retained Riddhima Yadav as Technical Director.
- Positioned Riddhima Yadav and Douglas Brito immediately after the President and Vice Presidents in the leadership display order.
- Moved Harsh Patel and Ashish Basu to the end of the roster as Senior Advisors, with Ashish listed last.
- Added temporary profile cards for Angela (Consulting), Varun (Research), Matthew (Education), Preesha (Professional), Sam (Social), Jenna (Philanthropy), and Declan (Financial).
- Used “Photo Coming Soon” and “Information coming soon” placeholders until each new officer's full name, photo, LinkedIn link, major, year, favorite team, and career interest are received.
- Removed Alejandra Merodio, Davit Hakobyan, Anjali Bandi, and Lucia Olaechea from the displayed roster and page markup.
- Marked this roster as a local draft that should remain undeployed until the missing officer information is complete.

Files changed:

- `pages/about.html`
- `docs/LOCAL_CHANGELOG.md`

### Approval artifact cleanup

- Removed the temporary board-approval HTML document, PDF, and recruitment screenshot assets after the approval-review process.
- Preserved this local change log and all local website edits.

Files removed:

- `docs/BOSSO_WEBSITE_BOARD_APPROVAL_PACKET.html`
- `docs/BOSSO_Website_Updates_Board_Approval.pdf`
- `docs/approval-assets/recruitment.png`
- `docs/approval-assets/`

### Where We Work expansion and leadership order

- Moved Gurdas Kakar ahead of Freya Laronga in the leadership display order.
- Removed Robinhood from the “Where We Work” carousel.
- Kept the existing DraftKings entry and did not add a duplicate.
- Added Inner Market Media, LLC, PepsiCo, American Express, AWS, Baltimore Ravens, Carnegie Mellon University, Capital One, Bank of Hawaiʻi, The Center for Health Care Services, and BlackRock.
- Verified the organizations’ current public names online and corrected the Bexar County entry to “The Center for Health Care Services.”
- Added locally stored logo files for all ten organizations and replaced the temporary text-logo cards.
- Retained accessible text placeholders in the carousel renderer as a fallback for any future organization added without an image file.

Files changed:

- `pages/about.html`
- `assets/images/logos/inner-market-media.webp`
- `assets/images/logos/pepsico.svg`
- `assets/images/logos/american-express.svg`
- `assets/images/logos/aws.svg`
- `assets/images/logos/baltimore-ravens.svg`
- `assets/images/logos/carnegie-mellon.png`
- `assets/images/logos/capital-one.svg`
- `assets/images/logos/bank-of-hawaii.svg`
- `assets/images/logos/center-health-care-services.png`
- `assets/images/logos/blackrock.svg`
- `docs/LOCAL_CHANGELOG.md`

### Where We Work carousel refinements

- Replaced the PepsiCo logo with a current navy wordmark so its card uses the same white background as the other organizations.
- Reduced the AWS logo scale for better visual balance with the surrounding logos.
- Recalculated the carousel loop boundary from the actual rendered position of the first cloned card, eliminating the visible jump caused by a fixed-width estimate.
- Switched the movement transform to hardware-accelerated `translate3d` rendering.
- Removed the mouse hover listeners so the carousel continues moving while hovered.

Files changed:

- `pages/about.html`
- `assets/images/logos/pepsico.svg`
- `docs/LOCAL_CHANGELOG.md`

File removed:

- `assets/images/logos/pepsico.png`

### Homepage Vision Statement

- Added the approved Vision Statement to the homepage after the five pillars.
- Styled it as a distinct dark closing card with a burnt-orange accent while leaving the broader mission-and-pillars layout unchanged pending a design decision.

Files changed:

- `index.html`
- `docs/LOCAL_CHANGELOG.md`

### Homepage design previews

- Created three separate, local-only homepage concepts for design review:
  - Concept A: Purpose + Impact Grid
  - Concept B: Editorial Manifesto
  - Concept C: Sports Playbook
- Added a comparison page linking all three concepts and the current homepage baseline.
- Kept the current `index.html` unchanged while the concepts are reviewed.

Files added:

- `design-previews/index.html`
- `design-previews/homepage-concept-a.html`
- `design-previews/homepage-concept-b.html`
- `design-previews/homepage-concept-c.html`

File changed:

- `docs/LOCAL_CHANGELOG.md`

### Homepage Concept A implementation

- Applied the selected Purpose + Impact Grid direction to the local homepage.
- Redesigned only the homepage hero image area and the content sections beneath it.
- Grouped the Mission and Vision Statements into a unified purpose section.
- Reorganized the five pillars into a responsive two-column grid, with Education spanning the full width for its two programs.
- Added a short closing statement between the pillar grid and the existing footer.
- Left the shared header and footer components unchanged.

Files changed:

- `index.html`
- `docs/LOCAL_CHANGELOG.md`

### Homepage hero refinements

- Shifted the hero image upward to show more of the crowd and field activity and less empty sky.
- Replaced the concept headline with “Business of Sports Student Organization.”
- Shortened the supporting line to “UT Austin’s premier sports analytics and business group.”

Files changed:

- `index.html`
- `docs/LOCAL_CHANGELOG.md`

### Homepage hero alignment

- Centered the UT Austin label, organization name, and supporting line horizontally and vertically within the hero image.
- Centered the orange accent at the bottom of the hero to align with the text group.

Files changed:

- `index.html`
- `docs/LOCAL_CHANGELOG.md`

### Mission and Vision layout refinement

- Replaced the uneven side-by-side Mission and Vision cards with two balanced horizontal statement cards.
- Reduced the Mission Statement text size and removed the oversized decorative “B” for better readability.
- Gave the longer Vision Statement the full content width instead of constraining it to a narrow column.
- Preserved the approved Mission and Vision wording and added a stacked mobile layout.

Files changed:

- `index.html`
- `docs/LOCAL_CHANGELOG.md`

### Homepage purpose copy cleanup

- Removed the “A shared direction. Real-world impact.” heading and its supporting sentence from above the statement cards.
- Changed the Mission Statement ending to “through our five pillars.” and removed the colon.

Files changed:

- `index.html`
- `docs/LOCAL_CHANGELOG.md`

### Homepage closing section removal

- Removed the orange closing section containing the organization name and “Building the future of sports business from Austin.”
- Left the existing shared footer unchanged.

Files changed:

- `index.html`
- `docs/LOCAL_CHANGELOG.md`

### Homepage section spacing

- Reduced the empty space between the hero image and the Mission Statement.
- Tightened the combined spacing between the Vision Statement and the “How We Work” section.
- Retained a smaller visual break so the purpose and pillar sections remain distinct.

Files changed:

- `index.html`
- `docs/LOCAL_CHANGELOG.md`

### Homepage spacing normalization

- Matched the visible spacing between the hero and Mission Statement with the spacing between the Vision Statement and “How We Work.”
- Split the middle spacing evenly between the adjoining purpose and pillar sections.
- Applied equivalent spacing after the pillar grid for a consistent vertical rhythm.

Files changed:

- `index.html`
- `docs/LOCAL_CHANGELOG.md`

### Purpose section bottom padding

- Increased the space below the Vision Statement card before the following section.
- Left the internal Mission and Vision card padding unchanged.

Files changed:

- `index.html`
- `docs/LOCAL_CHANGELOG.md`

### Pillar heading spacing

- Increased the spacing between the “Five pillars. One organization.” heading and the pillar card grid.

Files changed:

- `index.html`
- `docs/LOCAL_CHANGELOG.md`

### How We Work top padding

- Increased the white space between the preceding beige purpose section and the “How We Work” label.
- Kept the spacing between the pillar heading and card grid unchanged.

Files changed:

- `index.html`
- `docs/LOCAL_CHANGELOG.md`

### Pillar section ending spacing

- Added compensating bottom padding to the pillar section for the existing footer’s 60px overlap.
- Matched the visible white space after the pillar cards to the white space above “How We Work.”
- Left the shared footer component unchanged.

Files changed:

- `index.html`
- `docs/LOCAL_CHANGELOG.md`

### Mobile hero crop

- Shortened the homepage hero image section on mobile to a responsive 500–560px height.
- Reduced the mobile hero’s vertical padding and adjusted its focal point to retain more field and crowd activity.
- Left the desktop hero unchanged.

Files changed:

- `index.html`
- `docs/LOCAL_CHANGELOG.md`

### About page journey section visibility

- Temporarily hid the entire “Our Journey / Events” milestone section from the About page.
- Preserved its content in the code so it can be restored later without recreating it.
- Left the surrounding About page sections unchanged.

Files changed:

- `pages/about.html`
- `docs/LOCAL_CHANGELOG.md`

### Varun Ramanathan leadership profile

- Replaced Varun’s placeholder card with his full name and supplied profile information.
- Added his Research Director role, Statistics and Data Science/Plan II major, 2027 class year, San Antonio Spurs favorite team, and Football Analytics career interest.
- Added his LinkedIn profile and a web-optimized portrait crop from the supplied photo.

Files added:

- `assets/images/team/varun.JPG`

Files changed:

- `pages/about.html`
- `docs/LOCAL_CHANGELOG.md`

### Varun Ramanathan portrait framing

- Reframed Varun’s portrait so he appears farther from the camera and slightly lower in the team-card image.
- Preserved the earlier crop as a local fallback and updated the About page to use the revised portrait.

File added:

- `assets/images/team/varun-v2.JPG`

Files changed:

- `pages/about.html`
- `docs/LOCAL_CHANGELOG.md`

### Matthew Teinert leadership profile

- Replaced Matthew’s placeholder card with his full name and supplied profile information.
- Added his Education Director role, Finance major, Senior year, Texas Football favorite team, and Sports Investment Banking / Private Equity career interest.
- Added his LinkedIn profile and a web-optimized portrait crop from the supplied photo.

File added:

- `assets/images/team/matthew.JPG`

Files changed:

- `pages/about.html`
- `docs/LOCAL_CHANGELOG.md`

### Matthew Teinert portrait framing

- Reframed Matthew’s portrait so he appears farther from the camera and slightly lower in the team-card image.
- Preserved the earlier crop as a local fallback and updated the About page to use the revised portrait.

File added:

- `assets/images/team/matthew-v2.JPG`

Files changed:

- `pages/about.html`
- `docs/LOCAL_CHANGELOG.md`

### Jenna Lau leadership profile

- Replaced Jenna’s placeholder card with her full name and supplied profile information.
- Added her Director of Philanthropy role, Economics major, Junior year, Dallas Cowboys favorite team, and Sports Analytics career interest.
- Added her LinkedIn profile and a web-optimized portrait crop from the supplied photo.

File added:

- `assets/images/team/jenna.JPG`

Files changed:

- `pages/about.html`
- `docs/LOCAL_CHANGELOG.md`

### Jenna Lau title and portrait framing

- Changed Jenna’s displayed title from “Director of Philanthropy” to “Philanthropy Director” to match the other director titles.
- Reframed her portrait so she appears farther from the camera and slightly lower in the team-card image.
- Preserved the earlier crop as a local fallback and updated the About page to use the revised portrait.

File added:

- `assets/images/team/jenna-v2.JPG`

Files changed:

- `pages/about.html`
- `docs/LOCAL_CHANGELOG.md`

### Jenna Lau portrait framing refinement

- Tightened Jenna’s portrait crop slightly while retaining her lower placement in the team-card image.
- Preserved the previous versions as local fallbacks and updated the About page to use the refined portrait.

File added:

- `assets/images/team/jenna-v3.JPG`

Files changed:

- `pages/about.html`
- `docs/LOCAL_CHANGELOG.md`

### Jenna Lau team-card positioning

- Shifted Jenna slightly lower within the displayed team-card crop without altering or regenerating her portrait.

Files changed:

- `pages/about.html`
- `docs/LOCAL_CHANGELOG.md`

### Matthew and Jenna original-photo crops

- Replaced Matthew’s and Jenna’s displayed portraits with fresh crops based solely on their newly reattached original photos.
- Limited processing to crop, resize, and web-format conversion, with no requested retouching, background extension, or appearance changes.
- Removed Jenna’s earlier custom image-positioning override so the new source crop uses the standard team-card positioning.
- Preserved the earlier portrait versions locally as fallbacks.

Files added:

- `assets/images/team/matthew-original-crop.JPG`
- `assets/images/team/jenna-original-crop.JPG`

Files changed:

- `pages/about.html`
- `docs/LOCAL_CHANGELOG.md`

### Matthew team-card positioning

- Shifted Matthew slightly lower within the displayed team-card crop using CSS only.
- Left the original-photo crop file unchanged.

Files changed:

- `pages/about.html`
- `docs/LOCAL_CHANGELOG.md`

### Jenna team-card positioning adjustment

- Shifted Jenna slightly higher within the displayed team-card crop using CSS only.
- Left the original-photo crop file unchanged.

Files changed:

- `pages/about.html`
- `docs/LOCAL_CHANGELOG.md`

### Declan O’Bryan leadership profile

- Replaced Declan’s placeholder card with his full name and supplied profile information.
- Added his Financial Director role, Business (Unspecified) major, Sophomore year, Los Angeles Chargers favorite team, and Sports Private Equity career interest.
- Added his LinkedIn profile and a web-formatted crop based solely on the supplied original photo.
- Limited portrait processing to crop, resize, and web-format conversion, with no requested retouching or appearance changes.

File added:

- `assets/images/team/declan-original-crop.JPG`

Files changed:

- `pages/about.html`
- `docs/LOCAL_CHANGELOG.md`

### Declan team-card positioning

- Shifted Declan slightly lower within the displayed team-card crop using CSS only.
- Left the original-photo crop file unchanged.

Files changed:

- `pages/about.html`
- `docs/LOCAL_CHANGELOG.md`

### Sam Ismailer leadership profile

- Replaced Sam’s placeholder card with his full name and supplied profile information.
- Added his Social Director role, Undecided Business and Sport Management major, Sophomore/Class of 2029 year, Golden State Warriors favorite team, and Sports Marketing career interest.
- Added his LinkedIn profile and a web-formatted crop based on the supplied photo.
- Cropped out the visible phone “Crop” control and the partial person on the right while requesting no retouching or appearance changes to Sam.

File added:

- `assets/images/team/sam-original-crop.JPG`

Files changed:

- `pages/about.html`
- `docs/LOCAL_CHANGELOG.md`

### Sam portrait proportion refinement

- Narrowed Sam’s visible shoulder and suit-jacket width very slightly for a more natural team-card proportion.
- Kept his face, head, expression, clothing details, background, and framing unchanged.
- Preserved the original crop as a local fallback and updated the About page to use the refined version.

File added:

- `assets/images/team/sam-v2.JPG`

Files changed:

- `pages/about.html`
- `docs/LOCAL_CHANGELOG.md`

### Sam portrait proportion midpoint

- Adjusted Sam’s shoulder and suit-jacket width to a midpoint between the original crop and the slimmer revision.
- Kept his face, head, expression, clothing details, background, and framing unchanged.
- Preserved both earlier versions as local fallbacks and updated the About page to use the midpoint version.

File added:

- `assets/images/team/sam-v3.JPG`

Files changed:

- `pages/about.html`
- `docs/LOCAL_CHANGELOG.md`

### Sam supplied portrait replacement

- Replaced the adjusted shoulder-width version with a crop based on the newly supplied portrait.
- Preserved the supplied shoulder proportions and kept both shoulder lines extending naturally through the image edges.
- Cropped the visible Canva interface badge outside the final image area without requesting any body-proportion changes.
- Preserved the earlier versions as local fallbacks.

File added:

- `assets/images/team/sam-v4.JPG`

Files changed:

- `pages/about.html`
- `docs/LOCAL_CHANGELOG.md`

### Where We Work: Snapback Sports

- Added Snapback Sports to the “Where We Work” carousel with no duplicate entry.
- Verified the current public company name and sourced the standalone logo from the company’s official website.
- Kept the logo on the carousel’s existing white card treatment for visual consistency.

File added:

- `assets/images/logos/snapback-sports.svg`

Files changed:

- `pages/about.html`
- `docs/LOCAL_CHANGELOG.md`

### Podcast count and Spotify link

- Updated the portfolio/media page podcast count from 2 episodes to 9 episodes.
- Replaced the “Listen to Podcast” link with the supplied Spotify show link.
- Updated the page’s podcast structured-data URL to the same Spotify show link so the visible and metadata destinations remain consistent.

Files changed:

- `newsletter.html`
- `docs/LOCAL_CHANGELOG.md`

### Recruitment interest form removal

- Removed the Fall 2026 interest-form widget, its Google Form link, and its unused responsive styling from the application-season recruitment page.
- Updated the project documentation so it no longer lists an interest-form integration.

Files changed:

- `pages/joinus_app.html`
- `docs/README.md`
- `docs/LOCAL_CHANGELOG.md`

### Partnerships hero spacing

- Increased the space between the shared header and the Partnerships page hero content.
- Raised the desktop top padding from 40px to 72px and the mobile top padding from 30px to 50px while preserving the existing side and bottom spacing.

Files changed:

- `pages/contact.html`
- `docs/LOCAL_CHANGELOG.md`

### Partnerships hero spacing refinement

- Added a little more space below the shared header after visual review.
- Increased the desktop top padding from 72px to 84px and the mobile top padding from 50px to 58px.

Files changed:

- `pages/contact.html`
- `docs/LOCAL_CHANGELOG.md`

### Mission statement text sizing

- Reduced the homepage mission-statement body text from `clamp(22px, 2.4vw, 32px)` to `clamp(19px, 1.9vw, 26px)` so it feels less visually dominant on desktop and mobile.
- Preserved the mission wording, card layout, weight, and surrounding spacing.

Files changed:

- `index.html`
- `docs/LOCAL_CHANGELOG.md`
