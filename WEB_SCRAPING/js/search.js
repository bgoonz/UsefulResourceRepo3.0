window.addEventListener('DOMContentLoaded', () => {
  const searchButtons = [...document.querySelectorAll('[data-site-search]')];
  const container = document.querySelector('.site-search');
  const panel = container.querySelector('.site-search-panel');
  const input = container.querySelector('.site-search-input');
  const results = container.querySelector('.site-search-results');
  let isShowing = false;
  let searchTimeout;
  let searchIndex;
  let map;

  // Fetch the search index
  fetch('/search.json')
    .then((res) => res.json())
    .then((data) => {
      searchIndex = lunr.Index.load(data.searchIndex);
      map = data.map;
    });

  // Show the search interface when a search button is clicked
  searchButtons.map((button) =>
    button.addEventListener('click', (event) => {
      event.preventDefault();
      show();
    })
  );

  // Update search on input
  input.addEventListener('input', handleInput);

  // Show when slash is pressed outside of a form element
  document.addEventListener('keydown', (event) => {
    if (
      !isShowing &&
      event.key === '/' &&
      !event.target.closest('input, textarea')
    ) {
      event.preventDefault();
      show();
    }
  });

  function show() {
    isShowing = true;
    document.body.classList.add('search-visible');
    container.hidden = false;
    input.value = '';
    input.focus();
    updateResults();
    document.addEventListener('mousedown', handleDocumentMouseDown);
    document.addEventListener('keydown', handleDocumentKeyDown);
    document.addEventListener('focusin', handleDocumentFocusIn);
  }

  function hide() {
    isShowing = false;
    document.body.classList.remove('search-visible');
    container.hidden = true;
    input.value = '';
    updateResults();
    document.removeEventListener('mousedown', handleDocumentMouseDown);
    document.removeEventListener('keydown', handleDocumentKeyDown);
    document.removeEventListener('focusin', handleDocumentFocusIn);
  }

  function handleInput() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => updateResults(input.value), 250);
  }

  function handleDocumentFocusIn(event) {
    // Close when focus leaves the panel
    if (event.target.closest('.site-search-panel') !== panel) {
      hide();
    }
  }

  function handleDocumentMouseDown(event) {
    console.log(event.target);
    // Close when clicking outside of the panel
    if (event.target === container) {
      hide();
    }
  }

  function handleDocumentKeyDown(event) {
    // Close when pressing escape
    if (event.key === 'Escape') {
      hide();
    }
  }

  function updateResults(query = '') {
    if (!searchIndex) return;
    const matches = query === '' ? [] : searchIndex.search(query);

    results.innerHTML = '';
    container.classList.toggle('site-search-has-results', matches.length > 0);

    matches.map((match) => {
      const post = map[match.ref];
      const li = document.createElement('li');
      const a = document.createElement('a');

      a.href = post.url;
      a.innerHTML = post.title;

      li.appendChild(a);
      results.appendChild(li);
    });
  }
});
