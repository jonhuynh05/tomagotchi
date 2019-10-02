
const oldImage = "https://wikimon.net/images/thumb/8/84/Agumon_DCDAPM.jpg/200px-Agumon_DCDAPM.jpg";
const newImage = "https://vignette.wikia.nocookie.net/digi-world/images/6/60/Greymon.gif/revision/latest?cb=20120103233635"



class Tomagotchi {
    constructor(name) {
        this.name = name;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.age = 0;
    }

    timer () {
        setInterval(() => {
        $("#clock").text(`Timer: ${game.timer} sec`);
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
        if($(".agumon").attr("src") != newImage){
            this.morph();
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



const name = prompt("Name your pet");
const newTomagotchi = new Tomagotchi(name);
$("#name").text(name);

const createTomagotchi = () => {

}

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

const move = () => {
    $("img").animate({width: 110}, 3000, function(){
        $("img").animate({width: 200}, 3000)
    })
}


newTomagotchi.timer();
newTomagotchi.buttonClicks();
newTomagotchi.morph();
move();