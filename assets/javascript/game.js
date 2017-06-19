$(document).ready(function(){

	// declare playing characters

	function toon(name, hitPoints, attackPts, counterHitPts, image){
		this.name = name;
		this.hitPoints = hitPoints;
		this.attackPts = attackPts;
		this.counterHitPts = counterHitPts;
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


});
