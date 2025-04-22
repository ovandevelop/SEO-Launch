(function () {
  document.addEventListener("DOMContentLoaded", function () {
    function getValue(selector, type = "text") {
      const el = document.querySelector(selector);
      if (!el) return null;
      if (type === "text") return el.textContent.trim();
      if (type === "value") return el.value.trim();
      if (type === "src") return el.src;
      return null;
    }

    const title = getValue(".sl-title");
    const description = getValue(".sl-description");
    const image = getValue(".sl-image", "src");
    const canonical = getValue(".sl-canonical", "value");

    const indexFollow = document.querySelector(".sl-index-follow").checked ? "index,follow" : null;
    const noIndexNoFollow = document.querySelector(".sl-noindex-nofollow").checked ? "noindex,nofollow" : null;
    const noIndexFollow = document.querySelector(".sl-noindex-follow").checked ? "noindex,follow" : null;
    const indexNoFollow = document.querySelector(".sl-index-nofollow").checked ? "index,nofollow" : null;

    let robots = indexFollow || noIndexNoFollow || noIndexFollow || indexNoFollow || "index,follow";

    const metaTags = [
      ["description", description],
      ["robots", robots],
      ["og:title", title],
      ["og:description", description],
      ["og:image", image],
      ["og:url", canonical],
      ["twitter:card", "summary_large_image"],
      ["twitter:title", title],
      ["twitter:description", description],
      ["twitter:image", image]
    ];

    metaTags.forEach(([name, content]) => {
      if (content) {
        const meta = document.createElement("meta");
        if (name.startsWith("og:") || name.startsWith("twitter:")) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    });

    if (canonical) {
      const canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      canonicalTag.setAttribute("href", canonical);
      document.head.appendChild(canonicalTag);
    }

    // Schema
    if (title && description && canonical && image) {
      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": canonical,
        "name": title,
        "description": description,
        "image": image
      };

      const script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.textContent = JSON.stringify(jsonLd, null, 2);
      document.head.appendChild(script);
    }
  });
})();
