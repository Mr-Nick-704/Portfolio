// Image Enhancement Function
class ImageEnhancer {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    // Main image enhancement function
    enhanceImage(imageElement, options = {}) {
        const defaultOptions = {
            brightness: 1.2,
            contrast: 1.1,
            saturation: 1.3,
            sharpness: 1.1,
            noiseReduction: true
        };
        
        const settings = { ...defaultOptions, ...options };
        
        return new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            
            img.onload = () => {
                // Set canvas dimensions
                this.canvas.width = img.width;
                this.canvas.height = img.height;
                
                // Draw original image
                this.ctx.drawImage(img, 0, 0);
                
                // Get image data
                let imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
                let data = imageData.data;
                
                // Apply enhancements
                data = this.applyBrightness(data, settings.brightness);
                data = this.applyContrast(data, settings.contrast);
                data = this.applySaturation(data, settings.saturation);
                
                if (settings.noiseReduction) {
                    data = this.reduceNoise(data);
                }
                
                // Apply sharpness
                imageData = this.applySharpness(imageData, settings.sharpness);
                
                // Put enhanced image back
                this.ctx.putImageData(imageData, 0, 0);
                
                // Convert to data URL
                const enhancedImageUrl = this.canvas.toDataURL('image/jpeg', 0.95);
                resolve(enhancedImageUrl);
            };
            
            img.src = imageElement.src || imageElement;
        });
    }

    // Brightness adjustment
    applyBrightness(data, factor) {
        for (let i = 0; i < data.length; i += 4) {
            data[i] = Math.min(255, data[i] * factor);     // Red
            data[i + 1] = Math.min(255, data[i + 1] * factor); // Green
            data[i + 2] = Math.min(255, data[i + 2] * factor); // Blue
        }
        return data;
    }

    // Contrast adjustment
    applyContrast(data, factor) {
        const intercept = 128 * (1 - factor);
        for (let i = 0; i < data.length; i += 4) {
            data[i] = Math.min(255, Math.max(0, data[i] * factor + intercept));     // Red
            data[i + 1] = Math.min(255, Math.max(0, data[i + 1] * factor + intercept)); // Green
            data[i + 2] = Math.min(255, Math.max(0, data[i + 2] * factor + intercept)); // Blue
        }
        return data;
    }

    // Saturation adjustment
    applySaturation(data, factor) {
        for (let i = 0; i < data.length; i += 4) {
            const gray = 0.2989 * data[i] + 0.5870 * data[i + 1] + 0.1140 * data[i + 2];
            data[i] = Math.min(255, Math.max(0, gray + factor * (data[i] - gray)));     // Red
            data[i + 1] = Math.min(255, Math.max(0, gray + factor * (data[i + 1] - gray))); // Green
            data[i + 2] = Math.min(255, Math.max(0, gray + factor * (data[i + 2] - gray))); // Blue
        }
        return data;
    }

    // Noise reduction (simple median filter)
    reduceNoise(data) {
        const width = this.canvas.width;
        const height = this.canvas.height;
        const output = new Uint8ClampedArray(data);
        
        for (let y = 1; y < height - 1; y++) {
            for (let x = 1; x < width - 1; x++) {
                const idx = (y * width + x) * 4;
                
                for (let c = 0; c < 3; c++) {
                    const values = [];
                    for (let dy = -1; dy <= 1; dy++) {
                        for (let dx = -1; dx <= 1; dx++) {
                            const nIdx = ((y + dy) * width + (x + dx)) * 4 + c;
                            values.push(data[nIdx]);
                        }
                    }
                    values.sort((a, b) => a - b);
                    output[idx + c] = values[4]; // Median value
                }
            }
        }
        
        return output;
    }

    // Sharpness enhancement (unsharp mask)
    applySharpness(imageData, factor) {
        const kernel = [
            0, -1, 0,
            -1, 5, -1,
            0, -1, 0
        ];
        
        return this.convolve(imageData, kernel, factor);
    }

    // Convolution helper function
    convolve(imageData, kernel, factor) {
        const width = imageData.width;
        const height = imageData.height;
        const data = imageData.data;
        const output = new Uint8ClampedArray(data);
        
        for (let y = 1; y < height - 1; y++) {
            for (let x = 1; x < width - 1; x++) {
                const idx = (y * width + x) * 4;
                
                for (let c = 0; c < 3; c++) {
                    let sum = 0;
                    for (let ky = -1; ky <= 1; ky++) {
                        for (let kx = -1; kx <= 1; kx++) {
                            const kIdx = (ky + 1) * 3 + (kx + 1);
                            const nIdx = ((y + ky) * width + (x + kx)) * 4 + c;
                            sum += data[nIdx] * kernel[kIdx];
                        }
                    }
                    output[idx + c] = Math.min(255, Math.max(0, sum * factor));
                }
            }
        }
        
        imageData.data.set(output);
        return imageData;
    }
}

// Initialize image enhancer
const imageEnhancer = new ImageEnhancer();

// Asset images list with detailed product information
const assetImages = [
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.21 PM.jpeg',
        title: 'Vitamin C Brightening Serum',
        category: 'serums',
        price: '$89.99',
        description: 'Revolutionary Vitamin C serum with 20% L-ascorbic acid, hyaluronic acid, and ferulic acid. This powerful antioxidant formula brightens skin, reduces dark spots, and boosts collagen production. Suitable for all skin types, this lightweight serum absorbs quickly and provides 24-hour protection against environmental damage.',
        ingredients: ['Vitamin C (20%)', 'Hyaluronic Acid', 'Ferulic Acid', 'Vitamin E'],
        benefits: ['Brightens complexion', 'Reduces hyperpigmentation', 'Anti-aging properties', 'Boosts collagen']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.22 PM.jpeg',
        title: 'Retinol Renewal Cream',
        category: 'creams',
        price: '$124.99',
        description: 'Advanced retinol cream featuring 0.5% encapsulated retinol with peptides and ceramides. This night-time treatment accelerates cell turnover, reduces fine lines, and improves skin texture. The time-release formula ensures maximum efficacy with minimal irritation.',
        ingredients: ['Retinol (0.5%)', 'Peptides', 'Ceramides', 'Niacinamide'],
        benefits: ['Reduces wrinkles', 'Improves texture', 'Enhances firmness', 'Minimizes pores']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.22 PM (1).jpeg',
        title: 'Hyaluronic Acid Hydra-Boost',
        category: 'serums',
        price: '$79.99',
        description: 'Multi-molecular hyaluronic acid serum with three different molecular weights for deep penetration. This hydrating powerhouse plumps skin, reduces the appearance of fine lines, and maintains moisture levels for up to 72 hours.',
        ingredients: ['Hyaluronic Acid (3 types)', 'Glycerin', 'Panthenol', 'Sodium PCA'],
        benefits: ['Intense hydration', 'Plumps skin', 'Reduces fine lines', 'Long-lasting moisture']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.22 PM (2).jpeg',
        title: 'Charcoal Detox Mask',
        category: 'masks',
        price: '$45.99',
        description: 'Deep-cleansing activated charcoal mask with kaolin clay and salicylic acid. This purifying formula draws out impurities, reduces pore size, and controls excess oil. Perfect for weekly deep cleansing and maintaining clear, balanced skin.',
        ingredients: ['Activated Charcoal', 'Kaolin Clay', 'Salicylic Acid', 'Tea Tree Oil'],
        benefits: ['Deep cleanses', 'Minimizes pores', 'Controls oil', 'Prevents breakouts']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.23 PM.jpeg',
        title: 'Peptide Power Complex',
        category: 'treatments',
        price: '$149.99',
        description: 'Concentrated peptide complex with copper peptides, matrixyl 3000, and argireline. This advanced treatment targets multiple signs of aging, improves skin elasticity, and provides a natural lifting effect. Clinical studies show visible results in 4 weeks.',
        ingredients: ['Copper Peptides', 'Matrixyl 3000', 'Argireline', 'Snap-8'],
        benefits: ['Firms skin', 'Reduces wrinkles', 'Improves elasticity', 'Natural lift']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.23 PM (1).jpeg',
        title: 'Niacinamide Clear Solution',
        category: 'serums',
        price: '$69.99',
        description: '10% niacinamide serum with zinc and hyaluronic acid. This multi-benefit serum reduces redness, minimizes pore appearance, regulates oil production, and strengthens the skin barrier. Ideal for acne-prone and sensitive skin types.',
        ingredients: ['Niacinamide (10%)', 'Zinc PCA', 'Hyaluronic Acid', 'Allantoin'],
        benefits: ['Reduces redness', 'Minimizes pores', 'Controls oil', 'Strengthens barrier']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.24 PM.jpeg',
        title: 'Collagen Night Recovery',
        category: 'creams',
        price: '$134.99',
        description: 'Rich night cream with marine collagen, peptides, and ceramides. This luxurious treatment repairs skin while you sleep, boosts collagen production, and provides intense hydration. Wake up to visibly firmer, more radiant skin.',
        ingredients: ['Marine Collagen', 'Peptides', 'Ceramides', 'Shea Butter'],
        benefits: ['Repairs overnight', 'Boosts collagen', 'Intensive hydration', 'Firms skin']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.24 PM (1).jpeg',
        title: 'Glycolic Acid Exfoliant',
        category: 'treatments',
        price: '$54.99',
        description: '10% glycolic acid toner with witch hazel and aloe vera. This chemical exfoliant removes dead skin cells, improves skin texture, and enhances product absorption. Gentle enough for daily use with proper sun protection.',
        ingredients: ['Glycolic Acid (10%)', 'Witch Hazel', 'Aloe Vera', 'Green Tea Extract'],
        benefits: ['Exfoliates gently', 'Improves texture', 'Enhances absorption', 'Brightens skin']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.24 PM (2).jpeg',
        title: 'Vitamin E Repair Oil',
        category: 'treatments',
        price: '$59.99',
        description: 'Luxurious facial oil with vitamin E, jojoba oil, and rosehip oil. This nourishing treatment repairs damaged skin, reduces inflammation, and provides antioxidant protection. Perfect for dry, mature, or sensitive skin types.',
        ingredients: ['Vitamin E', 'Jojoba Oil', 'Rosehip Oil', 'Squalane'],
        benefits: ['Repairs skin', 'Reduces inflammation', 'Antioxidant protection', 'Nourishes deeply']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.24 PM (3).jpeg',
        title: 'Caffeine Eye Rescue',
        category: 'treatments',
        price: '$49.99',
        description: 'Targeted eye treatment with caffeine, peptides, and vitamin K. This cooling gel reduces puffiness, dark circles, and fine lines around the delicate eye area. The metal applicator provides instant de-puffing action.',
        ingredients: ['Caffeine', 'Peptides', 'Vitamin K', 'Hyaluronic Acid'],
        benefits: ['Reduces puffiness', 'Diminishes dark circles', 'Smooths fine lines', 'Hydrates eyes']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.25 PM.jpeg',
        title: 'Azelaic Acid Clarifier',
        category: 'serums',
        price: '$74.99',
        description: '10% azelaic acid serum with niacinamide and salicylic acid. This powerful formula targets acne, rosacea, and hyperpigmentation. Reduces inflammation, kills bacteria, and evens skin tone without irritation.',
        ingredients: ['Azelaic Acid (10%)', 'Niacinamide', 'Salicylic Acid', 'Green Tea'],
        benefits: ['Fights acne', 'Reduces redness', 'Evens tone', 'Anti-inflammatory']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.25 PM (1).jpeg',
        title: 'Bakuchiol Natural Retinol',
        category: 'serums',
        price: '$94.99',
        description: 'Plant-based retinol alternative with bakuchiol and sea buckthorn oil. This gentle yet effective treatment provides anti-aging benefits without irritation. Perfect for sensitive skin or those who cannot tolerate traditional retinoids.',
        ingredients: ['Bakuchiol', 'Sea Buckthorn Oil', 'Rosemary Extract', 'Vitamin C'],
        benefits: ['Anti-aging', 'Gentle formula', 'Plant-based', 'Reduces wrinkles']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.25 PM (2).jpeg',
        title: 'Turmeric Brightening Mask',
        category: 'masks',
        price: '$42.99',
        description: 'Brightening face mask with turmeric, vitamin C, and honey. This anti-inflammatory mask reduces redness, brightens complexion, and provides antioxidant protection. Leaves skin glowing and refreshed.',
        ingredients: ['Turmeric Extract', 'Vitamin C', 'Honey', 'Aloe Vera'],
        benefits: ['Brightens skin', 'Reduces redness', 'Anti-inflammatory', 'Antioxidant']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.25 PM (3).jpeg',
        title: 'Ceramide Barrier Repair',
        category: 'creams',
        price: '$84.99',
        description: 'Barrier repair cream with ceramides, cholesterol, and fatty acids. This essential moisturizer restores the skin barrier, prevents moisture loss, and protects against environmental damage. Ideal for compromised or sensitive skin.',
        ingredients: ['Ceramides', 'Cholesterol', 'Fatty Acids', 'Panthenol'],
        benefits: ['Repairs barrier', 'Prevents moisture loss', 'Protects skin', 'Soothes sensitivity']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.25 PM (4).jpeg',
        title: 'Alpha Hydroxy Acid Peel',
        category: 'treatments',
        price: '$64.99',
        description: 'Professional-strength AHA peel with glycolic, lactic, and mandelic acids. This weekly treatment exfoliates, brightens, and rejuvenates skin. Reduces the appearance of fine lines and improves overall skin texture.',
        ingredients: ['Glycolic Acid', 'Lactic Acid', 'Mandelic Acid', 'Chamomile'],
        benefits: ['Professional strength', 'Exfoliates deeply', 'Brightens skin', 'Reduces wrinkles']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.26 PM.jpeg',
        title: 'Squalane Ultra Hydrator',
        category: 'creams',
        price: '$56.99',
        description: 'Lightweight moisturizer with squalane, glycerin, and ceramides. This non-greasy formula provides intense hydration without clogging pores. Perfect for all skin types, including oily and acne-prone skin.',
        ingredients: ['Squalane', 'Glycerin', 'Ceramides', 'Niacinamide'],
        benefits: ['Lightweight', 'Non-greasy', 'Intense hydration', 'Non-comedogenic']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.26 PM (1).jpeg',
        title: 'Salicylic Acid Acne Treatment',
        category: 'treatments',
        price: '$48.99',
        description: 'Targeted acne treatment with 2% salicylic acid and tea tree oil. This spot treatment reduces inflammation, kills bacteria, and speeds up healing. Can be used as a spot treatment or all over for acne-prone areas.',
        ingredients: ['Salicylic Acid (2%)', 'Tea Tree Oil', 'Witch Hazel', 'Aloe Vera'],
        benefits: ['Fights acne', 'Reduces inflammation', 'Speeds healing', 'Prevents breakouts']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.26 PM (2).jpeg',
        title: 'Green Tea Antioxidant',
        category: 'serums',
        price: '$52.99',
        description: 'Antioxidant-rich serum with green tea, vitamin E, and ferulic acid. This protective formula fights free radical damage, reduces inflammation, and provides environmental protection. Perfect for daily antioxidant support.',
        ingredients: ['Green Tea Extract', 'Vitamin E', 'Ferulic Acid', 'Resveratrol'],
        benefits: ['Antioxidant protection', 'Reduces inflammation', 'Environmental defense', 'Anti-aging']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.27 PM.jpeg',
        title: 'Peptide Eye Cream',
        category: 'creams',
        price: '$68.99',
        description: 'Luxurious eye cream with peptides, caffeine, and vitamin C. This comprehensive treatment targets dark circles, puffiness, and fine lines. The rich texture nourishes the delicate eye area while providing visible results.',
        ingredients: ['Peptides', 'Caffeine', 'Vitamin C', 'Shea Butter'],
        benefits: ['Targets dark circles', 'Reduces puffiness', 'Smooths lines', 'Nourishes eyes']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.27 PM (1).jpeg',
        title: 'Lactic Acid Hydrating Peel',
        category: 'treatments',
        price: '$58.99',
        description: 'Gentle lactic acid peel with hydrating properties. This 10% lactic acid treatment exfoliates while maintaining moisture levels. Perfect for sensitive skin or those new to chemical exfoliants.',
        ingredients: ['Lactic Acid (10%)', 'Hyaluronic Acid', 'Aloe Vera', 'Chamomile'],
        benefits: ['Gentle exfoliation', 'Maintains hydration', 'Sensitive skin friendly', 'Brightens complexion']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.27 PM (2).jpeg',
        title: 'Marine Mineral Mask',
        category: 'masks',
        price: '$46.99',
        description: 'Detoxifying mask with marine minerals, seaweed extract, and kaolin clay. This ocean-inspired treatment purifies pores, provides essential minerals, and leaves skin refreshed and balanced.',
        ingredients: ['Marine Minerals', 'Seaweed Extract', 'Kaolin Clay', 'Magnesium'],
        benefits: ['Detoxifies', 'Provides minerals', 'Balances skin', 'Purifies pores']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.28 PM (1).jpeg',
        title: 'Vitamin K Dark Circle Corrector',
        category: 'treatments',
        price: '$44.99',
        description: 'Targeted treatment for dark circles with vitamin K, arnica, and caffeine. This specialized formula strengthens capillaries and reduces the appearance of dark circles and under-eye discoloration.',
        ingredients: ['Vitamin K', 'Arnica Extract', 'Caffeine', 'Vitamin C'],
        benefits: ['Reduces dark circles', 'Strengthens capillaries', 'Depuffs eyes', 'Brightens under-eyes']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.28 PM (2).jpeg',
        title: 'Rosewater Hydration Mist',
        category: 'serums',
        price: '$34.99',
        description: 'Refreshing facial mist with rosewater, glycerin, and aloe vera. This hydrating spray instantly refreshes skin, sets makeup, and provides antioxidant protection throughout the day.',
        ingredients: ['Rosewater', 'Glycerin', 'Aloe Vera', 'Rose Extract'],
        benefits: ['Instant refreshment', 'Sets makeup', 'Hydrates', 'Antioxidant']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.28 PM (3).jpeg',
        title: 'Probiotic Skin Balance',
        category: 'serums',
        price: '$78.99',
        description: 'Probiotic-rich serum with lactobacillus ferment and prebiotics. This innovative formula balances skin microbiome, reduces inflammation, and strengthens the skin barrier. Ideal for sensitive and problematic skin.',
        ingredients: ['Probiotics', 'Prebiotics', 'Lactobacillus Ferment', 'Oat Extract'],
        benefits: ['Balances microbiome', 'Reduces inflammation', 'Strengthens barrier', 'Calms skin']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.29 PM.jpeg',
        title: 'Coenzyme Q10 Energy Boost',
        category: 'creams',
        price: '$82.99',
        description: 'Energizing moisturizer with CoQ10, vitamin C, and peptides. This antioxidant-rich formula boosts cellular energy, protects against environmental damage, and provides visible anti-aging benefits.',
        ingredients: ['Coenzyme Q10', 'Vitamin C', 'Peptides', 'Green Tea Extract'],
        benefits: ['Boosts energy', 'Antioxidant protection', 'Anti-aging', 'Environmental defense']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.29 PM (1).jpeg',
        title: 'Zinc Control Toner',
        category: 'serums',
        price: '$38.99',
        description: 'Oil-control toner with zinc, witch hazel, and salicylic acid. This balancing formula regulates sebum production, minimizes pores, and provides gentle exfoliation for oily and combination skin types.',
        ingredients: ['Zinc PCA', 'Witch Hazel', 'Salicylic Acid', 'Menthol'],
        benefits: ['Controls oil', 'Minimizes pores', 'Gentle exfoliation', 'Balances skin']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.30 PM.jpeg',
        title: 'Aloe Vera Soothing Gel',
        category: 'creams',
        price: '$32.99',
        description: 'Pure aloe vera gel with chamomile and cucumber extract. This soothing treatment calms irritated skin, reduces redness, and provides instant hydration. Perfect for post-procedure care or sensitive skin.',
        ingredients: ['Aloe Vera', 'Chamomile', 'Cucumber Extract', 'Allantoin'],
        benefits: ['Soothes irritation', 'Reduces redness', 'Hydrates', 'Post-procedure care']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.30 PM.jpeg',
        title: 'Vitamin F Essential Fatty Acids',
        category: 'treatments',
        price: '$72.99',
        description: 'Essential fatty acid serum with linoleic acid, linolenic acid, and vitamin F. This nourishing treatment repairs skin barrier, reduces inflammation, and provides essential lipids for healthy skin function.',
        ingredients: ['Linoleic Acid', 'Linolenic Acid', 'Vitamin F', 'Evening Primrose Oil'],
        benefits: ['Repairs barrier', 'Reduces inflammation', 'Essential lipids', 'Healthy skin function']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.30 PM (1).jpeg',
        title: 'Blue Light Defense',
        category: 'serums',
        price: '$54.99',
        description: 'Digital age protection serum with antioxidants and blue light defense technology. This innovative formula protects skin from digital screen damage, environmental stressors, and premature aging.',
        ingredients: ['Blue Light Defense', 'Antioxidants', 'Niacinamide', 'Vitamin E'],
        benefits: ['Digital protection', 'Environmental defense', 'Anti-aging', 'Screen damage protection']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.30 PM (2).jpeg',
        title: 'Mandelic Acid Gentle Peel',
        category: 'treatments',
        price: '$62.99',
        description: 'Gentle AHA peel with mandelic acid and green tea extract. This mild exfoliant is perfect for sensitive skin, dark skin tones, or those new to chemical peels. Provides brightening and texture benefits with minimal irritation.',
        ingredients: ['Mandelic Acid', 'Green Tea Extract', 'Aloe Vera', 'Chamomile'],
        benefits: ['Gentle exfoliation', 'Sensitive skin friendly', 'Brightens', 'Improves texture']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.31 PM.jpeg',
        title: 'Silk Protein Repair Mask',
        category: 'masks',
        price: '$48.99',
        description: 'Luxurious treatment mask with silk proteins, collagen, and hyaluronic acid. This reparative mask strengthens skin, provides intense hydration, and leaves skin feeling silky smooth and plump.',
        ingredients: ['Silk Proteins', 'Collagen', 'Hyaluronic Acid', 'Pearl Powder'],
        benefits: ['Strengthens skin', 'Intense hydration', 'Silky smooth', 'Plumping effect']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.31 PM (1).jpeg',
        title: 'Resveratrol Anti-Aging Serum',
        category: 'serums',
        price: '$98.99',
        description: 'Premium anti-aging serum with resveratrol, peptides, and growth factors. This advanced treatment targets multiple signs of aging, provides antioxidant protection, and promotes cellular renewal.',
        ingredients: ['Resveratrol', 'Peptides', 'Growth Factors', 'Vitamin C'],
        benefits: ['Anti-aging', 'Antioxidant', 'Cellular renewal', 'Multiple signs targeted']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.31 PM (2).jpeg',
        title: 'Oatmeal Calming Mask',
        category: 'masks',
        price: '$36.99',
        description: 'Soothing mask with colloidal oatmeal, calendula, and honey. This calming treatment reduces irritation, inflammation, and provides relief for sensitive or compromised skin conditions.',
        ingredients: ['Colloidal Oatmeal', 'Calendula', 'Honey', 'Chamomile'],
        benefits: ['Calms irritation', 'Reduces inflammation', 'Soothes sensitivity', 'Relief for conditions']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.32 PM.jpeg',
        title: 'Growth Factor Advanced Treatment',
        category: 'treatments',
        price: '$168.99',
        description: 'Cutting-edge treatment with plant-based growth factors and peptides. This premium formula stimulates collagen production, accelerates skin repair, and provides visible anti-aging results.',
        ingredients: ['Growth Factors', 'Peptides', 'Plant Stem Cells', 'Copper Peptides'],
        benefits: ['Stimulates collagen', 'Accelerates repair', 'Anti-aging', 'Visible results']
    },
    {
        src: 'assets/WhatsApp Image 2025-12-04 at 9.10.32 PM (1).jpeg',
        title: 'Mineral Sunscreen SPF 50',
        category: 'creams',
        price: '$44.99',
        description: 'Broad-spectrum mineral sunscreen with zinc oxide and titanium dioxide. This non-chemical formula provides UVA/UVB protection without irritation. Perfect for sensitive skin and daily use.',
        ingredients: ['Zinc Oxide', 'Titanium Dioxide', 'Vitamin E', 'Green Tea'],
        benefits: ['Broad spectrum', 'Mineral formula', 'Non-irritating', 'Daily protection']
    }
];

// Function to enhance and load images into carousel
async function loadEnhancedImages() {
    const imageTrack = document.querySelector('.image-track');
    if (!imageTrack) return;
    
    // Clear existing placeholder content
    imageTrack.innerHTML = '';
    
    // Load and enhance images with detailed information
    for (let i = 0; i < Math.min(assetImages.length, 12); i++) {
        const product = assetImages[i];
        try {
            const img = document.createElement('img');
            img.src = product.src;
            img.alt = product.title;
            img.loading = 'lazy';
            img.className = 'product-image';
            
            // Create image card with product info
            const card = document.createElement('div');
            card.className = 'image-card';
            card.dataset.category = product.category;
            card.dataset.productId = i;
            
            // Create product overlay
            const overlay = document.createElement('div');
            overlay.className = 'product-overlay';
            overlay.innerHTML = `
                <h3>${product.title}</h3>
                <p class="product-price">${product.price}</p>
                <p class="product-category">${product.category}</p>
                <button class="view-details-btn">View Details</button>
            `;
            
            card.appendChild(img);
            card.appendChild(overlay);
            
            // Add click event for modal
            card.addEventListener('click', () => openProductModal(product));
            
            // Enhance the image when it loads
            img.onload = async () => {
                try {
                    const enhancedUrl = await imageEnhancer.enhanceImage(img);
                    img.src = enhancedUrl;
                    card.classList.add('enhanced');
                } catch (error) {
                    console.log('Image enhancement failed, using original:', error);
                }
            };
            
            imageTrack.appendChild(card);
            
            // Add duplicate for seamless loop
            if (i < 6) {
                const duplicateCard = card.cloneNode(true);
                duplicateCard.addEventListener('click', () => openProductModal(product));
                imageTrack.appendChild(duplicateCard);
            }
        } catch (error) {
            console.error('Error loading product:', error);
        }
    }
}

// Product Modal functionality
function openProductModal(product) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');
    const modalCategory = document.getElementById('modalCategory');
    
    modalImage.src = product.src;
    modalImage.alt = product.title;
    modalTitle.textContent = product.title;
    modalDescription.textContent = product.description;
    modalPrice.textContent = product.price;
    modalCategory.textContent = product.category;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Store current product for enhancement
    modal.dataset.currentProduct = JSON.stringify(product);
}

// Close modal functionality
document.addEventListener('DOMContentLoaded', () => {
    // Load enhanced images
    loadEnhancedImages();
    
    // Modal close functionality
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Enhancement controls
    const enhanceBtn = document.getElementById('enhanceBtn');
    const resetBtn = document.getElementById('resetBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    
    enhanceBtn.addEventListener('click', enhanceModalImage);
    resetBtn.addEventListener('click', resetModalImage);
    downloadBtn.addEventListener('click', downloadImage);
    
    // Filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProducts(btn.dataset.filter);
        });
    });
    
    // Add to cart functionality
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', addToCart);
});

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

async function enhanceModalImage() {
    const modalImage = document.getElementById('modalImage');
    const enhanceBtn = document.getElementById('enhanceBtn');
    
    enhanceBtn.textContent = 'Enhancing...';
    enhanceBtn.disabled = true;
    
    try {
        const enhancedUrl = await imageEnhancer.enhanceImage(modalImage);
        modalImage.src = enhancedUrl;
        enhanceBtn.textContent = 'Enhanced!';
        
        setTimeout(() => {
            enhanceBtn.textContent = 'Enhance';
            enhanceBtn.disabled = false;
        }, 2000);
    } catch (error) {
        console.error('Enhancement failed:', error);
        enhanceBtn.textContent = 'Enhance';
        enhanceBtn.disabled = false;
    }
}

function resetModalImage() {
    const modal = document.getElementById('imageModal');
    const product = JSON.parse(modal.dataset.currentProduct);
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = product.src;
}

function downloadImage() {
    const modalImage = document.getElementById('modalImage');
    const product = JSON.parse(document.getElementById('imageModal').dataset.currentProduct);
    
    const link = document.createElement('a');
    link.download = `${product.title}.jpg`;
    link.href = modalImage.src;
    link.click();
}

function filterProducts(category) {
    const cards = document.querySelectorAll('.image-card');
    
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 100);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

function addToCart() {
    const product = JSON.parse(document.getElementById('imageModal').dataset.currentProduct);
    
    // Create cart notification
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <h4>Added to Cart!</h4>
            <p>${product.title} - ${product.price}</p>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Hide and remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
    
    // Update cart count (if you have a cart counter)
    updateCartCount();
}

function updateCartCount() {
    // This would update a cart counter if you have one
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const currentCount = parseInt(cartCount.textContent) || 0;
        cartCount.textContent = currentCount + 1;
    }
}

// Initialize and load products by category
document.addEventListener('DOMContentLoaded', () => {
    loadProductsByCategory();
    loadAutoCarousel();
    setupModalFunctionality();
    setupSmoothScroll();
    setupHeaderScroll();
});

function loadAutoCarousel() {
    const track = document.getElementById('autoCarouselTrack');
    if (!track) return;
    
    // Load all products into carousel
    assetImages.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'auto-carousel-card';
        card.innerHTML = `
            <img src="${product.src}" alt="${product.title}" class="carousel-product-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%23ddd%22 width=%22100%22 height=%22100%22/%3E%3C/svg%3E'">
            <div class="carousel-product-info">
                <h4>${product.title}</h4>
            </div>
        `;
        card.addEventListener('click', () => openProductModal(product));
        track.appendChild(card);
    });
    
    // Duplicate for seamless loop
    assetImages.forEach((product) => {
        const card = document.createElement('div');
        card.className = 'auto-carousel-card';
        card.innerHTML = `
            <img src="${product.src}" alt="${product.title}" class="carousel-product-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%23ddd%22 width=%22100%22 height=%22100%22/%3E%3C/svg%3E'">
            <div class="carousel-product-info">
                <h4>${product.title}</h4>
            </div>
        `;
        card.addEventListener('click', () => openProductModal(product));
        track.appendChild(card);
    });
}

function loadProductsByCategory() {
    const categories = ['serums', 'creams', 'masks', 'treatments'];
    
    categories.forEach(category => {
        const gridId = category + 'Grid';
        const grid = document.getElementById(gridId);
        if (!grid) return;
        
        const products = assetImages.filter(p => p.category === category);
        
        products.forEach((product, index) => {
            const card = createProductCard(product, index);
            grid.appendChild(card);
        });
    });
}

function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = (index * 0.1) + 's';
    
    card.innerHTML = `
        <div class="product-image-wrapper">
            <img src="${product.src}" alt="${product.title}" class="product-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%23ddd%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22 font-size=%2214%22%3EImage Not Found%3C/text%3E%3C/svg%3E'">
            <div class="product-overlay">
                <button class="view-btn">View Details</button>
            </div>
        </div>
        <div class="product-info">
            <h3>${product.title}</h3>
            <p class="product-desc">${product.description.substring(0, 80)}...</p>
        </div>
    `;
    
    card.querySelector('.view-btn').addEventListener('click', () => openProductModal(product));
    
    return card;
}

function openProductModal(product) {
    const modal = document.getElementById('productModal');
    document.getElementById('modalImage').src = product.src;
    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalCategory').textContent = product.category;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    modal.dataset.currentProduct = JSON.stringify(product);
}

function setupModalFunctionality() {
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    document.getElementById('enhanceBtn').addEventListener('click', enhanceImage);
    document.getElementById('resetBtn').addEventListener('click', resetImage);
    document.getElementById('downloadBtn').addEventListener('click', downloadImage);
}

async function enhanceImage() {
    const btn = document.getElementById('enhanceBtn');
    const img = document.getElementById('modalImage');
    
    btn.textContent = 'Enhancing...';
    btn.disabled = true;
    
    try {
        const enhanced = await imageEnhancer.enhanceImage(img);
        img.src = enhanced;
        btn.textContent = 'Enhanced!';
        setTimeout(() => {
            btn.textContent = 'Enhance';
            btn.disabled = false;
        }, 2000);
    } catch (e) {
        btn.textContent = 'Enhance';
        btn.disabled = false;
    }
}

function resetImage() {
    const modal = document.getElementById('productModal');
    const product = JSON.parse(modal.dataset.currentProduct);
    document.getElementById('modalImage').src = product.src;
}

function downloadImage() {
    const img = document.getElementById('modalImage');
    const modal = document.getElementById('productModal');
    const product = JSON.parse(modal.dataset.currentProduct);
    
    const link = document.createElement('a');
    link.href = img.src;
    link.download = product.title + '.jpg';
    link.click();
}

function addToCart(product) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `Added ${product.title} to cart!`;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function setupHeaderScroll() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadEnhancedImages();
});

// Export for potential use in other scripts
window.ImageEnhancer = ImageEnhancer;
window.imageEnhancer = imageEnhancer;
