var images = [];
images['pig'] = 'img/pig.png';
images['cow'] = 'img/vaca.png';
images['chicken'] = 'img/pollo.png';

var objimages = {
    pig : 'img/pig.png',
    cow : 'img/vaca.png',
    chicken : 'img/pollo.png',
}

class Pakiman {
    constructor(name,health,attackpoints){

        this.image = new Image();
        this.name = name;
        this.health  = health;
        this.attackpoints = attackpoints;

        this.image.src= objimages[this.name];

        //this.image.src= images[this.name];
    }
    speak(){
        alert(`Guarggg ${this.name} is aliveee!`);
    }
    show(){
        document.getElementById("wrap").appendChild(this.image);
        document.getElementById("wrap").innerHTML +=`
        <p>
            <strong>${this.name}</strong><br />
            Health Points: ${this.health} <br />
            Attack Points: ${this.attackpoints} <br />
        </p>
        <hr />`;

    }
}
//window.onload = function(){
    var colection = [];
    colection.push(new Pakiman("pig",100,150));
    colection.push(new Pakiman("cow",120,80));
    colection.push(new Pakiman("chicken",80,120));

    for(let each of colection)          
        each.show();


//}
