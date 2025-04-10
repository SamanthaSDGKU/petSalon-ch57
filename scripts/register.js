let pets=[]; // the empty array
//HTML inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");

//object constructor
function Pet(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

function register(){
    // create the newPet
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value);
    //push the newPet
    pets.push(newPet);
    //display the pets
    displayPets();
}
//display name function
function displayPets(){
    document.getElementById("results").innerHTML="";
    for(let i=0;i<pets.length;i++){
        document.getElementById("results").innerHTML+=`<li>${pets[i].name} - ${pets[i].age}</li>`;// arrayName[position]
    }
}

function init(){
    //create pet objects
    let pet1 = new Pet("Scooby",80,"Male");
    //create another pet Scrappy
    let pet2 = new Pet("Scrappy",70,"Male");
    // push the pets in the array
    pets.push(pet1,pet2);
    // display names
    displayPets();
}

window.onload=init;// wait to render the HTML