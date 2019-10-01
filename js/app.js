class Tomagotchi {
    constructor(name) {
        this.name = name;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.age = 0;
    }
};

// const name = prompt("Name your pet")
const firstTomagotchi = new Tomagotchi(name);

const $divStatus = $(".status");
const tomagotchiArray = Object.values(firstTomagotchi);

for (let i = 1; i < 5; i++){
   $divStatus[i-1].append(tomagotchiArray[i]);
};