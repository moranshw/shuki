/* =========================================================================
   כאן עורכים את האתר  —  This is the only file you need to edit.
   =========================================================================

   הגדרות כלליות (SITE_CONFIG)
   -------------------------------------------------------------------------
   googleForm : החיבור ל-Google Form שאוסף את ההצעות. אין צורך לגעת בזה.
                אם משנים/מוחקים שאלות בטופס של גוגל — החיבור עלול להישבר.

   פריטים (ITEMS)
   -------------------------------------------------------------------------
   כל פריט הוא בלוק בתוך { ... } עם השדות הבאים:

     id          : מזהה באנגלית, בלי רווחים, ייחודי לכל פריט (משמש לקישור ישיר)
     title       : שם היצירה
     model       : דגם / מספר סט (אפשר להשאיר "")
     description : תיאור קצר (אפשר להשאיר "")
     image       : שם קובץ התמונה בתיקיית images  (למשל "images/titanic.jpg")
     moreImages  : (לא חובה) תמונות נוספות של אותו פריט. בחלון הפריט יופיעו חיצים
                   למעבר בין התמונות. למשל:
                   moreImages: ["images/titanic2.jpg", "images/titanic3.jpg"],
     forSale     : true = מוצע למכירה (מופיע כפתור "הגשת הצעה"),  false = רק לתצוגה
     startPrice  : מחיר פתיחה בש"ח (מספר), או "" אם לא רוצים להציג מחיר
     sold        : true = נמכר (הכפתור נעלם ומופיע "נמכר")
     donated     : true = נתרם (הכפתור נעלם ומופיע "נתרם"). אפשר להוסיף את השורה
                   donated: true,  לכל פריט, למשל מתחת לשורה של sold

   להוספת פריט: מעתיקים בלוק קיים, מדביקים אחריו, ומשנים את הפרטים.
   שימו לב לפסיק , אחרי כל } (חוץ מהאחרון — שם זה לא משנה).
   ========================================================================= */

window.SITE_CONFIG = {
  googleForm: {
    url: "https://docs.google.com/forms/d/e/1FAIpQLScerQN1BlKYk3w3cVaNkNAaNuGBYoM7SUMRAehRsgPwjPMb_A/formResponse",
    fields: {
      item: "entry.504147470",       // פריט
      name: "entry.42533504",        // שם
      phone: "entry.2006986668",     // טלפון
      price: "entry.1640578753",     // מחיר
      pickupDate: "entry.187149522", // תאריך איסוף
      notes: "entry.173314712",      // הערות
    },
  },

  // משפט שמופיע מעל כל היצירות (אפשר להשאיר "" כדי להסתיר)
  pickupNote: "איסוף מפתח תקווה עד נובמבר 13",

  // תאריך האיסוף האחרון שאפשר לבחור בטופס (שנה-חודש-יום), או "" ללא הגבלה
  pickupUntil: "2026-11-13",

  // מספר הוואטסאפ לפניות על פריט (כפתור הוואטסאפ הירוק). אפשר להשאיר "" כדי להסתיר
  whatsapp: "052-8665225",
};

window.ITEMS = [
  {
    id: "venator",
    title: "ספינת הקרב Venator — מלחמת הכוכבים",
    model: "LEGO Star Wars 75367",
    description: "ספינת קרב רפובליקנית ענקית, מוצגת יחד עם C-3PO, R2-D2 ולוגו מלחמת הכוכבים שבנה.\nכולל תיבת תצוגה שקופה (פרספקס).",
    image: "images/starwars.jpg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
  {
    id: "c-3po",
    title: "C-3PO — מלחמת הכוכבים",
    model: "LEGO Star Wars 75398",
    description: "כולל מעמד עם שלט מידע ומיניפיגורה.",
    image: "images/star_wars_c-3po.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
  {
    id: "r2-d2",
    title: "R2-D2 — מלחמת הכוכבים",
    model: "LEGO Star Wars 75308",
    description: "כולל מעמד עם שלט מידע ומיניפיגורה.",
    image: "images/star_wars_r2d2.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
  {
    id: "razor-crest",
    title: "החללית Razor Crest — המנדלוריאן",
    model: "LEGO Star Wars 75331",
    description: "",
    image: "images/spaceship.jpg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
  {
    id: "endurance",
    title: "ספינת המחקר Endurance",
    model: "LEGO Icons 10335",
    description: "ספינתו של שקלטון למסע לאנטארקטיקה.\nכולל תיבת תצוגה שקופה (פרספקס).",
    image: "images/boat1.jpg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
  {
    id: "black-pearl",
    title: "ספינת הפיראטים — הפנינה השחורה",
    model: "",
    description: "עם המפרשים השחורים, דגל הגולגולת והדמויות על הסיפון.\nכולל תיבת תצוגה שקופה (פרספקס).",
    image: "images/pirate.jpg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
  {
    id: "titanic",
    title: "טיטאניק",
    model: "",
    description: "",
    image: "images/titanic.jpg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
  {
    id: "nasa-shuttle",
    title: "מעבורת החלל ומטוס הנשיאה של נאס״א",
    model: "LEGO Icons 10360",
    description: "מעבורת החלל Enterprise על גבי מטוס בואינג 747.",
    image: "images/nasa.jpg",
    forSale: true,
    startPrice: "800",
    sold: false,
  },
  {
    id: "crane",
    title: "מנוף זחלי Liebherr",
    model: "LEGO Technic 42146",
    description: "",
    image: "images/manof.jpg",
    forSale: true,
    startPrice: "",
    sold: true,
  },
  {
    id: "bucket-wheel",
    title: "מחפר גלגל דליים",
    model: "LEGO Technic 42055",
    description: "",
    image: "images/mk3.jpg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
  {
    id: "helicopter",
    title: "מסוק החילוץ Airbus H175",
    model: "LEGO Technic 42145",
    description: "",
    image: "images/helicopter.jpg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
  {
    id: "jeep",
    title: "מרצדס G 500 PROFESSIONAL Line",
    model: "LEGO Technic 42177",
    description: "",
    image: "images/jeep.jpeg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
  {
    id: "lamborgini",
    title: "למבורגיני Sián FKP 37",
    model: "LEGO Technic 42115",
    description: "",
    image: "images/lamborgini.jpeg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
  {
    id: "mclaren",
    title: "מקלארן P1",
    model: "LEGO Technic 42172",
    description: "",
    image: "images/mclaren.jpeg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
  {
    id: "piano",
    title: "פסנתר כנף",
    model: "LEGO Ideas 21323",
    description: "",
    image: "images/piano.jpeg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
  {
    id: "room",
    title: "מדפי התצוגה — רכבים ומכונות",
    model: "",
    description: "",
    image: "images/room.jpeg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
  {
    id: "saloon",
    title: "ארון התצוגה בסלון",
    model: "",
    description: "",
    image: "images/saloon.jpeg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
  {
    id: "vitrina",
    title: "הוויטרינה",
    model: "",
    description: "",
    image: "images/vitrina.jpeg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
  {
    id: "vitrina-lights",
    title: "ארון התצוגה המואר",
    model: "",
    description: "",
    image: "images/vitrina_lights.jpeg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
  {
    id: "street",
    title: "רחוב הבניינים המודולריים",
    model: "LEGO Modular Buildings",
    description: "",
    image: "images/street.jpg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
  {
    id: "mizhelet",
    title: "רכב השטח Extreme Adventure",
    model: "LEGO Technic 42069",
    description: "",
    image: "images/mizhelet.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
  {
    id: "black_car",
    title: "הבאטמוביל — The Batman",
    model: "LEGO Technic 42127",
    description: "",
    image: "images/black_car.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
  {
    id: "mustang",
    title: "פורד מוסטנג",
    model: "LEGO Creator Expert 10265",
    description: "",
    image: "images/mustang.jpeg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
  {
    id: "truck",
    title: "משאית השטח מרצדס-בנץ Zetros 4x4",
    model: "LEGO Technic 42129",
    description: "",
    image: "images/truck.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
  {
    id: "buldozer",
    title: "דחפור D11 על שלט רחוק",
    model: "JMBricklayer / Reobrix 22001",
    description: "",
    image: "images/buldozer.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
  {
    id: "stranger_things",
    title: "דברים מוזרים — בית קריל",
    model: "LEGO Icons 11370",
    description: "",
    image: "images/stranger_things.jpeg",
    forSale: true,
    startPrice: "",
    sold: true,
  },
  {
    id: "garden",
    title: "הגן הבוטני",
    model: "LEGO Ideas 21353",
    description: "",
    image: "images/garden.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
  {
    id: "power_truck",
    title: "משאית גרר כבדה",
    model: "LEGO Technic 42128",
    description: "",
    image: "images/power_truck.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
  {
    id: "train",
    title: "רכבת האוריינט אקספרס",
    model: "LEGO Ideas 21344",
    description: "",
    image: "images/train.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
  {
    id: "bugati",
    title: "בוגאטי שירון",
    model: "LEGO Technic 42083",
    description: "",
    image: "images/bugati.jpeg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
  {
    id: "motorcycle1",
    title: "אופנוע BMW M 1000 RR",
    model: "LEGO Technic 42130",
    description: "",
    image: "images/motorcycle1.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
  {
    id: "motor_red",
    title: "אופנוע דוקאטי Panigale V4 S",
    model: "LEGO Technic 42202",
    description: "",
    image: "images/motor_red.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
  {
    id: "church",
    title: "קתדרלת נוטרדאם דה פרי",
    model: "LEGO Architecture 21061",
    description: "",
    image: "images/church.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
  {
    id: "volvo",
    title: "משאית מפרקית וולוו 6x6",
    model: "LEGO Technic 42114",
    description: "",
    image: "images/volvo.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
  {
    id: "amelia",
    title: "ספינת הקיטור Amelia",
    model: "LEGO Ideas 21356",
    description: "ספינת נהר עם גלגל משוטים שמסתובב כשמזיזים אותה.",
    image: "images/amelia.jpg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
];
