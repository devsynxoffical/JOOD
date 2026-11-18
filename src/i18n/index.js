import ar from './ar.json';

const STORAGE_KEY = 'jood-lang';
const ATTRS = ['placeholder', 'aria-label', 'alt', 'title'];
const SKIP = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'CODE']);
let observer = null;

const norm = (s) => s.replace(/\s+/g, ' ').trim();

const PATTERNS = [
  [/^View project (\d+)$/, 'عرض المشروع $1'],
  [/^Project (\d+)$/, 'المشروع $1'],
  [/^AED (\d+)\/m2$/, '$1 درهماً/م²'],
  // keep phone numbers left-to-right inside right-to-left text
  [/^(\+\d[\d ]{6,})$/, '\u2066$1\u2069'],
];
function byPattern(key) {
  for (const [re, out] of PATTERNS) if (re.test(key)) return key.replace(re, out);
  return null;
}

export function getLanguage() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'ar' ? 'ar' : 'en';
  } catch (e) {
    return 'en';
  }
}

function translateText(node) {
  const raw = node.nodeValue;
  if (!raw) return;
  // the logo wordmark stays in English
  if (node.parentNode && node.parentNode.closest && node.parentNode.closest('svg')) return;
  const key = norm(raw);
  if (!key) return;
  const hit = ar[key] || byPattern(key);
  if (hit && hit !== key) {
    const lead = raw.match(/^\s*/)[0];
    const trail = raw.match(/\s*$/)[0];
    node.nodeValue = lead + hit + trail;
  }
}

function translateElement(el) {
  if (el.nodeType !== 1) return;
  for (const attr of ATTRS) {
    const v = el.getAttribute && el.getAttribute(attr);
    const t = v && (ar[norm(v)] || byPattern(norm(v)));
    if (t && t !== v) el.setAttribute(attr, t);
  }
}

function walk(root) {
  if (!root) return;
  if (root.nodeType === 3) {
    translateText(root);
    return;
  }
  if (root.nodeType !== 1 || SKIP.has(root.tagName)) return;
  translateElement(root);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  let n = walker.nextNode();
  while (n) {
    if (n.nodeType === 3) {
      if (!n.parentNode || !SKIP.has(n.parentNode.tagName)) translateText(n);
    } else {
      translateElement(n);
    }
    n = walker.nextNode();
  }
}

function start() {
  document.documentElement.lang = 'ar';
  document.documentElement.dir = 'rtl';
  if (ar[norm(document.title)]) document.title = ar[norm(document.title)];
  walk(document.body);
  if (observer) return;
  observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === 'characterData') translateText(m.target);
      else if (m.type === 'attributes') translateElement(m.target);
      else m.addedNodes.forEach(walk);
    }
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ATTRS,
  });
}

/** Call once on app start: applies Arabic if it was chosen before. */
export function initLanguage() {
  if (getLanguage() === 'ar') start();
}

/** Switch language. English reloads the page to restore the original text. */
export function setLanguage(lang) {
  const next = lang === 'ar' ? 'ar' : 'en';
  const current = getLanguage();
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch (e) {
    /* storage unavailable: language applies for this visit only */
  }
  if (next === 'ar') start();
  else if (current === 'ar' || document.documentElement.lang === 'ar') window.location.reload();
}
