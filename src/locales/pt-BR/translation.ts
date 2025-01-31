import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";

export default {
    general: {
        home: "Início",
        aboutMe: "Sobre mim",
        projects: "Projetos",
        posts: "Posts",
        skills: "Habilidades",
        contact: "Contato",
        public: "Público",
        localhost: "Rodar localmente",
        development: "Em desenvolvimento",
        seeRepo: "Dê uma olhada no repositório do GitHub!"
    },
    home: HomePage,
    notFound: NotFoundPage,
    projects: {
        savey: {
            name: "Savey",
            description: "Um simples website e Aplicativo Android para salvar Vídeos do Youtube para assistir depois! Feito com React, Typescript, Vite e Ionic."
        },
        personalWebsite: {
            name: "Meu site",
            description: "Meu pequeno site para me apresentar! :)"
        },
        giftly: {
            name: "Giftly",
            description: "Um aplicativo/site para transformar seus textos em uma experiência!"
        }
    },
    components: {
        MainContainer: {
            gradientCircleAlt: "Circulo Gradiente",
            myPhotoAlt: "Foto do Victor"
        }
    }
};