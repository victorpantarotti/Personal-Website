import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";

export default {
    general: {
        home: "Home",
        aboutMe: "About me",
        projects: "Projects",
        posts: "Posts",
        skills: "Skills",
        socials: "Socials",
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
            name: "Meu site",
            description: "My simple personal website! :)"
        },
        giftly: {
            name: "Giftly",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a est ante."
        }
    },
    components: {
        MainContainer: {
            gradientCircleAlt: "Gradient Circle",
            myPhotoAlt: "Victor's Photo"
        }
    }
};