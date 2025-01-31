import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";

export default {
    general: {
        home: "Início",
        aboutMe: "Sobre mim",
        projects: "Projetos",
        posts: "Posts",
        skills: "Habilidades"
    },
    home: HomePage,
    notFound: NotFoundPage,
    projects: {
        giftly: {
            name: "Giftly",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a est ante."
        },
        savey: {
            name: "Savey",
            description: "Um simples website e Aplicativo Android para salvar Vídeos do Youtube para assistir depois! Feito com React, Typescript, Vite e Ionic."
        }
    },
    components: {
        MainContainer: {
            gradientCircleAlt: "Circulo Gradiente",
            myPhotoAlt: "Foto do Victor"
        }
    }
};