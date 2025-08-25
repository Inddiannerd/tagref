# CSS Styling Plan

## Design Principles
- Minimal custom CSS (~200 lines)
- System fonts for better performance
- Light gray borders for subtle separation
- Subtle shadows for depth
- Visible focus outlines for accessibility
- Responsive grid with flexbox/grid
- Dark mode via prefers-color-scheme

## Color Palette
- Primary: #007acc (for links and interactive elements)
- Background: #ffffff (light mode) / #1a1a1a (dark mode)
- Text: #333333 (light mode) / #e0e0e0 (dark mode)
- Borders: #e0e0e0 (light mode) / #444444 (dark mode)
- Focus outline: #007acc
- Tag category badges: #e6f7ff with #1890ff text (light mode) / #172d44 with #64b5f6 text (dark mode)

## Typography
- System fonts: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
- Tag names: Monospace font stack: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace

## Layout Structure
- Main container with max-width for large screens
- Responsive grid for tag cards (1 column on mobile, 2 on tablet, 3 on desktop)
- Header section with search and filters
- Main content area for tag cards
- Footer with additional information

## Component Styles

### SearchBar
- Full-width input with padding and rounded corners
- Focus state with border color change
- Clear button for resetting search

### CategoryFilter
- Horizontal layout of checkboxes
- Scrollable container for smaller screens
- "All" option styled differently
- Checkbox custom styling for better appearance

### AZJump
- Horizontal strip of letters
- Each letter as a button/link
- Active state for current letter
- Disabled state for letters with no tags

### TagCard
- Card layout with border and shadow
- Header with tag name in monospace
- Description text with proper line height
- Category badges in a horizontal row
- Hover state for interactivity

### TagDrawer
- Side drawer for desktop (slides in from right)
- Full-screen modal for mobile
- Overlay background with semi-transparency
- Header with close button
- Scrollable content area
- Footer with action buttons

## Responsive Breakpoints
- Mobile: 0px - 768px
- Tablet: 769px - 1024px
- Desktop: 1025px+

## Dark Mode Implementation
- Use CSS media query: @media (prefers-color-scheme: dark)
- Define color variables for both light and dark modes
- Ensure proper contrast ratios for accessibility
- Test all components in both color schemes

## Accessibility Features
- Focus outlines for all interactive elements
- Proper contrast ratios (minimum 4.5:1 for normal text)
- Semantic HTML elements
- ARIA attributes where needed
- Keyboard navigation support
</content>