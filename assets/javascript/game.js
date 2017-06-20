$(document).ready(function() {



    // construct the Toon object
    function Toon(name, hitPoints, attackPts, counterPts, image) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.attackPts = attackPts;
        this.counterPts = counterPts;
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

    function attack(player, opponent) {
        console.log(player.name + " attacked " + opponent.name +
            " for " + player.counterPts + " points!");

        // minus from opponent hit points
        opponent.hitPoints -= player.attackPts;

        console.log(opponent.name + " now has " + opponent.hitPoints + " hit points!");

        // check if opponent HP = 0
    }

    function defend(player, opponent) {
        console.log(player.name + " countered " + opponent.name + " for " + player.counterPts + " points!");

        // minus from player hit points
        opponent.hitPoints -= player.counterPts;
        // check if opponent HP = 0
        console.log(opponent.name + " now has " + opponent.hitPoints + " hit points!");
    }


    // create array of all the created characters
    var Fighters = [Cloud, Sephiroth, Chocobo, Lightning];

    // choose your character
    $("#player1").on("click", function() {
        // display the character's Name, HP, CP
        // confirm if this is the player's selection
        console.log("You selected Cloud");
    });

    $("#player2").on("click", function() {
        // display the character's Name, HP, CP
        // confirm if this is the player's selection
        console.log("You selected Sephiroth");
    });

    $("#player3").on("click", function() {
        // display the character's Name, HP, CP
        // confirm if this is the player's selection
        console.log("You selected Chocobo");
    });

    $("#player3").on("click", function() {
        // display the character's Name, HP, CP
        // confirm if this is the player's selection
        console.log("You selected Lightning");
    });

    // choose your opponent

    // attack!

    console.log(Cloud.hitPoints);
    console.log(Sephiroth.hitPoints);

    // click events for attack, which will counter with the defend function
    attack(Cloud, Sephiroth);
    defend(Sephiroth, Cloud);

    console.log("Cloud: " + Cloud.hitPoints + " HP remaining");
    console.log("Sephiroth: " + Sephiroth.hitPoints + " HP remaining");

});