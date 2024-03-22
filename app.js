
const wrappers = document.querySelectorAll('.sliderWrapper');


const products = [
  {
    id: 0,
    name: 'صندوق زهور التوليب',
    price: 200,
    image: 'images/box1.jpg',
    category: 'box',
    description: " باقه من الجوري و البيبي جوري و الاستوما واكسسوارات الورد الهولندية الأنيقة، بألوان رقيقة"
  },
  {
    id: 1,
    name: 'باقة ورد بألوان دافئة',
    price: 200,
    image: 'images/bouqet1.jpg',
    category: 'bouqet',
    description: " باقه من الجوري و البيبي جوري و الاستوما واكسسوارات الورد الهولندية الأنيقة، بألوان رقيقة"
  },
  {
    id: 2,
    name: 'باقة توليب أحمر',
    price: 250,
    image: 'images/bouqet2.jpg',
    category: 'bouqet',
    description: " باقه من الجوري و البيبي جوري و الاستوما واكسسوارات الورد الهولندية الأنيقة، بألوان رقيقة"
  },
  {
    id: 3,
    name: 'باقة ورد بألوان زاهية',
    price: 200,
    image: 'images/bouqet3.jpg',
    category: 'bouqet',
    description: " باقه من الجوري و البيبي جوري و الاستوما واكسسوارات الورد الهولندية الأنيقة، بألوان رقيقة"
  },
  {
    id: 4,
    name: 'ورد في مزهرية زجاجية',
    price: 300,
    image: 'images/vase1.jpg',
    category: 'vase',
    description: " باقه من الجوري و البيبي جوري و الاستوما واكسسوارات الورد الهولندية الأنيقة، بألوان رقيقة"
  },
  {
    id: 5,
    name: 'ورد في مزهرية زجاجية',
    price: 200,
    image: 'images/vase2.jpg',
    category: 'vase',
    description: " باقه من الجوري و البيبي جوري و الاستوما واكسسوارات الورد الهولندية الأنيقة، بألوان رقيقة"
  },
  {
    id: 6,
    name: 'زهور بيضاء في مزهرية زجاجية ملونة',
    price: 500,
    image: 'images/vase3.jpg',
    category: 'vase',
    description: " باقه من الجوري و البيبي جوري و الاستوما واكسسوارات الورد الهولندية الأنيقة، بألوان رقيقة"
  },  
  {
    id: 7,
    name: 'ورد منوع في مزهرية زجاجية',
    price: 350,
    image: 'images/vase4.jpg',
    category: 'vase',
    description: " باقه من الجوري و البيبي جوري و الاستوما واكسسوارات الورد الهولندية الأنيقة، بألوان رقيقة"
  },
  {
    id: 8,
    name: 'ورد في مزهرية بيضاء',
    price: 400,
    image: 'images/vase5.jpg',
    category: 'vase',
    description: " باقه من الجوري و البيبي جوري و الاستوما واكسسوارات الورد الهولندية الأنيقة، بألوان رقيقة"
  },
  {
    id: 9,
    name: 'صندوق ورد أبيض',
    price: 150,
    image: 'images/box2.jpg',
    category: 'box',
    description: " باقه من الجوري و البيبي جوري و الاستوما واكسسوارات الورد الهولندية الأنيقة، بألوان رقيقة"
  },
  {
    id: 10,
    name: 'صندوق ورد منوع',
    price: 250,
    image: 'images/box3.jpg',
    category: 'box',
    description: " باقه من الجوري و البيبي جوري و الاستوما واكسسوارات الورد الهولندية الأنيقة، بألوان رقيقة"
  },
  {
    id: 11,
    name: 'ورد في مزهرية بيضاء',
    price: 430,
    image: 'images/vase6.jpg',
    category: 'vase',
    description: " باقه من الجوري و البيبي جوري و الاستوما واكسسوارات الورد الهولندية الأنيقة، بألوان رقيقة"
  },
  {
    id: 12,
    name: 'ورد في مزهرية بيضاء',
    price: 480,
    image: 'images/vase7.jpg',
    category: 'vase',
    description: " باقه من الجوري و البيبي جوري و الاستوما واكسسوارات الورد الهولندية الأنيقة، بألوان رقيقة"
  },
  {
    id: 13,
    name: 'صندوق ورد منوع',
    price: 450,
    image: 'images/box4.jpg',
    category: 'box',
    description: " باقه من الجوري و البيبي جوري و الاستوما واكسسوارات الورد الهولندية الأنيقة، بألوان رقيقة"
  },



]



//--------------------------products display ----------------------------------------------------//
const categoryNo = {'bouqet': 0, 'vase':1, 'box':2}
let html = "";
products.forEach(
    product => {
        html = `
        <div class="product-card">
          <img src=${product.image}  class="product-img">
          <h2 class="product-name">${product.name}</h2>
          <p class="product-price">${product.price} ج.م</p>
          <button class="add-cart-btn">أضف للسلة</button>
          <button class="info-btn" id=${product.id}>؟</button>
        </div>
    `;
    wrappers[categoryNo[product.category]].innerHTML += html;
    }     
) 

//------------------------------------------------------------------------------------------------------//



const infoBtns = document.querySelectorAll(".info-btn");
const prevBtns = document.querySelectorAll(".prev-btn");
const nextBtns = document.querySelectorAll(".next-btn");
const productCard = document.querySelector('.product-card');




function showNextBtns(index){
  p = (wrappers[index].children.length - currentSlide[index] ) * 260 ;
  if ( p < wrappers[index].offsetWidth ){
    nextBtns[index].classList.add('hidden');
  }
  else{
    nextBtns[index].classList.remove('hidden');
  }
}


const handleSlideButtons = (index) => {
  const maxScrolltest = Math.abs(wrappers[index].scrollWidth - wrappers[index].clientWidth - Math.abs(wrappers[index].scrollLeft));
  prevBtns[index].style.display = wrappers[index].scrollLeft >= -1 ? "none" : "block";
  nextBtns[index].style.display =   maxScrolltest <=20 ? "none" : "block";
}


window.addEventListener("resize", ()=> wrappers.forEach((_, index) => handleSlideButtons(index)));

window.addEventListener("load", ()=> wrappers.forEach((_, index) => handleSlideButtons(index)));

function moveToSlide(direction, index) {

  const cardMargin = window.getComputedStyle(productCard).getPropertyValue('margin');
  const scrollAmount = (productCard.clientWidth + 2*parseFloat(cardMargin)) * direction;
  console.log('scroll amount:', scrollAmount);
  wrappers[index].scrollBy({left: scrollAmount, behavior: "smooth"});
  wrappers[index].addEventListener("scroll", () => {
    handleSlideButtons(index);
  });
}


prevBtns.forEach((prevBtn, index) => {
  prevBtn.addEventListener('click', () => {
    moveToSlide(1, index);
  });
});

nextBtns.forEach((nextBtn, index) => {
  nextBtn.addEventListener('click', () => {
    moveToSlide(-1, index);
  });
});




//------------------search------------------------------------------------------------------//
const searchBox = document.querySelector("#search-box");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector("#search-button");
const searchDiv = document.querySelector('.search-div');


searchProducts = () => {
    const searchValue = searchInput.value;
    const filteredProducts = products.filter((product) => {
        return product.name.includes(searchValue);
    });

    const searchResultsDiv = document.createElement("div");
    searchResultsDiv.classList.add("search-results");
    searchBox.appendChild(searchResultsDiv);

    searchBox.classList.add("active-search");
    if (filteredProducts.length === 0) {
        searchResultsDiv.innerHTML = "<p>لا توجد نتائج</p>";
        return;
    }

    filteredProducts.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("search-result");
        productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.price} ج.م</p>        
        `;
        searchResultsDiv.appendChild(productDiv);
    });
};

clearSearchResults = () => {
  
    const searchResults = document.querySelector(".search-results");
    searchBox.classList.remove("active-search");

    if (searchResults) {
        searchResults.remove();
    }
};

searchButton.addEventListener("click", () => {
    clearSearchResults();
    if (searchInput.value === "") return;
    clearSearchResults();
    searchProducts();
});

searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        if (searchInput.value === "") return;
        clearSearchResults();
        searchProducts();
    }
});
searchInput.addEventListener("click", ()=>{
  searchInput.classList.add('searchClicked');
  document.addEventListener("click", (e) => {
    const inInsideSearchBox = searchBox.contains(e.target);
    if (!inInsideSearchBox) {
        clearSearchResults();
        searchInput.value = "";
        searchInput.classList.remove('searchClicked');
    }

});
})



//-------------------------------------------------------------------------------------------------//

//-----------------------product's info display ---------------------------------------------------//

infoBtns.forEach((infoBtn) => {
  infoBtn.addEventListener('click', (e) => {

    const info_div = e.target.parentElement.querySelector('.info');
    if(info_div){
      info_div.remove();

    }
    else{           
      const infoDiv = document.createElement("div");
      infoDiv.classList.add("info");
      e.target.parentElement.appendChild(infoDiv);
      infoDiv.innerHTML = `
      <p class="info-text">${products[e.target.id].description}</p>
      `;
    }
    }   
);
});
//---------------------------------------------------------------------------------------------------//

const hamburger = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".navBottom");
const overlay = document.querySelector('.overlay');
const searchIcon = document.querySelector('.search-icon');



const burgerExitBtn = document.createElement("button");
burgerExitBtn.textContent='X';
burgerExitBtn.classList = "burgerExitBtn hidden";
navLinks.appendChild(burgerExitBtn);

const searchExitBtn = document.createElement("button");
searchExitBtn.textContent='X';
searchExitBtn.classList = "searchExitBtn hidden";
searchDiv.appendChild(searchExitBtn);


function showSearch(){
  overlay.classList.add('show');
  searchExitBtn.classList.add('show');
  searchDiv.classList.remove('hide');
}

function hideSearch(){
  overlay.classList.remove('show');
  searchDiv.classList.add('hide');
  searchExitBtn.classList.remove('show');
}

hamburger.addEventListener('click', ()=>{
  console.log('clicked');
  overlay.classList.add('show');
  burgerExitBtn.classList.add('show');
  navLinks.classList.remove('hide');
});



searchIcon.addEventListener('click', ()=>{
  searchInput.classList.add('searchClicked');
  showSearch();
});



burgerExitBtn.addEventListener('click', ()=>{

  overlay.classList.remove('show');
  navLinks.classList.add('hide');
  burgerExitBtn.classList.remove('show');

});

searchExitBtn.addEventListener('click', ()=>{
  searchInput.classList.remove('searchClicked');
  hideSearch();
});


window.addEventListener("resize", function() {
  if (window.matchMedia("(max-width: 800px)").matches) {
    if(searchInput.classList.contains('searchClicked')){
      showSearch();
    }
    else{
      hideSearch();
    }
  } 
})


