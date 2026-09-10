// =========================
// PROPERTY FILTER
// =========================

function filterProperties() {

  const location =
    document.getElementById("location").value;

  const type =
    document.getElementById("type").value;

  const budget =
    document.getElementById("budget").value;


  const cards =
    document.querySelectorAll(".property-card");


  let visibleCards = 0;


  cards.forEach(card => {

    const cardLocation =
      card.dataset.location;

    const cardType =
      card.dataset.type;

    const price =
      Number(card.dataset.price);


    const locationMatch =
      location === "all" ||
      location === cardLocation;


    const typeMatch =
      type === "all" ||
      type === cardType;


    let budgetMatch = true;


    if (budget === "under2") {
      budgetMatch = price < 2;
    }

    if (budget === "2to4") {
      budgetMatch =
        price >= 2 &&
        price <= 4;
    }

    if (budget === "over4") {
      budgetMatch = price > 4;
    }


    if (
      locationMatch &&
      typeMatch &&
      budgetMatch
    ) {

      card.style.display = "block";

      visibleCards++;

    } else {

      card.style.display = "none";

    }

  });


  const noResults =
    document.getElementById("noResults");


  if (visibleCards === 0) {

    noResults.style.display = "block";

  } else {

    noResults.style.display = "none";

  }

}


// =========================
// FAVORITE BUTTON
// =========================

const favoriteButtons =
  document.querySelectorAll(".favorite");


favoriteButtons.forEach(button => {

  button.addEventListener("click", () => {

    button.classList.toggle("active");

    if (button.classList.contains("active")) {

      button.textContent = "♥";

    } else {

      button.textContent = "♡";

    }

  });

});