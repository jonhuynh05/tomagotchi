//IMAGE LIBRARY
const oldImage = "https://wikimon.net/images/thumb/8/84/Agumon_DCDAPM.jpg/200px-Agumon_DCDAPM.jpg";
const newImage = "https://vignette.wikia.nocookie.net/digi-world/images/6/60/Greymon.gif/revision/latest?cb=20120103233635"
const deadImage = "http://www.clker.com/cliparts/U/H/t/l/l/W/rip-tombstone.svg"


//TOMAGOTCHI
class Tomagotchi {
    constructor(name) {
        this.name = name;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.age = 0;
    }

    timer () {
        const interval = setInterval(() => {
        $("#clock").text(`Timer: ${game.timer} sec`);
        game.timer++;
        if(game.timer%5 === 1 && game.timer >= 5){
            this.hunger++;
            this.sleepiness++;
            this.boredom++;
            this.age++;


            // UPDATE INCREASES WITH MATH RANDOM


            $("#hunger").text(`Hunger: ${this.hunger}`)
            $("#sleepiness").text(`Tired: ${this.sleepiness}`)
            $("#boredom").text(`Boredom: ${this.boredom}`)
            $("#age").text(`Age: ${this.age}`)
        }
        if($(".agumon").attr("src") != newImage){
            this.morph();
        }
        if(this.hunger >= 2 || this.sleepiness >= 2 || this.boredom >= 2 || this.age > 100){
            clearInterval(interval);
            this.dead();
            $(".status").text(`Status: Dead`).css("color", "red")
        }
        if(this.age > 0 && $("button").length < 5){
            this.readyParent()
        }
    }, 1000); }

    morph() {
        if (this.age > 0){
            $(".agumon").fadeOut(function() {
                $(this).attr("src", newImage)
                $(this).fadeIn()
            }); 
        }; 
    }

    buttonClicks () {
        $("button").on("click", (e) => {
            if(e.target.id === "feed" && this.hunger > 0 && $("img").attr("class") !== "dead"){
                this.hunger--
                $("#hunger").text(`Hunger: ${this.hunger}`)
            }
            else if(e.target.id === "sleep" && this.sleepiness > 0 && $("img").attr("class") !== "dead"){
                this.sleepiness--
                $("#sleepiness").text(`Tired: ${this.sleepiness}`)

            }            
            else if(e.target.id === "play" && this.boredom > 0 && $("img").attr("class") !== "dead"){
                this.boredom--
                $("#boredom").text(`Boredom: ${this.boredom}`)
                $("img").attr("class", "play")
            }        
        }
    )}

    dead () {
        $("img").fadeOut(function() {
            $(this).attr({src: deadImage, style: "width: 150px"})
            $(this).fadeIn()
        });
        $("img").attr("class", "dead");
    }

    readyParent () {
            const $button = $("<button/>").attr("class", "hatch").text("Hatch an egg");
            $("body").append($button);
    }
};

//GAME OBJECT
const game = {
    tomagotchiArr: [],
    timer: 0,
    // render() {

    // }
    start () {
        const name = prompt("Name your pet");
        const newTomagotchi = new Tomagotchi(name);
        $("#name").text(name);
        this.tomagotchiArr.push(newTomagotchi)
        newTomagotchi.timer();
        newTomagotchi.buttonClicks();
        newTomagotchi.morph();
    },

    hatchEgg() {
        game.start();
        $("body").append($(".container").clone())
    }
};



//RUNNING CODE
$("button").on("click", (e) => {
    if(e.target.className === "start"){
        game.start()
    }
    // if(e.target.className = "hatch"){
    //     game.hatchEgg()
    // }

})