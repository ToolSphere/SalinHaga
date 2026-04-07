// ================= LANGUAGES =================
const LANGS = {
  fil: "Filipino / Tagalog",
  ilo: "Ilocano",
  pam: "Kapampangan",
  ceb: "Cebuano",
  war: "Waray",
};

// ================= COMMON FIXES (shorthand) =================
const COMMON_FIXES = {
  fil: { ndi: "hindi", d: "di", wla: "wala", slmt: "salamat", kmsta: "kumusta" },
  ilo: {},
  pam: {},
  ceb: {},
  war: {},
};

// ================= DATA (WORDS + PHRASES) =================
const DATA = [
  { fil: "kumusta ka", ilo: "kumusta ka", pam: "komusta ka" },
  { fil: "maraming salamat", ilo: "agyamanak unay", pam: "dakal a salamat" },
  { fil: "magandang umaga", ilo: "naimbag a bigat", pam: "maragul a abak" },
  { fil: "magandang gabi", ilo: "naimbag a rabii", pam: "maragul a bengi" },
  { fil: "pasensya na", ilo: "dispensar", pam: "pasensya na" },
  { fil: "salamat po", ilo: "agyamanak po", pam: "salamat pu" },
  { fil: "ingat ka", ilo: "agannad ka", pam: "ingat ka" },
  { fil: "sandali lang", ilo: "maysa a bassit", pam: "sandali mu" },
  { fil: "good luck", ilo: "narinay a gundaway", pam: "good luck" },

  { fil: "salamat", ilo: "agyamanak", pam: "salamat" },
  { fil: "oo", ilo: "wen", pam: "wa" },
  { fil: "hindi", ilo: "saan", pam: "aliwa" },
  { fil: "bahay", ilo: "balay", pam: "balé" },
  { fil: "paaralan", ilo: "eskuela", pam: "eskuela" },
  { fil: "pagkain", ilo: "makan", pam: "pamangan" },
  { fil: "tubig", ilo: "danum", pam: "danum" },
  { fil: "banyo", ilo: "banyo", pam: "banyo" },
  { fil: "oras", ilo: "oras", pam: "oras" },
  { fil: "araw", ilo: "aldaw", pam: "aldo" },
  { fil: "gabi", ilo: "rabii", pam: "bengi" },
  { fil: "umaga", ilo: "bigat", pam: "abak" },
  { fil: "hapon", ilo: "malem", pam: "gatpanapun" },
  { fil: "kaibigan", ilo: "gayem", pam: "kaibigan" },
  { fil: "pamilya", ilo: "pamilya", pam: "pamilya" },
  { fil: "guro", ilo: "maestro", pam: "guro" },
  { fil: "estudyante", ilo: "estudiante", pam: "estudyante" },
  { fil: "trabaho", ilo: "trabaho", pam: "obra" },
  { fil: "pera", ilo: "kwarta", pam: "kwarta" },
  { fil: "bakit", ilo: "apay", pam: "obat" },
  { fil: "saan", ilo: "sadino", pam: "nukarin" },
  { fil: "ano", ilo: "ania", pam: "nanu" },
  { fil: "paano", ilo: "kasano", pam: "komusta" },
  { fil: "mahal", ilo: "ay-ayaten", pam: "malagu" },
  { fil: "mahal kita", ilo: "ay-ayatenka", pam: "malagu daka" },

  { fil: "kumain", ilo: "nangan", pam: "mengan" },
  { fil: "uminom", ilo: "naginum", pam: "minum" },
  { fil: "pumunta", ilo: "mapan", pam: "minta" },
  { fil: "bumalik", ilo: "agsubli", pam: "mibalik" },
  { fil: "pumasok", ilo: "sumrek", pam: "mipasok" },
  { fil: "lumabas", ilo: "ruar", pam: "luwal" },
  { fil: "tumulong", ilo: "timmulong", pam: "tumulung" },
  { fil: "maghintay", ilo: "aguray", pam: "maghintay" },
  { fil: "makinig", ilo: "agdengeg", pam: "makinig" },
  { fil: "magsalita", ilo: "agsao", pam: "magsalita" },
  { fil: "magbasa", ilo: "agbasa", pam: "magbasa" },
  { fil: "magsulat", ilo: "agsurat", pam: "magsulat" },
  { fil: "tumakbo", ilo: "agtaray", pam: "tumakbo" },

  { fil: "mabuti", ilo: "naimbag", pam: "mayap" },
  { fil: "masama", ilo: "dakes", pam: "mala" },
  { fil: "malaki", ilo: "dakkel", pam: "maragul" },
  { fil: "maliit", ilo: "bassit", pam: "malati" },
  { fil: "madali", ilo: "nalaka", pam: "malaut" },
  { fil: "mahirap", ilo: "narigat", pam: "masakit" },
  { fil: "mabilis", ilo: "napardas", pam: "mabilog" },
  { fil: "malapit", ilo: "asideg", pam: "marani" },
  { fil: "malayo", ilo: "adayu", pam: "marayu" },

  { fil: "ngayon", ilo: "ita", pam: "ngeni" },
  { fil: "bukas", ilo: "inton bigat", pam: "bukas" },
  { fil: "kahapon", ilo: "idi kalman", pam: "nangapan" },

  { fil: "kaliwa", ilo: "kaliwa", pam: "kaliwa" },
  { fil: "kanan", ilo: "kanan", pam: "kanan" },
  { fil: "diretso", ilo: "deretso", pam: "derecho" },
  { fil: "likod", ilo: "likod", pam: "likod" },
  { fil: "harap", ilo: "sango", pam: "harap" },
  { fil: "loob", ilo: "uneg", pam: "loob" },
  { fil: "labas", ilo: "ruar", pam: "luwal" },
  { fil: "dito", ilo: "ditoy", pam: "keni" },
  { fil: "doon", ilo: "idiay", pam: "keto" },

  { fil: "at", ilo: "ken", pam: "at" },
  { fil: "pero", ilo: "ngem", pam: "pero" },
  { fil: "dahil", ilo: "gapuna", pam: "dahil" },
  { fil: "kaya", ilo: "isu a", pam: "kaya" },

  { fil: "marami", ilo: "adu", pam: "dakal" },
  { fil: "kaunti", ilo: "bassit", pam: "ditak" },
  { fil: "lahat", ilo: "amin", pam: "eganagana" },
  { fil: "wala", ilo: "awan", pam: "ala" },
  { fil: "meron", ilo: "adda", pam: "atin" },
];

// ================= STATE =================
let CURRENT_TRANSLATION_ID = 0;

// ================= PRONUNCIATION (sample) =================
const PRON = {
  fil: { salamat: "sa-la-mat", "maraming salamat": "ma-ra-ming sa-la-mat", bukas: "bu-kas" },
  ilo: { agyamanak: "ag-ya-ma-nak", "agyamanak unay": "ag-ya-ma-nak u-nay", "inton bigat": "in-ton bi-gat" },
  pam: { "dakal a salamat": "da-kal a sa-la-mat", "balé": "ba-le", ngeni: "nge-ni" },
};

// ================= AMBIGUITY (sense chooser) =================
const AMBIG = {
  "fil|ilo": {
    bukas: [
      { out: "inton bigat", sense: "tomorrow (time)", pron: PRON.ilo["inton bigat"] || "" },
      { out: "luktan", sense: "open (verb)", pron: "luk-tan" },
    ],
  },
  "fil|pam": {
    bukas: [
      { out: "bukas", sense: "tomorrow (time)", pron: "bu-kas" },
      { out: "ibukas", sense: "open (verb)", pron: "i-bu-kas" },
    ],
  },
};

// ================= SENTENCE TEMPLATES =================
const TEMPLATES = [
  {
    src: "fil",
    pattern: /^nasaan\s+(?:ang\s+)?(.+)\?*$/i,
    build: { fil: (x) => `nasaan ang ${x}`, ilo: (x) => `sadino ti ${x}`, pam: (x) => `nukarin ya ing ${x}` },
  },
  {
    src: "fil",
    pattern: /^gusto\s+ko\s+(?:ng\s+)?(.+)$/i,
    build: { fil: (x) => `gusto ko ng ${x}`, ilo: (x) => `kayat ko ti ${x}`, pam: (x) => `buri ku ning ${x}` },
  },
  {
    src: "fil",
    pattern: /^magkano\s+(?:ang\s+)?(.+)\?*$/i,
    build: { fil: (x) => `magkano ang ${x}`, ilo: (x) => `mano ti ${x}`, pam: (x) => `magkano ya ing ${x}` },
  },
];

// ================= BUILD LOOKUPS =================
const LOOKUPS = {};
const KEYS = Object.keys(LANGS);

KEYS.forEach((a) => {
  LOOKUPS[a] = {};
  KEYS.forEach((b) => {
    if (a !== b) LOOKUPS[a][b] = new Map();
  });
});

DATA.forEach((r) => {
  KEYS.forEach((a) => {
    KEYS.forEach((b) => {
      if (a !== b && r[a] && r[b]) {
        LOOKUPS[a][b].set(String(r[a]).toLowerCase(), String(r[b]).toLowerCase());
      }
    });
  });
});

// ================= UI =================
const srcSel = document.getElementById("sourceLang");
const tgtSel = document.getElementById("targetLang");
const input = document.getElementById("inputText");
const output = document.getElementById("outputText");
const miss = document.getElementById("missingBox");
const pronBox = document.getElementById("pronBox");
const suggestBox = document.getElementById("suggestBox");
const suggestBar = document.getElementById("suggestBar");
const senseArea = document.getElementById("senseArea");
const senseSelect = document.getElementById("senseSelect");
const senseHint = document.getElementById("senseHint");
const onlineStatus = document.getElementById("onlineStatus"); // can be hidden in CSS if you want
const themePill = document.getElementById("themePill");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");
const helpBtn = document.getElementById("helpBtn");
const tutorialModal = document.getElementById("tutorialModal");
const closeTutorial = document.getElementById("closeTutorial");


// ===== Background slideshow per language (by TARGET language) =====
// Uses 2-layer crossfade system required by your CSS: --bg-img-a / --bg-img-b

const BG_IMAGES = {
  fil: [
    "https://hiketomountains.com/wp-content/uploads/2022/05/Minalungao-National-Park-9.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAA3NQzu5fM1c-YEl4M8xGtHBpRqHSmLFtUoRwWvN8k6bXpPcogt7c6zU&s=10",
    "https://www.nuevaecija.ph/wp-content/uploads/2024/02/422600670_271645472435963_5616685699597508768_n-scaled.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWuofUWYoIEEdt7fJy4BwGPnRh15qpT4VsXXuMqCMt1A4H5J8TibB0WlG&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Yz2-POf58H04qE7aj6t0nHBR2tlwlYGz1fiuaWczFPX5ySHD7P7mgn8&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuu9hLpYnyoI64CNvwF4lo9oOsvGqMpNk9K8P74O3ywlhfUR7rrZ1WS9WA&s=10"
  ],

  pam: [
    "https://media.istockphoto.com/id/1301130516/photo/mt-arayat-and-pampanga.jpg?s=612x612&w=0&k=20&c=aXKDpoVFUM-fLlaEoN0j5yBd4KsebpQoL1zndZRakw8=",
    "https://www.qatarairways.com/content/dam/images/renditions/vertical-hd/destinations/philippines/clark/v-hd-clark.jpg",
    "https://www.themegaworldlifestyle.com/uploads/1/2/3/8/123821029/depositphotos-18376849-xl-2015-720x480-696x464_orig.jpeg",
    "https://i.pinimg.com/736x/7a/e7/82/7ae7820dd474be31eb22b2a052f36afa.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPKpfw4t1jk_Iysu4q7D-luY1vX6EfhhI99Qsvd1kzND8YdY8xzs-gcF5&s=10",
    "https://www.leytesamardailynews.com/wp-content/uploads/2024/12/can-avid-lantern.jpg",
    "https://punto.com.ph/wp-content/uploads/2019/11/2-1.jpg",
    "https://pampanga360.com/wp-content/uploads/2020/12/pampanga-giant-lantern-festival.jpg",
    "https://www.camella.com.ph/wp-content/uploads/2023/12/photo-1646721320632-ac7ebcc68a6a-1.jpg",
    "https://ik.imagekit.io/tvlk/blog/2023/08/shutterstock_1619729950.jpg?tr=q-70,c-at_max,w-1000,h-600"
  ],

  ilo: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFZrmgRCzo5fXJo3en8CNANIne5DcxWV7QN92fqnPHulYmFFrykA-8iY&s=10",
    "https://www.taraletsanywhere.com/wp-content/uploads/2024/02/kalesa-in-vigan-city-773x1031.jpg",
    "https://gttp.images.tshiftcdn.com/308145/x/0/12-best-tourist-spots-and-things-to-do-in-ilocos-sur-and-norte-provinces-11.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883",
    "https://ik.imagekit.io/tvlk/blog/2023/07/shutterstock_1291277695-2.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/1d/55/bd/calle-crisologo-vigan.jpg?w=500&h=-1&s=1",
    "https://chona336647314.wordpress.com/wp-content/uploads/2020/11/images-2020-11-10t184107.731.jpeg?w=520",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YeSV9OYceBD-rzANCdny3SnDxbk5wuvN9vO4KTWohVC-rRbXDWXV63M&s=10",
    "https://www.bria.com.ph/wp-content/uploads/2022/06/Ilocos-Norte-Tourist-Spots.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/44/bb/25/saud-beach.jpg?w=1200&h=700&s=1"
  ],

  war: [
    "https://cdn.britannica.com/76/182176-004-4DB1D775/chocolate-hills-Philippines-Bohol-island.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjusmSOsxT1fyjf8O8bgaPtRqCUNvmJGakULV7d4SDnQN3oDWlsEogmvU&s=10",
    "https://ik.imagekit.io/tvlk/blog/2024/07/shutterstock_2318088931.jpg?tr=q-70,c-at_max,w-1000,h-600",
    "https://t4.ftcdn.net/jpg/03/95/43/95/360_F_395439596_ytNRyfIzjXsQjO8A32ZM4qNwlcPYN5MB.jpg",
    "https://media.istockphoto.com/id/1125617922/photo/palms-on-tropical-beach.jpg?s=612x612&w=0&k=20&c=LZSEvSZlvC2X6h4mpGxORcmqFwNx2HoAsxUI-4hVg9k=",
    "https://media.istockphoto.com/id/924698816/photo/palm-over-beach-in-tropical-island.jpg?s=612x612&w=0&k=20&c=SVJ6J4Lnema9ceKLZ9uHEt1Rhawpdq0r_YJsiVk0zO4=",
    "https://static.vecteezy.com/system/resources/previews/025/950/018/non_2x/beautiful-beach-with-palms-and-turquoise-sea-in-jamaica-island-ai-generated-free-photo.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCtFK4hCbu84Yj7yhSfQ--eh88PyH4qucdA5Ys_ulCly8UNOOqXk6FcO19&s=10"
  ],

  ceb: [
    "https://cdn.britannica.com/76/182176-004-4DB1D775/chocolate-hills-Philippines-Bohol-island.jpg",
    "https://ik.imagekit.io/tvlk/blog/2024/07/shutterstock_2318088931.jpg?tr=q-70,c-at_max,w-1000,h-600",
    "https://t4.ftcdn.net/jpg/03/95/43/95/360_F_395439596_ytNRyfIzjXsQjO8A32ZM4qNwlcPYN5MB.jpg",
    "https://media.istockphoto.com/id/1125617922/photo/palms-on-tropical-beach.jpg?s=612x612&w=0&k=20&c=LZSEvSZlvC2X6h4mpGxORcmqFwNx2HoAsxUI-4hVg9k=",
    "https://media.istockphoto.com/id/924698816/photo/palm-over-beach-in-tropical-island.jpg?s=612x612&w=0&k=20&c=SVJ6J4Lnema9ceKLZ9uHEt1Rhawpdq0r_YJsiVk0zO4=",
    "https://static.vecteezy.com/system/resources/previews/025/950/018/non_2x/beautiful-beach-with-palms-and-turquoise-sea-in-jamaica-island-ai-generated-free-photo.jpeg"
  ]
};

let _bgTimer = null;
let _bgIndex = 0;
let _bgPlaylist = [];
let _bgFlip = false;

/** Fisher–Yates shuffle (returns new array) */
function _shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Preload image to reduce flash (best-effort) */
function _preload(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(url);
    img.onerror = () => resolve(url);
    // cache-bust so Picsum doesn't keep returning same cached image
    img.src = url + (url.includes("?") ? "&" : "?") + "cb=" + Date.now();
  });
}

/** Set warm theme palette by target language (CSS reads body[data-theme]) */
function _setTheme(lang) {
  const body = document.getElementById("appBody") || document.body;
  const code = lang || "fil";
  body.dataset.theme = code;
  if (themePill) themePill.innerText = `Theme: ${LANGS[code] || "Filipino / Tagalog"}`;
}

function _setBgA(url) {
  document.body.style.setProperty("--bg-img-a", `url("${url}")`);
}
function _setBgB(url) {
  document.body.style.setProperty("--bg-img-b", `url("${url}")`);
}
function _showA() {
  document.body.style.setProperty("--bg-a-opacity", ".38");
  document.body.style.setProperty("--bg-b-opacity", "0");
}
function _showB() {
  document.body.style.setProperty("--bg-a-opacity", "0");
  document.body.style.setProperty("--bg-b-opacity", ".38");
}

/** Crossfade to image using A/B layers */
async function _fadeToBg(url) {
  const ready = await _preload(url);

  if (_bgFlip) {
    _setBgA(ready);
    requestAnimationFrame(_showA);
  } else {
    _setBgB(ready);
    requestAnimationFrame(_showB);
  }

  _bgFlip = !_bgFlip;
}

/** Start rotating backgrounds for a given language */
function startBgSlideshow(lang, { shuffle = true, intervalMs = 6500 } = {}) {
  stopBgSlideshow();
  _setTheme(lang);

  const images = BG_IMAGES[lang] || BG_IMAGES.fil;
  _bgPlaylist = shuffle ? _shuffleArray(images) : images.slice();
  _bgIndex = 0;

  // show first immediately
  _fadeToBg(_bgPlaylist[_bgIndex]);

  // rotate
  _bgTimer = setInterval(() => {
    _bgIndex = (_bgIndex + 1) % _bgPlaylist.length;
    _fadeToBg(_bgPlaylist[_bgIndex]);
  }, intervalMs);
}

function stopBgSlideshow() {
  if (_bgTimer) clearInterval(_bgTimer);
  _bgTimer = null;
}


// ================= CACHE =================
const TRANSLATION_CACHE = {};
try {
  Object.assign(TRANSLATION_CACHE, JSON.parse(localStorage.getItem("translator_cache") || "{}"));
} catch {}

function norm(t) {
  return String(t || "")
    .toLowerCase()
    .normalize("NFD")                 // separate accents
    .replace(/[\u0300-\u036f]/g, "")   // remove accents
    .replace(/[’‘`]/g, "'")           // normalize apostrophes
    .replace(/[-–—_]/g, " ")          // hyphens/underscores → space
    .replace(/[^a-z0-9'\s]/g, " ")    // remove other punctuation (keep apostrophe)
    .trim()
    .replace(/\s+/g, " ");
}
const GOOGLE_LANG = {
  fil: "tl",   // Google uses tl for Tagalog (works best)
  ilo: "ilo",
  pam: "pam",
  ceb: "ceb",
  war: "war",
};

async function googleFallbackTranslate(text, sl, tl) {
  const clean = norm(text);

  // map to Google codes
  const gsl = GOOGLE_LANG[sl] || sl;
  const gtl = GOOGLE_LANG[tl] || tl;

  const key = `${gsl}|${gtl}|${clean}`;
  if (TRANSLATION_CACHE[key]) return TRANSLATION_CACHE[key];

  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", gsl);     // ✅ FIX: set source language
  url.searchParams.set("tl", gtl);
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", clean);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const data = await res.json();
  const translated = (data?.[0] || []).map((seg) => seg?.[0]).filter(Boolean).join("") || "";

  if (clean.length >= 2) {
    TRANSLATION_CACHE[key] = translated;
    try {
      localStorage.setItem("translator_cache", JSON.stringify(TRANSLATION_CACHE));
    } catch {}
  }

  return translated;
}

function shouldAutoFallback(inputText, dictOut, missing) {
  const clean = norm(inputText);
  if (clean.length < 3) return false;

  const wordCount = clean.split(" ").filter(Boolean).length;

  // ✅ Sentences: allow fallback
  if (wordCount >= 2) {
    if (missing && missing.size) return true;
    if (norm(dictOut) === clean) return true;
    return false;
  }

  // ✅ Single word: only fallback if dictionary did nothing / missing
  if (wordCount === 1) {
    if (missing && missing.size >= 1) return true;
    if (norm(dictOut) === clean) return true;
  }

  return false;
}

// ================= TUTORIAL =================
(function () {
  const seen = localStorage.getItem("translator_tutorial_seen");
  if (!seen && tutorialModal) tutorialModal.style.display = "block";
})();
if (closeTutorial) {
  closeTutorial.onclick = () => {
    tutorialModal.style.display = "none";
    localStorage.setItem("translator_tutorial_seen", "1");
  };
}
if (helpBtn) helpBtn.onclick = () => (tutorialModal.style.display = "block");

// ================= BUTTONS =================
if (clearBtn) {
  clearBtn.onclick = () => {
    if (!confirm("Clear input and output?")) return;
    input.value = "";
    output.innerText = "Translation will appear here…";
    miss.innerText = "";
    pronBox.innerText = "";
    suggestBox.innerText = "";
    hideSense();
    showSuggestChips([], "");
    if (onlineStatus) onlineStatus.innerText = "";
  };
}
if (copyBtn) {
  copyBtn.onclick = async () => {
    const text = (output.innerText || "").trim();
    if (!text || text === "Translation will appear here…") return;
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied!");
    } catch (e) {
      alert("Copy failed. Browser permission issue.");
    }
  };
}

// ================= HELPERS =================
function setPron(targetLang, translatedText) {
  const key = norm(translatedText);
  const p = PRON[targetLang] && PRON[targetLang][key] ? PRON[targetLang][key] : "";
  pronBox.innerHTML = p ? `<span class="pill">Pronunciation:</span> ${p}` : "";
}

function showSense(options, originalKey) {
  senseArea.style.display = "block";
  senseSelect.innerHTML = options.map((o, i) => `<option value="${i}">${o.sense}</option>`).join("");
  senseHint.innerHTML = `<span class="pill">Ambiguous:</span> "${originalKey}" has multiple meanings. Choose one.`;
  senseSelect.onchange = () => {
    const chosen = options[Number(senseSelect.value)];
    // sense choose is a user action; not async, so okay
    output.innerText = chosen.out;
    miss.innerText = "";
    pronBox.innerHTML = chosen.pron ? `<span class="pill">Pronunciation:</span> ${chosen.pron}` : "";
  };
}
function hideSense() {
  senseArea.style.display = "none";
  senseSelect.innerHTML = "";
  senseHint.innerText = "";
  senseSelect.onchange = null;
}

// ===== keyboard-style suggest chips =====
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}
function showSuggestChips(options, fullText) {
  if (!options || !options.length) {
    suggestBar.style.display = "none";
    suggestBar.innerHTML = "";
    return;
  }
  suggestBar.style.display = "flex";
  suggestBar.innerHTML = options
    .map((opt) => `<button type="button" class="schip" data-opt="${escapeHtml(opt)}">${escapeHtml(opt)}</button>`)
    .join("");

  [...suggestBar.querySelectorAll("button")].forEach((btn) => {
    btn.addEventListener("click", () => {
      const chosen = btn.getAttribute("data-opt");
      applySuggestion(fullText, chosen);
    });
  });
}
function applySuggestion(fullText, chosen) {
  const raw = input.value;
  const trimmed = raw.trim();
  if (!trimmed) return;

  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) input.value = chosen;
  else {
    parts[parts.length - 1] = chosen;
    input.value = parts.join(" ") + " ";
  }
  translate();
}

// lightweight typo suggestions
function editDistance(a, b) {
  a = a || "";
  b = b || "";
  const m = a.length,
    n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[m][n];
}
function getClosestMatches(src, token, maxResults = 4) {
  const targets = Object.keys(LANGS).filter((x) => x !== src);
  if (!targets.length) return [];
  const dict = LOOKUPS[src][targets[0]];
  if (!dict) return [];

  const keys = Array.from(dict.keys()).filter((k) => !k.includes(" ")).slice(0, 1200);
  return keys
    .map((k) => ({ k, d: editDistance(token, k) }))
    .filter((x) => x.d <= 2 && x.k !== token)
    .sort((a, b) => a.d - b.d)
    .slice(0, maxResults)
    .map((x) => x.k);
}

function suggestIfAny(src, text) {
  if (!text) {
    suggestBox.innerText = "";
    showSuggestChips([], "");
    return;
  }

  const fixes = COMMON_FIXES[src] || {};
  const lastToken = text.split(" ").pop();

  if (fixes[lastToken]) {
    suggestBox.innerHTML = `<span class="warn">Suggestions:</span> tap a chip to replace`;
    showSuggestChips([fixes[lastToken]], text);
    return;
  }

  if (lastToken.length >= 3) {
    const matches = getClosestMatches(src, lastToken, 4);
    if (matches.length) {
      suggestBox.innerHTML = `<span class="warn">Did you mean:</span>`;
      showSuggestChips(matches, text);
      return;
    }
  }

  suggestBox.innerText = "";
  showSuggestChips([], text);
}

// ================= TRANSLATION ENGINE =================
function tokenizeWithPunctuation(text) {
  return String(text || "").match(/[A-Za-zÀ-ÿ0-9']+|[.,!?;:()"-]+|\s+/g) || [];
}

function translateChunk(src, tgt, text, missing) {
  const dict = LOOKUPS[src][tgt];
  const tokens = tokenizeWithPunctuation(text);

  const wordTokens = tokens
    .filter(t => /[A-Za-zÀ-ÿ0-9']/.test(t))
    .map(t => norm(t));

  const key = `${src}_${tgt}`;

  if (!translateChunk._cache) translateChunk._cache = {};
  if (dict && !translateChunk._cache[key]) {
    translateChunk._cache[key] = Array.from(dict.keys()).sort(
      (a, b) => b.split(" ").length - a.split(" ").length
    );
  }

  const phraseKeys = dict ? translateChunk._cache[key] : [];

  let i = 0;
  const translatedWords = [];

  while (i < wordTokens.length) {
    let matched = false;

    for (const phrase of phraseKeys) {
      const pt = phrase.split(" ");
      const slice = wordTokens.slice(i, i + pt.length).join(" ");

      if (slice === phrase) {
        translatedWords.push(dict.get(phrase));
        i += pt.length;
        matched = true;
        break;
      }
    }

    if (!matched) {
      const w = wordTokens[i];

      if (dict && dict.has(w)) translatedWords.push(dict.get(w));
      else {
        missing.add(w);
        translatedWords.push(w);
      }

      i++;
    }
  }

  let wordIndex = 0;
  const out = [];

  for (const token of tokens) {
    if (/^\s+$/.test(token)) {
      out.push(token);
    } else if (/[A-Za-zÀ-ÿ0-9']/.test(token)) {
      out.push(translatedWords[wordIndex++] || token);
    } else {
      out.push(token);
    }
  }

  return out.join("");
}

async function translate() {
  const requestId = ++CURRENT_TRANSLATION_ID;

  const src = srcSel.value;
  const tgt = tgtSel.value;
  const raw = input.value || "";
  const text = norm(raw);

  hideSense();
  pronBox.innerText = "";
  suggestIfAny(src, text);

  if (!text) {
    if (requestId !== CURRENT_TRANSLATION_ID) return;
    output.innerText = "Translation will appear here…";
    miss.innerText = "";
    if (onlineStatus) onlineStatus.innerText = "";
    return;
  }

  // ---- Ambiguity chooser (dictionary-based) ----
  const ambKey = `${src}|${tgt}`;
  if (AMBIG[ambKey] && AMBIG[ambKey][text]) {
    const options = AMBIG[ambKey][text];
    if (requestId !== CURRENT_TRANSLATION_ID) return;
    output.innerText = options[0].out;
    miss.innerText = "";
    pronBox.innerHTML = options[0].pron ? `<span class="pill">Pronunciation:</span> ${options[0].pron}` : "";
    showSense(options, text);
    return;
  }

  // ---- Template handling: API-first (prevents mixed language) ----
  for (const t of TEMPLATES) {
    if (t.src !== src) continue;

    const m = text.match(t.pattern);
    if (!m) continue;

    if (!t.build[tgt]) break;

    // Full-sentence API for templates
    try {
      const online = await googleFallbackTranslate(raw.trim(), src, tgt);
      if (requestId !== CURRENT_TRANSLATION_ID) return;
      if (online) {
        output.innerText = online;
        miss.innerText = "";
        pronBox.innerText = "";
        if (onlineStatus) onlineStatus.innerText = "";
        return;
      }
    } catch (e) {
      // ignore and fall back to dictionary template
    }

    // Dictionary template fallback (do NOT translate captured chunk word-by-word)
    const captured = m[1] ? m[1].trim() : "";
    const finalOut = t.build[tgt](captured);

    if (requestId !== CURRENT_TRANSLATION_ID) return;
    output.innerText = finalOut;
    miss.innerText = "";
    setPron(tgt, finalOut);
    if (onlineStatus) onlineStatus.innerText = "";
    return;
  }

  // ---- Dictionary first ----
  const missing = new Set();
  const dictOut = translateChunk(src, tgt, raw, missing);

  if (requestId !== CURRENT_TRANSLATION_ID) return;
  output.innerText = dictOut;
  miss.innerText = missing.size ? `Not found: ${[...missing].join(", ")}` : "";
  setPron(tgt, dictOut);

  // ---- Hybrid fallback (silent) ----
  if (shouldAutoFallback(text, dictOut, missing)) {
    try {
      const online = await googleFallbackTranslate(raw.trim(), src, tgt);
      if (requestId !== CURRENT_TRANSLATION_ID) return;
      if (online) {
        output.innerText = online;
        miss.innerText = "";
        pronBox.innerText = "";
      }
    } catch (e) {
      // keep dictionary output if API fails
    }
  }

  if (onlineStatus) onlineStatus.innerText = "";
}

// ================= INIT + EVENTS =================
function init() {
  srcSel.innerHTML = Object.entries(LANGS).map(([k, v]) => `<option value="${k}">${v}</option>`).join("");
  srcSel.value = "fil";
  updateTargets();
  startBgSlideshow(tgtSel.value, { shuffle: true, intervalMs: 6500 });
  translate();
}

function updateTargets() {
  const src = srcSel.value;
  const current = tgtSel.value;
  tgtSel.innerHTML = Object.entries(LANGS)
    .filter(([k]) => k !== src)
    .map(([k, v]) => `<option value="${k}">${v}</option>`)
    .join("");
  const opts = [...tgtSel.options].map((o) => o.value);
  tgtSel.value = opts.includes(current) ? current : opts[0];
}

srcSel.onchange = () => {
  updateTargets();
  startBgSlideshow(tgtSel.value, { shuffle: true, intervalMs: 6500 });
  translate();
};
tgtSel.onchange = () => { startBgSlideshow(tgtSel.value, { shuffle: true, intervalMs: 6500 }); translate(); };

// debounce typing
let tmr = null;
input.oninput = () => {
  clearTimeout(tmr);
  tmr = setTimeout(() => translate(), 350);
};

init();
window.addEventListener("load", () => {
  const tgt = document.getElementById("targetLang");
  if (tgt) startBgSlideshow(tgt.value, { shuffle: true, intervalMs: 6500 });
});