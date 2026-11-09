(function () {
  const key = 'academic-blog-theme';
  try { if (localStorage.getItem(key) === 'dark') document.documentElement.classList.add('dark'); } catch (_) {}
  document.querySelectorAll('.theme-button').forEach(btn => btn.addEventListener('click', () => {
    const dark = document.documentElement.classList.toggle('dark');
    try { localStorage.setItem(key, dark ? 'dark' : 'light'); } catch (_) {}
  }));
  document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());
  const list = document.getElementById('post-list');
  if (list && window.BLOG_POSTS) {
    const posts = [...window.BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
    for (const post of posts) {
      const item = document.createElement('a'); item.className = 'post-item'; item.href = post.url;
      const meta = document.createElement('div'); meta.className = 'post-meta';
      const date = new Date(post.date + 'T12:00:00');
      meta.textContent = `${date.toLocaleDateString('en-US', {month:'long', day:'numeric', year:'numeric'})}  ·  ${post.category}`;
      const title = document.createElement('h3'); title.textContent = post.title;
      const summary = document.createElement('p'); summary.textContent = post.excerpt;
      const arrow = document.createElement('span'); arrow.className = 'post-arrow'; arrow.textContent = '→';
      item.append(meta, title, summary, arrow); list.append(item);
    }
  }
})();
