import { Tour, Guide, Review, Booking } from '../types';

export const INITIAL_GUIDES: Guide[] = [
  {
    id: 'g-devendra-rawat',
    name: 'Devendra Singh Rawat',
    location: 'Rishikesh & Sankri',
    state: 'Uttarakhand',
    languages: ['Hindi (Native)', 'Garhwali (Native)', 'English (Fluent)'],
    bio: 'Born in Mori village near the Tons River. Advanced Mountaineering Course (AMC) graduate from Nehru Institute of Mountaineering (NIM) Uttarkashi with Grade A. Led over 180 successful summits of Kedarkantha, Har Ki Dun, and Roopkund.',
    specialties: ['Snow Craft & Winter Treks', 'High Altitude Acclimatization', 'Garhwali Mountain Folklore'],
    verifiedSince: '2019',
    badgeTier: 'NIM Mountaineering Master',
    rating: 4.99,
    reviewCount: 382,
    toursLedCount: 410,
    responseTime: '< 10 mins',
    governmentIdVerified: true,
    phoneVerified: true,
    licenseNumber: 'NIM-AMC-2016-0428',
    certifications: ['NIM Uttarkashi Advanced Mountaineering', 'Wilderness First Responder (WFR) - NOLS', 'IMF Certified Expedition Leader'],
    avatarInitials: 'DR',
    avatarColor: 'from-amber-600 via-amber-700 to-stone-900',
    accentQuote: 'The Himalayas do not reward ego; they reward patience, respect, and deep breathing.'
  },
  {
    id: 'g-tenzing-sherpa',
    name: 'Tenzing Dorje Sherpa',
    location: 'Manali & Leh',
    state: 'Himachal & Ladakh',
    languages: ['Hindi (Fluent)', 'Ladakhi/Tibetan (Native)', 'English (Fluent)'],
    bio: 'Over 16 years leading high-altitude Himalayan crossings across Hampta Pass, Pin Parvati, and Markha Valley. Veteran guide recognized by Himachal Pradesh Tourism and Indian Mountaineering Foundation.',
    specialties: ['High Pass Crossings', 'Glacial River Forging', 'Ladakhi Buddhist Heritage'],
    verifiedSince: '2018',
    badgeTier: 'IMF Certified Trek Leader',
    rating: 4.98,
    reviewCount: 295,
    toursLedCount: 360,
    responseTime: '< 15 mins',
    governmentIdVerified: true,
    phoneVerified: true,
    licenseNumber: 'HP-TOURISM-GL-891',
    certifications: ['IMF High Altitude Guide Certificate', 'HMI Darjeeling Search & Rescue', 'Mountain Medicine First Aid'],
    avatarInitials: 'TS',
    avatarColor: 'from-blue-700 via-indigo-800 to-slate-950',
    accentQuote: 'Every mountain pass is a gateway into another world and an old state of mind.'
  },
  {
    id: 'g-aman-sharma',
    name: 'Aman Sharma',
    location: 'Old Delhi & Varanasi',
    state: 'Delhi & Uttar Pradesh',
    languages: ['Hindi (Native)', 'Urdu (Fluent)', 'English (Fluent)'],
    bio: 'Cultural historian and culinary anthropologist. Master’s degree in Medieval Indian History from St. Stephen’s College. Specializes in hidden Mughal havelis, century-old spice merchants of Khari Baoli, and spiritual twilight ghat walks in Kashi.',
    specialties: ['Mughal & Chandni Chowk Food Walks', 'Varanasi Ghats & Shaivite Philosophy', 'Urdu Poetry & Dastangoi'],
    verifiedSince: '2020',
    badgeTier: 'Govt. Licensed Regional Guide',
    rating: 4.97,
    reviewCount: 420,
    toursLedCount: 520,
    responseTime: '< 20 mins',
    governmentIdVerified: true,
    phoneVerified: true,
    licenseNumber: 'MOT-RLG-NR-2018-1102',
    certifications: ['Ministry of Tourism Regional Level Guide (RLG)', 'Delhi Heritage Research Fellow'],
    avatarInitials: 'AS',
    avatarColor: 'from-rose-700 via-amber-800 to-stone-900',
    accentQuote: 'Beneath the chaos of Indian alleyways lies a 1,000-year symphony of flavors and faith.'
  },
  {
    id: 'g-kalyan-rathore',
    name: 'Kalyan Singh Rathore',
    location: 'Jaisalmer & Jodhpur',
    state: 'Rajasthan',
    languages: ['Marwari (Native)', 'Hindi (Native)', 'English (Fluent)'],
    bio: 'Born into a Rajput desert family near Khuri. Expert in desert navigation, Rajasthani folk music, camel caravan trails, and architectural restoration of sandstone havelis.',
    specialties: ['Thar Desert Stargazing & Caravans', 'Fortress Architecture', 'Rajasthani Royal Cuisine'],
    verifiedSince: '2021',
    badgeTier: 'Local Heritage Scholar',
    rating: 4.96,
    reviewCount: 215,
    toursLedCount: 280,
    responseTime: '< 30 mins',
    governmentIdVerified: true,
    phoneVerified: true,
    licenseNumber: 'RTDC-JAI-GUIDE-339',
    certifications: ['Rajasthan Tourism Development Corp Certified', 'Desert Ecology Specialist'],
    avatarInitials: 'KR',
    avatarColor: 'from-amber-700 via-yellow-800 to-stone-950',
    accentQuote: 'The golden sands remember the footsteps of royal caravans and warrior ballads.'
  },
  {
    id: 'g-mathew-varghese',
    name: 'Mathew Varghese',
    location: 'Kochi & Munnar',
    state: 'Kerala',
    languages: ['Malayalam (Native)', 'English (Fluent)', 'Tamil (Fluent)'],
    bio: 'Botanist and certified backwaters ecologist. Leads immersive walks through high-altitude Shola rainforests, organic cardamom plantations, and traditional village canoe trails in Alleppey.',
    specialties: ['Western Ghats Endemic Flora', 'Spices & Ayurvedic Cooking', 'Backwater Village Life'],
    verifiedSince: '2019',
    badgeTier: 'Govt. Licensed Regional Guide',
    rating: 4.97,
    reviewCount: 260,
    toursLedCount: 340,
    responseTime: '< 25 mins',
    governmentIdVerified: true,
    phoneVerified: true,
    licenseNumber: 'KTD-SR-2017-551',
    certifications: ['Kerala Tourism Accredited Guide', 'Naturalist Guide - Periyar Wildlife Sanctuary'],
    avatarInitials: 'MV',
    avatarColor: 'from-emerald-700 via-teal-800 to-stone-950',
    accentQuote: 'The monsoon brings life to the spices; the backwaters teach you how to slow down.'
  }
];

export const INITIAL_TOURS: Tour[] = [
  // 1. HIMALAYAN & MOUNTAIN TREKS (Scope: 'trek')
  {
    id: 'tour-kedarkantha-snow-summit',
    title: 'Kedarkantha Winter Snow Summit Trek (12,500 ft)',
    slug: 'kedarkantha-winter-snow-summit-trek',
    scope: 'trek',
    category: 'Himalayan Trek & High Altitude',
    stateOrRegion: 'Uttarakhand',
    baseCity: 'Dehradun / Sankri',
    country: 'India',
    priceINR: 8999,
    originalPriceINR: 11999,
    spotsLeft: 4,
    badgeLabel: '🔥 High Demand • Snow Summit',
    badgeColor: 'amber',
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1000&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&auto=format&fit=crop&q=80'
    ],
    durationText: '5 Days / 4 Nights',
    durationDays: 5,
    maxAltitudeFt: 12500,
    bestSeason: 'Nov – April (Snow Season)',
    groupSizeMax: 14,
    difficulty: 'Moderate',
    languageOptions: ['Hindi', 'English', 'Garhwali'],
    rating: 4.98,
    reviewCount: 342,
    guideId: 'g-devendra-rawat',
    tagline: 'Scale the amphitheater of Himalayan giants with snow crampons and 360-degree summit dawn views.',
    description: 'Kedarkantha is India’s undisputed crown jewel for snow trekking. Starting from the wooden apple village of Sankri inside Govind Pashu Vihar National Park, you ascend through pine forests wrapped in crisp fresh snow to the sacred frozen Juda Ka Talab lake. Push for the 12,500 ft summit under starlight to witness sunrise striking Swargarohini, Bandarpoonch, and Black Peak.',
    highlights: [
      'Summit sunrise at 12,500 ft overlooking 13 Himalayan snow-capped peaks',
      'Camping beside the frozen Juda Ka Talab alpine lake surrounded by oak forests',
      'Microspikes and gaiters provided with NIM-certified mountain leaders',
      'Nutritious hot vegetarian camp meals, high-energy mountain soups, and chai'
    ],
    itinerary: [
      { timeOrDay: 'Day 1', title: 'Drive Dehradun to Sankri (6,400 ft)', description: 'Scenic drive along the Yamuna and Tons rivers through Mussoorie and Purola. Acclimatization briefing in Sankri.', altitudeGain: '+4,200 ft' },
      { timeOrDay: 'Day 2', title: 'Trek Sankri to Juda Ka Talab (9,100 ft)', description: 'Trek through pine scented woods with Himalayan langurs. Camp by the enchanted frozen lake.', altitudeGain: '+2,700 ft' },
      { timeOrDay: 'Day 3', title: 'Juda Ka Talab to Kedarkantha Base (11,250 ft)', description: 'Gradual snow ascent opening into expansive meadows. Sunset over Bandarpoonch massif.', altitudeGain: '+2,150 ft' },
      { timeOrDay: 'Day 4', title: 'Summit Push (12,500 ft) & Descent to Hargaon', description: 'Early 3:30 AM alpine departure with headlamps. Summit celebration and snow slide descent to Hargaon.', altitudeGain: '+1,250 ft / -3,600 ft' },
      { timeOrDay: 'Day 5', title: 'Hargaon to Sankri & Return to Dehradun', description: 'Gentle descent through pine terraces, certificates distribution, and evening arrival at Dehradun.', altitudeGain: '-2,500 ft' }
    ],
    included: [
      'All 4 nights accommodation (tents on triple-share + Sankri guesthouse)',
      'All meals on trek (freshly prepared Indian vegetarian, nutritious soups, porridge, dal, roti)',
      'Trek Leader (NIM certified) + local Garhwali guides and cooks',
      'Microspikes, gaiters, safety oxygen cylinders, and pulse oximeter monitoring',
      'Govt. forest entry permits and camping fees'
    ],
    excluded: [
      'Transport from Delhi to Dehradun',
      'Personal trekking poles, down jacket, and backpack offloading'
    ],
    meetingPoint: 'Dehradun Railway Station South Exit (06:30 AM)',
    cancellationPolicy: '100% refund up to 7 days before trek date.',
    availableDates: ['2026-10-10', '2026-10-24', '2026-11-07', '2026-11-21', '2026-12-05', '2026-12-19'],
    timeSlots: ['06:30 AM Batch Departure'],
    addOns: [
      { id: 'add-backpack-mule', name: 'Backpack Offloading by Mule (up to 9kg)', price: 1500, description: 'Carry only your water daypack; our mules transport your main backpack.' },
      { id: 'add-rental-jacket', name: '-10°C Feather Down Jacket & Waterproof Gloves Rental', price: 900, description: 'High-altitude cold weather gear cleaned and disinfected before trek.' }
    ],
    gradientTheme: 'from-blue-950 via-slate-900 to-indigo-950',
    coverAccent: 'border-blue-400',
    tagPills: ['Best Snow Trek', '12,500 ft', 'NIM Certified', 'Sankri Base']
  },
  {
    id: 'tour-hampta-pass-chandratal',
    title: 'Hampta Pass & Chandratal Lake High-Altitude Traverse (14,100 ft)',
    slug: 'hampta-pass-chandratal-traverse-trek',
    scope: 'trek',
    category: 'Himalayan Trek & High Altitude',
    stateOrRegion: 'Himachal Pradesh',
    baseCity: 'Manali',
    country: 'India',
    priceINR: 11499,
    originalPriceINR: 14500,
    spotsLeft: 3,
    badgeLabel: '⚡ Bestseller • High Pass',
    badgeColor: 'cyan',
    imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1200&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=1000&auto=format&fit=crop&q=80'
    ],
    durationText: '5 Days / 4 Nights',
    durationDays: 5,
    maxAltitudeFt: 14100,
    bestSeason: 'June – October',
    groupSizeMax: 12,
    difficulty: 'Challenging',
    languageOptions: ['Hindi', 'English'],
    rating: 4.97,
    reviewCount: 228,
    guideId: 'g-tenzing-sherpa',
    tagline: 'Experience dramatic landscape metamorphosis from lush green Kullu valleys into the moonscape of Spiti.',
    description: 'Few treks anywhere in the world showcase such a mind-bending geological shift. Cross from the misty, pine-rich meadows of Jobra and Jwara over the razor-edge 14,100 ft Hampta Pass into the barren, rain-shadow rock kingdom of Lahaul. The expedition culminates with a drive to the crescent moon turquoise jewel — Chandratal Lake.',
    highlights: [
      'Dramatic shift from lush alpine Kullu forest into the arid Tibetan desert of Spiti',
      'Summit crossing of Hampta Pass at 14,100 ft amidst hanging glaciers',
      'Camping beneath the shooting stars beside the turquoise Chandratal Lake',
      'Glacial river crossing adventures across the freezing Shea Goru stream'
    ],
    itinerary: [
      { timeOrDay: 'Day 1', title: 'Manali to Jobra Drive & Trek to Chika (10,100 ft)', description: 'Drive past 42 hairpin bends to Jobra dam. Gentle trek along Rani Nallah to Chika campsite.' },
      { timeOrDay: 'Day 2', title: 'Chika to Balu Ka Ghera (11,900 ft)', description: 'Walk through birch trees and boulder fields with wild Himalayan yellow flowers.' },
      { timeOrDay: 'Day 3', title: 'Balu Ka Ghera to Shea Goru via Hampta Pass (14,100 ft)', description: 'The grand summit day. Steep rocky climb to the pass followed by panoramic Lahaul view and glacier descent.' },
      { timeOrDay: 'Day 4', title: 'Shea Goru to Chatru & Excursion to Chandratal Lake', description: 'Freezing morning river crossing, descent to Chatru roadhead, and evening jeep safari to Chandratal.' },
      { timeOrDay: 'Day 5', title: 'Chatru to Manali via Atal Tunnel', description: 'Drive through Rohtang/Atal Tunnel back to Manali Mall Road by 4:00 PM.' }
    ],
    included: [
      'All 4 nights alpine camping gear (high-altitude tents, sleeping bags rated -10°C, insulated mats)',
      'IMF certified trek leader + safety ropes, ice axes, and first aid kit',
      'All meals: Morning bed tea, breakfast, packed lunch, evening snacks, hot dinner',
      'Jeep transfer from Chatru to Chandratal Lake and return to Manali'
    ],
    excluded: [
      'Stay in Manali before/after trek',
      'Personal trekking shoes and gaiters'
    ],
    meetingPoint: 'Manali Private Bus Stand / Mall Road Tourist Office (09:00 AM)',
    cancellationPolicy: 'Free cancellation up to 10 days before trek date.',
    availableDates: ['2026-10-05', '2026-10-18', '2026-11-02', '2026-11-15'],
    timeSlots: ['09:00 AM Departure'],
    addOns: [
      { id: 'add-gopro-footage', name: 'Trek Video & 4K Aerial Drone Edit Keepsake', price: 1800, description: 'Professionally edited 3-minute 4K video of your pass crossing and Chandratal views.' }
    ],
    gradientTheme: 'from-cyan-950 via-slate-900 to-stone-950',
    coverAccent: 'border-cyan-400',
    tagPills: ['Dramatic Terrain', '14,100 ft', 'Chandratal Visit', 'Spiti Gateway']
  },
  {
    id: 'tour-valley-of-flowers-unesco',
    title: 'Valley of Flowers & Hemkund Sahib UNESCO Alpine Expedition',
    slug: 'valley-of-flowers-hemkund-sahib-trek',
    scope: 'trek',
    category: 'Himalayan Trek & High Altitude',
    stateOrRegion: 'Uttarakhand',
    baseCity: 'Rishikesh / Govindghat',
    country: 'India',
    priceINR: 10800,
    originalPriceINR: 13500,
    spotsLeft: 6,
    badgeLabel: '✨ UNESCO World Heritage',
    badgeColor: 'emerald',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1000&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&auto=format&fit=crop&q=80'
    ],
    durationText: '6 Days / 5 Nights',
    durationDays: 6,
    maxAltitudeFt: 15200,
    bestSeason: 'July – October',
    groupSizeMax: 14,
    difficulty: 'Moderate',
    languageOptions: ['Hindi', 'English'],
    rating: 4.96,
    reviewCount: 198,
    guideId: 'g-devendra-rawat',
    tagline: 'Walk through 500+ species of wild alpine blooms and climb to the world’s highest Gurudwara at 15,200 ft.',
    description: 'Discovered by Frank Smythe in 1931, the Valley of Flowers is a designated UNESCO World Heritage Site bursting with blue poppies, orchids, and Himalayan bell flowers. Combined with the high-altitude pilgrimage trek to the sacred glacial Hemkund Sahib lake, this trail offers spiritual elevation and botanical wonder in equal measure.',
    highlights: [
      'UNESCO World Heritage Valley with over 500 species of wild Himalayan flora',
      'Challenging ascent to Hemkund Sahib (15,200 ft) and crystal sacred glacial lake',
      'Hot Langar and steaming kadah prasad by the high-altitude Gurudwara fireplace',
      'Stay in clean riverside guest lodges at Ghangaria'
    ],
    itinerary: [
      { timeOrDay: 'Day 1', title: 'Rishikesh to Govindghat via Devprayag', description: 'Drive along Alaknanda river, witnessing the confluence of Bhagirathi and Alaknanda.' },
      { timeOrDay: 'Day 2', title: 'Govindghat to Ghangaria (9,800 ft)', description: 'Scenic 10 km trek alongside roaring Pushpawati river to the base camp village of Ghangaria.' },
      { timeOrDay: 'Day 3', title: 'Ghangaria to Valley of Flowers (11,500 ft) & Return', description: 'Enter the national park. Spend 5 hours wandering through carpeted meadows of Brahma Kamal.' },
      { timeOrDay: 'Day 4', title: 'Ghangaria to Hemkund Sahib (15,200 ft) & Return', description: 'Steep zig-zag stone path climb to the sacred glacial lake surrounded by 7 snow peaks.' },
      { timeOrDay: 'Day 5', title: 'Ghangaria to Govindghat & Drive to Badrinath', description: 'Descent to Govindghat and evening visit to the revered Badrinath shrine and Mana village.' },
      { timeOrDay: 'Day 6', title: 'Badrinath to Rishikesh Farewell', description: 'Scenic drive back to Rishikesh Lakshman Jhula for evening Ganga Aarti.' }
    ],
    included: [
      'All 5 nights clean lodge and guesthouse stays (twin/triple share with hot water)',
      'Nutritious Indian meals (vegetarian, cooked fresh daily)',
      'National Park entry fees and biodiversity permit',
      'NIM certified trek guide with oxygen cylinder and medical kit'
    ],
    excluded: [
      'Mule/Helicopter rides for personal transport if desired',
      'Camera fee if carrying professional movie cameras'
    ],
    meetingPoint: 'Rishikesh ISBT / Tapovan Police Chowki (06:00 AM)',
    cancellationPolicy: 'Free cancellation up to 7 days prior.',
    availableDates: ['2026-10-08', '2026-10-20', '2026-11-04'],
    timeSlots: ['06:00 AM Departure'],
    addOns: [
      { id: 'add-mana-last-village', name: 'Mana Village (Last Village of India) & Saraswati River Excursion', price: 650, description: 'Guided tour of Vyas Gufa, Bheem Pul, and tea at the last tea shop.' }
    ],
    gradientTheme: 'from-emerald-950 via-teal-900 to-stone-900',
    coverAccent: 'border-emerald-400',
    tagPills: ['UNESCO Site', '15,200 ft Peak', 'Botanical Paradise', 'Hemkund Sahib']
  },

  // 2. LOCAL HERITAGE & CULINARY WALKS (Scope: 'local')
  {
    id: 'tour-old-delhi-midnight-food',
    title: 'Old Delhi Chandni Chowk Midnight Food & Mughal Spice Trail',
    slug: 'old-delhi-chandni-chowk-midnight-food-trail',
    scope: 'local',
    category: 'Culinary & Street Food Trail',
    stateOrRegion: 'Delhi NCR',
    baseCity: 'New Delhi',
    country: 'India',
    priceINR: 2199,
    originalPriceINR: 2800,
    spotsLeft: 5,
    badgeLabel: '🍢 7 Generational Food Stops',
    badgeColor: 'amber',
    imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=1000&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1000&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&auto=format&fit=crop&q=80'
    ],
    durationText: '3.5 Hours',
    durationDays: 1,
    bestSeason: 'All Year (Evenings)',
    groupSizeMax: 8,
    difficulty: 'Easy',
    languageOptions: ['Hindi', 'English', 'Urdu'],
    rating: 4.99,
    reviewCount: 468,
    guideId: 'g-aman-sharma',
    tagline: 'Taste 120-year-old secret recipes, melt-in-mouth kebabs, parathas, and Asia’s largest spice market.',
    description: 'Shahjahanabad comes alive when the midday sun sets. Led by cultural historian Aman Sharma, dive into narrow 400-year-old galis that big tour buses can never reach. Savor fragrant slow-cooked Nihari, crisp stuffed parathe in Gali Paranthe Wali, legendary Daulat ki Chaat, authentic Karim’s mutton seekh kebabs, and climb a spice merchant rooftop overlooking Jama Masjid.',
    highlights: [
      '7 curated generational food stops (Kebabs, Parathe, Jalebi, Rabri, Kulfi, Nihari)',
      'Access to a private 300-year-old spice merchant rooftop in Khari Baoli',
      'Stories of Dara Shikoh, Mirza Ghalib, and the decline of the Mughal Empire',
      'Cycle rickshaw passage through narrow candle-lit silversmith bazaars'
    ],
    itinerary: [
      { timeOrDay: '17:30', title: 'Gather at Jama Masjid Gate #1', description: 'Brief introduction to Shahjahanabad architecture and evening street etiquette.' },
      { timeOrDay: '18:15', title: 'Matia Mahal Kebab & Nihari Trail', description: 'Taste legendary wood-fired seekh kebabs and slow-simmered shahi gravies.' },
      { timeOrDay: '19:15', title: 'Gali Paranthe Wali & Khari Baoli Spices', description: 'Watch masters fry layered stuffed flatbreads and smell raw saffron and cardamom.' },
      { timeOrDay: '20:30', title: 'Artisanal Jaleba & Kulfi Falooda Finale', description: 'Conclude with giant saffron jalebis fried in pure desi ghee and cooling pistachio rabri.' }
    ],
    included: [
      'All 7 heritage street food tastings and royal desserts',
      'Mineral water and digestive herbal kahwa tea',
      'Cycle rickshaw transfers between food hubs',
      'Historical narration by Delhi University research historian'
    ],
    excluded: [
      'Personal shopping purchases in spice bazaar'
    ],
    meetingPoint: 'Jama Masjid Metro Station (Gate #2 Exit), Old Delhi',
    cancellationPolicy: 'Full refund up to 24 hours prior to tour.',
    availableDates: ['2026-10-02', '2026-10-03', '2026-10-06', '2026-10-09', '2026-10-14', '2026-10-18'],
    timeSlots: ['17:30 - 21:00', '18:30 - 22:00'],
    addOns: [
      { id: 'add-spice-box', name: 'Curated Khari Baoli Master Spice Tin (12 Whole Spices)', price: 850, description: 'Hand-picked saffron strands, star anise, wild black cardamom, and stone flower.' }
    ],
    gradientTheme: 'from-amber-950 via-stone-900 to-rose-950',
    coverAccent: 'border-amber-400',
    tagPills: ['7 Food Stops', 'Khari Baoli Rooftop', 'Rickshaw Ride', 'Mughal History']
  },
  {
    id: 'tour-varanasi-sunrise-ghats',
    title: 'Varanasi Dawn Boat & Ancient Ghats Spiritual Heritage Walk',
    slug: 'varanasi-dawn-boat-ancient-ghats-walk',
    scope: 'local',
    category: 'Spiritual & Ghats Walk',
    stateOrRegion: 'Uttar Pradesh',
    baseCity: 'Varanasi (Kashi)',
    country: 'India',
    priceINR: 1850,
    originalPriceINR: 2400,
    spotsLeft: 4,
    badgeLabel: '🪔 Sunrise Aarti & Assi Boat',
    badgeColor: 'rose',
    imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1561359313-0639aad49ca6?w=1000&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1000&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1000&auto=format&fit=crop&q=80'
    ],
    durationText: '3 Hours',
    durationDays: 1,
    bestSeason: 'Oct – March',
    groupSizeMax: 10,
    difficulty: 'Easy',
    languageOptions: ['Hindi', 'English'],
    rating: 4.98,
    reviewCount: 310,
    guideId: 'g-aman-sharma',
    tagline: 'Float past 84 ghats at first light as temple bells ring and chant reverberates over Mother Ganga.',
    description: 'Experience the oldest living city in the world at its most transcendent hour. Board a private wooden hand-rowed boat at Assi Ghat as the morning mist lifts off the sacred Ganges. Observe devotional Vedic rites, riverside wrestling akharas, cremations at Manikarnika Ghat with philosophical dignity, and conclude with warm Malaiyo froth and Banarasi kachori.',
    highlights: [
      'Private sunrise wooden boat ride gliding past Dashashwamedh and Manikarnika',
      'Insightful commentary on Moksha, Aghori philosophy, and Kabir’s poetry',
      'Walk through labyrinthine Kashikhand galis to hidden sun temples',
      'Tasting of iconic Banarasi winter sweet Malaiyo and freshly fried chana kachori'
    ],
    itinerary: [
      { timeOrDay: '05:30 AM', title: 'Assi Ghat Subah-e-Banaras Rendezvous', description: 'Witness dawn Surya Namaskar and live classical shehnai on the marble pavilion.' },
      { timeOrDay: '06:15 AM', title: 'Rowing on the Holy Ganges', description: 'Glide along 3 miles of stepped stone palaces bathed in pink morning sunlight.' },
      { timeOrDay: '07:30 AM', title: 'Manikarnika to Kashi Vishwanath Alleys', description: 'Respectful walk through the eternal flame ghat and narrow spice lanes.' },
      { timeOrDay: '08:15 AM', title: 'Traditional Breakfast & Banarasi Chai', description: 'Clay kulhad tea, crisp heeng kachori, and seasonal saffron foam sweet.' }
    ],
    included: [
      'Private hand-rowed wooden boat rental',
      'Licensed spiritual historian guide',
      'Traditional heritage Banarasi breakfast and kulhad chai',
      'Floating flower diya offering on the Ganges'
    ],
    excluded: [
      'Kashi Vishwanath VIP Darshan ticket'
    ],
    meetingPoint: 'Assi Ghat Staircase, beside Ganga Seva Nidhi flag, Varanasi',
    cancellationPolicy: 'Free cancellation up to 24 hours prior.',
    availableDates: ['2026-10-04', '2026-10-07', '2026-10-11', '2026-10-15', '2026-10-22'],
    timeSlots: ['05:30 AM - 08:30 AM'],
    addOns: [
      { id: 'add-evening-aarti-boat', name: 'Add Reserved Evening Dashashwamedh Maha Aarti Boat Seat', price: 950, description: 'Guaranteed front-row boat seat for the 7:00 PM grand fire ritual.' }
    ],
    gradientTheme: 'from-orange-950 via-amber-900 to-stone-900',
    coverAccent: 'border-orange-400',
    tagPills: ['Sunrise Boat', '84 Ghats', 'Banarasi Breakfast', 'Spiritual Walk']
  },

  // 3. NATIONAL CIRCUITS & MULTI-DAY EXPEDITIONS (Scope: 'national')
  {
    id: 'tour-rajasthan-thar-haveli-safari',
    title: 'Rajasthan Royal Havelis, Thar Desert Dunes & Camel Caravan (5 Days)',
    slug: 'rajasthan-royal-havelis-thar-desert-safari',
    scope: 'national',
    category: 'Royal Heritage & Havelis',
    stateOrRegion: 'Rajasthan',
    baseCity: 'Jodhpur & Jaisalmer',
    country: 'India',
    priceINR: 19500,
    originalPriceINR: 24500,
    spotsLeft: 2,
    badgeLabel: '👑 Royal Desert Glamping',
    badgeColor: 'amber',
    imageUrl: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1609137144822-3860d5b78ff3?w=1000&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1000&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1000&auto=format&fit=crop&q=80'
    ],
    durationText: '5 Days / 4 Nights',
    durationDays: 5,
    bestSeason: 'Oct – March',
    groupSizeMax: 10,
    difficulty: 'Easy',
    languageOptions: ['Hindi', 'English', 'Marwari'],
    rating: 4.97,
    reviewCount: 174,
    guideId: 'g-kalyan-rathore',
    tagline: 'Live like royalty inside golden sandstone forts, sleep beneath Thar desert stars, and hear warrior folk ballads.',
    description: 'An evocative voyage through western Rajasthan. Begin in Jodhpur’s cobalt blue city beneath the towering Mehrangarh Fort. Journey westward across the arid scrubland to Jaisalmer, the Golden City. Ride camels into deep uncommercialized Sam sand dunes, sleep in luxury Swiss desert camps, and dine on authentic Laal Maas and Dal Baati Churma cooked over wood fires.',
    highlights: [
      'Private sunset camel caravan trek into non-touristy pristine dunes',
      'Overnight glamping in luxury Royal Swiss tents with folk Kalbelia dance by bonfire',
      'Exclusive architectural access to privately owned 18th-century Patwon ki Haveli',
      'Gourmet royal dining: authentic wood-fired Dal Baati Churma and Ker Sangri'
    ],
    itinerary: [
      { timeOrDay: 'Day 1', title: 'Arrival Jodhpur: Mehrangarh & Blue Brahmin Alleys', description: 'Curated walk through the blue houses of Navchokiya and the imperial ramparts.' },
      { timeOrDay: 'Day 2', title: 'Jodhpur to Golden City Jaisalmer', description: 'Scenic drive across the Thar desert; visit Osian camel trading post.' },
      { timeOrDay: 'Day 3', title: 'Living Golden Fort & Carved Havelis', description: 'Explore the only living fort in India where 3,000 residents still reside inside medieval bastions.' },
      { timeOrDay: 'Day 4', title: 'Thar Desert Safari & Bonfire Stargazing Camp', description: 'Deep desert camel safari, golden hour sunset, live Manganiyar musical recital, luxury tent stay.' },
      { timeOrDay: 'Day 5', title: 'Kuldhara Ghost Village & Jodhpur Drop-off', description: 'Explore the cursed Paliwal Brahmin ruins of Kuldhara and return to Jodhpur Airport/Station.' }
    ],
    included: [
      '4 nights accommodation (2 nights boutique heritage haveli + 2 nights desert glamping)',
      'Daily royal Rajasthani breakfasts and traditional dinners',
      'Dedicated AC Tempo Traveller transfers throughout the 5 days',
      'Camel safari, desert folk performances, and Mehrangarh VIP entrance fees'
    ],
    excluded: [
      'Flights to/from Jodhpur',
      'Alcoholic beverages'
    ],
    meetingPoint: 'Jodhpur Airport (JDH) or Jodhpur Junction Railway Station (10:00 AM)',
    cancellationPolicy: 'Free cancellation up to 14 days prior.',
    availableDates: ['2026-10-15', '2026-10-29', '2026-11-12', '2026-11-26', '2026-12-10'],
    timeSlots: ['10:00 AM Departure'],
    addOns: [
      { id: 'add-thar-jeep-dune-bashing', name: '4x4 Thar Dune Bashing & Sandboarding Adventure', price: 1600, description: 'Adrenaline open-top 4x4 dune bashing across rolling crests.' }
    ],
    gradientTheme: 'from-amber-950 via-yellow-950 to-stone-950',
    coverAccent: 'border-yellow-400',
    tagPills: ['Royal Rajasthan', 'Desert Camp', 'Camel Safari', 'Mehrangarh Fort']
  },
  {
    id: 'tour-kerala-backwaters-munnar',
    title: 'Kerala Backwaters Houseboat & Munnar Tea Mist Traverse (5 Days)',
    slug: 'kerala-backwaters-houseboat-munnar-traverse',
    scope: 'national',
    category: 'Western Ghats & Rainforest',
    stateOrRegion: 'Kerala',
    baseCity: 'Kochi / Alleppey / Munnar',
    country: 'India',
    priceINR: 18900,
    originalPriceINR: 23000,
    spotsLeft: 3,
    badgeLabel: '🌿 Private Luxury Houseboat',
    badgeColor: 'emerald',
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1000&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1000&auto=format&fit=crop&q=80'
    ],
    durationText: '5 Days / 4 Nights',
    durationDays: 5,
    bestSeason: 'Sept – April',
    groupSizeMax: 8,
    difficulty: 'Easy',
    languageOptions: ['English', 'Hindi', 'Malayalam'],
    rating: 4.98,
    reviewCount: 204,
    guideId: 'g-mathew-varghese',
    tagline: 'Cruise palm-fringed lagoons on a private thatched kettuvallam and walk mist-shrouded organic tea estates.',
    description: 'Immerse in God’s Own Country. Drift along tranquil Vembanad Lake on an authentic wooden houseboat staffed with your private chef cooking Karimeen Pollichathu. Head up into the Western Ghats to Munnar, walking through colonial tea estates, waterfalls, and spice gardens where wild pepper, cardamom, and cinnamon scent the mountain breeze.',
    highlights: [
      'Overnight cruise on a traditional deluxe air-conditioned wooden houseboat',
      'Private onboard chef preparing fresh Malabar fish curry and tapioca feast',
      'Trek through 6,000 ft high-altitude organic tea trails in Munnar',
      'Guided visit to an indigenous cardamom, vanilla, and clove plantation'
    ],
    itinerary: [
      { timeOrDay: 'Day 1', title: 'Fort Kochi Heritage & Chinese Fishing Nets', description: 'Explore Portuguese churches, Jewish synagogue, and evening Kathakali classical dance.' },
      { timeOrDay: 'Day 2', title: 'Kochi to Alleppey Houseboat Boarding', description: 'Board your private thatched kettuvallam at noon; cruise canal villages and paddy fields below sea level.' },
      { timeOrDay: 'Day 3', title: 'Alleppey to Munnar Tea Country (5,200 ft)', description: 'Ascend the misty Western Ghats with stops at Cheeyappara and Valara waterfalls.' },
      { timeOrDay: 'Day 4', title: 'Munnar Tea Plantation Walk & Eravikulam Nilgiri Tahr', description: 'Hike among tea plantations and spot the endangered Nilgiri Tahr mountain goat in the national park.' },
      { timeOrDay: 'Day 5', title: 'Spice Garden Walk & Cochin Return', description: 'Ayurvedic spice tasting walk and drop-off at Cochin International Airport (COK).' }
    ],
    included: [
      '1 night private deluxe AC Houseboat (full board) + 3 nights boutique plantation resorts',
      'All meals on houseboat + daily southern farmhouse breakfasts',
      'Private AC vehicle for all transfers and sightseeing',
      'Accredited Kerala Tourism naturalist guide commentary'
    ],
    excluded: [
      'Flights to/from Kochi',
      'Ayurvedic massage treatments'
    ],
    meetingPoint: 'Cochin International Airport (COK) Arrivals Hall (11:00 AM)',
    cancellationPolicy: 'Free cancellation up to 14 days prior.',
    availableDates: ['2026-10-12', '2026-10-26', '2026-11-09', '2026-11-23', '2026-12-07'],
    timeSlots: ['11:00 AM Departure'],
    addOns: [
      { id: 'add-ayurvedic-massage', name: 'Traditional 90-min Full-Body Abhyanga Ayurvedic Rejuvenation', price: 2200, description: 'Administered by licensed practitioners with medicated warm herbal oils.' }
    ],
    gradientTheme: 'from-emerald-950 via-teal-950 to-stone-950',
    coverAccent: 'border-emerald-400',
    tagPills: ['Private Houseboat', 'Munnar Tea Trails', 'Fresh Catch Meals', 'Nilgiri Tahr']
  },
  {
    id: 'tour-ladakh-pangong-khardungla',
    title: 'Ladakh High Passes, Nubra Valley & Pangong Tso Lake (6 Days)',
    slug: 'ladakh-high-passes-nubra-pangong-tso',
    scope: 'national',
    category: 'Himalayan Trek & High Altitude',
    stateOrRegion: 'Ladakh (UT)',
    baseCity: 'Leh',
    country: 'India',
    priceINR: 23999,
    originalPriceINR: 28500,
    spotsLeft: 4,
    badgeLabel: '🏍️ 17,982 ft Khardung La Pass',
    badgeColor: 'cyan',
    imageUrl: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=1200&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1000&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1000&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&auto=format&fit=crop&q=80'
    ],
    durationText: '6 Days / 5 Nights',
    durationDays: 6,
    maxAltitudeFt: 17982,
    bestSeason: 'May – October',
    groupSizeMax: 12,
    difficulty: 'Moderate',
    languageOptions: ['Hindi', 'English', 'Ladakhi'],
    rating: 4.99,
    reviewCount: 189,
    guideId: 'g-tenzing-sherpa',
    tagline: 'Ride through the highest motorable passes on Earth to camp beside the cobalt-blue waters of Pangong Tso.',
    description: 'An iconic Himalayan odyssey across Ladakh. Acclimatize in ancient Leh amidst cliffside Buddhist monasteries. Ascend the world-famous Khardung La pass at 17,982 ft into the sand dunes of Nubra Valley, riding double-humped Bactrian camels. Cross Chang La to gaze upon the shifting blue colors of 134km-long Pangong Tso.',
    highlights: [
      'Drive across world-renowned Khardung La (17,982 ft) and Chang La passes',
      'Overnight luxury wooden cottage camp directly overlooking Pangong Tso',
      'Bactrian double-humped camel safari across high-altitude Hunder white sand dunes',
      'Visit Thiksey and Diskit monasteries with 106-foot Maitreya Buddha statue'
    ],
    itinerary: [
      { timeOrDay: 'Day 1', title: 'Arrival Leh & Mandatory Acclimatization', description: 'Rest day at 11,500 ft with light evening walk to Shanti Stupa.' },
      { timeOrDay: 'Day 2', title: 'Leh to Nubra Valley via Khardung La (17,982 ft)', description: 'Ascend the snow pass and descend into Nubra. Evening camel ride at Hunder sand dunes.' },
      { timeOrDay: 'Day 3', title: 'Diskit Monastery & Drive to Pangong Tso via Shyok', description: 'Scenic drive along roaring Shyok river to the breathtaking high-altitude salt lake.' },
      { timeOrDay: 'Day 4', title: 'Pangong Sunrise & Return to Leh via Chang La (17,590 ft)', description: 'Magical golden sunrise over Tibet peaks; stop at Hemis monastery on return.' },
      { timeOrDay: 'Day 5', title: 'Sangam (Indus & Zanskar) & Magnetic Hill', description: 'Witness confluence of emerald Zanskar and blue Indus, visit Gurudwara Pathar Sahib.' },
      { timeOrDay: 'Day 6', title: 'Leh Airport Departure with Lifetime Memories', description: 'Transfer to Kushok Bakula Rimpochee Airport for onward flight.' }
    ],
    included: [
      '5 nights premium accommodation (Leh boutique hotel + Nubra Swiss tents + Pangong lake cottages)',
      'All daily buffet breakfasts and dinners',
      'Private 4x4 Scorpio / Innova vehicle with oxygen cylinder fitted',
      'Inner Line Permits and Ladakh Wildlife entry fees'
    ],
    excluded: [
      'Flights to/from Leh',
      'Camel ride fee (₹300 direct pay)'
    ],
    meetingPoint: 'Leh Kushok Bakula Rimpochee Airport (IXL) Arrivals',
    cancellationPolicy: 'Free cancellation up to 14 days prior.',
    availableDates: ['2026-10-06', '2026-10-16', '2026-10-26', '2026-11-05'],
    timeSlots: ['09:00 AM Departure'],
    addOns: [
      { id: 'add-astronomy-session', name: 'Stargazing Astro-Telescope Session at Pangong Tso', price: 1200, description: 'Explore Saturn rings and Milky Way galactic core with our 8-inch Dobsonian telescope.' }
    ],
    gradientTheme: 'from-blue-950 via-slate-900 to-stone-950',
    coverAccent: 'border-blue-400',
    tagPills: ['17,982 ft Pass', 'Pangong Tso', 'Nubra Dunes', 'Bactrian Camels']
  },
  {
    id: 'tour-meghalaya-living-roots-dawki',
    title: 'Meghalaya Living Root Bridges, Cherrapunji Caves & Dawki River (5 Days)',
    slug: 'meghalaya-living-root-bridges-dawki-river',
    scope: 'national',
    category: 'Western Ghats & Rainforest',
    stateOrRegion: 'Meghalaya',
    baseCity: 'Guwahati / Shillong',
    country: 'India',
    priceINR: 17500,
    originalPriceINR: 21500,
    spotsLeft: 5,
    badgeLabel: '🌿 Living Root Bridges & Dawki',
    badgeColor: 'emerald',
    imageUrl: 'https://images.unsplash.com/photo-1626014303757-6466336338b5?w=1200&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1626014303757-6466336338b5?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=80'
    ],
    durationText: '5 Days / 4 Nights',
    durationDays: 5,
    bestSeason: 'Oct – May',
    groupSizeMax: 10,
    difficulty: 'Moderate',
    languageOptions: ['English', 'Hindi', 'Khasi'],
    rating: 4.97,
    reviewCount: 165,
    guideId: 'g-devendra-rawat',
    tagline: 'Hike 3,500 stone steps into bio-engineered Ficus root bridges and boat on the crystal glass waters of Dawki.',
    description: 'Explore the Abode of Clouds in Northeast India. Descend into the lush jungle valley of Nongriat to stand on the world-famous centuries-old Double Decker Living Root Bridge. Swim in natural azure plunge pools beneath Nohkalikai Falls and glide across the crystal glass river of Dawki where boats appear to levitate on water.',
    highlights: [
      'Trek to the ancient 200-year-old Double Decker Living Root Bridge in Nongriat',
      'Country boat ride on the crystal-clear glass waters of Umngot River in Dawki',
      'Explore the limestone labyrinth of Mawsmai Cave and Seven Sisters Falls',
      'Experience matrilineal Khasi tribal culture and organic local farm food'
    ],
    itinerary: [
      { timeOrDay: 'Day 1', title: 'Guwahati to Shillong via Umiam Lake', description: 'Scenic drive with stop at Umiam Lake and Police Bazar cafe evening.' },
      { timeOrDay: 'Day 2', title: 'Shillong to Cherrapunji (Sohra)', description: 'Visit Elephant Falls, Mawkdok Dympep Valley zipline, and Wei Sawdong 3-tier falls.' },
      { timeOrDay: 'Day 3', title: 'Nongriat Double Decker Root Bridge Trek', description: 'Descend 3,500 steps, cross suspension bridges, swim in natural Rainbow Falls pools.' },
      { timeOrDay: 'Day 4', title: 'Mawlynnong Cleanest Village & Dawki Glass River', description: 'Walk through Asia’s cleanest village and boat on the transparent Indo-Bangladesh border river.' },
      { timeOrDay: 'Day 5', title: 'Dawki to Guwahati Airport Drop-off', description: 'Return drive through rolling pine hills with stop at Kamakhya Temple.' }
    ],
    included: [
      '4 nights boutique accommodation (Shillong heritage hotel + Cherrapunji cliff resort + Dawki riverside camp)',
      'Daily breakfast and traditional tribal Khasi dinners',
      'Private SUV transport throughout the tour',
      'Dawki boating fees and local Khasi guide trek companion'
    ],
    excluded: [
      'Flights/trains to Guwahati',
      'Personal adventure ziplining costs'
    ],
    meetingPoint: 'Guwahati Airport (GAU) or Guwahati Railway Station (09:30 AM)',
    cancellationPolicy: 'Free cancellation up to 10 days prior.',
    availableDates: ['2026-10-11', '2026-10-25', '2026-11-08', '2026-11-22'],
    timeSlots: ['09:30 AM Departure'],
    addOns: [
      { id: 'add-caving-adventure', name: 'Arwah Cave Prehistoric Fossil Spelunking', price: 750, description: 'Explore hidden chambers with million-year-old marine crustacean fossils.' }
    ],
    gradientTheme: 'from-emerald-950 via-teal-950 to-stone-950',
    coverAccent: 'border-emerald-400',
    tagPills: ['Living Root Bridges', 'Glass River Dawki', 'Nohkalikai Falls', 'Cleanest Village']
  },

  // 4. INTERNATIONAL FROM INDIA (Scope: 'international')
  {
    id: 'tour-nepal-annapurna-base-camp',
    title: 'Nepal Annapurna Sanctuary & Base Camp Trek (13,550 ft)',
    slug: 'nepal-annapurna-base-camp-sanctuary-trek',
    scope: 'international',
    category: 'Himalayan Trek & High Altitude',
    stateOrRegion: 'Gandaki Province, Nepal',
    baseCity: 'Pokhara (Connections from India)',
    country: 'Nepal',
    priceINR: 34900,
    originalPriceINR: 42000,
    spotsLeft: 5,
    badgeLabel: '🏔️ 13,550 ft Sanctuary',
    badgeColor: 'indigo',
    imageUrl: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=1200&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1000&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&auto=format&fit=crop&q=80'
    ],
    durationText: '8 Days / 7 Nights',
    durationDays: 8,
    maxAltitudeFt: 13550,
    bestSeason: 'Oct – Dec & March – May',
    groupSizeMax: 10,
    difficulty: 'Challenging',
    languageOptions: ['English', 'Hindi', 'Nepali'],
    rating: 4.99,
    reviewCount: 142,
    guideId: 'g-tenzing-sherpa',
    tagline: 'Stand inside the colossal 360-degree mountain amphitheater surrounded by Annapurna I, Machapuchare & Hiunchuli.',
    description: 'Walk into the sacred sanctum of the Himalayas. Seamlessly organized from India, this classic journey ascends through Gurung rhododendron villages and bamboo groves into the heart of the Annapurna Sanctuary. Stand in awe as golden dawn paints the south face of 8,091-meter Annapurna I and the fishtail peak of Machapuchare.',
    highlights: [
      'Stand inside the 360-degree Annapurna Sanctuary amphitheater at 13,550 ft',
      'Unobstructed dawn views of Annapurna I (8,091m) and Machapuchare (6,993m)',
      'Natural volcanic hot spring soak in Jhinu Danda beside Modi Khola',
      'All TIMS permits and Annapurna Conservation Area Project (ACAP) permits arranged'
    ],
    itinerary: [
      { timeOrDay: 'Day 1', title: 'Pokhara Rendezvous & Drive to Siwai; Trek to Chhomrong', description: 'Meet guide, drive past terraced fields, and trek up the Gurung village stone stairs.' },
      { timeOrDay: 'Day 2', title: 'Chhomrong to Dovan (8,200 ft)', description: 'Descend to Chhomrong Khola, ascend through bamboo, oak, and rhododendron forests.' },
      { timeOrDay: 'Day 3', title: 'Dovan to Deurali (10,500 ft)', description: 'Trek along Modi Khola gorge beneath the Hinko cave.' },
      { timeOrDay: 'Day 4', title: 'Deurali to Machapuchare Base Camp to ABC (13,550 ft)', description: 'Enter the sanctuary gates. Afternoon arrival at Annapurna Base Camp surrounded by 10 giants.' },
      { timeOrDay: 'Day 5', title: 'Sunrise over Annapurna I & Trek Down to Bamboo', description: 'Breathtaking 360-degree golden hour panorama; descent to Bamboo.' },
      { timeOrDay: 'Day 6', title: 'Bamboo to Jhinu Danda Hot Springs', description: 'Relax tired muscles in natural thermal riverside hot springs.' },
      { timeOrDay: 'Day 7', title: 'Jhinu to Siwai & Drive to Lakeside Pokhara', description: 'Final walk, private jeep back to Pokhara, celebratory dinner by Fewa Lake.' },
      { timeOrDay: 'Day 8', title: 'Pokhara Farewell & Connections to India', description: 'Transfers arranged for flights to Kathmandu or overland to Gorakhpur border.' }
    ],
    included: [
      '7 nights mountain teahouse accommodation (twin share)',
      'All 3 daily meals on trek (dal bhat power, momos, porridge, apple pie)',
      'ACAP & TIMS national park permits + official Nepal tourist taxes',
      'Sherpa guide + dedicated porters (1 porter for every 2 trekkers)'
    ],
    excluded: [
      'Travel insurance covering high-altitude helicopter rescue',
      'Hot showers and device charging in high-altitude teahouses'
    ],
    meetingPoint: 'Lakeside Pokhara Tourist Hub or Kathmandu Hotel (08:00 AM)',
    cancellationPolicy: 'Free cancellation up to 21 days prior.',
    availableDates: ['2026-10-14', '2026-10-28', '2026-11-10', '2026-11-24'],
    timeSlots: ['08:00 AM Batch Departure'],
    addOns: [
      { id: 'add-abc-helicopter', name: 'Scenic Helicopter Return from ABC to Pokhara', price: 18500, description: 'Skip the 3-day descent with an exhilarating 20-minute flight over the peaks.' }
    ],
    gradientTheme: 'from-slate-950 via-blue-950 to-indigo-950',
    coverAccent: 'border-blue-400',
    tagPills: ['13,550 ft Sanctuary', 'Porters Included', 'Hot Springs', 'Annapurna I']
  },
  {
    id: 'tour-bhutan-tigers-nest-druk',
    title: 'Bhutan Thunder Dragon Kingdom & Paro Tiger’s Nest Expedition (5 Days)',
    slug: 'bhutan-thunder-dragon-paro-tigers-nest',
    scope: 'international',
    category: 'Royal Heritage & Havelis',
    stateOrRegion: 'Paro & Thimphu',
    baseCity: 'Paro (Direct flights from Delhi/Kolkata)',
    country: 'Bhutan',
    priceINR: 44500,
    originalPriceINR: 52000,
    spotsLeft: 3,
    badgeLabel: '🐉 Bhutan Royal Kingdom',
    badgeColor: 'purple',
    imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1000&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1000&auto=format&fit=crop&q=80'
    ],
    durationText: '5 Days / 4 Nights',
    durationDays: 5,
    maxAltitudeFt: 10200,
    bestSeason: 'Sept – May',
    groupSizeMax: 8,
    difficulty: 'Moderate',
    languageOptions: ['English', 'Hindi', 'Dzongkha'],
    rating: 4.98,
    reviewCount: 94,
    guideId: 'g-tenzing-sherpa',
    tagline: 'Climb through sacred pine mist to the cliff-hanging Paro Taktsang monastery in the land of Gross National Happiness.',
    description: 'Travel into the carbon-negative Kingdom of Bhutan. Experience the living Vajrayana Buddhist culture in the capitals of Thimphu and Punakha. The grand finale is an unforgettable trek climbing 3,000 ft above Paro valley to Tiger’s Nest (Taktsang), clinging to a sheer granite cliff in fragrant juniper smoke.',
    highlights: [
      'Iconic pilgrimage hike to the cliff-hanging Paro Taktsang (Tiger’s Nest)',
      'Cross the massive Dochula Pass (10,200 ft) with 108 chortens and Himalayan views',
      'Explore Punakha Dzong, the palace of great happiness at the confluence of two rivers',
      'All Bhutan Sustainable Development Fee (SDF) and entry permits included'
    ],
    itinerary: [
      { timeOrDay: 'Day 1', title: 'Fly into Paro & Drive to Thimphu', description: 'Scenic landing in valley, visit Buddha Dordenma 169-ft bronze colossus.' },
      { timeOrDay: 'Day 2', title: 'Thimphu to Punakha via Dochula Pass (10,200 ft)', description: 'Views of Bhutanese Himalayan peaks and tour of majestic Punakha Dzong.' },
      { timeOrDay: 'Day 3', title: 'Punakha to Paro Valley', description: 'Walk through fertility temple Chimi Lhakhang and drive back along Pa Chhu river.' },
      { timeOrDay: 'Day 4', title: 'Hike to Tiger’s Nest (Paro Taktsang)', description: 'Ascend through pine forest and prayer flags to the miraculous monastery cave.' },
      { timeOrDay: 'Day 5', title: 'Paro Airport Departure', description: 'Farewell Bhutan with traditional white silk khadar blessing.' }
    ],
    included: [
      '4 nights 3-star standard heritage Bhutanese hotels',
      'All meals (authentic Bhutanese Ema Datshi, red rice, and continental)',
      'Official English-speaking Bhutanese certified guide + private coaster bus',
      'Mandatory Bhutan SDF (Sustainable Development Fee) for Indian citizens'
    ],
    excluded: [
      'Flights to/from Paro (PBH)',
      'Traditional Bhutanese hot stone bath (optional ₹800)'
    ],
    meetingPoint: 'Paro International Airport (PBH) Arrivals Hall',
    cancellationPolicy: 'Free cancellation up to 21 days prior.',
    availableDates: ['2026-10-18', '2026-11-01', '2026-11-15', '2026-12-01'],
    timeSlots: ['10:00 AM Departure'],
    addOns: [
      { id: 'add-hot-stone-bath', name: 'River Stone Herbal Artemisia Bath at Paro Farmhouse', price: 900, description: 'Soak in mineral waters heated by fire-baked river stones with wild mountain herbs.' }
    ],
    gradientTheme: 'from-purple-950 via-slate-900 to-amber-950',
    coverAccent: 'border-purple-400',
    tagPills: ['Tiger’s Nest', 'Carbon Negative', 'Dochula Pass', 'SDF Included']
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-in-1',
    tourId: 'tour-kedarkantha-snow-summit',
    guideId: 'g-devendra-rawat',
    authorName: 'Rohan Deshmukh',
    authorCity: 'Pune, Maharashtra',
    date: 'February 14, 2026',
    overallRating: 5,
    guideKnowledge: 5,
    safety: 5,
    valueForMoney: 5,
    punctuality: 5,
    travelerType: 'College Friends',
    title: 'Summit sunrise at -8°C was the greatest moment of our lives!',
    comment: 'Devendra sir is like a mountain god in Sankri. When our friend felt mild AMS at Juda Ka Talab, Devendra checked his SpO2 every hour, gave warm garlic soup, and paced our climb perfectly. Reaching the Kedarkantha summit at 6:45 AM while the sun hit Swargarohini was pure goosebumps. Food was hot and delicious even in deep snow!',
    verifiedBooking: true,
    helpfulVotes: 64
  },
  {
    id: 'rev-in-2',
    tourId: 'tour-old-delhi-midnight-food',
    guideId: 'g-aman-sharma',
    authorName: 'Sneha & Arjun Kapoor',
    authorCity: 'Bengaluru, Karnataka',
    date: 'January 28, 2026',
    overallRating: 5,
    guideKnowledge: 5,
    safety: 5,
    valueForMoney: 5,
    punctuality: 5,
    travelerType: 'Couple',
    title: 'Aman made us fall in love with Old Delhi all over again',
    comment: 'We have visited Delhi many times, but we never knew these hidden lanes existed. The rooftop view of the spice market at sunset while Aman recited Urdu poetry about Shah Jahan gave us chills. The melt-in-mouth seekh kebabs and hot jalebis fried in pure desi ghee were out of this world. Clean, safe, and deeply informative.',
    verifiedBooking: true,
    helpfulVotes: 48
  },
  {
    id: 'rev-in-3',
    tourId: 'tour-hampta-pass-chandratal',
    guideId: 'g-tenzing-sherpa',
    authorName: 'Ananya Sengupta',
    authorCity: 'Kolkata, West Bengal',
    date: 'September 19, 2026',
    overallRating: 5,
    guideKnowledge: 5,
    safety: 5,
    valueForMoney: 5,
    punctuality: 5,
    travelerType: 'Solo Trekker',
    title: 'First solo Himalayan trek and I felt 100% safe',
    comment: 'Tenzing and his mountain team run this like clockwork. Crossing the freezing Shea Goru river in a human chain was so thrilling! And Chandratal lake under the Milky Way is something photographs can never do justice to. If you are doing your first high-altitude pass, book with Arka Travels without a second thought.',
    verifiedBooking: true,
    helpfulVotes: 51
  },
  {
    id: 'rev-in-4',
    tourId: 'tour-rajasthan-thar-haveli-safari',
    guideId: 'g-kalyan-rathore',
    authorName: 'Vikram & Meera Singhania',
    authorCity: 'Mumbai, Maharashtra',
    date: 'March 04, 2026',
    overallRating: 5,
    guideKnowledge: 5,
    safety: 5,
    valueForMoney: 5,
    punctuality: 5,
    travelerType: 'Family with Kids',
    title: 'Unmatched royal hospitality in Jaisalmer dunes',
    comment: 'Kalyan ji treated our family like royal guests. The folk musicians singing by the bonfire in the deep dunes made my parents tear up with emotion. The desert camp was clean, hot water was provided, and the food was rich and authentic. Truly 5-star experience with an authentic soul.',
    verifiedBooking: true,
    helpfulVotes: 37
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'bk-in-101',
    bookingCode: 'ARKA-KEDAR-8821',
    tourId: 'tour-kedarkantha-snow-summit',
    tourTitle: 'Kedarkantha Winter Snow Summit Trek (12,500 ft)',
    tourScope: 'trek',
    guideId: 'g-devendra-rawat',
    guideName: 'Devendra Singh Rawat',
    date: '2026-11-07',
    timeSlot: '06:30 AM Batch Departure',
    guestsCount: 2,
    guestName: 'Arka Sarkar',
    guestEmail: 'sarkararka8@gmail.com',
    guestPhone: '+91 98302 44910',
    selectedAddOns: [
      { id: 'add-rental-jacket', name: '-10°C Feather Down Jacket & Gloves', price: 900, description: 'Warm alpine gear' }
    ],
    subtotalINR: 19798,
    serviceFeeINR: 990,
    mountainInsuranceINR: 499,
    totalAmountINR: 21287,
    status: 'confirmed',
    paymentMethod: 'upi',
    upiApp: 'gpay',
    createdAt: '2026-09-28T16:30:00Z',
    notes: 'Pure vegetarian meal preference; one trekker requires shoe size UK 9 for microspikes.'
  }
];
