$(document).ready(function() {



    // construct the Toon object
    function Toon(name, hitPoints, attackPts, counterPts, image) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.attackPts = attackPts;
        this.counterPts = counterPts;
        this.image = image;
    }

    // create instances of the characters as Toon objects

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


    var selectedPlayer = new Toon();

    // setup available players
    $("#player1").attr("src", Cloud.image);
    $("#player2").attr("src", Sephiroth.image);
    $("#player3").attr("src", Chocobo.image);
    $("#player4").attr("src", Lightning.image);

    // create array of all the created characters
    var Fighters = [Cloud, Sephiroth, Chocobo, Lightning];

    // choose your character
    function playerPick(player, selected) {
        console.log("You selected " + player.name);

        // display player stats
        $(".stats").html("<p>Name: " + player.name +
            "</p> <p>HP: " + player.hitPoints +
            "</p> <p>AP: " + player.attackPts +
            "</p> <p>CP: " + player.counterPts + "</p>");

        $(".player").attr("src", player.image);
        $(".fighters").removeClass("selected");
        $(selected).addClass("selected");
    }

    // choose your opponent
    function opponentPick() {

    }

    // player images, click events choose
    $("#player1").on("click", function() {
        playerPick(Cloud, "#player1");
        selectedPlayer = Cloud;
        debugger;
    });

    $("#player2").on("click", function() {
        playerPick(Sephiroth, "#player2");
        selectedPlayer = Sephiroth;
    });

    $("#player3").on("click", function() {
        playerPick(Chocobo, "#player3");
        selectedPlayer = Chocobo;
    });

    $("#player4").on("click", function() {
        playerPick(Lightning, "#player4");
        selectedPlayer = Lightning;
    });


    // attack and defend functions
    function attack(player, opponent) {
        $("#log").prepend("<p>" + player.name + " attacked " + opponent.name +
            " for " + player.counterPts + " points!</p>");

        // minus from opponent hit points
        opponent.hitPoints -= player.attackPts;

        $("#log").prepend("<p>" + opponent.name + " now has " + opponent.hitPoints + " hit points!</p>");

        // to do: check if opponent HP = 0
        // to do: add slashing sound
        // to do: increase attack power with each attack
        player.attackPts = player.attackPts ^ 2;
        debugger;

        $("#player-ap").text(player.attackPts);

        // extras:
        // to do: change picture red for one second
    }

    function defend(player, opponent) {
        $("#log").prepend("<p>" + player.name + " countered " + opponent.name + " for " + player.counterPts + " points!</p>");

        // minus from player hit points
        opponent.hitPoints -= player.counterPts;

        $("#log").prepend("<p>" + opponent.name + " now has " + opponent.hitPoints + " hit points!</p>");
        $("#player-hp").text(opponent.hitPoints);

        // to do: check if opponent HP = 0

        // extras:
        // to do: add slashing sound
        // to do: change picture red for one second
    }

    // click events for attack, which will counter with the defend function

    $("#attack").click(function() { //TODO: pass the two objects of the player and opponent
        attack(Cloud, Sephiroth);
        defend(Sephiroth, Cloud);
    });

    $("#clear-log").click(function() {

        $("#log").text("")

    });

});