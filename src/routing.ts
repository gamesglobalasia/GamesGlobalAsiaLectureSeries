import { useEffect, useState } from 'react';

/**
 * Hash-based routing. Deliberately dependency-free: the site is deployed to
 * GitHub Pages under a project path, where hash URLs work without any server
 * rewrite rules, and they stay shareable and bookmarkable.
 */

const LECTURE_PREFIX = '#/lecture/';

export type Route = { kind: 'home' } | { kind: 'lecture'; id: string };

export function parseRoute(hash: string): Route {
  if (hash.startsWith(LECTURE_PREFIX)) {
    const id = decodeURIComponent(hash.slice(LECTURE_PREFIX.length));
    if (id) return { kind: 'lecture', id };
  }
  return { kind: 'home' };
}

export function lectureHref(id: string) {
  return `${LECTURE_PREFIX}${encodeURIComponent(id)}`;
}

export function useRoute(): Route {
  const [hash, setHash] = useState(() =>
    typeof window === 'undefined' ? '' : window.location.hash,
  );

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return parseRoute(hash);
}

/** Return to the home page and put the schedule back under the reader's eye. */
export function goHomeToSchedule() {
  window.location.hash = '';

  // The home view has not rendered yet at this point, so wait for the schedule
  // to exist before scrolling to it rather than scrolling into an empty page.
  const deadline = performance.now() + 1000;
  const scrollWhenReady = () => {
    const target = document.getElementById('schedule-section');
    if (target) {
      target.scrollIntoView({ behavior: 'auto' });
    } else if (performance.now() < deadline) {
      requestAnimationFrame(scrollWhenReady);
    }
  };
  requestAnimationFrame(scrollWhenReady);
}
