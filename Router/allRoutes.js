import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/Katucya", "GalerieKatucya", "/pages/Katucya.html"),];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "La triade";