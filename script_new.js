// Product Data with ALL Images from Assets - Organized by Category
const products = [
    // SERUMS (10 products)
    {
        id: 1,
        name: 'Vitamin C Brightening Serum',
        category: 'serums',
        price: 89.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.21 PM.jpeg',
        description: 'Revolutionary Vitamin C serum with 20% L-ascorbic acid, hyaluronic acid, and ferulic acid. This powerful antioxidant formula brightens skin, reduces dark spots, and boosts collagen production.',
        ingredients: ['Vitamin C (20%)', 'Hyaluronic Acid', 'Ferulic Acid', 'Vitamin E'],
        benefits: ['Brightens complexion', 'Reduces hyperpigmentation', 'Anti-aging properties', 'Boosts collagen']
    },
    {
        id: 2,
        name: 'Hyaluronic Acid Hydra-Boost',
        category: 'serums',
        price: 79.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.22 PM (1).jpeg',
        description: 'Multi-molecular hyaluronic acid serum with three different molecular weights for deep penetration. This hydrating powerhouse plumps skin, reduces the appearance of fine lines.',
        ingredients: ['Hyaluronic Acid (3 types)', 'Glycerin', 'Panthenol', 'Sodium PCA'],
        benefits: ['Intense hydration', 'Plumps skin', 'Reduces fine lines', 'Long-lasting moisture']
    },
    {
        id: 3,
        name: 'Niacinamide Clear Solution',
        category: 'serums',
        price: 69.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.23 PM (1).jpeg',
        description: '10% niacinamide serum with zinc and hyaluronic acid. This multi-benefit serum reduces redness, minimizes pore appearance, regulates oil production.',
        ingredients: ['Niacinamide (10%)', 'Zinc PCA', 'Hyaluronic Acid', 'Allantoin'],
        benefits: ['Reduces redness', 'Minimizes pores', 'Controls oil', 'Strengthens barrier']
    },
    {
        id: 4,
        name: 'Azelaic Acid Clarifier',
        category: 'serums',
        price: 74.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.25 PM.jpeg',
        description: '10% azelaic acid serum with niacinamide and salicylic acid. This powerful formula targets acne, rosacea, and hyperpigmentation.',
        ingredients: ['Azelaic Acid (10%)', 'Niacinamide', 'Salicylic Acid', 'Green Tea'],
        benefits: ['Fights acne', 'Reduces redness', 'Evens tone', 'Anti-inflammatory']
    },
    {
        id: 5,
        name: 'Bakuchiol Natural Retinol',
        category: 'serums',
        price: 94.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.25 PM (1).jpeg',
        description: 'Plant-based retinol alternative with bakuchiol and sea buckthorn oil. This gentle yet effective treatment provides anti-aging benefits without irritation.',
        ingredients: ['Bakuchiol', 'Sea Buckthorn Oil', 'Rosemary Extract', 'Vitamin C'],
        benefits: ['Anti-aging', 'Gentle formula', 'Plant-based', 'Reduces wrinkles']
    },
    {
        id: 6,
        name: 'Green Tea Antioxidant',
        category: 'serums',
        price: 52.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.26 PM (2).jpeg',
        description: 'Antioxidant-rich serum with green tea, vitamin E, and ferulic acid. This protective formula fights free radical damage, reduces inflammation.',
        ingredients: ['Green Tea Extract', 'Vitamin E', 'Ferulic Acid', 'Resveratrol'],
        benefits: ['Antioxidant protection', 'Reduces inflammation', 'Environmental defense', 'Anti-aging']
    },
    {
        id: 7,
        name: 'Rosewater Hydration Mist',
        category: 'serums',
        price: 34.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.28 PM (2).jpeg',
        description: 'Refreshing facial mist with rosewater, glycerin, and aloe vera. This hydrating spray instantly refreshes skin, sets makeup, and provides antioxidant protection.',
        ingredients: ['Rosewater', 'Glycerin', 'Aloe Vera', 'Rose Extract'],
        benefits: ['Instant refreshment', 'Sets makeup', 'Hydrates', 'Antioxidant']
    },
    {
        id: 8,
        name: 'Probiotic Skin Balance',
        category: 'serums',
        price: 78.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.28 PM (3).jpeg',
        description: 'Probiotic-rich serum with lactobacillus ferment and prebiotics. This innovative formula balances skin microbiome, reduces inflammation.',
        ingredients: ['Probiotics', 'Prebiotics', 'Lactobacillus Ferment', 'Oat Extract'],
        benefits: ['Balances microbiome', 'Reduces inflammation', 'Strengthens barrier', 'Calms skin']
    },
    {
        id: 9,
        name: 'Zinc Control Toner',
        category: 'serums',
        price: 38.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.29 PM.jpeg',
        description: 'Oil-control toner with zinc, witch hazel, and salicylic acid. This balancing formula regulates sebum production, minimizes pores.',
        ingredients: ['Zinc PCA', 'Witch Hazel', 'Salicylic Acid', 'Menthol'],
        benefits: ['Controls oil', 'Minimizes pores', 'Gentle exfoliation', 'Balances skin']
    },
    {
        id: 10,
        name: 'Blue Light Defense',
        category: 'serums',
        price: 54.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.30 PM (2).jpeg',
        description: 'Digital age protection serum with antioxidants and blue light defense technology. This innovative formula protects skin from digital screen damage.',
        ingredients: ['Blue Light Defense', 'Antioxidants', 'Niacinamide', 'Vitamin E'],
        benefits: ['Digital protection', 'Environmental defense', 'Anti-aging', 'Screen damage protection']
    },
    {
        id: 11,
        name: 'Resveratrol Anti-Aging Serum',
        category: 'serums',
        price: 98.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.31 PM (1).jpeg',
        description: 'Premium anti-aging serum with resveratrol, peptides, and growth factors. This advanced treatment targets multiple signs of aging.',
        ingredients: ['Resveratrol', 'Peptides', 'Growth Factors', 'Vitamin C'],
        benefits: ['Anti-aging', 'Antioxidant', 'Cellular renewal', 'Multiple signs targeted']
    },

    // CREAMS (7 products)
    {
        id: 12,
        name: 'Retinol Renewal Cream',
        category: 'creams',
        price: 124.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.22 PM.jpeg',
        description: 'Advanced retinol cream featuring 0.5% encapsulated retinol with peptides and ceramides. This night-time treatment accelerates cell turnover.',
        ingredients: ['Retinol (0.5%)', 'Peptides', 'Ceramides', 'Niacinamide'],
        benefits: ['Reduces wrinkles', 'Improves texture', 'Enhances firmness', 'Minimizes pores']
    },
    {
        id: 13,
        name: 'Collagen Night Recovery',
        category: 'creams',
        price: 134.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.24 PM.jpeg',
        description: 'Rich night cream with marine collagen, peptides, and ceramides. This luxurious treatment repairs skin while you sleep.',
        ingredients: ['Marine Collagen', 'Peptides', 'Ceramides', 'Shea Butter'],
        benefits: ['Repairs overnight', 'Boosts collagen', 'Intensive hydration', 'Firms skin']
    },
    {
        id: 14,
        name: 'Ceramide Barrier Repair',
        category: 'creams',
        price: 84.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.25 PM (3).jpeg',
        description: 'Barrier repair cream with ceramides, cholesterol, and fatty acids. This essential moisturizer restores the skin barrier.',
        ingredients: ['Ceramides', 'Cholesterol', 'Fatty Acids', 'Panthenol'],
        benefits: ['Repairs barrier', 'Prevents moisture loss', 'Protects skin', 'Soothes sensitivity']
    },
    {
        id: 15,
        name: 'Coenzyme Q10 Energy Boost',
        category: 'creams',
        price: 82.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.29 PM (1).jpeg',
        description: 'Energizing moisturizer with CoQ10, vitamin C, and peptides. This antioxidant-rich formula boosts cellular energy.',
        ingredients: ['Coenzyme Q10', 'Vitamin C', 'Peptides', 'Green Tea Extract'],
        benefits: ['Boosts energy', 'Antioxidant protection', 'Anti-aging', 'Environmental defense']
    },
    {
        id: 16,
        name: 'Aloe Vera Soothing Gel',
        category: 'creams',
        price: 32.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.30 PM.jpeg',
        description: 'Pure aloe vera gel with chamomile and cucumber extract. This soothing treatment calms irritated skin, reduces redness.',
        ingredients: ['Aloe Vera', 'Chamomile', 'Cucumber Extract', 'Allantoin'],
        benefits: ['Soothes irritation', 'Reduces redness', 'Hydrates', 'Post-procedure care']
    },
    {
        id: 17,
        name: 'Peptide Eye Cream',
        category: 'creams',
        price: 68.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.27 PM.jpeg',
        description: 'Luxurious eye cream with peptides, caffeine, and vitamin C. This comprehensive treatment targets dark circles, puffiness.',
        ingredients: ['Peptides', 'Caffeine', 'Vitamin C', 'Shea Butter'],
        benefits: ['Targets dark circles', 'Reduces puffiness', 'Smooths lines', 'Nourishes eyes']
    },
    {
        id: 18,
        name: 'Mineral Sunscreen SPF 50',
        category: 'creams',
        price: 44.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.32 PM.jpeg',
        description: 'Broad-spectrum mineral sunscreen with zinc oxide and titanium dioxide. This non-chemical formula provides UVA/UVB protection.',
        ingredients: ['Zinc Oxide', 'Titanium Dioxide', 'Vitamin E', 'Green Tea'],
        benefits: ['Broad spectrum', 'Mineral formula', 'Non-irritating', 'Daily protection']
    },

    // MASKS (5 products)
    {
        id: 19,
        name: 'Charcoal Detox Mask',
        category: 'masks',
        price: 45.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.22 PM (2).jpeg',
        description: 'Deep-cleansing activated charcoal mask with kaolin clay and salicylic acid. This purifying formula draws out impurities.',
        ingredients: ['Activated Charcoal', 'Kaolin Clay', 'Salicylic Acid', 'Tea Tree Oil'],
        benefits: ['Deep cleanses', 'Minimizes pores', 'Controls oil', 'Prevents breakouts']
    },
    {
        id: 20,
        name: 'Turmeric Brightening Mask',
        category: 'masks',
        price: 42.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.25 PM (2).jpeg',
        description: 'Brightening face mask with turmeric, vitamin C, and honey. This anti-inflammatory mask reduces redness, brightens complexion.',
        ingredients: ['Turmeric Extract', 'Vitamin C', 'Honey', 'Aloe Vera'],
        benefits: ['Brightens skin', 'Reduces redness', 'Anti-inflammatory', 'Antioxidant']
    },
    {
        id: 21,
        name: 'Marine Mineral Mask',
        category: 'masks',
        price: 46.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.27 PM (2).jpeg',
        description: 'Detoxifying mask with marine minerals, seaweed extract, and kaolin clay. This ocean-inspired treatment purifies pores.',
        ingredients: ['Marine Minerals', 'Seaweed Extract', 'Kaolin Clay', 'Magnesium'],
        benefits: ['Detoxifies', 'Provides minerals', 'Balances skin', 'Purifies pores']
    },
    {
        id: 22,
        name: 'Silk Protein Repair Mask',
        category: 'masks',
        price: 48.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.31 PM.jpeg',
        description: 'Luxurious treatment mask with silk proteins, collagen, and hyaluronic acid. This reparative mask strengthens skin.',
        ingredients: ['Silk Proteins', 'Collagen', 'Hyaluronic Acid', 'Pearl Powder'],
        benefits: ['Strengthens skin', 'Intense hydration', 'Silky smooth', 'Plumping effect']
    },
    {
        id: 23,
        name: 'Oatmeal Calming Mask',
        category: 'masks',
        price: 36.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.31 PM (2).jpeg',
        description: 'Soothing mask with colloidal oatmeal, calendula, and honey. This calming treatment reduces irritation, inflammation.',
        ingredients: ['Colloidal Oatmeal', 'Calendula', 'Honey', 'Chamomile'],
        benefits: ['Calms irritation', 'Reduces inflammation', 'Soothes sensitivity', 'Relief for conditions']
    },

    // TREATMENTS (12 products)
    {
        id: 24,
        name: 'Peptide Power Complex',
        category: 'treatments',
        price: 149.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.23 PM.jpeg',
        description: 'Concentrated peptide complex with copper peptides, matrixyl 3000, and argireline. This advanced treatment targets multiple signs of aging.',
        ingredients: ['Copper Peptides', 'Matrixyl 3000', 'Argireline', 'Snap-8'],
        benefits: ['Firms skin', 'Reduces wrinkles', 'Improves elasticity', 'Natural lift']
    },
    {
        id: 25,
        name: 'Glycolic Acid Exfoliant',
        category: 'treatments',
        price: 54.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.24 PM (1).jpeg',
        description: '10% glycolic acid toner with witch hazel and aloe vera. This chemical exfoliant removes dead skin cells.',
        ingredients: ['Glycolic Acid (10%)', 'Witch Hazel', 'Aloe Vera', 'Green Tea Extract'],
        benefits: ['Exfoliates gently', 'Improves texture', 'Enhances absorption', 'Brightens skin']
    },
    {
        id: 26,
        name: 'Vitamin E Repair Oil',
        category: 'treatments',
        price: 59.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.24 PM (2).jpeg',
        description: 'Luxurious facial oil with vitamin E, jojoba oil, and rosehip oil. This nourishing treatment repairs damaged skin.',
        ingredients: ['Vitamin E', 'Jojoba Oil', 'Rosehip Oil', 'Squalane'],
        benefits: ['Repairs skin', 'Reduces inflammation', 'Antioxidant protection', 'Nourishes deeply']
    },
    {
        id: 27,
        name: 'Caffeine Eye Rescue',
        category: 'treatments',
        price: 49.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.24 PM (3).jpeg',
        description: 'Targeted eye treatment with caffeine, peptides, and vitamin K. This cooling gel reduces puffiness, dark circles.',
        ingredients: ['Caffeine', 'Peptides', 'Vitamin K', 'Hyaluronic Acid'],
        benefits: ['Reduces puffiness', 'Diminishes dark circles', 'Smooths fine lines', 'Hydrates eyes']
    },
    {
        id: 28,
        name: 'Alpha Hydroxy Acid Peel',
        category: 'treatments',
        price: 64.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.25 PM (4).jpeg',
        description: 'Professional-strength AHA peel with glycolic, lactic, and mandelic acids. This weekly treatment exfoliates, brightens.',
        ingredients: ['Glycolic Acid', 'Lactic Acid', 'Mandelic Acid', 'Chamomile'],
        benefits: ['Professional strength', 'Exfoliates deeply', 'Brightens skin', 'Reduces wrinkles']
    },
    {
        id: 29,
        name: 'Lactic Acid Hydrating Peel',
        category: 'treatments',
        price: 58.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.27 PM (1).jpeg',
        description: 'Gentle lactic acid peel with hydrating properties. This 10% lactic acid treatment exfoliates while maintaining moisture.',
        ingredients: ['Lactic Acid (10%)', 'Hyaluronic Acid', 'Aloe Vera', 'Chamomile'],
        benefits: ['Gentle exfoliation', 'Maintains hydration', 'Sensitive skin friendly', 'Brightens complexion']
    },
    {
        id: 30,
        name: 'Vitamin K Dark Circle Corrector',
        category: 'treatments',
        price: 44.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.28 PM (1).jpeg',
        description: 'Targeted treatment for dark circles with vitamin K, arnica, and caffeine. This specialized formula strengthens capillaries.',
        ingredients: ['Vitamin K', 'Arnica Extract', 'Caffeine', 'Vitamin C'],
        benefits: ['Reduces dark circles', 'Strengthens capillaries', 'Depuffs eyes', 'Brightens under-eyes']
    },
    {
        id: 31,
        name: 'Vitamin F Essential Fatty Acids',
        category: 'treatments',
        price: 72.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.30 PM (1).jpeg',
        description: 'Essential fatty acid serum with linoleic acid, linolenic acid, and vitamin F. This nourishing treatment repairs skin barrier.',
        ingredients: ['Linoleic Acid', 'Linolenic Acid', 'Vitamin F', 'Evening Primrose Oil'],
        benefits: ['Repairs barrier', 'Reduces inflammation', 'Essential lipids', 'Healthy skin function']
    },
    {
        id: 32,
        name: 'Mandelic Acid Gentle Peel',
        category: 'treatments',
        price: 62.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.30 PM (2).jpeg',
        description: 'Gentle AHA peel with mandelic acid and green tea extract. This mild exfoliant is perfect for sensitive skin.',
        ingredients: ['Mandelic Acid', 'Green Tea Extract', 'Aloe Vera', 'Chamomile'],
        benefits: ['Gentle exfoliation', 'Sensitive skin friendly', 'Brightens', 'Improves texture']
    },
    {
        id: 33,
        name: 'Growth Factor Advanced Treatment',
        category: 'treatments',
        price: 168.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.32 PM (1).jpeg',
        description: 'Cutting-edge treatment with plant-based growth factors and peptides. This premium formula stimulates collagen production.',
        ingredients: ['Growth Factors', 'Peptides', 'Plant Stem Cells', 'Copper Peptides'],
        benefits: ['Stimulates collagen', 'Accelerates repair', 'Anti-aging', 'Visible results']
    },
    {
        id: 34,
        name: 'Salicylic Acid Acne Treatment',
        category: 'treatments',
        price: 48.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.26 PM (1).jpeg',
        description: 'Targeted acne treatment with 2% salicylic acid and tea tree oil. This spot treatment reduces inflammation, kills bacteria.',
        ingredients: ['Salicylic Acid (2%)', 'Tea Tree Oil', 'Witch Hazel', 'Aloe Vera'],
        benefits: ['Fights acne', 'Reduces inflammation', 'Speeds healing', 'Prevents breakouts']
    },
    {
        id: 35,
        name: 'Squalane Ultra Hydrator',
        category: 'treatments',
        price: 56.99,
        image: 'assets/WhatsApp Image 2025-12-04 at 9.10.26 PM.jpeg',
        description: 'Lightweight moisturizer with squalane, glycerin, and ceramides. This non-greasy formula provides intense hydration.',
        ingredients: ['Squalane', 'Glycerin', 'Ceramides', 'Niacinamide'],
        benefits: ['Lightweight', 'Non-greasy', 'Intense hydration', 'Non-comedogenic']
    }
];

// State Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderProducts(products);
    loadProductCarousel();
    setupEventListeners();
    updateCartCount();
});

// Theme Management
function initTheme() {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
}

document.getElementById('themeBtn').addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

// Event Listeners
function setupEventListeners() {
    // Search
    document.getElementById('searchBtn').addEventListener('click', () => {
        document.getElementById('searchModal').classList.add('active');
        document.getElementById('searchInput').focus();
    });

    document.getElementById('searchInput').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const results = products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.category.toLowerCase().includes(query)
        );
        renderSearchResults(results);
    });

    // Close search modal
    document.getElementById('searchModal').addEventListener('click', (e) => {
        if (e.target.id === 'searchModal') {
            document.getElementById('searchModal').classList.remove('active');
        }
    });

    // Filters removed - using all products by default

    // Cart
    document.getElementById('cartBtn').addEventListener('click', () => {
        document.getElementById('cartSidebar').classList.add('active');
        renderCart();
    });

    document.getElementById('cartClose').addEventListener('click', () => {
        document.getElementById('cartSidebar').classList.remove('active');
    });

    // Modal
    document.getElementById('modalClose').addEventListener('click', () => {
        document.getElementById('productModal').classList.remove('active');
    });

    document.getElementById('productModal').addEventListener('click', (e) => {
        if (e.target.id === 'productModal') {
            document.getElementById('productModal').classList.remove('active');
        }
    });

    // Checkout
    document.getElementById('checkoutBtn').addEventListener('click', () => {
        document.getElementById('cartSidebar').classList.remove('active');
        document.getElementById('checkoutModal').classList.add('active');
    });

    document.getElementById('checkoutClose').addEventListener('click', () => {
        document.getElementById('checkoutModal').classList.remove('active');
    });

    document.getElementById('checkoutModal').addEventListener('click', (e) => {
        if (e.target.id === 'checkoutModal') {
            document.getElementById('checkoutModal').classList.remove('active');
        }
    });

    document.getElementById('checkoutForm').addEventListener('submit', completeOrder);

    // FAQ
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            item.classList.toggle('active');
        });
    });
}

// Load Product Carousel
function loadProductCarousel() {
    const track = document.getElementById('productCarousel');
    if (!track) return;

    // Load all products into carousel
    products.forEach((product) => {
        const card = document.createElement('div');
        card.className = 'carousel-card';
        card.innerHTML = `
            <div class="carousel-card-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="carousel-card-info">
                <p class="carousel-card-name">${product.name}</p>
                <p class="carousel-card-price">$${product.price.toFixed(2)}</p>
            </div>
        `;
        card.addEventListener('click', () => openProductModal(product));
        track.appendChild(card);
    });

    // Duplicate for seamless loop
    products.forEach((product) => {
        const card = document.createElement('div');
        card.className = 'carousel-card';
        card.innerHTML = `
            <div class="carousel-card-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="carousel-card-info">
                <p class="carousel-card-name">${product.name}</p>
                <p class="carousel-card-price">$${product.price.toFixed(2)}</p>
            </div>
        `;
        card.addEventListener('click', () => openProductModal(product));
        track.appendChild(card);
    });
}

// Render Products
function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    productsToRender.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        `;
        card.addEventListener('click', () => openProductModal(product));
        grid.appendChild(card);
    });
}

// Open Product Modal
function openProductModal(product) {
    document.getElementById('modalImg').src = product.image;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalCategory').textContent = product.category.toUpperCase();
    document.getElementById('modalPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('modalDescription').textContent = product.description;
    
    const ingredientsList = document.getElementById('modalIngredients');
    ingredientsList.innerHTML = product.ingredients.map(ing => `<li>${ing}</li>`).join('');
    
    const benefitsList = document.getElementById('modalBenefits');
    benefitsList.innerHTML = product.benefits.map(ben => `<li>${ben}</li>`).join('');
    
    document.getElementById('quantity').value = 1;
    document.getElementById('addToCartBtn').onclick = () => addToCart(product);
    
    document.getElementById('productModal').classList.add('active');
}

// Add to Cart
function addToCart(product) {
    const quantity = parseInt(document.getElementById('quantity').value);
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    document.getElementById('productModal').classList.remove('active');
    
    // Show notification
    showNotification('Added to cart!');
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Render Cart
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="padding: 20px; text-align: center; color: var(--text-light-secondary);">Your cart is empty</p>';
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
            </div>
            <div class="cart-item-info">
                <p class="cart-item-name">${item.name}</p>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button>
        `;
        cartItems.appendChild(cartItem);
    });

    updateCartSummary();
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            renderCart();
        }
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

// Update Cart Summary
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Complete Order
function completeOrder(e) {
    e.preventDefault();

    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const formData = new FormData(e.target);
    const order = {
        id: 'ORD-' + Date.now(),
        date: new Date().toLocaleDateString(),
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 1.1,
        customer: {
            name: formData.get('name'),
            email: formData.get('email'),
            address: formData.get('address')
        }
    };

    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

    document.getElementById('checkoutModal').classList.remove('active');
    document.getElementById('checkoutForm').reset();
    
    showNotification('Order placed successfully!');
}

// Render Search Results
function renderSearchResults(results) {
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';

    if (results.length === 0) {
        resultsDiv.innerHTML = '<p style="padding: 20px; text-align: center; color: var(--text-light-secondary);">No products found</p>';
        return;
    }

    results.forEach(product => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = `
            <strong>${product.name}</strong>
            <p style="font-size: 14px; color: var(--text-light-secondary); margin-top: 4px;">$${product.price.toFixed(2)}</p>
        `;
        resultItem.addEventListener('click', () => {
            document.getElementById('searchModal').classList.remove('active');
            openProductModal(product);
        });
        resultsDiv.appendChild(resultItem);
    });
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 2000;
        animation: slideUp 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add slideDown animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(20px);
        }
    }
`;
document.head.appendChild(style);
