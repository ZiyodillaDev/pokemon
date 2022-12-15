// Navbar Shrink
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.documentElement.scrollTop > 150) {
        document.getElementById("navbar").classList.add("navbar-shrink");
    } else {
        document.getElementById("navbar").classList.remove("navbar-shrink");
    }
}

//   backtop

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 250) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

// Main codes  
let res = "";
let pokiList = document.querySelector(".pokemon-list");

let renderPokemons = (pokemon) => {
    list = document.createElement("div");
    list.setAttribute("class", "row gap-3 justify-content-center pokemon-list");
    for (i of pokemon) {
        
        res += `
    <div class="card col-12 col-sm-6 col-md-4 col-lg-3 card-bg cardHover" style="width: 19rem;position:relative;">
    <span class="fw-bold text-warning id" style="font-size:20px;">#${i.id}</span>
    <img src="${i.img}" class="card-img-top m-auto img" alt="..." style="width:150px;height:120px;">
    <div class="card-title text-center pokemonValue2 fw-bold pb-2 text-warning pokName nomi" style="display:none; font-size:22px">${i.name}</div>
    <div class="card-title text-center pokemonValue2 fw-bold pb-2 text-warning pokName" style="display:none; font-size:22px">Height:  ${i.height}</div>
    <div class="card-title text-center pokemonValue2 fw-bold pb-2 text-warning pokName" style="display:none; font-size:22px">Weight:  ${i.weight}</div>
    <button class="card-title  text-center pokemonValue2 fw-bold pb-2 pokName text-white text-bg-info selected" style="display:none; font-size:22px">Choose</button>
    <div class="card-body">
    <h5 class="card-title text-center pokemonValue2 fw-bold pb-2 text-warning" style="font-size:22px; z-index:99999;">${i.name}</h5>
    <div class="d-flex flex-row-reverse gap-4 justify-content-between">
    <div class="d-flex  flex-column">
    <div class="d-flex gap-2">
    <p class="card-text text-center pokemonValue3 fw-bold text-warning">Candies: </p>
    <p class="card-text text-center pokemonValue text-white">${i.candy_count}</p>
    </div>
    <div class="d-flex gap-2">
    <p class="card-text text-center pokemonValue3 fw-bold text-warning">Egg: </p>
    <p class="card-text text-center pokemonValue text-white">${i.egg}</p>
    </div>
    <div class="d-flex gap-2">
    <p class="card-text text-center pokemonValue3 fw-bold text-warning">Spawn: </p>
    <p class="card-text text-center pokemonValue text-white">${i.spawn_chance}</p>
    </div>
    </div>
    <div class="d-flex flex-column">
    <div class="d-flex gap-2">
    <p class="card-text text-center pokemonValue3 fw-bold text-warning">Height: </p>
    <p class="card-text text-center pokemonValue text-white">${i.height}</p>
    </div>
    <div class="d-flex gap-2">
    <p class="card-text text-center pokemonValue3 fw-bold text-warning">Weight: </p>
    <p class="card-text text-center pokemonValue text-white">${i.weight}</p>
    </div>
    <div class="d-flex gap-2">
    <p class="card-text text-center pokemonValue3 fw-bold text-warning">avgs: </p>
    <p class="card-text text-center pokemonValue text-white">${i.avg_spawns}</p>
    </div>
    </div>
    </div>
    <div class"d-flex align-items-center justify-content-center ">
    <span class="card-text text-center pokemonValue3 fw-bold text-white py-2 px-4 text-bg-warning">${i.spawn_time}</span>
    </div>
    </div>
    <div class="d-flex flex-column">
    </div>
    </div>
    `;
// Searching
// const search =  document.querySelector("#button-addon2");
// const searchnput =  document.querySelector(".searchInput");

// search.addEventListener("click",()=>{
//     if(searchnput.value === i.name){
//         console.log(true);
//     }else{
//         console.log(false);
//         console.log(searchnput.value);
//     }
   
// })
        list.innerHTML = res;
        pokiList.appendChild(list);
        let selected = document.querySelectorAll(".selected");
        for (selects of selected) 
            selects.addEventListener("click", () => {
                alert(`Congratulations You chose ${i.name}`);
            })
    };
}
renderPokemons(pokemons);

// Category by type
let pokiSelect1 = document.querySelector("#pokiSelect1");
let uniqCat = [];

let uniqCategoryFunc= (arr)=>{
    for(item of arr){
        for(category of item.type){
           if(!uniqCat.includes(category)) {
            uniqCat.push(category)
           }
        }
    }

    return uniqCat
}


function renderCategory(categories,el){
    let optRes = ''

    for(category of categories){
        optRes +=`
        <option value="${category}">${category}</option>
        `
    }
    el.innerHTML += optRes
}

renderCategory(uniqCategoryFunc(pokemons), pokiSelect1)

let newArr = [];
pokiSelect1.addEventListener("change",function(){
    newArr = [];

    if(pokiSelect1.value != "All"){
        pokemons.forEach((poc) =>{
            if(poc.type.includes(pokiSelect1.value)){
                newArr.push(poc)
            }
        });
        res = ''
        for (i of newArr) {
            
            res += `
        <div class="card col-12 col-sm-6 col-md-4 col-lg-3 card-bg cardHover" style="width: 19rem;position:relative;">
        <span class="fw-bold text-warning id" style="font-size:20px;">#${i.id}</span>
        <img src="${i.img}" class="card-img-top m-auto img" alt="..." style="width:150px;height:120px;">
        <div class="card-title text-center pokemonValue2 fw-bold pb-2 text-warning pokName nomi" style="display:none; font-size:22px">${i.name}</div>
        <div class="card-title text-center pokemonValue2 fw-bold pb-2 text-warning pokName" style="display:none; font-size:22px">Height:  ${i.height}</div>
        <div class="card-title text-center pokemonValue2 fw-bold pb-2 text-warning pokName" style="display:none; font-size:22px">Weight:  ${i.weight}</div>
        <button class="card-title  text-center pokemonValue2 fw-bold pb-2 pokName text-white text-bg-info selected" style="display:none; font-size:22px">Choose</button>
        <div class="card-body">
        <h5 class="card-title text-center pokemonValue2 fw-bold pb-2 text-warning" style="font-size:22px; z-index:99999;">${i.name}</h5>
        <div class="d-flex flex-row-reverse gap-4 justify-content-between">
        <div class="d-flex  flex-column">
        <div class="d-flex gap-2">
        <p class="card-text text-center pokemonValue3 fw-bold text-warning">Candies: </p>
        <p class="card-text text-center pokemonValue text-white">${i.candy_count}</p>
        </div>
        <div class="d-flex gap-2">
        <p class="card-text text-center pokemonValue3 fw-bold text-warning">Egg: </p>
        <p class="card-text text-center pokemonValue text-white">${i.egg}</p>
        </div>
        <div class="d-flex gap-2">
        <p class="card-text text-center pokemonValue3 fw-bold text-warning">Spawn: </p>
        <p class="card-text text-center pokemonValue text-white">${i.spawn_chance}</p>
        </div>
        </div>
        <div class="d-flex flex-column">
        <div class="d-flex gap-2">
        <p class="card-text text-center pokemonValue3 fw-bold text-warning">Height: </p>
        <p class="card-text text-center pokemonValue text-white">${i.height}</p>
        </div>
        <div class="d-flex gap-2">
        <p class="card-text text-center pokemonValue3 fw-bold text-warning">Weight: </p>
        <p class="card-text text-center pokemonValue text-white">${i.weight}</p>
        </div>
        <div class="d-flex gap-2">
        <p class="card-text text-center pokemonValue3 fw-bold text-warning">avgs: </p>
        <p class="card-text text-center pokemonValue text-white">${i.avg_spawns}</p>
        </div>
        </div>
        </div>
        <div class"d-flex align-items-center justify-content-center ">
        <span class="card-text text-center pokemonValue3 fw-bold text-white py-2 px-4 text-bg-warning">${i.spawn_time}</span>
        </div>
        </div>
        <div class="d-flex flex-column">
        </div>
        </div>
        `;
    
            list.innerHTML = res;
            pokiList.appendChild(list);
            let selected = document.querySelectorAll(".selected");
            for (selects of selected) 
                selects.addEventListener("click", () => {
                    alert(`Congratulations You chose ${i.name}`);
                })
        };
    }
    else{       
    //    newArr = 
       console.log(pokemon.i.name); ; 
    }
})

