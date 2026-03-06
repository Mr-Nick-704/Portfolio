const products = [
    {
        id: 1,
        name: "Skin Glowing Cream",
        category: "brightening",
        image: "assets/WhatsApp Image 2025-12-04 at 9.10.21 PM.jpeg",
        headline: "Radiance correction for uneven tone.",
        mechanism: "Liquorice, mulberry, glutathione, kojic acid and arbutin work together to reduce dull appearance and visible hyperpigmentation over routine use.",
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
        mechanism: "Brightening actives in cleanser format help lower surface buildup and support a cleaner-looking, clearer skin appearance.",
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
        mechanism: "2% kojic acid, 1% alpha arbutin and niacinamide target melanin pathways and help reduce dark spot visibility while improving skin texture.",
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
        mechanism: "Salicylic, glycolic and lactic acid blend dissolves pore debris, controls excess oil, and reduces recurring breakouts with regular use.",
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
        mechanism: "Azelaic acid, salicylic acid and niacinamide reduce bacterial load, calm inflammation and gradually smooth acne marks.",
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
        mechanism: "Salicylic + glycolic + niacinamide combination exfoliates blocked follicles, controls sebum, and helps calm redness over prolonged use.",
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
        mechanism: "Paraffin emollients create a protective layer that lowers transepidermal water loss and relieves dry, rough skin feel.",
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
        mechanism: "Syndet format helps maintain skin-friendly pH while giving freshness and effective cleanliness without harsh alkaline stress.",
        bestFor: "Sensitive, dry, or barrier-aware cleansing",
        ingredients: ["Syndet Base", "Skin pH Support"],
        routine: "Use as daily bath and face cleansing bar."
    },
    {
        id: 12,
        name: "20% Vitamin C Face Serum",
        category: "serums",
        image: "assets/WhatsApp Image 2025-12-04 at 9.10.25 PM (1).jpeg",
        headline: "High-intensity antioxidant boost.",
        mechanism: "Vitamin C plus hyaluronic hydration helps brighten tone, support collagen pathways, and reduce visible photo-damage signals.",
        bestFor: "Dark spots, fine lines, glow enhancement",
        ingredients: ["Vitamin C", "Hyaluronic Acid"],
        routine: "Morning use followed by sunscreen."
    },
    {
        id: 13,
        name: "Anti Ageing Sunscreen",
        category: "sun-care",
        image: "assets/WhatsApp Image 2025-12-04 at 9.10.25 PM (2).jpeg",
        headline: "Daily UV shield for Indian skin tones.",
        mechanism: "Broad-spectrum coverage reduces UV-triggered pigmentation and photo-aging acceleration while supporting long-term routine stability.",
        bestFor: "Daily city and office sun exposure",
        ingredients: ["Broad Spectrum UV Filters"],
        routine: "Apply as final morning layer, reapply every 3 hours outdoors."
    },
    {
        id: 14,
        name: "SPF 50+ Sunscreen",
        category: "sun-care",
        image: "assets/WhatsApp Image 2025-12-04 at 9.10.25 PM (3).jpeg",
        headline: "High-shield outdoor defense.",
        mechanism: "Elevated SPF coverage protects from peak UV load, preventing tan rebound and helping preserve treatment outcomes.",
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
        mechanism: "Hydrating support with protection helps avoid dryness and discomfort while preserving barrier quality under sun stress.",
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
        mechanism: "Ketoconazole and zinc pyrithione reduce fungal overgrowth, scaling, and irritation while supporting healthier scalp comfort.",
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
        mechanism: "Jojoba and almond oils with vitamin E reduce frizz, add protective slip, and support softer strands under UV and heat stress.",
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
        mechanism: "Vitamin C, niacinamide and vitamin E support tone correction while cleansing away oxidized debris from surface layers.",
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
        mechanism: "Clotrimazole-based wash support for common superficial fungal conditions as part of hygiene management.",
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
        mechanism: "Niacinamide with tranexamic support helps reduce spot intensity, calm irritation, and improve skin clarity over time.",
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
        mechanism: "Azelaic-driven clarification helps reduce redness patterns and acne traces while improving overall tonal balance.",
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
        mechanism: "Ceramide-rich support helps rebuild stratum corneum structure and reduce sensitivity from repeated active usage.",
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

const featuredStoryIds = [1, 5, 12, 14, 18, 22];

const state = {
    activeCategory: "all",
    search: "",
    activeStory: 0
};

const heroMedia = document.getElementById("heroMedia");
const siteNav = document.getElementById("siteNav");
const menuBtn = document.getElementById("menuBtn");

const chipRow = document.getElementById("chipRow");
const catalogGrid = document.getElementById("catalogGrid");
const searchInput = document.getElementById("searchInput");

const storySteps = document.getElementById("storySteps");
const storyImage = document.getElementById("storyImage");
const storyCategory = document.getElementById("storyCategory");
const storyName = document.getElementById("storyName");
const storyMechanism = document.getElementById("storyMechanism");
const storyDots = document.getElementById("storyDots");

const productModal = document.getElementById("productModal");
const closeModalBtn = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalHeadline = document.getElementById("modalHeadline");
const modalMechanism = document.getElementById("modalMechanism");
const modalBestFor = document.getElementById("modalBestFor");
const modalIngredients = document.getElementById("modalIngredients");
const modalRoutine = document.getElementById("modalRoutine");

function init() {
    setupMenu();
    renderCategoryChips();
    renderCatalog();
    renderStorySteps();
    activateStory(0);
    setupStoryObserver();
    setupRevealAnimations();
    setupHeroParallax();
    setupModalEvents();

    searchInput.addEventListener("input", (event) => {
        state.search = event.target.value.trim().toLowerCase();
        renderCatalog();
    });
}

function setupMenu() {
    menuBtn.addEventListener("click", () => {
        siteNav.classList.toggle("open");
    });

    siteNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            siteNav.classList.remove("open");
        });
    });
}

function renderCategoryChips() {
    const categoryCount = products.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
    }, {});

    const categories = ["all", ...Object.keys(categoryCount)];

    chipRow.innerHTML = categories.map((category) => {
        const count = category === "all" ? products.length : categoryCount[category];
        const activeClass = state.activeCategory === category ? "active" : "";

        return `
            <button class="chip ${activeClass}" data-category="${category}">
                ${categoryLabels[category] || category} (${count})
            </button>
        `;
    }).join("");

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
        const searchable = `${product.name} ${product.headline} ${product.mechanism} ${product.bestFor} ${product.ingredients.join(" ")}`.toLowerCase();
        const searchMatch = !state.search || searchable.includes(state.search);
        return categoryMatch && searchMatch;
    });
}

function renderCatalog() {
    const filtered = getFilteredProducts();

    if (!filtered.length) {
        catalogGrid.innerHTML = `
            <article class="product-card">
                <div class="product-content">
                    <h3>No products found</h3>
                    <p>Try another category or search keyword.</p>
                </div>
            </article>
        `;
        return;
    }

    catalogGrid.innerHTML = filtered.map((product) => `
        <article class="product-card" data-id="${product.id}">
            <div class="product-visual">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-gradient"></div>
            </div>
            <div class="product-content">
                <p class="product-category">${categoryLabels[product.category] || product.category}</p>
                <h3>${product.name}</h3>
                <p>${product.headline}</p>
            </div>
        </article>
    `).join("");

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

function renderStorySteps() {
    const featured = featuredStoryIds
        .map((id) => products.find((product) => product.id === id))
        .filter(Boolean);

    storySteps.innerHTML = featured.map((product, index) => `
        <article class="story-step" data-index="${index}">
            <h4>${product.name}</h4>
            <p>${product.headline}</p>
            <p class="step-meta">${categoryLabels[product.category] || product.category} | ${product.bestFor}</p>
        </article>
    `).join("");

    storyDots.innerHTML = featured.map((_, index) => `<span class="dot" data-dot="${index}"></span>`).join("");
}

function activateStory(index) {
    const featured = featuredStoryIds
        .map((id) => products.find((product) => product.id === id))
        .filter(Boolean);

    const current = featured[index];
    if (!current) {
        return;
    }

    state.activeStory = index;
    storyImage.classList.add("swap");

    setTimeout(() => {
        storyImage.src = current.image;
        storyImage.alt = current.name;
        storyCategory.textContent = categoryLabels[current.category] || current.category;
        storyName.textContent = current.name;
        storyMechanism.textContent = current.mechanism;
        storyImage.classList.remove("swap");
    }, 140);

    storySteps.querySelectorAll(".story-step").forEach((step) => {
        const stepIndex = Number(step.dataset.index);
        step.classList.toggle("active", stepIndex === index);
    });

    storyDots.querySelectorAll(".dot").forEach((dot) => {
        const dotIndex = Number(dot.dataset.dot);
        dot.classList.toggle("active", dotIndex === index);
    });
}

function setupStoryObserver() {
    const options = {
        threshold: 0.55,
        rootMargin: "-6% 0px -20% 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Number(entry.target.dataset.index);
                activateStory(index);
            }
        });
    }, options);

    storySteps.querySelectorAll(".story-step").forEach((step) => observer.observe(step));
}

function setupRevealAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    document.querySelectorAll(".reveal").forEach((element) => {
        observer.observe(element);
    });
}

function setupHeroParallax() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
        return;
    }

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const scale = 1 + Math.min(scrollY / 4000, 0.08);
        const translateY = Math.min(scrollY * 0.18, 54);
        heroMedia.style.transform = `translateY(${translateY}px) scale(${scale})`;
    }, { passive: true });
}

function setupModalEvents() {
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
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalCategory.textContent = categoryLabels[product.category] || product.category;
    modalTitle.textContent = product.name;
    modalHeadline.textContent = product.headline;
    modalMechanism.textContent = product.mechanism;
    modalBestFor.textContent = product.bestFor;
    modalRoutine.textContent = product.routine;

    modalIngredients.innerHTML = product.ingredients.map((ingredient) => `
        <span class="pill">${ingredient}</span>
    `).join("");

    productModal.classList.add("open");
    productModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeProductModal() {
    productModal.classList.remove("open");
    productModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

init();
