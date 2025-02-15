let currentLanguage = 'ar';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    changeLanguage(currentLanguage);
}

function changeLanguage(lang) {
    const translations = {
        en: {
            /*button */
            "home-button": "home",
            "mall-button": "mall",
            "hotels-button": "hotels",
            "eat-button": "where to eat",
            "healthcare-button":"healthcare",
            "mosques-button" :"Mosques",
            "entertainment-button":"entertainment",
            /* home page */
            "main-title": "Welcome to Jubail City",
            "about-title": "About Jubail",
            "about-text1":"During the Islamic era, Jubail served as a resting stop for traders and travelers moving between Gulf ports, gradually developing over the centuries. In 1933, an ancient water well known as Ain Jubail was discovered, marking an important historical site in the city.",
            "about-text": "Jubail, located on the Arabian Gulf coast in Saudi Arabia’s Eastern Province, is one of the oldest human settlements in the region, dating back over 7,000 years. In 1975, the city underwent a major transformation with the establishment of Jubail Industrial City, now the world’s largest industrial city, home to numerous petrochemical plants and oil refineries. This development has made Jubail a symbol of industry in Saudi Arabia and a key contributor to the nation’s economic diversification.",
             /* mall pageb */
            "shopping-title": "Shopping Malls in Jubail",
            "mall-name-1": "Ghalibaria Mall",
            "mall-description-1": "Ghalibaria Mall is one of the prominent malls in Jubail.",
            "mall-location-1": "Location: Jubail - Google Maps: Ghalibaria Mall",
            "mall-name-2": "Alfanatir Mall",
            "mall-description-2": "Alfanatir Mall is a distinctive shopping center.",
            "mall-location-2": "Location: Jubail - Google Maps: Alfanatir Mall",
            "mall-name-3": "Alhuwailat Mall",
            "mall-description-3": "Alhuwailat Mall features various stores.",
            "mall-location-3": "Location: Jubail - Google Maps: Alhuwailat Mall",
            "mall-name-4": "Alfaiha Market",
            "mall-description-4": "Alfaiha Market is one of the prominent local markets in Jubail.",
            "mall-location-4": "Location: Jubail - Google Maps: Alfaiha Market",
            "hotels-title": "Best Hotels in Jubail",
            "hotel-name-1": "Jubail Rotana Hotel",
            "hotel-description-1": "Jubail Rotana is one of the finest hotels in the city.",
            "hotel-location-1": "Location: Jubail - Google Maps: Jubail Rotana Hotel",
            "hotel-name-2": "Coral Jubail Hotel",
            "hotel-description-2": "Coral Jubail Hotel is a great choice for travelers looking for comfort.",
            "hotel-location-2": "Location: Jubail - Google Maps: Coral Jubail Hotel",
            "hotel-name-3": "Intercontinental Jubail Hotel",
            "hotel-description-3": "A luxury resort on the beach with beautiful gardens.",
            "hotel-location-3": "Location: Jubail - Google Maps: Intercontinental Jubail Hotel",
            "hotel-name-4": "Sheraton Jubail Hotel",
            "hotel-description-4": "Sheraton Jubail Hotel is an ideal choice for accommodation.",
            "hotel-location-4": "Location: Jubail - Google Maps: Sheraton Jubail Hotel",

            "eat-title":"places to eat",
        },

        ar: {
           /*button */
            "home-button": "الرئيسية",
            "mall-button": "مراكز التسوق",
            "hotels-button": "الفنادق",
            "eat-button": " الاكل",
            "healthcare-button":"الصحة",
            "mosques-button" :"المساجد",
            "entertainment-button":" الترفيه",
           
            /* home page */
            "main-title": "مرحبًا بكم في مدينة الجبيل",
            "about-title": "عن الجبيل",
            "about-text":"تُعدُّ مدينة الجبيل من أقدم المدن الساحلية في المملكة العربية السعودية، حيث يعود تاريخها إلى أكثر من 7,000 عام .كانت تُعرف قديمًا بأنها مركزٌ مهمٌ للصيد والتجارة البحرية، نظرًا لموقعها الاستراتيجي على ساحل الخليج العربي ",
            "about-text1":"في العصور الإسلامية، كانت الجبيل محطة استراحة للتجار والمسافرين بين الموانئ الخليجية، وشهدت تطورًا تدريجيًا حتى العصر الحديث.  في عام 1933، تم اكتشاف بئر ماء قديمة تُعرف باسم عين الجبيل، والتي تُعد من العلامات التاريخية للمدينة",
           
            /* mall pageb */
            "shopping-title": "مراكز التسوق في الجبيل",
            "mall-name-1": "غالبريا مول",
            "mall-description-1": "غالبريا مول هو أحد أبرز المولات في الجبيل.",
            "mall-location-1": "الموقع: الجبيل - الموقع على خرائط جوجل: غالبريا مول",
            "mall-name-2": "الفناتير مول",
            "mall-description-2": "الفناتير مول هو مركز تسوق مميز بعد تجديده بالكامل.",
            "mall-location-2": "الموقع: الجبيل - الموقع على خرائط جوجل: الفناتير مول",
            "mall-name-3": "الحويلات مول",
            "mall-description-3": "الحويلات مول هو مول متنوع يضم العديد من المحلات التجارية المميزة.",
            "mall-location-3": "الموقع: الجبيل - الموقع على خرائط جوجل: الحويلات مول",
            "mall-name-4": "سوق الفيحاء",
            "mall-description-4": "يُعد سوق الفيحاء من أبرز الأسواق الشعبية في الجبيل.",
            "mall-location-4": "الموقع: الجبيل - الموقع على خرائط جوجل: سوق الفيحاء", 
           
            /*hotels page*/
            "hotels-title": "أفضل الفنادق في الجبيل",
            "hotel-name-1": "فندق الجبيل روتانا",
            "hotel-description-1": "فندق روتانا الجبيل هو من أفخم الفنادق في المدينة.",
            "hotel-location-1": "الموقع: الجبيل - الموقع على خرائط جوجل: فندق الجبيل روتانا",
            "hotel-name-2": "فندق كورال الجبيل",
            "hotel-description-2": "فندق كورال الجبيل هو خيار رائع للمسافرين الذين يبحثون عن راحة.",
            "hotel-location-2": "الموقع: الجبيل - الموقع على خرائط جوجل: فندق كورال الجبيل",
            "hotel-name-3": "فندق إنتركونتيننتال الجبيل",
            "hotel-description-3": "منتجع فاخر على شاطئ البحر يتميز بحدائق خلابة وشاطئ خاص.",
            "hotel-location-3": "الموقع: الجبيل - الموقع على خرائط جوجل: فندق إنتركونتيننتال الجبيل",
            "hotel-name-4": "فندق شيراتون الجبيل",
            "hotel-description-4": "فندق شيراتون الجبيل يعد من الخيارات المثالية للإقامة.",
            "hotel-location-4": "الموقع: الجبيل - الموقع على خرائط جوجل: فندق شيراتون الجبيل",
           
            "eat-title":"أماكن لتناول الطعام",

        }
    };

    const data = translations[lang];
    Object.keys(data).forEach(key => {
        const element = document.querySelector(`[data-translate="${key}"]`);
        if (element) {
            element.textContent = data[key];
        }
    });

    // تغيير اتجاه الصفحة بناءً على اللغة
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang);
}

// Default language setup
changeLanguage('ar');

