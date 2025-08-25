# Component Implementation Plan

## Component Hierarchy
```
App.jsx
├── SearchBar.jsx
├── CategoryFilter.jsx
├── AZJump.jsx
├── TagCard.jsx (repeated for each tag)
└── TagDrawer.jsx (conditionally rendered)
```

## State Management Plan

### App.jsx State
```javascript
const [tags, setTags] = useState([]);           // All tags from JSON
const [filteredTags, setFilteredTags] = useState([]); // Tags after filtering
const [searchTerm, setSearchTerm] = useState('');     // Current search term
const [selectedCategories, setSelectedCategories] = useState([]); // Selected categories
const [selectedTag, setSelectedTag] = useState(null); // Currently selected tag for drawer
const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Drawer open state
```

## Component Details

### 1. SearchBar.jsx
**Props:**
- `onSearchChange`: Function to handle search term changes

**Features:**
- Debounce input by 200ms using useEffect
- Case-insensitive search
- Highlight matching text in results (handled at TagCard level)

### 2. CategoryFilter.jsx
**Props:**
- `categories`: Array of all available categories
- `selectedCategories`: Array of currently selected categories
- `onCategoryChange`: Function to handle category selection changes

**Features:**
- Display checkboxes for each category
- "All" option to select/deselect all categories
- Multi-select functionality

### 3. AZJump.jsx
**Props:**
- `tags`: Array of all tags (to determine which letters are available)

**Features:**
- Horizontal strip of A-Z letters
- Only show letters that have corresponding tags
- Clicking scrolls to first tag starting with that letter

### 4. TagCard.jsx
**Props:**
- `tag`: Tag object to display
- `searchTerm`: Current search term for highlighting

**Features:**
- Display tag name in monospace font
- Show short description
- Display categories as badges/tags
- Highlight matching text based on search term
- Click handler to open detailed drawer

### 5. TagDrawer.jsx
**Props:**
- `tag`: Tag object to display details for
- `isOpen`: Boolean for drawer visibility
- `onClose`: Function to close the drawer

**Features:**
- Full description display
- Attributes table with name, type, required status, and description
- Example code with copy button
- Live preview for safe tags only
- Link to MDN documentation
- Notes display (accessibility, deprecation)
- Responsive design (side drawer for desktop, modal for mobile)
- Accessibility features:
  - role="dialog"
  - aria-modal="true"
  - ESC key closes drawer
  - Logical tab order
  - Visible focus styles

## Data Flow

1. App loads tags.json data into state
2. SearchBar updates searchTerm state with debounce
3. CategoryFilter updates selectedCategories state
4. App filters tags based on searchTerm and selectedCategories
5. AZJump provides navigation to tags by first letter
6. TagCard displays filtered tags and opens TagDrawer on click
7. TagDrawer shows detailed information for selected tag

## Filtering Logic

Tags are filtered based on:
1. Search term matching (name, description, categories)
2. Selected categories (tag must have at least one matching category)

## Highlighting Logic

Text highlighting in TagCard:
- Apply highlighting to tag name, description, and categories
- Case-insensitive matching
- Highlight all occurrences of search term
</content>