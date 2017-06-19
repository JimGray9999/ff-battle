# Final Fantasy Battle

## Goals

1. Player chooses a character to fight as

2. Player chooses their opponent to fight first

3. Player's character shows in one box, the opponent in another

4. Player's goal is to defeat all opponents

    ## Gameplay 

    1. Player clicks attack

    2. opponent loses HP based on the attack

    3. opponent counter attacks, player loses HP

    4. battle continues until player or opponent HP = 0

        if player wins, move on to the next battle

        continue to repeat steps until either player is at 0 HP, or defeats all opponents


characters as objects
    name, health points (HP), attack points (AP), counter attack points (CAP)
    create inner functions for attack and counter
        will need to make sure scope is correct and updating the right characters
    each character is an instance of the object
    add all of the characters to an array

board design

    area to choose starting character
    area to choose first opponent

    when you click on a card, it displays their name, and attributes (HP, AP, CAP)

    button to choose character
        - card moves to the "arena"
        - card is removed from remaining characters

    remaining cards shown are the opponents, same button will allow you to choose the first one

    attack event (button)

    1. take attack points of player, minus from opponent hit points
    2. opponent counters with CAP, player's HP is hit
    3. repeat until either HP reaches 0
    4. if player hp = 0, game over
        if opponent hp = 0, remove card from "arena"
        player chooses next opponent
    5. if player defeats last opponent...play fanfare
