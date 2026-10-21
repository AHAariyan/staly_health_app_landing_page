/* Play link switch.
 * TODO(play-link): there is no Play listing yet. When it goes live, put the listing URL here, e.g.
 *   const PLAY_URL = 'https://play.google.com/store/apps/details?id=YOUR.PACKAGE.NAME';
 * Every element with [data-play] then becomes a real "Get it on Google Play" link.
 * Leave it empty to keep the "Coming soon" buttons. */
const PLAY_URL = '';

(function () {
  if (!PLAY_URL) return;
  // Carry utm_* tags from this page's URL into Play's referrer, so the Play Console credits the source.
  let url = PLAY_URL;
  const utm = new URLSearchParams(location.search);
  const ref = [...utm].filter(([k]) => k.startsWith('utm_')).map(([k, v]) => k + '=' + v).join('&');
  if (ref) url += (url.includes('?') ? '&' : '?') + 'referrer=' + encodeURIComponent(ref);
  document.querySelectorAll('[data-play]').forEach((a) => {
    a.href = url;
    a.removeAttribute('aria-disabled');
    a.classList.add('is-live');
    const label = a.querySelector('[data-play-label]');
    if (label) label.textContent = 'Get it on Google Play';
    else if (a.hasAttribute('data-play-short')) a.textContent = 'Get the app';
  });
})();
