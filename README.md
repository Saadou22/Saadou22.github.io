# Saad Boumkouk — Blog

A lightweight academic/research blog for Saad Boumkouk, inspired by the clean structure of Rikiya Takehi's website. This is an independently written template—not a copy of the original site's source or content.

No frameworks, build commands, or paid hosting needed. Works with **GitHub Pages**.

## Customize

1. Your name is already set to **Saad Boumkouk** throughout the blog. Edit `index.html` if you want to change the homepage introduction.
2. The only navigation item is **Blog**; there are no About or Contact tabs.
3. Edit colors and fonts in `assets/style.css` (the variables at the beginning are easiest).

## Add a blog post

1. Copy `posts/training-loss-and-llms.html` to something like `posts/my-new-topic.html`.
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
- Three-column author / topic / date metadata
- Highlighted TL;DR, figures, tables, code blocks, expandable details
- Optional dark-mode toggle (saved locally in the visitor's browser)
- Static, dependency-free content and automatic post listing

The first post, *When an LLM Confused Training Loss with Empirical Risk*, includes three screenshots supplied by Saad and links to his shared ChatGPT conversation. The original reference blog's proprietary images, text, and interactive experiments are **not** included.

## Updating your existing GitHub Pages repository

Your existing local folder is `~/Desktop/academic-blog-template`. To update it safely:

1. **Do not delete the `.git` directory** inside that folder. It connects the blog to your GitHub repository.
2. Unzip this updated archive, then **copy its contents over the existing files** in `~/Desktop/academic-blog-template`. Replace files with the same names. Remove the old `about.html` and `posts/first-post.html` manually if present.
3. From Git Bash in that blog folder, run:

   ```bash
   git add -A
   git commit -m "Personalize blog and publish first essay"
   git push
   ```

This updates `https://saadou22.github.io/` after GitHub Pages republishes.
