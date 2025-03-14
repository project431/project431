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
            "about-webpage-title": "About this webpage",
            "about-page-text-1":"This page was created to be your comprehensive guide to everything related to Jubail, providing detailed information about the best places and services available in the city. Here, you'll find details about shopping malls, hotels, restaurants, healthcare facilities, mosques, and entertainment venues, helping you explore the city with ease.",
            "about-page-text-2":"Our goal is to provide a reliable resource that reflects the beauty and sophistication of Jubail, whether you're a resident or a visitor looking for a unique experience. We're constantly updating information to ensure you receive the most accurate details and the best recommendations.",
            "main-title": "Welcome to Jubail City",
            "about-title": "About Jubail",
            "about-text1":"During the Islamic era, Jubail served as a resting stop for traders and travelers moving between Gulf ports, gradually developing over the centuries. In 1933, an ancient water well known as Ain Jubail was discovered, marking an important historical site in the city.",
            "about-text": "Jubail, located on the Arabian Gulf coast in Saudi Arabia’s Eastern Province, is one of the oldest human settlements in the region, dating back over 7,000 years. In 1975, the city underwent a major transformation with the establishment of Jubail Industrial City, now the world’s largest industrial city, home to numerous petrochemical plants and oil refineries. This development has made Jubail a symbol of industry in Saudi Arabia and a key contributor to the nation’s economic diversification.",
            "map":"Explore Jubail on the Map",

            /* mall pageb */
            "shopping-title": "Shopping Malls in Jubail",
            
            "mall-name-1": "Galleria Mall",
            "mall-description-1": "Galleria Mall is considered one of the most prominent malls in Jubail and attracts visitors thanks to the variety of shops that offer international brands in clothing, accessories, cosmetics and electronics, such as H&M, CenterPoint, and others... It also contains many restaurants that offer local and international cuisine such as McDonald's, Manousha Al Reef, Starbucks, and others....",
            "mall-location-1": "Location: Jubail - Google Maps:",
            "mall-Features-1":"Features: It is located in the middle of the city and contains the best perfume shops.",
            "mall-Services-1":"Services: shops, restaurants, cafes, cosmetics shops",
            "mall-link-1":"Galleria Mall - Jubail",

            "mall-name-2": "Alfanatir Mall",
            "mall-description-2": "Fanateer Mall has been renovated and developed to become a premium shopping destination in Jubail. It now houses a wide range of stores including gold and accessories shops such as Al-Ghamdi Gold Shop, in addition to Abaya shops. It also houses many restaurants and cafes that offer a variety of options for visitors such as Subway, Cone Zone and entertainment areas for children such as Jumbo Lane, making it an ideal place for shopping and entertainment.",
            "mall-Features-2":"Features: It is modern and contains the latest shops, cafes, restaurants, and others.",
            "mall-Services-2":"Services: Gold shops, accessories, abayas, cafes, restaurants, entertainment.",
            "mall-link-2":": Fanateer Mall - Jubail",
            "mall-location-2": "Location: Jubail - Google Maps:",
            

            "mall-name-3": "Alhuwailat Mall",
            "mall-description-3": " Al-Huwailat Mall is a medium-sized mall in Jubail, featuring a variety of stores, including clothing and household items, as well as Hyper Panda and Jarir Bookstore. The mall also houses several cafes and restaurants, such as Burger King and Eamon, offering a variety of options for visitors. ",
            "mall-Features-3":"Features: It is close to the expressway leading to Dammam.",
            "mall-Services-3":"Services: Shops, Hyper Panda, Jarir Bookstore, Cafes, Restaurants.",
            "mall-link-3":"Alhuwailat Mall - Jubail",
            "mall-location-3": "Location: Jubail - Google Maps:",

            "mall-name-4": "Alfaiha Market",
            "mall-description-4": "This market is one of the most prominent popular markets in Jubail, featuring a variety of shops that cater to the needs of residents and visitors. Located in the Al-Faihaa neighborhood of Jubail Industrial City, the Al-Faihaa Market is a vibrant neighborhood that boasts numerous services and facilities.",
            "mall-Features-4":"Features: Al Fayhaa Market is distinguished by having all your daily needs in one place, from the simplest to the most complex things.",
            "mall-Services-4":"Services: Vegetable and fruit market, meat and fish market, restaurants and cafes, electrical and plumbing shops",
            "mall-link-4":"Alfaiha Market - Jubail",
            "mall-location-4": "Location: Jubail - Google Maps:",

            "mall-name-5": "Jubail Bay Mall",
            "mall-description-5": "Jubail Bay Mall is a modern shopping mall located in the Jubail Industrial City, Saudi Arabia. It is part of the Jubail Bay project, an integrated commercial and residential development on the city's waterfront. The mall houses a variety of local stores such as Abdul Samad Al Qurashi and international brands such as Balmain, as well as a wide range of restaurants and cafes such as Starbucks and many others (the complex is still new, and many more stores will open in time).",
            "mall-Features-5":"Features: The largest closed complex in the city, wonderful sea view, includes a ship port",
            "mall-Services-5":"Services: Restaurants, Cafes, Clothing Stores, Perfumes",
            "mall-link-5":"Jubail Bay Mall - Jubail",
            "mall-location-5": "Location: Jubail - Google Maps:",

            /*hotels page*/
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
"mosques-title": "Mosques",
    "mosques-name-1": "Al-Farooq Mosque",
    "mosques-description-1": "Al-Farooq Mosque is considered one of the most prominent and largest mosques in Jubail Industrial City. It features an architectural design that combines classical Islamic styles with modern touches, making it a spiritual and aesthetic landmark in the city. It welcomes a large number of worshippers during daily prayers and religious occasions.",
    "mosques-size-1": "Size: One of the largest mosques in Jubail Industrial City, accommodating a significant number of worshippers.",
    "mosques-location-1": "Location on Google Maps",
    "mosques-link-1": "Al-Farooq Mosque",

    "mosques-name-2": "Dr. Ghazi Al-Qusaibi Mosque",
    "mosques-description-2": "A modern mosque named in honor of Dr. Ghazi Al-Qusaibi. It features a simple and elegant design that reflects the contemporary beauty of Islamic architecture. The mosque provides a calm and spiritual atmosphere for worshippers and is located near the new SABIC building, making it distinctive in terms of location.",
    "mosques-size-2": "Size: Medium-sized with a geometric design that comfortably accommodates worshippers.",
    "mosques-location-2": "Location on Google Maps",
    "mosques-link-2": "Dr. Ghazi Al-Qusaibi Mosque",

    "mosques-name-3": "Anas Bin Malik Mosque",
    "mosques-description-3": "Anas Bin Malik Mosque is characterized by its elegance and spirituality, serving as a vibrant center for worship and religious activities in the Al-Huwailat neighborhood. The mosque is carefully designed to combine comfort and simplicity, attracting local residents for prayers.",
    "mosques-size-3": "Size: Spacious and accommodates a large number of worshippers.",
    "mosques-location-3": "Location on Google Maps",
    "mosques-link-3": "Anas Bin Malik Mosque",

    "mosques-name-4": "Taiba Mosque",
    "mosques-description-4": "Taiba Mosque enjoys a tranquil atmosphere and a simple yet elegant architectural design, providing worshippers with a unique spiritual experience. This mosque is one of the ideal options for residents seeking comfort and peace during their prayers.",
    "mosques-size-4": "Size: Medium-sized, with a suitable space to meet the needs of worshippers.",
    "mosques-location-4": "Location on Google Maps",
    "mosques-link-4": "Taiba Mosque",

    "mosques-name-5": "Al-Reihan Mosque",
    "mosques-description-5": "Al-Rehan Mosque is known for its attractive design and spacious area, making it a favorite destination for local residents to perform prayers. The mosque is famous for its large capacity during Friday prayers and special occasions, providing a unique spiritual atmosphere.",
    "mosques-size-5": "Size: Large and accommodates a significant number of worshippers.",
    "mosques-location-5": "Location on Google Maps",
    "mosques-link-5": "Al-Reihan Mosque"

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
            "about-webpage-title": " عن هذه الصفحة ",
            "about-page-text-1":"تم إنشاء هذه الصفحة لتكون دليلك الشامل لكل ما يخص مدينة الجبيل، حيث نقدم معلومات دقيقة حول أفضل الأماكن والخدمات المتاحة في المدينة. ستجد هنا تفاصيل عن مراكز التسوق، الفنادق، المطاعم، المرافق الصحية، المساجد، وأماكن الترفيه، مما يساعدك في استكشاف المدينة بسهولة.",
            "about-page-text-2":"هدفنا هو توفير مصدر موثوق يعكس جمال وتطور الجبيل، سواء كنت من سكانها أو زائرًا يبحث عن تجربة مميزة. نحرص على تحديث المعلومات باستمرار لضمان حصولك على أدق التفاصيل وأفضل التوصيات.",
            "main-title": "مرحبًا بكم في مدينة الجبيل",
            "about-title": " عن مدينة الجبيل ",
            "about-text":"تُعدُّ مدينة الجبيل من أقدم المدن الساحلية في المملكة العربية السعودية، حيث يعود تاريخها إلى أكثر من 7,000 عام .كانت تُعرف قديمًا بأنها مركزٌ مهمٌ للصيد والتجارة البحرية، نظرًا لموقعها الاستراتيجي على ساحل الخليج العربي ",
            "about-text1":"في العصور الإسلامية، كانت الجبيل محطة استراحة للتجار والمسافرين بين الموانئ الخليجية، وشهدت تطورًا تدريجيًا حتى العصر الحديث.  في عام 1933، تم اكتشاف بئر ماء قديمة تُعرف باسم عين الجبيل، والتي تُعد من العلامات التاريخية للمدينة",
           
            "map":"استكشف الجبيل على الخريطة",
           
            /* mall pageb */
            "shopping-title": "مراكز التسوق في الجبيل",

            "mall-name-1": "غاليريا مول ",
            "mall-description-1": ">يُعتبر غاليريا مول من أبرز المولات في الجبيل ويستقطب الزوار بفضل تنوع المحلات التجارية التي تقدم الماركات العالمية في الملابس والإكسسوارات ومستحضرات التجميل والإلكترونيات, مثل محل درعة H&M,CenterPoint, وغيرهم... . كما يحتوي على العديد من المطاعم التي تقدم المأكولات المحلية والعالمية مثل ماكدونالدز و منؤوشة الريف وستاربكس وغيرها....",
            "mall-location-1": "الموقع على خرائط جوجل ",
            "mall-Features-1":"المميزات: يتميز بموقعه الذي يقع بوسط المدينة واحتواءه على افضل متاجر العطور ",
            "mall-Services-1":"الخدمات: محلات تجارية، مطاعم، مقاهي، محلات مستحضرات تجميل.",
            "mall-link-1":"غاليريا مول - الجبيل",

            "mall-name-2": "الفناتير مول",
            "mall-description-2": "تم تجديد وتطوير الفناتير مول ليصبح وجهة تسوق متميزة في الجبيل. يضم الآن مجموعة واسعة من المتاجر بما في ذلك محلات الذهب والإكسسوارات مثل محل الغامدي للذهب، بالإضافة إلى محلات العبايات. كما يضم العديد من المطاعم والمقاهي التي تقدم خيارات متنوعة للزوار مثل صب واي, كون زون وأماكن ترفيهية للأطفال مثل جامبو لين مما يجعله مكانًا مثاليًا للتسوق والترفيه.",
            "mall-Features-2":"المميزات: يتميز بحداثته واحتوائه على احدث المحلات من المقاهي والمطاعم وغيرها",
            "mall-Services-2":" الخدمات: محلات تجارية، مطاعم، مقاهي، محلات مستحضرات تجميل.",
            "mall-link-2":" الفناتير مول - الجبيل",
            "mall-location-2": "الموقع على خرائط جوجل ",
            

            "mall-name-3": "الحويلات مول",
            "mall-description-3": "يُعد الحويلات مول من المولات المتوسطة الحجم في الجبيل، ويتميز بوجود محلات متنوعة تشمل ملابس، مستلزمات منزلية، بالإضافة إلى هايبر بنده وجرير. كما يحتوي المول على بعض المقاهي والمطاعم مثل برجر كنج وايمون التي تقدم خيارات متنوعة للزوار.",
            "mall-Features-3":"المميزات: يتميز بقربة من الخط السريع المؤدي الى الدمام ",
            "mall-Services-3":" الخدمات: محلات تجارية، هايبر بندة، مكتبة جرير، مقاهي، مطاعم.",
            "mall-link-3":"الحويلات مول  - الجبيل " ,
            "mall-location-3": "الموقع على خرائط جوجل ",

            "mall-name-4": "سوق الفيحاء",
            "mall-description-4": " يُعد هذا السوق من أبرز الأسواق الشعبية في مدينة الجبيل، حيث يضم مجموعة متنوعة من المحلات التجارية التي تلبي احتياجات السكان والزوار. يقع سوق الفيحاء في حي الفيحاء بمدينة الجبيل الصناعية، وهو من الأحياء الحيوية التي تضم العديد من الخدمات والمرافق",
            "mall-Features-4":"المميزات: يتميز سوق الفيحاء بوجود جميع احتياجاتك اليومية في مكان واحد من ابسط الأشياء الى أعقدها.",
            "mall-Services-4":"الخدمات: سوق الخضروات والفواكة, سوق اللحوم والأسماك, المطاعم والمقاهي, محلات الكهرباء والسباكة",
            "mall-link-4":" سوق الفيحاء - الجبيل",
            "mall-location-4": "الموقع على خرائط جوجل ",

            "mall-name-5": "Jubail Bay Mall",
            "mall-description-5": " الجبيل باي مول هو مركز تسوّق حديث يقع في مدينة الجبيل الصناعية بالمملكة العربية السعودية. يُعد جزءًا من مشروع  جبيل باي، الذي يُعتبر تطويرًا تجاريًا وسكنيًا متكاملًا على الواجهة البحرية للمدينة. يضم المول مجموعة متنوعة من المتاجر المحلية مثل عبدالصمد القرشي والعالمية مثل بالمان، بالإضافة إلى خيارات متعددة من المطاعم والمقاهي مثل ستاربكس وغيرها الكثير(المجمع لازال جديد وع الزمن سيتم افتتاح العديد من المتاجر الأخرى).",
            "mall-Features-5":"المميزات: أكبر مجمع مغلق في المدينة, اطلالة رائعة على البحر, يضم ميناء للسفن",
            "mall-Services-5":"الخدمات: المطاعم, المقاهي, محلات ملابس, عطور",
            "mall-link-5":"الجبيل باي مول - الجبيل ",
            "mall-location-5": "الموقع على خرائط جوجل ",
            /*hotels page*/
            "hotels-title": "أفضل الفنادق في الجبيل",
            "hotel-name-1": "بارك إن راديسون الجبيل الصناعية",
            "hotel-description-1": " يقع بالقرب من حديقة نجد وكورنيش الجبيل، ويوفر غرفًا مريحة مع واي فاي وموقف سيارات مجاني، كما أنه قريب من مراكز التسوق والترفيه",
            "hotel-name-2": "  فندق كورال الجبيل " ,
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
            "mosques-name-1":" جامع الفاروق ",
            "mosques-description-1":"جامع الفاروق يُعتبر من أبرز وأكبر الجوامع في الجبيل الصناعية. يتميز بتصميم معماري يجمع بين الطراز الإسلامي الكلاسيكي واللمسات الحديثة، مما يجعله معلمًا روحانيًا وجماليًا في المدينة. يستقبل أعدادًا كبيرة من المصلين خلال الأوقات اليومية والمناسبات الدينية.",
            "mosques-size-1":"الحجم: من أكبر الجوامع في الجبيل الصناعية، ويتسع لعدد كبير من المصلين.",
            "mosques-location-1":"الموقع على خرائط جوجل",
            "mosques-link-1":"جامع الفاروق ",
            
            "mosques-name-2":" جامع الدكتور غازي القصيبي ",
            "mosques-description-2":"جامع حديث تم تسميته تكريمًا للدكتور غازي القصيبي. يتميز بتصميم بسيط وأنيق يعكس الجمال العصري للعمارة الإسلامية. الجامع يوفر أجواءً هادئة وروحانية للمصلين، ويقع بالقرب من مبنى سابك الجديد، مما يجعله مميزًا من حيث الموقع.",
            "mosques-size-2":"•الحجم: متوسط الحجم مع تصميم هندسي يستوعب المصلين بشكل مريح.",
            "mosques-location-2":"الموقع على خرائط جوجل",
            "mosques-link-2":"جامع الدكتور غازي القصيبي ",
 
            "mosques-name-3":" جامع أنس بن مالك ",
            "mosques-description-3":"يتميز جامع أنس بن مالك بأناقته وروحانيته، حيث يُعد مركزًا حيويًا للعبادة والأنشطة الدينية في حي الحويلات. الجامع مصمم بعناية ليجمع بين الراحة والبساطة، مما يجذب سكان الحي للصلاة فيه.",
            "mosques-size-3":"•الحجم: واسع ويتسع لأعداد كبيرة من المصلين",
            "mosques-location-3":"الموقع على خرائط جوجل",
            "mosques-link-3":"جامع أنس بن مالك ",
 
            "mosques-name-4":" جامع طيبة ",
            "mosques-description-4":"جامع طيبة يتمتع بأجواء هادئة وتصميم معماري بسيط ولكنه أنيق، يوفر للمصلين تجربة روحانية مميزة. يعد هذا الجامع من الخيارات المثالية للسكان الباحثين عن الراحة والسكينة خلال أداء صلواتهم",
            "mosques-size-4":" •الحجم: متوسط الحجم، مع مساحة مناسبة تلبي احتياجات المصلين.",
            "mosques-location-4":"الموقع على خرائط جوجل",
            "mosques-link-4":"جامع طيبة ",
 
            "mosques-name-5":" جامع الريحان ",
            "mosques-description-5":"جامع الريحان يتميز بتصميمه الجذاب ومساحته الواسعة، مما يجعله وجهة مفضلة لسكان الحي لأداء الصلاة. يشتهر الجامع باستيعابه الكبير خلال صلاة الجمعة والمناسبات، مع توفير أجواء روحانية مميزة.",
            "mosques-size-5":"•الحجم: كبير ويتسع لعدد كبير من المصلين",
            "mosques-location-5":"الموقع على خرائط جوجل",
            "mosques-link-5":" جامع الريحان ",
 

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

