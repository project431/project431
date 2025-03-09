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
            "mall-name-1": "Galleria Mall",
            "mall-description-1": "Galleria Mall is considered one of the most prominent malls in Jubail and attracts visitors thanks to the variety of shops that offer international brands in clothing, accessories, cosmetics and electronics, such as H&M, CenterPoint, and others... It also contains many restaurants that offer local and international cuisine such as McDonald's, Manousha Al Reef, Starbucks, and others....",
            "mall-location": "Location: Jubail - Google Maps:",
            "mall-Features-1":"Features: It is located in the middle of the city and contains the best perfume shops.",
            "mall-Services-1":"Services: shops, restaurants, cafes, cosmetics shops",
            "mall-link-1":"Galleria Mall - Jubail",

            "mall-name-2": "Alfanatir Mall",
            "mall-description-2": "Fanateer Mall has been renovated and developed to become a premium shopping destination in Jubail. It now houses a wide range of stores including gold and accessories shops such as Al-Ghamdi Gold Shop, in addition to Abaya shops. It also houses many restaurants and cafes that offer a variety of options for visitors such as Subway, Cone Zone and entertainment areas for children such as Jumbo Lane, making it an ideal place for shopping and entertainment.",
            "mall-Features-2":"Features: It is modern and contains the latest shops, cafes, restaurants, and others.",
            "mall-Services-2":"Services: Gold shops, accessories, abayas, cafes, restaurants, entertainment.",
            "mall-link-2":": Fanateer Mall - Jubail",


            "mall-name-3": "Alhuwailat Mall",
            "mall-description-3": "Alhuwailat Mall features various stores.",
            "mall-location-3": "Location: Jubail - Google Maps: Alhuwailat Mall",
            "mall-name-4": "Alfaiha Market",
            "mall-description-4": "Alfaiha Market is one of the prominent local markets in Jubail.",
            "mall-location-4": "Location: Jubail - Google Maps: Alfaiha Market",
           
            "hotels-title": "Best Hotels in Jubail",
            "hotel-name-1": "Park Inn Radisson Jubail",
            "hotel-description-1":"Located near Najd Park and Jubail Corniche, it offers comfortable rooms with Wi-Fi and free parking, and is close to shopping and entertainment centers.",
            "hotel-location": "Location on Google Maps",
            "hotel-name-2": "Coral Jubail Hotel",
            "hotel-description-2": "Coral Jubail Hotel is a great choice for travelers looking for comfort.",
            
            "hotel-name-3": "Intercontinental Jubail Hotel",
            "hotel-description-3": "A luxury resort on the beach with beautiful gardens.",
            
            "hotel-name-4": "Sheraton Jubail Hotel",
            "hotel-description-4": "Sheraton Jubail Hotel is an ideal choice for accommodation.",
            
             /* place to eat page*/
            "eat-title":"places to eat",

             /* mosques page*/
           "mosques-title":"mosques",
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

            "mall-name-1": "غاليريا مول",
            "mall-description-1": "ُعتبر غاليريا مول من أبرز المولات في الجبيل ويستقطب الزوار بفضل تنوع المحلات التجارية التي تقدم الماركات العالمية في الملابس والإكسسوارات ومستحضرات التجميل والإلكترونيات, مثل محل درعة H&M,CenterPoint, وغيرهم... . كما يحتوي على العديد من المطاعم التي تقدم المأكولات المحلية والعالمية مثل ماكدونالدز و منؤوشة الريف وستاربكس وغيرها....",
            "mall-location-1": "الموقع على خرائط جوجل",
            "mall-Features-1":"المميزات: يتميز بموقعه الذي يقع بوسط المدينة واحتواءه على افضل متاجر العطور",
            "mall-Services-1":"الخدمات: محلات تجارية، مطاعم، مقاهي، محلات مستحضرات تجميل.",
            "mall-link-1":": غاليريا مول - الجبيل",

            "mall-name-2": "الفناتير مول",
            "mall-description-2": "تم تجديد وتطوير الفناتير مول ليصبح وجهة تسوق متميزة في الجبيل. يضم الآن مجموعة واسعة من المتاجر بما في ذلك محلات الذهب والإكسسوارات مثل محل الغامدي للذهب، بالإضافة إلى محلات العبايات. كما يضم العديد من المطاعم والمقاهي التي تقدم خيارات متنوعة للزوار مثل صب واي, كون زون وأماكن ترفيهية للأطفال مثل جامبو لين مما يجعله مكانًا مثاليًا للتسوق والترفيه.",
            "mall-Features-2":"المميزات: يتميز بحداثته واحتوائه على احدث المحلات من المقاهي والمطاعم وغيرها",
            "mall-Services-2":"الخدمات: محلات ذهب، إكسسوارات، عبايات، مقاهي، مطاعم, ترفية",
            "mall-link-2":": الفناتير مول - الجبيل",

            "mall-name-3": "الحويلات مول",
            "mall-description-3": "الحويلات مول هو مول متنوع يضم العديد من المحلات التجارية المميزة.",
            "mall-location-3": "الموقع: الجبيل - الموقع على خرائط جوجل: الحويلات مول",
            "mall-name-4": "سوق الفيحاء",
            "mall-description-4": "يُعد سوق الفيحاء من أبرز الأسواق الشعبية في الجبيل.",
            "mall-location-4": "الموقع: الجبيل - الموقع على خرائط جوجل: سوق الفيحاء", 
           
            /*hotels page*/
            "hotels-title": "أفضل الفنادق في الجبيل",
            "hotel-name-1": "",
            "hotel-description-1": " يقع بالقرب من حديقة نجد وكورنيش الجبيل، ويوفر غرفًا مريحة مع واي فاي وموقف سيارات مجاني، كما أنه قريب من مراكز التسوق والترفيه",
            "hotel-name-2": "فندق كورال الجبيل",
            "hotel-description-2": "فندق كورال الجبيل هو خيار رائع للمسافرين الذين يبحثون عن راحة وأجواء هادئة .",
            
            "hotel-name-3": "فندق إنتركونتيننتال الجبيل",
            "hotel-description-3": ": منتجع فاخر على شاطئ البحر يتميز بحدائق خلابة وشاطئ خاص. يوفر غرفًا وأجنحة أنيقة بإطلالات على الخليج العربي",
            
            "hotel-name-4": "",
            "hotel-description-4": "",

            "hotel-location": " الموقع على خرائط جوجل",
           /* place to eat*/
            "eat-title":"أماكن لتناول الطعام",

            /* mosques page*/
           "mosques-title":"المساجد",

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

