console.log("register");
//create an array
let pets=[];

//display name function
function displayNames(){
    for(let i=0;i<pets.length;i++){
        document.getElementById("results").innerHTML+=`<li>${pets[i].name}</li>`;// arrayName[position]
    }
}

function init(){
    //create pet objects
    let pet1 = {
        name:"Scooby",
        age:70,
        gender:"Male",
        breed:"Dane"
    }

    let pet2 = {
        name:"Scrappy",
        age:60,
        gender:"Male",
        breed:"Mixed"
    }

    let pet3={
        name:"Nemo",
        age:10,
        gender:"Male",
        breed:"Fish"
    }
   
    // push the pets in the array
    pets.push(pet1,pet2,pet3);
    // display names
    displayNames();
}

window.onload=init;// wait to render the HTML






