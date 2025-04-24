let currentLanguage = 'ar';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    changeLanguage(currentLanguage);
}

function changeLanguage(lang) {
    const translations = {
        en: {
            
            /*button */
            "home-button": "Home",
            "mall-button": "Shopping",
            "hotels-button": "Accommodation",
            "eat-button": "Restaurants",
            "healthcare-button":"Healthcare",
            "mosques-button" :"Mosques",
            "entertainment-button":"Entertainment",
            /* home page */
            
            "time":"time in Jubail",
            "weather":"weather in Jubail",
            "about-webpage-title": "About this webpage",
            "about-page-text-1":"This page was created to be your comprehensive guide to everything related to Jubail, providing detailed information about the best places and services available in the city. Here, you'll find details about shopping malls, hotels, restaurants, healthcare facilities, mosques, and entertainment venues, helping you explore the city with ease.",
            "about-page-text-2":"Our goal is to provide a reliable resource that reflects the beauty and sophistication of Jubail, whether you're a resident or a visitor looking for a unique experience. We're constantly updating information to ensure you receive the most accurate details and the best recommendations.",
            "main-title": "Your guide to everything related to Jubail Industrial City",
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

            "hotel-name-1": "Park Inn by Radisson Jubail Industrial",
            "hotel-price-1": "💰💰💰 (Medium)",
            "hotel-description-1": "Located near Najd Park and Jubail Corniche, offering comfortable rooms with free Wi-Fi and parking. Close to shopping and entertainment centers.",
            "hotel-location-1": "Location on Google Maps",
            "hotel-link-1": "Park Inn by Radisson Jubail Industrial",
            "hotel-more-1": "For booking and inquiries",
          
            "hotel-name-2": "Coral Jubail Hotel",
            "hotel-price-2": "💰💰💰 (Medium)",
            "hotel-description-2": "A modern hotel by the sea, offering a panoramic dining experience with views of the Arabian Gulf. Elegantly furnished rooms with contemporary décor.",
            "hotel-location-2": "Location on Google Maps",
            "hotel-link-2": "Coral Jubail Hotel",
            "hotel-more-2": "For booking and inquiries",
          
            "hotel-name-3": "Intercontinental Jubail Hotel",
            "hotel-price-3": "💰💰💰 (Medium)",
            "hotel-description-3": "A modern hotel by the sea, offering a panoramic dining experience with views of the Arabian Gulf. Elegantly furnished rooms with contemporary décor.",
            "hotel-location-3": "Location on Google Maps",
            "hotel-link-3": "Intercontinental Jubail Hotel",
            "hotel-more-3": "For booking and inquiries",
          
            "hotel-name-4": "Boudl Jubail Hotel",
            "hotel-price-4": "💰💰💰 (Medium)",
            "hotel-description-4": "Located on the Arabian Gulf coast in Jubail Industrial City, near major attractions such as beaches, parks, and shopping centers. 6 km from Najd Park and Al Dhafair Park, and 8 km from Al Shurooq Entertainment Park.",
            "hotel-location-4": "Location on Google Maps",
            "hotel-link-4": "Boudl Jubail Hotel",
            "hotel-more-4": "For booking and inquiries",
          
            "hotel-name-5": "Holiday Inn & Suites - Jubail",
            "hotel-price-5": "💰💰💰 (Medium)",
            "hotel-description-5": "Located just a 5-minute walk from Taibah Beach and about an hour from King Fahd International Airport, offering modern rooms and suites suitable for families and business travelers.",
            "hotel-location-5": "Location on Google Maps",
            "hotel-link-5": "Holiday Inn & Suites - Jubail",
            "hotel-more-5": "For booking and inquiries",
          
            "hotel-name-6": "Durrat Jalmouda Hotel",
            "hotel-price-6": "💰💰💰 (Medium)",
            "hotel-description-6": "Situated in Jubail, 5.9 km from Al Dafi Park, featuring an outdoor pool, free private parking, a fitness center, and a restaurant.",
            "hotel-location-6": "Location on Google Maps",
            "hotel-link-6": "Durrat Jalmouda Hotel",
            "hotel-more-6": "For booking and inquiries",
          
            "hotel-name-7": "Warwick Al Jubail Hotel",
            "hotel-price-7": "💰💰💰 (Medium)",
            "hotel-description-7": "Located 4.6 km from Najd Park, this hotel offers a terrace, free private parking, a restaurant, and a bar. A 4-star hotel with business facilities and concierge service, providing free Wi-Fi, a 24-hour front desk, airport transfers, and room service.",
            "hotel-location-7": "Location on Google Maps",
            "hotel-link-7": "Warwick Al Jubail Hotel",
            "hotel-more-7": "For booking and inquiries",
          
            "hotel-name-8": "Karan Hotel",
            "hotel-price-8": "💰💰💰 (Medium)",
            "hotel-description-8": "This upscale hotel is near the Gulf, surrounded by businesses and restaurants, and is a 14-minute walk from Fanateer Corniche Park. The hotel is 103 km from King Fahd International Airport.",
            "hotel-location-8": "Location on Google Maps",
            "hotel-link-8": "Karan Hotel",
            "hotel-more-8": "For booking and inquiries",
            
             /* place to eat page*/
            "eat-place-title": "Dining Places",

"eat-place-name-1": "Steak House",
"eat-place-price-1": "$$$$ (High)",
"eat-place-description-1": "A restaurant offering a premium experience for meat lovers, renowned for serving authentic American-style grilled steaks. The restaurant combines high quality, rich flavors, and elegant service, making it a favorite destination for grilled food enthusiasts.",
"eat-place-type-1": "American restaurant specializing in grilled steaks",
"eat-place-location-1": "Location on Google Maps",
"eat-place-link-1": "Steak House",

"eat-place-name-2": "Al Tayeh",
"eat-place-price-2": "$$$$ (High)",
"eat-place-description-2": "Al Tayeh is a Saudi restaurant that offers a variety of traditional and international dishes. It is known for its high-quality food and upscale service. The modern atmosphere blends luxury with authenticity, making it ideal for families and individuals seeking a premium dining experience.",
"eat-place-type-2": "Restaurant serving Saudi, Arabic, and international cuisine",
"eat-place-location-2": "Location on Google Maps",
"eat-place-link-2": "Al Tayeh",

"eat-place-name-3": "Pranzo",
"eat-place-price-3": "$$$$ (High)",
"eat-place-description-3": "Pranzo is a restaurant that serves Italian cuisine in a modern style, known for high-quality ingredients and a classic European touch with a contemporary twist. 'Pranzo' means lunch in Italian, reflecting the restaurant’s focus on a refined Italian dining experience.",
"eat-place-type-3": "Specialized Italian restaurant",
"eat-place-location-3": "Location on Google Maps",
"eat-place-link-3": "Pranzo",

"eat-place-name-4": "Fuddruckers",
"eat-place-price-4": "$$$ (Moderate)",
"eat-place-description-4": "Fuddruckers is a popular American restaurant specializing in burgers, known for using fresh beef prepared daily in-house. Customers can customize their orders. Founded in the U.S., it later expanded to several countries, including Saudi Arabia, where it enjoys wide popularity.",
"eat-place-type-4": "American restaurant",
"eat-place-location-4": "Location on Google Maps",
"eat-place-link-4": "Fuddruckers",

"eat-place-name-5": "Dar Al Karam Restaurant",
"eat-place-price-5": "$$$$ (High)",
"eat-place-description-5": "A fine Lebanese restaurant serving traditional dishes with authentic flavors and a modern twist. It stands out for its elegant seating and rich menu that caters to diverse tastes.",
"eat-place-type-5": "Upscale Lebanese restaurant",
"eat-place-location-5": "Location on Google Maps",
"eat-place-link-5": "Dar Al Karam Restaurant",

"eat-place-name-6": "Grillo",
"eat-place-price-6": "$$$ (Moderate)",
"eat-place-description-6": "Grillo Fanateer is one of the top grill restaurants in Jubail Industrial City, located in the Fanateer district. Established in 1995, it’s known for a wide range of grilled dishes and shawarma, as well as Arabic, Egyptian, and tasty pastry options.",
"eat-place-type-6": "Grill and Shawarma Restaurant",
"eat-place-location-6": "Location on Google Maps",
"eat-place-link-6": "Grillo",

"eat-place-name-7": "F&B Burger",
"eat-place-price-7": "$$$ (Moderate)",
"eat-place-description-7": "F&B Burger is a Saudi burger chain specializing in freshly made burgers with a variety of meats, sauces, and special toppings. Founded in 2018 in Al-Ahsa, it has expanded to 8 branches in the Eastern Province and plans further expansion across the Kingdom.",
"eat-place-type-7": "Specialized Burger Restaurant",
"eat-place-location-7": "Location on Google Maps",
"eat-place-link-7": "F&B Burger",


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
        "mosques-link-5": "Al-Reihan Mosque",
      /* Health pageb */
       
           /* Health page */
        "healthcare-title":" Healthcare",
         "healthcare-name-1": "Royal Commission Hospital in Jubail",
         "healthcare-type-1": "Government Hospital",
         "healthcare-description-1": "This hospital is operated by the Royal Commission for Jubail and Yanbu, providing healthcare services to residents and workers in Jubail Industrial City.",
         "healthcare-location-1": "View on Google Maps",
         "healthcare-link-1": "Royal Commission Hospital in Jubail",
         "healthcare-more-1": "More",

         "healthcare-name-2": "Al Mouwasat Hospital",
         "healthcare-type-2": "Private Hospital",
         "healthcare-description-2": "Part of the Al Mouwasat Hospitals Group, this advanced private hospital offers various departments including Emergency, Surgery, ICU, Obstetrics & Gynecology, and specialized clinics such as Dermatology, Ophthalmology, and ENT.",
         "healthcare-location-2": "View on Google Maps",
         "healthcare-link-2": "Al Mouwasat Hospital",
         "healthcare-more-2": "More",

         "healthcare-name-3": "Al Mana General Hospital",
         "healthcare-type-3": "Private Hospital",
         "healthcare-description-3": "Offers a variety of medical services including outpatient clinics, surgery, cosmetics, pediatrics, internal medicine, dermatology, and support departments like lab and radiology. Known for excellent customer service and modern equipment.",
         "healthcare-location-3": "View on Google Maps",
         "healthcare-link-3": "Al Mana General ",  
         "healthcare-more-3": "More",

         "healthcare-name-4": "Al-Lu'lu'a Medical Complex",
         "healthcare-type-4": "Private Hospital",
         "healthcare-description-4": "Al-Lu'lu'a Medical Complex, also known as Al-Lu'lu'a Dispensary, is a private healthcare facility located in the heart of Jubail Industrial City, in Al-Firdaws district on Al-Nakheel Road. Established in 1995 as part of Al Waleed Investment Group, it has since become a trusted name in the area.",
         "healthcare-location-4": "View on Google Maps",
         "healthcare-link-4": "Al-Lu'lu'a Medical Complex",
         "healthcare-more-4": "More",

         "healthcare-name-5": "RAM Dental",
         "healthcare-type-5": "Private Dental Hospital",
         "healthcare-description-5": "RAM Dental is a chain of clinics specialized in providing modern dental care services in Saudi Arabia. Known for delivering high-quality treatment using the latest technologies and medical equipment, with a team of experienced specialist dentists.",
         "healthcare-location-5": "View on Google Maps",
         "healthcare-link-5": "RAM Dental",
         "healthcare-more-5": "More",
          
         
        /* GYM page */
        
        "gym": "Best Gyms in Jubail",
           
        "gym-name-1": "Snap Fitness",
        "gym-price-1": "💰💰💰 (Medium)",
        "gym-gender-1": "Al-Huwailat Branch - Men's Section",
        "gym-description-1": "Snap Fitness is a global chain of fitness clubs offering high-quality fitness services. The Jubail Industrial City branch, located in Al-Huwailat, provides a comprehensive sports environment to meet members' needs 24/7.",
        "gym-services-1": "Modern Equipment: Cardio and strength training machines, as well as functional training equipment. Diverse Training Programs: Group classes and personal training sessions to meet various member needs.",
        "gym-location-1": "Location on Google Maps",
        "gym-link-1": "Snap Fitness",
        "gym-more-1": "More",

        "gym-name-2": "Fitness Time",
        "gym-price-2": "💰💰💰💰 (High)",
        "gym-gender-2": "Jalmouda - Men's and Women's Sections",
        "gym-description-2": "One of the leading fitness center chains in Saudi Arabia, offering comprehensive sports facilities to meet the needs of various age groups and fitness levels. Its branches in Jubail Industrial City, located in Jalmouda and Al-Firdaws, are equipped with the latest equipment and provide an ideal environment for achieving fitness goals.",
        "gym-services-2": "Fully Equipped Fitness Halls: Featuring the latest sports equipment for strength and fitness training.",
        "gym-location-2": "Location on Google Maps",
        "gym-link-2": "Fitness Time",
        "gym-more-2": "More",

        "gym-name-3": "iN2 Fitness Club",
        "gym-price-3": "💰💰💰 (Medium)",
        "gym-gender-3": "Women's Section",
        "gym-description-3": "A leading fitness club in Saudi Arabia, offering integrated sports facilities and an exceptional fitness experience. The club aims to meet members' needs by providing high-quality services and facilities equipped with the latest technologies. The club features a stunning sea view.",
        "gym-services-3": "• World-class designed spaces: To meet all fitness needs of members. • Latest cardio and strength training technologies: Ensuring an effective training experience. • Dedicated studios for group fitness classes: Providing a motivational and enjoyable environment.",
        "gym-location-3": "Location on Google Maps",
        "gym-link-3": "iN2 Fitness Club",
        "gym-more-3": "More",
         
         "place-title": "Entertainment Places",

         /* entertainment page */
"place-name-1": "Fanateer Corniche",
"place-description-1": "Fanateer Corniche is a wonderful tourist destination offering stunning sea views, making it a perfect spot for relaxation and walking.",
"place-Features-1": "Features: Beautiful sea view, long walkway, kids’ play areas, nearby restaurants and cafés, comfortable seating, shaded areas, seasonal events.",
"place-location-1": "Location on Google Maps",
"place-link-1": "Fanateer Corniche",

"place-name-3": "Dareen Corniche",
"place-description-3": "Located near the Dareen residential district, this spot is calm and family-friendly, known for its simplicity and cleanliness. Ideal for short visits or afternoon picnics.",
"place-Features-3": "Features: Sea-view seating areas, small walkway, family and kid-friendly, grassy areas, peaceful atmosphere.",
"place-location-3": "Location on Google Maps",
"place-link-3": "Dareen Corniche",

"place-name-2": "Palm Corniche",
"place-description-2": "A quiet and elegant corniche lined with palm trees, stretching along the shore. Perfect for fitness lovers, walkers, or those seeking a serene seaside retreat.",
"place-Features-2": "Features: Peaceful vibes, stylish walkway, shaded seating, natural views, ideal for families and relaxation.",
"place-location-2": "Location on Google Maps",
"place-link-2": "Palm Corniche",

"place-name-4": "Al-Tilal Park",
"place-description-4": "Tilal Park in Jubail is known for its pleasant ambiance, refreshing breezes, and lush greenery overlooking a sea beach — making it a perfect everyday destination.",
"place-Features-4": "Features: Sea view, green spaces, walking track, kids’ play areas, cozy seating, great for sunset photos and family gatherings.",
"place-location-4": "Location on Google Maps",
"place-link-4": " Al-Tilal Park ",

"place-name-6": "Water Canal Park",
"place-description-6": "A modern park featuring water canals and small bridges, blended with greenery and water elements to create a unique atmosphere unlike other parks.",
"place-Features-6": "Features: Water canals, charming bridges, relaxing seating, family-friendly, modern design, ideal for walking and unwinding.",
"place-location-6": "Location on Google Maps",
"place-link-6": "Water Canal Park",

"place-name-5": "Al-Deffi Park",
"place-description-5": "One of the most beautiful and well-known parks in Jubail Industrial City, Al-Deffi is rich in greenery, resembling a small forest in the city. Great for families and nature lovers.",
"place-Features-5": "Features: Dense trees, walking paths, barbecue areas, kids’ playgrounds, shaded seating, peaceful atmosphere and scenic nature.",
"place-location-5": "Location on Google Maps",
"place-link-5": "Al-Deffi Park",

"place-name-7": "Najd Park",
"place-description-7": "A spacious park combining green landscapes and entertainment facilities, popular for hosting seasonal events. Very suitable for families and young people.",
"place-Features-7": "Features: Central fountain, comfortable seating, seasonal events, suitable for youth and families, clean grassy areas.",
"place-location-7": "Location on Google Maps",
"place-link-7": "Najd Park",
         
        },

        ar: {
           /*button */
            "home-button": "الرئيسية",
            "mall-button": "مراكز التسوق",
            "hotels-button": "الإقامة",
            "eat-button": " المطاعم",
            "healthcare-button":"الصحة",
            "mosques-button" :"المساجد",
            "entertainment-button":" الترفيه",
            
            /* home page */
            "time":"الوقت في الجبيل",
            "weather":"الطقس في الجبيل",
            "about-webpage-title": " عن هذه الصفحة ",
            "about-page-text-1":"تم إنشاء هذه الصفحة لتكون دليلك الشامل لكل ما يخص مدينة الجبيل، حيث نقدم معلومات دقيقة حول أفضل الأماكن والخدمات المتاحة في المدينة. ستجد هنا تفاصيل عن مراكز التسوق، الفنادق، المطاعم، المرافق الصحية، المساجد، وأماكن الترفيه، مما يساعدك في استكشاف المدينة بسهولة.",
            "about-page-text-2":"هدفنا هو توفير مصدر موثوق يعكس جمال وتطور الجبيل، سواء كنت من سكانها أو زائرًا يبحث عن تجربة مميزة. نحرص على تحديث المعلومات باستمرار لضمان حصولك على أدق التفاصيل وأفضل التوصيات.",
            "main-title": " دليلك الشامل لكل ما يخص مدينة الجبيل الصناعية ",
            "about-title": " عن مدينة الجبيل ",
            "about-text":"تُعدُّ مدينة الجبيل من أقدم المدن الساحلية في المملكة العربية السعودية، حيث يعود تاريخها إلى أكثر من 7,000 عام .كانت تُعرف قديمًا بأنها مركزٌ مهمٌ للصيد والتجارة البحرية، نظرًا لموقعها الاستراتيجي على ساحل الخليج العربي ",
            "about-text1":"في العصور الإسلامية، كانت الجبيل محطة استراحة للتجار والمسافرين بين الموانئ الخليجية، وشهدت تطورًا تدريجيًا حتى العصر الحديث.  في عام 1933، تم اكتشاف بئر ماء قديمة تُعرف باسم عين الجبيل، والتي تُعد من العلامات التاريخية للمدينة",
           
            "map":"استكشف الجبيل على الخريطة",
           
            /* mall pageb */
            "shopping-title": "مراكز التسوق في الجبيل",

            "mall-name-1": "غاليريا مول ",
            "mall-description-1": "يُعتبر غاليريا مول من أبرز المولات في الجبيل ويستقطب الزوار بفضل تنوع المحلات التجارية التي تقدم الماركات العالمية في الملابس والإكسسوارات ومستحضرات التجميل والإلكترونيات, مثل محل درعة H&M,CenterPoint, وغيرهم... . كما يحتوي على العديد من المطاعم التي تقدم المأكولات المحلية والعالمية مثل ماكدونالدز و منؤوشة الريف وستاربكس وغيرها....",
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
           
            "hotel-name-1": " بارك إن راديسون الجبيل الصناعية ",
            "hotel-price-1":"💰💰💰 (متوسط)",
            "hotel-description-1": " يقع بالقرب من حديقة نجد وكورنيش الجبيل، ويوفر غرفًا مريحة مع واي فاي وموقف سيارات مجاني، كما أنه قريب من مراكز التسوق والترفيه." ,
            "hotel-location-1": " الموقع على خرائط جوجل",
            "hotel-link-1":"بارك إن راديسون الجبيل الصناعية ",
            "hotel-more-1" : "للحجز والاستفسار ",

            "hotel-name-2": "  فندق كورال الجبيل " ,
            "hotel-price-2":"💰💰💰 (متوسط)",
            "hotel-description-2": "فندق حديث يقع بجوار البحر، ويوفر تجربة طعام بانورامية بإطلالات على الخليج العربي. الغرف مؤثثة بأناقة مع ديكور عصري",
            "hotel-location-2": " الموقع على خرائط جوجل",
            "hotel-link-2":"فندق كورال الجبيل ",
            "hotel-more-2" : "للحجز والاستفسار ",

            "hotel-name-3": " فندق إنتركونتيننتال الجبيل ",
            "hotel-price-3":"💰💰💰 (متوسط)",
            "hotel-description-3": " فندق حديث يقع بجوار البحر، ويوفر تجربة طعام بانورامية بإطلالات على الخليج العربي. الغرف مؤثثة بأناقة مع ديكور عصري",
            "hotel-location-3": " الموقع على خرائط جوجل",
            "hotel-link-3":" فندق إنتركونتيننتال الجبيل ",
            "hotel-more-3" : "للحجز والاستفسار ",

            "hotel-name-4": " فندق بودل الجبيل ",
            "hotel-price-4":"💰💰💰 (متوسط)",
            "hotel-description-4": "يقع فندق بودل الجبيل على ساحل الخليج العربي في مدينة الجبيل الصناعية، بالقرب من المعالم السياحية الرئيسية مثل الشواطئ والحدائق ومراكز التسوق، ويقع الفندق على بعد 6 كم من منتزه نجد وحديقة الظفير، وعلى بعد 8 كم من منتزه الشروق الترفيهي",
            "hotel-location-4": " الموقع على خرائط جوجل",
            "hotel-link-4":"فندق بودل الجبيل ",
            "hotel-more-4" : "للحجز والاستفسار ",

            "hotel-name-5": " هوليداي إن آند سويتس - الجبيل " ,
            "hotel-price-5":"💰💰💰 (متوسط)",
            "hotel-description-5": " يقع الفندق على بعد 5 دقائق سيرًا على الأقدام من شاطئ طيبة وحوالي ساعة من مطار الملك فهد الدولي، ويوفر غرفًا وأجنحة حديثة تناسب العائلات ورجال الأعمال",
            "hotel-location-5": " الموقع على خرائط جوجل",
            "hotel-link-5":"هوليداي إن آند سويتس - الجبيل ",
            "hotel-more-5" : "للحجز والاستفسار ",

            "hotel-name-6": "فندق درة جلمودة " ,
            "hotel-price-6":"💰💰💰 (متوسط)",
            "hotel-description-6": "يقع مكان إقامة Durrat Jalmouda Hotel في الجبيل، على بعد 5.9 كم من حديقة الدفي، ويتميز بمسبح خارجي ومواقف خاصة للسيارات مجاناً ومركز للياقة البدنية ومطعم",
            "hotel-location-6": " الموقع على خرائط جوجل",
            "hotel-link-6":"فندق درة جلمودة ",
            "hotel-more-6" : "للحجز والاستفسار ",

            "hotel-name-7": " فندق ورويك الجبيل " ,
            "hotel-price-7":"💰💰💰 (متوسط)",
            "hotel-description-7": " يقع Warwick Al Jubail Hotel في الجبيل، وعلى بُعد 4.6 كم من منتزه نجد، وهو مكان إقامة يضم تراس ومواقف خاصة للسيارات مجاناً ومطعماً وبار، كما يوفر هذا الفندق المصنف 4 نجوم مركزاً للأعمال وخدمة الكونسيرج، فيما يوفر مكان الإقامة خدمة الواي فاي مجاناً في جميع أنحائه ومكتباً للاستقبال يعمل على مدار الساعة وخدمات نقل المطار وخدمة الغرف.",
            "hotel-location-7": " الموقع على خرائط جوجل",
            "hotel-link-7":"فندق ورويك الجبيل ",
            "hotel-more-7" : "للحجز والاستفسار ",

            "hotel-name-8": " فندق كران " ,
            "hotel-price-8":"💰💰💰 (متوسط)",
            "hotel-description-8": "  يقع هذا الفندق الراقي بالقرب من الخليج ووسط الشركات والمطاعم، ويبعُد 14 دقيقة سيرًا على الأقدام عن منطقة  كورنيش الفناتير المكسوة بالعشب. ويبعد الفندق 103 كيلومتر عن مطار الملك فهد الدولي.",
            "hotel-location-8": " الموقع على خرائط جوجل",
            "hotel-link-8":"فندق كران ",
            "hotel-more-8" : "للحجز والاستفسار ",
            
            
  
           /* place to eat*/
            "eat-place-title":"أماكن لتناول الطعام",
            
            "eat-place-name-1":"ستيك هاوس",
            "eat-place-price-1":"$$$$ (مرتفع)",
            "eat-place-description-1":"هو مطعم يقدم تجربة مميزة لعشاق اللحوم، ويشتهر بتقديم شرائح الستيك المشوية على الطريقة الأمريكية الأصلية. تأسس المطعم ليجمع بين الجودة العالية، والنكهات الغنية، والخدمة الراقية، مما جعله وجهة مفضلة لمحبي المأكولات المشوية.",
            "eat-place-type-1":"مطعم أمريكي متخصص في تقديم شرائح اللحم المشوية",
            "eat-place-location-1":"الموقع على خرائط جوجل",
            "eat-place-link-1":"ستيك هاوس",

            
            "eat-place-name-2":"الطاية",
            "eat-place-price-2":"$$$$ (مرتفع)",
            "eat-place-description-2":"الطاية هو مطعم سعودي يقدم تشكيلة متنوعة من الأطباق الشرقية والعالمية، ويُعرف بجودة الطعام والخدمة الراقية. يتميز بجو عصري يجمع بين الفخامة والأصالة، ويستهدف العائلات والأفراد الباحثين عن تجربة طعام مميزة.",
            "eat-place-type-2":"مطعم يقدم مأكولات سعودية وعربية وعالمية",
            "eat-place-location-2":"الموقع على خرائط جوجل",
            "eat-place-link-2":"الطاية",

            "eat-place-name-3":"برانزو",
            "eat-place-price-3":"$$$$ (مرتفع)",
            "eat-place-description-3":"رانزو (Pranzo) هو مطعم يقدم مأكولات إيطالية بطريقة عصرية، ويُعرف بجودة المكونات وطابع الأكل الأوروبي الكلاسيكي مع لمسات عصرية. الاسم Pranzo يعني غداء باللغة الإيطالية، وهو يعكس تركيز المطعم على تجربة طعام راقية مستوحاة من المطبخ الإيطالي",
            "eat-place-type-3":"مطعم إيطالي متخصص",
            "eat-place-location-3":"الموقع على خرائط جوجل",
            "eat-place-link-3":"برانزو",

            "eat-place-name-4":"فدركرز",
            "eat-place-price-4":"$$$ (متوسط)",
            "eat-place-description-4":"فدركرز هو مطعم أمريكي شهير متخصص في البرغر، يتميز بتقديم برغر لحم طازج يُحضّر يوميًا داخل المطعم، مع إمكانية تخصيص الطلب حسب رغبة الزبون. تأسس في أمريكا وانتشر لاحقًا في عدة دول منها السعودية، حيث يحظى بشعبية كبيرة.",
            "eat-place-type-4":"مطعم أمريكي",
            "eat-place-location-4":"الموقع على خرائط جوجل",
            "eat-place-link-4":"فدركرز",

            "eat-place-name-5":"مطعم دار الكرم",
            "eat-place-price-5":"$$$$ (مرتفع)",
            "eat-place-description-5":"هو مطعم لبناني شرقي يقدم أطباقاً تقليدية بنكهات أصلية وبأسلوب عصري، يتميز بجلساته الراقية وقائمة طعام غنية تلبي مختلف الأذواق.",
            "eat-place-type-5":"مطعم لبناني راقٍ",
            "eat-place-location-5":"الموقع على خرائط جوجل",
            "eat-place-link-5":"مطعم دار الكرم",

            "eat-place-name-6":"جريللو",
            "eat-place-price-6":"$$$ (متوسط)",
            "eat-place-description-6":"مطعم مشوي جريللو – Grillo Fanateer هو أحد أبرز مطاعم المشويات في مدينة الجبيل الصناعية، وتحديدًا في حي الفناتير. تأسس المطعم عام 1995، ويشتهر بتقديم مجموعة متنوعة من الأطباق المشوية والشاورما، بالإضافة إلى أطباق عربية ومصرية ومعجنات لذيذة",
            "eat-place-type-6":"مطعم مشويات وشاورما​",
            "eat-place-location-6":"الموقع على خرائط جوجل",
            "eat-place-link-6":"جريللو",
            
            "eat-place-name-7":"اف آند بي برجر",
            "eat-place-price-7":"$$$ (متوسط)",
            "eat-place-description-7":"مطعم اف آند بي برجر (F&B Burger) هو سلسلة مطاعم سعودية متخصصة في تقديم البرجر باستخدام لحوم طازجة ومتنوعة، مع مجموعة من الصلصات والإضافات المميزة. تأسس المطعم عام 2018 في الأحساء، وتمكن من التوسع ليشمل 8 فروع في المنطقة الشرقية، مع خطط للتوسع في أنحاء المملكة",
            "eat-place-type-7":"مطعم برجر متخصص​",
            "eat-place-location-7":"الموقع على خرائط جوجل",
            "eat-place-link-7":"اف آند بي برجر",

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
            
            /* Health pageb */
            "healthcare-title":" الصحة",
            "healthcare-name-1": "  مستشفى الهيئة الملكية بالجبيل ", 
            "healthcare-type-1": "مستشفى حكومي",
            "healthcare-description-1": "يُدار هذا المستشفى من قبل الهيئة الملكية للجبيل وينبع، ويوفر الخدمات الصحية للمقيمين والعاملين في مدينة الجبيل الصناعية",
            "healthcare-location-1": "الموقع على خرائط جوجل",
            "healthcare-link-1": "مستشفى الهيئة الملكية بالجبيل ",
            "healthcare-more-1":"المزيد",

            "healthcare-name-2": "مستشفى المواساة ", 
            "healthcare-type-": "مستشفى خاص",
            "healthcare-description-2": " جزء من مجموعة مستشفيات المواساة، وهو مستشفى خاص متطور يحتوي على أقسام متعددة مثل الطوارئ، الجراحة، العناية المركزة، النساء والولادة، وعيادات تخصصية مثل الجلدية والعيون والأنف والأذن والحنجرة.",
            "healthcare-location-2": "  الموقع على خرائط جوجل " ,
            "healthcare-link-2": "مستشفى المواساة ",
            "healthcare-more-2":"المزيد",

            "healthcare-name-3": "مستشفى المانع العام ", 
            "healthcare-type-3": "مستشفى خاص",
            "healthcare-description-3": "قدم خدمات طبية متنوعة تشمل العيادات الخارجية، الجراحة، التجميل، الأطفال، الباطنية، الجلدية، وأقسام دعم مثل المختبر والأشعة. يتميّز بخدمة عملاء ممتازة وأجهزة حديثة.",
            "healthcare-location-3": "الموقع على خرائط جوجل ",
            "healthcare-link-3": "مستشفى المانع العام ",
            "healthcare-more-3":"المزيد",

            "healthcare-name-4": " مجمع اللؤلؤ الطبي", 
            "healthcare-type-4": "مستشفى خاص",
            "healthcare-description-4": "مجمع اللؤلؤ الطبي، المعروف أيضًا باسم مستوصف اللؤلؤ، هو منشأة طبية خاصة تقع في قلب مدينة الجبيل الصناعية، حي الفردوس، على طريق النخيل. تأسس المجمع عام 1995 كجزء من مجموعة الوليد للاستثمار، وأصبح منذ ذلك الحين رمزًا للثقة في المنطقة.",
            "healthcare-location-4": "الموقع على خرائط جوجل ",
            "healthcare-link-4": "مجمع اللؤلؤ الطبي",
            "healthcare-more-4":"المزيد",

            "healthcare-name-5": "رام لطب الاسنان", 
            "healthcare-type-5": "مستشفى خاص طب الأسنان",
            "healthcare-description-5": "رام لطب الأسنان (RAM Dental) هي سلسلة عيادات متخصصة في تقديم خدمات طب الأسنان الحديثة في المملكة العربية السعودية. تشتهر بتقديم رعاية طبية عالية الجودة باستخدام أحدث التقنيات والأجهزة الطبية، مع طاقم من الأطباء المتخصصين ذوي الخبرة.",
            "healthcare-location-5": "الموقع على خرائط جوجل",
            "healthcare-link-5": "رام لطب الاسنان",
            "healthcare-more-5":"المزيد",
            
            /* GYM page */
            "gym-title":"أفضل صالات رياضية في الجبيل",

            "gym-name-1": "سناب فتنس",
            "gym-price-1":"💰💰💰 (متوسط)",
            "gym-gender-1":"فرع الحويلات - قسم رجالي",
            "gym-description-1":"يُعد سناب فتنس من سلاسل الأندية الرياضية العالمية التي تقدم خدمات لياقة بدنية عالية الجودة. يقع فرع الجبيل الصناعية في حي الحويلات، ويوفر بيئة رياضية متكاملة تلبي احتياجات الأعضاء على مدار الساعة." ,
            "gym-serveis-1":"معدات حديثة: توفير أجهزة تمارين القلب والقوة، بالإضافة إلى معدات التدريب الوظيفي. برامج تدريبية متنوعة: تقديم حصص جماعية وتدريبات شخصية لتلبية احتياجات الأعضاء المختلفة.",
            "gym-location-1":"الموقع على خرائط جوجل",
            "gym-link-1":"سناب فتنس",
            "gym-more-1":"المزيد",
            
            "gym-name-2": "وقت اللياقة  ",
            "gym-price-2":"💰💰💰 (مرتفع)",
            "gym gender-2" :"جلمودة- قسم رجالي ونسائي" ,
            "gym-description-2":"من أبرز سلاسل المراكز الرياضية في المملكة العربية السعودية، حيث يقدم مرافق رياضية متكاملة تلبي احتياجات مختلف الفئات العمرية والمستويات الرياضية. فروعه في الجبيل الصناعية، الواقعه في حي جلمودة، الفردوس مُجهَّزة بأحدث المعدات وتوفر بيئة مثالية لتحقيق أهداف اللياقة البدنية",
            "gym-serveis-2":"صالات لياقة بدنية مجهزة بالكامل: تحتوي على أحدث الأجهزة الرياضية لتدريبات القوة واللياقة.",
            "gym-location-2":"الموقع على خرائط جوجل",
            "gym-link-2":"وقت اللياقة ",
            "gym-more-2":"المزيد",

            "gym-name-3": " نادي iN2 فتنس",
            "gym-price-3":"💰💰💰 (متوسط)",
            "gym gender-3" :"قسم نسائي" ,
            "gym-description-3":" الرائدة في المملكة العربية السعودية، حيث يقدم مرافق رياضية متكاملة وتجربة لياقة بدنية متميزة. يهدف النادي إلى تلبية احتياجات الأعضاء من خلال تقديم خدمات عالية الجودة ومرافق مجهزة بأحدث التقنيات. يتميز النادي بإطلالة خلابة على البحر",
            "gym-serveis-3":"• مساحات مصممة على مستوى عالمي: لتلبية جميع احتياجات اللياقة البدنية للأعضاء. • أحدث تقنيات أجهزة الكارديو وتمارين القوة: لضمان تجربة تدريبية فعّالة. • استوديوهات مخصصة لتمارين اللياقة البدنية الجماعية: لتوفير بيئة تحفيزية وممتعة.",
            "gym-location-3":"الموقع على خرائط جوجل",
            "gym-link-3":"نادي iN2 فتنس",
            "gym-more-":"المزيد",
            /* entertainment page */
            "place-title":"أماكن ترفيهية  ",
            
            "place-name-1":" كورنيش الفناتير ",
            "place-description-1":"كورنيش الفناتير هو وجهة سياحية رائعة تقدم إطلالات خلابة على البحر، مما يجعله مكانًا مثاليًا للاسترخاء والتنزه.",
            "place-Features-1":"لمميزات: إطلالة بحرية خلابة، ممشى طويل، مناطق ألعاب للأطفال، مطاعم وكافيهات قريبة، جلسات مريحة، مظلات، فعاليات موسمية.",
            "place-location-1":"الموقع على خرائط جوجل",
            "place-link-1":"كورنيش الفناتير ",
            
            "place-name-3":" كورنيش دارين ",
            "place-description-3":"يقع قرب حي دارين السكني، وهو من الأماكن الهادئة ذات الطابع العائلي، ويمتاز ببساطته ونظافته، ويُعد مثاليًا للزيارات القصيرة أو نزهات العصر.",
            "place-Features-3":"المميزات: جلسات تطل على البحر، ممشى صغير، مناسب للعائلات والأطفال، مناطق عشبية، بيئة هادئة.",
            "place-location-3":"الموقع على خرائط جوجل",
            "place-link-3":" كورنيش دارين ",

            "place-name-2":" كورنيش النخيل ",
            "place-description-2":" كورنيش هادئ وراقي، محاط بأشجار النخيل، ويمتد بمحاذاة الشاطئ على مسافة مناسبة لمحبي الرياضة والمشي أو الاسترخاء بجانب البحر.",
            "place-Features-2":" المميزات:أجواء هادئة، ممشى أنيق، جلسات مظللة، مناظر طبيعية، مثالي للعوائل ومحبي المشي والاستجمام.",
            "place-location-2":"الموقع على خرائط جوجل",
            "place-link-2":" كورنيش النخيل ",

            "place-name-4":" منتزه التلال ",
            "place-description-4":" متنزه تلال دارين في الجبيل يمتاز بأجوائه اللطيفة ونسمات هوائه المنعشة  وطبيعته الخلابة المكسوة بالمسطحات الخضراء الواسعة المطلة على شاطئ بحري، مما يجعله مقصدًا يوميًّا مثاليًّا.",
            "place-Features-4":"المميزات:   إطلالة بحرية، مساحات خضراء، ممشى، ألعاب أطفال، جلسات جميلة، مناسب لتصوير الغروب والأجواء العائلية.",
            "place-location-4":"الموقع على خرائط جوجل",
            "place-link-4":"منتزه التلال",

            "place-name-6":" متنزه القناة المائية للترفيه ",
            "place-description-6":" منتزه عصري يتميّز بوجود قنوات مائية وجسور صغيرة، مع مزيج بين المساحات الخضراء والمياه، مما يخلق جوًا مختلفًا عن باقي المنتزهات.",
            "place-Features-6":"المميزات: قنوات مائية، جسور جميلة، جلسات رايقة، بيئة عائلية، تصميم عصري، مكان مثالي للتمشية والاسترخاء",
            "place-location-6":"الموقع على خرائط جوجل",
            "place-link-6":"متنزه القناة المائية للترفيه",

            "place-name-5":"  منتزه الدفي ",
            "place-description-5":" عد من أجمل وأشهر المنتزهات في الجبيل الصناعية، ويتميّز بطبيعته الخضراء الكثيفة وكأنه غابة صغيرة داخل المدينة. مناسب للعائلات ومحبي الطبيعة والهدوء.",
            "place-Features-5":"المميزات: أشجار كثيفة، ممرات مشي، مناطق شواء، ألعاب أطفال، جلسات مظللة، جو هادئ وطبيعة خلابة.",
            "place-location-5":"الموقع على خرائط جوجل",
            "place-link-5":" منتزه الدفي",
            
            "place-name-7":" منتزه نجد ",
            "place-description-7":" منتزه واسع يجمع بين المسطحات الخضراء والمرافق الترفيهية، ويُعرف بإقامة فعالياته الموسمية. مناسب جدًا للعائلات والشباب.",
            "place-Features-7":" المميزات: نافورة مركزية، جلسات مريحة، فعاليات موسمية، مناسب للشباب والعوائل، مسطحات خضراء نظيفة.",
            "place-location-7":"الموقع على خرائط جوجل",
            "place-link-7":"منتزه نجد",
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

// Language buttons

const langButtons = document.querySelectorAll(".lang-button");
langButtons.forEach(button => {
    button.addEventListener("click", function() {
        const newLang = this.dataset.lang;
        changeLanguage(newLang);
    });
});
const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;

toggleButton.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        toggleButton.textContent = "🌞";  // Change button text to sun (light mode)
    } else {
        toggleButton.textContent = "🌙";  // Change button text to moon (dark mode)
    }
});

async function getWeather() {
    try {
        let response = await fetch("https://wttr.in/Jubail?format=%C+%t+%w");
        let weatherText = await response.text();

        // Use regex to split more smartly
        // Example string: "Partly cloudy +32°C ↑5 km/h"
        let match = weatherText.match(/^(.+?)\s+([+-]?\d+°[CF])\s+(.*)$/);
        if (!match) throw new Error("Unexpected weather format");

        let [, condition, temperature, wind] = match;

        document.getElementById("temp").textContent = temperature;
        document.getElementById("desc").textContent = `${condition}, Wind: ${wind}`;

        let weatherIcons = {
            "Clear": "https://cdn-icons-png.flaticon.com/512/869/869869.png",
            "Sunny": "https://cdn-icons-png.flaticon.com/512/869/869869.png",
            "Cloudy": "https://cdn-icons-png.flaticon.com/512/1163/1163624.png",
            "Partly": "https://cdn-icons-png.flaticon.com/512/1163/1163636.png",
            "Rain": "https://cdn-icons-png.flaticon.com/512/1163/1163657.png",
            "Showers": "https://cdn-icons-png.flaticon.com/512/1163/1163657.png",
            "Thunderstorm": "https://cdn-icons-png.flaticon.com/512/1163/1163661.png",
            "Snow": "https://cdn-icons-png.flaticon.com/512/1163/1163673.png",
            "Fog": "https://cdn-icons-png.flaticon.com/512/1163/1163685.png"
        };

        let weatherKey = Object.keys(weatherIcons).find(key => condition.includes(key));
        document.getElementById("icon").src = weatherIcons[weatherKey] || "https://cdn-icons-png.flaticon.com/512/869/869869.png";

    } catch (error) {
        document.getElementById("desc").textContent = "Weather unavailable.";
        document.getElementById("temp").textContent = "--";
        document.getElementById("icon").src = "https://via.placeholder.com/100";
        console.error("Error fetching weather:", error);
    }
}

function updateTime() {
    let now = new Date();
    let timeString = now.toLocaleTimeString("en-US", { hour12: false });
    let dateString = now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

    document.getElementById("jubail-time").textContent = timeString;
    document.getElementById("jubail-date").textContent = dateString;
}

getWeather();
setInterval(updateTime, 1000);
