
# Udacity 1-10 landingpageproject

### This is one of my Udactiy One-10 Nanadegree projects (final).  

## Project Specifics/Requirements:

### Architecture: 
> The project should have a structure like the one shown below. All files shown must be present and the app must successfully render a home page with clear design and functionality added when index.html is loaded in the browser. No errors should display in console.


> ###### /css
> ###### /css/styles.css    

> ###### /index.html

> ###### /js
> ###### /js/app.js
> ###### README.md

### Usability: 
> - All features are usable across modern desktop, tablet, and phone browsers.
> - A Responsive layout of the landing page should be created to use across all devices.
> - Make sure that the navigation bar is responsive too across all these devices.
> - Responsiveness can be verified by inspecting the landing page using the Developer Tools option on Google Chrome Browser.

### Styling
 - Styling should be added for active states.
 - Set CSS class active state when the element is in the viewport.
 - The active section in the Navbar should be highlighted.

### HTML Structure

> There are at least 4 sections that have been added to the page.
>
## Landing Page Behavior

### Navigation
> Navigation is built dynamically as an unordered list. Start with empty ul and dynamically build navigation using Append, appendChild, and innerHTML.

### Section Active State

> It should be clear which section is being viewed while scrolling through the page.

> Tip: Detect the element location relative to the viewport using .getBoundingClientRect() built-in function

### Scroll to Anchor

> When clicking an item from the navigation menu, the link should scroll to the appropriate section.
You can use the following methods to fulfill this criterion:

> - Use addEventListener('click',....) to listen to the click event.
> - Use preventDefault() as if there is a default event occurring we need to stop that.
> - There are several javascript methods for scrolling, scroll(), scrollBy(), and scrollIntoView() are all acceptable.
> - A smooth scrolling behavior is expected in the project.

## Documentation

### README

> The ReadMe file should replace the given texts on the README template with specific information for this project. It doesn’t have to be thorough, but should have some basic information, eg. project description, usage, dependencies, and use correct the markdown syntax.

> **References**: markdown guide and example of README contents

### Comments

> Comments should be present at the beginning of each procedure and class.

> **Bonus**: Great to have comments before crucial code sections within the procedure.
Refer to Udacity JavaScript Style Guide - Comments for standard best practices.

### Code Quality

> Code should be formatted with consistent, logical, and easy-to-read formatting.

> **Tip**: Carefully follow the best practices mentioned in the Code formatting section of the guide.

Suggestions to Make Your Project Stand Out!

> See the "Suggested" items section in **Development Strategy** in the classroom.

> - Add an active state to your navigation items when a section is in the viewport.
> - Hide fixed navigation bar while not scrolling (it should still be present on page load).
> - **Hint**: setTimeout can be used to check when the user is no longer scrolling.
> - Add a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.
> - Update/change the design/content.
> - Make sections collapsible.
