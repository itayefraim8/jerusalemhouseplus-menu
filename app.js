/* =========
   MENU DATA (1..72 images + localized names)
   ========= */

const PHONE_WA = "972524738006"; // WhatsApp target (without +)
const CURRENCY = "GEL";

/* =========
   IMAGE HELPERS
   ========= */

// Load images with automatic extension fallback (webp/jpg/jpeg/png)
function setImageWithFallback(imgEl, basePath){
  const exts = ["webp","jpg","jpeg","png"];
  let i = 0;

  function tryNext(){
    if (i >= exts.length) return;
    imgEl.src = `${basePath}.${exts[i++]}`;
  }

  imgEl.onerror = tryNext;
  tryNext();
}

const categories = [
  { id: "pita", titleKey: "cat.pita" },
  { id: "khachapuri", titleKey: "cat.khachapuri" },
  { id: "salads", titleKey: "cat.salads" },
  { id: "mains", titleKey: "cat.mains" },
  { id: "fish", titleKey: "cat.fish" },
  { id: "sides", titleKey: "cat.sides" },
  { id: "soft", titleKey: "cat.soft" },
  { id: "hot", titleKey: "cat.hot" },
  { id: "alcohol", titleKey: "cat.alcohol" },
  { id: "desserts", titleKey: "cat.desserts" },
];

// Prices (1..72)
const prices = [
  25,25,25,35,              // 1-4 Pita
  50,50,50,50,50,50,50,     // 5-11 Khachapuri
  30,25,45,38,              // 12-16 Salads
  45,40,38,40,45,50,50,50,50,50, // 17-26 Mains
  40,40,40,40,35,35,45,65,65,80, // 27-36
  15,25,35,25,35,25,        // 37-42
  2,2,2,2,5,7,7,7,6,7,7,7,10,10,10,8,8,25,9,9,10, // 43-63
  15,                       // 64
  80,45,20,25,25,40,45,     // 65-71 (original 65-70 + one extra)
  6                          // 72 Black Coffee
].slice(0, 72);

// ✅ Fix specific new items prices (ensure correct):
// 71 Fruit Mix Juice = 8
prices[70] = 8;
// 72 Black Coffee = 10
prices[71] = 6;

// Build items list
const items = [
  // Pita (1-4)
  mkItem(1, "pita", "item.1"),
  mkItem(2, "pita", "item.2"),
  mkItem(3, "pita", "item.3"),
  mkItem(4, "pita", "item.4"),

  // Khachapuri (5-11)
  mkItem(5, "khachapuri", "item.5"),
  mkItem(6, "khachapuri", "item.6"),
  mkItem(7, "khachapuri", "item.7"),
  mkItem(8, "khachapuri", "item.8"),
  mkItem(9, "khachapuri", "item.9"),
  mkItem(10, "khachapuri", "item.10"),
  mkItem(11, "khachapuri", "item.11"),

  // Salads (12-16)
  mkItem(12, "salads", "item.12"),
  mkItem(13, "salads", "item.13"),
  mkItem(14, "salads", "item.14"),
  mkItem(15, "salads", "item.15"),
  mkItem(16, "salads", "item.16"),

  // Mains (17-32)
  mkItem(17, "mains", "item.17"),
  mkItem(18, "mains", "item.18"),
  mkItem(19, "mains", "item.19"),
  // ✅ Removed: item 20 (Beet Hummus) per request
  mkItem(21, "mains", "item.21"),
  mkItem(22, "mains", "item.22"),
  mkItem(23, "mains", "item.23"),
  mkItem(24, "mains", "item.24"),
  mkItem(25, "mains", "item.25"),
  mkItem(26, "mains", "item.26"),
  mkItem(27, "mains", "item.27"),
  mkItem(28, "mains", "item.28"),
  mkItem(29, "mains", "item.29"),
  mkItem(30, "mains", "item.30"),
  mkItem(31, "mains", "item.31"),
  mkItem(32, "mains", "item.32"),

  // Fish (33-35)
  mkItem(33, "fish", "item.33"),
  mkItem(34, "fish", "item.34"),
  mkItem(35, "fish", "item.35"),

  // Sides (36-46)
  mkItem(36, "sides", "item.36"),
  mkItem(37, "sides", "item.37"),
  mkItem(38, "sides", "item.38"),
  mkItem(39, "sides", "item.39"),
  mkItem(40, "sides", "item.40"),
  mkItem(41, "sides", "item.41"),
  mkItem(20, "sides", "item.20"), // ✅ Fried Cauliflower (placed after House Soup)
  mkItem(42, "sides", "item.42"),
  mkItem(43, "sides", "item.43"),
  mkItem(44, "sides", "item.44"),
  mkItem(45, "sides", "item.45"),
  mkItem(46, "sides", "item.46"),

  // Soft drinks (47-61) + ✅ new 71
  mkItem(47, "soft", "item.47"),
  mkItem(48, "soft", "item.48"),
  mkItem(49, "soft", "item.49"),
  mkItem(50, "soft", "item.50"),
  mkItem(51, "soft", "item.51"),
  mkItem(52, "soft", "item.52"),
  mkItem(53, "soft", "item.53"),
  mkItem(54, "soft", "item.54"),
  mkItem(55, "soft", "item.55"),
  mkItem(56, "soft", "item.56"),
  mkItem(57, "soft", "item.57"),
  mkItem(58, "soft", "item.58"),
  mkItem(59, "soft", "item.59"),
  mkItem(60, "soft", "item.60"),
  mkItem(61, "soft", "item.61"),
  mkItem(71, "soft", "item.71"), // ✅ Fruit Mix Juice

  // Hot drinks (62) + ✅ new 72
  mkItem(62, "hot", "item.62"),
  mkItem(72, "hot", "item.72"), // ✅ Black Coffee

  // Alcohol (63-68)
  mkItem(63, "alcohol", "item.63"),
  mkItem(64, "alcohol", "item.64"),
  mkItem(65, "alcohol", "item.65"),
  mkItem(66, "alcohol", "item.66"),
  mkItem(67, "alcohol", "item.67"),
  mkItem(68, "alcohol", "item.68"),

  // Desserts (69-70)
  mkItem(69, "desserts", "item.69"),
  mkItem(70, "desserts", "item.70"),
];

function mkItem(imageIndex, categoryId, nameKey){
  const price = prices[imageIndex - 1] ?? 0;
  return {
    id: imageIndex,
    categoryId,
    nameKey,
    price,
    image: `images/${imageIndex}.jpg`,
    descKey: `desc.${imageIndex}`,
  };
}

/* =========
   I18N
   ========= */

const i18n = {
  he: {
    dir: "rtl",
    "page.title":"תפריט מסעדה",
    "page.heading":"תפריט",
    "page.subheading":"בחרו קטגוריה והזמינו בקלות",

    "cat.pita":"בפיתה",
    "cat.khachapuri":"החצ'פורי שלנו",
    "cat.salads":"סלטים",
    "cat.mains":"מנות עיקריות",
    "cat.fish":"דגים",
    "cat.sides":"תוספות",
    "cat.soft":"שתייה קלה",
    "cat.hot":"שתייה חמה",
    "cat.alcohol":"שתייה חריפה",
    "cat.desserts":"קינוחים",

    "reviews.title":"לקוחות ממליצים",
    "reviews.subtitle":"10 המלצות שמתחלפות אוטומטית",
    "badge.gf":"יש אפשרות ללא גלוטן",

    "whatsapp.cta":"הזמנת מקום",
    // ✅ Updated WhatsApp auto message
    "whatsapp.message":"שלום וברוכים הבאים למסעדת הבית הירושלמי\nלהזמנת שולחן אנא ציינו:\nתאריך הגעה, שעת הגעה ומספר סועדים\nלכל שאלה, בקשה מיוחדת או עזרה נוספת — אנחנו כאן בשבילכם",


    "notice.service":"תשומת ליבכם: המחירים בתפריט אינם כוללים דמי שירות בשיעור של 10% אשר יתווספו לסכום הכולל של ההזמנה",
    "notice.pitaTime":"כל המנות בפיתה שלנו נמכרות עד השעה 20:00 או עד גמר המלאי",

    "footer.tagline":"טעמים שמרגישים בית",
    "footer.hoursTitle":"שעות פעילות",
    "footer.hours.sun":"יום ראשון 11:00 - 21:30",
    "footer.hours.mon":"יום שני 11:00 - 21:30",
    "footer.hours.tue":"יום שלישי 11:00 - 21:30",
    "footer.hours.wed":"יום רביעי 11:00 - 21:30",
    "footer.hours.thu":"יום חמישי 11:00 - 21:30",
    "footer.hours.fri":"יום שישי 11:00 עד כניסת שבת",
    "footer.hours.sat":"יום שבת סגור",
    "footer.hours.sunThu":"ראשון–חמישי: 11:00–21:30",

    "footer.contactTitle":"אנשי קשר להזמנת מקום",
    "footer.contact.ariel":"אריאל",
    "footer.contact.itzik":"איציק",
    "footer.addressTitle":"כתובת",
    "footer.mapTitle":"מיקום במפה",
    "footer.rights":"כל הזכויות שמורות",

    // Names 1..72
    "item.1":"פיתה סביח",
    "item.2":"פיתה חביתה",
    "item.3":"פיתה פלאפל",
    "item.4":"פיתה קציצות ירק",

    "item.5":"חצ'פורי שקשוקה",
    "item.6":"חצ'פורי חומוס מסבחה",
    "item.7":"חצ'פורי אצ'רולי",
    "item.8":"חצ'פורי פיצה",
    "item.9":"חצ'פורי סביח",
    "item.10":"חצ'פורי פלאפל",
    "item.11":"חצ'פורי אימרולי",

    "item.12":"סלט ישראלי",
    "item.13":"סלט גאורגי",
    "item.14":"סלט קיסר חלבי",
    "item.15":"סלט יווני",
    "item.16":"סלט טוסט",

    "item.17":"שקשוקה במחבת",
    "item.18":"חומוס מסבחה",
    "item.19":"חומוס פטריות",
    "item.20":"כרובית מטוגנת",
    "item.21":"פיצה מרגריטה",
    "item.22":"פסטה עגבניות",
    "item.23":"פסטה רוזה",
    "item.24":"פסטה שמנת פטריות",
    "item.25":"פסטה אגי'ו אוליו",
    "item.26":"בורקס גבינה",
    "item.27":"בורקס תפו\"א",
    "item.28":"בורקס פטריות",
    "item.29":"בורקס פיצה",
    "item.30":"טוסט",
    "item.31":"מלאווח",
    "item.32":"זיווה",

    "item.33":"פיש אנד צ'יפס",
    "item.34":"שווארמה דג",
    "item.35":"דג סיבס (לברק) שלם בתנור",

    "item.36":"כדורי פלאפל בצלחת",
    "item.37":"צ'יפס",
    "item.38":"קציצות ירק",
    "item.39":"אורז לבן",
    "item.40":"אורז מוקפץ עם ירקות",
    "item.41":"מרק הבית",
    "item.42":"קטשופ",
    "item.43":"מיונז",
    "item.44":"טחינה",
    "item.45":"סחוג חריף",
    "item.46":"פיתה",

    "item.47":"קולה",
    "item.48":"קולה זירו",
    "item.49":"ספרייט",
    "item.50":"מים",
    "item.51":"מים בטעם אפרסק",
    "item.52":"מים בטעם תפוח",
    "item.53":"סודה",
    "item.54":"לימונדה גאורגית בטעם לימון",
    "item.55":"לימונדה גאורגית בטעם אגס",
    "item.56":"לימונדה גאורגית בטעם וניל",
    "item.57":"מיץ רימונים",
    "item.58":"מיץ תפוח דובדבן",
    "item.59":"לימונענע גרוס",
    "item.60":"סודה מוגזת בטעם מנדרינה",
    "item.61":"סודה מוגזת בטעם אגס",
    "item.71":"מיץ מיקס פירות",

    "item.62":"תה",
    "item.72":"קפה שחור",

    "item.63":"בירה",
    "item.64":"בקבוק יין כשר",
    "item.65":"כוס מוחיטו",
    "item.66":"צ'ייסר ערק",
    "item.67":"כוס וודקה רד בול",
    "item.68":"צ'ייסר ייגר",

    "item.69":"רוזלך",
    "item.70":"סינבונים",

    // Descriptions (HE)
    "desc.1":"פיתה עם ביצה קשה, חציל מטוגן, תפו\"א וטחינה ביחד עם ירקות טריים: מלפפון, עגבניה וכרוב לבן. המנה נמכרת עד השעה 20:00 בערב/גמר המלאי.",
    "desc.2":"חביתה עם סלט ירקות: מלפפון, עגבניה וכרוב לבן (ניתן להוסיף טחינה/גבינה/רוטב הבית). המנה נמכרת עד השעה 20:00 בערב/גמר המלאי.",
    "desc.3":"פיתה עם כדורי פלאפל שמטוגנים במקום עם טחינה וירקות טריים: מלפפון, עגבניה וכרוב לבן. המנה נמכרת עד השעה 20:00 בערב/גמר המלאי.",
    "desc.4":"פיתה עם קציצות העשויות מירקות מגורדים טריים (גזר, קישוא ופטרוזיליה). המנה נמכרת עד השעה 20:00 בערב/גמר המלאי.",

    "desc.5":"המאפה הגאורגי המסורתי במילוי שקשוקת הבית שעשויה מעגבניות וביצים טריות.",
    "desc.6":"המאפה הגאורגי המסורתי במילוי חומוס שנטחן ונעשה במקום בתוספת של גרגירי חומוס.",
    "desc.7":"מאפה הדגל של גאורגיה במילוי גבינות ומעל ביצת עין וחמאה.",
    "desc.8":"המאפה הגאורגי המסורתי עם מילוי גבינה בקצוות ומילוי פיצה בפנים.",
    "desc.9":"המאפה הגאורגי המסורתי בשילוב עם סביח!! מכיל ביצה קשה, חציל מטוגן, תפו\"א וטחינה.",
    "desc.10":"המאפה הגאורגי המסורתי על מצע של טחינה וירקות טריים וכדורי פלאפל שמטוגנים במקום.",
    // ✅ 1) New Imeruli description
    "desc.11":"חצ'פורי אימרולי – מאפה גאורגי מסורתי במילוי גבינות משובחות, נאפה טרי עד הזהבה מושלמת.",

    "desc.12":"סלט עם ירקות טריים: מלפפון, עגבניה וכרוב חתוכים דק.",
    "desc.13":"סלט עם ירקות טריים חתוכים גס: מלפפון, עגבניה ובצל.",
    "desc.14":"סלט עם ירקות טריים: חסה, עגבניות שרי, קרוטונים בתוספת גבינה ורוטב קיסר הבית.",
    "desc.15":"סלט עם ירקות טריים: מלפפון, עגבניה וכרוב חתוכים דק בתוספת גבינה בולגרית.",
    "desc.16":"סלט עם ירקות טריים: מלפפון, עגבניה וכרוב חתוכים דק לצד טוסט מפנק (ניתן תוספת אחת ללא תשלום). טוסט הבית הירושלמי מגיע עם גבינה צהובה, רוטב פיצה, ביצה ותוספות לבחירה.",

    // ✅ 2) Shakshuka skillet bread extra price (5 GEL)
    "desc.17":"שקשוקת הבית שעשויה מעגבניות וביצים טריות לצד לחם בית טרי. לחם נוסף בתוספת תשלום - 5 לארי",
    // ✅ 4) Masabacha add pita extra 5
    "desc.18":"חומוס שנטחן ונעשה במקום בתוספת של גרגירי חומוס, מגיע עם 2 פיתות. כל פיתה נוספת בתוספת תשלום - 5 לארי",
    // ✅ 5) Mushroom hummus add pita extra 5
    "desc.19":"חומוס שנטחן ונעשה במקום בתוספת של פטריות לצד פיתות הבית. כל פיתה נוספת בתוספת תשלום - 5 לארי",
    "desc.20":"פרחי כרובית בציפוי פריך וזהוב, מטוגנים במקום ומוגשים חמים. נשנוש מושלם לפתיחה או כתוספת מפנקת.",

    "desc.21":"פיצה עם תוספות לבחירה: זיתים ירוקים/שחורים, פטריות, בצל, תירס, גמבה, פלפל חריף.",
    "desc.22":"פסטת הבית עם רוטב מעגבניות טריות.",
    "desc.23":"פסטת הבית עם רוטב מעגבניות טריות ושמנת.",
    "desc.24":"\"אחד לדור\" - פסטה עם רוטב שמנת ופטריות טריות.",
    "desc.25":"פסטה ברוטב שמן זית, שום, פלפל ומלח. ניתן לעשות את המנה מעט חריפה.",

    "desc.26":"4 בורקסים בינוניים במילוי גבינה לצד סלט ישראלי קטן.",
    "desc.27":"4 בורקסים בינוניים במילוי תפוח אדמה לצד סלט ישראלי קטן.",
    "desc.28":"4 בורקסים בינוניים במילוי תפוח אדמה ופטריות לצד סלט ישראלי קטן.",
    "desc.29":"4 בורקסים בינוניים במילוי פיצה לצד סלט ישראלי קטן.",

    // ✅ 6) New Toast description
    "desc.30":"טוסט הבית הירושלמי עם גבינה צהובה, רוטב פיצה, ביצה (ניתן תוספת אחת ללא תשלום)",

    // ✅ 7) Malawach new description
    "desc.31":"בצק עלים תימני מטוגן בעבודת יד, פריך מבחוץ ורך מבפנים. מוגש חם ומפנק, עם ביצה ורסק בדיוק כמו בבית.",
    // ✅ 8) Ziva new description
    "desc.32":"מאפה חמים מבצק עלים דק במילוי גבינות עשירות, נאפה עד הזהבה מושלמת. שילוב מנצח של פריכות ונימוחות בכל ביס. מוגש עם עם ביצה ורסק.",

    // 9) Fish & Chips already correct
    "desc.33":"5 דגי סלמון מצופים בטמפורה בתוספת צ׳יפס.",
    "desc.34":"שווארמה של דג פורל בתוספת של צ'יפס/ סלט ירקות. ניתן להוסיף פיתה בתוספת 5 לארי.",
    "desc.35":"דג סיבס (לברק) שלם בתנור בתוספת של צ'יפס/סלט.",

    "desc.36":"צלחת עם 5 כדורי פלאפל. לא מותאם לצליאק, מנה טבעונית.",

    // ✅ 10) Fries new description
    "desc.37":"צ׳יפס זהוב ופריך בתיבול מדויק של פפריקה ומלח, מוגש חם עם צלוחית קטשופ בצד. ניתן לבקש ללא תיבול בעת ההזמנה. צלוחית קטשופ נוספת בתוספת תשלום.",

    // ✅ 11) Veggie patties (sides) = 5 patties
    "desc.38":"5 קציצות העשויות מירקות מגורדים טריים (גזר, קישוא) ופטרוזיליה).",

    // ✅ 12) White rice description
    "desc.39":"אורז אוורירי ורך, מבושל בדיוק במידה ומוגש חם. תוספת קלאסית שמתאימה לכל מנה.",

    "desc.40":"אורז מוקפץ עם מגוון ירקות העונה: גזר, בצל, כרוב לבן, פטריות. המנה מגיעה עם ביצה מטוגנת / ניתן ללא ביצה.",
    "desc.41":"מרק הבית מידי יום בהשראת חומרי הגלם הטריים והעונתיים ביותר. שאלו את המלצר על מרק היום!",

    "desc.42":"",
    "desc.43":"",
    "desc.44":"",
    "desc.45":"",
    "desc.46":"",
    "desc.47":"",
    "desc.48":"",
    "desc.49":"",
    "desc.50":"",
    "desc.51":"",
    "desc.52":"",
    "desc.53":"",
    "desc.54":"",
    "desc.55":"",
    "desc.56":"",
    "desc.57":"",
    "desc.58":"",
    "desc.59":"",
    "desc.60":"",
    "desc.61":"",
    "desc.62":"",
    "desc.63":"",
    "desc.64":"",
    "desc.65":"",
    "desc.66":"",
    "desc.67":"",
    "desc.68":"",

    // ✅ 15) Rugelach description
    "desc.69":"מאפי בצק רך מגולגלים במילוי שוקולד עשיר שנעשה במקום, אפוי עד רכות מושלמת. ביס נוסטלגי ומתוק שקשה לעצור.",
    // ✅ 16) Cinnabons description
    "desc.70":"שבלולי בצק רכים ואווריריים במילוי קינמון וסוכר חום, נאפים טריים ומצופים בסוכר/זיגוג מתוק ומלטף. קינוח ממכר במיוחד!",

    // New drinks
    "desc.71":"",
    "desc.72":"",

    // Khachapuri GF
    "opt.5.gf":"חצ'פורי שקשוקה ללא גלוטן",
    "opt.6.gf":"חצ'פורי חומוס מסבחה ללא גלוטן",
    "opt.7.gf":"חצ'פורי אצ'רולי ללא גלוטן",
    "opt.8.gf":"חצ'פורי פיצה ללא גלוטן",
    "opt.9.gf":"חצ'פורי סביח ללא גלוטן",
    "opt.10.gf":"חצ'פורי פלאפל ללא גלוטן",
    "opt.11.gf":"חצ'פורי אימרולי ללא גלוטן",

    // Pizza (21)
    "opt.21.half":"פיצה עם תוספת חצי מגש",
    "opt.21.one":"פיצה עם תוספת",
    "opt.21.two":"פיצה עם 2 תוספות",
    "opt.21.gf":"פיצה מרגריטה ללא גלוטן",

    // Pastas GF
    "opt.22.gf":"פסטה עגבניות ללא גלוטן",
    "opt.23.gf":"פסטה רוזה ללא גלוטן",
    "opt.24.gf":"פסטה שמנת פטריות ללא גלוטן",
    "opt.25.gf":"פסטה אג'יו אוליו ללא גלוטן",

    // ✅ Malawach + Ziva GF (+5)
    "opt.31.gf":"מלאווח ללא גלוטן",
    "opt.32.gf":"זיווה ללא גלוטן",

    "opt.base":"רגיל",
  },

  en: {
    dir: "ltr",
    "page.title":"Restaurant Menu",
    "page.heading":"Menu",
    "page.subheading":"Choose a category and order easily",

    "cat.pita":"In Pita",
    "cat.khachapuri":"Our Khachapuri",
    "cat.salads":"Salads",
    "cat.mains":"Main Dishes",
    "cat.fish":"Fish",
    "cat.sides":"Sides",
    "cat.soft":"Soft Drinks",
    "cat.hot":"Hot Drinks",
    "cat.alcohol":"Alcohol",
    "cat.desserts":"Desserts",

    "reviews.title":"Customer Reviews",
    "reviews.subtitle":"10 reviews rotating automatically",
    "badge.gf":"Gluten-free option available",

    "whatsapp.cta":"Reserve a Table",
    // ✅ Updated WhatsApp auto message (EN)
"whatsapp.message":"Hello and welcome to Jerusalem House Restaurant\nTo reserve a table, please provide:\nArrival date, time, and number of guests\nFor any questions or special requests — we are here to help you",
    "":"Dish description will be added later.",

    "notice.service":"Please note: menu prices do not include a 10% service charge, which will be added to the final bill.",
    "notice.pitaTime":"All our pita dishes are available until 20:00 or while stock lasts.",

    "footer.tagline":"Flavors that feel home",
    "footer.hoursTitle":"Opening Hours",
    "footer.hours.sun":"Sunday 11:00 - 21:30",
    "footer.hours.mon":"Monday 11:00 - 21:30",
    "footer.hours.tue":"Tuesday 11:00 - 21:30",
    "footer.hours.wed":"Wednesday 11:00 - 21:30",
    "footer.hours.thu":"Thursday 11:00 - 21:30",
    "footer.hours.fri":"Friday 11:00 until Shabbat begins",
    "footer.hours.sat":"Saturday Closed",
    "footer.hours.sunThu":"Sun–Thu: 11:00–21:30",

    "footer.contactTitle":"Contacts for Reservations",
    "footer.contact.ariel":"Ariel",
    "footer.contact.itzik":"Itzik",
    "footer.addressTitle":"Address",
    "footer.mapTitle":"Map Location",
    "footer.rights":"All rights reserved",

    "item.1":"Sabich Pita",
    "item.2":"Omelet Pita",
    "item.3":"Falafel Pita",
    "item.4":"Veggie Patties Pita",

    "item.5":"Shakshuka Khachapuri",
    "item.6":"Hummus Masabacha Khachapuri",
    "item.7":"Adjaruli Khachapuri",
    "item.8":"Pizza Khachapuri",
    "item.9":"Sabich Khachapuri",
    "item.10":"Falafel Khachapuri",
    "item.11":"Imeruli Khachapuri",

    "item.12":"Israeli Salad",
    "item.13":"Georgian Salad",
    "item.14":"Dairy Caesar Salad",
    "item.15":"Greek Salad",
    "item.16":"Toast Salad",

    "item.17":"Skillet Shakshuka",
    "item.18":"Hummus Masabacha",
    "item.19":"Mushroom Hummus",
    "item.21":"Margherita Pizza",
    "item.22":"Tomato Pasta",
    "item.23":"Rose Pasta",
    "item.24":"Creamy Mushroom Pasta",
    "item.25":"Aglio e Olio Pasta",
    "item.26":"Cheese Bourekas",
    "item.27":"Potato Bourekas",
    "item.28":"Potato & Mushroom Bourekas",
    "item.29":"Pizza Bourekas",
    "item.30":"Toast",
    "item.31":"Malawach",
    "item.32":"Ziva",

    "item.33":"Fish & Chips",
    "item.34":"Fish Shawarma",
    "item.35":"Whole Sea Bass (Oven)",

    "item.36":"Falafel Balls Plate",
    "item.37":"Fries",
    "item.38":"Veggie Patties",
    "item.39":"White Rice",
    "item.40":"Stir-Fried Rice w/ Veggies",
    "item.41":"House Soup",
    "item.20":"Fried Cauliflower",
    "item.42":"Ketchup",
    "item.43":"Mayonnaise",
    "item.44":"Tahini",
    "item.45":"Spicy Zhug",
    "item.46":"Pita",

    "item.47":"Coca-Cola",
    "item.48":"Coke Zero",
    "item.49":"Sprite",
    "item.50":"Water",
    "item.51":"Peach Flavored Water",
    "item.52":"Apple Flavored Water",
    "item.53":"Soda",
    "item.54":"Georgian Lemonade (Lemon)",
    "item.55":"Georgian Lemonade (Pear)",
    "item.56":"Georgian Lemonade (Vanilla)",
    "item.57":"Pomegranate Juice",
    "item.58":"Apple-Cherry Juice",
    "item.59":"Frozen Lemon-Mint",
    "item.60":"Sparkling Soda (Mandarin)",
    "item.61":"Sparkling Soda (Pear)",
    "item.71":"Fruit Mix Juice",

    "item.62":"Tea",
    "item.72":"Black Coffee",

    "item.63":"Beer",
    "item.64":"Kosher Wine Bottle",
    "item.65":"Mojito (Glass)",
    "item.66":"Arak (Shot)",
    "item.67":"Vodka Red Bull (Glass)",
    "item.68":"Jäger (Shot)",

    "item.69":"Rugelach",
    "item.70":"Cinnabons",

    // Descriptions (EN)
    "desc.1":"Pita with hard-boiled egg, fried eggplant, potato, and tahini, with fresh vegetables: cucumber, tomato, and white cabbage. Sold until 20:00 or while stock lasts.",
    "desc.2":"Omelet with a fresh vegetable salad: cucumber, tomato, and white cabbage (you can add tahini / cheese / house sauce). Sold until 20:00 or while stock lasts.",
    "desc.3":"Pita with freshly fried falafel balls, tahini, and fresh vegetables: cucumber, tomato, and white cabbage. Sold until 20:00 or while stock lasts.",
    "desc.4":"Pita with patties made from freshly grated vegetables (carrot, zucchini, parsley). Sold until 20:00 or while stock lasts.",

    "desc.5":"Traditional Georgian pastry filled with our house shakshuka made from tomatoes and fresh eggs.",
    "desc.6":"Traditional Georgian pastry filled with freshly made hummus, topped with chickpeas.",
    "desc.7":"Georgia’s signature pastry filled with cheeses, topped with a sunny-side-up egg and butter.",
    "desc.8":"Traditional Georgian pastry with cheese on the edges and pizza filling inside.",
    "desc.9":"Traditional Georgian pastry with Sabich: hard-boiled egg, fried eggplant, potato, and tahini.",
    "desc.10":"Traditional Georgian pastry on a bed of tahini and fresh vegetables, with freshly fried falafel balls.",
    "desc.11":"Imeruli Khachapuri — a traditional Georgian pastry filled with premium cheeses, baked fresh to a perfect golden finish.",

    "desc.12":"Fresh salad with finely chopped cucumber, tomato, and cabbage.",
    "desc.13":"Fresh salad with roughly chopped cucumber, tomato, and onion.",
    "desc.14":"Fresh salad with lettuce, cherry tomatoes, croutons, cheese, and our house Caesar dressing.",
    "desc.15":"Fresh salad with finely chopped cucumber, tomato, and cabbage, with Bulgarian cheese.",
    "desc.16":"Fresh salad with finely chopped cucumber, tomato, and cabbage, served with a hearty toast (one topping included free). Jerusalem house toast includes yellow cheese, pizza sauce, egg, and toppings of your choice.",

    "desc.17":"Our house shakshuka (tomatoes and fresh eggs) served with fresh house bread. Extra bread: +5 GEL.",
    "desc.18":"Freshly made hummus topped with chickpeas, served with 2 pitas. Each additional pita: +5 GEL.",
    "desc.19":"Freshly made hummus with mushrooms, served with our house pitas. Each additional pita: +5 GEL.",
    "desc.20":"Crispy golden cauliflower florets, fried fresh and served hot. A perfect snack to start or a satisfying side.",
    "desc.21":"Pizza with toppings of your choice: green/black olives, mushrooms, onion, corn, bell pepper, hot pepper.",
    "desc.22":"House pasta with fresh tomato sauce.",
    "desc.23":"House pasta with fresh tomato sauce and cream.",
    "desc.24":"“One of a kind” — pasta with creamy sauce and fresh mushrooms.",
    "desc.25":"Pasta with olive oil, garlic, pepper, and salt. Can be made slightly spicy.",

    "desc.26":"4 medium cheese bourekas served with a small Israeli salad.",
    "desc.27":"4 medium potato bourekas served with a small Israeli salad.",
    "desc.28":"4 medium potato & mushroom bourekas served with a small Israeli salad.",
    "desc.29":"4 medium pizza bourekas served with a small Israeli salad.",
    "desc.30":"Jerusalem House toast with yellow cheese, pizza sauce, and egg (one topping can be added for free).",

    "desc.31":"Handmade Yemeni-style fried puff pastry — crispy outside and soft inside. Served hot and comforting, with egg and tomato spread, just like home.",
    "desc.32":"Warm flaky pastry made from thin puff layers, filled with rich cheeses and baked to a perfect golden finish. A winning mix of crispness and softness in every bite. Served with egg and tomato spread.",

    "desc.33":"5 pieces of salmon in tempura with fries.",
    "desc.34":"Trout fish shawarma served with fries / vegetable salad. You can add pita for an extra 5 GEL.",
    "desc.35":"Whole sea bass (oven-baked) served with fries / salad.",
    "desc.36":"Plate with 5 falafel balls. Not suitable for celiac. Vegan dish.",
    "desc.37":"Golden, crispy fries seasoned perfectly with paprika and salt, served hot with a ketchup dish on the side. You can request no seasoning when ordering. Extra ketchup dish costs extra.",
    "desc.38":"5 patties made from freshly grated vegetables (carrot, zucchini) and parsley).",
    "desc.39":"Fluffy, tender white rice, cooked just right and served hot. A classic side that pairs well with any dish.",
    "desc.40":"Stir-fried rice with seasonal vegetables: carrot, onion, white cabbage, mushrooms. Served with a fried egg / can be without egg.",
    "desc.41":"House soup inspired daily by the freshest seasonal ingredients. Ask your waiter about today’s soup!",

    "desc.42":"",
    "desc.43":"",
    "desc.44":"",
    "desc.45":"",
    "desc.46":"",
    "desc.47":"",
    "desc.48":"",
    "desc.49":"",
    "desc.50":"",
    "desc.51":"",
    "desc.52":"",
    "desc.53":"",
    "desc.54":"",
    "desc.55":"",
    "desc.56":"",
    "desc.57":"",
    "desc.58":"",
    "desc.59":"",
    "desc.60":"",
    "desc.61":"",
    "desc.62":"",
    "desc.63":"",
    "desc.64":"",
    "desc.65":"",
    "desc.66":"",
    "desc.67":"",
    "desc.68":"",
    "desc.69":"Soft, rolled pastries filled with rich house-made chocolate, baked until perfectly tender. A nostalgic sweet bite that’s hard to stop.",
    "desc.70":"Soft, airy cinnamon rolls filled with cinnamon and brown sugar, baked fresh and topped with a sweet glaze. Seriously addictive!",
    "desc.71":"",
    "desc.72":"",

    "opt.5.gf":"Shakshuka Khachapuri (Gluten-Free)",
    "opt.6.gf":"Hummus Masabacha Khachapuri (Gluten-Free)",
    "opt.7.gf":"Adjaruli Khachapuri (Gluten-Free)",
    "opt.8.gf":"Pizza Khachapuri (Gluten-Free)",
    "opt.9.gf":"Sabich Khachapuri (Gluten-Free)",
    "opt.10.gf":"Falafel Khachapuri (Gluten-Free)",
    "opt.11.gf":"Imeruli Khachapuri (Gluten-Free)",

    "opt.21.half":"Pizza + Half Toppings",
    "opt.21.one":"Pizza + 1 Topping",
    "opt.21.two":"Pizza + 2 Toppings",
    "opt.21.gf":"Margherita Pizza (Gluten-Free)",

    "opt.22.gf":"Tomato Pasta (Gluten-Free)",
    "opt.23.gf":"Rose Pasta (Gluten-Free)",
    "opt.24.gf":"Creamy Mushroom Pasta (Gluten-Free)",
    "opt.25.gf":"Aglio e Olio Pasta (Gluten-Free)",

    "opt.31.gf":"Malawach (Gluten-Free) (+5)",
    "opt.32.gf":"Ziva (Gluten-Free) (+5)",

    "opt.base":"Regular",
  },

  ru: {
    dir: "ltr",
    "page.title":"Меню ресторана",
    "page.heading":"Меню",
    "page.subheading":"Выберите категорию и закажите легко",

    "cat.pita":"В пите",
    "cat.khachapuri":"Наш хачапури",
    "cat.salads":"Салаты",
    "cat.mains":"Основные блюда",
    "cat.fish":"Рыба",
    "cat.sides":"Добавки",
    "cat.soft":"Безалкогольные напитки",
    "cat.hot":"Горячие напитки",
    "cat.alcohol":"Алкоголь",
    "cat.desserts":"Десерты",

    "reviews.title":"Отзывы гостей",
    "reviews.subtitle":"10 отзывов автоматически",
    "badge.gf":"Есть вариант без глютена",

    "whatsapp.cta":"Забронировать стол",
    // ✅ Updated WhatsApp auto message (RU)
"whatsapp.message":"Здравствуйте и добро пожаловать в ресторан Jerusalem House\nДля бронирования стола укажите:\nДату, время и количество гостей\nПо любым вопросам и особым запросам — мы всегда готовы помочь",
    "":"Описание блюда будет добавлено позже.",

    "notice.service":"Обратите внимание: цены в меню не включают сервисный сбор 10%, который будет добавлен к итоговой сумме заказа.",
    "notice.pitaTime":"Все блюда в пите доступны до 20:00 или пока есть в наличии.",

    "footer.tagline":"Вкусы, дома",
    "footer.hoursTitle":"Часы работы",
    "footer.hours.sun":"Воскресенье 11:00 - 21:30",
    "footer.hours.mon":"Понедельник 11:00 - 21:30",
    "footer.hours.tue":"Вторник 11:00 - 21:30",
    "footer.hours.wed":"Среда 11:00 - 21:30",
    "footer.hours.thu":"Четверг 11:00 - 21:30",
    "footer.hours.fri":"Пятница 11:00 до начала шаббата",
    "footer.hours.sat":"Суббота закрыто",
    "footer.hours.sunThu":"Вс–Чт: 11:00–21:30",

    "footer.contactTitle":"Контакты для брони",
    "footer.contact.ariel":"Ариэль",
    "footer.contact.itzik":"Ицик",
    "footer.addressTitle":"Адрес",
    "footer.mapTitle":"Мы на карте",
    "footer.rights":"Все права защищены",

    "item.1":"Пита сабих",
    "item.2":"Пита с омлетом",
    "item.3":"Пита фалафель",
    "item.4":"Пита с овощными котлетами",
    "item.5":"Хачапури шакшука",
    "item.6":"Хачапури с хумусом масабаха",
    "item.7":"Хачапури аджарули",
    "item.8":"Хачапури пицца",
    "item.9":"Хачапури сабих",
    "item.10":"Хачапури фалафель",
    "item.11":"Хачапури имерули",
    "item.12":"Израильский салат",
    "item.13":"Грузинский салат",
    "item.14":"Салат Цезарь (молочный)",
    "item.15":"Греческий салат",
    "item.16":"Салат тост",
    "item.17":"Шакшука на сковороде",
    "item.18":"Хумус масабаха",
    "item.19":"Хумус с грибами",
    "item.21":"Пицца Маргарита",
    "item.22":"Паста томатная",
    "item.23":"Паста розе",
    "item.24":"Паста сливочно-грибная",
    "item.25":"Паста алио олио",
    "item.26":"Бурекас с сыром",
    "item.27":"Бурекас с картофелем",
    "item.28":"Бурекас картофель-грибы",
    "item.29":"Бурекас пицца",
    "item.30":"Тост",
    "item.31":"Малауах",
    "item.32":"Зива",
    "item.33":"Фиш-энд-чипс",
    "item.34":"Шаурма из рыбы",
    "item.35":"Сибас целиком (духовка)",
    "item.36":"Фалафель (тарелка)",
    "item.37":"Картофель фри",
    "item.38":"Овощные котлеты",
    "item.39":"Белый рис",
    "item.40":"Жареный рис с овощами",
    "item.41":"Суп дня",
    "item.20":"Жареная цветная капуста",
    "item.42":"Кетчуп",
    "item.43":"Майонез",
    "item.44":"Тахини",
    "item.45":"Острый схуг",
    "item.46":"Пита",
    "item.47":"Кола",
    "item.48":"Кола зеро",
    "item.49":"Спрайт",
    "item.50":"Вода",
    "item.51":"Вода (персик)",
    "item.52":"Вода (яблоко)",
    "item.53":"Содовая",
    "item.54":"Грузинская лимонада (лимон)",
    "item.55":"Грузинская лимонада (груша)",
    "item.56":"Грузинская лимонада (ваниль)",
    "item.57":"Гранатовый сок",
    "item.58":"Сок яблоко-вишня",
    "item.59":"Замороженный лимон-мята",
    "item.60":"Газировка (мандарин)",
    "item.61":"Газировка (груша)",
    "item.71":"Фруктовый микс (сок)",

    "item.62":"Чай",
    "item.72":"Чёрный кофе",

    "item.63":"Пиво",
    "item.64":"Кошерное вино (бутылка)",
    "item.65":"Мохито (стакан)",
    "item.66":"Арак (шот)",
    "item.67":"Водка-Red Bull (стакан)",
    "item.68":"Jäger (шот)",
    "item.69":"Ругелах",
    "item.70":"Синнабоны",

    "desc.1":"Пита с яйцом вкрутую, жареным баклажаном, картофелем и тахини, с свежими овощами: огурец, помидор и белая капуста. Продаётся до 20:00 или пока есть в наличии.",
    "desc.2":"Омлет с овощным салатом: огурец, помидор и белая капуста (можно добавить тахини / сыр / фирменный соус). Продаётся до 20:00 или пока есть в наличии.",
    "desc.3":"Пита со свежими фалафельными шариками, тахини и свежими овощами: огурец, помидор и белая капуста. Продаётся до 20:00 или пока есть в наличии.",
    "desc.4":"Пита с котлетами из свеженатёртых овощей (морковь, кабачок, петрушка). Продаётся до 20:00 или пока есть в наличии.",
    "desc.5":"Традиционная грузинская выпечка с домашней шакшукой из томатов и свежих яиц.",
    "desc.6":"Традиционная грузинская выпечка с хумусом, приготовленным на месте, с нутом.",
    "desc.7":"Фирменная грузинская выпечка с сыром, сверху яйцо-глазунья и масло.",
    "desc.8":"Традиционная грузинская выпечка: сыр по краям и начинка «пицца» внутри.",
    "desc.9":"Традиционная грузинская выпечка в стиле сабих: яйцо вкрутую, жареный баклажан, картофель и тахини.",
    "desc.10":"Традиционная грузинская выпечка на тахини и свежих овощах, со свежими фалафельными шариками.",
    "desc.11":"Хачапури имерули — традиционная грузинская выпечка с отборными сырами, выпекается свежей до идеальной золотистой корочки.",

    "desc.12":"Свежий салат: мелко нарезанные огурец, помидор и капуста.",
    "desc.13":"Свежий салат: крупно нарезанные огурец, помидор и лук.",
    "desc.14":"Свежий салат: салат-латук, черри, сухарики, сыр и домашний соус «Цезарь».",
    "desc.15":"Свежий салат: мелко нарезанные огурец, помидор и капуста, с болгарским сыром.",
    "desc.16":"Свежий салат: мелко нарезанные огурец, помидор и капуста, с сытным тостом (одна добавка бесплатно). Домашний тост: жёлтый сыр, соус для пиццы, яйцо и добавки на выбор.",

    "desc.17":"Домашняя шакшука (томаты и свежие яйца) с свежим хлебом. Дополнительный хлеб: +5 GEL.",
    "desc.18":"Хумус, приготовленный на месте, с нутом, подаётся с 2 питами. Каждая дополнительная пита: +5 GEL.",
    "desc.19":"Домашний хумус с грибами, с питой. Каждая дополнительная пита: +5 GEL.",
    "desc.20":"Хрустящие золотистые соцветия цветной капусты в панировке, жарятся на месте и подаются горячими. Идеально как закуска или как сытный гарнир.",
    "desc.21":"Пицца с добавками на выбор: зелёные/чёрные оливки, грибы, лук, кукуруза, болгарский перец, острый перец.",
    "desc.22":"Домашняя паста с соусом из свежих томатов.",
    "desc.23":"Домашняя паста с соусом из свежих томатов и сливками.",
    "desc.24":"«Один на поколение» — паста со сливочным соусом и свежими грибами.",
    "desc.25":"Паста с оливковым маслом, чесноком, перцем и солью. Можно сделать слегка острой.",

    "desc.26":"4 средних бурекаса с сыром + маленький израильский салат.",
    "desc.27":"4 средних бурекаса с картофелем + маленький израильский салат.",
    "desc.28":"4 средних бурекаса с картофелем и грибами + маленький израильский салат.",
    "desc.29":"4 средних бурекаса «пицца» + маленький израильский салат.",
    "desc.30":"Домашний тост Jerusalem House: жёлтый сыр, соус для пиццы и яйцо (одна добавка бесплатно).",

    "desc.31":"Домашний малауах (йеменское слоёное тесто), жареный вручную — хрустящий снаружи и мягкий внутри. Подаётся горячим, с яйцом и томатной пастой, как дома.",
    "desc.32":"Тёплая выпечка из тонкого слоёного теста с богатой сырной начинкой, запечённая до золотистой корочки. Идеальное сочетание хруста и нежности в каждом кусочке. Подаётся с яйцом и томатной пастой.",

    "desc.33":"5 кусочков лосося в темпуре с картофелем фри.",
    "desc.34":"Рыбная шаурма из форели с картофелем фри / овощным салатом. Можно добавить питу за 5 GEL.",
    "desc.35":"Сибас целиком в духовке с картофелем фри / салатом.",
    "desc.36":"Тарелка с 5 фалафельными шариками. Не подходит при целиакии. Веганское блюдо.",
    "desc.37":"Золотистая хрустящая картошка фри, приправленная паприкой и солью, подаётся горячей с кетчупом. Можно попросить без приправ. Дополнительный кетчуп — за доплату.",
    "desc.38":"5 котлет из свеженатёртых овощей (морковь, кабачок) и петрушки).",
    "desc.39":"Воздушный мягкий белый рис, приготовленный идеально и подаётся горячим. Классический гарнир к любому блюду.",
    "desc.40":"Жареный рис с сезонными овощами: морковь, лук, белая капуста, грибы. С жареным яйцом / можно без яйца.",
    "desc.41":"Домашний суп каждый день из самых свежих сезонных ингредиентов. Спросите официанта о супе дня!",

    "desc.42":"",
    "desc.43":"",
    "desc.44":"",
    "desc.45":"",
    "desc.46":"",
    "desc.47":"",
    "desc.48":"",
    "desc.49":"",
    "desc.50":"",
    "desc.51":"",
    "desc.52":"",
    "desc.53":"",
    "desc.54":"",
    "desc.55":"",
    "desc.56":"",
    "desc.57":"",
    "desc.58":"",
    "desc.59":"",
    "desc.60":"",
    "desc.61":"",
    "desc.62":"",
    "desc.63":"",
    "desc.64":"",
    "desc.65":"",
    "desc.66":"",
    "desc.67":"",
    "desc.68":"",
    "desc.69":"Нежные рулетики из мягкого теста с богатой шоколадной начинкой, приготовленной на месте, запечённые до идеальной мягкости. Ностальгический сладкий кусочек, от которого трудно остановиться.",
    "desc.70":"Мягкие воздушные синнабоны с корицей и коричневым сахаром, выпекаются свежими и покрываются сладкой глазурью. Очень addictive!",
    "desc.71":"",
    "desc.72":"",

    "opt.5.gf":"Хачапури шакшука (без глютена)",
    "opt.6.gf":"Хачапури хумус масабаха (без глютена)",
    "opt.7.gf":"Хачапури аджарули (без глютена)",
    "opt.8.gf":"Хачапури пицца (без глютена)",
    "opt.9.gf":"Хачапури сабих (без глютена)",
    "opt.10.gf":"Хачапури фалафель (без глютена)",
    "opt.11.gf":"Хачапури имерули (без глютена)",

    "opt.21.half":"Пицца + половина добавок",
    "opt.21.one":"Пицца + 1 добавка",
    "opt.21.two":"Пицца + 2 добавки",
    "opt.21.gf":"Пицца Маргарита (без глютена)",

    "opt.22.gf":"Паста томатная (без глютена)",
    "opt.23.gf":"Паста розе (без глютена)",
    "opt.24.gf":"Паста сливочно-грибная (без глютена)",
    "opt.25.gf":"Паста алио олио (без глютена)",

    "opt.31.gf":"Малауах (без глютена) (+5)",
    "opt.32.gf":"Зива (без глютена) (+5)",

    "opt.base":"Обычный",
  },

  ka: {
    dir: "ltr",
    "page.title":"რესტორნის მენიუ",
    "page.heading":"მენიუ",
    "page.subheading":"აირჩიეთ კატეგორია და მარტივად შეუკვეთეთ",

    "cat.pita":"პიტაში",
    "cat.khachapuri":"ჩვენი ხაჭაპური",
    "cat.salads":"სალათები",
    "cat.mains":"ძირითადი კერძები",
    "cat.fish":"თევზი",
    "cat.sides":"დანამატები",
    "cat.soft":"გამაგრილებელი სასმელები",
    "cat.hot":"ცხელი სასმელები",
    "cat.alcohol":"ალკოჰოლი",
    "cat.desserts":"დესერტები",
    "badge.gf":"შესაძლებელია უგლუტენო ვარიანტი",

    "reviews.title":"კლიენტების შეფასებები",
    "reviews.subtitle":"10 შეფასება ავტომატურად",

    "whatsapp.cta":"მაგიდის დაჯავშნა",
    // ✅ Updated WhatsApp auto message (KA)
"whatsapp.message":"მოგესალმებით და კეთილი იყოს თქვენი მობრძანება Jerusalem House რესტორანში\nმაგიდის დასაჯავშნად გთხოვთ მიუთითოთ:\nჩამოსვლის თარიღი, დრო და სტუმრების რაოდენობა\nნებისმიერი კითხვის ან განსაკუთრებული მოთხოვნის შემთხვევაში — მზად ვართ დაგეხმაროთ",
    "":"კერძის აღწერა მოგვიანებით დაემატება.",

    "notice.service":"გთხოვთ გაითვალისწინოთ: მენიუს ფასებში არ შედის 10% მომსახურების საფასური, რომელიც დაემატება შეკვეთის საბოლოო თანხას.",
    "notice.pitaTime":"ყველა ჩვენი პიტას კერძი იყიდება 20:00-მდე ან მარაგის ამოწურვამდე.",

    "footer.tagline":"არომატები, რომლებიც თავს სახლშივით გრძნობთ",
    "footer.hoursTitle":"სამუშაო საათები",
    "footer.hours.sun":"კვირა 11:00 - 21:30",
    "footer.hours.mon":"ორშაბათი 11:00 - 21:30",
    "footer.hours.tue":"სამშაბათი 11:00 - 21:30",
    "footer.hours.wed":"ოთხშაბათი 11:00 - 21:30",
    "footer.hours.thu":"ხუთშაბათი 11:00 - 21:30",
    "footer.hours.fri":"პარასკევი 11:00 შაბათის დაწყებამდე",
    "footer.hours.sat":"შაბათი დახურულია",
    "footer.hours.sunThu":"კვი–ხუთ: 11:00–21:30",

    "footer.contactTitle":"კონტაქტი დაჯავშნისთვის",
    "footer.contact.ariel":"არიელი",
    "footer.contact.itzik":"იციკი",
    "footer.addressTitle":"მისამართი",
    "footer.mapTitle":"რუკა",
    "footer.rights":"ყველა უფლება დაცულია",

    "item.1":"საბიხი პიტაში",
    "item.2":"ომლეტი პიტაში",
    "item.3":"ფალაფელი პიტაში",
    "item.4":"ბოსტნეულის კატლეტი პიტაში",
    "item.5":"შაკშუკა ხაჭაპური",
    "item.6":"ჰუმუსი მასაბახა ხაჭაპური",
    "item.7":"აჭარული ხაჭაპური",
    "item.8":"პიცა ხაჭაპური",
    "item.9":"საბიხი ხაჭაპური",
    "item.10":"ფალაფელი ხაჭაპური",
    "item.11":"იმერული ხაჭაპური",
    "item.12":"ისრაელის სალათი",
    "item.13":"ქართული სალათი",
    "item.14":"კეისრის სალათი (რძის)",
    "item.15":"ბერძნული სალათი",
    "item.16":"ტოსტის სალათი",
    "item.17":"შაკშუკა ტაფაზე",
    "item.18":"ჰუმუსი მასაბახა",
    "item.19":"ჰუმუსი სოკოთი",
    "item.21":"მარგარიტა პიცა",
    "item.22":"პასტა პომიდვრით",
    "item.23":"როზე პასტა",
    "item.24":"ნაღების-სოკოს პასტა",
    "item.25":"ალიო ე ოლიო პასტა",
    "item.26":"ბურეკასი ყველით",
    "item.27":"ბურეკასი კარტოფილით",
    "item.28":"ბურეკასი კარტოფილი-სოკო",
    "item.29":"ბურეკასი პიცა",
    "item.30":"ტოსტი",
    "item.31":"მალავახი",
    "item.32":"ზივა",
    "item.33":"ფიში ენდ ჩიპსი",
    "item.34":"თევზის შაურმა",
    "item.35":"მთლიანი სიბასი ღუმელში",
    "item.36":"ფალაფელი თეფშზე",
    "item.37":"ჩიფსი",
    "item.38":"ბოსტნეულის კატლეტი",
    "item.39":"თეთრი ბრინჯი",
    "item.40":"შემწვარი ბრინჯი ბოსტნეულით",
    "item.41":"სახლის წვნიანი",
    "item.20":"შემწვარი ყვავილოვანი კომბოსტო",
    "item.42":"კეტჩუპი",
    "item.43":"მაიონეზი",
    "item.44":"თახინი",
    "item.45":"ცხარე სხუგი",
    "item.46":"პიტა",
    "item.47":"კოლა",
    "item.48":"კოლა ზერო",
    "item.49":"სპრაიტი",
    "item.50":"წყალი",
    "item.51":"წყალი ატმის გემოთი",
    "item.52":"წყალი ვაშლის გემოთი",
    "item.53":"სოდა",
    "item.54":"ქართული ლიმონათი (ლიმონი)",
    "item.55":"ქართული ლიმონათი (მსხალი)",
    "item.56":"ქართული ლიმონათი (ვანილი)",
    "item.57":"ბროწეულის წვენი",
    "item.58":"ვაშლი-ალუბლის წვენი",
    "item.59":"გაყინული ლიმონი-პიტნა",
    "item.60":"გაზიანი სოდა (მანდარინი)",
    "item.61":"გაზიანი სოდა (მსხალი)",
    "item.71":"ხილის მიქსი (წვენი)",

    "item.62":"ჩაი",
    "item.72":"შავი ყავა",

    "item.63":"ლუდი",
    "item.64":"ქოშერი ღვინო (ბოთლი)",
    "item.65":"მოჰიტო (ჭიქა)",
    "item.66":"არაკი (შოტი)",
    "item.67":"არაყი რედ ბულით (ჭიქა)",
    "item.68":"იეგერი (შოტი)",
    "item.69":"რუგელახი",
    "item.70":"სინაბონი",

    "desc.1":"პიტა მოხარშული კვერცხით, შემწვარი ბადრიჯნით, კარტოფილით და თაჰინით, ახალ ბოსტნეულთან ერთად: კიტრი, პომიდორი და თეთრი კომბოსტო. იყიდება 20:00-მდე ან მარაგის ამოწურვამდე.",
    "desc.2":"ომლეტი ბოსტნეულის სალათთან ერთად: კიტრი, პომიდორი და თეთრი კომბოსტო (შეგიძლიათ დაამატოთ თაჰინი / ყველი / სახლის სოუსი). იყიდება 20:00-მდე ან მარაგის ამოწურვამდე.",
    "desc.3":"პიტა ადგილზე შემწვარი ფალაფელის ბურთულებით, თაჰინით და ახალი ბოსტნეულით: კიტრი, პომიდორი და თეთრი კომბოსტო. იყიდება 20:00-მდე ან მარაგის ამოწურვამდე.",
    "desc.4":"პიტა კატლეტებით, რომლებიც მზადდება ახლად გახეხილი ბოსტნეულით (სტაფილო, ყაბაყი, ოხრახუში). იყიდება 20:00-მდე ან მარაგის ამოწურვამდე.",
    "desc.5":"ტრადიციული ქართული ცომეული ჩვენი სახლის შაკშუკას შიგთავსით (პომიდორი და ახალი კვერცხი).",
    "desc.6":"ტრადიციული ქართული ცომეული ადგილზე მომზადებული ჰუმუსით და ნუტით.",
    "desc.7":"საქართველოს საფირმო ცომეული ყველით, ზემოდან კვერცხით და კარაქით.",
    "desc.8":"ტრადიციული ქართული ცომეული: კიდეებში ყველი და შიგნით პიცის შიგთავსი.",
    "desc.9":"ტრადიციული ქართული ცომეული საბიხის სტილში: მოხარშული კვერცხი, შემწვარი ბადრიჯანი, კარტოფილი და თაჰინი.",
    "desc.10":"ტრადიციული ქართული ცომეული თაჰინის ფენაზე, ახალ ბოსტნეულთან და ადგილზე შემწვარ ფალაფელთან ერთად.",
    "desc.11":"იმერული ხაჭაპური — ტრადიციული ქართული ცომეული შერჩეული ყველებით, ახლად გამომცხვარი იდეალურ ოქროსფერამდე.",

    "desc.12":"ახალი სალათი: წვრილად დაჭრილი კიტრი, პომიდორი და კომბოსტო.",
    "desc.13":"ახალი სალათი: მსხვილად დაჭრილი კიტრი, პომიდორი და ხახვი.",
    "desc.14":"ახალი სალათი: სალათი, ჩერი პომიდორი, კრუტონები, ყველი და სახლის „კეისრის“ სოუსი.",
    "desc.15":"ახალი სალათი: წვრილად დაჭრილი კიტრი, პომიდორი და კომბოსტო ბულგარული ყველით.",
    "desc.16":"ახალი სალათი წვრილად დაჭრილი ბოსტნეულით და ტოსტთან ერთად (ერთი დამატება უფასოდ). სახლის ტოსტი: ყვითელი ყველი, პიცის სოუსი, კვერცხი და დამატებები არჩევით.",

    "desc.17":"ჩვენი სახლის შაკშუკა (პომიდორი და ახალი კვერცხი) ახალი პურთან ერთად. დამატებითი პური: +5 GEL.",
    "desc.18":"ადგილზე მომზადებული ჰუმუსი ნუტით, 2 პიტასთან ერთად. თითოეული დამატებითი პიტა: +5 GEL.",
    "desc.19":"ადგილზე მომზადებული ჰუმუსი სოკოთი, სახლის პიტასთან ერთად. თითოეული დამატებითი პიტა: +5 GEL.",
    "desc.20":"ხრაშუნა, ოქროსფრად შემწვარი ყვავილოვანი კომბოსტოს ყვავილები პანირებაში, მზადდება ადგილზე და მიეწოდება ცხლად. იდეალურია დასაწყისისთვის ან როგორც ნოყიერი დანამატი.",
    "desc.21":"პიცა დამატებებით არჩევით: მწვანე/შავი ზეთისხილი, სოკო, ხახვი, სიმინდი, ბულგარული წიწაკა, ცხარე წიწაკა.",
    "desc.22":"სახლის პასტა ახალი პომიდვრის სოუსით.",
    "desc.23":"სახლის პასტა ახალი პომიდვრის სოუსით და ნაღებით.",
    "desc.24":"„ერთადერთი“ — პასტა ნაღების სოუსით და ახალი სოკოთი.",
    "desc.25":"პასტა ზეითუნის ზეთით, ნიორით, წიწაკით და მარილით. შეიძლება ოდნავ ცხარე.",

    "desc.26":"4 საშუალო ბურეკასი ყველით + პატარა ისრაელის სალათი.",
    "desc.27":"4 საშუალო ბურეკასი კარტოფილით + პატარა ისრაელის სალათი.",
    "desc.28":"4 საშუალო ბურეკასი კარტოფილით და სოკოთი + პატარა ისრაელის სალათი.",
    "desc.29":"4 საშუალო ბურეკასი „პიცა“ + პატარა ისრაელის სალათი.",
    "desc.30":"Jerusalem House-ის ტოსტი: ყვითელი ყველი, პიცის სოუსი, კვერცხი (ერთი დამატება უფასოდ).",

    "desc.31":"ხელით დამზადებული იემენური სტილის შემწვარი ფენოვანი ცომი — ხრაშუნა გარედან და რბილი შიგნით. მიირთმევა ცხლად, კვერცხთან და პომიდვრის პასტასთან ერთად, როგორც სახლში.",
    "desc.32":"თბილი ფენოვანი ცომეული თხელი ფენებით, მდიდარი ყველის შიგთავსით, გამომცხვარი ოქროსფერამდე. ხრაშუნას და ნაზის იდეალური ბალანსი ყოველ ლუკმაში. მიირთმევა კვერცხთან და პომიდვრის პასტასთან ერთად.",

"desc.33":"5 ცალი ორაგული ტემპურაში კარტოფილით.",
"desc.34":"ფორელის თევზის შაურმა ჩიფსით / ბოსტნეულის სალათით. შესაძლებელია პიტის დამატება 5 GEL-ად.",
"desc.35":"მთლიანი სიბასი ღუმელში ჩიფსით / სალათით.",
"desc.36":"თეფში 5 ფალაფელის ბურთულით. ცელიაკიისთვის არ არის რეკომენდებული. ვეგანური კერძი.",
"desc.37":"ოქროსფერი ხრაშუნა ჩიფსი პაპრიკისა და მარილის ზუსტი შეზავებით, მიირთმევა ცხლად კეტჩუპთან ერთად. შეგიძლიათ მოითხოვოთ სანელებლების გარეშე. დამატებითი კეტჩუპი — დამატებით ფასად.",
"desc.38":"5 კატლეტი ახლად გახეხილი ბოსტნეულით (სტაფილო, ყაბაყი) და ოხრახუშით.",
"desc.39":"ფაფუკი, რბილი თეთრი ბრინჯი, იდეალურად მოხარშული და ცხლად მიწოდებული. კლასიკური დანამატი, რომელიც ერგება ნებისმიერ კერძს.",
"desc.40":"შემწვარი ბრინჯი სეზონური ბოსტნეულით: სტაფილო, ხახვი, თეთრი კომბოსტო, სოკო. მოყვება შემწვარი კვერცხი / შესაძლებელია კვერცხის გარეშე.",
"desc.41":"სახლის წვნიანი ყოველდღე ყველაზე ახალი სეზონური ინგრედიენტებით. ჰკითხეთ ოფიციანტს დღევანდელ წვნიანზე!",

    "desc.42":"",
    "desc.43":"",
    "desc.44":"",
    "desc.45":"",
    "desc.46":"",
    "desc.47":"",
    "desc.48":"",
    "desc.49":"",
    "desc.50":"",
    "desc.51":"",
    "desc.52":"",
    "desc.53":"",
    "desc.54":"",
    "desc.55":"",
    "desc.56":"",
    "desc.57":"",
    "desc.58":"",
    "desc.59":"",
    "desc.60":"",
    "desc.61":"",
    "desc.62":"",
    "desc.63":"",
    "desc.64":"",
    "desc.65":"",
    "desc.66":"",
    "desc.67":"",
    "desc.68":"",
    "desc.69":"რბილი ცომის რულონები მდიდარი, ადგილზე მომზადებული შოკოლადის შიგთავსით, გამომცხვარი იდეალურ სირბილემდე. ნოსტალგიური ტკბილი ლუკმა, რომელსაც რთულია შეაჩერო.",
    "desc.70":"რბილი, ჰაეროვანი სინაბონები დარიჩინითა და ყავისფერი შაქრით, ახალგამომცხვარი და ტკბილი გლაზურით დაფარული. ძალიან „დამოკიდებულებელი“ დესერტი!",
    "desc.71":"",
    "desc.72":"",

    "opt.5.gf":"შაკშუკა ხაჭაპური (უგლუტენო)",
    "opt.6.gf":"ჰუმუსი მასაბახა ხაჭაპური (უგლუტენო)",
    "opt.7.gf":"აჭარული ხაჭაპური (უგლუტენო)",
    "opt.8.gf":"პიცა ხაჭაპური (უგლუტენო)",
    "opt.9.gf":"საბიხი ხაჭაპური (უგლუტენო)",
    "opt.10.gf":"ფალაფელი ხაჭაპური (უგლუტენო)",
    "opt.11.gf":"იმერული ხაჭაპური (უგლუტენო)",

    "opt.21.half":"პიცა + ნახევარი დამატებები",
    "opt.21.one":"პიცა + 1 დამატება",
    "opt.21.two":"პიცა + 2 დამატება",
    "opt.21.gf":"მარგარიტა პიცა (უგლუტენო)",

    "opt.22.gf":"პასტა პომიდვრით (უგლუტენო)",
    "opt.23.gf":"როზე პასტა (უგლუტენო)",
    "opt.24.gf":"ნაღების-სოკოს პასტა (უგლუტენო)",
    "opt.25.gf":"ალიო ე ოლიო პასტა (უგლუტენო)",

    "opt.31.gf":"მალავახი (უგლუტენო) (+5)",
    "opt.32.gf":"ზივა (უგლუტენო) (+5)",

    "opt.base":"სტანდარტული",
  }
};

let currentLang = "he";

/* =========
   PRICE VARIANTS (add-ons / gluten free etc.)
   ========= */
const selectedPriceById = {}; // remembers last chosen variant price per item

// For each item id, define variant buttons with labelKey and newPrice
const priceVariants = {
  // Khachapuri (5..11): Regular + Gluten Free
  5:  [{ labelKey: "opt.base", newPrice: prices[4]  }, { labelKey: "opt.5.gf",  newPrice: 60 }],
  6:  [{ labelKey: "opt.base", newPrice: prices[5]  }, { labelKey: "opt.6.gf",  newPrice: 60 }],
  7:  [{ labelKey: "opt.base", newPrice: prices[6]  }, { labelKey: "opt.7.gf",  newPrice: 60 }],
  8:  [{ labelKey: "opt.base", newPrice: prices[7]  }, { labelKey: "opt.8.gf",  newPrice: 60 }],
  9:  [{ labelKey: "opt.base", newPrice: prices[8]  }, { labelKey: "opt.9.gf",  newPrice: 60 }],
  10: [{ labelKey: "opt.base", newPrice: prices[9]  }, { labelKey: "opt.10.gf", newPrice: 60 }],
  11: [{ labelKey: "opt.base", newPrice: prices[10] }, { labelKey: "opt.11.gf", newPrice: 60 }],

  // Pizza Margherita (21): Regular + add-ons + GF
  21: [
    { labelKey: "opt.base",    newPrice: prices[20] },
    { labelKey: "opt.21.half", newPrice: 53 },
    { labelKey: "opt.21.one",  newPrice: 55 },
    { labelKey: "opt.21.two",  newPrice: 60 },
    { labelKey: "opt.21.gf",   newPrice: 60 },
  ],

  // Pastas (22..25): Regular + Gluten Free
  22: [{ labelKey: "opt.base", newPrice: prices[21] }, { labelKey: "opt.22.gf", newPrice: 60 }],
  23: [{ labelKey: "opt.base", newPrice: prices[22] }, { labelKey: "opt.23.gf", newPrice: 60 }],
  24: [{ labelKey: "opt.base", newPrice: prices[23] }, { labelKey: "opt.24.gf", newPrice: 60 }],
  25: [{ labelKey: "opt.base", newPrice: prices[24] }, { labelKey: "opt.25.gf", newPrice: 60 }],

  // ✅ Malawach (31): Regular + GF (+5)
  31: [{ labelKey: "opt.base", newPrice: prices[30] }, { labelKey: "opt.31.gf", newPrice: prices[30] + 5 }],

  // ✅ Ziva (32): Regular + GF (+5)
  32: [{ labelKey: "opt.base", newPrice: prices[31] }, { labelKey: "opt.32.gf", newPrice: prices[31] + 5 }],
};

function getEffectivePrice(item){
  return Number(selectedPriceById[item.id] ?? item.price);
}

function updateCardPrice(item){
  const newShownPrice = getEffectivePrice(item);

  const card = document.querySelector(`.card[data-item-id="${item.id}"]`);
  if (card){
    const priceEl = card.querySelector(".card__price");
    if (priceEl) priceEl.textContent = formatPrice(newShownPrice);
  }
}

/* =========
   REVIEWS (10)
   ========= */
function getReviews(lang){
  const base = {
    he: [
      { name: "דנה", text: "אוכל מצוין, שירות מהיר ואווירה נעימה. נחזור שוב!" },
      { name: "אלון", text: "החצ'פורי פשוט מושלם, וגם הסלטים טריים מאוד." },
      { name: "שיר", text: "מנות גדולות, טעם ביתי, ממש מומלץ." },
      { name: "רועי", text: "הפיתה פלאפל הכי טובה שטעמתי בבטומי." },
      { name: "מיכל", text: "שקשוקה מעולה! והצוות אדיב." },
      { name: "יוסי", text: "מחירים הוגנים ואיכות גבוהה. אהבנו." },
      { name: "אור", text: "הדג בתנור היה עשוי בול. וואו." },
      { name: "ליאת", text: "מקום נקי ומסודר, עם אנרגיה טובה." },
      { name: "אבי", text: "הפסטות טעימות ממש, במיוחד שמנת פטריות." },
      { name: "נועה", text: "הזמנו בוואטסאפ והכל היה פשוט ונוח." },
    ],
    en: [
      { name: "Dana", text: "Great food, fast service, lovely atmosphere. We’ll be back!" },
      { name: "Alon", text: "The khachapuri is perfect, and the salads are super fresh." },
      { name: "Shir", text: "Big portions, homemade taste — highly recommended." },
      { name: "Roi", text: "Best falafel pita I’ve had in Batumi." },
      { name: "Michal", text: "Amazing shakshuka and friendly staff." },
      { name: "Yossi", text: "Fair prices and great quality. Loved it." },
      { name: "Or", text: "The oven sea bass was cooked perfectly. Wow." },
      { name: "Liat", text: "Clean place, well organized, great vibes." },
      { name: "Avi", text: "Very tasty pasta, especially the creamy mushroom one." },
      { name: "Noa", text: "Reserved via WhatsApp — super easy and smooth." },
    ],
    ru: [
      { name: "Дана", text: "Отличная еда, быстрое обслуживание, приятная атмосфера." },
      { name: "Алон", text: "Хачапури идеальный, салаты очень свежие." },
      { name: "Шир", text: "Большие порции и домашний вкус. Рекомендуем!" },
      { name: "Рои", text: "Лучший фалафель в пите в Батуми." },
      { name: "Михаль", text: "Шакшука супер, персонал дружелюбный." },
      { name: "Йоси", text: "Хорошие цены и качество. Нам понравилось." },
      { name: "Ор", text: "Сибас в духовке приготовлен идеально." },
      { name: "Лиат", text: "Чисто, уютно, приятная атмосфера." },
      { name: "Ави", text: "Паста очень вкусная, особенно сливочно-грибная." },
      { name: "Ноя", text: "Бронь через WhatsApp — очень удобно." },
    ],
    ka: [
      { name: "დანა", text: "ძალიან გემრიელი, სწრაფი სერვისი და სასიამოვნო გარემო." },
      { name: "ალონი", text: "ხაჭაპური იდეალურია, სალათები ძალიან ახალია." },
      { name: "შირ", text: "დიდი პორციები და სახლის გემო — რეკომენდებულია." },
      { name: "როი", text: "საუკეთესო ფალაფელი პიტაში ბატუმში." },
      { name: "მიხალი", text: "შაკშუკა შესანიშნავია, პერსონალი მეგობრულია." },
      { name: "იოსი", text: "სამართლიანი ფასები და მაღალი ხარისხი." },
      { name: "ორი", text: "ღუმელში სიბასი იდეალურად იყო მომზადებული." },
      { name: "ლიათი", text: "სუფთა და მოწესრიგებული ადგილი, კარგი ვაიბი." },
      { name: "ავი", text: "პასტა ძალიან გემრიელია, განსაკუთრებით სოკოს ნაღებით." },
      { name: "ნოა", text: "WhatsApp-ით დაჯავშნა მარტივი და კომფორტულია." },
    ],
  };
  return base[lang] || base.he;
}

function getStickyBarHeight(){
  const bar = document.querySelector("#stickyBar");
  if (!bar) return 0;
  return Math.ceil(bar.getBoundingClientRect().height || 0);
}

function updateStickyOffsetVar(){
  const h = getStickyBarHeight();
  document.documentElement.style.setProperty("--stickyOffset", `${h}px`);
  return h;
}

// ✅ Scroll to the category TITLE (section head/title) instead of the section container
function scrollToSectionWithStickyOffset(sectionEl){
  if (!sectionEl) return;

  const target =
    sectionEl.querySelector(".section__head") ||
    sectionEl.querySelector(".section__title") ||
    sectionEl;

  const offset = updateStickyOffsetVar();
  const y = target.getBoundingClientRect().top + window.pageYOffset - offset - 6;

  window.scrollTo({
    top: Math.max(0, y),
    behavior: "smooth",
  });
}

/* =========
   RENDER
   ========= */

function renderCategoriesNav(){
  const nav = document.getElementById("categoriesNav");
  nav.innerHTML = "";

  categories.forEach((c, idx) => {
    const btn = document.createElement("button");
    btn.className = "catPill" + (idx === 0 ? " is-active" : "");
    btn.type = "button";
    btn.dataset.target = c.id;

    const txt = document.createElement("span");
    txt.className = "catPill__text";
    txt.textContent = t(c.titleKey);
    btn.appendChild(txt);

    btn.addEventListener("click", () => {
      document.querySelectorAll(".catPill").forEach(x => x.classList.remove("is-active"));
      btn.classList.add("is-active");

      const sec = document.getElementById(`sec-${c.id}`);
      if (sec) scrollToSectionWithStickyOffset(sec);
    });

    nav.appendChild(btn);
  });
}

function renderMenu(){
  const root = document.getElementById("menuRoot");
  root.innerHTML = "";

  categories.forEach((cat) => {
    const section = document.createElement("section");
    section.className = "section";
    section.id = `sec-${cat.id}`;

    const head = document.createElement("div");
    head.className = "section__head";

    const h2 = document.createElement("h2");
    h2.className = "section__title";
    h2.textContent = t(cat.titleKey);

    const p = document.createElement("p");
    p.className = "section__subtitle";
    p.textContent = "";

    head.appendChild(h2);
    head.appendChild(p);

    const grid = document.createElement("div");
    grid.className = "grid";

    const catItems = items.filter(i => i.categoryId === cat.id);
    catItems.forEach((it) => {
      const card = document.createElement("article");
      card.dataset.itemId = String(it.id);
      card.className = "card";
      card.classList.add(`card--${it.categoryId}`);

      card.tabIndex = 0;
      card.setAttribute("role","button");
      card.setAttribute("aria-label", t(it.nameKey));

      const img = document.createElement("img");
      img.className = "card__img";
      img.alt = t(it.nameKey);
      setImageWithFallback(img, `images/${it.id}`);

      const body = document.createElement("div");
      body.className = "card__body";

const title = document.createElement("h3");
title.className = "card__title";
title.textContent = t(it.nameKey);

// Gluten-free label (only if item has a .gf variant)
if (priceVariants[it.id]?.some(v => String(v.labelKey).includes(".gf"))){
  const gf = document.createElement("div");
  gf.className = "card__gluten";
  gf.textContent = t("badge.gf");
  title.appendChild(gf);
}


      const price = document.createElement("div");
      price.className = "card__price";
      price.textContent = formatPrice(getEffectivePrice(it));

      const hint = document.createElement("div");
      hint.className = "card__hint";

      body.appendChild(title);
      body.appendChild(price);
      body.appendChild(hint);

      card.appendChild(img);
      card.appendChild(body);

      card.addEventListener("click", () => openModal(it));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") openModal(it);
      });

      grid.appendChild(card);
    });

    section.appendChild(head);
    section.appendChild(grid);
    root.appendChild(section);
  });
}

function renderReviews(){
  const track = document.getElementById("reviewsTrack");
  const dotsWrap = document.getElementById("reviewsDots");
  const reviews = getReviews(currentLang);

  track.innerHTML = "";
  dotsWrap.innerHTML = "";

  reviews.forEach((r, idx) => {
    const slide = document.createElement("div");
    slide.className = "review";

    const name = document.createElement("p");
    name.className = "review__name";
    name.textContent = r.name;

    const text = document.createElement("p");
    text.className = "review__text";
    text.textContent = r.text;

    slide.appendChild(name);
    slide.appendChild(text);
    track.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = "dot" + (idx === 0 ? " is-active" : "");
    dot.type = "button";
    dot.addEventListener("click", () => {
      setReviewIndex(idx);
      restartAuto();
    });
    dotsWrap.appendChild(dot);
  });

  setupReviewsControls(reviews.length);
}

/* =========
   MODAL
   ========= */

const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const modalCloseBtn = document.getElementById("modalCloseBtn");

// helper: clean any accidental markdown ** **
function cleanDescText(s){
  if (!s) return s;
  return String(s).replace(/\*\*/g, "").trim();
}

function openModal(item){
  modalTitle.textContent = t(item.nameKey);
  modalPrice.textContent = formatPrice(getEffectivePrice(item));

  setImageWithFallback(modalImage, `images/${item.id}`);
  modalImage.alt = t(item.nameKey);

  // Center + Bold the description
  modalDesc.style.textAlign = "center";
  modalDesc.style.fontWeight = "700";

  const possible = t(item.descKey, true);
  const finalText = cleanDescText(possible) || t("");
  renderVariantButtons(item);

  modalDesc.textContent = finalText;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}

modalCloseBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target && e.target.dataset && e.target.dataset.close === "true") closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

function renderVariantButtons(item){
  const variants = priceVariants[item.id];
  // Remove old buttons if exist
  const existing = document.getElementById("variantButtons");
  if (existing) existing.remove();

  if (!variants || !variants.length) return;

  const wrap = document.createElement("div");
  wrap.id = "variantButtons";
  wrap.className = "variantButtons";

  variants.forEach(v => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "variantBtn";

    btn.textContent = t(v.labelKey);
    btn.addEventListener("click", () => {
      // update selected price
      selectedPriceById[item.id] = v.newPrice;

      // update modal price
      modalPrice.textContent = formatPrice(v.newPrice);

      // update card price in grid (so user sees it changed)
      const card = document.querySelector(`.card[data-item-id="${item.id}"]`);
      if (card){
        const priceEl = card.querySelector(".card__price");
        if (priceEl) priceEl.textContent = formatPrice(v.newPrice);
      }

      // highlight selected
      wrap.querySelectorAll(".variantBtn").forEach(x => x.classList.remove("is-active"));
      btn.classList.add("is-active");
    });

    // mark active if already selected
    if (Number(selectedPriceById[item.id]) === Number(v.newPrice)){
      btn.classList.add("is-active");
    }

    wrap.appendChild(btn);
  });

  // Insert under description
  modalDesc.insertAdjacentElement("afterend", wrap);
}

/* =========
   WHATSAPP LINKS (per language)
   ========= */
function updateWhatsAppLinks(){
  const msg = t("whatsapp.message");
  const url = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(msg)}`;

  const btn = document.getElementById("whatsAppBtn");
  const footerBtn = document.getElementById("footerWhatsapp");

  if (btn) btn.href = url;
  if (footerBtn) footerBtn.href = url;
}

/* =========
   REVIEWS SLIDER LOGIC (RTL-aware arrows)
   ========= */

let reviewIndex = 0;
let reviewTimer = null;
let reviewCount = 10;

function setupReviewsControls(count){
  reviewCount = count;
  reviewIndex = 0;
  applyReviewTransform();

  const slider = document.getElementById("reviewsSlider");
  const prev = slider.querySelector(".reviews__nav--prev");
  const next = slider.querySelector(".reviews__nav--next");

  prev.onclick = () => { stepReview(-1); restartAuto(); };
  next.onclick = () => { stepReview(1); restartAuto(); };

  restartAuto();
}

function stepReview(step){
  const isRTL = document.documentElement.dir === "rtl";
  const delta = isRTL ? -step : step;
  setReviewIndex((reviewIndex + delta + reviewCount) % reviewCount);
}

function setReviewIndex(idx){
  reviewIndex = idx;
  applyReviewTransform();
  document.querySelectorAll(".dot").forEach((d,i)=> d.classList.toggle("is-active", i === reviewIndex));
}

function applyReviewTransform(){
  const track = document.getElementById("reviewsTrack");
  track.style.transform = `translateX(-${reviewIndex * 100}%)`;
}

function restartAuto(){
  if (reviewTimer) clearInterval(reviewTimer);
  reviewTimer = setInterval(() => stepReview(1), 4500);
}

/* =========
   SCROLLSPY (auto highlight category while scrolling)
   ========= */

let catObserver = null;
let lastActiveCatId = null;

function setActiveCategory(catId){
  if (!catId || catId === lastActiveCatId) return;
  lastActiveCatId = catId;

  const btns = document.querySelectorAll(".catPill");
  btns.forEach(b => b.classList.toggle("is-active", b.dataset.target === catId));

  // Horizontal-only scroll inside categories row
  const nav = document.getElementById("categoriesNav");
  const activeBtn = document.querySelector(`.catPill[data-target="${catId}"]`);
  if (!nav || !activeBtn) return;

  const navRect = nav.getBoundingClientRect();
  const btnRect = activeBtn.getBoundingClientRect();

  const isFullyVisible = btnRect.left >= navRect.left && btnRect.right <= navRect.right;
  if (isFullyVisible) return;

  const targetScrollLeft =
    activeBtn.offsetLeft - (nav.clientWidth / 2) + (activeBtn.clientWidth / 2);

  nav.scrollTo({
    left: Math.max(0, targetScrollLeft),
    behavior: "smooth",
  });
}

function setupCategoryScrollSpy(){
  if (catObserver) catObserver.disconnect();

  const sections = categories
    .map(c => document.getElementById(`sec-${c.id}`))
    .filter(Boolean);

  if (!sections.length) return;

  const stickyH = updateStickyOffsetVar();

  catObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible && visible.target && visible.target.id){
      const catId = visible.target.id.replace("sec-","");
      setActiveCategory(catId);
    }
  }, {
    root: null,
    rootMargin: `-${stickyH + 10}px 0px -55% 0px`,
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
  });

  sections.forEach(sec => catObserver.observe(sec));
}

/* =========
   I18N helpers
   ========= */

function t(key, silent=false){
  const pack = i18n[currentLang] || i18n.he;
  const val = pack[key];
  if (val === undefined) return silent ? "" : key;
  return val;
}

function applyI18n(){
  const pack = i18n[currentLang] || i18n.he;
  document.documentElement.lang = currentLang;
  document.documentElement.dir = pack.dir;

  document.querySelectorAll(".lang__btn").forEach(b => {
    b.classList.toggle("is-active", b.dataset.lang === currentLang);
  });

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (key) el.textContent = t(key);
  });

  renderCategoriesNav();
  renderMenu();
  setupCategoryScrollSpy();
  renderReviews();
  updateWhatsAppLinks();
  setupStickyHeaderOffset();
}

function formatPrice(value){
  return `${Number(value).toFixed(0)} ${CURRENCY}`;
}

/* =========
   INIT
   ========= */
function setupStickyHeaderOffset(){
  const header = document.getElementById("stickyHeader");
  const main = document.getElementById("pageMain");
  if (!header || !main) return;

  const apply = () => {
    const h = header.getBoundingClientRect().height || 0;
    main.style.paddingTop = `${Math.ceil(h)}px`;
  };

  apply();
  window.addEventListener("resize", apply);

  if (window.ResizeObserver){
    const ro = new ResizeObserver(apply);
    ro.observe(header);
  }
}

document.querySelectorAll(".lang__btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    applyI18n();
  });
});

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

window.addEventListener("resize", () => {
  updateStickyOffsetVar();
  setupCategoryScrollSpy();
});

applyI18n();
