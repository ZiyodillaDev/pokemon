// Main codes  
let elinput = document.querySelector("input");
let elForm = document.querySelector("form");
let pokiList = document.querySelector(".pokemon-list");
let pokiSelect = document.querySelector("#pokiSelect1");
let bookmarkList = document.querySelector(".bookmark-list");
let newArr = [];
let newBookmark = [];

elForm.addEventListener("input", (evt) => {
    evt.preventDefault();
    pokiList.innerHTML = "";

    let elInputVal = elinput.value.toLocaleLowerCase();

    pokemons.forEach((el) => {
        if (el.name.toLocaleLowerCase().includes(elInputVal)) {
            newArr.push(el);
        }
    });

    hero(newArr);

    newArr = [];
});

function hero(pokemons) {
    list = document.createElement("div");
    list.setAttribute("class", "row gap-3 justify-content-center");
    let newRes = "";
    for (i of pokemons) {
        newRes += `
     <div ${pokemonId = i.id} class="card col-12 col-sm-6 col-md-4 col-lg-3 card-bg cardHover" style="width: 19rem;position:relative;">
     <span class="fw-bold text-warning id" style="font-size:20px;">#${i.id}</span>
     <img src="${i.img}" class="card-img-top m-auto img" alt="..." style="width:150px;height:120px;">
     <div class="card-title text-center pokemonValue2 fw-bold pb-2 text-warning pokName nomi" style="display:none; font-size:22px">${i.name}</div>
     <div class="card-title text-center pokemonValue2 fw-bold pb-2 text-warning pokName" style="display:none; font-size:22px">Height:  ${i.height}</div>
     <div class="card-title text-center pokemonValue2 fw-bold pb-2 text-warning pokName" style="display:none; font-size:22px">Weight:  ${i.weight}</div>
     <button ${pokemonId = i.id} class="card-title  text-center pokemonValue2 fw-bold pb-2 pokName text-white text-bg-info chosen" style="display:none; font-size:22px">Choose <img class="bookmark" src="./images/bookmark.png" alt="..." ></button>
     <div class="card-body">
     <h5 class="card-title text-center pokemonValue2 fw-bold pb-2 text-warning" style="font-size:22px; z-index:99999;">${i.name}</h5>
     <div class="d-flex flex-row-reverse gap-4 justify-content-between">
     <div class="d-flex  flex-column">
     <div class="d-flex gap-2">
     <p class="card-text text-center pokemonValue3 fw-bold text-warning">Candies: </p>
     <p class="card-text text-center pokemonValue text-white">${i.candy_count>0?i.candy_count:"NO"}</p>
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
    // console.log(pokemonId);


    }
pokiList.addEventListener("click",(evt)=>{
        if(evt.target.matches("button")||evt.target.matches(".bookmark")){
        let pokemonBookmarked =  pokemons.find((el)=>el.id==id);
        newBookmark.push(pokemonBookmarked)
        console.log(pokemonBookmarked);
        }
        console.log(newBookmark);
    })

    list.innerHTML = newRes;

    pokiList.appendChild(list);


}


hero(pokemons);

let newSet = new Set();

pokemons.forEach((el) => {
    el.type.forEach((type) => {
        newSet.add(type);
    });
});

newSet.forEach((type) => {
    let newOption = document.createElement("option");

    newOption.value = type;
    newOption.textContent = type;
    newOption.classList.add("text-black-50")
    newOption.classList.add("option")
    pokiSelect.appendChild(newOption);
});

let newRes = [];

pokiSelect.addEventListener("change", (element) => {
    let filterArr = pokemons.filter((pokemon) => {
        let all = element.target.value;
        if (all != "All") {
            return pokemon.type.includes(all);
        } else {
            return pokemon;
        }
    });
    pokiList.innerHTML = ''
    hero(filterArr, pokiList);
});



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

// Change BG Color
const header = document.querySelector("#navbar")
const elModeBtn = document.querySelector(".mode-btn");
const input = document.querySelector(".input");
const title = document.querySelector(".js-title");
const offcanvas = document.querySelector(".offcanvas");
const bookmarkBtn = document.querySelector(".bookmark-button");
let theme = false;

elModeBtn.addEventListener("click", () => {
    theme = !theme;
    const newBg = theme ? "dark" : "light";
    window.localStorage.setItem("theme", newBg);
    newTheme();
});

let newTheme = () => {
    if (window.localStorage.getItem("theme") == "dark") {
        document.body.classList.add("dark");
        header.classList.add("dark")
        elModeBtn.innerHTML = "Secondary"
        elModeBtn.classList.add("bg-yellow")
        input.classList.add("bg-yellow")
        pokiSelect.classList.add("bg-yellow")
        title.classList.add("bg-yellow2")
        offcanvas.classList.add("bg-yellow")
        bookmarkBtn.classList.add("bg-yellow")
        bookmarkBtn.classList.add("color-white")
    } else {
        document.body.classList.remove("dark");
        header.classList.remove("dark");
        elModeBtn.innerHTML = "Standard"
        elModeBtn.classList.remove("bg-yellow")
        input.classList.remove("bg-yellow")
        pokiSelect.classList.remove("bg-yellow")
        title.classList.remove("bg-yellow2")
        offcanvas.classList.remove("bg-yellow")
        bookmarkBtn.classList.remove("bg-yellow")
        bookmarkBtn.classList.remove("color-white")
    }
};

newTheme();

// Bookmark
// pokemons.forEach((el)=>{
//     list.dataset.filmId = el.id
//     list.forEach((elm)=>{
//         console.log(elm);
//         })
//     })