// creates the sound function needed for playing audio
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function()
    {
        this.sound.play();
    }
}
// a play function to let the music be played
// Bit of a side thing, but this is actually some music I ended up getting made for a D&D character of mine.
function play()
{
    mySound = new sound("sometimes_ its the small things.mp3")
    mySound.play();
}
// Stops the music by reloading the page.
function stop()
{
    window.location.reload();
}
// creates the checkInfo function needed for the HTML
function checkInfo()
{
    // creates a variable for the first name
    var firstName  = document.getElementById("fName").value;
    // creates a variable for the last name
    var lastName  = document.getElementById("lName").value;
    // creates a variable fullname that combines the first name and the last name
    var fullName = firstName + " " + lastName;
    // creates a variable for the zipcode
    var zip = document.getElementById("zipCode").value;
    // Checks to make sure a user has put in something for either the first or last name.
    if (firstName.length == 0 || lastName.length == 0)
    {
        document.getElementById("loginStatus").innerHTML = "First and Last name cannot be blank! Please enter your name.";
    }
    else if (fullName.length >20) // gives a warning if the users full name exceeds 20 letters.
    {
        document.getElementById("loginStatus").innerHTML = "I'm sorry, your name is too long! Please use a shorter nickname less than 20 characters instead.";
    }
    else if (zip.length != 5) // checks to see if the Zip Code is 5 numbers long, and if not, it'll show as an error
    {
        document.getElementById("loginStatus").innerHTML = "Zip Code is not 5 digits! Please enter a valid Zip Code!";
    }
    else // If the user has logged their info correctly, then the secret message shows up!
    {
        document.getElementById("loginStatus").innerHTML = "Login confirmed! Welcome " + fullName + ", who lives in the zip code of " + zip + "!";
    }
    
}