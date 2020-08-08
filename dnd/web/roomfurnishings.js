// <!--

// Age Categories
var random = 0;
var young = 1;
var mature = 2;
var old = 3;
var ancient = 4;

// Room Types
var wizard = 1;
var dungeon = 2;
var temple = 3; 
var tavern = 4; 
var torture = 5; 
var bedroom = 6;
var outdoor = 7;
var storeroom = 8;

// Data 
/*
var solids = 0; // (S)olids
materials[solids][0] = new Array("modern", "clean", "old", "corroded");
materials[solids][1] = new Array("polished", "dull", "dusty", "broken");
materials[solids][2] = new Array("shiny", "used", "dull", "fractured");
materials[solids][3] = new Array("sturdy", "worn", "scratched", "ruined");
materials[solids][4] = new Array("elegant", "dirty", "cobweb covered", "wrecked");
materials[solids][5] = new Array("brand new", "grimy", "chipped", "derelict");
materials[solids][6] = new Array("smart", "filthy", "damaged", "trashed");
materials[solids][7] = new Array("contemporary", "unclean", "repairable", "demolished");
materials[solids][8] = new Array("fashionable", "defiled", "shabby", "razed");
materials[solids][9] = new Array("clean", "old", "corroded", "rubble");

*/


/*
	if( age == young ) { }
	else if( age == mature) { }
	else if( age == old) { }
	else if( age == ancient) { }
*/


// var woods = 1; // (W)oods
function lookupWoodCondition(n, age)
{
	if( age == young )
	{
		if( n < 1 ) return "new";
		else if( n < 2 ) return "cherry";
		else if( n < 3 ) return "polished";
		else if( n < 4 ) return "stylish";
		else if( n < 5 ) return "well-made";
		else if( n < 6 ) return "recently cleaned";
		else if( n < 7 ) return "mahogany";
		else if( n < 8 ) return "newly finished";
		else if( n < 9 ) return "clean";
		else return "gilded";
	}
	else if( age == mature)
	{
		if( n < 1 ) return "wooden";
		else if( n < 2 ) return "nicked";
		else if( n < 3 ) return "well-used";
		else if( n < 4 ) return "washed-out";
		else if( n < 5 ) return "mahogany";
		else if( n < 6 ) return "stained";
		else if( n < 7 ) return "teak";
		else if( n < 8 ) return "redwood";
		else if( n < 9 ) return "faded";
		else return "worn";
	}
	else if( age == old)
	{
		if( n < 1 ) return "rough";
		else if( n < 2 ) return "grimy";
		else if( n < 3 ) return "filthy";
		else if( n < 4 ) return "fouled";
		else if( n < 5 ) return "stained";
		else if( n < 6 ) return "dirty";
		else if( n < 7 ) return "scratched";
		else if( n < 8 ) return "dried out";
		else if( n < 9 ) return "cobweb covered";
		else return "splintered";
	}
	else if( age == ancient)
	{
		if( n < 1 ) return "splintered";
		else if( n < 2 ) return "withered";
		else if( n < 3 ) return "desiccated";
		else if( n < 4 ) return "damaged";
		else if( n < 5 ) return "rotten";
		else if( n < 6 ) return "disintegrated";
		else if( n < 7 ) return "cracked";
		else if( n < 8 ) return "broken";
		else if( n < 9 ) return "ruined";
		else return "burnt";
	}
}

// var fabrics = 2; // (F)abrics
function lookupFabricCondition(n, age)
{
	if( age == young )
	{
		if( n < 1 ) return "smart";
		else if( n < 2 ) return "starched";
		else if( n < 3 ) return "fashionable";
		else if( n < 4 ) return "contemporary";
		else if( n < 5 ) return "downy";
		else if( n < 6 ) return "new";
		else if( n < 7 ) return "soft";
		else if( n < 8 ) return "fluffy";
		else if( n < 9 ) return "silky";
		else return "clean";
	}
	else if( age == mature)
	{
		if( n < 1 ) return "grungy";
		else if( n < 2 ) return "tousled";
		else if( n < 3 ) return "poorly maintained";
		else if( n < 4 ) return "ragged";
		else if( n < 5 ) return "threadbare";
		else if( n < 6 ) return "rumpled";
		else if( n < 7 ) return "faded";
		else if( n < 8 ) return "frayed";
		else if( n < 9 ) return "worn";
		else return "tattered";
	}
	else if( age == old)
	{
		if( n < 1 ) return "tatty";
		else if( n < 2 ) return "shabby";
		else if( n < 3 ) return "rotten";
		else if( n < 4 ) return "castoff";
		else if( n < 5 ) return "frayed";
		else if( n < 6 ) return "tattered";
		else if( n < 7 ) return "ripped";
		else if( n < 8 ) return "torn";
		else if( n < 9 ) return "moldy";
		else return "shredded";
	}
	else if( age == ancient)
	{
		if( n < 1 ) return "withered";
		else if( n < 2 ) return "rotted";
		else if( n < 3 ) return "nearly destroyed";
		else if( n < 4 ) return "burnt";
		else if( n < 5 ) return "disintegrated";
		else if( n < 6 ) return "shredded";
		else if( n < 7 ) return "tattered";
		else if( n < 8 ) return "scattered";
		else if( n < 9 ) return "rotten";
		else return "burnt";
	}
}

// var parchments = 7; // (P)archments
function lookupParchmentCondition(n, age)
{
	if( age == young )
	{
		if( n < 1 ) return "crisp";
		else if( n < 2 ) return "brand new";
		else if( n < 3 ) return "clearly marked";
		else if( n < 4 ) return "nearly finished";
		else if( n < 5 ) return "perfect";
		else if( n < 6 ) return "detailed";
		else if( n < 7 ) return "fresh";
		else if( n < 8 ) return "neat";
		else if( n < 9 ) return "fine";
		else return "clean";
	}
	else if( age == mature)
	{
		if( n < 1 ) return "clean";
		else if( n < 2 ) return "ragged";
		else if( n < 3 ) return "faint";
		else if( n < 4 ) return "withered";
		else if( n < 5 ) return "torn";
		else if( n < 6 ) return "dog-eared";
		else if( n < 7 ) return "dry";
		else if( n < 8 ) return "worn";
		else if( n < 9 ) return "faded";
		else return "faded";
	}
	else if( age == old)
	{
		if( n < 1 ) return "faded";
		else if( n < 2 ) return "dilapidated";
		else if( n < 3 ) return "withered";
		else if( n < 4 ) return "tattered";
		else if( n < 5 ) return "worn out";
		else if( n < 6 ) return "frayed";
		else if( n < 7 ) return "wilted";
		else if( n < 8 ) return "ripped";
		else if( n < 9 ) return "shredded";
		else return "rotten";
	}
	else if( age == ancient)
	{
		if( n < 1 ) return "rotten";
		else if( n < 2 ) return "crumbled";
		else if( n < 3 ) return "disintegrated";
		else if( n < 4 ) return "deteriorated";
		else if( n < 5 ) return "shredded";
		else if( n < 6 ) return "fragments of";
		else if( n < 7 ) return "moldy";
		else if( n < 8 ) return "soot covered";
		else if( n < 9 ) return "nearly completely burned";
		else return "dust";
	}
}

// var stoneworks = 11; // Sto(n)eworks
function lookupStoneworkCondition(n, age) 
{
	if( age == young )
	{
		if( n < 1 ) return "rough";
		else if( n < 2 ) return "uneven";
		else if( n < 3 ) return "rigid";
		else if( n < 4 ) return "tough";
		else if( n < 5 ) return "dense";
		else if( n < 6 ) return "strong";
		else if( n < 7 ) return "dry";
		else if( n < 8 ) return "firm";
		else if( n < 9 ) return "solid";
		else return "hard";
	}
	else if( age == mature)
	{
		if( n < 1 ) return "clean";
		else if( n < 2 ) return "dry";
		else if( n < 3 ) return "faded";
		else if( n < 4 ) return "messy";
		else if( n < 5 ) return "weakened";
		else if( n < 6 ) return "filthy";
		else if( n < 7 ) return "dull";
		else if( n < 8 ) return "nicked";
		else if( n < 9 ) return "worn";
		else return "old";
	}
	else if( age == old)
	{
		if( n < 1 ) return "old";
		else if( n < 2 ) return "dusty";
		else if( n < 3 ) return "cobweb covered";
		else if( n < 4 ) return "dank";
		else if( n < 5 ) return "cracked";
		else if( n < 6 ) return "chipped";
		else if( n < 7 ) return "dusty";
		else if( n < 8 ) return "dull";
		else if( n < 9 ) return "scratched";
		else return "corroded";
	}
	else if( age == ancient)
	{
		if( n < 1 ) return "corroded";
		else if( n < 2 ) return "fractured";
		else if( n < 3 ) return "disintegrated";
		else if( n < 4 ) return "neglected";
		else if( n < 5 ) return "severely deteriorated";
		else if( n < 6 ) return "structurally weakened";
		else if( n < 7 ) return "broken";
		else if( n < 8 ) return "fractured";
		else if( n < 9 ) return "ruined";
		else return "badly damaged";
	}
}

// var metals = 3; // (M)etals
function lookupMetalCondition(n, age) 
{
	if( age == young )
	{
		if( n < 1 ) return "polished";
		else if( n < 2 ) return "fashionable";
		else if( n < 3 ) return "new";
		else if( n < 4 ) return "shiny buffed";
		else if( n < 5 ) return "brilliantly shined";
		else if( n < 6 ) return "spotless";
		else if( n < 7 ) return "shiny";
		else if( n < 8 ) return "freshly oiled";
		else if( n < 9 ) return "clean";
		else return "brass";
	}
	else if( age == mature)
	{
		if( n < 1 ) return "tin";
		else if( n < 2 ) return "second-hand";
		else if( n < 3 ) return "contemporary";
		else if( n < 4 ) return "copper";
		else if( n < 5 ) return "serviceable";
		else if( n < 6 ) return "smudged";
		else if( n < 7 ) return "worn";
		else if( n < 8 ) return "dull";
		else if( n < 9 ) return "well-used but serviceable";
		else return "dented";
	}
	else if( age == old)
	{
		if( n < 1 ) return "bent";
		else if( n < 2 ) return "tarnished";
		else if( n < 3 ) return "blemished";
		else if( n < 4 ) return "worthless";
		else if( n < 5 ) return "near useless";
		else if( n < 6 ) return "twisted";
		else if( n < 7 ) return "dented";
		else if( n < 8 ) return "corroded";
		else if( n < 9 ) return "rusted";
		else return "cracked";
	}
	else if( age == ancient)
	{
		if( n < 1 ) return "cracked";
		else if( n < 2 ) return "busted";
		else if( n < 3 ) return "destroyed";
		else if( n < 4 ) return "wrecked";
		else if( n < 5 ) return "deteriorated";
		else if( n < 6 ) return "melted";
		else if( n < 7 ) return "broken";
		else if( n < 8 ) return "punctured";
		else if( n < 9 ) return "ruined";
		else return "reduced to shards";
	}
}



var ceramics = 8; // C(e)ramics
function lookupCeramicCondition(n, age) 
{
	if( age == young )
	{
		if( n < 1 ) return "smooth";
		else if( n < 2 ) return "porcelain";
		else if( n < 3 ) return "clay";
		else if( n < 4 ) return "china";
		else if( n < 5 ) return "very fragile";
		else if( n < 6 ) return "finely detailed";
		else if( n < 7 ) return "solid";
		else if( n < 8 ) return "polished";
		else if( n < 9 ) return "bright";
		else return "painted";
	}
	else if( age == mature)
	{
		if( n < 1 ) return "painted";
		else if( n < 2 ) return "breakable";
		else if( n < 3 ) return "discolored";
		else if( n < 4 ) return "faded";
		else if( n < 5 ) return "sturdy";
		else if( n < 6 ) return "unpolished";
		else if( n < 7 ) return "sealed";
		else if( n < 8 ) return "dull";
		else if( n < 9 ) return "dirty";
		else return "worn";
	}
	else if( age == old)
	{
		if( n < 1 ) return "worn";
		else if( n < 2 ) return "flawed";
		else if( n < 3 ) return "nicked";
		else if( n < 4 ) return "cracked";
		else if( n < 5 ) return "split";
		else if( n < 6 ) return "gashed";
		else if( n < 7 ) return "dusty";
		else if( n < 8 ) return "scratched";
		else if( n < 9 ) return "chipped";
		else return "fractured";
	}
	else if( age == ancient)
	{
		if( n < 1 ) return "fractured";
		else if( n < 2 ) return "crumbled";
		else if( n < 3 ) return "razed";
		else if( n < 4 ) return "wrecked";
		else if( n < 5 ) return "destroyed";
		else if( n < 6 ) return "pieces of a broken";
		else if( n < 7 ) return "cracked";
		else if( n < 8 ) return "broken";
		else if( n < 9 ) return "shattered";
		else return "broken";
	}
}


var organics = 5; // (O)rganics
function lookupOrganicCondition(n, age) 
{
	if( age == young )
	{
		if( n < 1 ) return "fresh";
		else if( n < 2 ) return "new";
		else if( n < 3 ) return "moist";
		else if( n < 4 ) return "warm";
		else if( n < 5 ) return "crispy";
		else if( n < 6 ) return "fresh cut";
		else if( n < 7 ) return "prepared";
		else if( n < 8 ) return "day old";
		else if( n < 9 ) return "preserved";
		else return "dried";
	}
	else if( age == mature)
	{
		if( n < 1 ) return "dried";
		else if( n < 2 ) return "hard";
		else if( n < 3 ) return "old";
		else if( n < 4 ) return "musty";
		else if( n < 5 ) return "bad";
		else if( n < 6 ) return "spoiled";
		else if( n < 7 ) return "scraps of";
		else if( n < 8 ) return "nibbled";
		else if( n < 9 ) return "partially eaten";
		else return "stale";
	}
	else if( age == old)
	{
		if( n < 1 ) return "insect ridden";
		else if( n < 2 ) return "decayed";
		else if( n < 3 ) return "mildewed";
		else if( n < 4 ) return "reeking";
		else if( n < 5 ) return "pungent";
		else if( n < 6 ) return "rancid";
		else if( n < 7 ) return "dank";
		else if( n < 8 ) return "putrid";
		else if( n < 9 ) return "rotten";
		else return "moldy";
	}
	else if( age == ancient)
	{
		if( n < 1 ) return "moldy";
		else if( n < 2 ) return "decayed";
		else if( n < 3 ) return "decomposing";
		else if( n < 4 ) return "putrefying";
		else if( n < 5 ) return "deteriorated";
		else if( n < 6 ) return "mold covered";
		else if( n < 7 ) return "corroded";
		else if( n < 8 ) return "crusted";
		else if( n < 9 ) return "fungi spotted";
		else return "dust";
	}
}

var glasswares = 4; // (G)lasswares
function lookupGlasswareCondition(n, age) 
{
	if( age == young )
	{
		if( n < 1 ) return "sparkly";
		else if( n < 2 ) return "delicate";
		else if( n < 3 ) return "immaculate";
		else if( n < 4 ) return "glass";
		else if( n < 5 ) return "dainty";
		else if( n < 6 ) return "detailed";
		else if( n < 7 ) return "gleaming";
		else if( n < 8 ) return "polished";
		else if( n < 9 ) return "bright";
		else return "clear";
	}
	else if( age == mature)
	{
		if( n < 1 ) return "clear";
		else if( n < 2 ) return "very fragile";
		else if( n < 3 ) return "breakable";
		else if( n < 4 ) return "flimsy";
		else if( n < 5 ) return "spindly";
		else if( n < 6 ) return "filthy";
		else if( n < 7 ) return "sumudged";
		else if( n < 8 ) return "dull";
		else if( n < 9 ) return "dirty";
		else return "worn";
	}
	else if( age == old)
	{
		if( n < 1 ) return "worn";
		else if( n < 2 ) return "brittle";
		else if( n < 3 ) return "cracked";
		else if( n < 4 ) return "flimsy";
		else if( n < 5 ) return "fragile";
		else if( n < 6 ) return "brittle";
		else if( n < 7 ) return "dusty";
		else if( n < 8 ) return "scratched";
		else if( n < 9 ) return "chipped";
		else return "fractured";
	}
	else if( age == ancient)
	{
		if( n < 1 ) return "fractured";
		else if( n < 2 ) return "smashed";
		else if( n < 3 ) return "ruined";
		else if( n < 4 ) return "destroyed";
		else if( n < 5 ) return "damaged";
		else if( n < 6 ) return "splintered";
		else if( n < 7 ) return "cracked";
		else if( n < 8 ) return "broken";
		else if( n < 9 ) return "shattered";
		else return "crushed";
	}
}


var liquids = 6; // (L)iquids
function lookupLiquidCondition(n, age) 
{
	if( age == young )
	{
		if( n < 1 ) return "trickling";
		else if( n < 2 ) return "bubbly";
		else if( n < 3 ) return "fizzy";
		else if( n < 4 ) return "sparkling";
		else if( n < 5 ) return "cool";
		else if( n < 6 ) return "warm";
		else if( n < 7 ) return "bubbling";
		else if( n < 8 ) return "fresh";
		else if( n < 9 ) return "effervescent";
		else return "clear";
	}
	else if( age == mature)
	{
		if( n < 1 ) return "clear";
		else if( n < 2 ) return "warmup";
		else if( n < 3 ) return "pale";
		else if( n < 4 ) return "cool";
		else if( n < 5 ) return "grimy";
		else if( n < 6 ) return "gritty";
		else if( n < 7 ) return "still";
		else if( n < 8 ) return "viscous";
		else if( n < 9 ) return "dirty";
		else return "filthy";
	}
	else if( age == old)
	{
		if( n < 1 ) return "filthy";
		else if( n < 2 ) return "gloomy";
		else if( n < 3 ) return "hazy";
		else if( n < 4 ) return "murky";
		else if( n < 5 ) return "muddy";
		else if( n < 6 ) return "milky";
		else if( n < 7 ) return "damp";
		else if( n < 8 ) return "dank";
		else if( n < 9 ) return "oily";
		else return "smoky";
	}
	else if( age == ancient)
	{
		if( n < 1 ) return "smoky";
		else if( n < 2 ) return "churned up";
		else if( n < 3 ) return "opaque";
		else if( n < 4 ) return "chalky";
		else if( n < 5 ) return "creamy";
		else if( n < 6 ) return "shadowy";
		else if( n < 7 ) return "cloudy";
		else if( n < 8 ) return "murky";
		else if( n < 9 ) return "putrid";
		else return "stagnant";
	}
}

var artistry = 9; // (A)rtistry
function lookupArtCondition(n, age) 
{
	if( age == young )
	{
		if( n < 1 ) return "finished";
		else if( n < 2 ) return "contemporary";
		else if( n < 3 ) return "detailed";
		else if( n < 4 ) return "fashionable";
		else if( n < 5 ) return "remarkable";
		else if( n < 6 ) return "finely detailed";
		else if( n < 7 ) return "masterpiece";
		else if( n < 8 ) return "novel";
		else if( n < 9 ) return "smooth";
		else return "clean";
	}
	else if( age == mature)
	{
		if( n < 1 ) return "clean";
		else if( n < 2 ) return "dust covered";
		else if( n < 3 ) return "neglected";
		else if( n < 4 ) return "unremarkable";
		else if( n < 5 ) return "dusty";
		else if( n < 6 ) return "lackluster";
		else if( n < 7 ) return "worn";
		else if( n < 8 ) return "faded";
		else if( n < 9 ) return "dirty";
		else return "old";
	}
	else if( age == old)
	{
		if( n < 1 ) return "old";
		else if( n < 2 ) return "tattered";
		else if( n < 3 ) return "dilapidated";
		else if( n < 4 ) return "nicked";
		else if( n < 5 ) return "stained";
		else if( n < 6 ) return "damaged";
		else if( n < 7 ) return "dusty";
		else if( n < 8 ) return "scratched";
		else if( n < 9 ) return "cobweb covered";
		else return "corroded";
	}
	else if( age == ancient)
	{
		if( n < 1 ) return "corroded";
		else if( n < 2 ) return "disintegrated";
		else if( n < 3 ) return "cumbled";
		else if( n < 4 ) return "burnt";
		else if( n < 5 ) return "wrecked";
		else if( n < 6 ) return "destroyed";
		else if( n < 7 ) return "broken";
		else if( n < 8 ) return "fractured";
		else if( n < 9 ) return "ruined";
		else return "rubble";
	}
}

var tallows = 10; // (T)allows
function lookupTallowCondition(n, age) 
{
	if( age == young )
	{
		if( n < 1 ) return "smooth";
		else if( n < 2 ) return "shiny";
		else if( n < 3 ) return "glossy";
		else if( n < 4 ) return "soft";
		else if( n < 5 ) return "pliable";
		else if( n < 6 ) return "flexible";
		else if( n < 7 ) return "solid";
		else if( n < 8 ) return "firm";
		else if( n < 9 ) return "bright";
		else return "painted";
	}
	else if( age == mature)
	{
		if( n < 1 ) return "dry";
		else if( n < 2 ) return "delicate";
		else if( n < 3 ) return "diffuse";
		else if( n < 4 ) return "shriveled";
		else if( n < 5 ) return "shrunken";
		else if( n < 6 ) return "dried";
		else if( n < 7 ) return "burnt";
		else if( n < 8 ) return "brittle";
		else if( n < 9 ) return "bent";
		else return "broken";
	}
	else if( age == old)
	{
		if( n < 1 ) return "candle stub";
		else if( n < 2 ) return "drippy";
		else if( n < 3 ) return "globs";
		else if( n < 4 ) return "splotches";
		else if( n < 5 ) return "drops of";
		else if( n < 6 ) return "beaded";
		else if( n < 7 ) return "wax blob";
		else if( n < 8 ) return "melted";
		else if( n < 9 ) return "wax drippings";
		else return "puddle";
	}
	else if( age == ancient)
	{
		if( n < 1 ) return "slimy";
		else if( n < 2 ) return "greasy";
		else if( n < 3 ) return "oily";
		else if( n < 4 ) return "corroded";
		else if( n < 5 ) return "decayed";
		else if( n < 6 ) return "deteriorated";
		else if( n < 7 ) return "moldy";
		else if( n < 8 ) return "ashen";
		else if( n < 9 ) return "ashes";
		else return "debris";
	}
}

var discarded = 12; // (D)iscarded
function lookupDiscardedCondition(n, age) 
{
	if( n < 1 ) return "discarded";
	else if( n < 2 ) return "remains of a";
	else if( n < 3 ) return "lost";
	else if( n < 4 ) return "abandoned";
	else if( n < 5 ) return "dumped";
	else if( n < 6 ) return "overgrown foliage covering a";
	else if( n < 7 ) return "neglected";
	else if( n < 8 ) return "derelict";
	else if( n < 9 ) return "deserted";
	else return "forsaken";
}


function makeReplacements( des, age )
{
	var index = 0;
	var modeReplace = 0;
	var lastIndex = des.length;
	var text = "";
	
	while( index < lastIndex )
	{
		if( des.charAt(index) == "%" )
		{
			modeReplace = !modeReplace;
			index++;
			continue;
		}
		else if( modeReplace == 0 )
		{
			text += des.charAt(index);
		}
		else if( modeReplace == 1)
		{
			// Replace Text
			//text += "[" + des.charAt(index) + "]";

			switch( des.charAt(index) )
			{
				default:
					text += "%" + des.charAt(index) + "%"; break;
				case "W":
					text += lookupWoodCondition( Math.floor((Math.random()*10)+1), age); break;
				case "P":
					text += lookupParchmentCondition( Math.floor((Math.random()*10)+1), age); break;
				case "F":
					text += lookupFabricCondition( Math.floor((Math.random()*10)+1), age); break;
				case "N":
					text += lookupStoneworkCondition( Math.floor((Math.random()*10)+1), age); break;
				case "M":
					text += lookupMetalCondition( Math.floor((Math.random()*10)+1), age); break;
				case "E":
					text += lookupCeramicCondition( Math.floor((Math.random()*10)+1), age); break;
				case "O":
					text += lookupOrganicCondition( Math.floor((Math.random()*10)+1), age); break;
				case "G":
					text += lookupGlasswareCondition( Math.floor((Math.random()*10)+1), age); break;
				case "L":
					text += lookupLiquidCondition( Math.floor((Math.random()*10)+1), age); break; 
				case "A":
					text += lookupArtCondition( Math.floor((Math.random()*10)+1), age); break;  
				case "T":
					text += lookupTallowCondition( Math.floor((Math.random()*10)+1), age); break;  
				case "D":
					text += lookupDiscardedCondition( Math.floor((Math.random()*10)+1), age); break;  			}
		}
		
		index++;
	}

	return text;
}


function decriptionLighting( n )
{
	// Young friendly light sources
	if( n < 5 ) return "a chandelier";
	else if( n < 10 ) return "a large fireplace with a mantle";
	else if( n < 15 ) return "fireplaces";
	else if( n < 20 ) return "wall sconces";
	else if( n < 25 ) return "lamps";
	else if( n < 30 ) return "lanterns";
	else if( n < 35 ) return "a fireplace";
	else if( n < 40 ) return "a pairs of wall sconces";
	else if( n < 42 ) return "large candles";
	else if( n < 44 ) return "a brazier & charcoal";
	else if( n < 46 ) return "torches";
	else if( n < 47 ) return "a furnace";
	else if( n < 48 ) return "a wood fire";

	// Mature poor light sources	
	else if( n < 49 ) return "candlesticks";
	else if( n < 50 ) return "a wall sconce";	
	else if( n < 51 ) return "a candlelabra";
	else if( n < 52 ) return "a lamp";
	else if( n < 53 ) return "a lantern";
	else if( n < 54 ) return "a brazier, charcoal and several votive lights";
	else if( n < 55 ) return "a large candle";
	else if( n < 56 ) return "a single torch";
	else if( n < 57 ) return "a barrel fire";
	else if( n < 58 ) return "glowing hot coals";
	else if( n < 59 ) return "glowing hot charcoal";
	// Old, Ancient no light sources.
	else return "";

}

function generateLightDescription( age )
{
	// Light lookup guidelines
	// n < 48 young
	// n < 60 mature
	// n < 100 old
	// n < 100 ancient

	var lookup = 0;
	switch( age )
	{
		default:      lookup = 48;
		case young:   lookup = 48;
		case mature:  lookup = 60;
		case old:     lookup = 100;
		case ancient: lookup = 100;
	}

	var lighting = decriptionLighting(Math.floor((Math.random()*lookup)+1));
	return lighting;
}

function generateSizeDescription(age, length, width, height)
{
	var room = "";
	var lighting = generateLightDescription( age );

	if( lighting == "" || height == 0)
		room = "There is no source of light, but when illuminated this";
	else
		room = "Light is coming from " + lighting + ". This";
	
	room += (height == 0) ? " area" : " room";
	room += " appears to be " + length;
	room += (height == 0) ? " yards" : "'";
	room += " x " + width;
	room += (height == 0) ? " yards" : "'";
	room += (height == 0) ? "." : 
		" and the ceiling is about " + height + "' high.";

	return room;	
}



function descriptionAirQuality( n )
{
	// Young
	if( n < 53 ) return "clear";
	else if( n < 60 ) return "misty";
	else if( n < 67) return "steamy";
	else if( n < 80) return "a filtered haze";
	// Older, Ancient weird effects.
	else if( n < 85) return "a smoky haze";
	else if( n < 91) return "dusty";
	else if( n < 96) return "a dusty haze";
	else if( n < 97) return "foggy";
	else if( n < 98) return "foggy near the floor";
	else if( n < 99) return "steamy near the floor";
	return "foggy near the ceiling";

}

function descriptionAirOdor( n )
{
	// Young friendlier smells
	if( n < 7) return "rosy smell";
	else if( n < 9) return "lilac smell";
	else if( n < 13) return "cedar smell";
	else if( n < 17) return "smoky smell";
	else if( n < 21) return "spicy smell";
	else if( n < 50) return "strong earthy smell";
	else if( n < 55) return "faint trace of incense";
	else if( n < 60) return "strong smell of incense";
	// Outdoor like smells, Older less kept smells
	else if( n < 63) return "salty wet smell";
	else if( n < 73) return "dank, moldy smell";
	else if( n < 80) return "chlorine smell";
	else if( n < 82) return "metallic smell";
	else if( n < 84) return "ozone smell";
	else if( n < 86) return "sulphurous smell";
	else if( n < 88) return "acrid smell";
	else if( n < 91) return "urine smell";
	else if( n < 93) return "manure smell";
	else if( n < 95) return "putrid smell";
	else if( n < 97) return "rotting vegetation smell";
	else return "stale, fetid smell";
}

function descriptionAirCurrent( n )
{
	if( n < 40) return "no breeze";
	else if( n < 42) return "a slight breeze";
	else if( n < 48) return "a slight downdraft";
	else if( n < 50) return "a slight updraft";
	else if( n < 55) return "a chilly draft";
	else if( n < 64) return "a still warm breeze";
	else if( n < 73) return "a still hot breeze";
	else if( n < 78) return "a slightly damp breeze";
	else if( n < 83) return "a gusting breeze";
	else if( n < 85) return "a cold current";
	else if( n < 87) return "a strong downdraft";
	else if( n < 89) return "a strong updraft";
	else if( n < 91) return "a strong, irregular breeze";
	else if( n < 95) return "a strong, steady breeze";
	return "a strong, moaning wind";
}

function generateAirDescription( age )
{
	// Air lookup guidelines
	// n < 50 young
	// n < 80 mature
	// n < 95 old
	// n < 100 ancient

	var lookup = 0;
	switch( age )
	{
		default:      lookup = 50;
		case young:   lookup = 50;
		case mature:  lookup = 80;
		case old:     lookup = 95;
		case ancient: lookup = 100;
	}

	var air = "";
	//air += "lookup = " + lookup;
	
	air += "The air is " + descriptionAirQuality(Math.floor((Math.random()*lookup)+1));
	air += " with " + descriptionAirCurrent(Math.floor((Math.random()*lookup)+1));
	air += " having a " + descriptionAirOdor(Math.floor((Math.random()*lookup)+1));
	air += ".";
	
	return air;
}

function descriptionSound( n )
{
	// Young, innocent, friendlier sounds
	if( n < 5) return "a bell tolling";
	else if( n < 10) return "a crier crying";
	else if( n < 20) return "dripping";
	else if( n < 25) return "splashing";
	else if( n < 30) return "murmur of a crowd";
	else if( n < 32) return "footsteps (ahead)";
	else if( n < 34) return "footsteps (approaching)";
	else if( n < 36) return "footsteps (behind)";
	else if( n < 38) return "footsteps (receding)";
	else if( n < 39) return "footsteps (side)";
	else if( n < 40) return "jingling";
	else if( n < 42) return "chanting";
	else if( n < 43) return "murmuring";
	else if( n < 44) return "rustling";
	else if( n < 45) return "music playing";
	else if( n < 46) return "horn/trumpet blaring";
	else if( n < 47) return "a gong ringing";
	else if( n < 48) return "drumming";
	else if( n < 49) return "chiming";
	// Older eerie sounds
	else if( n < 50) return "creaking";
	else if( n < 51) return "scratching";
	else if( n < 52) return "a slam echoing";
	else if( n < 53) return "a bang echoing";
	else if( n < 54) return "a thud reverberating";
	else if( n < 55) return "knocking";
	else if( n < 56) return "rattling";	
	else if( n < 57) return "humming";
	else if( n < 58) return "whispering";
	else if( n < 59) return "sneezing";
	else if( n < 60) return "sobbing";
	else if( n < 61) return "whining echo";
	else if( n < 62) return "thumping";
	else if( n < 63) return "shuffling";
	else if( n < 64) return "whistling";
	else if( n < 67) return "laughter";
	else if( n < 68) return "coughing";
	else if( n < 69) return "bellowing";
	else if( n < 70) return "buzzing";
	else if( n < 71) return "chirping";
	else if( n < 73) return "hissing";
	else if( n < 74) return "hooting";
	else if( n < 77) return "howling";
	// Ancient freaky sounds
	else if( n < 78) return "clanking";
	else if( n < 79) return "clicking";
	else if( n < 80) return "squeaking";
	else if( n < 83) return "scrambling";
	else if( n < 85) return "scuttling";
	else if( n < 86) return "snapping";
	else if( n < 90) return "groaning";
	else if( n < 91) return "grunting";
	else if( n < 92) return "grating";
	else if( n < 93) return "squealing";
	else if( n < 94) return "twanging echo";
	else if( n < 95) return "splintering";
	else if( n < 96) return "faint giggling echo";
	else if( n < 97) return "moaning howl";
	else if( n < 98) return "screaming echo";
	else if( n < 99) return "light roaring";
	else return "tapping";
}

function generateSoundDescription( age )
{
	// Sound lookup guidelines
	// n < 50 young
	// n < 70 mature
	// n < 90 old
	// n < 100 ancient

	var lookup = 0;
	switch( age )
	{
		default:      lookup = 50;
		case young:   lookup = 50;
		case mature:  lookup = 70;
		case old:     lookup = 90;
		case ancient: lookup = 100;
	}

	var sound = "";
	sound += "Those who are listening (Listen check DC " + Math.floor((Math.random()*25)+1);
	sound += ") hear " + descriptionSound(Math.floor((Math.random()*lookup)+1)) + ".";

	return sound;
}

//
// Locations in the Placement table are clustered for different
// areas of the room.  In the layout routine the results of the 
// random number generation are sorted so that a description
// doesn't generate a description that traverses the room several
// times in a confusing manner (on the left, on the right, on the
// left, in the center, on the right).
//
// Maintain the clustering when making changes so that the placement
// sorts well.
//
function descriptionPlacement( n )
{
	// door
	if( n < 2 ) return "By the door";
	else if( n < 6 ) return "Near the door";
	else if( n < 10 ) return "Close to the door";
	else if( n < 12 ) return "Neighboring the door";
	// wall
	else if( n < 16 ) return "By the wall";
	else if( n < 20 ) return "Near the wall";
	else if( n < 24 ) return "Close to the wall";
	else if( n < 26 ) return "On the opposite wall";
	// right
	else if( n < 30 ) return "On the right side";
	else if( n < 34 ) return "To the right";
	else if( n < 38 ) return "Towards the right";
	// left
	else if( n < 42 ) return "On the left side";
	else if( n < 46 ) return "To the left";
	else if( n < 50 ) return "Towards the left";
	
	else if( n < 54 ) return "Ahead";
	else if( n < 56 ) return "In front";
	else if( n < 58 ) return "To the front";
	else if( n < 62 ) return "Further on";
	
	else if( n < 64 ) return "Visible";
	else if( n < 66 ) return "Noticeable";
	// here
	else if( n < 68 ) return "Seen here";
	else if( n < 72 ) return "Located here";
	else if( n < 74 ) return "Featured here";
	else if( n < 76 ) return "Appearing here";
	else if( n < 78 ) return "Here";
	// room
	else if( n < 82 ) return "In the room";
	else if( n < 86 ) return "In this room";
	else if( n < 90 ) return "Within the room"
	else if( n < 94 ) return "Towards the center of the room";
	else if( n < 98 ) return "Almost in the middle of the room";
	else return "In the middle";
}

function layoutContents( rooms )
{
	//var sort_areas = new Array("door", "here", "room", "left", "wall", "right");

	// Generate layout decriptors
	var areas = new Array();
	for(i=0; i<rooms.length; i++)
		areas[i] = Math.floor((Math.random()*100)+1);

	// Sort - grouping nearby locations
	var sorted_areas = areas.sort( );

	// Layout
	var layout = new Array();
	var previous_prefix = 0;	
	for(i=0; i<rooms.length; i++)
	{
		if( sorted_areas[i] == previous_prefix )
			layout[i] = "Also, " + descriptionPlacement( sorted_areas[i] ).toLowerCase();
		else
			layout[i] = descriptionPlacement( sorted_areas[i] );

		previous_prefix = sorted_areas[i];
		layout[i] += " " + rooms[i] + "."
	}

	return layout;
}

function generateRoomContents(type, age, furniture)
{
	var rooms = new Array();

	for( i=0; i<furniture; i++)
	{
		var text = "";
		// text += descriptionPlacement( Math.floor((Math.random()*100)+1) ) + " ";
		text += makeReplacements( lookupRoomFurniture( type ), age ); 
		// text += ".";

		rooms[i] = "";		
		var index = 0;
		var modeReplace = 0;
		var lastIndex = text.length;
	
		while( index < lastIndex )
		{
			if( text.charAt(index) == "%" )
			{
				modeReplace = !modeReplace;
				index++;
				continue;
			}
			else if( modeReplace == 0 )
			{
				rooms[i] += text.charAt(index);
			}
			else if( modeReplace == 1)
			{
				// Replace Text
				if( text.charAt(index) == "I" )
					rooms[i] += makeReplacements( lookupRoomFurnishing( type ), age);
				else
					rooms[i] += "%" + text.charAt(index) + "%"; 
			}
		
			index++;
		}
	}

	return layoutContents( rooms );
}

function lookupRoomFurniture( type )
{
	switch(type)
	{
		default:
		case wizard: 
			return descriptionWizardFurniture( Math.floor((Math.random()*100)+1) ); break;
		case temple: 
			return descriptionReligiousFurniture( Math.floor((Math.random()*100)+1) ); break;
		case tavern: 
			return descriptionTavernFurniture( Math.floor((Math.random()*130)+1) ); break;
		case storeroom: 
			return descriptionStoreroomFurniture( Math.floor((Math.random()*100)+1) ); break;
		case bedroom: 
			return descriptionBedroomFurniture( Math.floor((Math.random()*100)+1) ); break;
		case torture: 
			return descriptionTortureFurniture( Math.floor((Math.random()*100)+1) ); break;
		case outdoor: 
			return descriptionOutdoorFurniture( Math.floor((Math.random()*100)+1) ); break;
		case dungeon: 
			return descriptionDungeonFurniture( Math.floor((Math.random()*100)+1) ); break;
	}
}

function lookupRoomFurnishing( type )
{
	switch(type)
	{
		default:
		case wizard: 
			return descriptionWizardFurnishing( Math.floor((Math.random()*65)+1) ); break;
		case temple: 
			return descriptionReligiousFurnishing( Math.floor((Math.random()*100)+1) ); break;
		case tavern: 
			return descriptionTavernFurnishing( Math.floor((Math.random()*102)+1) ); break;
		case storeroom: 
			return descriptionStoreroomFurnishing( Math.floor((Math.random()*100)+1) ); break;
		case bedroom: 
			return descriptionBedroomFurnishing( Math.floor((Math.random()*100)+1) ); break;
		case torture: 
			return descriptionTortureFurnishing( Math.floor((Math.random()*100)+1) ); break;
		case outdoor: 
			return descriptionOutdoorFurnishing( Math.floor((Math.random()*100)+1) ); break;
		case dungeon: 
			return descriptionDungeonFurnishing( Math.floor((Math.random()*100)+1) ); break;
	}
}


// Replacement format is specified as follows:
// Sections are wrapped in %...%
//
// (W)oods
// (F)abrics
// (P)archments
// Sto(n)eworks
//
// (S)olids
// (M)etals
// (G)lasswares
// (O)rganics
// (L)iquids
// C(e)ramics
// (A)rtistry
// (T)allows
// (D)iscarded

function descriptionWizardFurnishing( n )
{
	if( n < 1  ) return "%N% ivory statuette";
	else if( n < 2 ) return "a %G% alembic";
	else if( n < 3 ) return "a set of %M% balance & weights";
	else if( n < 4 ) return "a %G% beaker";
	else if( n < 5 ) return "a %M% bell";
	else if( n < 6 ) return "a %W% bellows";
	else if( n < 7 ) return "a bladder";
	else if( n < 8 ) return "a %G% bottle";
	else if( n < 9 ) return "a %P% book";
	else if( n < 10 ) return "a bowl";
	else if( n < 11 ) return "a tiny, %W% box";
	else if( n < 12 ) return "some %M% tongs";
	else if( n < 13 ) return "a strand of %M% wire";
	else if( n < 14 ) return "an unlit candles";
	else if( n < 15 ) return "a carafe";
	else if( n < 16 ) return "a chalk";
	else if( n < 17 ) return "a %W% cone, bull horn";
	else if( n < 18 ) return "a %W% cone, ram horn";
	else if( n < 19 ) return "a crucible";
	else if( n < 20 ) return "a %G% cruet";
	else if( n < 21 ) return "a %W% vulture-bone whistle";
	else if( n < 22 ) return "a %G% decanter";
	else if( n < 23 ) return "a waterclock";
	else if( n < 24 ) return "a tiny %P% fan";
	else if( n < 25 ) return "a silk %F% fan";
	else if( n < 26 ) return "a %G% flask";
	else if( n < 27 ) return "a %M% funnel";
	else if( n < 28 ) return "a clay hand";
	else if( n < 29 ) return "%N% stone hand";
	else if( n < 30 ) return "some herbs";
	else if( n < 31 ) return "a %M% horn";
	else if( n < 32 ) return "a %G% hourglass";
	else if( n < 33 ) return "a %G% vial";
	else if( n < 34 ) return "some %M% tweezers";
	else if( n < 35 ) return "a set of %G% convex lens";
	else if( n < 36 ) return "a set of %G% concave lens";
	else if( n < 37 ) return "a %G% tube (piping)";
	else if( n < 38 ) return "a %M% metal cube";
	else if( n < 39 ) return "a circular, %M% mirror";
	else if( n < 40 ) return "a small, %G% mirror";
	else if( n < 41 ) return "a tiny, %G% mirror";
	else if( n < 42 ) return "%N% mortar & pestle";
	else if( n < 43 ) return "a %W% paintbrush";
	else if( n < 44 ) return "a quill and sheets of %P% parchment";
	else if( n < 45 ) return "a %M% metal pendant";
	else if( n < 46 ) return "a %G% tube (container)";
	else if( n < 47 ) return "a %F% stuffed animal";
	else if( n < 48 ) return "a %M%, oval pin";
	else if( n < 49 ) return "a %G% pipette";
	else if( n < 50 ) return "a %G% prism";
	else if( n < 51 ) return "a %G% retort";
	else if( n < 52 ) return "a %W% mixing rod";
	else if( n < 53 ) return "a %W% stirring rod";
	else if( n < 54 ) return "a %P% scroll";
	else if( n < 55 ) return "a %W% scroll tube";
	else if( n < 56 ) return "a quill and %P% paper sheets";
	else if( n < 57 ) return "a %O% skin";
	else if( n < 58 ) return "a %W% skull";
	else if( n < 59 ) return "a %M% spoon";
	else if( n < 60 ) return "a %M% measuring spoon";
	else if( n < 61 ) return "a small, %W% book stand";
	else return "a %G% obsidian sphere";
}

function descriptionWizardFurniture( n )
{
	if( n < 3 ) return "are some %W% shelves containing many %P% books and tomes and %I%";
	else if( n < 6 ) return "are several %W% shelves containing some %P% books and tomes and %I%";
	else if( n < 9 ) return "is a %W% desk and a %F% padded chair. On the desk is %I%, %I%, and %I%";
	else if( n < 12 ) return "are several %W% desks and chairs. The desks each hold %I%, %I%, and %I%.";
	else if( n < 15 ) return "is a pair of %W% desks and chairs each holding %I%";
	else if( n < 18 ) return "are several %W% benches around a large, %W% table holding %I% and %I%";
	else if( n < 21 ) return "are several %W% benches and tables. The tables contain %I%, %I%, %I%, and %I%";
	else if( n < 24 ) return "is a group of %F% padded chairs";
	else if( n < 27 ) return "is a group of %W% armchairs";
	else if( n < 30 ) return "are some %W% stools and high tables that hold %I%, %I%, %I%, and %I%";
	else if( n < 33 ) return "is a %W% stool and %W% book pedestal";
	else if( n < 36 ) return "is a %W% stool and %N% pedestal holding %I%";
	else if( n < 39 ) return "is a large, %W% table holding %I%, %I%, and %I%";
	else if( n < 42 ) return "is a long, %W% table holding %I%, %I%, and %I%";
	else if( n < 45 ) return "are several small, %W% tables. On the tables are %I%, %I%, and %I%";
	else if( n < 48 ) return "is a %W% stool and workbench holding %I% and %I%";
	else if( n < 50 ) return "is a %W% box";
	else if( n < 52 ) return "is a %M% iron box";
	else if( n < 54 ) return "is a %M% cage";
	else if( n < 56 ) return "is a %M% caldron";
	else if( n < 58 ) return "is a %G% crystal ball";
	else if( n < 60 ) return "are several %E% jars";
	else if( n < 62 ) return "are some %E% jugs";
	else if( n < 64 ) return "is a magic circle";
	else if( n < 66 ) return "is a pentagram";
	else if( n < 68 ) return "is a pentacle";
	else if( n < 70 ) return "is a small, %W% chest";
	else if( n < 72 ) return "is a medium, %W% chest";
	else if( n < 74 ) return "is a large, %W% chest";
	else if( n < 76 ) return "is a %N% grindstone";
	else if( n < 78 ) return "is a %A% painting";
	else if( n < 80 ) return "is a %W% book pedestal";
	else if( n < 82 ) return "is a %N% pedestal";
	else if( n < 84 ) return "is a %F% rug";
	else if( n < 86 ) return "is a %N% statue";
	else if( n < 88 ) return "is a %W% trunk";
	else if( n < 90 ) return "is a %W% tub";
	else return "is a %E% urn";
}

function descriptionReligiousFurnishing( n )
{
	if( n < 3 ) return "a %W% ivory statuette";
	else if( n < 6 ) return "several %M% bells";
	else if( n < 9 ) return "%T% spare candles";
	else if( n < 12 ) return "a %F% cassocks";
	else if( n < 15 ) return "some %M% chimes";
	else if( n < 18 ) return "a spare set of %F% altar cloths";
	else if( n < 21 ) return "a set of %F% linen sheets";
	else if( n < 24 ) return "a pair of %F% drums";
	else if( n < 27 ) return "a %M% gong";
	else if( n < 30 ) return "%A% holy/unholy symbol";
	else if( n < 33 ) return "%A% holy/unholy writings";
	else if( n < 36 ) return "%A% engravings";
	else if( n < 39 ) return "a small, %N% idol";
	else if( n < 42 ) return "a %M% incense burner";
	else if( n < 45 ) return "a %E% offertory container";
	else if( n < 48 ) return "two %W% pipes";
	else if( n < 51 ) return "a %W% musical pipes";
	else if( n < 54 ) return "a %F% prayer rug";
	else if( n < 57 ) return "several %F% robes";
	else if( n < 60 ) return "a %W% stand";
	else if( n < 63 ) return "a small, %N% statue";
	else if( n < 66 ) return "a thurible";
	else if( n < 69 ) return "a tripod";
	else if( n < 72 ) return "a %F% vestment";
	else if( n < 75 ) return "some %F% vestments";
	else if( n < 78 ) return "some votive lights";
	else if( n < 81 ) return "a %W% whistle";
	else if( n < 84 ) return "a %M% skeleton key";
	else if( n < 87 ) return "some %W% prayer beads";
	else if( n < 89 ) return "a %W% horn";
	else if( n < 90 ) return "a %M% metal pendant";
	else if( n < 92 ) return "a %P% parchment";
	else if( n < 94 ) return "a %F% stuffed animal";
	else if( n < 96 ) return "a %F% humanoid doll";
	else if( n < 98 ) return "a %P% religious tome";
	else return "a %P% wrapped scrolls";
}

function descriptionReligiousFurniture( n )
{
	if( n < 2 )return "is a %N% wall basin and font whose contents are %L%";
	else if( n < 4 ) return "are placed in pairs are several %N% columns";
	else if( n < 6 ) return "are a pair of %N% columns";
	else if( n < 8 ) return "are several %N% pillars";
	else if( n < 10 ) return "are a pair of %N% pillars";
	else if( n < 12 ) return "is a hanging curtain that looks %F%";
	else if( n < 14 ) return "is a hanging tapestry that looks %F%";
	else if( n < 16 ) return "is a %E% urn";
	else if( n < 18 ) return "is a font. Its contents are %L%";
	else if( n < 20 ) return "is a large, %M% gong hanging from the ceiling";
	else if( n < 22 ) return "rests a large, %N% idol";
	else if( n < 24 ) return "are rows of %W% kneeling benches. On the floor is %I%";
	else if( n < 26 ) return "stands a %W% lectern containing %I% and %I%";
	else if( n < 28 ) return "is a large, %A% mosaic";
	else if( n < 30 ) return "are some %A% paintings";
	else if( n < 32 ) return "is a %A% fresco";
	else if( n < 34 ) return "are several %W% pews containing %I%";
	else if( n < 36 ) return "rests a pile of %F% prayer rugs";
	else if( n < 38 ) return "is a large, %F% prayer rug";
	else if( n < 40 ) return "stands a %W% pulpit holding %I% and %I%";
	else if( n < 42 ) return "is a sanctuary. It holds %I%, %I%, %I%, and %I%";
	else if( n < 44 ) return "is a %W% screen that covers part of the room";
	else if( n < 46 ) return "is a %N% shrine";
	else if( n < 48 ) return "are some %W% side chairs holding %I% and %I%";
	else if( n < 50 ) return "is a large, %N% statue";
	else if( n < 52 ) return "is a vestry. It holds %I%, %I%, %I%, and %I";
	else if( n < 54 ) return "is a %M% votive light stand";
	else if( n < 56 ) return "is an arras";
	else if( n < 58 ) return "is a %W% bench";
	else if( n < 60 ) return "is a %W% box containing %I%, %I%, and %I%";
	else if( n < 62 ) return "is a %W% cabinet containing %I%, %I%, %I%, and %I%";
	else if( n < 64 ) return "is a large, %F% carpet";
	else if( n < 66 ) return "is a large, %G% chandelier";
	else if( n < 68 ) return "is a raised dais";
	else if( n < 70 ) return "is a %N% fountain";
	else if( n < 72 ) return "hangs a %F% hassock";
	else if( n < 74 ) return "is a %N% pedestal that holds %I%";
	else return "rests an %N% altar containing %I%, %I%, %I%, and %I%";
}

function descriptionTavernFurnishing( n )
{
	if( n < 2 ) return "a couple of %O% pies";
	else if( n < 4 ) return "a couple of %W% ale mugs";
	else if( n < 6 ) return "a tray of %G% wine glasses";
	else if( n < 8 ) return "some bowls of %O% pudding";
	else if( n < 10 ) return "a platter of %O% sweetmeats";
	else if( n < 12 ) return "a %W% wash basin";
	else if( n < 14 ) return "several %P% baskets";
	else if( n < 16 ) return "a case of %G% wine bottles";
	else if( n < 18 ) return "some %G% empty bottles";
	else if( n < 20 ) return "a stack of %E% soup bowls";
	else if( n < 22 ) return "a tray of %O% cooked garlic";
	else if( n < 24 ) return "some sticks of %O% sugarcane";
	else if( n < 26 ) return "a pile of %O% butter biscuits";
	else if( n < 28 ) return "%O% rice balls";
	else if( n < 30 ) return "a %M% cooking thongs";
	else if( n < 32 ) return "a stack of %E% cups";
	else if( n < 34 ) return "a pile of %E% dishes";
	else if( n < 36 ) return "a couple of %G% chalices";
	else if( n < 38 ) return "a tray holding several %W% tankards of %L% ale";
	else if( n < 40 ) return "a large, %M% pot and ladle";
	else if( n < 42 ) return "assorted packages of %O% food";
	else if( n < 44 ) return "a %E% pitcher";
	else if( n < 46 ) return "a %W% keg of %L% ale";
	else if( n < 48 ) return "a %G% decanter";
	else if( n < 50 ) return "several %E% jars";
	else if( n < 52 ) return "a %E% jug";
	else if( n < 54 ) return "a %M% kettle";
	else if( n < 56 ) return "an unoccupied set of %W% knucklebones";
	else if( n < 58 ) return "a fob";
	else if( n < 60 ) return "several %E% goblets";
	else if( n < 62 ) return "several %W% flagons";
	else if( n < 64 ) return "a %M% dinner forks";
	else if( n < 70 ) return "an assortment of %O% herbs";
	else if( n < 72 ) return "a %M% dinner knifes";
	else if( n < 74 ) return "a %W% musical pipe";
	else if( n < 76 ) return "a %W% smoking pipe";
	else if( n < 78 ) return "a knife, %O% bread, and butter";
	else if( n < 80 ) return "a knife and cask of %O% cheese";
	else if( n < 81 ) return "a %F% kerchief";
	else if( n < 82 ) return "a %W% keg of mead and stopper";
	else if( n < 83 ) return "a %E% jar of prunes";
	else if( n < 84 ) return "a stack of %W% trays";
	else if( n < 85 ) return "a stack of %O% apples";
	else if( n < 86 ) return "a %E% ewer";
	else if( n < 87 ) return "a %W% ladle";
	else if( n < 88 ) return "a %M% grater";
	else if( n < 89 ) return "a %M% grinder";
	else if( n < 90 ) return "a %W% masher";
	else if( n < 91 ) return "a %M% beater";
	else if( n < 92 ) return "a %F% linen cloth";
	else if( n < 93 ) return "several %E% plates";
	else if( n < 94 ) return "a %W% platter";
	else if( n < 95 ) return "some %E% tea cups and saucers";
	else if( n < 96 ) return "several %F% towels";
	else if( n < 97 ) return "a %M% sifter";
	else if( n < 98 ) return "a %F% washcloth";
	else if( n < 99 ) return "a set of %W% soup spoons";
	else if( n < 100 ) return "a %M% strainer";
	return "a pitcher of %L% beer";
}

function descriptionTavernFurniture( n )
{
	if( n < 3 ) return "are several %W% stacked barrels";
	else if( n < 6 ) return "are rows of %W% benches";
	else if( n < 9 ) return "are two large boxes";
	else if( n < 12 ) return "is a %W% butt (large barrel)";
	else if( n < 15 ) return "is a %W% cask";
	else if( n < 18 ) return "is a %W% bucket";
	else if( n < 21 ) return "is a small, %W% chest";
	else if( n < 24 ) return "is a %W% cabinet";
	else if( n < 27 ) return "is a %W% crate";
	else if( n < 30 ) return "are groups of %W% chair and tables";
	else if( n < 33 ) return "are some %F% padded arm chairs";
	else if( n < 36 ) return "is a large, %W% chest";
	else if( n < 39 ) return "is a medium, %W% chest";
	else if( n < 42 ) return "is a large, %W% keg";
	else if( n < 45 ) return "is a %W% pipe (large cask)";
	else if( n < 48 ) return "is a set of %W% shelves";
	else if( n < 51 ) return "is a line of %W% high stools and table";
	else if( n < 54 ) return "is a %W% stool";
	else if( n < 57 ) return "is a %W% bar and line of stools";
	else if( n < 60 ) return "are some %W% billets";
	else if( n < 63 ) return "is a long %W% table containing %I%, %I%, and %I%";
	else if( n < 66 ) return "is a round %W% table containing %I%, %I%, and %I%";
	else if( n < 69 ) return "is a %W% tub";
	else if( n < 72 ) return "is a %A% rug";
	else if( n < 75 ) return "is a %W% cupboard";
	else if( n < 78 ) return "is a %W% pail";
	else if( n < 81 ) return "is a raised dais";
	else if( n < 84 ) return "are some wall hooks";
	else if( n < 87 ) return "is a small, %W% table containing %I% and %I%";
	else if( n < 90 ) return "is a medium, %W% table containing %I%";
	else if( n < 93 ) return "is a %A% rug and pillows around a low %W% table containing %I%, %I%, and %I%";
	else if( n < 96 ) return "is a medium, %A% rug";
	else if( n < 99 ) return "is a wash basin and %L% font";
	else return "are some sets of %W% chairs and large, %W% tables containing %I%, %I%, %I%, and %I%";
}

function descriptionBedroomFurnishing( n )
{
	if( n < 1 ) return "a set of %F% bandages";
	else if( n < 2 ) return "a %E% basin";
	else if( n < 3 ) return "a %P% book";
	else if( n < 4 ) return "a small, %W% box";
	else if( n < 5 ) return "a %G% cologne bottle and comb";
	else if( n < 7 ) return "a %W% brush and mirror";
	else if( n < 8 ) return "a %M% decorative chain";
	else if( n < 9 ) return "a %W% comb";
	else if( n < 10 ) return "a %G% hourglass";
	else if( n < 11 ) return "several %M% needles";
	else if( n < 12 ) return "a small, %N% idol";
	else if( n < 13 ) return "a %W% musical pipe and case";
	else if( n < 14 ) return "a %W% smoking pipe and case";
	else if( n < 15 ) return "a %W% coronet (wreath)";
	else if( n < 16 ) return "a %M% crown";
	else if( n < 17 ) return "a %M% anklet and diadem";
	else if( n < 18 ) return "a %M% fob (chain)";
	else if( n < 19 ) return "a %M% headband (fillet)";
	else if( n < 20 ) return "a %M% medal";
	else if( n < 21 ) return "a %M% medallion";
	else if( n < 22 ) return "a pair of %M% earrings and necklace";
	else if( n < 23 ) return "a %M% locket";
	else if( n < 24 ) return "a %M% pendant";
	else if( n < 25 ) return "a %M% ring";
	else if( n < 26 ) return "a %M% scepter";
	else if( n < 27 ) return "a %M% tiara";
	else if( n < 28 ) return "a %W% puff box";
	else if( n < 29 ) return "a quill and %P% parchment";
	else if( n < 30 ) return "a %M% razor and salve";
	else if( n < 31 ) return "a %W% skin scraper";
	else if( n < 32 ) return "a %P% scroll";
	else if( n < 33 ) return "a %M% seal";
	else if( n < 34 ) return "a small, %E% statuette";
	else if( n < 35 ) return "a small, %E% figurine";
	else if( n < 36 ) return "some %F% buskins and boots";
	else if( n < 37 ) return "a roll of %F% thread";
	else if( n < 38 ) return "a %W% tinderbox";
	else if( n < 39 ) return "serveral %F% towels";
	else if( n < 40 ) return "a %W% tray";
	else if( n < 41 ) return "a small, %W% trivet (stand)";
	else if( n < 42 ) return "a %W% tureen (food container)";
	else if( n < 43 ) return "a spindle of %F% twine";
	else if( n < 44 ) return "%O% unguent (salve)";
	else if( n < 45 ) return "a %E% vase";
	else if( n < 46 ) return "a %G% vial";
	else if( n < 47 ) return "a %F% wallet";
	else if( n < 48 ) return "some %F% patches of wool";
	else if( n < 49 ) return "a roll of %F% yarn";
	else if( n < 52 ) return "a %F% blanket";
	else if( n < 53 ) return "a %F% arm band";
	else if( n < 54 ) return "a %F% belt";
	else if( n < 55 ) return "a %M% bracelet";
	else if( n < 56 ) return "a %M% brooch";
	else if( n < 57 ) return "a %F% dress and hose";
	else if( n < 58 ) return "a %F% choker (collar)";
	else if( n < 59 ) return "a %F% collar";
	else if( n < 61 ) return "a %F% frock, beads, and sandles";
	else if( n < 62 ) return "a %F% cap";
	else if( n < 64 ) return "a %M% coif and %F% robes";
	else if( n < 66 ) return "a %F% cloak with a %M% clasp";
	else if( n < 67 ) return "a pair of %F% leggings";
	else if( n < 68 ) return "a %F% cape and a %M% pin";
	else if( n < 70 ) return "a %F% coat";
	else if( n < 71 ) return "a %F% doublet (jacket)";
	else if( n < 72 ) return "a %F% pinafore (apron or dress)";
	else if( n < 73 ) return "a pair of %M% gauntlets";
	else if( n < 75 ) return "a %F% wig, girdle, petticoat (underskirt), and gown";
	else if( n < 76 ) return "a %F% hood and habit";
	else if( n < 78 ) return "a %M% buckle and a %F% jerkin";
	else if( n < 79 ) return "a %F% kerchief";
	else if( n < 82 ) return "a %F% kirtle (tunic or long gown) and pantaloons";
	else if( n < 83 ) return "several pairs of %F% linen drawers";
	else if( n < 85 ) return "a %F% linen undershirt";
	else if( n < 86 ) return "a %W% cane leaning against a %F% mantle";
	else if( n < 87 ) return "a %F% pouch";
	else if( n < 89 ) return "a %F% robe and pair of sandals";
	else if( n < 90 ) return "a %F% scarf and purse";
	else if( n < 91 ) return "a %F% veil";
	else if( n < 92 ) return "a %F% shawl, shift (chemise), and pair of slippers";
	else if( n < 93 ) return "a %F% smock (undergarment) and pair of stockings";
	else if( n < 94 ) return "a %F% surcoat (cloak)";
	else if( n < 95 ) return "a %F% toga and pair of sandals";
	else if( n < 96 ) return "a %F% blouse and pantaloons";
	else if( n < 97 ) return "a %F% vest and wallet";
	else if( n < 98 ) return "a %F% wrapper";
	else return "a %F% tunic and pair of trousers";
}
	
function descriptionBedroomFurniture( n )
{
	if( n < 1 ) return "is a %F% armchair holding %I%";
	else if( n < 2 ) return "is a %W% armoire containing %I%, %I%, %I%, and %I%";
	else if( n < 3 ) return "is a %W% arras (screen of tapestry)";
	else if( n < 4 ) return "is a large, %W% box. Inside the box is %I%, %I%, and %I%";
	else if( n < 5 ) return "is a %W% bucket";
	else if( n < 7 ) return "is a %W% cabinet. Inside the cabinet is %I%, %I%, and %I%";
	else if( n < 8 ) return "is a large, %F% carpet";
	else if( n < 9 ) return "is a %F% padded chair";
	else if( n < 10 ) return "are two %F% padded arm chair";
	else if( n < 11 ) return "is a large, %W% chest";
	else if( n < 12 ) return "is a medium, %W% chest";
	else if( n < 13 ) return "is a %W% chest of drawers containing %I%, %I%, %I% and %I%";
	else if( n < 14 ) return "is a %W% wardrobe closet. Inside the closet is %I%, %I%, %I%, and %I%";
	else if( n < 15 ) return "is a %F% couch";
	else if( n < 16 ) return "are several %F% cushions";
	else if( n < 17 ) return "is a dais";
	else if( n < 18 ) return "is a %W% desk and %W% chair";
	else if( n < 19 ) return "is a hamper containing %I%";
	else if( n < 20 ) return "rests a large, %N% idol";
	else if( n < 21 ) return "rests a %W% loom";
	else if( n < 22 ) return "rests %F% mat";
	else if( n < 23 ) return "rests a %M% pail";
	else if( n < 24 ) return "is a %M% bedpan";
	else if( n < 25 ) return "are some hanging %A% paintings";
	else if( n < 26 ) return "is a %F% pallet";
	else if( n < 27 ) return "stands a %N% pedestal";
	else if( n < 28 ) return "some %F% pillows sit";
	else if( n < 29 ) return "rests a %F% quilt";
	else if( n < 30 ) return "lays a medium, %F% rug";
	else if( n < 31 ) return "lays a small, %F% rug";
	else if( n < 32 ) return "stands a set of %W% rushes";
	else if( n < 33 ) return "stands a %W% screen";
	else if( n < 34 ) return "are a pile of %F% sheets";
	else if( n < 35 ) return "is a set of %W% shelves. On the shelves are %I%, %I%, and %I%";
	else if( n < 36 ) return "is a %W% sideboard holding %I% and %I%";
	else if( n < 37 ) return "is a %F% sofa";
	else if( n < 38 ) return "leans a %W% staff";
	else if( n < 39 ) return "is a %W% stool";
	else if( n < 40 ) return "is a small, %W% table";
	else if( n < 41 ) return "is a medium, %W% table";
	else if( n < 42 ) return "is a low, %W% table";
	else if( n < 43 ) return "is a %W% trestle table";
	else if( n < 44 ) return "is a hanging %F% tapestry";
	else if( n < 45 ) return "is a %W% trunk";
	else if( n < 46 ) return "sits a %W% tub";
	else if( n < 60 ) return "is a %F% mattress";
	else if( n < 70 ) return "are some %W% bunks. On some of the bunks is %I% and %I%";
	else if( n < 80 ) return "are two %W% beds. One bed holds %I%";
	else if( n < 90 ) return "are some %W% canopy beds";
	else return "is a %W% bed. On the bed rests %I%";
}

function descriptionStoreroomFurnishing( n )
{
	if( n < 2 ) return "%N% basin";
	else if( n < 4 ) return "a %E% bowl";
	else if( n < 6 ) return "several stacked %W% baskets";
	else if( n < 8 ) return "a %E% pot";
	else if( n < 10 ) return "a %G% hourglass";
	else if( n < 13 ) return "a %M% kettle";
	else if( n < 16 ) return "a set of %W% knucklebones";
	else if( n < 19 ) return "a %G% lamp";
	else if( n < 22 ) return "a %G% lantern";
	else if( n < 24 ) return "a %M% set of knifes";
	else if( n < 26 ) return "several %P% scrolls";
	else if( n < 28 ) return "a %G% orbs";
	else if( n < 30 ) return "several %W% trays";
	else if( n < 33 ) return "a %P% inventory book";
	else if( n < 36 ) return "a collection of %P% books";
	else if( n < 39 ) return "a couple of %E% vases";
	else if( n < 42 ) return "a %G% vials";
	else if( n < 44 ) return "%M5 razors";
	else if( n < 46 ) return "a %M% awl";
	else if( n < 48 ) return "some %M% needles";
	else if( n < 53 ) return "several %M% shovels";
	else if( n < 56 ) return "a couple of %M% spades";
	else if( n < 59 ) return "a %M% crowbar";
	else if( n < 62 ) return "a couple of %W% hammers";
	else if( n < 64 ) return "a %G% bottles";
	else if( n < 66 ) return "a coil of %F% rope";
	else if( n < 68 ) return "a long, %M% chain";
	else if( n < 70 ) return "a %G% glasses";
	else if( n < 72 ) return "a bale of %F% wool";
	else if( n < 74 ) return "a bolt of %F% yarn";
	else if( n < 76 ) return "some chalk";
	else if( n < 78 ) return "%O% soap";
	else if( n < 80 ) return "%T% candles";
	else if( n < 82 ) return "%T% candlesticks";
	else if( n < 84 ) return "several %W% torches";
	else if( n < 86 ) return "a small, %W% cask of fuel oil";
	else if( n < 88 ) return "a small, %W% cask of scented oil";
	else if( n < 90 ) return "several %F% bags";
	else if( n < 91 ) return "a set of %F% bandages";
	else if( n < 92 ) return "several %F% towels";
	else if( n < 94 ) return "a pile of %F% linen cloth";
	else if( n < 96 ) return "a pile of %F% cotton cloth";
	else if( n < 97 ) return "a large, %F% canvas";
	else if( n < 98 ) return "several strands of %F% twine";
	else return "some %F% blankets";
}

function descriptionStoreroomFurniture( n )
{
	if( n < 2 ) return "are a cluster of %W% barrels";
	else if( n < 4 ) return "is a %W% bench";
	else if( n < 6 ) return "rests a large, %W% box";
	else if( n < 8 ) return "is a %W% butt (large barrel)";
	else if( n < 10 ) return "are a couple of %W% casks";
	else if( n < 13 ) return "is a %W% bucket";
	else if( n < 16 ) return "are a couple of %W% butts";
	else if( n < 19 ) return "is a %W% cabinet. Inside the cabinet is %I%, %I%, and %I%";
	else if( n < 22 ) return "is a %W% crate containing %I%";
	else if( n < 24 ) return "are a few %F% padded chairs";
	else if( n < 26 ) return "is a %F% padded arm chair";
	else if( n < 28 ) return "is a small, %W% chest";
	else if( n < 30 ) return "are a couple of medium, %W% chests containing %I% and %I%";
	else if( n < 33 ) return "is a large, %W% chest containing %I%, %I%, and %I%";
	else if( n < 36 ) return "is a %W% keg";
	else if( n < 39 ) return "is a %W% pipe (large cask)";
	else if( n < 42 ) return "is a set of %W% shelves holding %I%, %I%, and %I%";
	else if( n < 44 ) return "is a %W% high stool";
	else if( n < 46 ) return "are a bunch of %W% stools";
	else if( n < 48 ) return "is a %W% desk and %W% chair. On the desk is %I% and %I%";
	else if( n < 50 ) return "are some stacked %W% chairs";
	else if( n < 53 ) return "is a large, %W% table holding %I%, %I%, and %I%";
	else if( n < 56 ) return "is a long, %W% table holding %I%, %I%, and %I%";
	else if( n < 59 ) return "sits a %W% billets";
	else if( n < 62 ) return "is a %W% tub";
	else if( n < 64 ) return "rests a %F% mat";
	else if( n < 66 ) return "is a %W% trunk";
	else if( n < 68 ) return "is a where a %M% pail sits";
	else if( n < 70 ) return "is a leaning %W% staff";
	else if( n < 73 ) return "are some %M% hooks";
	else if( n < 76 ) return "is a small, %W% table holding %I%";
	else if( n < 79 ) return "is a medium, %W% table holding %I% and %I%";
	else if( n < 83 ) return "is a low, %W% table holding %I% and %I%";
	else if( n < 86 ) return "is a %W% tub";
	else if( n < 89 ) return "is a %W% tun";
	else if( n < 93 ) return "is a %R% urn";
	else return "is a round %W% table holding %I%, %I%, and %I%";
}

function descriptionTortureFurnishing( n )
{
	if( n < 4 ) return "a %M% bell";
	else if( n < 8 ) return "a pair of %M% iron boots";
	else if( n < 12 ) return "several %M% branding irons";
	else if( n < 16 ) return "several %M% chains";
	else if( n < 20 ) return "several %F% straps";
	else if( n < 23 ) return "some %M% clamps";
	else if( n < 26 ) return "some %M% bastinadoes";
	else if( n < 29 ) return "a pair of %F% fetters";
	else if( n < 34 ) return "several %M% hooks";
	else if( n < 38 ) return "some %M% knives";
	else if( n < 42 ) return "a %W% mallet";
	else if( n < 46 ) return "a %M% pot";
	else if( n < 50 ) return "some %M% pincers";
	else if( n < 53 ) return "some %M% pliers";
	else if( n < 56 ) return "several different lengths of %F% ropes";
	else if( n < 59 ) return "a %M% stock";
	else if( n < 64 ) return "some %W% straw";
	else if( n < 68 ) return "a pair of %M% thongs";
	else if( n < 72 ) return "a pair of %M% thumb screws";
	else if( n < 76 ) return "several %W% torches";
	else if( n < 80 ) return "a selection of %F% whips";
	else if( n < 82 ) return "a bucket of %M% nails";
	else if( n < 84 ) return "a %W% hammer";
	else if( n < 86 ) return "a pile of coal";
	else if( n < 88 ) return "%O% salt";
	else if( n < 90 ) return "several %T% candles";
	else if( n < 92 ) return "a %F% quill";
	else if( n < 94 ) return "a %W% humanoid bone";
	else if( n < 96 ) return "a %W% skull";
	else return "a set of %M% manacles";
}

function descriptionTortureFurniture( n )
{
	if( n < 4 ) return "is a %W% casket. Inside the casket is %I% and %I%";
	else if( n < 8 ) return "is a %W% bench. On the bench rest %I%";
	else if( n < 12 ) return "is a %W% chest containing %I% and %I%";
	else if( n < 16 ) return "is a huge %M% bell";
	else if( n < 20 ) return "are some %M% cages";
	else if( n < 24 ) return "is a %W% chair with straps";
	else if( n < 28 ) return "is a fire pit";
	else if( n < 32 ) return "is a %M% grill";
	else if( n < 36 ) return "are two %M% iron maidens";
	else if( n < 40 ) return "are some oubliettes (hole)";
	else if( n < 44 ) return "is a %W% barrel of oil";
	else if( n < 48 ) return "is a pillory";
	else if( n < 52 ) return "is a %M% huge pot";
	else if( n < 56 ) return "is a %W% rack";
	else if( n < 60 ) return "are a couple of %W% stools";
	else if( n < 64 ) return "is a %F% strappado";
	else if( n < 68 ) return "is a %W% table holding %I%, %I%, %I%, and %I%";
	else if( n < 72 ) return "is a %W% U rack";
	else if( n < 76 ) return "is a %M% vice";
	else if( n < 78 ) return "is a well";
	else if( n < 80 ) return "is a %W% wheel";
	else if( n < 84 ) return "is a set of %F% wall fetters";
	else if( n < 88 ) return "is a %M% cresset";
	else if( n < 92 ) return "is a medium, %W% chest. Inside the chest is %I%, %I%, and %I%";
	else if( n < 96 ) return "is a large, %W% chest. The chest contains %I%, %I%, and %I%";
	else return "is a %W% crate holding %I% and %I%";
}

function descriptionDungeonFurnishing( n )
{
	if( n < 2 ) return "is a %D% broken arrow";
	else if( n < 3 ) return "are some %D% ashes";
	else if( n < 5 ) return "are some %D% bones";
	else if( n < 6 ) return "is a %D% bag";
	else if( n < 7 ) return "is a %D% broken bottle";
	else if( n < 8 ) return "is a %D% corroded chain";
	else if( n < 9 ) return "is a %D% splintered club";
	else if( n < 12 ) return "are some cobwebs";
	else if( n < 13 ) return "is a %D% bent copper coin";
	else if( n < 15 ) return "are some ceiling cracks";
	else if( n < 17 ) return "are some floor cracks";
	else if( n < 19 ) return "are some wall cracks";
	else if( n < 20 ) return "is a %D% dagger hilt";
	else if( n < 22 ) return "there is some dampness on the ceiling";
	else if( n < 24 ) return "there is some dampness on the wall";
	else if( n < 25 ) return "is something dripping";
	else if( n < 27 ) return "is some dried blood";
	else if( n < 29 ) return "is some dung";
	else if( n < 30 ) return "is some dust";
	else if( n < 31 ) return "is a %D% cracked flask";
	else if( n < 32 ) return "are some %D% food scraps";
	else if( n < 33 ) return "is some fungi";
	else if( n < 34 ) return "is some guano";
	else if( n < 36 ) return "are some hair bits";
	else if( n < 38 ) return "are some fur bits";
	else if( n < 39 ) return "is a %D% cracked hammer head";
	else if( n < 42 ) return "is a badly dented helmet";
	else if( n < 44 ) return "is a bent and rusted iron bar";
	else if( n < 45 ) return "is a %D% blunt javelin head";
	else if( n < 47 ) return "is a %D% leather boot";
	else if( n < 49 ) return "are some dry leaves";
	else if( n < 51 ) return "are some twigs";
	else if( n < 53 ) return "is some mold";
	else if( n < 55 ) return "is a %D% pick handle";
	else if( n < 56 ) return "is a %D% broken pole, 5 foot";
	else if( n < 58 ) return "are some %D% pottery shards";
	else if( n < 60 ) return "are some %D% rags";
	else if( n < 62 ) return "is a %D% rotten rope";
	else if( n < 64 ) return "is some rubble & dirt";
	else if( n < 66 ) return "is a %D% torn sack";
	else if( n < 70 ) return "is a slimy coating on ceiling";
	else if( n < 72 ) return "is a slimy coating on floor";
	else if( n < 74 ) return "is a slimy coating on wall";
	else if( n < 76 ) return "is a %D% rusted spike";
	else if( n < 78 ) return "is a %D% torch stub";
	else if( n < 80 ) return "are some sticks";
	else if( n < 82 ) return "are some small stones";
	else if( n < 84 ) return "is some straw";
	else if( n < 86 ) return "is a %D% broken sword blade";
	else if( n < 88 ) return "are some %D% scattered teeth";
	else if( n < 90 ) return "are some %D% scattered fangs";
	else if( n < 92 ) return "are some wall scratchings";
	else if( n < 94 ) return "is a small puddle of water";
	else if( n < 96 ) return "is a large puddle of water";
	else if( n < 97 ) return "is a trickle of water";
	else if( n < 98 ) return "are some wax drippings";
	else if( n < 99 ) return "is a wax blob";
	else return "are some %D% rotting pieces of wood";
}

function descriptionDungeonFurniture( n )
{
	return "%I%";
}

function descriptionOutdoorFurnishing( n )
{
	if( n < 1 ) return "%D% wagon wheel";
	else if( n < 2 ) return "%D% horse shoe";
	else if( n < 3 ) return "an animal path";
	else if( n < 4 ) return "a trail";
	else if( n < 5 ) return "a sign post";
	else if( n < 8 ) return "a road";
	else if( n < 10 ) return "a shrine";
	else if( n < 11 ) return "a sapling";
	else if( n < 12 ) return "an abandoned blanket";
	else if( n < 13 ) return "a discarded boot";
	else if( n < 14 ) return "a mile marker";
	else if( n < 15 ) return "a %L% waterfall";
	else if( n < 16 ) return "a %D% animal bone";
	else if( n < 17 ) return "an overgrown foliage";
	else if( n < 18 ) return "some fallen timbers";
	else if( n < 19 ) return "some fallen trees";
	else if( n < 20 ) return "a rainbow";
	else if( n < 21 ) return "a web";
	else if( n < 22 ) return "an animal den";
	else if( n < 23 ) return "some mud";
	else if( n < 24 ) return "some exposed mineral deposites";
	else if( n < 25 ) return "a natural spring";
	else if( n < 26 ) return "some wildflowers";
	else if( n < 27 ) return "an orchard";
	else if( n < 28 ) return "a sinkhole";
	else if( n < 29 ) return "a burrow";
	else if( n < 30 ) return "some clay deposits";
	else if( n < 31 ) return "some thick foliage";
	else if( n < 32 ) return "some collapsed rock";
	else if( n < 33 ) return "a tree stand";
	else if( n < 34 ) return "a thick foliage";
	else if( n < 35 ) return "a calm pool of water";
	else if( n < 36 ) return "a dumped row boat";
	else if( n < 37 ) return "a raft";
	else if( n < 38 ) return "a canoe";
	else if( n < 39 ) return "a %D% kayak";
	else if( n < 40 ) return "a %L% fountain";
	else if( n < 41 ) return "some fallen stones";
	else if( n < 42 ) return "a snare trap";
	else if( n < 43 ) return "a deep well";
	else if( n < 44 ) return "a dung heap";
	else if( n < 45 ) return "some claw marks";
	else if( n < 46 ) return "an animal nest";
	else if( n < 47 ) return "a %L% stream";
	else if( n < 48 ) return "a cemetery";
	else if( n < 49 ) return "a %L% creek";
	else if( n < 50 ) return "a %L% watercourse";
	else if( n < 51 ) return "a %L% rivulet";
	else if( n < 52 ) return "a %N% acqueduct";
	else if( n < 53 ) return "an overhang";
	else if( n < 54 ) return "an outcropping";
	else if( n < 55 ) return "a mound";
	else if( n < 56 ) return "a rise";
	else if( n < 57 ) return "a garden";
	else if( n < 58 ) return "a lagoon";
	else if( n < 59 ) return "a ravine";
	else if( n < 60 ) return "a gorge";
	else if( n < 62 ) return "a %D% burial ground";
	else if( n < 64 ) return "a %D% graveyard";
	else if( n < 66 ) return "a road fork";
	else if( n < 67 ) return "a fissure";
	else if( n < 68 ) return "a cleft";
	else if( n < 70 ) return "a %N% stone bridge";
	else if( n < 72 ) return "a %W% wooden bridge";
	else if( n < 74 ) return "a %W% suspension bridge";
	else if( n < 75 ) return "some falls with %L% water";
	else if( n < 76 ) return "a hollow place";
	else if( n < 77 ) return "a crag";
	else if( n < 78 ) return "a fissure";
	else if( n < 79 ) return "a crevice";
	else if( n < 80 ) return "a precipice";
	else if( n < 82 ) return "a hole";
	else if( n < 86 ) return "a %W% log bridge";
	else if( n < 88 ) return "some caves";
	else if( n < 90 ) return "a %L% brook";
	else if( n < 94 ) return "an outpost";
	else return "the remains of a campfire";
}

function descriptionOutdoorFurniture( n )
{
	if( n < 3 ) return "are several small clearings. Venturing into the clears yields %I%, %I%, and %I%";
	else if( n < 6 ) return "is a pasture. The pasture contains %I% and %I%";
	else if( n < 9 ) return "is a low ridge";
	else if( n < 12 ) return "is a high cliff";
	else if( n < 15 ) return "is a meadow. The meadow contains %I% and %I%";
	else if( n < 18 ) return "is a field. On the edge of the field is %I%";
	else if( n < 20 ) return "is a small grotto. The grotto contains %I% and %I%";
	else if( n < 22 ) return "is a forested area with a well developed tree canopy";
	else if( n < 24 ) return "is a valley";
	else if( n < 26 ) return "are the remains of a small ruin.  Inside the ruins are %I%, %I%, and %I%";
	else if( n < 28 ) return "path with a sign indicating a campground. The campground contains %I%, %I%, and %I%";
	else if( n < 30 ) return "is a small hamlet. Just outside the hamlet there is %I% and %I%";
	else if( n < 32 ) return "is a farming village.";
	else if( n < 34 ) return "is where the terrain slopes significantly. On the slope is %I%";
	else if( n < 36 ) return "is a chasm. Within the chasm is %I%, %I%, %I%";
	else if( n < 38 ) return "is a settlement. Outside the settlement is %I% and %I%";
	else if( n < 40 ) return "is a dam";
	else if( n < 42 ) return "is a crossroads. At the intersection is %I%";
	else if( n < 44 ) return "is a ranch";
	else if( n < 46 ) return "is a reservoir. The water in the reservoir looks %L%";
	else if( n < 50 ) return "is a small lake. The lake's water looks %L%";
	else if( n < 53 ) return "is a mine entrance. Just outside the entrance is %I%";
	else if( n < 56 ) return "is a small arroyo";
	else if( n < 59 ) return "rests a ledge. On the ledge is %I%";
	else if( n < 63 ) return "is a pond. The pond's water looks %L%";
	else if( n < 66 ) return "is a canyon.  On the canyon's edge is %I%, %I%, and %I%";
	else if( n < 69 ) return "is a bute";
	else if( n < 72 ) return "is a levy. On top of the levy is %I%";
	else if( n < 74 ) return "is a vale. On the edge of the vale is %I% and %I%";
	else if( n < 76 ) return "is a dale. Inside the dale is %I%";
	else if( n < 78 ) return "is a dry basin. Inside the basin is %I% and %I%";
	else if( n < 80 ) return "is a dell. On the near edge of the dell is %I%";
	else if( n < 83 ) return "is a hollow. Inside the hollow is %I% and %I%";
	else if( n < 86 ) return "is a glade";
	else if( n < 88 ) return "is an incline";
	else if( n < 90 ) return "is a gulf";
	else if( n < 92 ) return "is a gulch";
	else return "are some hills";
}


function generateRoom() 
{
	// Read Inputs
	var lvalue = document.form1.length_value.value; 
	var wvalue = document.form1.width_value.value; 
	var hvalue = document.form1.height_value.value; 
	var fvalue = document.form1.furniture_value.value; 

	//var avalue = document.form1.age_value.selectedIndex; 
	var avalue = 0; 
	var atext = "";
	switch( document.form1.age_value.value )
	{
		default: 
		case "random": avalue = Math.floor((Math.random()*4)+1); break;
		case "young": avalue = young; break;
		case "mature": avalue = mature; break;
		case "old": avalue = old; break;
		case "ancient": avalue = ancient; break;
	}
	switch( avalue )
	{
		default: 
		case young: atext = "a Young"; break;
		case mature: atext = "a Mature"; break;
		case old: atext = "an Old"; break;
		case ancient: atext = "an Ancient"; break;
	}

	//var rvalue = document.form1.room_value.selectedIndex; 
	var rvalue = 0;
	var rtext = "";
	switch( document.form1.room_value.value )
	{
		default: 
		case "random": rvalue = Math.floor((Math.random()*9)+1); break;
		case "wizard": rvalue = wizard; break;
		case "dungeon": rvalue = dungeon; break;
		case "temple": rvalue = temple; break;
		case "tavern": rvalue = tavern; break;
		case "torture": rvalue = torture; break;
		case "bedroom": rvalue = bedroom; break;
		case "outdoor": rvalue = outdoor; break;
		case "storeroom": rvalue = storeroom; break;
	}
	switch( rvalue )
	{
		default: 
		case wizard: rtext = "Wizard's Laboratory"; break;
		case dungeon: rtext = "Dungeon Corridor"; break;
		case temple: rtext = "Temple Room"; break;
		case tavern: rtext = "Tavern Room"; break;
		case torture: rtext = "Torture Chamber"; break;
		case bedroom: rtext = "Bedroom"; break;
		case outdoor: rtext = "Outdoor Area"; hvalue = 0; break;
		case storeroom: rtext = "Storeroom"; break;
	}


	var room = "";

	/*
	room += "age_value = " + avalue;
	room += ", room_value = " + rvalue;
	room += ", length_value = " + lvalue;
	room += ", width_value = " + wvalue;
	room += ", length_value = " + hvalue;
	room += ", furniture_value = " + fvalue;
	*/

	room += "The room generated is " + atext + " " + rtext +":";
	room += "<BR/>";
	room += " " + generateSizeDescription( avalue, lvalue, wvalue, hvalue );
	room += " " + generateAirDescription( avalue );
	room += " " + generateSoundDescription( avalue );
	room += "<BR/>";
	room += "<BR/>";

	room += "The room has the following features and furnishings. ";

	var rooms = generateRoomContents( rvalue, avalue, fvalue );
	for( i in rooms)
	{
		//room += "<BR/>";
		room += " " + rooms[i];
	}
	
	display("theRoom", room);
}

<!-- display text function -->
var NS = (document.layers) ? 1 : 0;
var NS6 = (document.getElementById) ? 1 : 0;
var IE = (document.all) ? 1 : 0;

function display(id, str) 
{
	if (NS) 
	{
    	with (document[id].document) 
		{
			open();
    		write(str);
			close();
		}
	}
	else if (NS6)
	{
    	document.getElementById(id).innerHTML = str;
	}
	else
	{
		document.all[id].innerHTML = str;
	}
}



// -->

