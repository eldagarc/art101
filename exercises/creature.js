


// add creature to the garden
$("#crAdd").click( function(){

    // create creature object 
    // safety checks 
    // add creature to the page
    // save to the memory
    //reset the form to prepare for the next iteration

    // grab the value from the text input and assign it to a variable crName
    let crName=$("#crName").val();
    let crColor=$("#crColor").val();
    let crEyesNum=$("#crEyesNum").val();

    // test in console
    console.log(crName);  
    console.log(crColor); 
    console.log(crEyesNum); 
    

    if( crName.length > 2) { 
        $("#creature-list").append("<div>"+crName+crColor+crEyesNum+"</div>");
    }
   

     $("#crName").val(""); // write the value
    // $("#crName").val(); // retrieve the value

}); 

$("#creature-list").append(`
    <div class="creature">
        <div class="creature-body" style="background-color: ${crColor}"> B </div>
        <div class="creature-info">${crName}</div>
    </div>
`);