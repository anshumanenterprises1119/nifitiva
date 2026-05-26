/* ==========================================================================
   NIFITIVA APP LOGIC - DATA, FILTERS, MODALS (LOCKED PREMIUM BLACK & INR PRICING)
   ========================================================================== */

// --- 1. Product Database (14 Real Items Scraped from bio.site/nifitiva & Verified on Amazon India) ---
const PRODUCTS_DATA = [
    {
        id: "sandscape",
        title: "Arthink Moving Sand Art Dynamic Sandscape Picture",
        category: "decor",
        price: 999,
        rating: 4.8,
        reviewsCount: 312,
        image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/2YMopVyFdSAndZYoVkVq2Z.webp",
        tag: "Best Seller",
        materials: ["Glass", "Sand", "Acrylic"],
        edits: ["organic"],
        specs: {
            "Dimensions": "7 inches (Round)",
            "Material": "Double-sided polished glass, quicksand, fine acrylic base",
            "Visual Style": "Relaxing dynamic desert landscape art",
            "Adjustable Flow": "Includes air regulator to adjust flow speed"
        },
        features: [
            "Creates shifting mountain ranges, dunes, and ocean-like ripples.",
            "Smooth motion and rich textures provide a therapeutic visual experience.",
            "Excellent desk ornament, nightstand accent, or modern bookshelf piece.",
            "Crafted from highly transparent lead-free glass for maximum clarity."
        ],
        description: "The Arthink Moving Sand Art Picture is a stunning, round glass kinetic sand sculpture that constantly shifts and reforms into natural land formations right before your eyes. Perfect for adding a touch of soothing luxury to your desk or living room shelves, it features high-transparency glass and vibrant sand layers that create new landscapes with every single rotation.",
        affiliateUrl: "https://amzn.to/4wg0bKQ"
    },
    {
        id: "led-vine",
        title: "LED Willow Branch Vine Hanging Lights",
        category: "electrical",
        price: 1299,
        rating: 4.9,
        reviewsCount: 154,
        image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/q7WAk8TY5PnEZacpYBwwA9.jpg",
        tag: "Ambient Tech",
        materials: ["LED", "Flexible Wire", "PVC"],
        edits: ["midnight"],
        specs: {
            "Length": "2.3 meters (7.5 feet)",
            "LED Count": "144 warm white LED beads",
            "Material": "Fully flexible waterproof vine branches",
            "Power Supply": "Standard USB adapter or battery pack",
            "Controller": "Integrated button for multiple pulsing glow settings"
        },
        features: [
            "Bendable willow vine branches that conform to any wall angle or frame.",
            "144 high-efficiency glowing warm LEDs providing a gorgeous branch-like silhouette.",
            "Creates an instantly magical, warm, and comforting atmospheric wall accent.",
            "Stays completely cool to the touch after hours of continuous illumination."
        ],
        description: "Transform your bare walls into a cozy mystical forest with the LED Willow Vine Hanging Light. Designed to look like a glowing branch scaling your room, it features 144 micro warm-white LEDs woven into fully flexible brown vine branches that you can drape, fold, and mount into corners, bookshelves, or surrounding mirrors for premium ambient glow.",
        affiliateUrl: "https://amzn.to/4d57NXW"
    },
    {
        id: "aesthetic-decor",
        title: "SpecialYou Green Ivy Artificial Vines with Fairy Lights",
        category: "decor",
        price: 399,
        rating: 4.6,
        reviewsCount: 88,
        image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/q8Gg8MXp2n8jxeVuHPQtZf.jpg",
        tag: "Editorial Choice",
        materials: ["Plastic", "LEDs", "Silk"],
        edits: ["organic"],
        specs: {
            "Bundle Includes": "4 green ivy artificial vines, Eelectric warm-white LED string fairy lights",
            "Aesthetic Type": "Creamy beige Wabi-Sabi textures",
            "Ideal Placement": "Entryway console tables, vanity tops, desk corners"
        },
        features: [
            "Handpicked bundle designed to create a cozy, photogenic Instagram styling corner.",
            "Neutral earth tones that blend seamlessly into minimalist or mid-century setups.",
            "Premium-grade unglazed ceramic body for a beautifully raw, organic touch."
        ],
        description: "Curate your own aesthetic desktop styling vignettes with this handpicked Room Decor Items Bundle. Pairing raw chalky ceramic textures with neutral tones, it serves as the perfect decorative foundation to hold keys, jewelry, diffusers, or dynamic desktop gadgets.",
        affiliateUrl: "https://amzn.to/4dvaNOA"
    },
    {
        id: "cube-sticker",
        title: "3D Cube Pixelated Box Floating Void Wall Sticker",
        category: "decor",
        price: 199,
        rating: 4.5,
        reviewsCount: 42,
        image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/3KBBEMhLiP4ohReDtq7Aj6.jpg",
        tag: "Creative Art",
        materials: ["Vinyl", "Adhesive"],
        edits: ["midnight"],
        specs: {
            "Dimensions": "40cm x 40cm",
            "Sticker Type": "Self-adhesive high-density PVC vinyl",
            "Illusion Depth": "Hyperrealistic 3D isometric projection",
            "Removability": "Safe peel-and-stick, leaves zero sticky residue"
        },
        features: [
            "Mind-bending three-dimensional pixel box illusion that turns flat walls into a portal.",
            "Perfect for gamers, high-tech desk setups, and modern creative bedrooms.",
            "Matte anti-reflective finishing that enhances the 3D depth effect under direct light."
        ],
        description: "Add a striking retro-futuristic focal point to your walls with the 3D Cube Pixelated Box Illusion Sticker. Carved from premium self-adhesive vinyl, it creates a highly convincing 3D isometric void on your wall, making it look as though an architectural block is floating out of your room.",
        affiliateUrl: "https://amzn.to/4daXyRV"
    },
    {
        id: "neon-led",
        title: "Flexible Silicone Waterproof LED Neon Light Strip",
        category: "electrical",
        price: 999,
        rating: 4.8,
        reviewsCount: 521,
        image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/Stg5aG6yA3f8437dsEhLAe.jpg",
        tag: "Tech Glow",
        materials: ["Silicone", "LED"],
        edits: ["midnight"],
        specs: {
            "Length": "5 meters (16.4 feet)",
            "Waterproofing": "IP67 weather resistant",
            "Working Voltage": "DC 12V low voltage",
            "Chassis": "Flexible frosted silicone diffuser channel"
        },
        features: [
            "Dot-free lighting with continuous, smooth neon-like glowing diffusion.",
            "Highly flexible silicone tubing that can be bent into signs, lettering, or desk halos.",
            "Low-heat, low-voltage operation that is completely safe for bedroom installations."
        ],
        description: "Ditch the ugly exposed LED beads. Our Neon LED Flexible Strip Light is encased in a premium frosted silicone channel, diffusing a continuous, uniform sheet of colorful light that resembles luxury glass neon. It is fully bendable and can outline computer desks, dynamic floating bed bases, or custom architectural outlines.",
        affiliateUrl: "https://amzn.to/3QWv9HN"
    },
    {
        id: "sensor-light",
        title: "Wireless Magnetic Motion Activated LED Bar Light",
        category: "electrical",
        price: 349,
        rating: 4.7,
        reviewsCount: 198,
        image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/qJiRxfsp6aXoJzNaf5XCJg.jpg",
        tag: "Daily Essential",
        materials: ["Aluminum", "ABS", "Magnet"],
        edits: ["organic"],
        specs: {
            "Dimensions": "20cm x 4cm x 1.5cm",
            "Detection Angle": "120 degrees dynamic arc",
            "Battery": "Built-in rechargeable 1000mAh battery via Micro-USB",
            "Attachment": "Integrated magnetic strip with 3M adhesive background"
        },
        features: [
            "Smart motion-activated sensing: turns on within 10 feet, off after 20s of no movement.",
            "Fully wireless magnetic mount: detach instantly to use as a portable emergency flashlight.",
            "Beautiful warm ambient lighting profile that makes dark hallways feel like premium galleries."
        ],
        description: "Eliminate dark corners and clumsy midnight searches with the Wireless Magnetic Motion Sensor Light. Crafted with a premium aluminum chassis and equipped with a smart infrared motion sensor, it mounts magnetically to any flat surface, making it the perfect aesthetic illumination tool for wardrobes, dark stairs, kitchen counters, or desk drawers.",
        affiliateUrl: "https://amzn.to/4f7mj3S"
    },
    {
        id: "square-mirror",
        title: "Self-Adhesive Acrylic Mirror Panels Sheet (Pack of 4)",
        category: "decor",
        price: 399,
        rating: 4.4,
        reviewsCount: 65,
        image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/TGDeFtwF4VqaED4zBLnBkR.jpg",
        tag: "Reflective Art",
        materials: ["Acrylic"],
        edits: ["organic"],
        specs: {
            "Set Includes": "4 panels of large square mirrors",
            "Single Panel Size": "30cm x 30cm",
            "Material Thickness": "2mm premium reflective acrylic",
            "Installation": "No drilling: double-sided strong adhesive pads included"
        },
        features: [
            "Ultra-lightweight and shatterproof acrylic body that is safer than heavy glass.",
            "Fully customizable layout: stack vertically, horizontally, or form a larger reflective grid.",
            "Double-sided reflection that immediately brightens up small dark entryways."
        ],
        description: "Create an instantly spacious, bright, and architectural feel in any room with the Big Square Acrylic Mirror Wall Stickers. These light, shatterproof acrylic panels provide a premium, crystal-clear reflection and can be arranged in a grid above consoles or beds to multiply natural ambient lighting.",
        affiliateUrl: "https://amzn.to/4dfYxAt"
    },
    {
        id: "stick-tile",
        title: "3D PU Gel Premium Peel and Stick Backsplash Tile",
        category: "decor",
        price: 1199,
        rating: 4.6,
        reviewsCount: 72,
        image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/7Lw7TMiaz4CnybrPCV5heU.jpg",
        tag: "Decor Edit",
        materials: ["Composite", "Vinyl"],
        edits: ["organic"],
        specs: {
            "Coverage Area": "Set of 10 sheets covering 9.6 sq ft",
            "Single Sheet Size": "30.5cm x 30.5cm",
            "Material": "Three-dimensional PU gel tile composite",
            "Characteristics": "Heat-resistant, waterproof, oil-resistant"
        },
        features: [
            "Realistic high-end three-dimensional tile texture with visual depth.",
            "Incredibly easy installation: just peel, align, and stick onto dry flat drywall.",
            "Perfect for upgrading rental kitchen backsplashes or washroom vanities."
        ],
        description: "Achieve the look of a expensive architectural ceramic backsplash in minutes. This Peel and Stick Backsplash Tile set features a premium three-dimensional raised gel overlay that mimics genuine glazed ceramic tile, completely resisting cooking heat, water splashes, and stains while being entirely rental-safe.",
        affiliateUrl: "https://amzn.to/4wcfEeY"
    },
    {
        id: "motivational-art",
        title: "Set of 9 Minimalist Typographic Quote Posters",
        category: "decor",
        price: 199,
        rating: 4.7,
        reviewsCount: 104,
        image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/hbviuBtthQjxtaxWjZ74Bo.jpg",
        tag: "Inspirational",
        materials: ["Paper", "Matte Print"],
        edits: ["organic"],
        specs: {
            "Pack Size": "Set of 9 individual prints",
            "Single Print Size": "20.3cm x 25.4cm (8x10 inches)",
            "Paper Weight": "300gsm heavy-weight premium cardstock",
            "Finishing": "Non-glare velvet matte finish"
        },
        features: [
            "9 high-fidelity typographic designs delivering elegant and positive messaging.",
            "Clean, minimalist layout fitting standard home office or study desk frames.",
            "Heavy-weight cardstock resistant to folding, yellowing, or direct sun fading."
        ],
        description: "Infuse your workspace with positive energy and visual clarity. This premium curated pack of 9 Motivational and Inspirational Quote Posters features striking minimalist modern typography printed on ultra-heavy 300gsm cardstock, designed to fit into standard frames above your office computer setup.",
        affiliateUrl: "https://amzn.to/4etv880"
    },
    {
        id: "pinecone-light",
        title: "Sustainable Wood Layered Pinecone Pendant Ceiling Light",
        category: "electrical",
        price: 1899,
        rating: 4.9,
        reviewsCount: 48,
        image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/u9Laig32U3ozxfEZgmysRG.jpg",
        tag: "Premium Choice",
        materials: ["Wood", "Pinecone Layout"],
        edits: ["organic"],
        specs: {
            "Dimensions": "35cm x 35cm x 32cm",
            "Material": "Natural eco-friendly light pine wood veneer scales",
            "Light Socket": "Standard E26/E27 (LED bulb recommended)",
            "Cord Length": "1.2 meters fully adjustable woven fabric cable"
        },
        features: [
            "Stunning layered pinecone architecture creating complex indirect light shadows.",
            "Constructed from sustainable solid wood veneers with natural pine woodgrain textures.",
            "Breathtaking visual centerpiece for dining tables, living rooms, or cozy bed spaces."
        ],
        description: "Bridging organic structural design and architectural lighting, the Modern Wooden Pinecone Pendant Light is a masterpiece of light and shadow. Assembled from layered natural pine wood scales, it diffuses light outwards in a soft, non-glare geometric pattern that immediately adds warm, premium comforting textures to your ceilings.",
        affiliateUrl: "https://amzn.to/4ddbpXY"
    },
    {
        id: "wood-desk",
        title: "Modern Wood Study Computer Desk with Floating Monitor Shelf",
        category: "decor",
        price: 4499,
        rating: 4.7,
        reviewsCount: 89,
        image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/itZeaVjusTXaevhmxZYGQF.jpg",
        tag: "Best Value",
        materials: ["Oakwood", "Steel Frame"],
        edits: ["midnight"],
        specs: {
            "Dimensions": "100cm x 50cm x 75cm",
            "Desk Surface": "Premium scratch-resistant light oak composite wood",
            "Frame": "Heavy-duty matte black reinforced carbon steel",
            "Top Shelf": "Integrated floating shelf for monitors, books, or plants"
        },
        features: [
            "Sleek integrated top shelf that keeps your main workspace free of clutter.",
            "High-density matte black steel frame providing complete wobble-free stability.",
            "Minimalist space-saving design perfect for study rooms or compact apartments."
        ],
        description: "Engineered for maximum organization and modern design, our Minimalist Wood Computer Desk features a sturdy black carbon-steel frame supporting a rich light oak desktop. The integrated floating riser raises your screen to eye level, reducing neck fatigue while leaving your main desk clear for keyboards, notebooks, and aesthetic tech.",
        affiliateUrl: "https://amzn.to/42oEPxo"
    },
    {
        id: "star-projector",
        title: "VanSmaGo Star Galaxy Nebulae Laser Projector",
        category: "electrical",
        price: 1599,
        rating: 4.8,
        reviewsCount: 215,
        image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/GnSNskza6DUeoYm9b9VZd6.jpg",
        tag: "Tech Glow",
        materials: ["ABS", "LED Components"],
        edits: ["midnight"],
        specs: {
            "Projector Style": "Aesthetic dynamic galaxy aurora cloud + laser green stars",
            "Power Output": "5W USB rechargeable (Type-C cable included)",
            "Coverage Angle": "360 degrees adjustable rotation",
            "Smart Control": "Includes physical remote + integrated speaker"
        },
        features: [
            "Projects moving multi-colored aurora nebulae that mimic the northern lights.",
            "Built-in Bluetooth speaker to synchronize ambient light pulsing with your music.",
            "Comes with convenient timer settings and multiple adjustable brightness scales."
        ],
        description: "Transform your bedroom into a breathtaking cosmic galaxy. The VanSmaGo LED Star Projector projects dynamic colored nebulae clouds and thousands of moving green laser stars across your ceiling, providing a stunning, high-fidelity ambient backdrop for sleeping, reading, or gaming.",
        affiliateUrl: "https://amzn.to/49IKnGP"
    },
    {
        id: "arched-mirror",
        title: "Wave Arched Tabletop Dressing Mirror - Beige",
        category: "decor",
        price: 799,
        rating: 4.7,
        reviewsCount: 112,
        image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/4ySBjtPu9TYZWyc7jmXdr9.jpg",
        tag: "Aesthetic Choice",
        materials: ["Flannel", "Reflective Glass", "Clay Base"],
        edits: ["organic"],
        specs: {
            "Dimensions": "25cm x 40cm",
            "Frame Material": "Flannel woven plush wave border",
            "Base": "Solid integrated oak support base",
            "Reflector": "High-definition lead-free silver mirror"
        },
        features: [
            "Wave arched border wrapped in highly luxurious beige plush flannel fabric.",
            "Adds high-end organic curves and visual comfort to modern makeup vanities.",
            "Extremely high-definition glass reflection with zero edge distortion."
        ],
        description: "The Wave Arched Tabletop Mirror is the perfect vanity accent, characterized by its soft, wavy outer frame wrapped in creamy beige flannel. Designed to sit elegantly on study desks, drawers, or makeup cabinets, it pairs high-definition glass with warm organic curves to soften modern linear interiors.",
        affiliateUrl: "https://amzn.to/49euxnb"
    },
    {
        id: "makeup-mirror",
        title: "Abstract Tabletop Acrylic Puddle Makeup Mirror",
        category: "decor",
        price: 499,
        rating: 4.6,
        reviewsCount: 94,
        image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/S3ohHeSQUy8BsYmVMQdhqd.jpg",
        tag: "Minimalist Edit",
        materials: ["Acrylic", "Wood Base"],
        edits: ["organic"],
        specs: {
            "Dimensions": "20cm x 24cm",
            "Mirror Material": "Shatterproof high-fidelity reflective acrylic",
            "Base Material": "Solid eco-friendly composite wooden base",
            "Shape": "Irregular organic puddle outline"
        },
        features: [
            "Artistic irregular puddle outline that serves as a modern decorative abstract sculpture.",
            "Shatterproof silver acrylic body that is completely safe from drops.",
            "Slips easily into the solid wood base slot for immediate setup."
        ],
        description: "Ditch standard round vanity mirrors. This abstract Tabletop Makeup Mirror features a gorgeous, organic puddle shape resting in a minimal wooden block slot. Designed for modern design lovers, it offers a crisp, warp-free reflection while doubling as a minimalist decorative sculpture when not in use.",
        affiliateUrl: "https://amzn.to/49EpSeH"
    }
];

// --- 2. State Variables ---
let activeFilters = {
    search: "",
    category: "all",
    preset: null // For linking Curated Edits to the catalog
};
let activeSort = "featured";

// --- 3. DOM Elements Cache ---
const elements = {
    productsGrid: document.getElementById("products-grid"),
    searchField: document.getElementById("catalog-search"),
    searchClear: document.getElementById("search-clear"),
    filterTabs: document.querySelectorAll(".filter-tab"),
    sortSelect: document.getElementById("sort-select"),
    emptyState: document.getElementById("empty-state"),
    activeChips: document.getElementById("active-chips"),
    chipsContainer: document.getElementById("chips-container"),
    clearAllFilters: document.getElementById("clear-all-filters"),
    
    // Mobile Navigation
    mobileToggleBtn: document.getElementById("mobile-toggle"),
    mobileNavDrawer: document.getElementById("mobile-nav"),
    mobileLinks: document.querySelectorAll(".mobile-link"),
    
    // Product Dossier Panel
    dossierOverlay: document.getElementById("dossier-overlay"),
    dossierPanel: document.getElementById("dossier-panel"),
    dossierClose: document.getElementById("dossier-close"),
    dossierBody: document.getElementById("dossier-content-body"),
    
    // Instagram Lightbox Modal
    lookOverlay: document.getElementById("look-overlay"),
    lookModal: document.getElementById("look-modal"),
    lookClose: document.getElementById("look-close"),
    igPostCard: document.getElementById("ig-post-1"),
    lookMainImg: document.getElementById("look-main-img"),
    lookCaptionText: document.getElementById("look-caption-text"),
    lookProductsCount: document.getElementById("featured-count"),
    lookProductsList: document.getElementById("look-products-list")
};

// ==========================================================================
// CORE APP INITIALIZATION
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    renderCatalog();
    setupEventListeners();
    setupScrollAnimations();
});

// ==========================================================================
// RENDER PRODUCTS CATALOG (Search, Category Filters, Chips & Sorts)
// ==========================================================================

function renderCatalog() {
    let filteredList = [...PRODUCTS_DATA];
    
    // Apply Category Tab Filter
    if (activeFilters.category !== "all") {
        filteredList = filteredList.filter(p => p.category === activeFilters.category);
    }
    
    // Apply Curated Edit Preset Filter
    if (activeFilters.preset) {
        filteredList = filteredList.filter(p => p.edits.includes(activeFilters.preset));
    }
    
    // Apply Search Input Filter
    if (activeFilters.search.trim() !== "") {
        const query = activeFilters.search.toLowerCase().trim();
        filteredList = filteredList.filter(p => {
            return p.title.toLowerCase().includes(query) || 
                   p.description.toLowerCase().includes(query) ||
                   p.materials.some(mat => mat.toLowerCase().includes(query)) ||
                   p.category.toLowerCase().includes(query);
        });
    }
    
    // Apply Sorting
    sortProducts(filteredList);
    
    // Render HTML Cards
    elements.productsGrid.innerHTML = "";
    
    if (filteredList.length === 0) {
        elements.productsGrid.style.display = "none";
        elements.emptyState.style.display = "block";
    } else {
        elements.productsGrid.style.display = "grid";
        elements.emptyState.style.display = "none";
        
        filteredList.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card scroll-fade-active";
            card.dataset.id = product.id;
            
            // Build rating stars
            let starsHTML = "";
            const completeStars = Math.floor(product.rating);
            for (let i = 0; i < 5; i++) {
                if (i < completeStars) {
                    starsHTML += "★";
                } else if (i === completeStars && product.rating % 1 >= 0.5) {
                    starsHTML += "½";
                } else {
                    starsHTML += "☆";
                }
            }
            
            card.innerHTML = `
                <div class="prod-badges">
                    ${product.tag ? `<span class="prod-badge choice">${product.tag}</span>` : ''}
                    <span class="prod-badge tech">${product.category === 'electrical' ? 'Electronics' : 'Decor'}</span>
                </div>
                <div class="prod-img-wrap">
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                </div>
                <div class="prod-body">
                    <span class="prod-category">${product.materials.slice(0, 2).join(" • ")}</span>
                    <h3 class="prod-title">${product.title}</h3>
                    <div class="prod-rating">
                        <span>${starsHTML}</span>
                        <span>(${product.reviewsCount} reviews)</span>
                    </div>
                    <p class="prod-desc-preview">${product.description}</p>
                    <div class="prod-footer">
                        <span class="prod-price">₹${product.price.toLocaleString('en-IN')}</span>
                        <span class="prod-cta">
                            Details
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        </span>
                    </div>
                </div>
            `;
            
            // Trigger drawer on click
            card.addEventListener("click", () => openDossier(product.id));
            
            elements.productsGrid.appendChild(card);
        });
        
        // Re-trigger scroll observer to apply fade-in effects on new items
        setupScrollAnimations();
    }
    
    updateFilterChips();
}

function sortProducts(list) {
    if (activeSort === "price-low") {
        list.sort((a, b) => a.price - b.price);
    } else if (activeSort === "price-high") {
        list.sort((a, b) => b.price - a.price);
    } else if (activeSort === "name") {
        list.sort((a, b) => a.title.localeCompare(b.title));
    }
    // "featured" doesn't re-sort; retains catalog original array orders
}

// ==========================================================================
// FILTER CHIPS MECHANISMS
// ==========================================================================

function updateFilterChips() {
    elements.chipsContainer.innerHTML = "";
    let hasActiveFilters = false;
    
    // Category Chip
    if (activeFilters.category !== "all") {
        hasActiveFilters = true;
        createChip(`Category: ${activeFilters.category === 'decor' ? 'Home Decor' : 'Electrical Tech'}`, () => {
            activeFilters.category = "all";
            // Sync Category Tabs UI
            elements.filterTabs.forEach(tab => {
                tab.classList.toggle("active", tab.dataset.filter === "all");
                tab.setAttribute("aria-selected", tab.dataset.filter === "all" ? "true" : "false");
            });
            renderCatalog();
        });
    }
    
    // Curated Edit Preset Chip
    if (activeFilters.preset) {
        hasActiveFilters = true;
        const name = activeFilters.preset === 'midnight' ? 'The Midnight Office' : 'Organic Warmth';
        createChip(`Edit: ${name}`, () => {
            activeFilters.preset = null;
            renderCatalog();
        });
    }
    
    // Search Term Chip
    if (elements.searchField.value.trim() !== "") {
        hasActiveFilters = true;
        elements.searchClear.style.display = "block";
        createChip(`Search: "${activeFilters.search}"`, () => {
            elements.searchField.value = "";
            elements.searchClear.style.display = "none";
            activeFilters.search = "";
            renderCatalog();
        });
    } else {
        elements.searchClear.style.display = "none";
    }
    
    elements.activeChips.style.display = hasActiveFilters ? "flex" : "none";
}

function createChip(labelText, removeCallback) {
    const chip = document.createElement("span");
    chip.className = "filter-chip";
    chip.innerHTML = `
        ${labelText}
        <button aria-label="Remove filter">&times;</button>
    `;
    chip.querySelector("button").addEventListener("click", removeCallback);
    elements.chipsContainer.appendChild(chip);
}

function resetAllFilters() {
    elements.searchField.value = "";
    elements.searchClear.style.display = "none";
    activeFilters.search = "";
    activeFilters.category = "all";
    activeFilters.preset = null;
    activeSort = "featured";
    elements.sortSelect.value = "featured";
    
    // Sync Category UI Tabs
    elements.filterTabs.forEach(tab => {
        tab.classList.toggle("active", tab.dataset.filter === "all");
        tab.setAttribute("aria-selected", tab.dataset.filter === "all" ? "true" : "false");
    });
    
    renderCatalog();
}

// Curated Style Guides Preset click linkage
window.filterByPreset = function(presetName) {
    resetAllFilters();
    activeFilters.preset = presetName;
    renderCatalog();
    
    // Scroll smoothly to catalog
    document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
};

// ==========================================================================
// PRODUCT SLIDE-OUT DOSSIER HANDLERS (Details Drawer)
// ==========================================================================

function openDossier(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;
    
    // Generate stars for Dossier
    let starsHTML = "";
    const completeStars = Math.floor(product.rating);
    for (let i = 0; i < 5; i++) {
        if (i < completeStars) {
            starsHTML += "★";
        } else if (i === completeStars && product.rating % 1 >= 0.5) {
            starsHTML += "½";
        } else {
            starsHTML += "☆";
        }
    }
    
    // Build specs table lines
    let specsTableRows = "";
    for (const [key, value] of Object.entries(product.specs)) {
        specsTableRows += `
            <tr>
                <td>${key}</td>
                <td>${value}</td>
            </tr>
        `;
    }
    
    // Build bullets
    const bulletsHTML = product.features.map(f => `<li>${f}</li>`).join("");
    
    // Populate Body
    elements.dossierBody.innerHTML = `
        <div class="dossier-img">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="dossier-body">
            <span class="dossier-tag">${product.materials.join(" • ")}</span>
            <h2 class="dossier-title" id="dossier-title">${product.title}</h2>
            
            <div class="dossier-price-row">
                <span class="dossier-price">₹${product.price.toLocaleString('en-IN')}</span>
                <div class="dossier-rating">
                    <span>${starsHTML}</span>
                    <span>(${product.reviewsCount} reviews)</span>
                </div>
            </div>
            
            <p class="dossier-desc">${product.description}</p>
            
            <h3 class="dossier-subtitle">Why Nifitiva Highlights It</h3>
            <ul class="dossier-bullet-list">
                ${bulletsHTML}
            </ul>
            
            <h3 class="dossier-subtitle">Detailed Specifications</h3>
            <table class="dossier-specs-table">
                <tbody>
                    ${specsTableRows}
                </tbody>
            </table>
            
            <!-- Affiliate CTA Box -->
            <div class="dossier-affiliate-box">
                <a href="${product.affiliateUrl}" target="_blank" rel="noopener" class="btn btn-primary aff-btn">
                    View Affiliate Offer on Amazon
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
                <p>Clicking slides you to Amazon to read official customer reviews, stock levels, and securely complete your purchase. Curated exclusively by Nifitiva.</p>
            </div>
        </div>
    `;
    
    // Open Drawer UI & Lock body scroll
    elements.dossierOverlay.classList.add("active");
    elements.dossierOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeDossier() {
    elements.dossierOverlay.classList.remove("active");
    elements.dossierOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

// ==========================================================================
// INSTAGRAM "SHOP THE LOOK" IMMERSIVE LIGHTBOX MODAL
// ==========================================================================

function openInstagramModal() {
    // Populate Lifestyle Photo Left
    elements.lookMainImg.src = "assets/instagram_look.png";
    
    // Populate Caption Text
    elements.lookCaptionText.innerHTML = `
        <strong>nifitiva</strong> Reimagining cozy evenings. Ambient table lighting meets minimalist ceramic sculptures. The perfect wooden speaker makes everything complete. ✨ Link in bio to shop. <br><br>
        Featured materials: Travertine, dark architectural concrete base, warm ribbed oak wood accents.
    `;
    
    // Filter shoppable list. In this post, we showcase the sandscape, led vine, and tabletop vanity mirror.
    const featuredIds = ["sandscape", "led-vine", "makeup-mirror"];
    const featuredProducts = PRODUCTS_DATA.filter(p => featuredIds.includes(p.id));
    
    elements.lookProductsCount.innerText = `(${featuredProducts.length})`;
    elements.lookProductsList.innerHTML = "";
    
    // Populate Featured Products List Cards
    featuredProducts.forEach(product => {
        const miniCard = document.createElement("div");
        miniCard.className = "mini-prod-card";
        miniCard.innerHTML = `
            <div class="mini-img">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="mini-info">
                <h5 class="mini-title">${product.title}</h5>
                <span class="mini-price">₹${product.price.toLocaleString('en-IN')}</span>
            </div>
            <div class="mini-go-btn" aria-label="View product details">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
        `;
        
        // Link to detail drawer cross-navigation
        miniCard.addEventListener("click", (e) => {
            e.stopPropagation();
            closeInstagramModal();
            // Introduce a mini timeout for smooth visual transition
            setTimeout(() => {
                openDossier(product.id);
            }, 300);
        });
        
        elements.lookProductsList.appendChild(miniCard);
    });
    
    // Open UI
    elements.lookOverlay.classList.add("active");
    elements.lookOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeInstagramModal() {
    elements.lookOverlay.classList.remove("active");
    elements.lookOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

// ==========================================================================
// SCROLL-FADE ELEMENT INTERSECTION OBSERVER
// ==========================================================================

function setupScrollAnimations() {
    const fadeElements = document.querySelectorAll(".scroll-fade-active, .edit-card, .about-visual, .about-content");
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target); // Unobserve after animating once
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(el => {
        if (!el.classList.contains("in-view")) {
            el.classList.add("scroll-fade-active");
            scrollObserver.observe(el);
        }
    });
}

// ==========================================================================
// DEBOUNCED SEARCH & REGISTERING DOM LISTENERS
// ==========================================================================

function setupEventListeners() {
    // 1. Mobile Drawer Navigation Trigger
    elements.mobileToggleBtn.addEventListener("click", () => {
        elements.mobileToggleBtn.classList.toggle("active");
        elements.mobileNavDrawer.classList.toggle("active");
    });
    
    elements.mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            elements.mobileToggleBtn.classList.remove("active");
            elements.mobileNavDrawer.classList.remove("active");
        });
    });
    
    // Close mobile drawer when resizing back to desktop sizes
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            elements.mobileToggleBtn.classList.remove("active");
            elements.mobileNavDrawer.classList.remove("active");
        }
    });
    
    // 2. Search Field Event Listener with Debounce
    let searchDebounceTimeout;
    elements.searchField.addEventListener("input", (e) => {
        clearTimeout(searchDebounceTimeout);
        searchDebounceTimeout = setTimeout(() => {
            activeFilters.search = e.target.value;
            renderCatalog();
        }, 150);
    });
    
    // Clear search trigger click
    elements.searchClear.addEventListener("click", () => {
        elements.searchField.value = "";
        activeFilters.search = "";
        renderCatalog();
    });
    
    // 3. Tab Category Switch Filter click triggers
    elements.filterTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            elements.filterTabs.forEach(t => {
                t.classList.remove("active");
                t.setAttribute("aria-selected", "false");
            });
            tab.classList.add("active");
            tab.setAttribute("aria-selected", "true");
            
            activeFilters.category = tab.dataset.filter;
            renderCatalog();
        });
    });
    
    // 4. Select Sort dropdown changes
    elements.sortSelect.addEventListener("change", (e) => {
        activeSort = e.target.value;
        renderCatalog();
    });
    
    // Clear all filters button
    elements.clearAllFilters.addEventListener("click", resetAllFilters);
    
    // 5. Product Detail Dossier close bindings
    elements.dossierClose.addEventListener("click", closeDossier);
    elements.dossierOverlay.addEventListener("click", (e) => {
        if (e.target === elements.dossierOverlay) closeDossier();
    });
    
    // 6. Instagram Post click & Lightbox Modal close bindings
    elements.igPostCard.addEventListener("click", openInstagramModal);
    elements.lookClose.addEventListener("click", closeInstagramModal);
    elements.lookOverlay.addEventListener("click", (e) => {
        if (e.target === elements.lookOverlay) closeInstagramModal();
    });
    
    // 7. Global Keyboard Esc event for closing modals
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeDossier();
            closeInstagramModal();
            elements.mobileToggleBtn.classList.remove("active");
            elements.mobileNavDrawer.classList.remove("active");
        }
    });
}
