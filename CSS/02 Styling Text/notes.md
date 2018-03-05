## 2. Styling Text

- CSS properties used to style text generally fall into two categories
  - Font styles: affect the font that is applied to the text
  - Text layout styles: paragraph styles
  - Substrings can be styled and selected only by wrapping them in an appropriate element(e.g. `<span>` or `<strong>`, etc.) or by use of a text-specific pseudo-element like `::first-letter`, `::first-line`, `::selection`, etc.

- Fonts
  - `color`: Sets the color of the foreground content of the selected elements: i.e. usually the text, but can also include a couple of other things.
  - `font-family`: The browser will apply a font if it is available on the machine running the browser. If not, it will just use its default font.
  - Web safe fonts
    - A certain number of fonts that are generally available across all systems
    - cssfontstack.com[https://cssfontstack.com] maintains a list of web safe fonts
  - Default fonts
    - `serif`, `sans-serif`, `monospace`, `cursive`, and `fantasy`
  - Font stacks
    - A list of font names separated by commas.
    - Font names are checked from the front of list. If no available font exists, the browser moves onto the next font.
    - Font names consisting of more than one word should be surrounded by quotes.
  - Units
    - `px`: Absolute unit. The height in pixels.
    - `em`: relative unit. `1em` is equal to the size of the width of the letter "M" set on the parent element of the current element that is being styled.
    - `rem`: `1rem` is equal to the font size set on the root element of the document; i.e. `<html>`
    - The default font size of the root element `<html>` is `16px`. 
  
  - Best practice
    - Use `rem`s whenever possible and avoid setting the font-size of container elements where possible.
    - Setting the `font-size` of the document to `10px` makes math easy for child elements.
    - List all `font-size` rulesets in one place, so it is easy to maintain them.

  - `font-style`: Toggle italic text.
    - `normal`: Turns italics off.
    - `italic`: Sets text to use the italic version if available. If not, it will simulate italics with oblique.
    - `oblique`: Sets text to use a simulated version of an italic font, created by slanting the normal version.
  - `font-weight`
    - `normal`, `bold`
    - `lighter`, `bolder`: Sets the current element's boldness to be one step lighter or heavier than its parent element's boldness.
    - `100`-`900`: Numeric boldness values.
  - `text-transform`
    - `none`
    - `uppercase`, `lowercase`
    - `capitalize`
    - `full-width`: Transforms all glyphs to be written inside a fixed-width square. Allows aligning of e.g. latin characters with asian language glyphs.
  - `text-decoration`
    - `none`: Unsets any text decorations already present
    - `underline`, `overline`
    - `line-through`
    - Can apply mutliple decorations simultaneously.
    - `text-decoration` is a shorthand property for `text-decoration-line`, `text-decoration-style`, and `text-decoration-color`.

  - `text-shadow`
    
    ```
    text-shadow: 4px 4px 5px red;
    ```

    - 1st property: Required. The horizontal offset of the shadow from the original text. Usually in `px`.
    - 2nd property: Required. The vertical offset of the shadow from the original text.
    - 3rd property: The blur radius.
    - 4th property: The base color of the shadow. Defaults to `black`.

- Text layout
  - `text-align`
    - `left`, `right`, `center`, `justify`
  - `line-height`
    - Can take most length and size units, but the unitless value is considered the best option. The value is multiplied to the `font-size`.
  - `letter-spacing`, `word-spacing`

- Font shorthand
  - Font properties can be set using the short hand property `font`, with the values in the order: `font-style`, `font-variant`, `font-weight`, `font-stretch`, `font-size`, `line-height`, and `font-family`.
  - Only `font-size` and `font-family` are required.
  - A slash has to be put in between the `font-size` and `line-height` properties.

    ```
    font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
    ```
### Styling Lists
- List-specific styles
  - `list-style-type`: Sets the type of bullets to use.
  - `list-style-position`: Sets whether the bullets appear inside the list items, or outside them before the start of each item.
  - `list-style-image`: A custom image can be used for the bullet. However, using the `background` family of properties allows for finer control of position, size, etc.
  - The three properties above can be set an once using the `list-style` shorthand property.

  - Using `background` on list items
    - When using the `background` property on list items, some modification is needed since bullets were originally set on the list itself, not individual list items. This means merely setting `list-style-type: none` removes the bullets but doesn't provide space for the background image of list item. Each list item will need to ensure that it has some padding for the background image to appear, and the padding of the parent list will need to reduce *its* padding to accommodate for the list item padding space.
    - `background-image`: References the path to the image file to be used
    - `background-position`: Origin is top-left. `px`, `%`, etc. can be used.

- Controlling ordered list counting
  - `ol` `start` attribute: Sets the number that begins the list item
  - `ol` `reversed` attribute
  - `li` `value` attribute: Individual items can have a custom set value. The following items whose `value` attribute is not set will increment the value of the list item above by 1.