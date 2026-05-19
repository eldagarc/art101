$(document).ready(function() {

    let environmentTitle = "The Room That Refuses Morning";

    let environmentElements = ["curtain", "dust", "warm floor", "half-open door"];

    let mainEntity = {
        name: "The Curtain",
        type: "soft border",
        mood: "suspicious",
        isMoving: true,
        favoriteElement: environmentElements[1]
    };

    let clickCount = 0;

    $("#show-title").click(function() {
        $("#environment-output").html("<h3>" + environmentTitle + "</h3>");
    });

    $("#show-elements").click(function() {
        $("#environment-output").html("<p>" + environmentElements.join(", ") + "</p>");
    });

    $("#show-main").click(function() {
        $("#environment-output").html(
            "<p>" + mainEntity.name + " is a " + mainEntity.type +
            " that feels " + mainEntity.mood + ".</p>"
        );
    });

    $("#count-clicks").click(function() {
        clickCount++;
        $("#environment-output").html("<p>Button clicked " + clickCount + " times</p>");
    });

});