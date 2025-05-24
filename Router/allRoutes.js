import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/GalerieKatucya", "Katucya", "/pages/Katucya.html"),
    new Route("/GalerieEmmanuelle", "Emmanuelle", "/pages/Emmanuelle.html"),];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "La triade";