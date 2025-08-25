# HTML Tag Reference Page

A comprehensive reference tool for HTML tags with search, filtering, and detailed information.

## Features

- **Search**: Search tags by name, description, or category with debounced input (200ms)
- **Filtering**: Filter by multiple categories with multi-select checkboxes
- **Navigation**: A-Z quick navigation to jump to tags by first letter
- **Tag Cards**: Visual display of tag information with highlighted search terms
- **Detailed View**: Comprehensive tag information with examples in a drawer/modal
- **Copy Functionality**: One-click copying of code snippets and tag names
- **Live Preview**: Safe rendering of HTML examples
- **Responsive Design**: Adapts to mobile, tablet, and desktop screens
- **Dark Mode**: Automatic dark/light mode based on system preference
- **Accessibility**: Full keyboard navigation and screen reader support

## Tech Stack

- ReactJS (JavaScript, no TypeScript)
- Custom CSS (no frameworks)
- React hooks for state management

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd html-tag-reference
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
/
  index.html
  package.json
  README.md
  vite.config.js
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

## Data

Tag information is stored in `src/data/tags.json`. To add new tags, follow the existing structure:

```json
{
  "name": "tagname",
  "categories": ["Category1", "Category2"],
  "description": "Brief description of the tag",
  "attributes": [
    {
      "name": "attribute-name",
      "type": "string/boolean/number/URL",
      "required": true/false,
      "description": "Description of the attribute"
    }
  ],
  "example": "<tagname>Example content</tagname>",
  "mdn": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tagname",
  "notes": "Additional notes about the tag"
}
```

## Styling

The app uses custom CSS with dark mode support via `prefers-color-scheme`. Styles are in `styles/styles.css` and include:

- CSS variables for consistent theming
- Responsive grid layout
- Accessible focus states
- Mobile-friendly design

## Accessibility

- Semantic HTML elements
- Keyboard navigation support
- Focus management
- ARIA attributes for dynamic content
- Proper contrast ratios for text
- Screen reader compatibility

## Responsive Design

- Single column layout on mobile
- Two column layout on tablet
- Three column layout on desktop
- Drawer becomes modal on mobile screens
- Flexible grid system that adapts to screen size

## Development

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### Component Structure

- `App.jsx`: Main application component that orchestrates all other components
- `SearchBar.jsx`: Implements debounced search functionality
- `CategoryFilter.jsx`: Multi-select category filtering
- `AZJump.jsx`: A-Z navigation component
- `TagCard.jsx`: Visual representation of each tag
- `TagDrawer.jsx`: Detailed view of tag information

## License

This project is licensed under the MIT License.
</content>