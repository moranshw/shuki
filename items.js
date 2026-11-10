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
     forSale     : true = מוצע למכירה (מופיע כפתור "הגשת הצעה"),  false = רק לתצוגה
     startPrice  : מחיר פתיחה בש"ח (מספר), או "" אם לא רוצים להציג מחיר
     sold        : true = נמכר (הכפתור נעלם ומופיע "נמכר")

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
    startPrice: "",
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
    sold: false,
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
    title: "Jeep",
    model: "Jeep",
    description: "",
    image: "images/jeep.jpeg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
   {
    id: "lamborgini",
    title: "Lamborgini",
    model: "Lamborgini",
    description: "",
    image: "images/lamborgini.jpeg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
   {
    id: "mclaren",
    title: "Mclaren",
    model: "Mclaren",
    description: "",
    image: "images/mclaren.jpeg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
   {
    id: "piano",
    title: "Piano",
    model: "Piano",
    description: "",
    image: "images/piano.jpeg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
   {
    id: "room",
    title: "Many items",
    model: "Many items",
    description: "",
    image: "images/room.jpeg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
   {
    id: "saloon",
    title: "Many items",
    model: "Many items",
    description: "",
    image: "images/saloon.jpeg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
   {
    id: "vitrina",
    title: "Many items",
    model: "Many items",
    description: "",
    image: "images/vitrina.jpeg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
   {
    id: "street",
    title: "Street",
    model: "Street",
    description: "",
    image: "images/street.jpg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
   {
    id: "mizhelet",
    title: "Extreme Adventure",
    model: "Lego Technic 42069",
    description: "",
    image: "images/mizhelet.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
   {
    id: "black_car",
    title: "The Batman Batmobile",
    model: "LEGO Technic 42127",
    description: "",
    image: "images/black_car.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
   {
    id: "mustang",
    title: "Ford mustang",
    model: "LEGO 10265",
    description: "",
    image: "images/mustang.jpeg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
   {
    id: "truck",
    title: "4x4 Mercedes-Benz Zetros Trial Truck",
    model: "LEGO Technic 42129",
    description: "",
    image: "images/truck.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
   {
    id: "buldozer",
    title: "Mechanical D11 Bulldozer (Remote Control Version)",
    model: "reobrix 22001",
    description: "",
    image: "images/buldozer.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
   {
    id: "stranger_things",
    title: "Sranger Things",
    model: "LEGO 11370",
    description: "",
    image: "images/stranger_things.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
   {
    id: "garden",
    title: "The botnical garden",
    model: "LEGO 21353",
    description: "",
    image: "images/garden.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
   {
    id: "power_truck",
    title: "Heavy-duty Tow Truck",
    model: "LEGO Technic 42128",
    description: "",
    image: "images/power_truck.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
   {
    id: "train",
    title: "The Orient Express Train",
    model: "LEGO Ideas 21344",
    description: "",
    image: "images/train.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
   {
    id: "bugati",
    title: "Bugatti Chiron",
    model: "LEGO Technic 42083",
    description: "",
    image: "images/bugati.jpeg",
    forSale: false,
    startPrice: "",
    sold: false,
  },
   {
    id: "motorcycle1",
    title: "BMW M 1000 RR",
    model: "LEGO Technic 42130",
    description: "",
    image: "images/motorcycle1.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
   {
    id: "motor_red",
    title: "Ducati Panigale V4 S",
    model: "LEGO Technic 42202",
    description: "",
    image: "images/motor_red.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
   {
    id: "church",
    title: "Notre-Dame de Paris",
    model: "LEGO Architecture 21061",
    description: "",
    image: "images/church.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
   {
    id: "volvo",
    title: "6x6 Volvo Articulated Hauler Truck",
    model: "LEGO Technic 42114",
    description: "",
    image: "images/volvo.jpeg",
    forSale: true,
    startPrice: "",
    sold: false,
  },
];
