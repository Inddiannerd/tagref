# HTML Tag Reference Page - Project Plan

## Project Overview
Build a production-ready HTML Tag Reference Page web app using ReactJS with the following features:
- Search functionality with debounced input
- Category filtering with multi-select
- A-Z quick navigation
- Tag cards with detailed drawer/modal view
- Responsive design for desktop and mobile
- Accessibility compliance

## File Structure
```
/
  index.html
  package.json
  README.md
  /src
    main.jsx
    App.jsx
    /components
      SearchBar.jsx
      CategoryFilter.jsx
      AZJump.jsx
      TagCard.jsx
      TagDrawer.jsx
    /data
      tags.json
  /styles
    styles.css
```

## Component Breakdown

### 1. SearchBar.jsx
- Implements debounced search (200ms)
- Searches by tag name, description, and categories
- Case-insensitive matching
- Highlights matching text in results

### 2. CategoryFilter.jsx
- Displays checkboxes for categories: Content, Forms, Media, Metadata, Table, Text, Interactive, Scripting, Deprecated, Obsolete
- Includes "All" option for selecting all categories
- Multi-select functionality

### 3. AZJump.jsx
- Horizontal strip of letters A-Z
- Clicking a letter scrolls to first tag starting with that letter

### 4. TagCard.jsx
- Displays tag name (monospace), short description, and categories
- Clickable to open detailed view

### 5. TagDrawer.jsx
- Detailed view of tag information:
  - Full description
  - Attributes table (name, type, required, description)
  - Example code with copy button
  - Live preview (safe tags only)
  - Link to MDN docs
  - Notes (accessibility, deprecation)
- Responsive: side drawer for desktop, modal for mobile
- Accessibility features (ESC key close, focus management)

## Data Model
tags.json will contain an array of tag objects with the following structure:
```json
{
  "name": "string",
  "categories": ["string"],
  "description": "string",
  "attributes": [
    {
      "name": "string",
      "type": "string",
      "required": boolean,
      "description": "string"
    }
  ],
  "example": "string",
  "mdn": "url",
  "notes": "string"
}
```

## Styling Approach
- Minimal custom CSS (~200 lines)
- System fonts
- Light gray borders, subtle shadows
- Visible focus outlines
- Responsive grid with flexbox/grid
- Dark mode via prefers-color-scheme

## Implementation Steps

1. Create project structure and basic files
2. Set up tags.json with sample data
3. Implement CSS styling with dark mode support
4. Create SearchBar component with debounced search
5. Create CategoryFilter component with multi-select
6. Create AZJump component for alphabetical navigation
7. Create TagCard component for displaying tag information
8. Create TagDrawer component for detailed view
9. Integrate all components in App.jsx with state management
10. Add responsive design and accessibility features
11. Create README with setup instructions

## Technical Requirements
- ReactJS (JavaScript, no TypeScript)
- React hooks (useState, useEffect, useMemo)
- Local JSON file for data source
- No external UI libraries (Tailwind, Bootstrap, etc.)
</content>