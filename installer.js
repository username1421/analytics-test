const params = new URLSearchParams(window.location.search);
const widgetId = params.get('id');

if (widgetId) {
  const socket = document.getElementById('elfsight-app-socket');

  if (socket) {
    socket.classList.add('elfsight-app-' + widgetId);
    socket.setAttribute('data-elfsight-app-lazy', '');
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
