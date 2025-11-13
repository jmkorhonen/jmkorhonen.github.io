document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.page__content');
  const list = document.getElementById('toc-list');
  if (!content || !list) return;

  const headings = [...content.querySelectorAll('h2, h3')];
  if (headings.length < 2) return;

  const slugify = s => s.toLowerCase().trim()
    .replace(/[\s]+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-+/g, '-');

  let currentUl = list;
  let lastLevel = 2;

  headings.forEach(h => {
    const level = parseInt(h.tagName.substring(1), 10); // 2 or 3
    if (!h.id) h.id = slugify(h.textContent);

    // If we see an H3 before any H2, treat it as H2
    const effLevel = (level === 3 && lastLevel === 2 && !currentUl.lastElementChild) ? 2 : level;

    if (effLevel > lastLevel) {
      // Nest under the previous LI; if missing, don't nest
      const parentLi = currentUl.lastElementChild;
      if (parentLi && parentLi.tagName === 'LI') {
        const ul = document.createElement('ul');
        parentLi.appendChild(ul);
        currentUl = ul;
      }
    } else if (effLevel < lastLevel) {
      // Pop back to the nearest ancestor UL (handles h3 -> h2)
      currentUl = currentUl.parentElement.closest('ul') || list;
    }
    lastLevel = effLevel;

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${h.id}`;
    a.textContent = h.textContent;
    li.appendChild(a);
    currentUl.appendChild(li);
  });
});
