import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/GalerieKatucya", "Katucya", "/pages/Katucya.html"),
    new Route("/GalerieEmmanuelle", "Emmanuelle", "/pages/Emmanuelle.html"),
    new Route("/GalerieSarah", "Sarah", "/pages/Sarah.html"),
    new Route("/Contact", "Contact La Triade", "/pages/Contact.html"),
    new Route("/ContactKatucya", "Contact Katucya", "/pages/ContactKatucya.html"),
    new Route("/ContactEmmanuelle", "Contact Emmanuelle", "/pages/ContactEmmanuelle.html"),
    new Route("/ContactSarah", "Contact Sarah", "/pages/ContactSarah.html"),
];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "La triade";