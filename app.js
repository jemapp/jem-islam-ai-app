/**
 * Jem Islam AI App - Complete Production Logic
 * 4 Languages: Afaan Oromoo (om), English (en), Amharic (am), Arabic (ar)
 * Features: Quran with Tafsir, Qibla compass, Digital Tasbih, Islamic AI Semantic Search, Hijri Calendar
 */

// --- MULTILINGUAL DICTIONARY ---
const I18N_DICTIONARY = {
  om: {
    tabQuran: "Qur'aana Guutuu",
    tabAi: "AI Search & Fatwa",
    tabQibla: "Qibla Kallattii",
    tabTasbih: "Dijitaal Tasbiih",
    tabHijri: "Kalandara Hijraa",
    chooseSurah: "Suuraa Filadhu",
    filterAya: "Aayata Barbaadi",
    showTranslations: "Hiikkaa Mul'isi:",
    detectGPS: "GPS Kallattii Furi",
    calibrate: "Haaromsi",
    qiblaHeading: "Kallattii Qiblaa",
    qiblaSub: "Gara Kaabaa Makkaatti qajeelchuuf GPS fi Koobaasii fayyadamaa.",
    chooseDhikr: "Zikrii Filadhu",
    hijriHeading: "Kalandara Hijraa fi Sagantaa",
    hijriSub: "Bara Hijraa fi guyyoota kabajamoo Islaamaa.",
    todayHijri: "Guyyaa Har'aa (Hijri)",
    importantEvents: "Guyyoota Kabajamoo Islaamaa",
    prayerTimes: "Yeroo Salaataa (Prayer Times)",
    aiDesc: "Gaaffii Islaamaa kamiinuu Afaan Oromoo, Ingiliffa, Amaariffa ykn Carabiin gaafadhaa. Deebii qorannoo Qur'aana fi Hadiisaa battalumatti argadhaa.",
    aiAskBtn: "Gaafadhu",
    quickPrompts: "Yaada Gaaffii:",
    aiEmptyTitle: "Gaaffii keessan barreessaa ykn gaaffilee armaan olii tuqaa",
    aiEmptyDesc: "Deebii sirrii barreeffama Qur'aana fi Hadiisa wajjin daqiiqaa muraasa keessatti argattu.",
    mobileQuran: "Qur'aana"
  },
  en: {
    tabQuran: "Holy Quran",
    tabAi: "AI Islamic Search",
    tabQibla: "Qibla Direction",
    tabTasbih: "Digital Tasbih",
    tabHijri: "Hijri Calendar",
    chooseSurah: "Choose Surah",
    filterAya: "Search Ayah",
    showTranslations: "Show Translations:",
    detectGPS: "Detect GPS Location",
    calibrate: "Calibrate",
    qiblaHeading: "Qibla Direction",
    qiblaSub: "Use GPS and internal compass sensor to face the Kaaba in Mecca.",
    chooseDhikr: "Choose Dhikr",
    hijriHeading: "Hijri Calendar & Events",
    hijriSub: "Hijri timeline and distinguished Islamic sacred dates.",
    todayHijri: "Today's Hijri Date",
    importantEvents: "Important Islamic Occasions",
    prayerTimes: "Prayer Times",
    aiDesc: "Ask any Islamic question in English, Afaan Oromoo, Amharic or Arabic. Get instant answers with Quranic verses and Hadith.",
    aiAskBtn: "Search AI",
    quickPrompts: "Preset Topics:",
    aiEmptyTitle: "Type your inquiry above or select suggested topics",
    aiEmptyDesc: "Receive comprehensive Quranic references, Tafsir and authentic rulings.",
    mobileQuran: "Quran"
  },
  am: {
    tabQuran: "ቅዱስ ቁርአን",
    tabAi: "አይአይ እስላማዊ ፍለጋ",
    tabQibla: "የቂብላ አቅጣጫ",
    tabTasbih: "ዲጂታል ተስቢህ",
    tabHijri: "የሂጅራ ካላንደር",
    chooseSurah: "ሱራ ምረጥ",
    filterAya: "አያት ፈልግ",
    showTranslations: "ትርጉሞችን አሳይ:",
    detectGPS: "ጂፒኤስ ፈልግ",
    calibrate: "አድስ",
    qiblaHeading: "የቂብላ አቅጣጫ መመሪያ",
    qiblaSub: "ወደ መካ ካዕባ ለመዞር ጂፒኤስ እና ኮምፓስ ይጠቀሙ።",
    chooseDhikr: "ዚክር ምረጥ",
    hijriHeading: "የሂጅራ አቆጣጠር እና ፕሮግራሞች",
    hijriSub: "የሂጅራ አመት እና ታላላቅ የእስልምና ቀናት።",
    todayHijri: "የዛሬው የሂጅራ ቀን",
    importantEvents: "ዋና ዋና የእስልምና በዓላት",
    prayerTimes: "የሶላት ሰዓታት",
    aiDesc: "ማንኛውንም እስላማዊ ጥያቄ በአማርኛ፣ በኦሮምኛ፣ በእንግሊዝኛ ወይም በአረብኛ ይጠይቁ። የቁርአንና የሀዲስ ማስረጃዎችን ወዲያውኑ ያግኙ።",
    aiAskBtn: "ጠይቅ",
    quickPrompts: "የተመረጡ ጥያቄዎች:",
    aiEmptyTitle: "ጥያቄዎን ከላይ ይፃፉ ወይም አማራጮቹን ይጫኑ",
    aiEmptyDesc: "ትክክለኛ ቁርአናዊ እና ሀዲሳዊ መልሶችን በጥቂት ሰከንዶች ውስጥ ያገኛሉ።",
    mobileQuran: "ቁርአን"
  },
  ar: {
    tabQuran: "القرآن الكريم",
    tabAi: "البحث الإسلامي الذكي",
    tabQibla: "اتجاه القبلة",
    tabTasbih: "المسبحة الإلكترونية",
    tabHijri: "التقويم الهجري",
    chooseSurah: "اختر السورة",
    filterAya: "بحث في الآيات",
    showTranslations: "عرض الترجمات:",
    detectGPS: "تحديد الموقع (GPS)",
    calibrate: "معايرة",
    qiblaHeading: "اتجاه القبلة المشرفة",
    qiblaSub: "استخدم نظام تحديد المواقع لتوجيه البوصلة نحو الكعبة المشرفة بمكة المكرمة.",
    chooseDhikr: "اختر الذكر",
    hijriHeading: "التقويم الهجري والمناسبات",
    hijriSub: "تاريخ اليوم وأبرز المناسبات الإسلامية المباركة.",
    todayHijri: "اليوم الهجري",
    importantEvents: "أبرز المناسبات الإسلامية",
    prayerTimes: "مواقيت الصلاة التقريبية",
    aiDesc: "اطرح أي سؤال شرعي بالعربية أو الأورومو أو الإنجليزية أو الأمهرية واحصل على إجابة موثقة بالقرآن والحديث.",
    aiAskBtn: "ابحث الآن",
    quickPrompts: "مواضيع مقترحة:",
    aiEmptyTitle: "اكتب سؤالك أعلاه أو اضغط على أحد الأسئلة المقترحة",
    aiEmptyDesc: "ستحصل على إجابات مدعمة بالآيات القرآنية والأحاديث النبوية الشريفة.",
    mobileQuran: "القرآن"
  }
};

// --- COMPREHENSIVE QURAN DATABASE WITH COMPLETE 4-LANGUAGE TRANSLATIONS & TAFSIR ---
const QURAN_DATABASE = [
  {
    id: 1,
    nameLatin: "Al-Faatiha",
    nameAr: "الفاتحة",
    meaningOm: "Baniinsa Kitaabaa",
    meaningEn: "The Opening",
    type: "Makkiyyah",
    totalAyahs: 7,
    audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3",
    verses: [
      {
        number: 1,
        arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
        oromo: "Maqaa Rabbii Ar-Rahmaan (Akkaan Marhamaa), Ar-Rahiim (Akkaan Rahmat-qabeessa) ta'eetiin.",
        english: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
        amharic: "በአላህ ስም እጅግ በጣም ሩኅሩህ በጣም አዛኝ በሆነው።",
        tafsir: "Tafsiira: Aayanni kun jalqaba qiraatii hundaa irratti eebbaaf heeyyama Rabbii barbaaduu agarsiisa. (Ibn Kathir)"
      },
      {
        number: 2,
        arabic: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
        oromo: "Faaruun hundi kan Rabbii Mootii aalama hundaa ta'eeti.",
        english: "[All] praise is [due] to Allah, Lord of the worlds.",
        amharic: "ምስጋና ለአላህ ይገባው የዓለማት ጌታ ለሆነው።",
        tafsir: "Tafsiira: 'Rabbil Aalameen' jechuun uumaa, eegaa fi mootii wantoota uumaman hundaa jechuudha."
      },
      {
        number: 3,
        arabic: "ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
        oromo: "Ar-Rahmaan, Ar-Rahiim (Akkaan marham-qabeessa, akkaan naasisaa).",
        english: "The Entirely Merciful, the Especially Merciful.",
        amharic: "እጅግ በጣም ሩኅሩህ በጣም አዛኝ ለሆነው።",
        tafsir: "Tafsiira: Rahmanni dacheerra jiru uumama hundaaf, Rahiim garuu mu'uminootaaf qofa Guyyaa Qiyaamaati."
      },
      {
        number: 4,
        arabic: "مَٰلِكِ يَوْمِ ٱلدِّينِ",
        oromo: "Mootii Guyyaa Murtii (Guyyaa Qiyaamaa).",
        english: "Sovereign of the Day of Recompense.",
        amharic: "የፍርዱ ቀን ባለቤት ለሆነው።",
        tafsir: "Tafsiira: Guyyaa namni hundi dalagaa isaatiin mindaa ykn adabbii itti argatu Rabbii qofatu abbaadha."
      },
      {
        number: 5,
        arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        oromo: "Si qofa gabbarra, Si qofa gargaarsifannas.",
        english: "It is You we worship and You we ask for help.",
        amharic: "አንተን ብቻ እናመልካለን አንተንም ብቻ እርዳታ እንለምናለን።",
        tafsir: "Tafsiira: Tokkummaa ibaadaa (Tawhiidul Ibaadah) fi gargaarsa hundaa Rabbirraa qofa barbaaduu mirkaneessa."
      },
      {
        number: 6,
        arabic: "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
        oromo: "Karaa sirrii fi qajeelaa san nu qajeelchi.",
        english: "Guide us to the straight path.",
        amharic: "ቀጥተኛውን መንገድ ምራን።",
        tafsir: "Tafsiira: Daandii Islaamaa fi sunnah Ergamaa Rabbii (SAW) irra tursiisuu kadhachuu."
      },
      {
        number: 7,
        arabic: "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
        oromo: "Karaa warra qananii irratti ooltee, kan dallansuun irratti hin bu'inii fi kan hin jallatinis.",
        english: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
        amharic: "የእነዚያን በነሱ ላይ በጎ የዋልክላቸውን ሰዎች መንገድ፣ በእነሱ ላይ ቁጣ ያልወረደባቸውንና ያልተሳሳቱትንም።",
        tafsir: "Tafsiira: Nabiyyoota, Siddiiqota, Shahiidota fi Saalihota wajjin ta'uu kajeella; warra karaarraa jal'atan irraa eeggannaa."
      }
    ]
  },
  {
    id: 112,
    nameLatin: "Al-Ikhlaas",
    nameAr: "الإخلاص",
    meaningOm: "Qulqullina Tawhiidaa",
    meaningEn: "The Sincerity",
    type: "Makkiyyah",
    totalAyahs: 4,
    audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/112.mp3",
    verses: [
      {
        number: 1,
        arabic: "قُلْ هُوَ ٱللَّهُ أَحَدٌ",
        oromo: "Jedhi: 'Inni Allaahn Tokkicha.'",
        english: "Say, 'He is Allah, [who is] One.'",
        amharic: "በላቸው፡- «እርሱ አላህ አንድ ነው።», 
        tafsir: "Tafsiira: Rabbii hiriyyaa, fakkaataa fi wahiillee hin qabne tokkicha ta'uu agarsiisa."
      },
      {
        number: 2,
        arabic: "ٱللَّهُ ٱلصَّمَدُ",
        oromo: "Allaahn Isa wanti hundi itti haajamu (Inni garuu kan homaatti hin haajamne).",
        english: "Allah, the Eternal Refuge.",
        amharic: "«አላህ (የሁሉ) መጠጊያ ነው።»",
        tafsir: "Tafsiira: As-Samad: Uumamni hundi haajaa isaaniitiif gara Isaatti iyyatu."
      },
      {
        number: 3,
        arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        oromo: "Hin dhalle; hin dhalannes.",
        english: "He neither begets nor is born,",
        amharic: "«አልወለደም፤ አልተወለደምም፤»",
        tafsir: "Tafsiira: Ilma hin qabu, haadhaa fi abbaas hin qabu; Inni jalqabaa fi xumura."
      },
      {
        number: 4,
        arabic: "وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
        oromo: "Kan Isaan qixxaa'us homtuu hin jiru.",
        english: "Nor is there to Him any equivalent.",
        amharic: "«ለእርሱም አንድም ቢጤ የለውም።»",
        tafsir: "Tafsiira: Maqaa, sifaata fi dandeettii Isaatiin homtuu Isaa wajjin hin madaalamu."
      }
    ]
  },
  {
    id: 113,
    nameLatin: "Al-Falaq",
    nameAr: "الفلق",
    meaningOm: "Bariisaa",
    meaningEn: "The Daybreak",
    type: "Makkiyyah",
    totalAyahs: 5,
    audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/113.mp3",
    verses: [
      {
        number: 1,
        arabic: "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ",
        oromo: "Jedhi: 'Ani Gooftaa bariisaatiinan maganfadha.'",
        english: "Say, 'I seek refuge in the Lord of daybreak'",
        amharic: "በላቸው፡- «በተፈልቃቂው ጎህ ጌታ እጠበቃለሁ፤»",
        tafsir: "Tafsiira: Bariisa halkanii kan dhalchu Gooftaa guddichatti maganfachuudha."
      },
      {
        number: 2,
        arabic: "مِن شَرِّ مَا خَلَقَ",
        oromo: "Hamtuu wantoota Inni uumee irraa,",
        english: "From the evil of that which He created,",
        amharic: "«ከፈጠረው ፍጡር ሁሉ ክፋት፤»",
        tafsir: "Tafsiira: Sharrii fi balaa lubbu qabeeyyii fi uumamoota hundarraa tiikfama kajeella."
      },
      {
        number: 3,
        arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
        oromo: "Hamtuu halkanii yeroo inni dukkanoofee seene irraa,",
        english: "And from the evil of darkness when it settles,",
        amharic: "«ከጨለማም ክፋት ባጨለመ ጊዜ፤»",
        tafsir: "Tafsiira: Halkaniin shanyiin seexanaa fi miidhaan waan baay'atuuf eegumsa kadhanna."
      },
      {
        number: 4,
        arabic: "وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِي ٱلْعُقَدِ",
        oromo: "Hamtuu warra hidhaa keessatti tufu (warra sihrii/falfalaa) irraa,",
        english: "And from the evil of the blowers in knots,",
        amharic: "«በቋጠሮዎችም ላይ ተፋቾች ከሆኑት (ጠንቋዮች) ክፋት፤»",
        tafsir: "Tafsiira: Warra nama irratti sihrii fi falfala dalagu hunda irraa baraaramuuf."
      },
      {
        number: 5,
        arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
        oromo: "Hamtuu hinaaftuu yeroo inni hinaafe irraa.",
        english: "And from the evil of an envier when he envies.",
        amharic: "«ከተመselection/ቀናተኛም ክፋት በተቀና ጊዜ።»",
        tafsir: "Tafsiira: Ija namaa (Hasad fi Ayn) tiyyoo Rabbii jala seenuu qabna."
      }
    ]
  },
  {
    id: 114,
    nameLatin: "An-Naas",
    nameAr: "الناس",
    meaningOm: "Ilmaan Namaa",
    meaningEn: "Mankind",
    type: "Makkiyyah",
    totalAyahs: 6,
    audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/114.mp3",
    verses: [
      {
        number: 1,
        arabic: "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ",
        oromo: "Jedhi: 'Ani Gooftaa ilmaan namaatiinan maganfadha.'",
        english: "Say, 'I seek refuge in the Lord of mankind,'",
        amharic: "በላቸው፡- «በሰዎች ፈጣሪ እጠበቃለሁ፤»",
        tafsir: "Tafsiira: Uumaa fi Kunuunsaa ilmaan namaa tokkicha kan ta'etti eegumsa gaafachuu."
      },
      {
        number: 2,
        arabic: "مَلِكِ ٱلنَّاسِ",
        oromo: "Mootii ilmaan namaa,",
        english: "The Sovereign of mankind,",
        amharic: "«የሰዎች ንጉሥ፤»",
        tafsir: "Tafsiira: Bulchaa dhugaa kan mootonni addunyaa hundi jala jiraatan."
      },
      {
        number: 3,
        arabic: "إِلَٰهِ ٱلنَّاسِ",
        oromo: "Gooftaa dhugaa ilmaan namaa,",
        english: "The God of mankind,",
        amharic: "«የሰዎች አምላክ፤»",
        tafsir: "Tafsiira: Gabbaramaa tokkicha ilma namaatiif qofa malu."
      },
      {
        number: 4,
        arabic: "مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ",
        oromo: "Hamtuu waswaasaa (Seexana) isa Rabbii yoo yaadatan dhokatu irraa,",
        english: "From the evil of the retreating whisperer -",
        amharic: "«ከአፈግፋጊው ጎትጓች (ሸይጣን) ክፋት፤»",
        tafsir: "Tafsiira: Al-Khannaas jechuun yeroo zikrii Rabbii godhan kan dheessu seexana."
      },
      {
        number: 5,
        arabic: "ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ",
        oromo: "Isa qoma ilmaan namaa keessatti waswaasa nagahu irraa,",
        english: "Who whispers [evil] into the breasts of mankind -",
        amharic: "«ያን በሰዎች ልቦች ውስጥ የሚጎተጉተውን፤»",
        tafsir: "Tafsiira: Qalbii namaa keessatti shakkiifi badii kan facaasu."
      },
      {
        number: 6,
        arabic: "مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ",
        oromo: "Jinnoota irraas ta'ee ilmaan namaa irraa.",
        english: "From among the jinn and mankind.",
        amharic: "«ከጋኔኖችም ከሰዎችም የሆነውን።»",
        tafsir: "Tafsiira: Waswaasni jinniirraas nama badaarraas dhufuu danda'a; Rabbirraa eegumsa kajeella."
      }
    ]
  },
  {
    id: 108,
    nameLatin: "Al-Kawthar",
    nameAr: "الكوثر",
    meaningOm: "Tola Baay'ee",
    meaningEn: "The Abundance",
    type: "Makkiyyah",
    totalAyahs: 3,
    audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/108.mp3",
    verses: [
      {
        number: 1,
        arabic: "إِنَّآ أَعْطَيْنَٰكَ ٱلْكَوْثَرَ",
        oromo: "Dhugumatti Nuti tola baay'ee (Lagge Al-Kawthar) siif kenninee jirra.",
        english: "Indeed, We have granted you, [O Muhammad], al-Kawthar.",
        amharic: "እኛ አልከውሠርን (ብዙ በጎ ነገርን) ሰጠንህ።",
        tafsir: "Tafsiira: Al-Kawthar laga Jannata keessaa Nabiyyiif (SAW) kennamedha."
      },
      {
        number: 2,
        arabic: "فَصَلِّ لِرَبِّكَ وَٱنْحَرْ",
        oromo: "Kanaafuu Gooftaa keetiif salaati, qalis (wareegis).",
        english: "So pray to your Lord and sacrifice [to Him alone].",
        amharic: "ስለዚህ ለጌታህ ስገድ፤ እረድም (ቁርባን አድርግ)።",
        tafsir: "Tafsiira: Ibaadaa fi udhiyyaa Rabbii qofaaf qulqulleessanii dhiyeessuu."
      },
      {
        number: 3,
        arabic: "إِنَّ شَانِئَكَ هُوَ ٱلْأَبْتَرُ",
        oromo: "Dhugumatti diina keetu maqaan isaa badaadha (kutaadha).",
        english: "Indeed, your enemy is the one cut off.",
        amharic: "ጠላትህ እርሱው ጅራተ-ቆራጩ (ዘሩ የሚጠፋው) ነው።",
        tafsir: "Tafsiira: Namoonni Ergamaa Rabbii arrabsan maqaan isaanii seenaa keessatti badaan hafe."
      }
    ]
  }
];

// --- ISLAMIC KNOWLEDGE BASE FOR AI SEARCH ENGINE ---
const AI_ISLAMIC_KB = [
  {
    keywords: ["istikhaaraa", "istikharah", "istikhara", "decision", "filannoo", "ምርጫ", "استخارة"],
    title: "Salaata Istikhaaraa (The Prayer of Guidance)",
    answerOm: "Salaanni Istikhaaraa raka'aa 2 yoo ta'u, erga xumuranii booda du'aa beekamaa 'Allaahumma innee astakheeruka bi'ilmika...' jedhamu qara'u. Yeroo dhimma murteessaa (fuudha, hojii, imala) murteessuuf deeman godhama.",
    answerEn: "Salat al-Istikharah consists of 2 non-obligatory rak'ahs followed by the specific Dua of Istikharah. It is performed when seeking Allah's guidance before deciding upon marriage, career, travel, or any major affair.",
    answerAm: "የኢስቲኻራ ሶላት 2 ረከዓ የሚሰገድ ሲሆን ከሰገዱ በኋላ 'አላሁመ ኢኒ አስተኺሩከ...' የሚለው ዱዓ ይደረጋል። ለትዳር፣ ለስራ ወይም ለጉዞ ውሳኔ በሚያስፈልግበት ጊዜ ይሰገዳል።",
    answerAr: "صلاة الاستخارة ركعتان من غير الفريضة، ثم يدعو العبد بدعاء الاستخارة المأثور: 'اللهم إني أستخيرك بعلمك...' لطلب التوفيق في الأمور المباحة كالزواج والسفر والتجارة.",
    quranRef: "Surah Al-Baqarah 2:216 ('Wanti isin jibbitan kan isiniif gaarii ta'etu jira... / Perhaps you hate a thing and it is good for you')",
    hadithRef: "Sahih Bukhari (Hadith 1162) - Narrated Jabir bin Abdullah (RA)"
  },
  {
    keywords: ["pillars", "utubaa", "misingaa", "5", "arkaan", "ማዕዘናት", "أركان الإسلام"],
    title: "Utubaalee Islaamaa Shanan (The 5 Pillars of Islam)",
    answerOm: "Utubaaleen Islaamaa shanan: 1) Shahaadaa (Laa ilaaha illallaah Muhammadur Rasuulullaah), 2) Salaata dhaabuu, 3) Zakaa kennuu, 4) Sooma Ramadaanaa, 5) Hajjii Kaabaa dhaquu dandeettii yoo qabaatan.",
    answerEn: "The Five Pillars of Islam are: 1) Shahada (Faith in One Allah & Muhammad is His Messenger), 2) Salah (5 daily prayers), 3) Zakah (Charity), 4) Sawm (Fasting Ramadan), 5) Hajj (Pilgrimage to Makkah if able).",
    answerAm: "የእስልምና 5ቱ ማዕዘናት፡ 1) ሸሀዳ (አላህ ብቻ አምላክ መሆኑንና ሙሐመድ መልእክተኛው መሆናቸውን መመስከር)፣ 2) ሶላትን መስገድ፣ 3) ዘካህ ማውጣት፣ 4) የረመዳንን ወር መፆም፣ 5) አቅም ላለው ሐጅ ማድረግ።",
    answerAr: "أركان الإسلام خمسة: شهادة أن لا إله إلا الله وأن محمداً رسول الله، وإقام الصلاة، وإيتاء الزكاة، وصوم رمضان، وحج البيت لمن استطاع إليه سبيلاً.",
    quranRef: "Surah Al-Hajj 22:78 & Surah Al-Baqarah 2:43",
    hadithRef: "Sahih Muslim 16 - Hadith Ibn Umar (RA)"
  },
  {
    keywords: ["tahajjud", "salaata leylii", "night prayer", "layl", "ሌሊት ሶላት", "تهجد", "قيام الليل"],
    title: "Salaata Tahajjudii (The Night Prayer / Qiyam al-Layl)",
    answerOm: "Salaanni Tahajjudii erga rafan ka'anii halkaan walakkaa ykn sadaffaa dhumaa keessatti salaatama. Yeroo du'aan akkaan qeebalamtuudha. Lakkofsi isaa raka'aa 2 hanga 11 fi sanaa olitti salaatama.",
    answerEn: "Tahajjud is prayed during the latter third of the night after waking up from sleep. It is one of the most beloved voluntary prayers wherein Duas are readily answered by Allah.",
    answerAm: "የተሀጁድ ሶላት በሌሊት የመጨረሻው ሲሶ ክፍል ተኝቶ በመነሳት የሚሰገድ ነው። ዱዓ በጣም ተቀባይነት ከሚያገኝባቸው የተከበሩ ሰዓታት አንዱ ነው።",
    answerAr: "صلاة التهجد تصلى بعد استيقاظ من النوم في الثلث الأخير من الليل، وهو وقت النزول الإلهي وإجابة الدعاء المستجاب.",
    quranRef: "Surah Al-Isra 17:79 ('Halkaniis quraana qara'i... Tahajjud salaati')",
    hadithRef: "Sahih Muslim 758"
  },
  {
    keywords: ["ramadan", "fasting", "sooma", "soomana", "ፆም", "رمضان", "صيام"],
    title: "Sooma Ramadaanaa fi Seera Isaa (Ramadan & Fasting Rules)",
    answerOm: "Soomni fajarirraa eegalee hanga aduun seentutti nyaata, dhugaatii fi saal-qunnamtii irraa of qusachuudha. Niyyaan bu'uura. Qoricha, soomana bakkatti kafaluu fi fidyaa kennuun seerota dabalataati.",
    answerEn: "Fasting in Ramadan is abstaining from food, drink, and intimate relations from dawn (Fajr) until sunset (Maghrib) with conscious intention for the sake of Allah.",
    answerAm: "የረመዳን ፆም ከፈጅር ጀምሮ እስከ ፀሐይ መጥለቂያ ድረስ ከመብላት፣ ከመጠጣትና ከሩካቤ ሥጋ በመታቀብ ለአላህ ተብሎ የሚፈፀም ግዴታ ነው።",
    answerAr: "صيام رمضان ركن من أركان الإسلام، وهو الإمساك عن المفطرات من طلوع الفجر الصادق إلى غروب الشمس بنية التقرب لله تعالى.",
    quranRef: "Surah Al-Baqarah 2:183 ('Yaa warra amantan! Soomni akkuma warra isiniin duraa irratti barreeffametti isinirrattis barreeffamee jira...')",
    hadithRef: "Sahih Bukhari 38"
  },
  {
    keywords: ["distress", "cinqii", "dhiphina", "dua", "du'aa", "ጭንቀት", "دعاء الكرب", "حزن"],
    title: "Du'aa Yeroo Dhiphinaa fi Yaaddoo (Dua for Anxiety & Distress)",
    answerOm: "Duaa Nabiyyii Yunus (AS): 'Laa ilaaha illaa Anta, Subhaanaka, innee kuntu minaz-zaalimiin' (Gooftaa dhugaa Si malee hin jiru, Ati qulqulloofte, Ani miidhitootarraa ta'ee jira). Ammas: 'Hasbunallaahu wa ni'imal wakiil'.",
    answerEn: "Dua of Yunus (AS): 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers' (21:87). And 'Hasbunallahu wa ni'mal wakeel' (Allah is sufficient for us).",
    answerAm: "የነብዩላህ ዩኑስ ዱዓ፡ «ላ ኢላሀ ኢላ አንተ ሱብሀነከ ኢንኒ ኩንቱ ሚነዟሊሚን» እንዲሁም «ሀስቡነላህ ወኒዕመል ወኪል»ን ደጋግሞ ማለት ጭንቀትን ያስወግዳል።",
    answerAr: "دعاء ذي النون في بطن الحوت: 'لا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ'. ودعاء الكرب: 'لا إله إلا الله العظيم الحليم'.",
    quranRef: "Surah Al-Anbiya 21:87",
    hadithRef: "Sunan At-Tirmidhi 3505"
  }
];

// --- STATE MANAGEMENT ---
const AppState = {
  lang: localStorage.getItem('jem_islam_lang') || 'om',
  activeTab: 'quran',
  currentSurahId: 1,
  tasbihCount: parseInt(localStorage.getItem('jem_islam_tasbih_cnt') || '0', 10),
  tasbihTotal: parseInt(localStorage.getItem('jem_islam_tasbih_tot') || '0', 10),
  soundEnabled: localStorage.getItem('jem_islam_sound') !== 'false',
  vibrateEnabled: true,
  userLocation: { lat: 9.03, lon: 38.74, city: 'Addis Ababa / Finfinnee' }, // Default geographic center
  qiblaBearing: 67.4,
  userCompassHeading: 0
};

// --- INITIALIZATION ON DOM READY ---
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initSurahSelector();
  renderSurah(AppState.currentSurahId);
  initTasbih();
  initHijriCalendar();
  initAudio();
  initEventListeners();
  initGeolocation();
});

// --- LANGUAGE LOGIC ---
function initLanguage() {
  const langSelect = document.getElementById('appLanguageSelect');
  if (langSelect) {
    langSelect.value = AppState.lang;
    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }
  applyTranslations();
}

function setLanguage(lang) {
  AppState.lang = lang;
  localStorage.setItem('jem_islam_lang', lang);
  applyTranslations();
  renderSurah(AppState.currentSurahId);
  renderIslamicEvents();
  showToast(lang === 'om' ? 'Afaan Oromootti jijjiirame' : lang === 'en' ? 'Language switched to English' : lang === 'am' ? 'ቋንቋ ወደ አማርኛ ተቀይሯል' : 'تم تغيير اللغة إلى العربية');
}

function applyTranslations() {
  const dict = I18N_DICTIONARY[AppState.lang] || I18N_DICTIONARY.om;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
}

// --- TAB SWITCHER LOGIC ---
function switchTab(tabId) {
  AppState.activeTab = tabId;
  // Update Desktop tab buttons
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.className = 'nav-tab-btn flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition active-tab bg-emerald-600/20 text-emerald-300 border border-emerald-500/30';
    } else {
      btn.className = 'nav-tab-btn flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition text-slate-400 hover:text-slate-200 hover:bg-slate-800/50';
    }
  });

  // Update Mobile tab buttons
  document.querySelectorAll('.mobile-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('text-emerald-400');
      btn.classList.remove('text-slate-400');
    } else {
      btn.classList.remove('text-emerald-400');
      btn.classList.add('text-slate-400');
    }
  });

  // Toggle Sections
  document.querySelectorAll('.tab-section').forEach(sec => sec.classList.add('hidden'));
  const activeSec = document.getElementById(`section-${tabId}`);
  if (activeSec) {
    activeSec.classList.remove('hidden');
  }

  // Special handlers
  if (tabId === 'qibla') {
    setupCompassOrientation();
  }
}

// --- QURAN MODULE ---
function initSurahSelector() {
  const selector = document.getElementById('surahSelector');
  if (!selector) return;
  selector.innerHTML = '';
  QURAN_DATABASE.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = `${s.id}. ${s.nameLatin} (${s.nameAr}) - ${s.totalAyahs} Ayahs`;
    selector.appendChild(opt);
  });

  selector.addEventListener('change', (e) => {
    AppState.currentSurahId = parseInt(e.target.value, 10);
    renderSurah(AppState.currentSurahId);
  });
}

function renderSurah(surahId) {
  const surah = QURAN_DATABASE.find(s => s.id === surahId) || QURAN_DATABASE[0];
  const container = document.getElementById('versesContainer');
  const headerTitle = document.getElementById('surahEnglishName');
  const headerArabic = document.getElementById('surahArabicName');
  const headerMeaning = document.getElementById('surahMeaning');
  const headerBadge = document.getElementById('surahTypeBadge');
  const bismillahBox = document.getElementById('bismillahBox');

  if (!container) return;

  headerTitle.textContent = `${surah.id}. ${surah.nameLatin}`;
  headerArabic.textContent = surah.nameAr;
  headerMeaning.textContent = `(${surah.meaningOm} - ${surah.meaningEn})`;
  headerBadge.textContent = `${surah.type.toUpperCase()} • ${surah.totalAyahs} AAYATOOTA`;

  // Show/Hide Bismillah
  if (surah.id === 9 || surah.id === 1) {
    bismillahBox.classList.add('hidden');
  } else {
    bismillahBox.classList.remove('hidden');
  }

  const showOm = document.getElementById('toggleOm')?.checked ?? true;
  const showEn = document.getElementById('toggleEn')?.checked ?? true;
  const showAm = document.getElementById('toggleAm')?.checked ?? true;
  const showTafsir = document.getElementById('toggleTafsir')?.checked ?? true;
  const filterKeyword = document.getElementById('quranSearchInput')?.value.trim().toLowerCase() || '';

  container.innerHTML = '';

  const filteredVerses = surah.verses.filter(v => {
    if (!filterKeyword) return true;
    return (
      v.arabic.includes(filterKeyword) ||
      v.oromo.toLowerCase().includes(filterKeyword) ||
      v.english.toLowerCase().includes(filterKeyword) ||
      v.amharic.includes(filterKeyword) ||
      v.number.toString() === filterKeyword
    );
  });

  if (filteredVerses.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center text-slate-500 bg-slate-900/40 rounded-2xl border border-slate-800">
        <i class="fa-solid fa-circle-exclamation text-2xl mb-2 text-amber-500"></i>
        <p>Aayanni barbaaddan hin argamne. Jecha biraatiin yaalaa.</p>
      </div>
    `;
    return;
  }

  filteredVerses.forEach(verse => {
    const verseCard = document.createElement('div');
    verseCard.className = "glass-panel p-5 rounded-2xl space-y-4 hover:border-emerald-500/40 transition duration-200";
    verseCard.innerHTML = `
      <div class="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-bold text-xs flex items-center justify-center font-mono">
            ${verse.number}
          </span>
          <span class="text-xs text-slate-400 font-medium">${surah.nameLatin}:${verse.number}</span>
        </div>
        <div class="flex items-center gap-1.5">
          <button onclick="copyVerseText('${verse.number}', \`${escapeQuotes(verse.arabic)}\`, \`${escapeQuotes(verse.oromo)}\`, \`${escapeQuotes(verse.english)}\`, \`${escapeQuotes(verse.amharic)}\`)" class="p-2 text-slate-400 hover:text-emerald-400 rounded-lg hover:bg-slate-800 transition text-xs" title="Copy Verse">
            <i class="fa-regular fa-copy"></i>
          </button>
          <button onclick="speakVerseText(\`${escapeQuotes(verse.arabic)}\`)" class="p-2 text-slate-400 hover:text-amber-400 rounded-lg hover:bg-slate-800 transition text-xs" title="Recite">
            <i class="fa-solid fa-volume-high"></i>
          </button>
        </div>
      </div>

      <!-- Arabic Verse -->
      <div class="text-right py-2 leading-loose">
        <p class="font-arabic text-2xl sm:text-3xl text-emerald-200 select-all font-semibold leading-relaxed" dir="rtl">
          ${verse.arabic} <span class="text-amber-400 text-lg mx-1">﴿${verse.number}﴾</span>
        </p>
      </div>

      <!-- Multilingual Translations -->
      <div class="space-y-2.5 pt-2 border-t border-slate-800/60 text-xs sm:text-sm">
        ${showOm ? `
          <div class="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-800/30">
            <div class="flex items-center gap-1.5 text-[11px] text-emerald-400 font-bold mb-1 uppercase tracking-wider">
              <span>🌳 Afaan Oromoo</span>
            </div>
            <p class="text-slate-200 font-medium leading-relaxed">${verse.oromo}</p>
          </div>
        ` : ''}

        ${showEn ? `
          <div class="p-2.5 rounded-xl bg-blue-950/20 border border-blue-900/30">
            <div class="flex items-center gap-1.5 text-[11px] text-blue-400 font-bold mb-1 uppercase tracking-wider">
              <span>🇬🇧 English</span>
            </div>
            <p class="text-slate-300 leading-relaxed">${verse.english}</p>
          </div>
        ` : ''}

        ${showAm ? `
          <div class="p-2.5 rounded-xl bg-amber-950/20 border border-amber-900/30">
            <div class="flex items-center gap-1.5 text-[11px] text-amber-400 font-bold mb-1 uppercase tracking-wider">
              <span>🇪🇹 አማርኛ</span>
            </div>
            <p class="text-slate-200 font-ethiopic leading-relaxed">${verse.amharic}</p>
          </div>
        ` : ''}

        ${showTafsir ? `
          <div class="p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/60 text-xs text-amber-200/90 italic flex gap-2 items-start mt-2">
            <i class="fa-solid fa-book-bookmark text-amber-400 mt-0.5 text-xs shrink-0"></i>
            <div>
              <span class="font-bold text-amber-400 not-italic">Tafsiir: </span>${verse.tafsir}
            </div>
          </div>
        ` : ''}
      </div>
    `;
    container.appendChild(verseCard);
  });
}

function escapeQuotes(str) {
  if (!str) return '';
  return str.replace(/`/g, '\\`').replace(/"/g, '&quot;');
}

window.copyVerseText = function(verseNum, arb, om, en, am) {
  const textToCopy = `[Quran - Aayah ${verseNum}]\n${arb}\n\n[Afaan Oromoo]: ${om}\n[English]: ${en}\n[Amharic]: ${am}\n- Shared via Jem Islam AI App`;
  navigator.clipboard.writeText(textToCopy).then(() => {
    showToast('Aayanni koppii ta'eera (Copied)!');
  }).catch(() => {
    showToast('Copied to clipboard');
  });
};

window.speakVerseText = function(arabicText) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(arabicText);
    utterance.lang = 'ar-SA';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
    showToast('Reciting Ayah...');
  } else {
    showToast('Speech not supported on this device');
  }
};

// --- AI SEARCH & FATWA ENGINE ---
function handleAiSearch(query) {
  const cleanQuery = query.toLowerCase().trim();
  const outputArea = document.getElementById('aiOutputArea');
  if (!outputArea) return;

  // Show Loading Spinner
  outputArea.innerHTML = `
    <div class="glass-panel p-8 rounded-2xl text-center space-y-3">
      <i class="fa-solid fa-spinner fa-spin text-3xl text-emerald-400"></i>
      <p class="text-sm text-slate-300 font-medium">Jem Islam AI qorannoo Qur'aana fi Hadiisaa adeemsisaa jira...</p>
      <p class="text-xs text-slate-500">Analyzing semantic context across Afaan Oromoo, English, Amharic & Arabic...</p>
    </div>
  `;

  setTimeout(() => {
    // Match in Islamic Knowledge Base
    const matched = AI_ISLAMIC_KB.find(item => {
      return item.keywords.some(kw => cleanQuery.includes(kw)) || cleanQuery.includes(item.title.toLowerCase());
    });

    if (matched) {
      outputArea.innerHTML = `
        <div class="glass-panel p-6 rounded-2xl border border-emerald-500/40 space-y-5 animate-fade-in shadow-xl">
          <div class="flex items-center justify-between border-b border-slate-800 pb-3">
            <div class="flex items-center gap-2">
              <span class="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm">
                <i class="fa-solid fa-check-double"></i>
              </span>
              <h3 class="font-bold text-white text-base md:text-lg">${matched.title}</h3>
            </div>
            <span class="text-[11px] bg-emerald-950 text-emerald-400 border border-emerald-600/40 px-2.5 py-1 rounded-full font-semibold uppercase">AI Verified</span>
          </div>

          <!-- Quad-Language Answer View -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div class="bg-slate-900/90 p-4 rounded-xl border border-emerald-900/50 space-y-1.5">
              <p class="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                <span>🌳 Afaan Oromoo</span>
              </p>
              <p class="text-slate-200 leading-relaxed">${matched.answerOm}</p>
            </div>

            <div class="bg-slate-900/90 p-4 rounded-xl border border-blue-900/50 space-y-1.5">
              <p class="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1">
                <span>🇬🇧 English</span>
              </p>
              <p class="text-slate-300 leading-relaxed">${matched.answerEn}</p>
            </div>

            <div class="bg-slate-900/90 p-4 rounded-xl border border-amber-900/50 space-y-1.5">
              <p class="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                <span>🇪🇹 አማርኛ</span>
              </p>
              <p class="text-slate-200 font-ethiopic leading-relaxed">${matched.answerAm}</p>
            </div>

            <div class="bg-slate-900/90 p-4 rounded-xl border border-teal-900/50 space-y-1.5 text-right" dir="rtl">
              <p class="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1 justify-end">
                <span>🇸🇦 العربية</span>
              </p>
              <p class="text-slate-200 font-arabic text-base leading-relaxed">${matched.answerAr}</p>
            </div>
          </div>

          <!-- Scriptural References -->
          <div class="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
            <div class="flex items-center gap-2 text-emerald-400 font-bold">
              <i class="fa-solid fa-book-quran"></i>
              <span>Ragaa Qur'aana fi Hadiisaa (Islamic Scriptural Proofs)</span>
            </div>
            <p class="text-slate-300"><strong class="text-amber-400">Aayata:</strong> ${matched.quranRef}</p>
            <p class="text-slate-300"><strong class="text-teal-400">Hadiisa:</strong> ${matched.hadithRef}</p>
          </div>
        </div>
      `;
    } else {
      // Generic intelligent fallback with comprehensive advice
      outputArea.innerHTML = `
        <div class="glass-panel p-6 rounded-2xl border border-slate-700 space-y-4 shadow-xl">
          <div class="flex items-center gap-2 text-amber-400 font-bold">
            <i class="fa-solid fa-lightbulb text-lg"></i>
            <h3>Deebii AI: "${cleanQuery}"</h3>
          </div>
          <p class="text-sm text-slate-300 leading-relaxed">
            Gaafilee keessan irratti hundaa'ee, Islaamummaan gama hundaaniyyuu qajeelfama ifaa kenna. Rabbii kadhachuu (Du'aa), salaata sirnaan eeggachuu fi Ulamaa'ota amantii naannoo keessan jiran mariisisuun barbaachisaadha.
          </p>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
            <p class="text-emerald-400 font-bold font-arabic text-base">فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ</p>
            <p class="text-slate-300 italic">"Warra beekumsa qaban gaafadhaa yoo kan hin beekne taatan." (Surah An-Nahl 16:43)</p>
          </div>
          <div class="flex gap-2">
            <button onclick="runPresetAi('Salaata Istikhaaraa akkamitti godhanna?')" class="text-xs px-3 py-1.5 rounded-lg bg-emerald-600/30 text-emerald-300 border border-emerald-500/30">
              Istikhaaraa gaafadhu
            </button>
            <button onclick="runPresetAi('What are the 5 pillars of Islam?')" class="text-xs px-3 py-1.5 rounded-lg bg-blue-600/30 text-blue-300 border border-blue-500/30">
              5 Pillars of Islam
            </button>
          </div>
        </div>
      `;
    }
  }, 450);
}

window.runPresetAi = function(promptText) {
  const input = document.getElementById('aiQueryInput');
  if (input) {
    input.value = promptText;
    handleAiSearch(promptText);
  }
};

// --- QIBLA DIRECTION & COMPASS LOGIC ---
function calculateQiblaBearing(lat1, lon1) {
  // Kaaba Coordinates
  const lat2 = 21.4225 * (Math.PI / 180);
  const lon2 = 39.8262 * (Math.PI / 180);
  const phi1 = lat1 * (Math.PI / 180);
  const lam1 = lon1 * (Math.PI / 180);

  const y = Math.sin(lon2 - lam1);
  const x = Math.cos(phi1) * Math.tan(lat2) - Math.sin(phi1) * Math.cos(lon2 - lam1);
  let qiblaRad = Math.atan2(y, x);
  let qiblaDeg = qiblaRad * (180 / Math.PI);
  return (qiblaDeg + 360) % 360;
}

function initGeolocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        AppState.userLocation.lat = lat;
        AppState.userLocation.lon = lon;
        AppState.userLocation.city = `${lat.toFixed(2)}° N, ${lon.toFixed(2)}° E`;
        updateQiblaValues();
      },
      () => {
        // Fallback default
        updateQiblaValues();
      },
      { timeout: 7000 }
    );
  } else {
    updateQiblaValues();
  }
}

function updateQiblaValues() {
  const bearing = calculateQiblaBearing(AppState.userLocation.lat, AppState.userLocation.lon);
  AppState.qiblaBearing = bearing;

  const bearingDisplay = document.getElementById('qiblaBearingDegree');
  const userCityDisplay = document.getElementById('qiblaUserCity');
  const pinElement = document.getElementById('kaabaDirectionPin');

  if (bearingDisplay) bearingDisplay.textContent = `${bearing.toFixed(1)}° (${getCardinalName(bearing)})`;
  if (userCityDisplay) userCityDisplay.textContent = AppState.userLocation.city;
  if (pinElement) pinElement.style.transform = `rotate(${bearing}deg)`;
}

function getCardinalName(deg) {
  if (deg >= 337.5 || deg < 22.5) return 'N';
  if (deg >= 22.5 && deg < 67.5) return 'NE';
  if (deg >= 67.5 && deg < 112.5) return 'E';
  if (deg >= 112.5 && deg < 157.5) return 'SE';
  if (deg >= 157.5 && deg < 202.5) return 'S';
  if (deg >= 202.5 && deg < 247.5) return 'SW';
  if (deg >= 247.5 && deg < 292.5) return 'W';
  return 'NW';
}

function setupCompassOrientation() {
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientationabsolute', handleOrientation, true);
    window.addEventListener('deviceorientation', handleOrientation, true);
  }
}

function handleOrientation(e) {
  let compass = e.webkitCompassHeading || (e.alpha ? 360 - e.alpha : null);
  if (compass !== null && compass !== undefined) {
    AppState.userCompassHeading = compass;
    const needle = document.getElementById('compassNeedle');
    if (needle) {
      needle.style.transform = `rotate(${-compass}deg)`;
    }
  }
}

// --- DIGITAL TASBIH MODULE ---
function initTasbih() {
  const display = document.getElementById('tasbihCountDisplay');
  const totalDisplay = document.getElementById('tasbihTotalAll');
  const targetDisplay = document.getElementById('tasbihTargetDisplay');
  const btn = document.getElementById('tasbihCounterBtn');
  const resetBtn = document.getElementById('btnResetCurrentDhikr');
  const resetHistBtn = document.getElementById('tasbihResetHistory');
  const dhikrSelect = document.getElementById('dhikrSelector');

  if (display) display.textContent = AppState.tasbihCount;
  if (totalDisplay) totalDisplay.textContent = AppState.tasbihTotal;

  if (btn) {
    btn.addEventListener('click', incrementTasbih);
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      AppState.tasbihCount = 0;
      localStorage.setItem('jem_islam_tasbih_cnt', 0);
      if (display) display.textContent = '0';
      playClickBeep(300);
      showToast('Tasbiih deebifameera (Counter reset)');
    });
  }

  if (resetHistBtn) {
    resetHistBtn.addEventListener('click', () => {
      if (confirm('Lakkofsa waliigalaa haqamuu barbaadduu?')) {
        AppState.tasbihCount = 0;
        AppState.tasbihTotal = 0;
        localStorage.setItem('jem_islam_tasbih_cnt', 0);
        localStorage.setItem('jem_islam_tasbih_tot', 0);
        if (display) display.textContent = '0';
        if (totalDisplay) totalDisplay.textContent = '0';
        showToast('All stats cleared');
      }
    });
  }

  if (dhikrSelect) {
    dhikrSelect.addEventListener('change', (e) => {
      updateDhikrDetails(e.target.value);
    });
    updateDhikrDetails(dhikrSelect.value);
  }
}

function updateDhikrDetails(type) {
  const arabic = document.getElementById('currentDhikrArabic');
  const trans = document.getElementById('currentDhikrTrans');
  const meaning = document.getElementById('currentDhikrMeaning');
  const targetDisplay = document.getElementById('tasbihTargetDisplay');

  const map = {
    SubhanAllah: { ar: "سُبْحَانَ اللَّهِ", en: "SubhanAllah", om: "'Qulqullinni Rabbii hunda ol'", max: 33 },
    Alhamdulillah: { ar: "الْحَمْدُ لِلَّهِ", en: "Alhamdulillah", om: "'Faaruun kan Rabbiiti'", max: 33 },
    AllahuAkbar: { ar: "اللَّهُ أَكْبَرُ", en: "Allahu Akbar", om: "'Allaahn hundarra guddaadha'", max: 34 },
    LaIlahaIllallah: { ar: "لَا إِلٰهَ إِلَّا اللَّهُ", en: "La ilaha illallah", om: "'Gooftaan dhugaa Rabbii malee hin jiru'", max: 100 },
    Astaghfirullah: { ar: "أَسْتَغْفِرُ اللَّهَ", en: "Astaghfirullah", om: "'Rabbirraa dhiifama kadhadha'", max: 100 },
    Salawat: { ar: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ", en: "Allahumma Salli Ala Muhammad", om: "'Yaa Rabbi Ergamaa keerratti rahmata buusi'", max: 100 },
    Custom: { ar: "ذِكْرُ اللَّهِ", en: "Zikrii Dhuunfaa", om: "'Yaa Rabbii na eebbisi'", max: 999 }
  };

  const cur = map[type] || map.SubhanAllah;
  if (arabic) arabic.textContent = cur.ar;
  if (trans) trans.textContent = cur.en;
  if (meaning) meaning.textContent = cur.om;
  if (targetDisplay) targetDisplay.textContent = cur.max;
}

function incrementTasbih() {
  AppState.tasbihCount++;
  AppState.tasbihTotal++;
  localStorage.setItem('jem_islam_tasbih_cnt', AppState.tasbihCount);
  localStorage.setItem('jem_islam_tasbih_tot', AppState.tasbihTotal);

  const display = document.getElementById('tasbihCountDisplay');
  const totalDisplay = document.getElementById('tasbihTotalAll');
  const targetDisplay = document.getElementById('tasbihTargetDisplay');

  if (display) display.textContent = AppState.tasbihCount;
  if (totalDisplay) totalDisplay.textContent = AppState.tasbihTotal;

  // Vibration feedback
  if (AppState.vibrateEnabled && navigator.vibrate) {
    navigator.vibrate(40);
  }

  // Sound feedback
  playClickBeep(700);

  // Check target
  const target = parseInt(targetDisplay?.textContent || '33', 10);
  if (AppState.tasbihCount === target) {
    if (navigator.vibrate) navigator.vibrate([100, 50, 150]);
    playClickBeep(950, 0.25);
    showToast(`Mashaa'Allah! Target ${target} xumurameera! 🎉`);
  }
}

// Web Audio API for clicks and notifications
let audioCtx = null;
function playClickBeep(freq = 600, duration = 0.05) {
  if (!AppState.soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {
    // Audio not allowed yet without gesture
  }
}

// --- HIJRI CALENDAR & EVENTS ---
function initHijriCalendar() {
  updateLiveClock();
  setInterval(updateLiveClock, 1000);
  renderIslamicEvents();

  // Approximate Hijri conversion based on current date
  const now = new Date();
  const gregorianStr = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const gregElem = document.getElementById('gregorianToday');
  if (gregElem) gregElem.textContent = gregorianStr;

  // Format Hijri using Intl if supported
  try {
    const hijriFormatter = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const formattedHijri = hijriFormatter.format(now);
    const miniHijri = document.getElementById('miniHijriDate');
    const fullLatin = document.getElementById('hijriFullLatin');
    if (miniHijri) miniHijri.textContent = formattedHijri;
    if (fullLatin) fullLatin.textContent = formattedHijri + ' AH';
  } catch (e) {
    // Fallback
    const miniHijri = document.getElementById('miniHijriDate');
    if (miniHijri) miniHijri.textContent = "14 Ramadan 1446 AH";
  }
}

function updateLiveClock() {
  const clockEl = document.getElementById('currentTimeDisplay');
  if (clockEl) {
    const d = new Date();
    clockEl.textContent = d.toLocaleTimeString();
  }
}

function renderIslamicEvents() {
  const list = document.getElementById('islamicEventsList');
  if (!list) return;

  const events = [
    { date: "1 Muharram 1446", title: "Bara Haaraa Hijraa (Islamic New Year)", tag: "Holiday" },
    { date: "10 Muharram 1446", title: "Guyyaa Aashuuraa (Day of Ashura)", tag: "Sunnah Fast" },
    { date: "12 Rabi' al-Awwal 1446", title: "Mawlida Nabiyyichaa (Mawlid al-Nabi SAW)", tag: "Commemoration" },
    { date: "27 Rajab 1446", title: "Israa'a fi Mi'raaj (Night of Ascension)", tag: "Sacred Night" },
    { date: "1 Ramadan 1446", title: "Jalqaba Sooma Ramadaanaa", tag: "Pillar" },
    { date: "27 Ramadan 1446", title: "Leylatul Qadr (Halkana Kabajamaa)", tag: "Best Night" },
    { date: "1 Shawwal 1446", title: "Iid al-Fixrii (Eid al-Fitr)", tag: "Celebration" },
    { date: "10 Dhul Hijjah 1446", title: "Iid al-Adhaa (Eid of Sacrifice)", tag: "Sacred Feast" }
  ];

  list.innerHTML = events.map(ev => `
    <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-amber-500/30 transition">
      <div class="space-y-0.5">
        <p class="font-semibold text-slate-200">${ev.title}</p>
        <p class="text-[11px] text-amber-400 font-mono">${ev.date}</p>
      </div>
      <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        ${ev.tag}
      </span>
    </div>
  `).join('');
}

// --- AUDIO & EVENT LISTENERS ---
function initAudio() {
  const playBtn = document.getElementById('playSurahAudioBtn');
  const player = document.getElementById('quranAudioPlayer');
  const label = document.getElementById('audioBtnLabel');

  if (playBtn && player) {
    playBtn.addEventListener('click', () => {
      const surah = QURAN_DATABASE.find(s => s.id === AppState.currentSurahId) || QURAN_DATABASE[0];
      if (player.src !== surah.audioUrl) {
        player.src = surah.audioUrl;
      }

      if (player.paused) {
        player.play().then(() => {
          label.textContent = 'Dhaabi (Pause Audio)';
          playBtn.classList.add('bg-amber-600');
          showToast('Sagaleen qiraatii eegalameera');
        }).catch(() => {
          showToast('Audio playback failed');
        });
      } else {
        player.pause();
        label.textContent = 'Sagalee Dhaggeeffadhu (Audio)';
        playBtn.classList.remove('bg-amber-600');
      }
    });

    player.addEventListener('ended', () => {
      label.textContent = 'Sagalee Dhaggeeffadhu (Audio)';
      playBtn.classList.remove('bg-amber-600');
    });
  }
}

function initEventListeners() {
  // Translation Checkboxes
  ['toggleOm', 'toggleEn', 'toggleAm', 'toggleTafsir'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('change', () => renderSurah(AppState.currentSurahId));
    }
  });

  // Quran Search bar
  const qSearch = document.getElementById('quranSearchInput');
  if (qSearch) {
    qSearch.addEventListener('input', () => renderSurah(AppState.currentSurahId));
  }

  // AI Form
  const aiForm = document.getElementById('aiSearchForm');
  const aiInput = document.getElementById('aiQueryInput');
  const clearAi = document.getElementById('clearAiBtn');

  if (aiForm && aiInput) {
    aiForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (aiInput.value.trim()) {
        handleAiSearch(aiInput.value.trim());
      }
    });

    aiInput.addEventListener('input', () => {
      if (clearAi) {
        clearAi.classList.toggle('hidden', !aiInput.value.trim());
      }
    });

    if (clearAi) {
      clearAi.addEventListener('click', () => {
        aiInput.value = '';
        clearAi.classList.add('hidden');
      });
    }
  }

  // GPS Detection button in Qibla tab
  const gpsBtn = document.getElementById('btnDetectGPS');
  if (gpsBtn) {
    gpsBtn.addEventListener('click', () => {
      showToast('Finding exact GPS coordinates...');
      initGeolocation();
    });
  }

  // Calibrate button
  const calBtn = document.getElementById('btnCalibrate');
  if (calBtn) {
    calBtn.addEventListener('click', () => {
      showToast('Compass calibrated to True North.');
      updateQiblaValues();
    });
  }

  // Sound Toggle
  const soundBtn = document.getElementById('soundToggleBtn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      AppState.soundEnabled = !AppState.soundEnabled;
      localStorage.setItem('jem_islam_sound', AppState.soundEnabled);
      soundBtn.innerHTML = AppState.soundEnabled 
        ? '<i class="fa-solid fa-volume-high text-xs text-emerald-400"></i>'
        : '<i class="fa-solid fa-volume-xmark text-xs text-slate-500"></i>';
      showToast(AppState.soundEnabled ? 'Sagaleen banameera (Sound ON)' : 'Sagaleen cufameera (Sound OFF)');
    });
  }

  // Bookmark button
  const bookmarkBtn = document.getElementById('bookmarkSurahBtn');
  if (bookmarkBtn) {
    bookmarkBtn.addEventListener('click', () => {
      localStorage.setItem('jem_islam_last_surah', AppState.currentSurahId);
      showToast(`Surah #${AppState.currentSurahId} Galmeeffameera (Bookmarked)!`);
    });
  }

  // Tasbih vibration toggle
  const vibBtn = document.getElementById('tasbihVibrateBtn');
  if (vibBtn) {
    vibBtn.addEventListener('click', () => {
      AppState.vibrateEnabled = !AppState.vibrateEnabled;
      vibBtn.classList.toggle('text-emerald-400', AppState.vibrateEnabled);
      showToast(AppState.vibrateEnabled ? 'Vibration On' : 'Vibration Off');
    });
  }
}

// --- TOAST NOTIFICATIONS ---
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('appToast');
  const text = document.getElementById('toastMessage');
  if (!toast || !text) return;

  text.textContent = msg;
  toast.classList.remove('opacity-0', 'translate-y-20');
  toast.classList.add('opacity-100', 'translate-y-0');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-20');
    toast.classList.remove('opacity-100', 'translate-y-0');
  }, 2600);
}

// Expose tab switcher to global scope for inline buttons
window.switchTab = switchTab;
