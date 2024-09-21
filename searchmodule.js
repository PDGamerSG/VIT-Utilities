let products = {
  data: [
    {
      productName: "Regular White Sauce Pasta",
      category: "Food",
      price: "140",
      image: "https://shoppalace.in/wp-content/uploads/2020/07/penne-pasta-resize-1.jpg",
    },
    {
      productName: "Casio - Calculator 991 MS",
      category: "Stationary",
      price: "799",
      image: "https://th.bing.com/th/id/OIP.WYsikgGvr28bJCRRbea5JAAAAA?rs=1&pid=ImgDetMain",
    },
    {
      productName: "Camlin - Art Kit",
      category: "Stationary",
      price: "599",
      image: "https://th.bing.com/th/id/OIP.B5npSUX-LcYMPZL7wImkCgHaGI?w=240&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      productName: "Large Hamburger",
      category: "Food",
      price: "120",
      image: "https://www.aspicyperspective.com/wp-content/uploads/2020/07/best-hamburger-patties-1.jpg",
    },
    {
      productName: "Cornetto",
      category: "Food",
      price: "70",
      image: "https://th.bing.com/th/id/OIP.fn6TKFP-g6KpW_z2AsgxkAHaHa?rs=1&pid=ImgDetMain",
    },
    {
      productName: "Lays",
      category: "Food",
      price: "30",
      image: "https://www.snackandbakery.com/ext/resources/New-Consumer-Products/FL_Lays_FH.png?height=635&t=1652902795&width=1200",
    },
    
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};