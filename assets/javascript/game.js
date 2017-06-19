$(document).ready(function(){

	// declare playing characters

	function toon(name, hitPoints, attackPts, counterPts, image){
		this.name = name;
		this.hitPoints = hitPoints;
		this.attackPts = attackPts;
		this.counterPts = counterPts;
		this.image = image;
		
		attack: function (){
		// attack opponent	
		}
		
		counterAttack: function (){
		// counter attack
		}
	}

	// create instances of the characters as toon objects
	
	var Cloud = new toon("Cloud", 100, 35, 40, ); // to do: add the image as an argument

	
	// create array of all the created characters
	var Fighters = []; // to do: add all of the characters above
	
	// choose your character
	
	// choose your opponent
});
