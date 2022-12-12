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

// Main codes  

let pokiList = document.querySelector(".pokemon-list");

let renderPokemons = (pokemon) => {
    let res = "";
     list = document.createElement("div");
    list.setAttribute("class", "col-12 col-sm-6 col-lg-3");
  for (i of pokemon) {
      res += `
        <div class="card" style="width: 20rem;">
        <img src="${i.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${i.title}</h5>
        <p class="card-text">${i.summary}</p>
        <a href="" class="btn btn-primary">More...</a>
        </div>
        </div>
        `;
    list.innerHTML = res;
    }
pokiList.appendChild(list);

};

renderPokemons(pokemons);