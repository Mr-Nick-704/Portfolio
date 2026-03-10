const products = [
  {
    id: 1,
    name: "Skin Glowing Cream",
    category: "brightening",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.21 PM.jpeg",
    headline: "Radiance correction for uneven tone.",
    mechanism:
      "Liquorice, mulberry, glutathione, kojic acid and arbutin work together to reduce dull appearance and visible hyperpigmentation over routine use.",
    bestFor: "Dull skin, uneven tone, hyperpigmentation look",
    ingredients: ["Liquorice Extract", "Mulberry Extract", "Glutathione", "Kojic Acid", "Arbutin"],
    routine: "Use at night after cleansing on dry skin."
  },
  {
    id: 2,
    name: "Skin Glowing Soap",
    category: "brightening",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.22 PM.jpeg",
    headline: "Daily cleanse + tone support.",
    mechanism:
      "Brightening actives in cleanser format help lower surface buildup and support a cleaner-looking, clearer skin appearance.",
    bestFor: "Dullness and uneven skin tone",
    ingredients: ["Glutathione", "Liquorice Extract", "Mulberry", "Vitamin C", "Kojic Acid"],
    routine: "Use during morning and evening cleansing."
  },
  {
    id: 3,
    name: "Kojic + Alpha Arbutin Face Serum",
    category: "serums",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.22 PM (1).jpeg",
    headline: "Pigment-control serum phase.",
    mechanism:
      "2% kojic acid, 1% alpha arbutin and niacinamide target melanin pathways and help reduce dark spot visibility while improving skin texture.",
    bestFor: "Dark spots, uneven complexion, post-acne marks",
    ingredients: ["2% Kojic Acid", "1% Alpha Arbutin", "4% Niacinamide"],
    routine: "Apply after cleanser and before moisturizer."
  },
  {
    id: 4,
    name: "Radiance Face Wash",
    category: "cleansers",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.22 PM (2).jpeg",
    headline: "Clean base for active routine.",
    mechanism: "Kojic acid, allantoin and glutathione help remove grime while supporting a brighter and calmer skin surface.",
    bestFor: "Everyday cleansing for tone care",
    ingredients: ["Kojic Acid", "Allantoin", "Liquorice", "Vitamin C", "L-Glutathione"],
    routine: "Massage gently for 30 seconds, rinse, then layer actives."
  },
  {
    id: 5,
    name: "Acne Control Facewash",
    category: "acne-care",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.23 PM.jpeg",
    headline: "Pore decongestion wash.",
    mechanism:
      "Salicylic, glycolic and lactic acid blend dissolves pore debris, controls excess oil, and reduces recurring breakouts with regular use.",
    bestFor: "Oily and acne-prone skin",
    ingredients: ["Salicylic Acid", "Glycolic Acid", "Lactic Acid"],
    routine: "Use once or twice daily based on tolerance."
  },
  {
    id: 6,
    name: "Anti Acne Gel",
    category: "acne-care",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.23 PM (1).jpeg",
    headline: "Target acne + mark cycle.",
    mechanism:
      "Azelaic acid, salicylic acid and niacinamide reduce bacterial load, calm inflammation and gradually smooth acne marks.",
    bestFor: "Active acne, blackheads, redness-prone skin",
    ingredients: ["Salicylic Acid", "Azelaic Acid", "Niacinamide"],
    routine: "Use on affected zones after cleansing."
  },
  {
    id: 7,
    name: "Acne Defense Soap",
    category: "acne-care",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.24 PM.jpeg",
    headline: "Antibacterial acne hygiene.",
    mechanism: "Formulation helps reduce acne-causing bacteria and maintain cleaner pores for supportive acne management.",
    bestFor: "Breakout-prone skin hygiene",
    ingredients: ["Benzoyl Peroxide", "Clindamycin"],
    routine: "Short-contact cleanse, avoid over-drying."
  },
  {
    id: 8,
    name: "Acne Line Serum",
    category: "acne-care",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.24 PM (1).jpeg",
    headline: "Maintenance formula for mild acne.",
    mechanism:
      "Salicylic + glycolic + niacinamide combination exfoliates blocked follicles, controls sebum, and helps calm redness over prolonged use.",
    bestFor: "Mild acne maintenance cycles",
    ingredients: ["2% Salicylic Acid", "2% Glycolic Acid", "6% Niacinamide"],
    routine: "Night application, sunscreen required next day."
  },
  {
    id: 9,
    name: "Moisturising Cream",
    category: "hydration",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.24 PM (2).jpeg",
    headline: "Barrier lock for dry skin.",
    mechanism:
      "Paraffin emollients create a protective layer that lowers transepidermal water loss and relieves dry, rough skin feel.",
    bestFor: "Dry skin and eczema-prone texture",
    ingredients: ["White Soft Paraffin", "Light Liquid Paraffin"],
    routine: "Apply on damp skin after bath and before sleep."
  },
  {
    id: 10,
    name: "Face and Body Moisturising Lotion",
    category: "hydration",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.24 PM (3).jpeg",
    headline: "Dual-zone hydration system.",
    mechanism: "Aquaxyl and vitamin E improve hydration retention while olive oil supports softness and comfort for face and body.",
    bestFor: "Daily hydration and itch relief",
    ingredients: ["Aquaxyl", "Olive Oil", "Vitamin E"],
    routine: "Use twice daily on clean skin."
  },
  {
    id: 11,
    name: "Syndet Cleansing Bar",
    category: "cleansers",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.25 PM.jpeg",
    headline: "pH-balanced cleansing base.",
    mechanism:
      "Syndet format supports barrier-friendly cleansing with a gentle skin feel, designed for daily comfort across skin types.",
    bestFor: "Sensitive skin and everyday cleansing",
    ingredients: ["Syndet Cleansing Base", "Mild Surfactants"],
    routine: "Use once or twice daily during cleansing."
  },
  {
    id: 12,
    name: "Glow Active Sunscreen SPF 30+",
    category: "sun-care",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.25 PM (2).jpeg",
    headline: "Daily UV shield for Indian skin tones.",
    mechanism:
      "Broad-spectrum coverage reduces UV-triggered pigmentation and photo-aging acceleration while supporting long-term routine stability.",
    bestFor: "Daily city and office sun exposure",
    ingredients: ["Broad Spectrum UV Filters"],
    routine: "Apply as final morning layer, reapply every 3 hours outdoors."
  },
  {
    id: 13,
    name: "SPF 50 Sunscreen",
    category: "sun-care",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.25 PM (1).jpeg",
    headline: "High-defense sunscreen.",
    mechanism: "High UV filter blend supports prevention of tanning and UV-induced dullness with a comfortable daily-wear finish.",
    bestFor: "Everyday sun exposure",
    ingredients: ["UV Filters", "Comfort Finish Support"],
    routine: "Apply generously as final morning step."
  },
  {
    id: 14,
    name: "SPF 50+ Sunscreen",
    category: "sun-care",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.25 PM (3).jpeg",
    headline: "High-shield outdoor defense.",
    mechanism:
      "Elevated SPF coverage protects from peak UV load, preventing tan rebound and helping preserve treatment outcomes.",
    bestFor: "Outdoor sessions and high UV days",
    ingredients: ["SPF 50+ Filters"],
    routine: "Generous amount on face and neck before sun exposure."
  },
  {
    id: 15,
    name: "Premium Sun Shield",
    category: "sun-care",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.25 PM (4).jpeg",
    headline: "Sun-care with comfort finish.",
    mechanism:
      "Hydrating support with protection helps avoid dryness and discomfort while preserving barrier quality under sun stress.",
    bestFor: "Dry-to-normal skin sun routine",
    ingredients: ["Hydration Complex", "UV Protection"],
    routine: "Use as day shield, reapply as required."
  },
  {
    id: 16,
    name: "Hydra Ceramide Sun Lotion",
    category: "sun-care",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.26 PM.jpeg",
    headline: "UV protection + barrier repair.",
    mechanism: "Ceramide and vitamin E support barrier resilience while sunscreen filters defend from UV-driven redness and dehydration.",
    bestFor: "Compromised barrier with sun exposure",
    ingredients: ["Hyaluronic Acid", "Ceramide", "Vitamin E"],
    routine: "Daytime final layer on all exposed skin."
  },
  {
    id: 17,
    name: "KT Silk Soap",
    category: "special-care",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.26 PM (1).jpeg",
    headline: "Specialized cleansing support.",
    mechanism: "Designed for controlled cleansing in special skin conditions with focus on tolerance and safety profile.",
    bestFor: "Physician-guided specialized care",
    ingredients: ["Specialized Cleansing Complex"],
    routine: "Use as directed in focused care cycles."
  },
  {
    id: 18,
    name: "Anti Dandruff Shampoo",
    category: "hair-scalp",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.26 PM (2).jpeg",
    headline: "Scalp microbiome reset.",
    mechanism:
      "Ketoconazole and zinc pyrithione reduce fungal overgrowth, scaling, and irritation while supporting healthier scalp comfort.",
    bestFor: "Dandruff, itchy scalp, flaky scalp",
    ingredients: ["Ketoconazole", "Zinc Pyrithione"],
    routine: "Use 2-3 times weekly on scalp contact time."
  },
  {
    id: 19,
    name: "Hair Vital Shield Oil",
    category: "hair-scalp",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.27 PM.jpeg",
    headline: "Nourish and smooth damaged hair.",
    mechanism:
      "Jojoba and almond oils with vitamin E reduce frizz, add protective slip, and support softer strands under UV and heat stress.",
    bestFor: "Dry, frizzy, or rough hair texture",
    ingredients: ["Jojoba Oil", "Almond Oil", "Vitamin E"],
    routine: "Apply to lengths before wash or as light post-wash serum."
  },
  {
    id: 20,
    name: "Tan Cleanser",
    category: "cleansers",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.27 PM (2).jpeg",
    headline: "Brightening cleanser against tan build-up.",
    mechanism:
      "Vitamin C, niacinamide and vitamin E support tone correction while cleansing away oxidized debris from surface layers.",
    bestFor: "Tan-prone and pollution-exposed skin",
    ingredients: ["Vitamin C", "Niacinamide", "Vitamin E"],
    routine: "Use in evening after sun exposure days."
  },
  {
    id: 21,
    name: "Clotrisafe Medicated Soap",
    category: "special-care",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.28 PM (1).jpeg",
    headline: "Focused fungal hygiene support.",
    mechanism:
      "Clotrimazole-based wash support for common superficial fungal conditions as part of hygiene management.",
    bestFor: "Fungal-prone skin zones",
    ingredients: ["Clotrimazole"],
    routine: "Use on affected zones as advised."
  },
  {
    id: 22,
    name: "Niacinamide + Tranexamic Serum",
    category: "serums",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.28 PM (2).jpeg",
    headline: "Dark spot healer blend.",
    mechanism:
      "Niacinamide with tranexamic support helps reduce spot intensity, calm irritation, and improve skin clarity over time.",
    bestFor: "Stubborn dark spots and post-inflammatory marks",
    ingredients: ["10% Niacinamide", "Tranexamic Acid", "Centella Asiatica"],
    routine: "Night use on clean skin with moisturizer."
  },
  {
    id: 23,
    name: "Azelaic Clarifying Serum",
    category: "serums",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.28 PM (3).jpeg",
    headline: "Clarify inflammation-prone skin.",
    mechanism:
      "Azelaic-driven clarification helps reduce redness patterns and acne traces while improving overall tonal balance.",
    bestFor: "Redness-prone, acne-prone and textured skin",
    ingredients: ["Azelaic Active", "Soothing Support"],
    routine: "Use in evening, introduce gradually."
  },
  {
    id: 24,
    name: "Ceramide Repair Cream",
    category: "hydration",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.29 PM (1).jpeg",
    headline: "Barrier-first moisturizer.",
    mechanism:
      "Ceramide-rich support helps rebuild stratum corneum structure and reduce sensitivity from repeated active usage.",
    bestFor: "Sensitive skin and post-active dryness",
    ingredients: ["Ceramide Complex", "Barrier Lipids"],
    routine: "Morning and night as barrier layer."
  },
  {
    id: 25,
    name: "Peptide Eye Cream",
    category: "special-care",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.30 PM.jpeg",
    headline: "Targeted under-eye support.",
    mechanism: "Peptides improve firmness cues while hydration support reduces tired-looking eye contour appearance.",
    bestFor: "Puffy or dull under-eye area",
    ingredients: ["Peptide Blend", "Hydration Complex"],
    routine: "Tap gently around eye contour at night."
  },
  {
    id: 26,
    name: "Collagen Night Recovery",
    category: "hydration",
    image: "assets/WhatsApp Image 2025-12-04 at 9.10.31 PM.jpeg",
    headline: "Night recovery comfort layer.",
    mechanism: "Recovery blend supports overnight softness, reduces tightness, and complements intensive treatment routines.",
    bestFor: "Night-time dryness and skin fatigue",
    ingredients: ["Collagen Support", "Moisture Matrix"],
    routine: "Final step in your evening routine."
  }
];

// Map each product to a specific new asset (duplication only where assets < products)
const productImageMap = {
  1: "assets/ChatGPT Image Mar 10, 2026, 06_02_19 PM.png",
  2: "assets/ChatGPT Image Mar 10, 2026, 06_07_10 PM.png",
  3: "assets/ChatGPT Image Mar 10, 2026, 06_09_00 PM.png",
  4: "assets/ChatGPT Image Mar 10, 2026, 06_11_30 PM.png",
  5: "assets/ChatGPT Image Mar 10, 2026, 06_13_59 PM.png",
  6: "assets/ChatGPT Image Mar 10, 2026, 06_15_29 PM.png",
  7: "assets/Gemini_Generated_Image_1ohabq1ohabq1oha.png",
  8: "assets/Gemini_Generated_Image_3wj7cy3wj7cy3wj7.png",
  9: "assets/Gemini_Generated_Image_8d9gii8d9gii8d9g.png",
  10: "assets/Gemini_Generated_Image_crxkqocrxkqocrxk.png",
  11: "assets/Gemini_Generated_Image_doacnudoacnudoac.png",
  12: "assets/Gemini_Generated_Image_flwzfiflwzfiflwz.png",
  13: "assets/Gemini_Generated_Image_h0nr2lh0nr2lh0nr.png",
  14: "assets/Gemini_Generated_Image_ju9qwpju9qwpju9q.png",
  15: "assets/Gemini_Generated_Image_kl9in5kl9in5kl9i.png",
  16: "assets/Gemini_Generated_Image_lefebklefebklefe.png",
  17: "assets/Gemini_Generated_Image_nu7tmqnu7tmqnu7t.png",
  18: "assets/Gemini_Generated_Image_oeez51oeez51oeez.png",
  19: "assets/Gemini_Generated_Image_rqwgl5rqwgl5rqwg.png",
  20: "assets/Gemini_Generated_Image_vyb420vyb420vyb4.png",
  21: "assets/Gemini_Generated_Image_wb9z6twb9z6twb9z.png",
  22: "assets/Gemini_Generated_Image_wce2ruwce2ruwce2.png",
  23: "assets/Gemini_Generated_Image_xn6k7lxn6k7lxn6k.png",
  24: "assets/Gemini_Generated_Image_crxkqocrxkqocrxk.png",
  25: "assets/Gemini_Generated_Image_nu7tmqnu7tmqnu7t.png",
  26: "assets/Gemini_Generated_Image_8d9gii8d9gii8d9g.png"
};

products.forEach((product) => {
  if (productImageMap[product.id]) {
    product.image = productImageMap[product.id];
  }
});

const categoryLabels = {
  all: "All Products",
  brightening: "Brightening",
  "acne-care": "Acne Care",
  serums: "Serums",
  cleansers: "Cleansers",
  hydration: "Hydration",
  "sun-care": "Sun Care",
  "hair-scalp": "Hair & Scalp",
  "special-care": "Special Care"
};

const state = {
  activeCategory: "all",
  search: ""
};

function $(id) {
  return document.getElementById(id);
}

const heroMedia = $("heroMedia");
const heroProductImage = $("heroProductImage");
const heroProductCategory = $("heroProductCategory");
const heroProductName = $("heroProductName");
const heroProductHeadline = $("heroProductHeadline");
const heroOpenBtn = $("heroOpenBtn");

const therapyGrid = $("therapyGrid");
const collectionsGrid = $("collectionsGrid");
const autoGalleryTrack = $("autoGalleryTrack");

const siteNav = $("siteNav");
const menuBtn = $("menuBtn");

const chipRow = $("chipRow");
const catalogGrid = $("catalogGrid");
const searchInput = $("searchInput");

const productModal = $("productModal");
const closeModalBtn = $("closeModal");
const modalImage = $("modalImage");
const modalCategory = $("modalCategory");
const modalTitle = $("modalTitle");
const modalHeadline = $("modalHeadline");
const modalMechanism = $("modalMechanism");
const modalBestFor = $("modalBestFor");
const modalIngredients = $("modalIngredients");
const modalRoutine = $("modalRoutine");

function init() {
  setupMenu();
  setupRevealAnimations();
  setupHeroFeatured();
  renderAutoGallery();
  renderTherapyTiles();
  renderCategoryChips();
  renderCatalog();
  renderCollections();
  setupHeroParallax();
  setupModalEvents();

  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      state.search = event.target.value.trim().toLowerCase();
      renderCatalog();
    });
  }
}

function setupMenu() {
  if (!menuBtn || !siteNav) {
    return;
  }

  menuBtn.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
    });
  });
}

function setupHeroFeatured() {
  if (!heroProductImage || !heroProductName || !heroProductCategory || !heroProductHeadline) {
    return;
  }

  const heroProduct = products.find((p) => p.id === 3) || products[0];
  if (!heroProduct) {
    return;
  }

  heroProductImage.src = heroProduct.image;
  heroProductImage.alt = heroProduct.name;
  heroProductCategory.textContent = categoryLabels[heroProduct.category] || heroProduct.category;
  heroProductName.textContent = heroProduct.name;
  heroProductHeadline.textContent = heroProduct.headline;


  const open = () => openProductModal(heroProduct);

  if (heroOpenBtn) {
    heroOpenBtn.addEventListener("click", (event) => {
      event.preventDefault();
      open();
    });
  }

  if (heroMedia) {
    heroMedia.addEventListener("click", open);
    heroMedia.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  }
}

function pickRepresentative(category) {
  return products.find((product) => product.category === category) || products[0];
}

function renderCollections() {
  if (!collectionsGrid) {
    return;
  }

  const collections = [
    {
      title: "The Brightening Collection",
      subtitle: "Routine designed to revive radiance and clarity.",
      tone: "warm",
      imageIds: [1, 22],
      cta: "Shop now",
      span: false
    },
    {
      title: "The Hydration Duo",
      subtitle: "Ceramide and collagen comfort for dry, sensitive skin.",
      tone: "cool",
      imageIds: [24, 26],
      cta: "Shop now",
      span: false
    },
    {
      title: "The Anti-Aging Set",
      subtitle: "Peptides and restorative actives for nighttime repair.",
      tone: "neutral",
      imageIds: [25, 23],
      cta: "Shop now",
      span: true
    }
  ];

  const cardHtml = collections
    .map((collection) => {
      const images = collection.imageIds
        .map((id) => products.find((p) => p.id === id))
        .filter(Boolean)
        .map(
          (product, idx) =>
            `<img src="${product.image}" alt="${product.name}" loading="lazy" class="shot shot-${idx + 1}">`
        )
        .join("");

      const spanClass = collection.span ? "wide" : "";

      return `
        <article class="collection-card tone-${collection.tone} ${spanClass}">
          <div class="collection-copy">
            <h3>${collection.title}</h3>
            <p>${collection.subtitle}</p>
            <button class="btn btn-primary ghosty" data-collection="${collection.title}">${collection.cta}</button>
          </div>
          <div class="collection-images">
            ${images}
          </div>
        </article>
      `;
    })
    .join("");

  collectionsGrid.innerHTML = cardHtml;
}

function renderTherapyTiles() {
  if (!therapyGrid) {
    return;
  }

  const tiles = [
    {
      title: "Moisturizers",
      subtitle: "Barrier + hydration",
      category: "hydration"
    },
    {
      title: "Serums",
      subtitle: "High-performance actives",
      category: "serums"
    },
    {
      title: "Targeted Treatments",
      subtitle: "Acne + spot care",
      category: "acne-care"
    }
  ].map((tile) => {
    const representative = pickRepresentative(tile.category);
    return { ...tile, image: representative.image };
  });

  therapyGrid.innerHTML = tiles
    .map(
      (tile) => `
      <article class="therapy-tile" data-category="${tile.category}" tabindex="0" role="button" aria-label="Browse ${tile.title}">
        <img src="${tile.image}" alt="${tile.title}" loading="lazy">
        <div class="therapy-meta">
          <div>
            <h3>${tile.title}</h3>
            <p>${tile.subtitle}</p>
          </div>
          <div class="therapy-arrow" aria-hidden="true">+</div>
        </div>
      </article>
    `
    )
    .join("");

  const onActivate = (category) => {
    state.activeCategory = category;
    if (searchInput) {
      searchInput.value = "";
    }
    state.search = "";
    renderCategoryChips();
    renderCatalog();
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  therapyGrid.querySelectorAll(".therapy-tile").forEach((tileEl) => {
    tileEl.addEventListener("click", () => onActivate(tileEl.dataset.category));
    tileEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onActivate(tileEl.dataset.category);
      }
    });
  });
}

function renderAutoGallery() {
  if (!autoGalleryTrack) {
    return;
  }

  const galleryImages = Array.from(new Set(products.map((p) => p.image)));
  // duplicate to enable seamless loop
  const loopImages = [...galleryImages, ...galleryImages];

  autoGalleryTrack.innerHTML = loopImages
    .map(
      (src) => `
        <figure class="auto-card">
          <img src="${src}" alt="Product imagery">
        </figure>
      `
    )
    .join("");
}

function renderCategoryChips() {
  if (!chipRow) {
    return;
  }

  const categoryCount = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});

  const categories = ["all", ...Object.keys(categoryCount)];

  chipRow.innerHTML = categories
    .map((category) => {
      const count = category === "all" ? products.length : categoryCount[category];
      const activeClass = state.activeCategory === category ? "active" : "";

      return `
        <button class="chip ${activeClass}" data-category="${category}">
          ${categoryLabels[category] || category} (${count})
        </button>
      `;
    })
    .join("");

  chipRow.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.activeCategory = chip.dataset.category;
      renderCategoryChips();
      renderCatalog();
    });
  });
}

function getFilteredProducts() {
  return products.filter((product) => {
    const categoryMatch = state.activeCategory === "all" || product.category === state.activeCategory;
    const searchable =
      `${product.name} ${product.headline} ${product.mechanism} ${product.bestFor} ${product.ingredients.join(" ")}`.toLowerCase();
    const searchMatch = !state.search || searchable.includes(state.search);
    return categoryMatch && searchMatch;
  });
}

function renderCatalog() {
  if (!catalogGrid) {
    return;
  }

  const filtered = getFilteredProducts();

  if (!filtered.length) {
    catalogGrid.innerHTML = `
      <article class="product-card" aria-label="No products found">
        <div class="product-content">
          <h3>No products found</h3>
          <p>Try another category or search keyword.</p>
        </div>
      </article>
    `;
    return;
  }

  catalogGrid.innerHTML = filtered
    .map(
      (product) => `
      <article class="product-card" data-id="${product.id}">
        <div class="product-visual">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <div class="product-gradient" aria-hidden="true"></div>
        </div>
        <div class="product-content">
          <p class="product-category">${categoryLabels[product.category] || product.category}</p>
          <h3>${product.name}</h3>
          <p>${product.headline}</p>
        </div>
      </article>
    `
    )
    .join("");

  catalogGrid.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => {
      const productId = Number(card.dataset.id);
      const product = products.find((item) => item.id === productId);
      if (product) {
        openProductModal(product);
      }
    });
  });
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupHeroParallax() {
  if (!heroProductImage) {
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    return;
  }

  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.scrollY;
      const translateY = Math.min(scrollY * 0.06, 18);
      const scale = 1 + Math.min(scrollY / 6000, 0.02);
      heroProductImage.style.transform = `translateY(${translateY}px) scale(${scale})`;
    },
    { passive: true }
  );
}

function setupModalEvents() {
  if (!productModal || !closeModalBtn) {
    return;
  }

  closeModalBtn.addEventListener("click", closeProductModal);

  productModal.addEventListener("click", (event) => {
    if (event.target === productModal) {
      closeProductModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && productModal.classList.contains("open")) {
      closeProductModal();
    }
  });
}

function openProductModal(product) {
  if (!productModal) {
    return;
  }

  if (modalImage) {
    modalImage.src = product.image;
    modalImage.alt = product.name;
  }
  if (modalCategory) {
    modalCategory.textContent = categoryLabels[product.category] || product.category;
  }
  if (modalTitle) {
    modalTitle.textContent = product.name;
  }
  if (modalHeadline) {
    modalHeadline.textContent = product.headline;
  }
  if (modalMechanism) {
    modalMechanism.textContent = product.mechanism;
  }
  if (modalBestFor) {
    modalBestFor.textContent = product.bestFor;
  }
  if (modalRoutine) {
    modalRoutine.textContent = product.routine;
  }

  if (modalIngredients) {
    modalIngredients.innerHTML = product.ingredients
      .map((ingredient) => `<span class="pill">${ingredient}</span>`)
      .join("");
  }

  productModal.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  if (!productModal) {
    return;
  }
  productModal.classList.remove("open");
  productModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

init();
