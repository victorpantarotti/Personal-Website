// add "logo" and make it optional on the component

import saveyLogo from "@/assets/Savey-NoBGLogo.png";
import saveyImage from "@/assets/Savey-screenshot.png";

import personalWebsiteLogo from "@/assets/PersonalWebsite-Logo.png";
import personalWebsiteImage from "@/assets/PersonalWebsite-screenshot.png";

import injemotorsWebsiteLogo from "@/assets/InjemotorsWebsite-Logo.png";
import injemotorsWebsiteImage from "@/assets/InjemotorsWebsite-screenshot.png";

import giftlyLogo from "@/assets/Giftly-Logo.png";
import giftlyImage from "@/assets/Giftly-screenshot.png";

export interface Project {
    id: string,
    logo: string,
    image: string,
    url?: string,
    devStatus: "development" | "localhost" | "public",
    githubRepo: string
}

const projects: Project[] = [
    {
        id: "savey",
        logo: saveyLogo,
        image: saveyImage,
        devStatus: "localhost",
        githubRepo: "https://github.com/victorpantarotti/Savey"
    },
    {
        id: "personalWebsite",
        logo: personalWebsiteLogo,
        image: personalWebsiteImage,
        url: "https://victorpantarotti.com.br",
        devStatus: "public",
        githubRepo: "https://github.com/victorpantarotti/Personal-Website"
    },
    {
        id: "injemotorsWebsite",
        logo: injemotorsWebsiteLogo,
        image: injemotorsWebsiteImage,
        url: "https://injemotors.com.br",
        devStatus: "public",
        githubRepo: "https://github.com/victorpantarotti/Injemotors-Website"
    },
    {
        id: "giftly",
        logo: giftlyLogo,
        image: giftlyImage,
        devStatus: "development",
        githubRepo: "https://github.com/victorpantarotti/Giftly"
    }
];

export default projects;