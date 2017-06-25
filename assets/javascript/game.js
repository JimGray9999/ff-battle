$(document).ready(function() {

    // construct the Toon object
    function Toon(name, hitPoints, attackPts, counterPts, image) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.attackPts = attackPts;
        this.counterPts = counterPts;
        this.image = image;
    }

    //# variables #//

    var fanfare = new Audio("assets/sounds/fanfare.mp3")
    // create instances of the characters as Toon objects
    var Cloud = new Toon(name = "Cloud",
        hitPoints = 1000,
        attackPts = 50,
        counterPts = 40,
        image = 'assets/images/cloud.JPG');

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

    var selectedPlayer = null;
    var currentOpponent = null;

    // create array of all the created characters
    var Fighters = [Cloud, Sephiroth, Chocobo, Lightning];

    var fightCount = 0;

    // setup available player images
    $("#player1").attr("src", Cloud.image);
    $("#player2").attr("src", Sephiroth.image);
    $("#player3").attr("src", Chocobo.image);
    $("#player4").attr("src", Lightning.image);

    //# functions #//

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

        Fighters = [Cloud, Sephiroth, Chocobo, Lightning];

        // remove selected player from remaining Fighters
        Fighters = $.grep(Fighters, function(n, i) {
            return n != player;
        });

        console.log(Fighters);
    }

    // choose your opponent
    function opponentPick(opponent) {
        currentOpponent = opponent;
        
        console.log(opponent);

        $(".enemy-stats").html("<p>Name: " + opponent.name +
            "</p> <p>HP: " + Math.floor(opponent.hitPoints) +
            "</p> <p>AP: " + Math.floor(opponent.attackPts) +
            "</p> <p>CP: " + opponent.counterPts + "</p>");

        $(".enemy").attr("src", opponent.image);

    }

    // attack function, called by button click event
    function attack(player, opponent) {
        
        // attack result
        $("#log").prepend("<p>" + player.name + " attacked " + opponent.name +
            " for " + player.attackPts + " points!</p>");

        // reduce opponent hit points
        opponent.hitPoints -= player.attackPts;

        // increase player attack points
        player.attackPts = Math.floor(player.attackPts * 1.25);

        // update attack points displayed in arena
        $("#player-ap").text(player.attackPts);

        // check if opponent's HP = 0
        if (opponent.hitPoints <= 0) {
            
            console.log("Fighters.length: " + Fighters.length);
            console.log("fightCount: " + fightCount);

            fightCount++;

            console.log("fightCount: " + fightCount);

            $("#log").prepend(opponent.name + " has been defeated!");

            if (fightCount === 3){
                $("#log").text("You win!");
                fanfare.play();
            }else {
                // load next fighter
                opponentPick(Fighters[fightCount]);

                $("#log").text("");
                $("#log").prepend(selectedPlayer.name + " VS. " + currentOpponent.name);
            }           
        }

        $(".stats").html("<p>Name: " + player.name +
            "</p> <p>HP: " + Math.floor(player.hitPoints) +
            "</p> <p>AP: " + Math.floor(player.attackPts) +
            "</p> <p>CP: " + player.counterPts + "</p>");

        // extras:
        // to do: add slashing sound
        // to do: change picture red for one second
    }

    // defend function, called by attack button event
    function defend(player, opponent) {
        $("#log").prepend("<p>" + player.name + " countered " + opponent.name + " for " + player.counterPts + " points!</p>");

        // minus from player hit points
        opponent.hitPoints -= player.counterPts;

        $("#player-hp").text(opponent.hitPoints);

        if (opponent.hitPoints <= 0) {
            $("#log").prepend("You have been defeated!");
            // option to restart game
        }

        $(".enemy-stats").html("<p>Name: " + player.name +
            "</p> <p>HP: " + Math.ceil(player.hitPoints) +
            "</p> <p>AP: " + Math.ceil(player.attackPts) +
            "</p> <p>CP: " + player.counterPts + "</p>");

        // extras:
        // to do: add slashing sound
        // to do: change picture red for one second
        // to do: change opacity of the defeated Toons
    }

    //# button click events #//

    // click events: choosing players
    $("#player1").on("click", function() {

        if ($(".player").hasClass("selected")) {
            playerPick(Cloud, "#player1");
            selectedPlayer = Cloud;

        } else {
            opponentPick(Cloud);
        }
    });

    $("#player2").on("click", function() {
        if ($(".player").hasClass("selected")) {
            playerPick(Sephiroth, "#player2");
            selectedPlayer = Sephiroth;

        } else {
            opponentPick(Sephiroth);
        }
    });

    $("#player3").on("click", function() {
        if ($(".player").hasClass("selected")) {
            playerPick(Chocobo, "#player3");
            selectedPlayer = Chocobo;

        } else {
            opponentPick(Chocobo);
        }
    });

    $("#player4").on("click", function() {
        if ($(".player").hasClass("selected")) {
            playerPick(Lightning, "#player4");
            selectedPlayer = Lightning;

        } else {
            opponentPick(Lightning);
        }
    });

    // toggle from player to enemy selection
    $(".player").click(function() {
        if ($(".player").hasClass("selected")) {
            $(".enemy").addClass("selected");
            $(".player").removeClass("selected");
        } else {
            $(".player").addClass("selected");
            $(".enemy").removeClass("selected");
        }
    });

    $(".enemy").click(function() {
        if ($(".enemy").hasClass("selected")) {
            $(".player").addClass("selected");
            $(".enemy").removeClass("selected");
        } else {
            $(".enemy").addClass("selected");
            $(".player").removeClass("selected");
        }
    });

    // confirm selections, begin battle
    $("#confirm").click(function() {

        if (selectedPlayer && currentOpponent != null) {
            // disable confirm button
            $("#confirm").prop("disabled", true);

            // enable attack and clear log buttons
            $("#attack").prop("disabled", false);
            $("#clear-log").prop("disabled", false);

            $(".fighters").addClass("disabled");

            $("#log").text("");
            $("#log").prepend(selectedPlayer.name + " VS. " + currentOpponent.name);
        } else {
            $("#log").text("Please make sure to choose your player and first opponent!");
        }
    });

    // attack button
    $("#attack").click(function() {
        attack(selectedPlayer, currentOpponent);
        defend(currentOpponent, selectedPlayer);
    });

    // clear text from log
    $("#clear-log").click(function() {
        $("#log").text("")
    });

});