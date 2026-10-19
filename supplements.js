/* ============================================================
   HITTING THE RIGHT NOTES — companion site data
   ------------------------------------------------------------
   CHAPTERS  : metadata per chapter (drives headings + dropdown)
   SUPPLEMENTS : one object per item of supplementary material

   Supplement fields:
     chapter     : number — 0 = Introduction, 1–18, 19 = Appendix
     page        : number — printed page where the item is discussed
     type        : "video" | "figure" | "audio"
     title       : short label, e.g. "Casablanca: piano cue"
     description : one or two sentences on what to listen for
     src         : video → full embed URL (YouTube /embed/…)
     thumb       : OPTIONAL poster image for videos
   ============================================================ */

const CHAPTERS = {
  0:  { label: "Introduction", title: "See Me, Hear Me, Feel Me", pages: "1–14" },

  1:  { title: "The Sounds of Silents", pages: "15–23" },
  2:  { title: "Welcome to Sherwood Forest", film: "The Adventures of Robin Hood", year: 1938, pages: "24–31" },
  3:  { title: "Think I Might Go On a Piece", film: "Young Mr. Lincoln", year: 1939, pages: "32–41" },
  4:  { title: "Round Up the Usual Suspects", film: "Casablanca", year: 1942, pages: "42–52" },
  5:  { title: "It's the Pictures That Got Small", film: "Sunset Boulevard", year: 1950, pages: "53–66" },
  6:  { title: "I Led Too Dull a Life", film: "North by Northwest", year: 1959, pages: "67–80" },
  7:  { title: "We Always Lose", film: "The Magnificent Seven", year: 1960, pages: "81–92" },
  8:  { title: "You Don't Sell the Dream of a Lifetime", film: "Once Upon a Time in the West", year: 1968, pages: "93–108" },
  9:  { title: "Forget It Jake; It's Chinatown", film: "Chinatown", year: 1974, pages: "109–118" },
  10: { title: "He's Coming Back For His Noon Feeding", film: "Jaws", year: 1975, pages: "119–131" },
  11: { title: "This is What It Means to Be a Slave", film: "Blade Runner", year: 1982, pages: "132–143" },
  12: { title: "You Sho' is Ugly", film: "The Color Purple", year: 1985, pages: "144–155" },
  13: { title: "The Most Beautiful Thing in the World is a Match Well Made", film: "Emma", year: 1996, pages: "156–167" },
  14: { title: "Where Does He Get Those Wonderful Toys", film: "Batman", year: 1989, pages: "168–178" },
  15: { title: "God Bless White America", film: "BlacKkKlansman", year: 2018, pages: "179–191" },
  16: { title: "Is it Getting Crazier Out There", film: "Joker", year: 2019, pages: "192–205" },
  17: { title: "Directors Who Compose and Compilation Scores", pages: "206–215" },
  18: { title: "Making the Magic: Concluding Comments", pages: "216–218" },
  19: { label: "Appendix", title: "Director/Composer Combinations for Further Studies", pages: "219–220" }
};

const SUPPLEMENTS = [

  /* ---------- Chapter 3: Young Mr. Lincoln ---------- */
  {
    chapter: 3,
    page: 37,
    type: "video",
    title: "Young Mr. Lincoln: [cue name]",
    description: "[What to listen for]",
    src: "https://www.youtube.com/embed/AJWYlUTa_70"
  },

  /* ---------- Chapter 4: Casablanca ---------- */
  {
    chapter: 4,
    page: 49,
    type: "video",
    title: "Casablanca: [cue name]",
    description: "[What to listen for]",
    src: "https://www.youtube.com/embed/yOliU7X1fEg?start=50"
  },

  /* ---------- Chapter 5: Sunset Boulevard ---------- */
  {
    chapter: 5,
    page: 61,
    type: "video",
    title: "Sunset Boulevard: [cue name]",
    description: "[What to listen for]",
    src: "https://www.youtube.com/embed/LP0g8MbXExA"
  },

  /* ---------- Chapter 10: Jaws ---------- */
  {
    chapter: 10,
    page: 127,
    type: "video",
    title: "Jaws: [cue name]",
    description: "[What to listen for]",
    src: "https://www.youtube.com/embed/enj42k9RWg4"
  },

  /* ---------- Chapter 11: Blade Runner ---------- */
  {
    chapter: 11,
    page: 139,
    type: "video",
    title: "Blade Runner: [cue name]",
    description: "[What to listen for]",
    src: "https://www.youtube.com/embed/pGzl5Voev6w?start=23"
  },

  /* ---------- Chapter 12: The Color Purple ---------- */
  {
    chapter: 12,
    page: 151,
    type: "video",
    title: "The Color Purple: [cue name]",
    description: "[What to listen for]",
    src: "https://www.youtube.com/embed/uEv_d6zAYHk"
  },

  /* ---------- Chapter 13: Emma ---------- */
  {
    chapter: 13,
    page: 163,
    type: "video",
    title: "Emma: Cue 1 [or cue name]",
    description: "[What to listen for]",
    src: "https://www.youtube.com/embed/15RNLc1CymA"
  },
  {
    chapter: 13,
    page: 163,
    type: "video",
    title: "Emma: Cue 2 [or cue name]",
    description: "[What to listen for]",
    src: "https://www.youtube.com/embed/r3YKdsrnqaM"
  },

  /* ---------- Chapter 15: BlacKkKlansman ---------- */
{
  chapter: 15,
  page: 185,
  type: "video",
  title: "BlacKkKlansman: [cue name]",
  description: "[What to listen for]",
  src: "https://www.youtube.com/embed/bY-vpxGexhk"
},
  /* ---------- Chapter 17: Directors Who Compose ---------- */
  {
    chapter: 17,
    page: 209,
    type: "video",
    title: "[Directors Who Compose]: [cue name]",
    description: "[What to listen for]",
    src: "https://www.youtube.com/embed/s-vygw8z14E"
  },
  {
    chapter: 17,
    page: 212,
    type: "video",
    title: "[Directors Who Compose]: [cue name]",
    description: "[What to listen for]",
    src: "https://www.youtube.com/embed/YPfdSu6wO08"
  },
  {
    chapter: 17,
    page: 214,
    type: "video",
    title: "[Directors Who Compose]: [cue name]",
    description: "[What to listen for]",
    src: "https://www.youtube.com/embed/DDMJSg0a5u0"
  }

];
