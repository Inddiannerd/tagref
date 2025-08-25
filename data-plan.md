# Data Structure Plan

## Tags.json Structure

The data file will contain an array of tag objects with the following properties:

```json
[
  {
    "name": "string",           // HTML tag name
    "categories": ["string"],   // Array of category names
    "description": "string",    // Short description of the tag
    "attributes": [             // Array of attribute objects
      {
        "name": "string",       // Attribute name
        "type": "string",       // Data type (URL, string, boolean, etc.)
        "required": boolean,    // Whether the attribute is required
        "description": "string" // Description of the attribute
      }
    ],
    "example": "string",        // Example HTML code snippet
    "mdn": "url",               // Link to MDN documentation
    "notes": "string"           // Additional notes (accessibility, deprecation, etc.)
  }
]
```

## Categories

The following categories will be used:
- Content
- Forms
- Media
- Metadata
- Table
- Text
- Interactive
- Scripting
- Deprecated
- Obsolete

## Sample Data

We'll include several HTML tags as examples:
- a (anchor tag)
- img (image tag)
- div (content division)
- form (form element)
- input (form input)
- table (table element)
- h1-h6 (heading elements)
- p (paragraph)
- script (scripting element)
- meta (metadata element)
- audio (media element)
- button (interactive element)
- center (deprecated element)
</content>