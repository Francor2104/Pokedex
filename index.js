const pokecount = 898;
var pokedex = {};

window.onload = async function() {
  
  for (let i = 1; i <= pokecount; i++) {
      await getPokemon(i);
      let pokemon = document.createElement("div");
      pokemon.id = i;
      pokemon.innerText = i.toString() + ". " + pokedex[i]["name"].toUpperCase();
      pokemon.classList.add("pokemon-name");
      pokemon.addEventListener("click", updatePoke);
      document.getElementById("pokemon-list").append(pokemon);
  }
}

async function getPokemon(num){
  let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();

  let res = await fetch (url);
  let pokemon = await res.json();
  let pokeNombre = pokemon['name'];
  let pokeTipo = pokemon['types'];
  let pokeImg = pokemon['sprites']['front_default'];
  let pokeImg2 = pokemon['sprites']['back_default'];
  let pokeImgs = pokemon['sprites']['front_shiny'];
  let pokeImgs2 = pokemon['sprites']['back_shiny'];
  let pokeWeight = pokemon['weight'];
  let pokeHeight = pokemon['height'];
  let pokeHp = pokemon['stats']['0']['base_stat'];
  let pokeAtk = pokemon['stats']['1']['base_stat'];
  let pokeDef = pokemon['stats']['2']['base_stat'];
  let pokeSatk = pokemon['stats']['3']['base_stat'];
  let pokeSdef = pokemon['stats']['4']['base_stat'];
  let pokeSpd = pokemon['stats']['5']['base_stat'];


  pokedex[num] = {"name": pokeNombre, "img front": pokeImg, "img back": pokeImg2, "shiny front": pokeImgs, "shiny back": pokeImgs2, "types": pokeTipo, "Height": pokeHeight, "Weight": pokeWeight
  , "hp": pokeHp, "Atk": pokeAtk, "Def": pokeDef, "Satk": pokeSatk, "Sdef": pokeSdef, "Spd": pokeSpd}
  }

function updatePoke(){
  document.getElementById('poke-img').src = pokedex[this.id]["img front"];
  document.getElementById('poke-imgb').src = pokedex[this.id]["img back"];
  document.getElementById('poke-imgs').src = pokedex[this.id]["shiny front"];
  document.getElementById('poke-imgsb').src = pokedex[this.id]["shiny back"];

  let typesDiv = document.getElementById('poke-tipo');
  while (typesDiv.firstChild){
    typesDiv.firstChild.remove();
  }

  let types = pokedex[this.id]["types"];
    for (let i = 0; i < types.length; i++) {
        let type = document.createElement("span");
        type.innerText = types[i]["type"]["name"].toUpperCase();
        type.classList.add("type-box");
        type.classList.add(types[i]["type"]["name"]); //adds background color and font color
        typesDiv.append(type);
    }

    document.getElementById('poke-peso').innerText = "Peso: " + pokedex[this.id]["Weight"] + " Lb.";
    document.getElementById('poke-altura').innerText = "Altura: " + pokedex[this.id]["Height"] + " Ft.";

    document.getElementById('poke-hp').innerText = "HP Stat: " + pokedex[this.id]["hp"];
    document.getElementById('poke-ataque').innerText = "Atk Stat: " + pokedex[this.id]["Atk"];
    document.getElementById('poke-defensa').innerText = "Def Stat: " + pokedex[this.id]["Def"];
    document.getElementById('poke-sataque').innerText = "Satk Stat: " + pokedex[this.id]["Satk"];
    document.getElementById('poke-sdefensa').innerText = "Sdef Stat: " + pokedex[this.id]["Sdef"];
    document.getElementById('poke-speed').innerText = "Speed Stat: " + pokedex[this.id]["Spd"];


}