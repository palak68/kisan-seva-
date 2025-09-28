
document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        hi: {
            'ks-title': 'किसान सेवा',
            'search-input': 'सेवा खोजें...',
            'lang-btn': '<i class="fa fa-language"></i> EN',
            'login-btn': 'लॉगिन',
            'logout-btn': 'लॉगआउट',
            'machinery-title': 'हमारी सेवाएं',
            'tab-tractor': 'ट्रैक्टर/मशीनरी',
            'tab-tools': 'कृषि उपकरण',
            'tab-labour': 'मजदूर',
            'viewmore-btn': 'और देखें <span id="viewmore-icon"><i class="fa fa-chevron-down"></i></span>',
            'chatbot-title': '<i class="fa fa-robot"></i> एआई चैटबोट'
        },
        en: {
            'ks-title': 'Kisan Seva',
            'search-input': 'Search service...',
            'lang-btn': '<i class="fa fa-language"></i> HI',
            'login-btn': 'Login',
            'logout-btn': 'Logout',
            'machinery-title': 'Our Services',
            'tab-tractor': 'Tractor/Machinery',
            'tab-tools': 'Farming Tools',
            'tab-labour': 'Labour',
            'viewmore-btn': 'View More <span id="viewmore-icon"><i class="fa fa-chevron-down"></i></span>',
            'chatbot-title': '<i class="fa fa-robot"></i> AI Chatbot'
        }
    };
    let currentLang = 'hi';
    function setLanguage(lang) {
        currentLang = lang;
        Object.keys(translations[lang]).forEach(key => {
            const el = document.querySelector(`[data-translate="${key}"]`);
            if (el) {
                if (el.tagName === 'INPUT') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
        // Section title
        const sectionTitle = document.querySelector('.machinery-title');
        if (sectionTitle) sectionTitle.textContent = translations[lang]['machinery-title'];
    }
    setLanguage('hi');
    const langBtn = document.querySelector('[data-translate="lang-btn"]');
    if (langBtn) {
        langBtn.addEventListener('click', function() {
            setLanguage(currentLang === 'hi' ? 'en' : 'hi');
        });
    }
});
// Language Toggle Logic
document.addEventListener('DOMContentLoaded', function() {
    const langBtn = document.querySelector('.ks-lang-btn');
    let isHindi = true;
    function setHindi() {
        document.querySelector('.ks-title').textContent = 'किसान सेवा';
        document.querySelector('.ks-search-input').placeholder = 'सेवा खोजें...';
        document.querySelector('.ks-login-btn').textContent = 'लॉगिन';
        document.querySelector('.machinery-title').textContent = 'हमारी सेवाएं';
        document.querySelector('.machinery-tab[data-section="tractor"]').textContent = 'ट्रैक्टर/मशीनरी';
        document.querySelector('.machinery-tab[data-section="tools"]').textContent = 'कृषि उपकरण';
        document.querySelector('.machinery-tab[data-section="labour"]').textContent = 'मजदूर';
        langBtn.innerHTML = '<i class="fa fa-language"></i> EN';
        isHindi = true;
    }
    function setEnglish() {
        document.querySelector('.ks-title').textContent = 'Kisan Seva';
        document.querySelector('.ks-search-input').placeholder = 'Search service...';
        document.querySelector('.ks-login-btn').textContent = 'Login';
        document.querySelector('.machinery-title').textContent = 'Our Services';
        document.querySelector('.machinery-tab[data-section="tractor"]').textContent = 'Tractor/Machinery';
        document.querySelector('.machinery-tab[data-section="tools"]').textContent = 'Farming Tools';
        document.querySelector('.machinery-tab[data-section="labour"]').textContent = 'Labour';
        langBtn.innerHTML = '<i class="fa fa-language"></i> HI';
        isHindi = false;
    }
    setHindi(); // Default language
    langBtn.addEventListener('click', function() {
        if (isHindi) {
            setEnglish();
        } else {
            setHindi();
        }
    });
});
// AI Chatbot Logic
document.addEventListener('DOMContentLoaded', function() {
    const chatbotBtn = document.getElementById('ai-chatbot-btn');
    const chatbotContainer = document.getElementById('ai-chatbot-iframe-container');
    const chatbotMinimize = document.getElementById('ai-chatbot-minimize');
    if (chatbotBtn && chatbotContainer && chatbotMinimize) {
        chatbotBtn.onclick = function() {
            chatbotContainer.style.display = 'flex';
            chatbotBtn.style.display = 'none';
        };
        chatbotMinimize.onclick = function() {
            chatbotContainer.style.display = 'none';
            chatbotBtn.style.display = 'flex';
        };
    }
});
// Tractor/Machinery section functionality
document.addEventListener('DOMContentLoaded', function() {
    // Card data for each section (20 unique cards per section)
    const sectionsData = {
        tractor: [
            { img: 'https://ik.imagekit.io/tractorkarvan/tr:w-548,f-webp,di-placeholder.png/images/Harvester/Swaraj-Pro-combine-7060-track.png', title: 'हार्वेस्टर', price: '3500रु/घंटा' },
            { img: 'https://www.deccanequipments.com/deccan-farm-equipments/rotavator-rotary-tiller-pushpak-rooter/rotavator-rotary-tiller-pushpak-rooter.jpg', title: 'जुताई(रोटावेटर)', price: '700रु/घंटा' },
            { img: 'https://www.deere.co.in/assets/images/region-1/products/implements/seed_fertilizer_drill_large_eab835ad3c902260de299f6ea0530e6ccc87aa0a.png', title: 'बीज बोना(सीड ड्रिल मशीन)', price: '1200रु/घंटा' },
            { img: 'https://www.sify.com/wp-content/uploads/2023/09/robot_agriculture_freepik-1024x490.jpg', title: 'छिड़काव(स्प्रे मशीन)', price: '500रु/घंटा' },
            { img: 'https://akm-img-a-in.tosshub.com/lingo/ktak/images/story/202312/658c0679dc940-wheel-finger-weeder-machine-27115315-16x9.jpg?size=1200:675', title: 'गुड़ाई मशीन', price: '500रु/घंटा' },
            { img: 'https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/mild-steel-tractor-trolleys-size-10x6-feet20230927093609.png', title: 'परिवहन(ट्रॉली)', price: '400रु/घंटा' },
            { img: 'https://images.91trucks.com/trucks/models/53/1106/mahindra-bolero-maxx-pickup-city-1185704288.jpg', title: 'लोडर वाहन', price: '600रु/घंटा' },
            { img: 'https://www.deere.co.in/assets/images/region-1/products/implements/Cultivator_Greensystem_implement_large_963708a0da8407469b82f5f2147e821f7b95a118.png', title: 'कल्टीवेटर', price: '400रु/घंटा' },
            { img: 'https://assets.tractorjunction.com/tractor-junction/assets/images/images/implementTractor/paddy-multi-thresher-4603-66-1731650814.webp', title: 'थ्रेशर मशीन', price: '800रु/घंटा' },
            { img: 'https://agriculturepost.com/wp-content/uploads/2023/05/Case-IH-rolls-out-1000th-sugarcane-harvester-from-its-Pune-plant.jpg', title: 'गन्ना हार्वेस्टर', price: '2500रु/घंटा' },
            { img: 'https://www.mahindratractor.com/sites/default/files/2023-09/18.webp', title: 'धान रोपाई मशीन', price: '1500रु/घंटा' },
            { img: 'https://www.bewindia.co/wp-content/uploads/2019/09/laser_land_leveler-1.jpg', title: 'लेज़र लैंड लेवलर', price: '1300रु/घंटा' }
        ],
        tools: [
            { img: 'https://shriramassociate.in/cdn/shop/files/Shriram_Associate_Kirloskar_Diesel_Engine_Pump_Set_1.jpeg', title: 'डीजल पंप', price: '200रु/दिन' },
            { img: 'https://www.aquagroup.in/wp-content/uploads/2024/12/aws.jpg', title: 'मोटर पंप', price: '150रु/दिन' },
            { img: 'https://5.imimg.com/data5/LK/VY/YT/SELLER-9059668/sprinkler-hdpe-pipe-500x500.jpg', title: 'कृषि पाइप ', price: '50रु/दिन' },
            { img: 'https://www.gaonconnection.com/wp-content/uploads/2024/05/500x300_old_feeds3w0wzmitxaudcew24yxzitydvg4kyfxx.jpg', title: 'बैलगाड़ी', price: '110रु/दिन' },
            { img: 'https://m.media-amazon.com/images/I/612E9j9qzUL.jpg', title: 'खुरपी', price: '10रु/दिन' },
            { img: 'https://rukminim2.flixcart.com/image/808/970/l4fxh8w0/shovel-spade/f/s/w/25-92-temper-mild-steel-blade-spade-shovel-fawda-kassi-8-x10-original-imagfcynca5s7hsa.jpeg', title: 'फावड़ा', price: '12रु/दिन' },
            { img: 'https://m.media-amazon.com/images/I/51g2hDhpTUL.jpg', title: 'गैंती', price: '15रु/दिन' },
            { img: 'https://m.media-amazon.com/images/I/21brxr2xn+L._UF894,1000_QL80_.jpg', title: 'हँसिया', price: '12रु/दिन' },
            { img: 'https://images.bhaskarassets.com/web2images/521/2022/06/27/hal-harini-amavasya-730-final_1656325191.jpg', title: 'हल', price: '70रु/दिन' },
            { img: 'https://cpimg.tistatic.com/5860099/b/4/14-inch-iron-tasla.jpg', title: 'तसला', price: '7रु/दिन' },
            { img: 'https://rukminim2.flixcart.com/image/704/844/xif0q/pruner/m/u/k/1-5-pruning-shears-cutter-for-gardening-clippers-hand-pruners-original-imagmhg4gywd4qub.jpeg', title: 'छंटाई कैंची', price: '40रु/दिन' },
            { img: 'https://m.media-amazon.com/images/I/41G7kiNtPfL._SR290,290_.jpg', title: 'कुल्हाड़ी', price: '20रु/दिन' }
        ],
        labour: [
            { img: 'https://th-i.thgim.com/public/opinion/op-ed/188t2f/article31689430.ece/alternates/FREE_1200/28THRICE', title: 'कटाई मजदूर', price: '400रु/दिन' },
            { img: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/MIGRANTS_WEED_SUGAR_BEETS_FOR_%242.00_AN_HOUR_-NARA-_543858.jpg', title: 'निदाई गुड़ाई मजदूर', price: '300रु/दिन' },
            { img: 'https://izumibiosciences.in/wp-content/uploads/2023/10/%E0%A4%A7%E0%A4%BE%E0%A4%A8-%E0%A4%95%E0%A5%80-%E0%A4%96%E0%A5%87%E0%A4%A4%E0%A5%80-%E0%A4%95%E0%A5%88%E0%A4%B8%E0%A5%87-%E0%A4%95%E0%A4%B0%E0%A5%87%E0%A4%82-Dhaan-ki-kheti-%E0%A4%AC%E0%A5%81%E0%A4%B5%E0%A4%BE%E0%A4%88-%E0%A4%B8%E0%A5%87-%E0%A4%B2%E0%A5%87%E0%A4%95%E0%A5%87-%E0%A4%95%E0%A4%9F%E0%A4%BE%E0%A4%88-%E0%A4%A4%E0%A4%95-%E0%A4%95%E0%A5%80-%E0%A4%B8%E0%A4%82%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%A3-%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80.jpg', title: 'धान रोपाई मजदूर', price: '550रु/दिन' },
            { img: 'https://i.ytimg.com/vi/DXFIebobmM4/sddefault.jpg', title: 'सिंचाई मजदूर', price: '350रु/दिन' },
            { img: 'https://5.imimg.com/data5/HN/QB/MY-3640585/battery-powered-sprayer-500x500.jpg', title: 'दवा छिड़काव मजदूर', price: '650रु/दिन' },
            { img: 'https://bsmedia.business-standard.com/_media/bs/img/article/2023-03/26/full/1679848298-3215.jpg?im=FeatureCrop,size=(826,465)', title: 'सामान्य  मजदूर', price: '400रु/दिन' },
            { img: 'https://images.bhaskarassets.com/web2images/521/2022/06/27/hal-harini-amavasya-730-final_1656325191.jpg', title: 'हलवाहा', price: '500रु/दिन' }
        ]
    };
    const list = document.getElementById('machinery-list');
    const viewMoreBtn = document.getElementById('machinery-viewmore');
    const tabBtns = document.querySelectorAll('.machinery-tab');
    let expanded = false;
    let currentSection = 'tractor';

    function renderCards() {
        list.innerHTML = '';
        const data = sectionsData[currentSection];
        const visibleCount = expanded ? 20 : 10;
        for (let i = 0; i < visibleCount; i++) {
            const card = document.createElement('div');
            card.className = 'machinery-card';
            card.innerHTML = `
                <img src="${data[i].img}" alt="${data[i].title}" class="machinery-img">
                <div class="machinery-info">
                    <div class="machinery-desc">${data[i].title}</div>
                    <div class="machinery-price">${data[i].price}</div>
                    <button class="machinery-book">BOOK</button>
                </div>
            `;
            // Add event listener to BOOK button
            card.querySelector('.machinery-book').addEventListener('click', function() {
                const params = new URLSearchParams({
                    img: data[i].img,
                    title: data[i].title,
                    price: data[i].price
                });
                window.location.href = `/booking?${params.toString()}`;
            });
            list.appendChild(card);
        }
    }

    renderCards();
    // Set initial button text and icon
    viewMoreBtn.childNodes[0].textContent = 'View More ';
    document.getElementById('viewmore-icon').innerHTML = '<i class="fa fa-chevron-down"></i>';

    viewMoreBtn.addEventListener('click', function() {
        expanded = !expanded;
        renderCards();
        viewMoreBtn.childNodes[0].textContent = expanded ? 'View Less ' : 'View More ';
        document.getElementById('viewmore-icon').innerHTML = expanded
            ? '<i class="fa fa-chevron-up"></i>'
            : '<i class="fa fa-chevron-down"></i>';
    });

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSection = btn.getAttribute('data-section');
            expanded = false;
            renderCards();
            viewMoreBtn.childNodes[0].textContent = 'View More ';
            document.getElementById('viewmore-icon').innerHTML = '<i class="fa fa-chevron-down"></i>';
        });
    });
});
// Full-width Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-img'));
    const leftBtn = document.querySelector('.carousel-btn.left');
    const rightBtn = document.querySelector('.carousel-btn.right');
    let currentIndex = 0;
    let autoSlideInterval;

    function goToSlide(idx) {
        currentIndex = idx;
        track.style.transform = `translateX(-${idx * 100}vw)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(currentIndex);
    }

    leftBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });
    rightBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3500);
    }
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    goToSlide(0);
    startAutoSlide();
});
document.addEventListener('DOMContentLoaded', () => {
  const loginBtn  = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');

  
  const token = localStorage.getItem('token');

  if (token) {
    loginBtn.style.display  = 'none';
    logoutBtn.style.display = 'inline-block';
  } else {
    loginBtn.style.display  = 'inline-block';
    logoutBtn.style.display = 'none';
  }

  // Logout logic
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('token'); // Token delete
    window.location.href = '/index'; // Redirect after logout
  });
});
