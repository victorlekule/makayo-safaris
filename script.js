// 1. Inject Custom Tailwind Configuration via JS
window.tailwind = window.tailwind || {};
window.tailwind.config = {
    theme: {
        extend: {
            colors: {
                ocean: '#0071BC', /* Custom Ocean Blue */
                forest: '#228B22', /* Custom Forest Green */
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                playfair: ['Playfair Display', 'serif'],
            }
        }
    }
};

// 2. Load the Header HTML and functionality
document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("header-container");

    const headerHTML = `
        <!-- Fixed Header Wrapper -->
        <header class="fixed top-0 left-0 w-full z-50 shadow-md flex flex-col">
            
            <!-- FIRST HEADER: Top Bar (Changed to Green Background) -->
            <!-- Using bg-forest for the green background -->
            <div class="bg-forest text-white text-xs sm:text-sm py-3 px-4 sm:px-6 lg:px-8">
                <div class="w-full flex justify-between items-center gap-8">
                    
                    <!-- Left Side: Contact -->
                    <div class="flex items-center gap-8">
                        <a href="https://wa.me/255XXXXXXXXX" class="hover:text-gray-200 flex items-center gap-2 transition-colors">
                            <!-- Flat Solid WhatsApp Icon -->
                            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/>
                            </svg>
                            +255 123 456 789
                        </a>
                        <!-- Email hidden on mobile, visible on sm and up -->
                        <a href="mailto:info@makayosafaris.com" class="hidden sm:flex hover:text-gray-200 items-center gap-2 transition-colors">
                            <!-- Flat Solid Email Icon -->
                            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                            info@makayosafaris.com
                        </a>
                    </div>
                    
                    <!-- Right Side: Links & Language Toggle -->
                    <div class="flex items-center gap-8">
                        <div class="hidden md:flex gap-6 border-r border-green-800 pr-8">
                            <a href="#" class="hover:text-gray-200 transition-colors">FAQs</a>
                            <a href="#" class="hover:text-gray-200 transition-colors">Privacy</a>
                            <a href="#" class="hover:text-gray-200 transition-colors">Terms & Conditions</a>
                        </div>
                        
                        <!-- Language Switcher Dropdown Container -->
                        <div class="relative group cursor-pointer">
                            <!-- Active Language Button with Image Flag -->
                            <div class="flex items-center gap-2 hover:text-gray-200 transition-colors font-medium">
                                <img src="https://flagcdn.com/w20/gb.png" alt="English" class="w-5 h-auto rounded-sm shadow-sm">
                                EN
                                <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                            
                            <!-- Dropdown List with Image Flags -->
                            <div class="absolute right-0 mt-2 w-36 bg-white text-black rounded-md shadow-lg hidden group-hover:block overflow-hidden border border-gray-100">
                                <a href="#" class="block px-4 py-2.5 text-sm hover:bg-gray-100 hover:text-ocean flex items-center gap-3">
                                    <img src="https://flagcdn.com/w20/gb.png" alt="English" class="w-5 h-auto rounded-sm shadow-sm"> English
                                </a>
                                <a href="#" class="block px-4 py-2.5 text-sm hover:bg-gray-100 hover:text-ocean flex items-center gap-3">
                                    <img src="https://flagcdn.com/w20/fr.png" alt="French" class="w-5 h-auto rounded-sm shadow-sm"> Français
                                </a>
                                <a href="#" class="block px-4 py-2.5 text-sm hover:bg-gray-100 hover:text-ocean flex items-center gap-3">
                                    <img src="https://flagcdn.com/w20/de.png" alt="German" class="w-5 h-auto rounded-sm shadow-sm"> Deutsch
                                </a>
                                <a href="#" class="block px-4 py-2.5 text-sm hover:bg-gray-100 hover:text-ocean flex items-center gap-3">
                                    <img src="https://flagcdn.com/w20/cn.png" alt="Chinese" class="w-5 h-auto rounded-sm shadow-sm"> 中文
                                </a>
                                <a href="#" class="block px-4 py-2.5 text-sm hover:bg-gray-100 hover:text-ocean flex items-center gap-3">
                                    <img src="https://flagcdn.com/w20/sa.png" alt="Arabic" class="w-5 h-auto rounded-sm shadow-sm"> العربية
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SECOND HEADER: Main Navigation -->
            <nav class="bg-white border-b border-gray-200 w-full">
                <div class="w-full pl-[2px] pr-4 sm:pr-6 lg:pr-8">
                    <div class="flex justify-between items-center h-16 sm:h-20 w-full">
                        
                        <!-- LOGO -->
                        <div class="flex-1 flex justify-start">
                            <a href="#" class="font-playfair font-bold text-xl md:text-2xl tracking-wide uppercase text-black">
                                Makayo <span class="text-ocean">Safaris</span>
                            </a>
                        </div>
                        
                        <!-- Desktop Navigation Links -->
                        <div class="hidden lg:flex justify-center space-x-5 xl:space-x-6 font-medium text-sm xl:text-base">
                            <a href="index.html" class="text-ocean font-semibold border-b-2 border-ocean pb-1">Home</a>
                            <a href="about.html" class="text-black hover:text-ocean transition-colors pb-1">About Us</a>                            
                            <a href="tanzania.html" class="text-black hover:text-ocean transition-colors pb-1">Tanzania Safaris</a>
                            <a href="trecking.html" class="text-black hover:text-ocean transition-colors pb-1">Mountain Treking</a>
                            <a href="zanzibar.html" class="text-black hover:text-ocean transition-colors pb-1">Zanzibar Experiences</a>
                            <a href="gallery,html" class="text-black hover:text-ocean transition-colors pb-1">Gallery</a>
                            <a href="blog.html" class="text-black hover:text-ocean transition-colors pb-1">Blog</a>
                            <a href="contact.html" class="text-black hover:text-ocean transition-colors pb-1">Contact Us</a>
                        </div>

                        <!-- CTA Button & Mobile Toggle -->
                        <div class="flex-1 flex justify-end items-center gap-4">
                            <!-- Desktop CTA -->
                            <a href="#" class="hidden lg:flex bg-forest hover:bg-green-700 text-white px-5 py-2.5 rounded-md font-semibold transition-colors shadow-sm whitespace-nowrap">
                                My Booking
                            </a>

                            <!-- Mobile Menu Button -->
                            <button id="mobile-menu-btn" class="lg:hidden text-black hover:text-ocean focus:outline-none p-1 rounded-md transition-colors">
                                <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Mobile Navigation Dropdown -->
                <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0">
                    <div class="px-4 py-3 space-y-1 pb-6">
                        <a href="index.html" class="block px-3 py-2 rounded-md text-base font-medium text-ocean bg-blue-50">Home</a>
                        <a href="about.html" class="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-ocean hover:bg-gray-50">About Us</a>
                        <a href="tanzania.html" class="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-ocean hover:bg-gray-50">Tanzania Safaris</a>
                        <a href="trecking.html" class="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-ocean hover:bg-gray-50">Mountain Treking</a>
                        <a href="zanzibar.html" class="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-ocean hover:bg-gray-50">Zanzibar Experiences</a>
                        <a href="gallery.html" class="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-ocean hover:bg-gray-50">Gallery</a>
                        <a href="blog.html" class="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-ocean hover:bg-gray-50">Blog</a>
                        <a href="contact.html" class="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-ocean hover:bg-gray-50">Contact Us</a>

                        <div class="pt-3 mt-2 border-t border-gray-100">
                            <a href="#" class="block w-full text-center px-4 py-3 rounded-md text-base font-bold text-white bg-forest hover:bg-green-700 shadow-sm">
                                My Booking
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    `;

    headerContainer.innerHTML = headerHTML;

    // Mobile Hamburger Menu Logic
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
            
            // Swap hamburger icon for 'X' close icon
            if (mobileMenu.classList.contains("hidden")) {
                mobileMenuBtn.innerHTML = `
                    <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>`;
            } else {
                mobileMenuBtn.innerHTML = `
                    <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>`;
            }
        });
    }
});

//homepage//
document.addEventListener("DOMContentLoaded", () => {
    // 1. Data for the 10 Premium Slides
    const slides = [
        {
            img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068",
            sub: "Experience The Untamed",
            title: "Discover the Soul <br> of <span class='italic text-gray-200'>Africa</span>",
            desc: "Exclusive, luxury safari experiences tailored to your wildest dreams. Embark on a journey beyond the ordinary."
        },
        {
            img: "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?q=80&w=2000",
            sub: "The King's Domain",
            title: "Witness True <br> <span class='italic text-gray-200'>Majesty</span>",
            desc: "Get up close with the apex predators of the Serengeti plains in their natural, unspoiled habitat."
        },
        {
            img: "https://images.unsplash.com/photo-1547471080-7fc2caa6f17f?q=80&w=2070",
            sub: "Speed & Grace",
            title: "Chase the <br> <span class='italic text-gray-200'>Horizon</span>",
            desc: "Experience the heart-pounding thrill of the hunt in the golden light of the African dawn."
        },
        {
            img: "https://images.unsplash.com/photo-1589307222736-224ed52e8d19?q=80&w=1500",
            sub: "Roof of Africa",
            title: "Conquer Mount <br> <span class='italic text-gray-200'>Kilimanjaro</span>",
            desc: "Ascend to the highest peak in Africa with our expert trekking guides ensuring your safety and success."
        },
        {
            img: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1000",
            sub: "Tropical Paradise",
            title: "Escape to <br> <span class='italic text-gray-200'>Zanzibar</span>",
            desc: "Relax on pristine white-sand beaches washed by the crystal-clear turquoise waters of the Indian Ocean."
        },
        {
            img: "https://images.unsplash.com/photo-1518182170546-0766de6b6aad?q=80&w=2070",
            sub: "The Lost World",
            title: "Explore the <br> <span class='italic text-gray-200'>Crater</span>",
            desc: "Descend into the Ngorongoro Crater, a natural wonderland teeming with the Big Five."
        },
        {
            img: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=2000",
            sub: "Gentle Giants",
            title: "Wander the <br> <span class='italic text-gray-200'>Savanna</span>",
            desc: "Stroll alongside elegant giraffes browsing the iconic acacia trees under the vast African sky."
        },
        {
            img: "https://images.unsplash.com/photo-1520641151676-e1ce157cd557?q=80&w=1500",
            sub: "The Great Journey",
            title: "Witness the <br> <span class='italic text-gray-200'>Migration</span>",
            desc: "Feel the earth tremble as millions of wildebeest are driven across the plains by ancient rhythms."
        },
        {
            img: "https://images.unsplash.com/photo-1506450146313-2d5ccbf120d0?q=80&w=1500",
            sub: "Cultural Heritage",
            title: "Connect with <br> <span class='italic text-gray-200'>Tradition</span>",
            desc: "Immerse yourself in the rich culture, vibrant attire, and history of the indigenous Maasai people."
        },
        {
            img: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?q=80&w=1500",
            sub: "Wilderness Elegance",
            title: "Sleep Under <br> <span class='italic text-gray-200'>The Stars</span>",
            desc: "Unwind in premium luxury tented lodges offering unparalleled views, comfort, and 5-star service."
        }
    ];

    let currentSlide = 0;
    const slideDuration = 6000; // 6 seconds per slide

    // DOM Elements
    const bgContainer = document.getElementById("hero-bg-container");
    const textWrapper = document.getElementById("hero-text-wrapper");
    const heroSub = document.getElementById("hero-sub");
    const heroTitle = document.getElementById("hero-title");
    const heroDesc = document.getElementById("hero-desc");
    const indicatorsContainer = document.getElementById("hero-indicators");

    // 2. Initialize the Slider
    function initSlider() {
        slides.forEach((slide, index) => {
            // Create Image Container
            const imgDiv = document.createElement("div");
            
            // First image starts at center (translate-x-0), rest start off-screen right (translate-x-full)
            // Added transition-transform for the smooth sliding effect
            imgDiv.className = `absolute inset-0 w-full h-full transform transition-transform duration-[1500ms] ease-in-out ${index === 0 ? 'translate-x-0' : 'translate-x-full'}`;
            imgDiv.innerHTML = `<img src="${slide.img}" class="w-full h-full object-cover" alt="Safari Slide ${index + 1}">`;
            bgContainer.appendChild(imgDiv);

            // Create Navigation Dots
            const dot = document.createElement("button");
            dot.className = `w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === 0 ? 'bg-ocean w-8' : 'bg-white/50 hover:bg-white'}`;
            dot.addEventListener("click", () => goToSlide(index));
            indicatorsContainer.appendChild(dot);
        });

        // Start Auto-play
        setInterval(nextSlide, slideDuration);
    }

    // 3. Logic to Slide Right to Left
    function goToSlide(index) {
        if (index === currentSlide) return;
        
        const images = bgContainer.children;
        const dots = indicatorsContainer.children;

        // Step A: Prepare the NEW slide. 
        // Temporarily remove transition so we can instantly snap it to the right side off-screen
        // before we slide it in (prevents it from sliding backward if we clicked a previous dot).
        images[index].style.transition = 'none';
        images[index].classList.remove('-translate-x-full', 'translate-x-0');
        images[index].classList.add('translate-x-full');
        
        // Force browser to register the snap to the right before adding animation back
        void images[index].offsetWidth;
        
        // Restore transition for the smooth entry
        images[index].style.transition = '';

        // Step B: Push the OLD slide out to the left
        images[currentSlide].classList.remove('translate-x-0');
        images[currentSlide].classList.add('-translate-x-full');
        dots[currentSlide].classList.remove('bg-ocean', 'w-8');
        dots[currentSlide].classList.add('bg-white/50');

        // Step C: Update Index
        currentSlide = index;

        // Step D: Slide the NEW slide in from the right to the center
        images[currentSlide].classList.remove('translate-x-full');
        images[currentSlide].classList.add('translate-x-0');
        dots[currentSlide].classList.remove('bg-white/50');
        dots[currentSlide].classList.add('bg-ocean', 'w-8');

        // Step E: Animate Text
        animateText(slides[currentSlide]);
    }

    function nextSlide() {
        let nextIndex = (currentSlide + 1) % slides.length;
        goToSlide(nextIndex);
    }

    // 4. Text Animation Engine
    function animateText(slideData) {
        // Step A: Fade text out and push it slightly to the left
        textWrapper.classList.remove('opacity-100', 'translate-x-0');
        textWrapper.classList.add('opacity-0', '-translate-x-10');

        // Step B: Wait for the fade out to finish, swap text, then slide it back in from the right
        setTimeout(() => {
            heroSub.innerText = slideData.sub;
            heroTitle.innerHTML = slideData.title;
            heroDesc.innerText = slideData.desc;

            // Snap it slightly to the right while hidden so it slides in from right to left
            textWrapper.classList.remove('-translate-x-10');
            textWrapper.classList.add('translate-x-10');
            
            // Force browser layout
            void textWrapper.offsetWidth;

            // Remove hidden classes, bring it back to center
            textWrapper.classList.remove('opacity-0', 'translate-x-10');
            textWrapper.classList.add('opacity-100', 'translate-x-0');
        }, 500); 
    }

    // Run Initialization
    if(bgContainer) {
        initSlider();
    }
});


//blog//

        document.addEventListener("DOMContentLoaded", () => {
            
            // 1. FILTERING LOGIC
            const filterBtns = document.querySelectorAll('.filter-btn');
            const blogCards = document.querySelectorAll('.blog-card');

            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Update Button Styles
                    filterBtns.forEach(b => {
                        b.classList.remove('bg-gradient-to-r', 'from-ocean', 'to-forest', 'text-white', 'shadow-lg');
                        b.classList.add('bg-transparent', 'text-gray-700');
                    });
                    btn.classList.remove('bg-transparent', 'text-gray-700');
                    btn.classList.add('bg-gradient-to-r', 'from-ocean', 'to-forest', 'text-white', 'shadow-lg');

                    const filterValue = btn.getAttribute('data-filter');

                    // Show/Hide Cards
                    blogCards.forEach(card => {
                        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                            card.style.display = 'flex'; // Reset display to flex to maintain formatting
                            // Slight delay to re-trigger CSS entrance animations natively
                            card.style.opacity = '0';
                            card.style.transform = 'translateY(20px)';
                            setTimeout(() => {
                                card.style.transition = 'all 0.5s ease';
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, 50);
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });

            // 2. MODAL READING LOGIC (Comprehensive Article View)
            const modal = document.getElementById('article-modal');
            const closeModalBtn = document.getElementById('close-modal');
            const readBtns = document.querySelectorAll('.read-btn');

            // Dummy comprehensive text injected into the modal
            const articleFullText = `
                <p><span class="font-playfair text-6xl font-bold float-left mr-4 mt-2 text-ocean">E</span>mbarking on a journey into the wild requires more than just a ticket; it requires preparation, understanding, and a deep respect for the natural world. In this comprehensive guide, we delve into the nuances of what makes a Makayo Safari expedition truly unforgettable.</p>
                
                <h3 class="font-playfair text-4xl font-bold text-black mt-16 mb-8">The Heart of the Experience</h3>
                <p>To truly experience the wilderness, one must surrender to its rhythm. The early morning calls of the savanna, the golden hour that paints the plains in surreal hues, and the crisp evening air all tell a story older than humanity itself. Our expert guides emphasize the importance of patience. The wild does not perform on command, but it deeply rewards those who wait.</p>
                
                <div class="my-16 p-12 bg-gray-50 border-l-8 border-forest rounded-r-[3rem] italic text-2xl md:text-3xl text-gray-700 font-playfair shadow-lg">
                    "The only man I envy is the man who has not yet been to Africa - for he has so much to look forward to."
                </div>
                
                <h3 class="font-playfair text-4xl font-bold text-black mt-16 mb-8">Essential Preparations & Gear</h3>
                <p>Equipping yourself with the right knowledge is just as important as the right gear. Beyond the physical items—neutral clothing to blend into the bush, robust footwear for walking safaris, and high-quality optics for spotting distant predators—mental preparation is key. Understanding the delicate balance of the ecosystems you are entering ensures that your footprint is light and your impact is positive.</p>
                <ul class="list-disc list-inside ml-6 mt-6 space-y-4 text-gray-600">
                    <li><strong>Optics:</strong> A 10x42 pair of binoculars per person is standard.</li>
                    <li><strong>Layers:</strong> Early game drives are freezing; afternoons are scorching. Dress like an onion.</li>
                    <li><strong>Ethics:</strong> Never demand the driver to go off-road if it disrupts the habitat.</li>
                </ul>

                <h3 class="font-playfair text-4xl font-bold text-black mt-16 mb-8">The Final Word</h3>
                <p>We invite you to immerse yourself fully. Put the camera down for a moment and simply breathe the air. It is in these quiet, unrecorded seconds that the soul of Africa truly reveals itself.</p>
            `;

            readBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // Extract data from the clicked card
                    const card = btn.closest('.blog-card');
                    const titleText = card.querySelector('.article-title').innerHTML;
                    const categoryText = card.querySelector('.article-category').innerText;
                    const imageSrc = card.querySelector('img').src;

                    // Inject data into the modal
                    document.getElementById('modal-title').innerHTML = titleText;
                    document.getElementById('modal-category').innerText = categoryText;
                    document.getElementById('modal-img').src = imageSrc;
                    document.getElementById('modal-content').innerHTML = articleFullText;

                    // Open Modal
                    modal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden'; // Stop background scrolling
                    
                    // Slight delay to trigger CSS fade-in
                    setTimeout(() => {
                        modal.classList.remove('opacity-0');
                    }, 10);
                });
            });

            closeModalBtn.addEventListener('click', () => {
                // Fade out
                modal.classList.add('opacity-0');
                
                // Hide after animation finishes
                setTimeout(() => {
                    modal.classList.add('hidden');
                    document.body.style.overflow = ''; // Restore background scrolling
                }, 500);
            });
        });
    