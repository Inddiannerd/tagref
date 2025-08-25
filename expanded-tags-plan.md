# Expanded HTML Tags Dataset Plan

## Current Categories
Based on the existing tags.json file, the current categories are:
- Content
- Forms
- Media
- Metadata
- Table
- Text
- Interactive
- Scripting
- Deprecated

## New Categories to Add
- Structure (for structural elements like html, head, body, etc.)
- Obsolete (for completely obsolete elements)

## HTML5 Tags to Include

### Structural Tags
- html
- head
- body
- title
- base
- link
- meta
- style

### Content Sectioning Tags
- header
- footer
- nav
- main
- section
- article
- aside
- address

### Text Content Tags
- h1, h2, h3, h4, h5, h6
- p
- hr
- pre
- blockquote
- ol
- ul
- li
- dl
- dt
- dd
- figure
- figcaption

### Inline Text Tags
- a
- em
- strong
- small
- s
- cite
- q
- dfn
- abbr
- ruby
- rt
- rp
- data
- time
- code
- var
- samp
- kbd
- sub
- sup
- i
- b
- u
- mark
- bdi
- bdo
- span
- br
- wbr

### Image and Media Tags
- img
- iframe
- embed
- object
- param
- video
- audio
- source
- track
- canvas
- map
- area
- picture

### Table Tags
- table
- caption
- colgroup
- col
- tbody
- thead
- tfoot
- tr
- td
- th

### Form Tags
- form
- label
- input
- button
- select
- datalist
- optgroup
- option
- textarea
- keygen
- output
- progress
- meter
- fieldset
- legend

### Interactive Tags
- details
- dialog
- summary
- menu
- menuitem

### Scripting Tags
- script
- noscript
- template
- canvas
- slot

### Metadata Tags
- meta
- base
- title
- link
- style

### Deprecated/Obsolete Tags
- center
- font
- marquee
- big
- tt
- u
- strike
- frame
- frameset
- noframes

## Implementation Approach
1. Create a comprehensive list of all HTML5 tags organized by category
2. Maintain the exact same JSON structure as the current tags.json
3. Ensure each tag has:
   - Name
   - Categories (using existing categories where possible)
   - Description
   - Attributes (2-3 key attributes for each tag)
   - Example
   - MDN link
   - Notes (especially for deprecated/obsolete tags)
4. Preserve all existing tags and their data
5. Add new tags in alphabetical order
</content>