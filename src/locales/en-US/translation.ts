import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";

export default {
    general: {
        home: "Home",
        aboutMe: "About me",
        projects: "Projects",
        posts: "Posts",
        skills: "Skills",
        contact: "Contact",
        public: "Public",
        localhost: "Run locally",
        development: "In development",
        seeRepo: "Take a look on the Github Repo!"
    },
    home: HomePage,
    notFound: NotFoundPage,
    projects: {
        savey: {
            name: "Savey",
            description: "A Simple Website and Android App to save Youtube Videos to watch later! Made with React, Typescript, Vite and Ionic."
        },
        personalWebsite: {
            name: "Personal Website",
            description: "My simple personal website! :)"
        },
        injemotorsWebsite: {
            name: "Injemotors Website",
            description: `A website made for the company "INJEMOTORS - Manutenção Automotiva"!`
        },
        giftly: {
            name: "Giftly",
            description: "A website/app to transform your texts into an experience!"
        }
    },
    components: {
        MainContainer: {
            gradientCircleAlt: "Gradient Circle",
            myPhotoAlt: "Victor's Photo"
        }
    }
};