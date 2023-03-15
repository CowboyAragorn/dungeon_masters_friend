//Special thanks to u/The_Camwin & others on reddit for compiling professions
const characteristics = {
  race: ["Human", "Dwarf", "Elf", "Half-Elf", "Halfling"],
  gender: ["Male", "Female"],
  //TODO: Reorganize these traits, disagree with some of the placements
  firstNames: {
    Human: {
      //english based
      Male: [
        "William",
        "John",
        "Thomas",
        "George",
        "James",
        "Henry",
        "Charles",
        "Joseph",
        "Robert",
        "Edward",
        "Richard",
        "Samuel",
        "Alfred",
        "Frederick",
        "David",
        "Arthur",
        "Walter",
        "Edwin",
        "Benjamin",
        "Francis",
        "Albert",
        "Daniel",
        "Isaac",
        "Peter",
        "Harry",
        "Stephen",
        "Edmund",
        "Frank",
        "Tom",
        "Michael",
        "Matthew",
        "Herbert",
        "Abraham",
        "Alexander",
        "Mark",
        "Frederic",
        "Andrew",
        "Philip",
        "Jonathan",
        "Christopher",
        "Evan",
        "Jesse",
        "Hugh",
        "Joshua",
        "Lewis",
        "Ralph",
        "Josiah",
        "Jacob",
        "Eli",
        "Reuben",
        "Patrick",
        "Owen",
        "Amos",
        "Elijah",
        "Moses",
        "Job",
        "Enoch",
        "Sidney",
        "Fred",
        "Martin",
        "Cornelius",
        "Anthony",
        "Ernest",
        "Jabez",
        "Levi",
        "Luke",
        "Joe",
        "Ebenezer",
        "Adam",
        "Jeremiah",
        "Sam",
        "Nicholas",
        "Aaron",
        "Oliver",
        "Timothy",
        "Nathaniel",
        "Edgar",
        "Emanuel",
        "Leonard",
        "Noah",
        "Griffith",
        "Jonas",
        "Allen",
        "Ephraim",
        "Nathan",
        "Elias",
        "Ambrose",
        "Caleb",
        "Dennis",
        "Rees",
        "Solomon",
        "Rowland",
        "Horace",
        "Ellis",
        "Abel",
        "Louis",
        "Phillip",
        "Isaiah",
        "Roger",
        "Simeon",
        "Paul",
        "Ben",
        "Morgan",
        "Simon",
        "Sydney",
        "Lawrence",
        "Augustus",
        "Clement",
        "Bernard",
        "Morris",
        "Wilson",
        "Squire",
        "Sampson",
        "Archibald",
        "Theophilus",
        "Israel",
        "Ezra",
        "Seth",
        "Dan",
        "Gilbert",
        "Horatio",
        "Jonah",
        "Humphrey",
        "Miles",
        "Silas",
        "Elisha",
        "Maurice",
        "Hiram",
        "Joel",
        "Uriah",
        "Wright",
        "Percy",
        "Vincent",
        "Reginald",
        "Septimus",
        "Enos",
        "Harold",
        "Allan",
        "Felix",
        "Johnson",
        "Mathew",
        "Bartholomew",
        "Theodore",
        "Austin",
        "Edmond",
        "Adolphus",
        "Smith",
        "Robinson",
        "Absalom",
        "Valentine",
        "Jenkin",
        "Lionel",
        "Harrison",
        "Howard",
        "Hubert",
        "Matthias",
        "Cuthbert",
        "Giles",
        "Shadrach",
        "Wilfred",
        "Hartley",
        "Jim",
        "Douglas",
        "Ezekiel",
        "Jasper",
        "Llewellyn",
        "Wallace",
        "Lot",
        "Arnold",
        "Denis",
        "Donald",
        "Gabriel",
        "Howell",
        "Samson",
        "Titus",
        "Abram",
        "Hezekiah",
        "Laurence",
        "Walker",
        "Christian",
        "Harvey",
        "Julius",
        "Oswald",
        "Stanley",
        "Watkin",
        "Marshall",
        "Oscar",
        "Spencer",
        "Thompson",
        "Watson",
        "Godfrey",
        "Zachariah",
        "Dick",
        "Esau",
        "Llewelyn",
        "Obadiah",
        "Percival",
        "Alan",
        "Nelson",
        "Nehemiah",
      ],
      Female: [
        "Mary",
        "Elizabeth",
        "Sarah",
        "Ann",
        "Jane",
        "Emma",
        "Eliza",
        "Ellen",
        "Margaret",
        "Hannah",
        "Emily",
        "Martha",
        "Alice",
        "Harriet",
        "Maria",
        "Louisa",
        "Fanny",
        "Charlotte",
        "Caroline",
        "Catherine",
        "Frances",
        "Isabella",
        "Anne",
        "Lucy",
        "Amelia",
        "Susan",
        "Esther",
        "Rebecca",
        "Susannah",
        "Eleanor",
        "Matilda",
        "Clara",
        "Agnes",
        "Julia",
        "Catharine",
        "Harriett",
        "Anna",
        "Rachel",
        "Lydia",
        "Sophia",
        "Susanna",
        "Betsy",
        "Ruth",
        "Selina",
        "Grace",
        "Kate",
        "Annie",
        "Helen",
        "Nancy",
        "Henrietta",
        "Phoebe",
        "Rose",
        "Betsey",
        "Jemima",
        "Betty",
        "Edith",
        "Priscilla",
        "Laura",
        "Jessie",
        "Rosa",
        "Bridget",
        "Amy",
        "Dorothy",
        "Dinah",
        "Lavinia",
        "Rhoda",
        "Ada",
        "Rosina",
        "Harriot",
        "Georgiana",
        "Adelaide",
        "Phebe",
        "Barbara",
        "Florence",
        "Hester",
        "Christiana",
        "Ellin",
        "Rosanna",
        "Marian",
        "Leah",
        "Georgina",
        "Naomi",
        "Miriam",
        "Isabel",
        "Rosetta",
        "Rachael",
        "Kezia",
        "Mercy",
        "Janet",
        "Angelina",
        "Thirza",
        "Augusta",
        "Letitia",
        "Harriott",
        "Joanna",
        "Helena",
        "Bertha",
        "Sally",
        "Deborah",
        "Jennet",
        "Johanna",
        "Sabina",
        "Teresa",
        "Gertrude",
        "Theresa",
        "Cecilia",
        "Phillis",
        "Bessy",
        "Abigail",
        "Celia",
        "Marianne",
        "Katherine",
        "Nanny",
        "Flora",
        "Prudence",
        "Annis",
        "Olive",
        "Patience",
        "Diana",
        "Marion",
        "Winifred",
        "Clarissa",
        "Dorcas",
        "Gwenllian",
        "Agness",
        "Constance",
        "Judith",
        "Arabella",
        "Hephzibah",
        "Elinor",
        "Adah",
        "Honor",
        "Selena",
        "Amanda",
        "Rosannah",
        "Lois",
        "Pamela",
        "Adeline",
        "Cordelia",
        "Margery",
        "Blanche",
        "Ellenor",
        "Keziah",
        "Kitty",
        "Zillah",
        "Josephine",
        "Emely",
        "Emmeline",
        "Katharine",
        "Margaretta",
        "Tabitha",
        "Annette",
        "Lavina",
        "Charity",
        "Victoria",
        "Eunice",
        "Jessey",
        "Mahala",
        "Rosena",
        "Tamar",
        "Bessey",
        "Faith",
        "Hellen",
        "Jenny",
        "Lettice",
        "Tryphena",
        "Drusilla",
        "Edna",
        "Levina",
        "Elenor",
        "Honora",
        "Bessie",
        "Elisabeth",
        "Lizzy",
        "Olivia",
        "Lucretia",
        "Ellinor",
        "Margarett",
        "Marie",
        "Dora",
        "Emeline",
        "Gwen",
        "Juliana",
        "Millicent",
        "Cecelia",
        "Rosamond",
        "Kathleen",
        "Mildred",
        "Adela",
        "Christina",
        "Cicely",
        "Georgianna",
        "Leonora",
        "Louise",
        "Myra",
        "Beatrice",
        "Maud",
        "Penelope",
        "Philippa",
        "Blanch",
        "Joan",
        "Thomasin",
      ],
    },
    Dwarf: {
      //scand based
      Male: [
        "Amund",
        "Arvid",
        "Bjorn",
        "Canute",
        "Carolus",
        "Carson",
        "Dag",
        "Davin",
        "Denholm",
        "Dyre",
        "Egil",
        "Elvis",
        "Eric",
        "Filip",
        "Fortinbras",
        "Frey",
        "Haakon",
        "Hannes",
        "Igor",
        "Ingmar",
        "Ingvar",
        "Jarl",
        "Kaj",
        "Karr",
        "Kelsey",
        "Kerr",
        "Kettil",
        "Knute",
        "Kolby",
        "Lars",
        "Ludvig",
        "Lunt",
        "Mats",
        "Nels",
        "Niels",
        "Norb",
        "Odell",
        "Odo",
        "Olan",
        "Pal",
        "Quinby",
        "Rad",
        "Rune",
        "Skjøld",
        "Snorre",
        "Steinar",
        "Stieran",
        "Sven",
        "Sølve",
        "Thiassi",
        "Thoralf",
        "Thorin",
        "Thorstein",
        "Toste",
        "Tryggvi",
        "Ulffr",
        "Ulick",
        "Ull",
        "Ulrik",
        "Ulster",
        "Ultar",
        "Vali",
        "Vannevar",
        "Vanslow",
        "Vidar",
        "Vidkun",
        "Viggo",
        "Viljalmr",
        "Viljo",
        "Von",
        "Waage",
        "Wray",
        "Zvi",
      ],
      Female: [
        "Alleta",
        "Bo",
        "Dagna",
        "Dahlia",
        "Delling",
        "Eir",
        "Erica",
        "Evonne",
        "Freya",
        "Gudrun",
        "Gunda",
        "Halle",
        "Idonea",
        "Ingrid",
        "Jesen",
        "Karena",
        "Kelda",
        "Kelsey",
        "Kiersten",
        "Krystyn",
        "Lang",
        "Larsen",
        "Linnea",
        "Lis",
        "Lisolette",
        "Litzy",
        "Loki",
        "Lundy",
        "Malin",
        "Marny",
        "Mia",
        "Nissa",
        "Quenby",
        "Quinby",
        "Ran",
        "Ranveig",
        "Rinda",
        "Runa",
        "Sanna",
        "Savea",
        "Selma",
        "Signa",
        "Signild",
        "Sigrun",
        "Snøfrid",
        "Sonja",
        "Sorley",
        "Svea",
        "Synnove",
        "Thorborg",
        "Thurid",
        "Thyrrni",
        "Toril",
        "Toyah",
        "Tyra",
        "Ula",
        "Unn",
        "Valkyrie",
        "Vanja",
        "Vigdis",
        "Viola",
        "Ylwa",
        "Zainab",
      ],
    },
    Elf: {
      Male: [
        "Aeniar",
        "Agarwenamath",
        "Aglargiw",
        "Amarthadhod",
        "Amdirchon",
        "Amdirdhaer",
        "Amdirren",
        "Amlugaeleb",
        "Amonion",
        "Amrúthor",
        "Angwedh",
        "Annachad",
        "Annúngilon",
        "Annússer",
        "Annûn",
        "Aramarth",
        "Arasdir",
        "Aron",
        "Arradir",
        "Baralin",
        "Boldor",
        "Bronwe",
        "Cabor",
        "Cailion",
        "Calechon",
        "Cannion",
        "Caranorion",
        "Caror",
        "Celebremen",
        "Crannion",
        "Curuven",
        "Côl",
        "Dimaethor",
        "Draug",
        "Duindir",
        "Durdir",
        "Esgalchanar",
        "Estolaben",
        "Ethirher",
        "Fuirchanar",
        "Gaelon",
        "Gailon",
        "Galador",
        "Galasdaer",
        "Garavion",
        "Gawadrion",
        "Gromben",
        "Gruithoron",
        "Gurchanar",
        "Gurgaramben",
        "Gwaechanar",
        "Gwainor",
        "Haeben",
        "Haedor",
        "Halben",
        "Hamben",
        "Hamon",
        "Helphen",
        "Hithui",
        "Hwinioron",
        "Idhremen",
        "Ionaer",
        "Iphannion",
        "Lomben",
        "Lumorndaer",
        "Maechenebion",
        "Maegorochon",
        "Maenion",
        "Mildor",
        "Málon",
        "Nath",
        "Natthor",
        "Ningaearphen",
        "Nirornion",
        "Noenor",
        "Nordaer",
        "Núrphen",
        "Oreldor",
        "Oron",
        "Pelingildir",
        "Pethanar",
        "Raevion",
        "Redor",
        "Rennor",
        "Rethon",
        "Rhudol",
        "Rondil",
        "Ríben",
        "Serechon",
        "Seregnir",
        "Sírchon",
        "Tandil",
        "Thondaer",
        "Tinchanar",
        "Tinnu",
        "Tulustor",
        "Uialben",
        "Uirchon",
        "Ŷr",
      ],
      Female: [
        "Aenel",
        "Aenil",
        "Agaraen",
        "Agararod",
        "Agarvran",
        "Alpharod",
        "Amatharth",
        "Amdiradan",
        "Amdiralwed",
        "Amdirchand",
        "Amdirchir",
        "Amdirdhaer",
        "Amdiredhel",
        "Amdirfel",
        "Amdirhel",
        "Amdirnoen",
        "Amdirphen",
        "Amdirthal",
        "Amdirthanc",
        "Amdirthel",
        "Amdirvuin",
        "Amdirvuin",
        "Amlugaer",
        "Arahaelben",
        "Arahaeliel",
        "Arahaelwen",
        "Aramdir",
        "Belegurel",
        "Brand",
        "Brannamath",
        "Calaerel",
        "Calelbes",
        "Calelien",
        "Caline",
        "Calithilbes",
        "Calithildis",
        "Callondil",
        "Calneth",
        "Cannamdir",
        "Congwen",
        "Cossel",
        "Eniar",
        "Estelel",
        "Faelil",
        "Failiel",
        "Fandes",
        "Faniel",
        "Fanith",
        "Fanuihil",
        "Gaerphen",
        "Gaildes",
        "Galadel",
        "Galadien",
        "Geleth",
        "Gellam",
        "Gellamien",
        "Glawien",
        "Glawonis",
        "Globen",
        "Glorel",
        "Gollben",
        "Golldes",
        "Gurthel",
        "Gwennith",
        "Hissael",
        "Hithaerdis",
        "Hithaeriel",
        "Laergul",
        "Mereneth",
        "Merengwen",
        "Muindes",
        "Norgaladeth",
        "Norgaladiel",
        "Norgaladwen",
        "Ordes",
        "Ordis",
        "Oriel",
        "Orphen",
        "Rirosdis",
        "Saeledhel",
        "Saeleth",
        "Saeliel",
        "Saelien",
        "Saelneth",
        "Silmacil",
        "Sídthel",
        "Tanca",
        "Thangurdis",
        "Túrbes",
        "Túrel",
        "Túrphen",
        "Vanimelde",
        "Vanisaila",
        "Voronda",
        "Ñóle",
      ],
    },
    Halfling: {
      Male: [
        "Ackley",
        "Acton",
        "Adney",
        "Alcott",
        "Alden",
        "Aldwin",
        "Alfred",
        "Almer",
        "Alton",
        "Ayers",
        "Baldwin",
        "Barden",
        "Brandon",
        "Byron",
        "Chad",
        "Charlton",
        "Clifford",
        "Cuthbert",
        "Dallin",
        "Digby",
        "Donald",
        "Dunstan",
        "Eardley",
        "Earl",
        "Edgar",
        "Edmund",
        "Edward",
        "Edwin",
        "Eldred",
        "Elliot",
        "Elmer",
        "Erling",
        "Ewing",
        "Farley",
        "Fairfax",
        "Flint",
        "Garrett",
        "Garrick",
        "Garson",
        "Gladstone",
        "Hamilton",
        "Harold",
        "Herbert",
        "Hereward",
        "Kenelm",
        "Kenley",
        "Keyon",
        "Knox",
        "Landon",
        "Leighton",
        "Manton",
        "Milton",
        "Morton",
        "Norton",
        "Ogden",
        "Orton",
        "Osbert",
        "Patton",
        "Peyton",
        "Presley",
        "Radford",
        "Raleigh",
        "Ranald",
        "Ransford",
        "Remington",
        "Rudd",
        "Rudyard",
        "Saxon",
        "Seger",
        "Shaw",
        "Sheldon",
        "Sherman",
        "Sinjon",
        "Somerset",
        "Stafford",
        "Teon",
        "Terrel",
        "Thane",
        "Thatcher",
        "Thorpe",
        "Vance",
        "Varden",
        "Wade",
        "Wallis",
        "Wesley",
        "Weston",
        "Woodrow",
        "Wystan",
      ],
      Female: [
        "Aldreda",
        "Alison",
        "Alodie",
        "Alvina",
        "Amberjill",
        "Athelean",
        "Bedelia",
        "Bernia",
        "Berta",
        "Berthilda",
        "Blossom",
        "Blythe",
        "Brook",
        "Carleigh",
        "Carling",
        "Carlotta",
        "Chelsea",
        "Claiborne",
        "Clovis",
        "Columbia",
        "Corliss",
        "Daisy",
        "Daralis",
        "Dawn",
        "Eartha",
        "Ebba",
        "Edaena",
        "Edda",
        "Edeva",
        "Edwina",
        "Elfin",
        "Elvina",
        "Ember",
        "Ena",
        "Faina",
        "Farren",
        "Fern",
        "Fleta",
        "Giselle",
        "Gleda",
        "Godiva",
        "Golda",
        "Gytha",
        "Haylee",
        "Heather",
        "Holly",
        "Ida",
        "Jillian",
        "Joy",
        "Kendria",
        "Leala",
        "Levina",
        "Mildred",
        "Myla",
        "Nelda",
        "Odilia",
        "Obelia",
        "Oceana",
        "Octavia",
        "Palma",
        "Poppy",
        "Radella",
        "Roberta",
        "Selby",
        "Shirley",
        "Storm",
        "Tatum",
        "Ulla",
        "Vala",
        "Whitney",
        "Wilona",
        "Yedda",
        "",
        "",
        "",
        "",
        "Old English names that are unisex",
        "Aubrey",
        "Audrey",
        "Avery",
        "Bentley",
        "Carrington",
        "Chance",
        "Dana",
        "Darnell",
        "“From Airelle",
        "Dayton",
        "Devon",
        "",
        "Ellery",
        "Elton",
        "Emmet",
        "Everild",
        "Harley",
        "Harper",
        "Kinsey",
        "Linden",
        "Madison",
        "Manton",
        "Meldon",
        "Merrill",
        "Payton",
        "Perry",
        "Randall",
        "Ravenel",
        "Ripley",
      ],
    },
  },
  lastNames: {
    Human: [
      "Smith",
      "Jones",
      "Williams",
      "Taylor",
      "Brown",
      "Davies",
      "Evans",
      "Thomas",
      "Wilson",
      "Johnson",
      "Roberts",
      "Robinson",
      "Thompson",
      "Wright",
      "Walker",
      "White",
      "Edwards",
      "Hughes",
      "Green",
      "Hall",
      "Lewis",
      "Harris",
      "Clarke",
      "Patel",
      "Jackson",
      "Wood",
      "Turner",
      "Martin",
      "Cooper",
      "Hill",
      "Morris",
      "Ward",
      "Moore",
      "Clark",
      "Baker",
      "Harrison",
      "King",
      "Morgan",
      "Lee",
      "Allen",
      "James",
      "Phillips",
      "Scott",
      "Watson",
      "Davis",
      "Parker",
      "Bennett",
      "Price",
      "Griffiths",
      "Young",
      "Khan",
      "Mitchell",
      "Cook",
      "Bailey",
      "Carter",
      "Richardson",
      "Shaw",
      "Kelly",
      "Collins",
      "Bell",
      "Hussain",
      "Richards",
      "Cox",
      "Miller",
      "Begum",
      "Murphy",
      "Ali",
      "Marshall",
      "Simpson",
      "Anderson",
      "Ellis",
      "Adams",
      "Wilkinson",
      "Ahmed",
      "Foster",
      "Powell",
      "Chapman",
      "Singh",
      "Webb",
      "Rogers",
      "Mason",
      "Gray",
      "Hunt",
      "Owen",
      "Matthews",
      "Palmer",
      "Holmes",
      "Mills",
      "Campbell",
      "Lloyd",
      "Barnes",
      "Knight",
      "Butler",
      "Russell",
      "Barker",
      "Stevens",
      "Jenkins",
      "Dixon",
      "Fisher",
      "Harvey",
      "Pearson",
      "Murray",
      "Graham",
      "Fletcher",
      "Howard",
      "Gibson",
      "Andrews",
      "Walsh",
      "Elliott",
      "Reynolds",
      "Saunders",
      "Ford",
      "Stewart",
      "Payne",
      "Fox",
      "Pearce",
      "Day",
      "Brooks",
      "Lawrence",
      "West",
      "Kaur",
      "Cole",
      "Atkinson",
      "Bradley",
      "Gill",
      "Spencer",
      "Ball",
      "Dawson",
      "Burton",
      "Watts",
      "Rose",
      "Booth",
      "Perry",
      "Wells",
      "Armstrong",
      "O'Brien",
      "Francis",
      "Rees",
      "Grant",
      "Hart",
      "Hudson",
      "Hayes",
      "Newman",
      "Ryan",
      "Webster",
      "Barrett",
      "Gregory",
      "Hunter",
      "Marsh",
      "Lowe",
      "Carr",
      "Riley",
      "Page",
      "Shah",
      "Woods",
      "Dunn",
      "Stone",
      "Berry",
      "Parsons",
      "Hawkins",
      "Harding",
      "Holland",
      "Porter",
      "Newton",
      "Oliver",
      "Reed",
      "Bird",
      "Reid",
      "Williamson",
      "Gardner",
      "Dean",
      "Lane",
      "Bates",
      "Kennedy",
      "Robertson",
      "Cooke",
      "Parry",
      "Burgess",
      "Walton",
      "Bishop",
      "Henderson",
      "Nicholson",
      "Burns",
      "Shepherd",
      "Nicholls",
      "Cross",
      "Warren",
      "Freeman",
      "Long",
      "Sutton",
      "Yates",
      "Ross",
      "Robson",
      "Hodgson",
      "Curtis",
      "Hamilton",
      "Hopkins",
      "Harper",
      "Watkins",
      "Coleman",
      "Chambers",
      "Moss",
      "McDonald",
      "Byrne",
      "Hardy",
      "Wheeler",
      "Sharp",
      "Osborne",
      "Potter",
      "Jordan",
      "Griffin",
      "George",
      "McCarthy",
      "O'Neill",
      "Akhtar",
      "Hutchinson",
      "Rowe",
      "Pritchard",
      "O'Connor",
      "Gordon",
      "Johnston",
      "Wallace",
      "May",
      "Willis",
      "Miles",
      "Read",
      "Stephenson",
      "Hammond",
      "Gilbert",
      "Arnold",
      "Stevenson",
      "Walters",
      "Higgins",
      "Doyle",
      "Hewitt",
      "Buckley",
      "Slater",
      "Barber",
      "Burke",
      "Austin",
      "Nelson",
      "Mann",
      "Frost",
      "Whitehead",
      "Lambert",
      "Stephens",
      "Blake",
      "Goodwin",
      "Woodward",
      "Barton",
    ],
    //could flesh these out, limited run so far
    HalflingAdj: [
      "Better",
      "Bitter",
      "Brown",
      "Fat",
      "Good",
      "Har",
      "Hard",
      "Hollow",
      "Large",
      "Little",
      "Long",
      "Plain",
      "Short",
      "Tall",
      "Under",
      "Whit",
      "Wide",
    ],
    HalflingNoun: [
      "Bag",
      "Barrow",
      "Brew",
      "Buck",
      "Burrow",
      "Chaff",
      "Clay",
      "Cotton",
      "Foot",
      "Gates",
      "Hand",
      "Hill",
      "Hole",
      "Man",
      "Plough",
    ],
  },
  characterTraits: {
    all: [
      "Active",
      "Admirable",
      "Adventurous",
      "Affectionate",
      "Aggressive",
      "Agreeable",
      "Ambitious",
      "Appreciative",
      "Argumentative",
      "Arrogant",
      "Athletic",
      "Attentive",
      "Babyish",
      "Bold",
      "Bossy",
      "Bratty",
      "Brave",
      "Brilliant",
      "Calm",
      "Capable",
      "Careful",
      "Careless",
      "Charismatic",
      "Charming",
      "Cheerful",
      "Childish",
      "Clever",
      "Clumsy",
      "Cold-hearted",
      "Compassionate",
      "Competitive",
      "Conceited",
      "Confident",
      "Conscientious",
      "Considerate",
      "Cooperative",
      "Courageous",
      "Courteous",
      "Cowardly",
      "Creative",
      "Critical",
      "Cross",
      "Cruel",
      "Curious",
      "Dangerous",
      "Daring",
      "Deceitful",
      "Dedicated",
      "Dependable",
      "Determined",
      "Disciplined",
      "Dishonest",
      "Disloyal",
      "Disrespectful",
      "Distractible",
      "Easygoing",
      "Educated",
      "Efficient",
      "Energetic",
      "Enthusiastic",
      "Evil",
      "Fair",
      "Faithful",
      "Fearless",
      "Fidgety",
      "Fierce",
      "Flexible",
      "Focused",
      "Foolish",
      "Forgetful",
      "Forgiving",
      "Friendly",
      "Fun-loving",
      "Funny",
      "Generous",
      "Gentle",
      "Glamorous",
      "Gracious",
      "Greedy",
      "Grouchy",
      "Guilty",
      "Gullible",
      "Hardworking",
      "Hateful",
      "Helpful",
      "Honest",
      "Honorable",
      "Hopeful",
      "Hopeless",
      "Humble",
      "Humorous",
      "Ignorant",
      "Imaginative",
      "Immature",
      "Impatient",
      "Impolite",
      "Impulsive",
      "Inactive",
      "Inconsiderate",
      "Independent",
      "Insensitive",
      "Insincere",
      "Insistent",
      "Insulting",
      "Intelligent",
      "Intolerant",
      "Irrational",
      "Irresponsible",
      "Kind",
      "Knowledgable",
      "Lazy",
      "Logical",
      "Loving",
      "Loyal",
      "Lucky",
      "Mannered",
      "Mature",
      "Mean",
      "Meticulous",
      "Modest",
      "Moody",
      "Mysterious",
      "Noisy",
      "Nosy",
      "Obedient",
      "Obnoxious",
      "Observant",
      "Optimistic",
      "Organized",
      "Paranoid",
      "Passionate",
      "Patient",
      "Peaceful",
      "Perseverant",
      "Persistent",
      "Pessimistic",
      "Picky",
      "Pleasant",
      "Polite",
      "Popular",
      "Precise",
      "Protective",
      "Proud",
      "Quick",
      "Quiet",
      "Rambunctious",
      "Relaxed",
      "Reliable",
      "Respectful",
      "Responsible",
      "Restless",
      "Rowdy",
      "Rude",
      "Sarcastic",
      "Sassy",
      "Secretive",
      "Self-reliant",
      "Selfish",
      "Sensitive",
      "Serious",
      "Shy",
      "Silly",
      "Sincere",
      "Skillful",
      "Sly",
      "Smart",
      "Sneaky",
      "Snobbish",
      "Sociable",
      "Spontaneous",
      "Stingy",
      "Strange",
      "Strict",
      "Strong",
      "Stubborn",
      "Studious",
      "Superficial",
      "Sweet",
      "Tactful",
      "Talented",
      "Talkative",
      "Tasteful",
      "Tenacious",
      "Thoughtful",
      "Thoughtless",
      "Thrifty",
      "Timid",
      "Tolerant",
      "Touchy",
      "Tough",
      "Trusting",
      "Trustworthy",
      "Uncaring",
      "Uncontrolled",
      "Uncooperative",
      "Understanding",
      "Unfriendly",
      "Unpredictable",
      "Unreliable",
      "Unselfish",
      "Useful",
      "Valiant",
      "Versatile",
      "Violent",
      "Vulgar",
      "Warm-hearted",
      "Weak",
      "Weird",
      "Wise",
      "Witty",
    ],
    only_positive: [
      "Active",
      "Admirable",
      "Adventurous",
      "Affectionate",
      "Agreeable",
      "Ambitious",
      "Appreciative",
      "Athletic",
      "Attentive",
      "Brave",
      "Brilliant",
      "Calm",
      "Capable",
      "Careful",
      "Charismatic",
      "Charming",
      "Cheerful",
      "Clever",
      "Compassionate",
      "Confident",
      "Conscientious",
      "Considerate",
      "Cooperative",
      "Courageous",
      "Courteous",
      "Creative",
      "Curious",
      "Daring",
      "Dedicated",
      "Dependable",
      "Disciplined",
      "Easygoing",
      "Educated",
      "Efficient",
      "Energetic",
      "Enthusiastic",
      "Fair",
      "Faithful",
      "Fearless",
      "Flexible",
      "Focused",
      "Forgiving",
      "Friendly",
      "Fun-loving",
      "Funny",
      "Generous",
      "Gentle",
      "Glamorous",
      "Gracious",
      "Hardworking",
      "Helpful",
      "Honest",
      "Honorable",
      "Hopeful",
      "Humble",
      "Humorous",
      "Imaginative",
      "Independent",
      "Intelligent",
      "Kind",
      "Knowledgable",
      "Logical",
      "Loving",
      "Loyal",
      "Lucky",
      "Mannered",
      "Mature",
      "Modest",
      "Observant",
      "Optimistic",
      "Organized",
      "Passionate",
      "Patient",
      "Peaceful",
      "Perseverant",
      "Persistent",
      "Pleasant",
      "Polite",
      "Popular",
      "Relaxed",
      "Reliable",
      "Respectful",
      "Responsible",
      "Self-reliant",
      "Sensitive",
      "Sincere",
      "Skillful",
      "Smart",
      "Sociable",
      "Strong",
      "Studious",
      "Sweet",
      "Tactful",
      "Talented",
      "Tasteful",
      "Tenacious",
      "ThoughOul",
      "Tolerant",
      "Trusting",
      "Trustworthy",
      "Understanding",
      "Useful",
      "Valiant",
      "Versatile",
      "Warm-hearted",
      "Wise",
      "Witty",
    ],
    only_neutral: [
      "Bold",
      "Clumsy",
      "Competitive",
      "Determined",
      "Fidgety",
      "Fierce",
      "Inactive",
      "Insistent",
      "Meticulous",
      "Mysterious",
      "Obedient",
      "Precise",
      "Protective",
      "Proud",
      "Quick",
      "Quiet",
      "Rambunctious",
      "Restless",
      "Sarcastic",
      "Sassy",
      "Secretive",
      "Serious",
      "Shy",
      "Silly",
      "Sly",
      "Spontaneous",
      "Stingy",
      "Strange",
      "Talkative",
      "Thrifty",
      "Timid",
      "Tough",
      "Unpredictable",
    ],
    only_negative: [
      "Aggressive",
      "Argumentative",
      "Arrogant",
      "Babyish",
      "Bossy",
      "Bratty",
      "Careless",
      "Childish",
      "Cold-hearted",
      "Conceited",
      "Cowardly",
      "Critical",
      "Cross",
      "Cruel",
      "Dangerous",
      "Deceitful",
      "Dishonest",
      "Disloyal",
      "Disrespectful",
      "Distractible",
      "Evil",
      "Foolish",
      "Forgetful",
      "Greedy",
      "Grouchy",
      "Guilty",
      "Gullible",
      "Hateful",
      "Hopeless",
      "Ignorant",
      "Immature",
      "Impatient",
      "Impolite",
      "Impulsive",
      "Inconsiderate",
      "Insensitive",
      "Insincere",
      "Insulting",
      "Intolerant",
      "Irrational",
      "Irresponsible",
      "Lazy",
      "Mean",
      "Moody",
      "Noisy",
      "Nosy",
      "Obnoxious",
      "Paranoid",
      "Pessimistic",
      "Picky",
      "Rowdy",
      "Rude",
      "Selfish",
      "Sneaky",
      "Snobbish",
      "Strict",
      "Stubborn",
      "Superficial",
      "Thoughtless",
      "Touchy",
      "Uncaring",
      "Uncontrolled",
      "Uncooperative",
      "Unfriendly",
      "Unreliable",
      "Unselfish",
      "Violent",
      "Vulgar",
      "Weak",
      "Weird",
    ],
  },
  job: {
    agriculture: [
      "Animal Handler",
      "Arborist",
      "Baler",
      "Beekeeper",
      "Birdcatcher",
      "Cowherd",
      "Dairyboy/Dairymaid",
      "Falconer",
      "Farmer",
      "Fisher",
      "Forager",
      "Gamekeeper",
      "Groom",
      "Herder",
      "Horse Trainer",
      "Hunter",
      "Master-of-Horses",
      "Master-of-Hounds",
      "Miller",
      "Miner",
      "Pathfinder",
      "Prospector",
      "Ranger",
      "Renderer",
      "Shepherd",
      "Stablehand",
      "Thresher",
      "Trapper",
      "Vintner",
      "Woodcutter",
      "Zookeeper",
    ],
    construction: [
      "Architect",
      "Brickmaker",
      "Brickmason",
      "Carpenter",
      "Claymason",
      "Construction Worker",
      "Plasterer",
      "Roadlayer",
      "Roofer",
      "Stonemason",
      "Streetlayer",
      "Thatcher",
    ],
    arts: [
      "Acrobat",
      "Actor",
      "Athlete",
      "Street Musician",
      "Celebrity",
      "Chef",
      "Circus Performer",
      "Dancer",
      "Fashion Designer",
      "Gladiator",
      "Glasspainter",
      "Jester",
      "Illuminator",
      "Minstrel",
      "Musician",
      "Painter",
      "Piper",
      "Playwright",
      "Poet",
      "Sculptor",
      "Singer/Soprano",
      "Skald",
      "Tattooist",
      "Wrestler/Brawler",
      "Writer",
    ],
    business: [
      "Accountant",
      "Actuary",
      "Ale/Wine Draper",
      "Appraiser",
      "Auctioneer",
      "Banker",
      "Bathhouse Owner",
      "Bookkeeper",
      "Brothel Owner/Pimp",
      "Chandler",
      "Collector",
      "Entrepreneur",
      "Fishmonger",
      "General Contractor",
      "Grocer",
      "Guild Master",
      "Innkeeper",
      "Ironmonger",
      "Land Surveyor",
      "Merchant",
      "Peddler",
      "Plantation Owner",
      "Speculator",
      "Street Vendor",
      "Thriftdealer",
      "Tradesman",
    ],
    communications: [
      "Billboardposter",
      "Courier",
      "Herald",
      "Interpreter",
      "Linguist",
      "Messenger",
      "Town Crier",
      "Translator",
    ],
    crafts: [
      "Accoutrement",
      "Maker",
      "Alabasterer",
      "Armorer",
      "Blacksmith",
      "Bladesmith",
      "Bookbinder",
      "Bottler",
      "Bowyer",
      "Brewer",
      "Broom Maker",
      "Candlemaker",
      "Cardmaker",
      "Cartwright",
      "Cobbler",
      "Cooper/Hooper",
      "Cutler",
      "Dyer",
      "Embroiderer",
      "Engraver",
      "Fletcher",
      "Furniture Artisan",
      "Furrier",
      "Glassmaker",
      "Glovemaker",
      "Goldsmith",
      "Silversmith",
      "Guilder",
      "Hatter",
      "Jem Cutter",
      "Jeweler",
      "Leatherworker",
      "Locksmith",
      "Luthier",
      "Mercer",
      "Potter",
      "Printer",
      "Rope-maker",
      "Saddler",
      "Seamstress/Tailor",
      "Soaper",
      "Tanner",
      "Taxidermist",
      "Thatcher",
      "Tinker",
      "Toymaker",
      "Watchmaker",
      "Weaponsmith",
      "Weaver",
      "Wheelwright",
      "Whittler",
      "Woodcarver",
    ],
    crime: [
      "Assassin",
      "Bandit",
      "Burglar",
      "Conman",
      "Cockfighter",
      "Gamefighter",
      "Crime Boss",
      "Cutpurse",
      "Drug Dealer",
      "Drug Lord",
      "Fence",
      "Highwayman",
      "Kidnapper",
      "Loan Shark",
      "Outlaw",
      "Pirate",
      "Poacher",
      "Raider",
      "Smuggler",
      "Thief/Rogue",
    ],
    educated: [
      "Abecedarian",
      "Anthropologist",
      "Apprentice",
      "Archaeologist",
      "Archivist",
      "Artificer",
      "Assayer",
      "Astrologer",
      "Botanist",
      "Cartographer",
      "Chemist",
      "Dean",
      "Engineer",
      "Historian",
      "Horologist",
      "Librarian",
      "Mathematician",
      "Philosopher",
      "Professor",
      "Researcher",
      "Scribe",
      "Student",
      "Teacher",
      "Theologian",
      "Tutor",
    ],
    government_law: [
      "Affeeror",
      "Agister",
      "Alderman",
      "Alienist",
      "Archduke",
      "Archduchess",
      "Aristocrat",
      "Assay Master",
      "Baron/Baroness",
      "Chancellor",
      "Chief",
      "Constable",
      "Count/Countess",
      "Courtier",
      "Diplomat",
      "Duke/Duchess",
      "Emperor/Empress",
      "Judge",
      "King/Queen",
      "Knight",
      "Lady-in-Waiting",
      "Lawyer/Advocate",
      "Marquess",
      "Master-of-Coin",
      "Master-of-the-",
      "Revels",
      "Minister",
      "Noble",
      "Orator",
      "Prince/Princess",
      "Senator",
      "Spymaster",
      "Steward",
      "Squire",
      "Tax Collector",
      "Viscount",
      "Viscountess",
      "Ward",
    ],
    health: [
      "Accoucheur",
      "Obstetrician",
      "Alchemist",
      "Apothecary",
      "Bloodletter",
      "Doctor",
      "Healer",
      "Herbalist",
      "Midwife",
      "Mortician",
      "Nurse",
      "Physician",
      "Surgeon",
      "Veterinarian",
    ],
    common_labor: [
      "Acater",
      "Ale/Wine Tunner",
      "Baker",
      "Barber",
      "Barkeep",
      "Barmaid",
      "Butcher",
      "Caregiver",
      "Charcoal Maker",
      "Chatelaine",
      "Majordomo",
      "Chimney Sweeper",
      "Clerk",
      "Cook",
      "Copyist",
      "Croupier",
      "Distiller",
      "Florist",
      "Food & Drink Taster",
      "Gardener",
      "Gongfarmer",
      "Gravedigger",
      "Housemaid",
      "Kitchen Drudge",
      "Laborer",
      "Lamplighter",
      "Landscaper",
      "Laundry Worker",
      "Longshoreman",
      "Maid/Butler",
      "Orphanage Caretaker",
      "Page",
      "Pastry Chef",
      "Plumer",
      "Porter",
      "Prostitute",
      "Quarryman",
      "Rag-and-Bone Man",
      "Slave",
      "Street Sweeper",
      "Tavern Worker",
      "Trainer",
      "Vermin Catcher",
      "Water Bearer",
    ],
    magical: [
      "Abjurer",
      "Archmage",
      "Augurer",
      "Conjuror",
      "Druid",
      "Elementalist",
      "Enchanter",
      "Enchantress",
      "Evoker",
      "Hearth-witch",
      "Illusionist",
      "Mage",
      "Medium",
      "Necromancer",
      "Ritualist",
      "Runecaster",
      "Sage",
      "Seer/Oracle",
      "Shaman",
      "Shapeshifter",
      "Sorcerer/Sorceress",
      "Summoner",
      "Transmuter",
      "Warlock",
      "Witchdoctor",
      "Witch",
      "Wizard",
      "Wordsmith",
    ],
    military: [
      "Admiral",
      "Archer",
      "Bailiff",
      "Bodyguard",
      "Bouncer",
      "Captain",
      "Castellan",
      "Cavalier",
      "City Watch",
      "Commissar",
      "Crossbowman",
      "Detective",
      "Investigator",
      "Drummer/Fifer",
      "Duelist",
      "Executioner",
      "Field Medic",
      "Combat Medic",
      "Fireman",
      "Friar",
      "Guard",
      "General",
      "Inspection Officer",
      "Intelligence Officer",
      "Jailer",
      "Man-at-Arms",
      "Marshall",
      "Mercenary",
      "Privateer",
      "Quartermaster",
      "Royal Guard",
      "Runner",
      "Sapper",
      "Sentinel",
      "Sergeant",
      "Sergeant-at-Arms",
      "Scout",
      "Siege Artillerist",
      "Slave Driver",
      "Soldier",
      "Spearman",
      "Special Forces",
      "Spy",
      "Tactician",
      "Tollkeeper",
      "Torturer",
      "Warden",
      "Warmage",
    ],
    religion: [
      "Abbot",
      "Acolyte",
      "Almoner",
      "Archbishop",
      "Bishop",
      "Cardinal",
      "Chaplain",
      "Clergy",
      "Cleric",
      "Cultist",
      "Cult Leader",
      "Diviner",
      "Exorcist",
      "Friar",
      "High Priest",
      "Inquisitor",
      "Missionary",
      "Monk",
      "Nun",
      "Paladin",
      "Pardoner",
      "Priest",
      "Prophet",
      "Sexton",
      "Templar",
    ],
    transportation: [
      "Boatman",
      "Bosun",
      "Cabbie/Wagoner",
      "Caravaneer",
      "Caravan Guard",
      "Charioteer",
      "Carter",
      "Ferryman",
      "First Mate",
      "Helmsman",
      "Navigator",
      "Purser",
      "Sailor",
      "Sea Captain",
      "Shipwright",
      "Swab",
    ],
    self_employed: [
      "Adventurer",
      "Beggar/Pauper",
      "Blood Hunter",
      "Monster Hunter",
      "Bounty Hunter",
      "Deserter",
      "Disgraced Noble",
      "Dungeon Delver",
      "Elder/Retiree",
      "Exile",
      "Explorer",
      "Ex-Criminal",
      "Far Traveler",
      "Folk Hero",
      "Fool",
      "Gambler",
      "Grave Robber",
      "Tomb Raider",
      "Heckler",
      "Heretic",
      "Hermit",
      "Housewife",
      "Househusband",
      "Pilgrim",
      "Rebel",
      "Political Dissident",
      "Refugee",
      "Runaway Slave",
      "Savage",
      "Squatter",
      "Town Gossip",
      "Urchin",
      "Vagabond",
    ],
  },
  desires: {
    all: [
      "Power",
      "Independence",
      "Wealth",
      "Acceptance",
      "Order",
      "Honor",
      "Vengeance",
      "Romance",
      "Food",
      "Peace",
      "Celebrity",
      "Balance",
      "Talent",
      "Pleasures of the Flesh",
      "Brutality",
      "Intellectual Challenge",
      "Brotherhood",
      "Creativity",
      "Irresistibility",
      "Salvation",
    ],
  },
};

export default characteristics;
