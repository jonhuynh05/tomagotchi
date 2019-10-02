class Tomagotchi {
    constructor(name) {
        this.name = name;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.age = 0;
    }


    // hunger () {
    //     setInterval(() => {
    //     game.hungerTimer++;
    //     if(game.hungerTimer%10 === 1){
    //         this.hunger++ ;
    //         $("#hunger").text(`Hunger: ${this.hunger}`)
    //     }
    // }, 1000); }

    timer () {
        setInterval(() => {
        $("#clock").text(`${game.timer} sec`);
        game.timer++;
        if(game.timer%10 === 1 && game.timer >= 10){
            this.hunger++;
            this.sleepiness++;
            this.boredom++;
            this.age++;
            $("#hunger").text(`Hunger: ${this.hunger}`)
            $("#sleepiness").text(`Tired: ${this.sleepiness}`)
            $("#boredom").text(`Boredom: ${this.boredom}`)
            $("#age").text(`Age: ${this.age}`)
        }
    }, 1000); }

    buttonClicks () {
        $("button").on("click", (e) => {
            if(e.target.id === "feed"){
                this.hunger--
                $("#hunger").text(`Hunger: ${this.hunger}`)
            }
            else if(e.target.id === "sleep"){
                this.sleepiness--
                $("#sleepiness").text(`Tired: ${this.sleepiness}`)

            }            
            else if(e.target.id === "play"){
                this.boredom--
                $("#boredom").text(`Boredom: ${this.boredom}`)
            }        
        }
    )}
};

// const name = prompt("Name your pet")
const newTomagotchi = new Tomagotchi(name);

const game = {
    // tomagatchis: [],
    timer: 0,
    // hungerTimer: 0,
    // render() {

    // }
    
    
};


// const hunger = () => {
//     setInterval(() => {
//     game.hungerTimer++;
//     if(game.hungerTimer%10 === 1){
//         firstTomagotchi.hunger++ ;
//         $("#hunger").text(`Hunger: ${firstTomagotchi.hunger}`)
//     }
// }, 1000); }


newTomagotchi.timer();
newTomagotchi.buttonClicks();
