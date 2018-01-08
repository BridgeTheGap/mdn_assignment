# HTML

## 1. Intro

### Semantic Elements

- Semantic elements: `<em>` or `<strong>` do provide presentational modification, but their original role is to provide emphasis. For this reason, when using screen readers and other accessibility tools, the words will be read with more emphasis.
  - Since HTML tries to separate the presentation and semantics--keeping HTML mainly semantic and leaving the presentational properties to CSS--it's also not a good idea to use elements such as `<b>` or `<i>`, which introduce presentational modification into HTML.
  - Though HTML5 redefines `<b>`, `<i>`, or `<u>` elements, it doesn't bring too much value.
  - It is preferable to use `<span>` element with CSS to provide bold/italic presentation purely for visual purposes.
    - What does `<span>` do? It is a generic inline container that can be used to group elements for styling purposes. Functionally it is similar to `<div>`; the only difference is that `<div>` is a block-level element whereas `<span>` is an inline element.

### Hyperlinks

- `<a>` element
  - Since the `title` attribute will appear only to people who use a mouse, do not put too important information in the title. Rather extract it so people can see it in the page.

- Document fragments: It is possible to link to parts of an HTML document. This can be done by 
  1. assigning the `id` attribute to an element--usually headings, and
  2. in the `href` attribute specify the fragment like so: `<a href="#fragment">...</a>`.

- If the whole `<li>` element is enclosed in an `<a>` element, the bullet point will also act as a link.


- Link Text Best practices
  - "__Download Firefox__" vs "__Click here__ to download Firefox": Use descriptive names since screenreader users will jump from link to link out of context. If a link text says "Click here", the screenreader user will not know what "Click here" is linked to or what it is for. 
  - Do not include the URL in link text
  - Keep things short
  - Don't use the same link text that link to different places.
  - Use relative links wherever possible. This stops the browser from making unnecessary DNS requests.
  - When non-HTML resources are linked to, make it obvious by specifying the type, size, requirements, etc.
  - Use a download attribute to provide a default download name when linking to a download

### Advanced Text Formatting
  - Description lists `<dl>`
    - A dictionary like list where there is a title `<dt>` and the description `<dd>`
    - One `<dt>`element can have multiple `<dd>` elements
  - Quotation
    - Block quote `<blockquote>`: Wrap the block level content inside the `<blockquote>` element. Add the source of quote inside a `cite` attribute.
    - Inline quote `<q>`: Usage is the same as the `<blockquote>` element.
  - Abbreviation `<abbr>`
    - Using the `<abbr>` element with a `title` attribute shows the expansion when the mouse hovers over the element.
    - The `<acronym>`element serves the same purpose, but has not been widely used, since both elements provide identical formatting.
  - Contact details
    - This is intended to be used only for the author's contact info.
  - Others
    - Superscript/subscript: `<sup>` and `<sub>`
    - Code
      - `<code>`
      - In order to retain the whitespace for a fixed width text, wrap in `<pre>`.
      - Variable names: `<var>`
      - Keyboard input: `<kbd>`
      - Output of program: `<samp>`
    - Time: Allows an unambiguous, machine-readable time/date
      - Example: `<time datetime="2016-01-20">20 January 2016</time>`

### Documents
  - Semantic Elemnts
    - Although CSS can make most things look nice to the eye, assistive tools won't function well with messed up semantic structure.
    - Header: `<header>`
    - Navigation bar: `<nav>` Contains the main navigation functionality.
    - Main content: `<main>` To be used only once per page, directly inside `<body>`. Subsections include `<article>`, `<section>`, etc.
    - Sidebar: `<aside>` Often placed inside `<main>`. Can provide additional information indirectly related to the main content.
    - Footer: `<footer>`
  - Non-semantic Wrappers
    - In case some elements need CSS or JS, which aren't necessarily a semantic set of elements, use `<div>` or `<span>`, together with `class` attribute.
    - `<span>`: Inline non-semantic element.
    - `<div>`: Block level non-semantic element.
  - Line breaks and horizontal rules
    - `<br>`: Forces line break
    - `<hr>`: Horizontal line denoting a thematic change


## 2. Multimedia and embedding

### Images

  - `<img>` is an empty tag--i.e. it has no text content or closing tag--and requires at least one attribute `src` to be useful.
  - Use descriptive names for images. Search engines count them towards SEO (Search Engine Optimization).
  - Never point the `img` tag's `src` to an image on someone else's website unless given permission to do so. ("hotlinking")
  - `alt` attribute: An alternative text to be shown for situations where the images cannot be loaded.
    - Usage
      - For accessibility reasons
      - Browser may not support the image type
      - Search engines may match alt text to search queries
      - User has turned off images
    - Best practice
      - Decoration: If the image is for decoration, place it in CSS. Otherwise, use empty string for `alt`.
      - Content: If the image provides significant information, try to embed the information in the main text. Otherwise, provide a brief explanation.
  - `width`, `height` attributes: Do not use it to resize images. Use it so the page can maintain its layout even without the image.
  - `title`: Provides a floating tooltip when the mouse is over the image.

### Figure
  - `<figure>`: A semantic container for figures, linking the figure to the caption provided in `<figcaption>`.
  - A figure need not be an image. It could be several images, a code snippet, audio, video, equations, a table, etc.

### Video / Audio
  - OVP: Online video providers
  - Container format: Formats such as MP3, MP4, WebM contain different parts that make up the video: e.g. an audio track, a video track, metadata
    - WebM: Ogg Vorbis audio with VP8/VP9 video. Supported mainly in Firefox and Chrome
    - MP4: AAC/MP3 audio with H.264 video. Supported mainly in Internet Explorer and Safari
    - The older Ogg container had Ogg Vorbis audio and Ogg Theora video, but was superceded by WebM
  - `<video>` Attributes
    - `src`: the path to the video file
    - `controls`
    - `width` and `height`: The videos will fill horizontally, but the original aspect ratio of the video will be kept.
    - `autoplay`, `loop`, `muted`, 
    - `poster`: takes the URL of an image. To be used before the video is played.
    - `preload`: can take one of three values: `"none"`, `"auto"`, `"metadata"`
    - Paragraph inside `<video>` tags: Fallback content to be displayed in the video is not supported by the browser.
    - `<source>` element: If multiple sources are provided with the `<source>` tag, the browser goes through the list and play the first one it supports
      - `src`: the relative link
      - `type`: Optional attribute. If not included, however, the browser will have to actually download files to check if it can play them. Examples are `"video/mp4"`, `"video/webm"`

  - The `<audio>` element is similar to the `<video>` element. It just doesn't support visual related attributes.

### Embedding
  - `<iframe>` elements are designed to allow developers to embed other web documents.
  - There are some security concerns about `<iframe>`s.
  - `<iframe>` Attributes
    - `allowfullscreen`
    - `frameborder`: `1` will draw a frame border. `0` is the default behavior. The same effect can be achieved by using `border: none;` in CSS, so it is not recommended any more.
    - `src`: It is a good idea to set this with JavaScript after the main content is done loading. This improves the load time of the page.
    - `Fallback content`: Similar to `<video>`, between the opening and closing tags, fallback content can be provided.
    - `sandbox`: requests heightened security settings.

  - Security concerns
    - Embed only when necessary: third-party content may not be secure
    - Use HTTPS: Only embed third-party content with HTTPS
    - Always use the `sandbox` attribute: Adding permissions is okay if necessary. However, **never add both `allow-scripts` and `allow-same-origin`** to the `sandbox` attribute.
    - Configure CSP(=Content security policy) directives: CSP provides a set of HTTP headers designed to improve the security of HTML documents. Configure the server to send an appropriate `X-Frame-Options` header.