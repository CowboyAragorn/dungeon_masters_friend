//Special thanks to u/The_Camwin & others on reddit for compiling professions
let characteristics = {
  temperament: {
    feelings: [
      "Accepting",
      "Open",
      "Calm",
      "Centered",
      "Content",
      "Fulfilled",
      "Patient",
      "Peaceful",
      "Present",
      "Relaxed",
      "Serene",
      "Trusting",
      "Aliveness",
      "Joy",
      "Amazed",
      "Awe",
      "Bliss",
      "Delighted",
      "Eager",
      "Ecstatic",
      "Enchanted",
      "Energized",
      "Engaged",
      "Enthusiastic",
      "Excited",
      "Free",
      "Happy",
      "Inspired",
      "Invigorated",
      "Lively",
      "Passionate",
      "Playful",
      "Radiant",
      "Refreshed",
      "Rejuvenated",
      "Renewed",
      "Satisfied",
      "Thrilled",
      "Vibrant",
      "Angry",
      "Annoyed",
      "Agitated",
      "Aggravated",
      "Bitter",
      "Contempt",
      "Cynical",
      "Disdain",
      "Disgruntled",
      "Disturbed",
      "Edgy",
      "Exasperated",
      "Frustrated",
      "Furious",
      "Grouchy",
      "Hostile",
      "Impatient",
      "Irritated",
      "Irate",
      "Moody",
      "On edge",
      "Outraged",
      "Pissed",
      "Resentful",
      "Upset",
      "Vindictive",
      "Courageous ",
      "Powerful",
      "Adventurous",
      "Brave",
      "Capable",
      "Confident",
      "Daring",
      "Determined",
      "Free",
      "Grounded",
      "Proud",
      "Strong",
      "Worthy",
      "Valiant",
      "Connected ",
      "Loving",
      "Accepting",
      "Affectionate",
      "Caring",
      "Compassion",
      "Empathy",
      "Fulfilled",
      "Present",
      "Safe",
      "Warm",
      "Worthy",
      "Curious",
      "Engaged",
      "Exploring",
      "Fascinated",
      "Interested",
      "Intrigued",
      "Involved",
      "Stimulated",
      "Despair",
      "Sad",
      "Anguish",
      "Depressed",
      "Despondent",
      "Disappointed",
      "Discouraged",
      "Forlorn",
      "Gloomy",
      "Grief",
      "Heartbroken",
      "Hopeless",
      "Lonely",
      "Longing",
      "Melancholy",
      "Sorrow",
      "Teary",
      "Unhappy",
      "Upset",
      "Weary",
      "Yearning",
      "Disconnected",
      " Numb",
      "Aloof",
      "Bored",
      "Confused",
      "Distant",
      "Empty",
      "Indifferent",
      "Isolated",
      "Lethargic",
      "Listless",
      "Removed",
      "Resistant",
      "Shut Down",
      "Uneasy",
      "Withdrawn",
      "Embarrassed ",
      "Shame",
      "Ashamed",
      "Humiliated",
      "Inhibited",
      "Mortified",
      "Self-conscious",
      "Useless",
      "Weak",
      "Worthless",
      "Fear",
      "Afraid",
      "Anxious",
      "Apprehensive",
      "Frightened",
      "Hesitant",
      "Nervous",
      "Panic",
      "Paralyzed",
      "Scared",
      "Terrified",
      "Worried",
      "Fragile",
      "Helpless",
      "Sensitive",
      "Grateful",
      "Appreciative",
      "Blessed",
      "Delighted",
      "Fortunate",
      "Grace",
      "Humbled",
      "Lucky",
      "Moved",
      "Thankful",
      "Touched",
      "Guilt",
      "Regret",
      "Remorseful",
      "Sorry",
      "Hopeful",
      "Encouraged",
      "Expectant",
      "Optimistic",
      "Trusting",
      "Powerless",
      "Impotent",
      "Incapable",
      "Resigned",
      "Trapped",
      "Victim",
      "Tender",
      "Calm",
      "Caring",
      "Loving",
      "Reflective",
      "Self-loving",
      "Serene",
      "Vulnerable",
      "Warm",
      "Stressed ",
      "Tense",
      "Anxious",
      "Burned out",
      "Cranky",
      "Depleted",
      "Edgy",
      "Exhausted",
      "Frazzled",
      "Overwhelm",
      "Rattled",
      "Rejecting",
      "Restless",
      "Shaken",
      "Tight",
      "Weary",
      "Wornout",
      "Unsettled",
      "Doubt",
      "Apprehensive",
      "Concerned",
      "Dissatisfied",
      "Disturbed",
      "Grouchy",
      "Hesitant",
      "Inhibited",
      "Perplexed",
      "Questioning",
      "Rejecting",
      "Reluctant",
      "Shocked",
      "Skeptical",
      "Suspicious",
      "Ungrounded",
      "Unsure",
      "Worried",
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
      "Busker/Street",
      "Musician",
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
      "Glazier/Glassmaker",
      "Glovemaker",
      "Goldsmith/",
      "Silversmith",
      "Guilder",
      "Hatter/Milliner",
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
      "Charlatan/Conman",
      "Cockfighter/",
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
      "Scholar/Researcher",
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
      "Archduke/",
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
      "Orator/Spokesman",
      "Prince/Princess",
      "Senator",
      "Spymaster",
      "Steward",
      "Squire",
      "Tax Collector",
      "Viscount/",
      "Viscountess",
      "Ward",
    ],
    health: [
      "Accoucheur/",
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
      "Chatelaine/",
      "Majordomo",
      "Chimney Sweeper",
      "Clerk",
      "Cook",
      "Copyist",
      "Croupier",
      "Distiller",
      "Florist",
      "Food & Drink",
      "Taster",
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
      "Orphanage",
      "Caretaker",
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
      "Enchanter/",
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
      "Detective/",
      "Investigator",
      "Drummer/Fifer",
      "Duelist",
      "Executioner",
      "Field Medic/",
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
      "Special/Secret",
      "Troops",
      "Spy",
      "Tactician",
      "Tollkeeper",
      "Torturer",
      "Warden",
      "Warmage",
    ],
    religion: [
      "Abbot/Abbess",
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
      "High Priest/Pope",
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
      "Blood Hunter/",
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
      "Grave Robber/",
      "Tomb Raider",
      "Heckler",
      "Heretic",
      "Hermit",
      "Housewife/",
      "Househusband",
      "Pilgrim",
      "Rebel/Political",
      "Dissident",
      "Refugee",
      "Runaway Slave",
      "“Savage”",
      "Squatter",
      "Town Gossip",
      "Urchin",
      "Vagabond",
    ],
  },
};

export default characteristics;
