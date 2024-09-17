// hamburger: hamburger-knappen (de tre linjer, der viser/skjuler menuen).
// navMenu: selve menuen, der indeholder linksene.

// TILFØJER FUNKTION TIL BURGER KNAPPEN:
// Finder og gemmer referencen til HTML-elementet med klassen
const hamburger = document.querySelector(".hamburger");

// Finder og gemmer referencen til HTML-elementet med klassen .nav-menu
const navMenu = document.querySelector(".nav-menu");

// Tilføjer en kliklytter til hamburger elementet. Når man klikker: skifter koden en klasse kaldet active på både knappen og menuen..
hamburger.addEventListener("click", () => {
  // toggle("active") betyder, hvis active klassen ikke er der, tilføjer den den; hvis den allerede er der, fjerner den den. Bruges til at vise eller skjule menuen.
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// TILFØJER FUNKTION TIL HVER MENU-LINK:
// Finder alle links i menuen (elementer med klassen nav-link).
document.querySelectorAll(".nav-link").forEach((n) =>
  // Tilføjer en klik-hændelseslytter til hver nav-link.
  n.addEventListener("click", () => {
    //Når en nav-link klikkes, fjernes active klassen fra både hamburger og navMenu elementerne.
    // Dette lukker menuen, når et link i navigationsmenuen vælges.
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Når brugeren klikker på hamburger-ikonet, vises eller skjules navigationsmenuen ved at tilføje eller fjerne active klassen.
// Når brugeren klikker på et af navigationslinksene, lukkes menuen ved at fjerne active klassen.
