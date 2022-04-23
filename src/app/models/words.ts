// Gotten from https://7esl.com/7-letter-words/


export const LetterStatus = {
    EMPTY: "empty",
    GREEN: "green",
    YELLOW: "yellow",
    GREY: "grey"
}

export interface Letter {
    letter: string,
    status: string;
}



export const LengthOfWords = {
    FOUR: 548,
    FIVE: 659,
    SIX: 451,
    SEVEN: 500
}

export const FourLetterWords = [
    "Area",
    "Army",
    "Baby",
    "Back",
    "Ball",
    "Band",
    "Bank",
    "Base",
    "Bill",
    "Body",
    "Book",
    "Call",
    "Card",
    "Care",
    "Case",
    "Cash",
    "City",
    "Club",
    "Cost",
    "Date",
    "Deal",
    "Door",
    "Duty",
    "East",
    "Edge",
    "Face",
    "Fact",
    "Farm",
    "Fear",
    "File",
    "Film",
    "Fire",
    "Firm",
    "Fish",
    "Food",
    "Foot",
    "Form",
    "Fund",
    "Game",
    "Girl",
    "Goal",
    "Gold",
    "Hair",
    "Half",
    "Hall",
    "Hand",
    "Head",
    "Help",
    "Hill",
    "Home",
    "Hope",
    "Hour",
    "Idea",
    "Jack",
    "John",
    "Kind",
    "King",
    "Lack",
    "Lady",
    "Land",
    "Life",
    "Line",
    "List",
    "Look",
    "Lord",
    "Loss",
    "Love",
    "Mark",
    "Mary",
    "Mind",
    "Miss",
    "Move",
    "Name",
    "Need",
    "News",
    "Note",
    "Page",
    "Pain",
    "Pair",
    "Park",
    "Part",
    "Past",
    "Path",
    "Paul",
    "Plan",
    "Play",
    "Post",
    "Race",
    "Rain",
    "Rate",
    "Rest",
    "Rise",
    "Risk",
    "Road",
    "Rock",
    "Role",
    "Room",
    "Rule",
    "Sale",
    "Seat",
    "Shop",
    "Show",
    "Side",
    "Sign",
    "Site",
    "Size",
    "Skin",
    "Sort",
    "Star",
    "Step",
    "Task",
    "Team",
    "Term",
    "Test",
    "Text",
    "Time",
    "Tour",
    "Town",
    "Tree",
    "Turn",
    "Type",
    "Unit",
    "User",
    "View",
    "Wall",
    "Week",
    "West",
    "Wife",
    "Will",
    "Wind",
    "Wine",
    "Wood",
    "Word",
    "Work",
    "Year",
    "Dese",
    "Enuf",
    "Feel",
    "Hern",
    "Hers",
    "Many",
    "Mine",
    "Mine",
    "Much",
    "Nada",
    "Nish",
    "None",
    "Nowt",
    "Ours",
    "Same",
    "Self",
    "Some",
    "Such",
    "That",
    "Thee",
    "Them",
    "They",
    "This",
    "Thon",
    "Thor",
    "Thou",
    "Thou",
    "Tone",
    "What",
    "When",
    "Whom",
    "Yere",
    "Your",
    "Bear",
    "Beat",
    "Blow",
    "Burn",
    "Call",
    "Care",
    "Cast",
    "Come",
    "Cook",
    "Cope",
    "Cost",
    "Dare",
    "Deal",
    "Deny",
    "Draw",
    "Drop",
    "Earn",
    "Face",
    "Fail",
    "Fall",
    "Fear",
    "Feel",
    "Fill",
    "Find",
    "Form",
    "Gain",
    "Give",
    "Grow",
    "Hang",
    "Hate",
    "Have",
    "Head",
    "Hear",
    "Help",
    "Hide",
    "Hold",
    "Hope",
    "Hurt",
    "Join",
    "Jump",
    "Keep",
    "Kill",
    "Know",
    "Land",
    "Last",
    "Lead",
    "Lend",
    "Lift",
    "Like",
    "Link",
    "Live",
    "Look",
    "Lose",
    "Love",
    "Make",
    "Mark",
    "Meet",
    "Mind",
    "Miss",
    "Move",
    "Must",
    "Name",
    "Need",
    "Note",
    "Open",
    "Pass",
    "Pick",
    "Plan",
    "Play",
    "Pray",
    "Pull",
    "Push",
    "Read",
    "Rely",
    "Rest",
    "Ride",
    "Ring",
    "Rise",
    "Risk",
    "Roll",
    "Rule",
    "Save",
    "Seek",
    "Seem",
    "Sell",
    "Send",
    "Shed",
    "Show",
    "Shut",
    "Sign",
    "Sing",
    "Slip",
    "Sort",
    "Stay",
    "Step",
    "Stop",
    "Suit",
    "Take",
    "Talk",
    "Tell",
    "Tend",
    "Test",
    "Turn",
    "Vary",
    "View",
    "Vote",
    "Wait",
    "Wake",
    "Walk",
    "Want",
    "Warn",
    "Wash",
    "Wear",
    "Will",
    "Wish",
    "Work",
    "Able",
    "Back",
    "Bare",
    "Bass",
    "Blue",
    "Bold",
    "Busy",
    "Calm",
    "Cold",
    "Cool",
    "Damp",
    "Dark",
    "Dead",
    "Deaf",
    "Dear",
    "Deep",
    "Dual",
    "Dull",
    "Dumb",
    "Easy",
    "Evil",
    "Fair",
    "Fast",
    "Fine",
    "Firm",
    "Flat",
    "Fond",
    "Foul",
    "Free",
    "Full",
    "Glad",
    "Good",
    "Grey",
    "Grim",
    "Half",
    "Hard",
    "Head",
    "High",
    "Holy",
    "Huge",
    "Just",
    "Keen",
    "Kind",
    "Last",
    "Late",
    "Lazy",
    "Like",
    "Live",
    "Lone",
    "Long",
    "Loud",
    "Main",
    "Male",
    "Mass",
    "Mean",
    "Mere",
    "Mild",
    "Nazi",
    "Near",
    "Neat",
    "Next",
    "Nice",
    "Okay",
    "Only",
    "Open",
    "Oral",
    "Pale",
    "Past",
    "Pink",
    "Poor",
    "Pure",
    "Rare",
    "Real",
    "Rear",
    "Rich",
    "Rude",
    "Safe",
    "Same",
    "Sick",
    "Slim",
    "Slow",
    "Soft",
    "Sole",
    "Sore",
    "Sure",
    "Tall",
    "Then",
    "Thin",
    "Tidy",
    "Tiny",
    "Tory",
    "True",
    "Ugly",
    "Vain",
    "Vast",
    "Very",
    "Vice",
    "Warm",
    "Wary",
    "Weak",
    "Wide",
    "Wild",
    "Wise",
    "Zero",
    "Both",
    "Else",
    "Ergo",
    "Lest",
    "Like",
    "Once",
    "Only",
    "Plus",
    "Save",
    "Sith",
    "Than",
    "That",
    "Then",
    "Thou",
    "Till",
    "Unto",
    "When",
    "Some",
    "Ably",
    "Afar",
    "Anew",
    "Away",
    "Back",
    "Damn",
    "Dead",
    "Deep",
    "Down",
    "Duly",
    "Easy",
    "Else",
    "Even",
    "Ever",
    "Fair",
    "Fast",
    "Flat",
    "Full",
    "Good",
    "Half",
    "Hard",
    "Here",
    "High",
    "Home",
    "Idly",
    "Just",
    "Late",
    "Like",
    "Live",
    "Long",
    "Loud",
    "Much",
    "Near",
    "Nice",
    "Okay",
    "Once",
    "Only",
    "Over",
    "Part",
    "Past",
    "Real",
    "Slow",
    "Solo",
    "Soon",
    "Sure",
    "That",
    "Then",
    "This",
    "Thus",
    "Very",
    "When",
    "Wide",
    "Ajax",
    "Amid",
    "Anti",
    "Apud",
    "Atop",
    "Bout",
    "Chez",
    "Come",
    "Dahn",
    "Doon",
    "Down",
    "From",
    "Gain",
    "Half",
    "Into",
    "Like",
    "Mang",
    "Mong",
    "Near",
    "Nigh",
    "Offa",
    "Onto",
    "Outa",
    "Over",
    "Past",
    "Post",
    "Save",
    "Than",
    "Thro",
    "Thru",
    "Till",
    "Unto",
    "Upon",
    "Vice",
    "Whiz",
    "With",
    "Ahem",
    "Ahoy",
    "Alas",
    "Amen",
    "Bang",
    "Blah",
    "Ciao",
    "Crud",
    "Damn",
    "Darn",
    "Egad",
    "Eina",
    "Fact",
    "Flip",
    "Fore",
    "Gosh",
    "Heck",
    "Hell",
    "Here",
    "Hist",
    "Hiya",
    "Hmmm",
    "Hmph",
    "Honk",
    "Hunh",
    "Jeez",
    "Jinx",
    "Like",
    "Lord",
    "Meow",
    "Mwah",
    "Nome",
    "Nyet",
    "Okay",
    "Oops",
    "Ouch",
    "Phew",
    "Phut",
    "Poof",
    "Pooh",
    "Pugh",
    "Shoo",
    "Snap",
    "Stop",
    "Sure",
    "Tara",
    "This",
    "Urgh",
    "Wall",
    "Waly",
    "Wham",
    "Whoa",
    "Word",
    "Yuck"
];

export const FiveLetterWords = [
    "Abuse",
    "Adult",
    "Agent",
    "Anger",
    "Apple",
    "Award",
    "Basis",
    "Beach",
    "Birth",
    "Block",
    "Blood",
    "Board",
    "Brain",
    "Bread",
    "Break",
    "Brown",
    "Buyer",
    "Cause",
    "Chain",
    "Chair",
    "Chest",
    "Chief",
    "Child",
    "China",
    "Claim",
    "Class",
    "Clock",
    "Coach",
    "Coast",
    "Court",
    "Cover",
    "Cream",
    "Crime",
    "Cross",
    "Crowd",
    "Crown",
    "Cycle",
    "Dance",
    "Death",
    "Depth",
    "Doubt",
    "Draft",
    "Drama",
    "Dream",
    "Dress",
    "Drink",
    "Drive",
    "Earth",
    "Enemy",
    "Entry",
    "Error",
    "Event",
    "Faith",
    "Fault",
    "Field",
    "Fight",
    "Final",
    "Floor",
    "Focus",
    "Force",
    "Frame",
    "Frank",
    "Front",
    "Fruit",
    "Glass",
    "Grant",
    "Grass",
    "Green",
    "Group",
    "Guide",
    "Heart",
    "Henry",
    "Horse",
    "Hotel",
    "House",
    "Image",
    "Index",
    "Input",
    "Issue",
    "Japan",
    "Jones",
    "Judge",
    "Knife",
    "Laura",
    "Layer",
    "Level",
    "Lewis",
    "Light",
    "Limit",
    "Lunch",
    "Major",
    "March",
    "Match",
    "Metal",
    "Model",
    "Money",
    "Month",
    "Motor",
    "Mouth",
    "Music",
    "Night",
    "Noise",
    "North",
    "Novel",
    "Nurse",
    "Offer",
    "Order",
    "Other",
    "Owner",
    "Panel",
    "Paper",
    "Party",
    "Peace",
    "Peter",
    "Phase",
    "Phone",
    "Piece",
    "Pilot",
    "Pitch",
    "Place",
    "Plane",
    "Plant",
    "Plate",
    "Point",
    "Pound",
    "Power",
    "Press",
    "Price",
    "Pride",
    "Prize",
    "Proof",
    "Queen",
    "Radio",
    "Range",
    "Ratio",
    "Reply",
    "Right",
    "River",
    "Round",
    "Route",
    "Rugby",
    "Scale",
    "Scene",
    "Scope",
    "Score",
    "Sense",
    "Shape",
    "Share",
    "Sheep",
    "Sheet",
    "Shift",
    "Shirt",
    "Shock",
    "Sight",
    "Simon",
    "Skill",
    "Sleep",
    "Smile",
    "Smith",
    "Smoke",
    "Sound",
    "South",
    "Space",
    "Speed",
    "Spite",
    "Sport",
    "Squad",
    "Staff",
    "Stage",
    "Start",
    "State",
    "Steam",
    "Steel",
    "Stock",
    "Stone",
    "Store",
    "Study",
    "Stuff",
    "Style",
    "Sugar",
    "Table",
    "Taste",
    "Terry",
    "Theme",
    "Thing",
    "Title",
    "Total",
    "Touch",
    "Tower",
    "Track",
    "Trade",
    "Train",
    "Trend",
    "Trial",
    "Trust",
    "Truth",
    "Uncle",
    "Union",
    "Unity",
    "Value",
    "Video",
    "Visit",
    "Voice",
    "Waste",
    "Watch",
    "Water",
    "While",
    "White",
    "Whole",
    "Woman",
    "World",
    "Youth",
    "Alcon",
    "Aught",
    "Hella",
    "Ought",
    "Thame",
    "There",
    "Thine",
    "Thine",
    "Where",
    "Which",
    "Whose",
    "Whoso",
    "Yours",
    "Yours",
    "Admit",
    "Adopt",
    "Agree",
    "Allow",
    "Alter",
    "Apply",
    "Argue",
    "Arise",
    "Avoid",
    "Begin",
    "Blame",
    "Break",
    "Bring",
    "Build",
    "Burst",
    "Carry",
    "Catch",
    "Cause",
    "Check",
    "Claim",
    "Clean",
    "Clear",
    "Climb",
    "Close",
    "Count",
    "Cover",
    "Cross",
    "Dance",
    "Doubt",
    "Drink",
    "Drive",
    "Enjoy",
    "Enter",
    "Exist",
    "Fight",
    "Focus",
    "Force",
    "Guess",
    "Imply",
    "Issue",
    "Judge",
    "Laugh",
    "Learn",
    "Leave",
    "Let’s",
    "Limit",
    "Marry",
    "Match",
    "Occur",
    "Offer",
    "Order",
    "Phone",
    "Place",
    "Point",
    "Press",
    "Prove",
    "Raise",
    "Reach",
    "Refer",
    "Relax",
    "Serve",
    "Shall",
    "Share",
    "Shift",
    "Shoot",
    "Sleep",
    "Solve",
    "Sound",
    "Speak",
    "Spend",
    "Split",
    "Stand",
    "Start",
    "State",
    "Stick",
    "Study",
    "Teach",
    "Thank",
    "Think",
    "Throw",
    "Touch",
    "Train",
    "Treat",
    "Trust",
    "Visit",
    "Voice",
    "Waste",
    "Watch",
    "Worry",
    "Would",
    "Write",
    "Above",
    "Acute",
    "Alive",
    "Alone",
    "Angry",
    "Aware",
    "Awful",
    "Basic",
    "Black",
    "Blind",
    "Brave",
    "Brief",
    "Broad",
    "Brown",
    "Cheap",
    "Chief",
    "Civil",
    "Clean",
    "Clear",
    "Close",
    "Crazy",
    "Daily",
    "Dirty",
    "Early",
    "Empty",
    "Equal",
    "Exact",
    "Extra",
    "Faint",
    "False",
    "Fifth",
    "Final",
    "First",
    "Fresh",
    "Front",
    "Funny",
    "Giant",
    "Grand",
    "Great",
    "Green",
    "Gross",
    "Happy",
    "Harsh",
    "Heavy",
    "Human",
    "Ideal",
    "Inner",
    "Joint",
    "Large",
    "Legal",
    "Level",
    "Light",
    "Local",
    "Loose",
    "Lucky",
    "Magic",
    "Major",
    "Minor",
    "Moral",
    "Naked",
    "Nasty",
    "Naval",
    "Other",
    "Outer",
    "Plain",
    "Prime",
    "Prior",
    "Proud",
    "Quick",
    "Quiet",
    "Rapid",
    "Ready",
    "Right",
    "Roman",
    "Rough",
    "Round",
    "Royal",
    "Rural",
    "Sharp",
    "Sheer",
    "Short",
    "Silly",
    "Sixth",
    "Small",
    "Smart",
    "Solid",
    "Sorry",
    "Spare",
    "Steep",
    "Still",
    "Super",
    "Sweet",
    "Thick",
    "Third",
    "Tight",
    "Total",
    "Tough",
    "Upper",
    "Upset",
    "Urban",
    "Usual",
    "Vague",
    "Valid",
    "Vital",
    "White",
    "Whole",
    "Wrong",
    "Young",
    "Afore",
    "After",
    "Bothe",
    "Other",
    "Since",
    "Slash",
    "Until",
    "Where",
    "While",
    "Aback",
    "Abaft",
    "Aboon",
    "About",
    "Above",
    "Accel",
    "Adown",
    "Afoot",
    "Afore",
    "Afoul",
    "After",
    "Again",
    "Agape",
    "Agogo",
    "Agone",
    "Ahead",
    "Ahull",
    "Alife",
    "Alike",
    "Aline",
    "Aloft",
    "Alone",
    "Along",
    "Aloof",
    "Aloud",
    "Amiss",
    "Amply",
    "Amuck",
    "Apace",
    "Apart",
    "Aptly",
    "Arear",
    "Aside",
    "Askew",
    "Awful",
    "Badly",
    "Bally",
    "Below",
    "Canny",
    "Cheap",
    "Clean",
    "Clear",
    "Coyly",
    "Daily",
    "Dimly",
    "Dirty",
    "Ditto",
    "Drily",
    "Dryly",
    "Dully",
    "Early",
    "Extra",
    "False",
    "Fatly",
    "Feyly",
    "First",
    "Fitly",
    "Forte",
    "Forth",
    "Fresh",
    "Fully",
    "Funny",
    "Gaily",
    "Gayly",
    "Godly",
    "Great",
    "Haply",
    "Heavy",
    "Hella",
    "Hence",
    "Hotly",
    "Icily",
    "Infra",
    "Jolly",
    "Laxly",
    "Lento",
    "Light",
    "Lowly",
    "Madly",
    "Maybe",
    "Never",
    "Newly",
    "Nobly",
    "Oddly",
    "Often",
    "Other",
    "Ought",
    "Party",
    "Piano",
    "Plain",
    "Plonk",
    "Plumb",
    "Prior",
    "Queer",
    "Quick",
    "Quite",
    "Ramen",
    "Rapid",
    "Redly",
    "Right",
    "Rough",
    "Round",
    "Sadly",
    "Secus",
    "Selly",
    "Sharp",
    "Sheer",
    "Shily",
    "Short",
    "Shyly",
    "Silly",
    "Since",
    "Sleek",
    "Slyly",
    "Small",
    "Sound",
    "Spang",
    "Srsly",
    "Stark",
    "Still",
    "Stone",
    "Stour",
    "Super",
    "Tally",
    "Tanto",
    "There",
    "Thick",
    "Tight",
    "Today",
    "Tomoz",
    "Truly",
    "Twice",
    "Under",
    "Utter",
    "Verry",
    "Wanly",
    "Wetly",
    "Where",
    "Wrong",
    "Wryly",
    "Abaft",
    "Aboon",
    "About",
    "Above",
    "Adown",
    "Afore",
    "After",
    "Along",
    "Aloof",
    "Among",
    "Below",
    "Circa",
    "Cross",
    "Furth",
    "Minus",
    "Neath",
    "Round",
    "Since",
    "Spite",
    "Under",
    "Until",
    "Aargh",
    "Adieu",
    "Adios",
    "Alack",
    "Aloha",
    "Avast",
    "Bakaw",
    "Basta",
    "Begad",
    "Bless",
    "Blige",
    "Brava",
    "Bravo",
    "Bring",
    "Chook",
    "Damme",
    "Dildo",
    "Ditto",
    "Frick",
    "Fudge",
    "Golly",
    "Gratz",
    "Hallo",
    "Hasta",
    "Havoc",
    "Hella",
    "Hello",
    "Howay",
    "Howdy",
    "Hullo",
    "Huzza",
    "Jesus",
    "Kapow",
    "Loose",
    "Lordy",
    "Marry",
    "Mercy",
    "Night",
    "Plonk",
    "Psych",
    "Quite",
    "Salve",
    "Skoal",
    "Sniff",
    "Sooey",
    "There",
    "Thiam",
    "Thwap",
    "Tough",
    "Twirp",
    "Viola",
    "Vivat",
    "Wacko",
    "Wahey",
    "Whist",
    "Wilma",
    "Wirra",
    "Woops",
    "Wowie",
    "Yecch",
    "Yeeha",
    "Yeesh",
    "Yowch",
    "Zowie",
];

export const SixLetterWords = [
    "Better",
    "Beyond",
    "Bishop",
    "Border",
    "Bottle",
    "Bottom",
    "Bought",
    "Branch",
    "Breath",
    "Bridge",
    "Bright",
    "Broken",
    "Budget",
    "Burden",
    "Bureau",
    "Button",
    "Camera",
    "Cancer",
    "Cannot",
    "Carbon",
    "Career",
    "Castle",
    "Casual",
    "Caught",
    "Center",
    "Centre",
    "Chance",
    "Change",
    "Charge",
    "Choice",
    "Choose",
    "Chosen",
    "Church",
    "Circle",
    "Client",
    "Closed",
    "Closer",
    "Coffee",
    "Column",
    "Combat",
    "Coming",
    "Common",
    "Comply",
    "Copper",
    "Corner",
    "Costly",
    "County",
    "Couple",
    "Course",
    "Covers",
    "Create",
    "Credit",
    "Crisis",
    "Custom",
    "Damage",
    "Danger",
    "Dealer",
    "Debate",
    "Decade",
    "Decide",
    "Defeat",
    "Defend",
    "Define",
    "Degree",
    "Demand",
    "Depend",
    "Deputy",
    "Desert",
    "Design",
    "Desire",
    "Detail",
    "Detect",
    "Device",
    "Differ",
    "Dinner",
    "Direct",
    "Doctor",
    "Dollar",
    "Domain",
    "Double",
    "Driven",
    "Driver",
    "During",
    "Easily",
    "Eating",
    "Editor",
    "Effect",
    "Effort",
    "Eighth",
    "Either",
    "Eleven",
    "Emerge",
    "Empire",
    "Employ",
    "Enable",
    "Ending",
    "Energy",
    "Engage",
    "Engine",
    "Enough",
    "Ensure",
    "Entire",
    "Entity",
    "Equity",
    "Escape",
    "Estate",
    "Ethnic",
    "Exceed",
    "Except",
    "Excess",
    "Expand",
    "Expect",
    "Expert",
    "Export",
    "Extend",
    "Extent",
    "Fabric",
    "Facing",
    "Factor",
    "Failed",
    "Fairly",
    "Fallen",
    "Family",
    "Famous",
    "Father",
    "Fellow",
    "Female",
    "Figure",
    "Filing",
    "Finger",
    "Finish",
    "Fiscal",
    "Flight",
    "Flying",
    "Follow",
    "Forced",
    "Forest",
    "Forget",
    "Formal",
    "Format",
    "Former",
    "Foster",
    "Fought",
    "Fourth",
    "French",
    "Friend",
    "Future",
    "Garden",
    "Gather",
    "Gender",
    "German",
    "Global",
    "Golden",
    "Ground",
    "Growth",
    "Guilty",
    "Handed",
    "Handle",
    "Happen",
    "Hardly",
    "Headed",
    "Health",
    "Height",
    "Hidden",
    "Holder",
    "Honest",
    "Impact",
    "Import",
    "Income",
    "Indeed",
    "Injury",
    "Inside",
    "Intend",
    "Intent",
    "Invest",
    "Island",
    "Itself",
    "Jersey",
    "Joseph",
    "Junior",
    "Killed",
    "Labour",
    "Latest",
    "Latter",
    "Launch",
    "Lawyer",
    "Leader",
    "League",
    "Leaves",
    "Legacy",
    "Length",
    "Lesson",
    "Letter",
    "Lights",
    "Likely",
    "Linked",
    "Liquid",
    "Listen",
    "Little",
    "Living",
    "Losing",
    "Lucent",
    "Luxury",
    "Mainly",
    "Making",
    "Manage",
    "Manner",
    "Manual",
    "Margin",
    "Marine",
    "Marked",
    "Market",
    "Martin",
    "Master",
    "Matter",
    "Mature",
    "Medium",
    "Member",
    "Memory",
    "Mental",
    "Merely",
    "Merger",
    "Method",
    "Middle",
    "Miller",
    "Mining",
    "Minute",
    "Mirror",
    "Mobile",
    "Modern",
    "Modest",
    "Module",
    "Moment",
    "Morris",
    "Mostly",
    "Mother",
    "Motion",
    "Moving",
    "Murder",
    "Museum",
    "Mutual",
    "Myself",
    "Narrow",
    "Nation",
    "Native",
    "Nature",
    "Nearby",
    "Nearly",
    "Nights",
    "Nobody",
    "Normal",
    "Notice",
    "Notion",
    "Number",
    "Object",
    "Obtain",
    "Office",
    "Offset",
    "Online",
    "Option",
    "Orange",
    "Origin",
    "Output",
    "Oxford",
    "Packed",
    "Palace",
    "Parent",
    "Partly",
    "Patent",
    "People",
    "Period",
    "Permit",
    "Person",
    "Phrase",
    "Picked",
    "Planet",
    "Player",
    "Please",
    "Plenty",
    "Pocket",
    "Police",
    "Policy",
    "Prefer",
    "Pretty",
    "Prince",
    "Prison",
    "Profit",
    "Proper",
    "Proven",
    "Public",
    "Pursue",
    "Raised",
    "Random",
    "Rarely",
    "Rather",
    "Rating",
    "Reader",
    "Really",
    "Reason",
    "Recall",
    "Recent",
    "Record",
    "Reduce",
    "Reform",
    "Regard",
    "Regime",
    "Region",
    "Relate",
    "Relief",
    "Remain",
    "Remote",
    "Remove",
    "Repair",
    "Repeat",
    "Replay",
    "Report",
    "Rescue",
    "Resort",
    "Result",
    "Retail",
    "Retain",
    "Return",
    "Reveal",
    "Review",
    "Reward",
    "Riding",
    "Rising",
    "Robust",
    "Ruling",
    "Safety",
    "Salary",
    "Sample",
    "Saving",
    "Saying",
    "Scheme",
    "School",
    "Screen",
    "Search",
    "Season",
    "Second",
    "Secret",
    "Sector",
    "Secure",
    "Seeing",
    "Select",
    "Seller",
    "Senior",
    "Series",
    "Server",
    "Settle",
    "Severe",
    "Sexual",
    "Should",
    "Signal",
    "Signed",
    "Silent",
    "Silver",
    "Simple",
    "Simply",
    "Single",
    "Sister",
    "Slight",
    "Smooth",
    "Social",
    "Solely",
    "Sought",
    "Source",
    "Soviet",
    "Speech",
    "Spirit",
    "Spoken",
    "Spread",
    "Spring",
    "Square",
    "Stable",
    "Status",
    "Steady",
    "Stolen",
    "Strain",
    "Stream",
    "Street",
    "Stress",
    "Strict",
    "Strike",
    "String",
    "Strong",
    "Struck",
    "Studio",
    "Submit",
    "Sudden",
    "Suffer",
    "Summer",
    "Summit",
    "Supply",
    "Surely",
    "Survey",
    "Switch",
    "Symbol",
    "System",
    "Taking",
    "Talent",
    "Target",
    "Taught",
    "Tenant",
    "Tender",
    "Tennis",
    "Thanks",
    "Theory",
    "Thirty",
    "Though",
    "Threat",
    "Thrown",
    "Ticket",
    "Timely",
    "Timing",
    "Tissue",
    "Toward",
    "Travel",
    "Treaty",
    "Trying",
    "Twelve",
    "Twenty",
    "Unable",
    "Unique",
    "United",
    "Unless",
    "Unlike",
    "Update",
    "Useful",
    "Valley",
    "Varied",
    "Vendor",
    "Versus",
    "Victim",
    "Vision",
    "Visual",
    "Volume",
    "Walker",
    "Wealth",
    "Weekly",
    "Weight",
    "Wholly",
    "Window",
    "Winner",
    "Winter",
    "Within",
    "Wonder",
    "Worker",
    "Wright",
    "Writer",
    "Yellow",
];

export const SevenLetterWords = [
    "Ability",
    "Absence",
    "Academy",
    "Account",
    "Accused",
    "Achieve",
    "Acquire",
    "Address",
    "Advance",
    "Adverse",
    "Advised",
    "Adviser",
    "Against",
    "Airline",
    "Airport",
    "Alcohol",
    "Alleged",
    "Already",
    "Analyst",
    "Ancient",
    "Another",
    "Anxiety",
    "Anxious",
    "Anybody",
    "Applied",
    "Arrange",
    "Arrival",
    "Article",
    "Assault",
    "Assumed",
    "Assured",
    "Attempt",
    "Attract",
    "Auction",
    "Average",
    "Backing",
    "Balance",
    "Banking",
    "Barrier",
    "Battery",
    "Bearing",
    "Beating",
    "Because",
    "Bedroom",
    "Believe",
    "Beneath",
    "Benefit",
    "Besides",
    "Between",
    "Billion",
    "Binding",
    "Brother",
    "Brought",
    "Burning",
    "Cabinet",
    "Caliber",
    "Calling",
    "Capable",
    "Capital",
    "Captain",
    "Caption",
    "Capture",
    "Careful",
    "Carrier",
    "Caution",
    "Ceiling",
    "Central",
    "Centric",
    "Century",
    "Certain",
    "Chamber",
    "Channel",
    "Chapter",
    "Charity",
    "Charlie",
    "Charter",
    "Checked",
    "Chicken",
    "Chronic",
    "Circuit",
    "Classes",
    "Classic",
    "Climate",
    "Closing",
    "Closure",
    "Clothes",
    "Collect",
    "College",
    "Combine",
    "Comfort",
    "Command",
    "Comment",
    "Compact",
    "Company",
    "Compare",
    "Compete",
    "Complex",
    "Concept",
    "Concern",
    "Concert",
    "Conduct",
    "Confirm",
    "Connect",
    "Consent",
    "Consist",
    "Contact",
    "Contain",
    "Content",
    "Contest",
    "Context",
    "Control",
    "Convert",
    "Correct",
    "Council",
    "Counsel",
    "Counter",
    "Country",
    "Crucial",
    "Crystal",
    "Culture",
    "Current",
    "Cutting",
    "Dealing",
    "Decided",
    "Decline",
    "Default",
    "Defence",
    "Deficit",
    "Deliver",
    "Density",
    "Deposit",
    "Desktop",
    "Despite",
    "Destroy",
    "Develop",
    "Devoted",
    "Diamond",
    "Digital",
    "Discuss",
    "Disease",
    "Display",
    "Dispute",
    "Distant",
    "Diverse",
    "Divided",
    "Drawing",
    "Driving",
    "Dynamic",
    "Eastern",
    "Economy",
    "Edition",
    "Elderly",
    "Element",
    "Engaged",
    "Enhance",
    "Essence",
    "Evening",
    "Evident",
    "Exactly",
    "Examine",
    "Example",
    "Excited",
    "Exclude",
    "Exhibit",
    "Expense",
    "Explain",
    "Explore",
    "Express",
    "Extreme",
    "Factory",
    "Faculty",
    "Failing",
    "Failure",
    "Fashion",
    "Feature",
    "Federal",
    "Feeling",
    "Fiction",
    "Fifteen",
    "Filling",
    "Finance",
    "Finding",
    "Fishing",
    "Fitness",
    "Foreign",
    "Forever",
    "Formula",
    "Fortune",
    "Forward",
    "Founder",
    "Freedom",
    "Further",
    "Gallery",
    "Gateway",
    "General",
    "Genetic",
    "Genuine",
    "Gigabit",
    "Greater",
    "Hanging",
    "Heading",
    "Healthy",
    "Hearing",
    "Heavily",
    "Helpful",
    "Helping",
    "Herself",
    "Highway",
    "Himself",
    "History",
    "Holding",
    "Holiday",
    "Housing",
    "However",
    "Hundred",
    "Husband",
    "Illegal",
    "Illness",
    "Imagine",
    "Imaging",
    "Improve",
    "Include",
    "Initial",
    "Inquiry",
    "Insight",
    "Install",
    "Instant",
    "Instead",
    "Intense",
    "Interim",
    "Involve",
    "Jointly",
    "Journal",
    "Journey",
    "Justice",
    "Justify",
    "Keeping",
    "Killing",
    "Kingdom",
    "Kitchen",
    "Knowing",
    "Landing",
    "Largely",
    "Lasting",
    "Leading",
    "Learned",
    "Leisure",
    "Liberal",
    "Liberty",
    "Library",
    "License",
    "Limited",
    "Listing",
    "Logical",
    "Loyalty",
    "Machine",
    "Manager",
    "Married",
    "Massive",
    "Maximum",
    "Meaning",
    "Measure",
    "Medical",
    "Meeting",
    "Mention",
    "Message",
    "Million",
    "Mineral",
    "Minimal",
    "Minimum",
    "Missing",
    "Mission",
    "Mistake",
    "Mixture",
    "Monitor",
    "Monthly",
    "Morning",
    "Musical",
    "Mystery",
    "Natural",
    "Neither",
    "Nervous",
    "Network",
    "Neutral",
    "Notable",
    "Nothing",
    "Nowhere",
    "Nuclear",
    "Nursing",
    "Obvious",
    "Offense",
    "Officer",
    "Ongoing",
    "Opening",
    "Operate",
    "Opinion",
    "Optical",
    "Organic",
    "Outcome",
    "Outdoor",
    "Outlook",
    "Outside",
    "Overall",
    "Pacific",
    "Package",
    "Painted",
    "Parking",
    "Partial",
    "Partner",
    "Passage",
    "Passing",
    "Passion",
    "Passive",
    "Patient",
    "Pattern",
    "Payable",
    "Payment",
    "Penalty",
    "Pending",
    "Pension",
    "Percent",
    "Perfect",
    "Perform",
    "Perhaps",
    "Phoenix",
    "Picking",
    "Picture",
    "Pioneer",
    "Plastic",
    "Pointed",
    "Popular",
    "Portion",
    "Poverty",
    "Precise",
    "Predict",
    "Premier",
    "Premium",
    "Prepare",
    "Present",
    "Prevent",
    "Primary",
    "Printer",
    "Privacy",
    "Private",
    "Problem",
    "Proceed",
    "Process",
    "Produce",
    "Product",
    "Profile",
    "Program",
    "Project",
    "Promise",
    "Promote",
    "Protect",
    "Protein",
    "Protest",
    "Provide",
    "Publish",
    "Purpose",
    "Pushing",
    "Qualify",
    "Quality",
    "Quarter",
    "Radical",
    "Railway",
    "Readily",
    "Reading",
    "Reality",
    "Realize",
    "Receipt",
    "Receive",
    "Recover",
    "Reflect",
    "Regular",
    "Related",
    "Release",
    "Remains",
    "Removal",
    "Removed",
    "Replace",
    "Request",
    "Require",
    "Reserve",
    "Resolve",
    "Respect",
    "Respond",
    "Restore",
    "Retired",
    "Revenue",
    "Reverse",
    "Rollout",
    "Routine",
    "Running",
    "Satisfy",
    "Science",
    "Section",
    "Segment",
    "Serious",
    "Service",
    "Serving",
    "Session",
    "Setting",
    "Seventh",
    "Several",
    "Shortly",
    "Showing",
    "Silence",
    "Silicon",
    "Similar",
    "Sitting",
    "Sixteen",
    "Skilled",
    "Smoking",
    "Society",
    "Somehow",
    "Someone",
    "Speaker",
    "Special",
    "Species",
    "Sponsor",
    "Station",
    "Storage",
    "Strange",
    "Stretch",
    "Student",
    "Studied",
    "Subject",
    "Succeed",
    "Success",
    "Suggest",
    "Summary",
    "Support",
    "Suppose",
    "Supreme",
    "Surface",
    "Surgery",
    "Surplus",
    "Survive",
    "Suspect",
    "Sustain",
    "Teacher",
    "Telecom",
    "Telling",
    "Tension",
    "Theatre",
    "Therapy",
    "Thereby",
    "Thought",
    "Through",
    "Tonight",
    "Totally",
    "Touched",
    "Towards",
    "Traffic",
    "Trouble",
    "Turning",
    "Typical",
    "Uniform",
    "Unknown",
    "Unusual",
    "Upgrade",
    "Upscale",
    "Utility",
    "Variety",
    "Various",
    "Vehicle",
    "Venture",
    "Version",
    "Veteran",
    "Victory",
    "Viewing",
    "Village",
    "Violent",
    "Virtual",
    "Visible",
    "Waiting",
    "Walking",
    "Wanting",
    "Warning",
    "Warrant",
    "Wearing",
    "Weather",
    "Webcast",
    "Website",
    "Wedding",
    "Weekend",
    "Welcome",
    "Welfare",
    "Western",
    "Whereas",
    "Whereby",
    "Whether",
    "Willing",
    "Winning",
    "Without",
    "Witness",
    "Working",
    "Writing",
    "Written",
];
