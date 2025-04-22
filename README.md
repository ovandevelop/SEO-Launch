# SEO Launch Documentation

Automatically generates SEO meta tags and JSON-LD schema for better search engine optimization. Extracts data from HTML elements like title, description, images, canonical URL, and robot directives, and inserts them into the &lt;head> section

Complete guide to using the script "SEO Launch"

## Table of Elements

| HTML Element                    | Class                | Purpose                                                                 | Example Value                |
|----------------------------------|----------------------|-------------------------------------------------------------------------|------------------------------|
| **`<a>`** (Anchor Tag)           | `sl-title`           | The title of the webpage that will be used in meta tags like `og:title`, `twitter:title`. | `Ovan Develop`               |
| **`<p>`** (Paragraph Tag)        | `sl-description`     | Short description of the webpage that will be used in meta tags like `description`, `og:description`, `twitter:description`. | `Web Design & Programming`   |
| **`<img>`** (Image Tag)          | `sl-image`           | The image URL to be used in meta tags like `og:image`, `twitter:image`. | `https://ovan.dev/img/OvanDevelop.png` |
| **`<input>`** (Canonical URL)   | `sl-canonical`       | The canonical URL of the webpage to prevent duplicate content issues. This value will be used in `rel="canonical"`. | `https://ovan.dev`           |
| **`<input>`** (Checkbox for Robots)  | `sl-index-follow`    | Indicates whether the page should be indexed and followed by search engines. If checked, the value will be `index,follow`. | `index,follow`              |
| **`<input>`** (Checkbox for No Index, No Follow) | `sl-noindex-nofollow` | Indicates whether the page should not be indexed and not followed by search engines. If checked, the value will be `noindex,nofollow`. | `noindex,nofollow`          |
| **`<input>`** (Checkbox for No Index, Follow) | `sl-noindex-follow` | Indicates whether the page should not be indexed but followed by search engines. If checked, the value will be `noindex,follow`. | `noindex,follow`            |
| **`<input>`** (Checkbox for Index, No Follow) | `sl-index-nofollow` | Indicates whether the page should be indexed but not followed by search engines. If checked, the value will be `index,nofollow`. | `index,nofollow`            |

> **Note:** The values from the checkboxes determine the value of the `robots` meta tag. Only one checkbox should be selected at a time.

---

## HTML Structure Example

The following HTML structure shows the elements and classes used in the meta tag generator:

```html

First Add :
  <script src="main.js" defer></script>
in Head Tag

AND

<a class="sl-title" href="https://ovan.dev">Ovan Develop</a><br>
<p class="sl-description">Web Design & Programming</p><br>
<img class="sl-image" src="https://ovan.dev/img/OvanDevelop.png" width="100" /><br><br>
<input class="sl-canonical" type="url" value="https://ovan.dev" /><br><br>
<input class="sl-index-follow" type="checkbox" value="index,follow" checked />
<input class="sl-noindex-nofollow" type="checkbox" value="noindex,nofollow" /><br><br>
<input class="sl-noindex-follow" type="checkbox" value="noindex,follow" />
<input class="sl-index-nofollow" type="checkbox" value="index,nofollow" />

---
```
## Developer Information

- **By**: RezaEi.Ali
- **Development Team**: Ovan Develop
- **Supported Programming Languages**: PHP, ASP, Node.js, Python, and more...

---
