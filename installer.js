const params = new URLSearchParams(window.location.search);
const widgetId = params.get('id');

if (widgetId) {
  const placeholder = document.getElementById('elfsight-app-placeholder');

  if (placeholder) {
    const widget = document.createElement('div');
    
    widget.classList.add('elfsight-app-' + widgetId);
    widget.setAttribute('data-elfsight-app-lazy', '');
    placeholder.replaceWith(widget);
  }

  document.querySelectorAll('a[href]').forEach((link) => {
    const url = new URL(link.getAttribute('href'), window.location.href);
    
    if (url.origin !== window.location.origin) { 
      return;
    }

    url.searchParams.set('id', widgetId);
    link.href = url.pathname + url.search + url.hash;
  });
}
