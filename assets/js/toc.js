document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.page__content');
  const list = document.getElementById('toc-list');
  if (!content || !list) return;

  const headings = [...content.querySelectorAll('h2, h3')];
  if (headings.length < 2) return;

  const slugify = s => s.toLowerCase()
    .trim()
    .replace(/[\s]+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-+/g, '-');

  let currentUl = list;
  let lastLevel = 2;

  headings.forEach(h => {
    const level = parseInt(h.tagName.substring(1), 10); // 2 or 3
    if (!h.id) h.id = slugify(h.textContent);

    if (level > lastLevel) {
      const ul = document.createElement('ul');
      currentUl.lastElementChild?.appendChild(ul);
      currentUl = ul;
    } else if (level < lastLevel) {
      currentUl = currentUl.parentElement.closest('ul') || list;
    }
    lastLevel = level;

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${h.id}`;
    a.textContent = h.textContent;
    li.appendChild(a);
    currentUl.appendChild(li);
  });
});
