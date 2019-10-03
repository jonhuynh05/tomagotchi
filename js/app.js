//IMAGE LIBRARY
const agumon = "https://vignette.wikia.nocookie.net/p__/images/a/af/Agumon_DA_The_Movie.png/revision/latest?cb=20190707155018&path-prefix=protagonist";
const greymon = "https://vignette.wikia.nocookie.net/digimon-adventure5140/images/c/ca/Greymon_tri.png/revision/latest?cb=20171010042426"
const metalgreymon = "https://vignette.wikia.nocookie.net/p__/images/f/fd/Campaign_metalgrey_january20_2017.png/revision/latest?cb=20170130012523&path-prefix=protagonist"
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

        if(game.timer%2 === 1 && game.timer >= 2){
            this.hunger += Math.floor(Math.random() * 3 + 1);
            this.sleepiness += Math.floor(Math.random() * 3 + 1);
            this.boredom += Math.floor(Math.random() * 3 + 1);
            this.age++;
            $(".lights-out").attr("class", "image-container");
            $(".play").attr("class", "agumon alive");
            $(".food-after").attr("class", "food-before");
            $("#hunger").text(`Hunger: ${this.hunger}`)
            $("#sleepiness").text(`Tired: ${this.sleepiness}`)
            $("#boredom").text(`Boredom: ${this.boredom}`)
            $("#age").text(`Age: ${this.age}`)
        }
        if($("img").attr("src") === agumon){
            this.morph1();
        }
        if($("img").attr("src") === greymon){
            this.morph2();
        }
        if(this.hunger >= 10 || this.sleepiness >= 10 || this.boredom >= 10 || this.age > 100){
            clearInterval(interval);
            this.dead();
            $(".status").text(`Status: Dead`).css("color", "red")
        }
        // if(this.age > 0 && $("button").length < 5){
        //     this.readyParent()
        // }
    }, 1000); }

    morph1() {
        if (this.age > 0 && this.age < 4){
            $("img").fadeOut(function() {
                $(this).attr("src", greymon)
                $(this).fadeIn()
            }); 
        }
    }
    morph2() {
        if (this.age >= 4){
            $("img").fadeOut(function() {
                $(this).attr("src", metalgreymon)
                $(this).fadeIn()
            }); 
        }

    }

    buttonClicks () {
        $("button").on("click", (e) => {
            if(e.target.id === "feed" && this.hunger > 0 && $("img").attr("class") !== "dead"){
                this.hunger--
                $("#hunger").text(`Hunger: ${this.hunger}`)
                $(".food-before").attr("class", "food-after");
            }
            else if(e.target.id === "sleep" && this.sleepiness > 0 && $("img").attr("class") !== "dead"){
                this.sleepiness--
                $("#sleepiness").text(`Tired: ${this.sleepiness}`)
                $(".image-container").attr("class", "image-container lights-out")

            }            
            else if(e.target.id === "play" && this.boredom > 0 && $("img").attr("class") !== "dead"){
                this.boredom--
                $("#boredom").text(`Boredom: ${this.boredom}`)
                $("img").attr("class", "play")

            }        
        }
    )
}

    dead () {
        $("img").fadeOut(function() {
            $(this).attr({src: deadImage, style: "width: 150px"})
            $(this).fadeIn()
        });
        $("img").attr("class", "dead");
    }

    readyParent () {
            const $button = $("<button/>").attr("class", "hatch").text("Hatch an egg");
            $(".start").after($button);
    }
};

//GAME OBJECT
const game = {
    tomagotchiArr: [],
    timer: 0,
    start () {
        const name = prompt("Name your pet");
        const newTomagotchi = new Tomagotchi(name);
        $("#name").text(name);
        this.tomagotchiArr.push(newTomagotchi)
        newTomagotchi.timer();
        newTomagotchi.buttonClicks();
    },

    reset() {
        location.reload()
    }

    // hatchEgg() {
    //     game.start();
    //     $(".container").after($(".container").clone())
    // }
};



//RUNNING CODE
$("button").on("click", (e) => {
    if(e.target.className === "start" && game.timer === 0){
        game.start()
    }
    if(e.target.className === "reset" && game.timer > 0){
        game.reset()
    }
    // if(e.target.className === "hatch"  && $(".container").length < 2){
    //     game.hatchEgg()
    // }

})