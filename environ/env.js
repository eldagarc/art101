function changeTime(time) {

    const environment = document.getElementById("environment");
    const message = document.getElementById("message");
    const title = document.getElementById("title");

    if (time === "night") {

        environment.style.backgroundImage =
        "url('night-hills.jpg')";

        environment.style.color = "white";

        title.innerText = "Good Evening!";

        message.innerText =
        "The farm has gone quiet. The bunny is getting sleepy and the hills are calm under the moonlight.";

        // fat bunny fading out
        $("#bunny").fadeOut(2000);

    } 
    
    else {

        environment.style.backgroundImage =
        "url('hillsss.jpg')";

        environment.style.color = "black";

        title.innerText = "Welcome!";

        message.innerText =
        "The animals are awake and enjoying the sunshine. The hills feel warm and peaceful today.";

        // Bunny fades back in
        $("#bunny").fadeIn(2000);
    }
}