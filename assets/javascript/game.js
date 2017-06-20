$(document).ready(function(){

	

	// construct the Toon object
	function Toon(name, hitPoints, attackPts, counterPts, image) {
		this.name = name;
		this.hitPoints = hitPoints;
		this.attackPts = attackPts;
		this.counterPts =  counterPts;
		this.image = image;
	}

	// create instances of the characters as toon objects

	var Cloud = new Toon(name = "Cloud", 
						 hitPoints = 1000, 
						 attackPts = 50,
						 counterPts = 40,
						 image = 'assets/images/cloud.jpg');

	var Sephiroth = new Toon(name = "Sephiroth", 
						 hitPoints = 2000, 
						 attackPts = 55,
						 counterPts = 55,
						 image = 'assets/images/Sephiroth.png');

	var Chocobo = new Toon(name = "Chocobo", 
						 hitPoints = 750, 
						 attackPts = 25,
						 counterPts = 35,
						 image = 'assets/images/chocobo.jpg');

	var Lightning = new Toon(name = "Lightning", 
						 hitPoints = 1450, 
						 attackPts = 75,
						 counterPts = 45,
						 image = 'assets/images/Lightning.png');

	// setup available players
	$("#player1").attr("src", Cloud.image);
	$("#player2").attr("src", Sephiroth.image);
	$("#player3").attr("src", Chocobo.image);
	$("#player4").attr("src", Lightning.image);


	// change player if picked, need to add an onclick event to each toon

	function attack (name, AP, HP, oppName, oppHP){
		console.log(name + " attacked " + oppName + "!");
		console.log("Hit for " + AP + " points!");
		
		// minus from opponent hit points
		oppHP = oppHP - AP;
		// check if opponent HP = 0
		console.log(oppName + " now has " + oppHP + " hit points!");
	}

	function defend (name, CP, oppName, oppHP){
		console.log(name + " countered " + oppName + " for " + CP + " points!");

		// minus from player hit points
		oppHP = oppHP - CP;
		// check if opponent HP = 0
		console.log(oppName + " now has " + oppHP + " hit points!");
	}


	// create array of all the created characters
	var Fighters = [Cloud, Sephiroth, Chocobo, Lightning];
	
	// choose your character
	$("#player1").on("click", function(){
		// display the character's Name, HP, CP
		// confirm if this is the player's selection
		console.log("You selected Cloud");
	});
	// choose your opponent

	// attack!

	console.log(Cloud.hitPoints);
	console.log(Sephiroth.hitPoints);

	attack(Cloud.name, Cloud.attackPts, Cloud.hitPoints, Sephiroth.name, Sephiroth.hitPoints);
	defend(Sephiroth.name, Sephiroth.counterPts, Cloud.name, Cloud.hitPoints);


	// need to have the HP updated based on the attack/defend function
	console.log(Cloud.hitPoints);
	console.log(Sephiroth.hitPoints);

});
