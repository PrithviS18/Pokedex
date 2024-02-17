let bgc={
        bug: "#26de81",
        dragon: "#ffeaa7",
        electric: "#fed330",
        fairy: "#FF0069",
        fighting: "#30336b",
        fire: "#f0932b",
        flying: "#81ecec",
        grass: "#00b894",
        ground: "#EFB549",
        ghost: "#a55eea",
        ice: "#74b9ff",
        normal: "#95afc0",
        poison: "#6c5ce7",
        psychic: "#a29bfe",
        rock: "#2d3436",
        water: "#0190FF",
};

let url=" https://pokeapi.co/api/v2/pokemon/";
let image=document.getElementById("img");
let hp=document.getElementById("hp");
let attack=document.getElementById("attack");
let defense=document.getElementById("defense");
let speed=document.getElementById("speed");
let species=document.getElementById("species");
let card=document.getElementById("card")

function generate(){
    let name1=document.getElementById("search").value.toLowerCase();
fetch(url+ name1)
.then(response => {
    //console.log(response);
    return response.json();
})
.then(data => {
    let val=data;
    console.log(val);
    let image1=val.sprites.other.dream_world.front_default;
    let hp1=val.stats[0].base_stat;
    let attack1=val.stats[1].base_stat;
    let defense1=val.stats[2].base_stat;
    let speed1=val.stats[5].base_stat;
    let species1=val.species.name.toUpperCase();
    let type1=val.types[0].type.name;

    card.style.backgroundImage="linear-gradient(180deg, "+bgc[type1]+", white)";
    image.src=image1;
    hp.innerHTML="HP  "+hp1;
    attack.innerHTML=attack1;
    defense.innerHTML=defense1;
    speed.innerHTML=speed1;
    species.innerHTML=species1;

    let type=document.getElementById("type1");
    type.innerHTML="";
    let num=val.types;
    for (let i=0;i<num.length;i++){
        let ele=document.createElement("h3");
        ele.classList.add("types");
        ele.innerHTML=num[i].type.name.toUpperCase();
        ele.style.backgroundColor=bgc[num[i].type.name];
        type.appendChild(ele);
    } 
})
}

function generate1(){
    let name1=Math.floor(Math.random()*200);
fetch(url+ name1)
.then(response => {
    //console.log(response);
    return response.json();
})
.then(data => {
    let val=data;
    console.log(val);
    let image1=val.sprites.other.dream_world.front_default;
    let hp1=val.stats[0].base_stat;
    let attack1=val.stats[1].base_stat;
    let defense1=val.stats[2].base_stat;
    let speed1=val.stats[5].base_stat;
    let species1=val.species.name.toUpperCase();
    let type1=val.types[0].type.name;

    card.style.backgroundImage="linear-gradient(180deg, "+bgc[type1]+", white)";
    image.src=image1;
    hp.innerHTML="HP  "+hp1;
    attack.innerHTML=attack1;
    defense.innerHTML=defense1;
    speed.innerHTML=speed1;
    species.innerHTML=species1;

    let type=document.getElementById("type1");
    type.innerHTML="";
    let num=val.types;
    for (let i=0;i<num.length;i++){
        let ele=document.createElement("h3");
        ele.classList.add("types");
        ele.innerHTML=num[i].type.name.toUpperCase();
        ele.style.backgroundColor=bgc[num[i].type.name];
        type.appendChild(ele);
    } 
})
}
generate();

let btn1=document.getElementById("btn1");
btn1.addEventListener("click",function(){
    //let name2=document.getElementById("search");
    generate();
})

let btn2=document.getElementById("btn2");
btn2.addEventListener("click",function(){
    //let name2=document.getElementById("search");
    generate1();
})