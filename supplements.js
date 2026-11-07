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

     /* ---------- Chapter 2: Adventures of Robin Hood ---------- */
  {
    chapter: 2,
    page: 27,
    type: "video",
    title: "Adventures of Robin Hood Section 1",
    src: "https://www.youtube.com/embed/R0Ca0Qa-xZg"
  },

    {
    chapter: 2,
    page: 29,
    type: "video",
    title: "Adventures of Robin Hood Section 2",
    src: "https://www.youtube.com/embed/DHHDkkjJwUs"
  },
    {
    chapter: 2,
    page: 31,
    type: "video",
    title: "Adventures of Robin Hood Section 3",
    src: "https://www.youtube.com/embed/odR7uRFnVjc"
  },
   
  /* ---------- Chapter 3: Young Mr. Lincoln ---------- */
  {
    chapter: 3,
    page: 37,
    type: "video",
    title: "Young Mr. Lincoln",
    src: "https://www.youtube.com/embed/AJWYlUTa_70"
  },

  /* ---------- Chapter 4: Casablanca ---------- */
  {
    chapter: 4,
    page: 49,
    type: "video",
    title: "Casablanca",
    src: "https://www.youtube.com/embed/yOliU7X1fEg?start=50"
  },

  /* ---------- Chapter 5: Sunset Boulevard ---------- */
  {
    chapter: 5,
    page: 53,
    type: "video",
    title: "Sunset Boulevard",
    src: "https://www.youtube.com/embed/LP0g8MbXExA"
  },

  /* ---------- Chapter 6: North by Northwest ---------- */
  {
    chapter: 6,
    page: 77,
    type: "video",
    title: "North by Northwest",
    src: "https://www.youtube.com/embed/ya1XkYB3as4"
  },
   
 /* ---------- Chapter 7: Magnificent Seven ---------- */
  {
    chapter: 7,
    page: 87,
    type: "video",
    title: "Magnificent Seven",
    src: "https://www.youtube.com/embed/hDKP6VCgmtw"
  },
   
  /* ---------- Chapter 8: Once Upon a Time in the West ---------- */
  {
    chapter: 8,
    page: 103,
    type: "video",
    title: "Once Upon a Time in the West: Part 1",
    src: "https://www.youtube.com/embed/IXuMMnopwJI"
  },

  {
    chapter: 8,
    page: 103,
    type: "video",
    title: "Once Upon a Time in the West: Part 2",
    src: "https://www.youtube.com/embed/GN93fT8AGls"
  },
     /* ---------- Chapter 9: Chinatown ---------- */
  {
    chapter: 9,
    page: 115,
    type: "video",
    title: "Chinatown",
    src: "https://www.youtube.com/embed/8qPlxSg_vTs"
  },

  /* ---------- Chapter 10: Jaws ---------- */
  {
    chapter: 10,
    page: 127,
    type: "video",
    title: "Jaws",
    src: "https://www.youtube.com/embed/enj42k9RWg4"
  },

  /* ---------- Chapter 11: Blade Runner ---------- */
  {
    chapter: 11,
    page: 139,
    type: "video",
    title: "Blade Runner",
    src: "https://www.youtube.com/embed/xhtSD9zAqi8"
  },

  /* ---------- Chapter 12: The Color Purple ---------- */
  {
    chapter: 12,
    page: 151,
    type: "video",
    title: "The Color Purple",
    src: "https://www.youtube.com/embed/uEv_d6zAYHk"
  },

  /* ---------- Chapter 13: Emma ---------- */
  {
    chapter: 13,
    page: 163,
    type: "video",
    title: "Emma",
    src: "https://www.youtube.com/embed/wIyy03a9Ts0"
  },

     /* ---------- Chapter 14: Batman ---------- */
  {
    chapter: 14,
    page: 163,
    type: "video",
    title: "Batman: Part 1",
    src: "https://www.youtube.com/embed/a-xbfvXDL5o"
  },
    {
    chapter: 14,
    page: 163,
    type: "video",
    title: "Batman: Part 2",
    src: "https://www.youtube.com/embed/rIu1sMhVSzg"
  },
   
  /* ---------- Chapter 15: BlacKkKlansman ---------- */
{
  chapter: 15,
  page: 185,
  type: "video",
  title: "BlacKkKlansman",
  src: "https://www.youtube.com/embed/bY-vpxGexhk"
},
   
     /* ---------- Chapter 16: Joker ---------- */
{
  chapter: 16,
  page: 202,
  type: "video",
  title: "Joker",
  src: "https://www.youtube.com/embed/hsqSRBbkqIw"
},
  /* ---------- Chapter 17: Directors Who Compose ---------- */
  {
    chapter: 17,
    page: 209,
    type: "video",
    title: "Mystic River",
    src: "https://www.youtube.com/embed/Pz8zwhzInyE"
  },
  {
    chapter: 17,
    page: 210,
    type: "video",
    title: "Halloween",
    src: "https://www.youtube.com/embed/XH7QIKvOab4"
  },
    {
    chapter: 17,
    page: 212,
    type: "video",
    title: "The Big Lebowski",
    src: "https://www.youtube.com/embed/YPfdSu6wO08"
  },
  {
    chapter: 17,
    page: 214,
    type: "video",
    title: "Pulp Fiction",
    src: "https://www.youtube.com/embed/DDMJSg0a5u0"
  }

];
