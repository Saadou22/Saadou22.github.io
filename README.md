# Academic blog template

A lightweight academic/research blog inspired by the clean structure of Rikiya Takehi's website. This is an independently written template—not a copy of the original site's source or content.

No frameworks, build commands, or paid hosting needed. Works with **GitHub Pages**.

## Customize

1. Search for `Adam` in `index.html`, `about.html`, and `posts/first-post.html` and replace it with your name.
2. Edit the homepage introduction in `index.html` and bio in `about.html`.
3. Update the navigation and replace `hello@example.com` with your email address (or remove the Contact link).
4. Edit colors and fonts in `assets/style.css` (the variables at the beginning are easiest).

## Add a blog post

1. Copy `posts/first-post.html` to something like `posts/my-new-topic.html`.
2. Change the `<title>`, article title, author, affiliation, date, TL;DR, and article body. Keep the relative `../assets/...` links.
3. Add a matching entry to `assets/posts.js` with `url: "posts/my-new-topic.html"`.
4. Commit and push. The homepage updates itself and sorts posts by date.

You can use ordinary HTML for all content. To embed an image, put it in `assets/images/` and use `<img src="../assets/images/name.png" alt="Description" style="max-width:100%">` inside the article.

## Deploy to GitHub Pages

1. Create a public GitHub repository named `YOUR_USERNAME.github.io` (for a root-domain blog), or use any name for a project blog.
2. Upload **the contents of this folder** to the repository root (not the outer folder), then commit.
3. In the GitHub repository, go to **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
4. Visit `https://YOUR_USERNAME.github.io/` (or `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/` for a project blog).

All links are relative, so this works for both GitHub Pages URL types. GitHub Pages may take a couple of minutes to publish updates.

## Included

- Responsive homepage and article layout
- Three-column author / affiliation / date metadata
- Highlighted TL;DR, figures, tables, code blocks, expandable details
- Optional dark-mode toggle (saved locally in the visitor's browser)
- Static, dependency-free content and automatic post listing

The original example article's proprietary images, text, and interactive experiments are **not** included; the components here are generic and editable.
