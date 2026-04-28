/**
 * Crystal Compass — app.js
 * Zodiac crystal data, rendering logic, and interactivity
 */

// ── Zodiac Data ────────────────────────────────────────────────────────────────
const ZODIAC_DATA = {
  Aries: {
    glyph: "♈",
    emoji: "🐏",
    dates: "Mar 21 – Apr 19",
    crystals: [
      { name: "Aquamarine",  emoji: "💎", benefits: ["Calms impulsive temper", "Boosts courage & clarity", "Enhances truthful expression"] },
      { name: "Fire Agate",  emoji: "🔴", benefits: ["Grounds fiery energy",  "Provides protection",       "Ignites creative passion"] },
      { name: "Citrine",     emoji: "🌕", benefits: ["Attracts abundance",    "Radiates solar confidence", "Clears emotional blocks"] },
      { name: "Bloodstone",  emoji: "🟢", benefits: ["Strengthens vitality",  "Purifies surroundings",     "Grants warrior resilience"] },
      { name: "Jade",        emoji: "🪩", benefits: ["Fortune & harmony",     "Balances temper",           "Encourages wise decisions"] },
    ],
  },
  Taurus: {
    glyph: "♉",
    emoji: "🐂",
    dates: "Apr 20 – May 20",
    crystals: [
      { name: "Carnelian",       emoji: "🔶", benefits: ["Ignites motivation",      "Grounds sensual energy",    "Boosts creativity"] },
      { name: "Chrysocolla",     emoji: "🔵", benefits: ["Soothes emotional heart", "Enhances communication",    "Brings inner peace"] },
      { name: "Blue Tourmaline", emoji: "💙", benefits: ["Calms overthinking",      "Protects aura",             "Promotes relaxation"] },
      { name: "Rose Quartz",     emoji: "🌸", benefits: ["Opens heart chakra",      "Attracts gentle love",      "Releases past wounds"] },
    ],
  },
  Gemini: {
    glyph: "♊",
    emoji: "👯",
    dates: "May 21 – Jun 20",
    crystals: [
      { name: "Aquamarine",        emoji: "💎", benefits: ["Clarity in speech",    "Reduces anxiety",     "Balances dual nature"] },
      { name: "Rutilated Quartz",  emoji: "✨", benefits: ["Amplifies intentions", "Helps focus",         "Clears mental fog"] },
      { name: "Jade",              emoji: "🪩", benefits: ["Wisdom & luck",        "Encourages diplomacy","Protects from negativity"] },
    ],
  },
  Cancer: {
    glyph: "♋",
    emoji: "🦀",
    dates: "Jun 21 – Jul 22",
    crystals: [
      { name: "Moonstone",  emoji: "🌙", benefits: ["Emotional balance",           "Enhances intuition",         "Soothes mood swings"] },
      { name: "Opal",       emoji: "🌈", benefits: ["Inspires imagination",        "Amplifies emotions positively","Brings hope"] },
      { name: "Carnelian",  emoji: "🔶", benefits: ["Motivation & drive",          "Warms emotional core",        "Boosted confidence"] },
      { name: "Fire Opal",  emoji: "🔥", benefits: ["Passion & vitality",          "Transforms fear",             "Sacral energy activation"] },
    ],
  },
  Leo: {
    glyph: "♌",
    emoji: "🦁",
    dates: "Jul 23 – Aug 22",
    crystals: [
      { name: "Amber",     emoji: "🟡", benefits: ["Solar radiance",       "Cleanses depressive feelings","Attracts success"] },
      { name: "Citrine",   emoji: "🌕", benefits: ["Manifests prosperity", "Radiates joy",                "Strengthens leadership"] },
      { name: "Jasper",    emoji: "🪨", benefits: ["Nurturing endurance",  "Stability in spotlight",      "Protects from envy"] },
      { name: "Garnet",    emoji: "❤️", benefits: ["Fire of passion",      "Commitment energy",           "Revitalizes life force"] },
      { name: "Carnelian", emoji: "🔶", benefits: ["Bold self-expression", "Creativity boost",            "Grounds sun energy"] },
    ],
  },
  Virgo: {
    glyph: "♍",
    emoji: "🌾",
    dates: "Aug 23 – Sep 22",
    crystals: [
      { name: "Watermelon Tourmaline", emoji: "🍉", benefits: ["Heals emotional rifts",    "Compassion & logic blend", "Calms perfectionism"] },
      { name: "Smoky Quartz",          emoji: "🌫️", benefits: ["Releases stress",           "Anchors practicality",     "Protects from overload"] },
      { name: "Moss Agate",            emoji: "🌿", benefits: ["Nature connection",         "Boosts analytical mind",   "Abundance in health"] },
      { name: "Amethyst",              emoji: "💜", benefits: ["Spiritual clarity",          "Reduces insomnia",         "Calms overcritical thoughts"] },
      { name: "Geodes",                emoji: "🪨", benefits: ["Amplifies intentions",       "Grounds high vibrations",  "Harmonizes environment"] },
    ],
  },
  Libra: {
    glyph: "♎",
    emoji: "⚖️",
    dates: "Sep 23 – Oct 22",
    crystals: [
      { name: "Tourmaline",  emoji: "🔮", benefits: ["Balances extremes",     "Protects aura",         "Brings emotional equilibrium"] },
      { name: "Rose Quartz", emoji: "🌸", benefits: ["Fosters harmony",       "Self-love & relationships","Softens conflicts"] },
      { name: "Bloodstone",  emoji: "🟢", benefits: ["Courage to decide",     "Purifies indecisiveness","Revitalizes energy"] },
      { name: "Jade",        emoji: "🪩", benefits: ["Attracts gracious luck", "Smooth interactions",   "Wealth magnet"] },
      { name: "Citrine",     emoji: "🌕", benefits: ["Optimism & joy",         "Manifest partnership goals","Solar warmth"] },
      { name: "Moonstone",   emoji: "🌙", benefits: ["Inner balance",          "Smooth emotional tides", "New beginnings"] },
    ],
  },
  Scorpio: {
    glyph: "♏",
    emoji: "🦂",
    dates: "Oct 23 – Nov 21",
    crystals: [
      { name: "Moldavite",  emoji: "🌑", benefits: ["Intense transformation",  "Spiritual awakening",     "Accelerates growth"] },
      { name: "Turquoise",  emoji: "🔷", benefits: ["Master healer",           "Protects from toxins",    "Truth and wisdom"] },
      { name: "Moonstone",  emoji: "🌙", benefits: ["Emotional depth",         "Mystical insight",        "Reveals hidden patterns"] },
      { name: "Malachite",  emoji: "💚", benefits: ["Deep emotional release",  "Shields negativity",      "Heart transformation"] },
      { name: "Peridot",    emoji: "💛", benefits: ["Dissolves jealousy",       "Opens heart to light",    "Attracts prosperity"] },
      { name: "Opal",       emoji: "🌈", benefits: ["Intensifies passion",      "Heightens intuition",     "Dream recall"] },
    ],
  },
  Sagittarius: {
    glyph: "♐",
    emoji: "🏹",
    dates: "Nov 22 – Dec 21",
    crystals: [
      { name: "Obsidian",    emoji: "⬛", benefits: ["Protection during travel","Grounds excess fire",    "Reveals truth"] },
      { name: "Lapis Lazuli",emoji: "🔵", benefits: ["Expands wisdom",          "Encourages adventure",   "Clarity of purpose"] },
      { name: "Azurite",     emoji: "💙", benefits: ["Psychic expansion",        "Boosts visionary ideas", "Inspires higher learning"] },
      { name: "Topaz",       emoji: "🌟", benefits: ["Optimism & manifestation", "Attracts good fortune",  "Emotional warmth"] },
      { name: "Turquoise",   emoji: "🔷", benefits: ["Spiritual protection",     "Adventure luck",         "Power of truth"] },
      { name: "Chalcedony",  emoji: "🩵", benefits: ["Brotherhood & kindness",   "Soothing speech",        "Road opener"] },
    ],
  },
  Capricorn: {
    glyph: "♑",
    emoji: "🐐",
    dates: "Dec 22 – Jan 19",
    crystals: [
      { name: "Jade",             emoji: "🪩", benefits: ["Success magnet",           "Wealth & longevity",    "Discipline support"] },
      { name: "Tiger's Eye",      emoji: "🐯", benefits: ["Ambition focus",           "Practical grounding",   "Overcomes procrastination"] },
      { name: "Green Tourmaline", emoji: "💚", benefits: ["Heart-healing ambition",   "Growth with integrity", "Abundant mindset"] },
      { name: "Black Tourmaline", emoji: "⬛", benefits: ["Protective shield",         "Earthy stability",      "Releases negativity"] },
      { name: "Smoky Quartz",     emoji: "🌫️", benefits: ["Stress transmuter",        "Grounded executive energy","Root chakra anchor"] },
      { name: "Garnet",           emoji: "❤️", benefits: ["Commitment to goals",      "Vitality renewal",      "Manifest structure"] },
    ],
  },
  Aquarius: {
    glyph: "♒",
    emoji: "🏺",
    dates: "Jan 20 – Feb 18",
    crystals: [
      { name: "Amethyst", emoji: "💜", benefits: ["Higher consciousness", "Innovative insight",    "Calms chaotic thoughts"] },
      { name: "Hematite", emoji: "⚫", benefits: ["Grounds eccentric energy","Mental clarity",      "Magnetizes positivity"] },
      { name: "Amber",    emoji: "🟡", benefits: ["Ancient wisdom",         "Intellectual creativity","Solar plexus warmth"] },
    ],
  },
  Pisces: {
    glyph: "♓",
    emoji: "🐟",
    dates: "Feb 19 – Mar 20",
    crystals: [
      { name: "Opal",       emoji: "🌈", benefits: ["Dream weaving",        "Divine inspiration",             "Emotional fluidity"] },
      { name: "Amethyst",   emoji: "💜", benefits: ["Intuition amplifier",  "Spiritual shield",               "Dream recall"] },
      { name: "Bloodstone", emoji: "🟢", benefits: ["Anchors watery depths","Courage for empathy",            "Vitality grounding"] },
      { name: "Aquamarine", emoji: "💎", benefits: ["Ocean serenity",       "Calms overwhelm",                "Clarity of soul"] },
      { name: "Fire Opal",  emoji: "🔥", benefits: ["Passionate creativity","Sacral healing",                 "Transforms sensitivity into art"] },
      { name: "Coral",      emoji: "🪸", benefits: ["Emotional immunity",   "Nurturing community",            "Connects to sea energies"] },
    ],
  },
};

// ── Affiliate Link Builder ─────────────────────────────────────────────────────
// Replace XXXXXXXXXX with your real affiliate ID
function buildAffiliateLink(crystalName, signName) {
  const query = encodeURIComponent(`${crystalName} healing crystal`);
  const affiliate = "XXXXXXXXXX"; // ← replace with your affiliate ID
  return `https://www.anrdoezrs.net/click-${affiliate}?url=https://www.gemstone-affiliate.com/search?q=${query}&ref=zodiac_${signName.toLowerCase()}`;
}

// ── DOM Helpers ────────────────────────────────────────────────────────────────
function qs(selector) { return document.querySelector(selector); }
function qsa(selector) { return document.querySelectorAll(selector); }

// ── State ──────────────────────────────────────────────────────────────────────
let activeSign = null;

// ── Build Zodiac Grid ──────────────────────────────────────────────────────────
function buildZodiacGrid() {
  const grid = qs("#zodiacGrid");
  const signs = Object.keys(ZODIAC_DATA);

  signs.forEach((sign) => {
    const data = ZODIAC_DATA[sign];
    const card = document.createElement("button");
    card.className = "zodiac-card";
    card.setAttribute("aria-label", `Select ${sign}`);
    card.dataset.sign = sign;

    card.innerHTML = `
      <span class="zodiac-glyph">${data.emoji}</span>
      <span class="zodiac-name">${sign}</span>
    `;

    card.addEventListener("click", () => selectSign(sign));
    grid.appendChild(card);
  });
}

// ── Select Sign ────────────────────────────────────────────────────────────────
function selectSign(sign) {
  if (activeSign === sign) return;
  activeSign = sign;

  // Update active card state
  qsa(".zodiac-card").forEach((c) => c.classList.remove("active"));
  const activeCard = qs(`.zodiac-card[data-sign="${sign}"]`);
  if (activeCard) activeCard.classList.add("active");

  // Animate panel content out
  const grid = qs("#crystalsContainer");
  grid.classList.add("updating");
  grid.classList.remove("visible");

  setTimeout(() => {
    renderCrystals(sign);
    updatePanelHeader(sign);

    grid.classList.remove("updating");
    // Trigger reflow to re-run transition
    void grid.offsetWidth;
    grid.classList.add("visible");
  }, 180);

  // Smooth scroll to panel on mobile
  if (window.innerWidth < 900) {
    qs("#crystalPanel").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Update document title
  document.title = `${sign} Crystals & Healing Stones | Crystal Compass`;
}

// ── Update Panel Header ────────────────────────────────────────────────────────
function updatePanelHeader(sign) {
  const data = ZODIAC_DATA[sign];
  qs("#panelGlyph").textContent = data.glyph;
  qs("#activeSignName").textContent = sign;
  qs("#panelMeta").textContent = `${data.dates}  ·  ${data.crystals.length} sacred stones`;
}

// ── Render Crystal Cards ───────────────────────────────────────────────────────
function renderCrystals(sign) {
  const data = ZODIAC_DATA[sign];
  const container = qs("#crystalsContainer");
  container.innerHTML = "";

  data.crystals.forEach((crystal, i) => {
    const card = document.createElement("div");
    card.className = "crystal-card";
    card.style.animationDelay = `${i * 0.06}s`;

    const benefitsHTML = crystal.benefits
      .map((b) => `<li>${b}</li>`)
      .join("");

    card.innerHTML = `
      <div class="crystal-visual">
        <span class="crystal-emoji">${crystal.emoji}</span>
      </div>
      <div class="crystal-name">${crystal.name}</div>
      <div class="benefits">
        <span class="benefits-label">healing virtues</span>
        <ul class="benefits-list">
          ${benefitsHTML}
        </ul>
      </div>
      <a
        href="${buildAffiliateLink(crystal.name, sign)}"
        target="_blank"
        rel="noopener sponsored nofollow"
        class="buy-link"
        aria-label="Shop ${crystal.name}"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        Shop ${crystal.name}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </a>
    `;

    container.appendChild(card);
  });
}

// ── Init ───────────────────────────────────────────────────────────────────────
function init() {
  buildZodiacGrid();

  // Default: show Aries
  const defaultSign = "Aries";
  renderCrystals(defaultSign);
  updatePanelHeader(defaultSign);
  activeSign = defaultSign;

  const defaultCard = qs(`.zodiac-card[data-sign="${defaultSign}"]`);
  if (defaultCard) defaultCard.classList.add("active");

  // Kick off visible transition
  const grid = qs("#crystalsContainer");
  requestAnimationFrame(() => {
    grid.classList.add("visible");
  });
}

document.addEventListener("DOMContentLoaded", init);
