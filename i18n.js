// i18n.js

const I18N = {
  en: {
    "app.title": "🌐 Cross-Language Translator (Prototype)",
    "app.subtitle": "Dictionary-based · sentence templates · phrase-first · real-time (not AI)",

    "labels.source": "Source Language",
    "labels.target": "Target Language",
    "labels.input": "Input",
    "labels.output": "Output",
    "labels.chooseSense": "Choose meaning (sense)",

    "buttons.clear": "Clear",
    "buttons.copy": "Copy Output",
    "buttons.tutorial": "Show tutorial / guidelines",
    "buttons.gotIt": "Got it",
    "buttons.continue": "Continue",

    "placeholders.input": "Type here… (real-time)",
    "placeholders.output": "Translation will appear here…",

    "tutorial.title": "How to use the Translator (Prototype)",
    "tutorial.li1": "<b>Type complete words</b> (example: <b>hindi</b>, not <b>ndi</b>).",
    "tutorial.li2": "<b>Use proper spacing</b> for phrases (example: <b>maraming salamat</b>).",
    "tutorial.li3": "If a word has <b>multiple meanings</b>, choose the correct <b>sense</b>.",
    "tutorial.li4": "This is <b>dictionary-based</b> (not AI), so some words may be <b>Not found</b>.",

    "lang.title": "Choose your app language",
    "lang.subtitle": "You can change this anytime later."
  },

  fil: {
    "app.title": "🌐 Tagasalin ng Wika (Prototype)",
    "app.subtitle": "Batay sa diksyunaryo · templates ng pangungusap · inuuna ang parirala · real-time (hindi AI)",

    "labels.source": "Pinagmulan na Wika",
    "labels.target": "Pupuntahang Wika",
    "labels.input": "Input",
    "labels.output": "Output",
    "labels.chooseSense": "Piliin ang kahulugan (sense)",

    "buttons.clear": "Burahin",
    "buttons.copy": "Kopyahin ang Output",
    "buttons.tutorial": "Ipakita ang tutorial / gabay",
    "buttons.gotIt": "Gets",
    "buttons.continue": "Magpatuloy",

    "placeholders.input": "Mag-type dito… (real-time)",
    "placeholders.output": "Dito lalabas ang salin…",

    "tutorial.title": "Paano gamitin ang Translator (Prototype)",
    "tutorial.li1": "<b>Buong salita ang i-type</b> (hal: <b>hindi</b>, hindi <b>ndi</b>).",
    "tutorial.li2": "<b>Tamang spacing</b> sa parirala (hal: <b>maraming salamat</b>).",
    "tutorial.li3": "Kung maraming <b>kahulugan</b>, piliin ang tamang <b>sense</b>.",
    "tutorial.li4": "<b>Dictionary-based</b> ito (hindi AI), kaya may mga salitang <b>hindi mahanap</b>.",

    "lang.title": "Piliin ang wika ng app",
    "lang.subtitle": "Pwede mo itong palitan anumang oras."
  }
};

function getSavedAppLang() {
  return localStorage.getItem("appLang");
}

function saveAppLang(lang) {
  localStorage.setItem("appLang", lang);
}

function detectAppLang() {
  const nav = (navigator.language || "en").toLowerCase();
  if (nav.startsWith("tl") || nav.startsWith("fil")) return "fil";
  return "en";
}

function applyAppLang(lang) {
  const dict = I18N[lang] || I18N.en;

  document.documentElement.lang = lang;

  // Replace normal text via data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!dict[key]) return;

    // Allow tutorial list items with <b> tags
    el.innerHTML = dict[key];
  });

  // Replace placeholders via data-i18n-placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (!dict[key]) return;
    el.setAttribute("placeholder", dict[key]);
  });
}

// Language modal control
function initLangModal() {
  const modal = document.getElementById("langModal");
  const continueBtn = document.getElementById("langContinue");
  const langBtns = Array.from(document.querySelectorAll(".langBtn"));

  let selected = getSavedAppLang() || detectAppLang();

  // highlight selected
  function paint() {
    langBtns.forEach(b => b.classList.toggle("active", b.dataset.lang === selected));
  }

  langBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      selected = btn.dataset.lang;
      paint();
    });
  });

  continueBtn.addEventListener("click", () => {
    saveAppLang(selected);
    applyAppLang(selected);
    modal.style.display = "none";
  });
  const appLangBtn = document.getElementById("appLangBtn");
  if (appLangBtn) {
    appLangBtn.addEventListener("click", () => {
        selected = getSavedAppLang() || detectAppLang();
        applyAppLang(selected);   // make modal text match current language
        paint();                  // highlight selected button
        modal.style.display = "block";
     });
    }
    modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
    });
  // show on first open if not saved
  if (!getSavedAppLang()) {
    modal.style.display = "block";
    paint();
    // apply temporarily so modal text is also localized
    applyAppLang(selected);
  } else {
    applyAppLang(getSavedAppLang());
  }

}