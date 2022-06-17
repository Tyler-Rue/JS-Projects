function my_dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark"
    };
    delete Animal.Sound; //deletes value associated with key Sound
    document.getElementById("Dictionary").innerHTML = Animal.Sound + " " + Animal.Breed; //display values of keys Sound and Breed in HTML document
}