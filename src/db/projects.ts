// add "logo" and make it optional on the component

import saveyLogo from "@/assets/Savey-NoBGLogo.png";

import personalWebsiteLogo from "@/assets/PersonalWebsite-Logo.png";
import personalWebsiteImage from "@/assets/PersonalWebsite-screenshot.png";

import giftlyLogo from "@/assets/Giftly-Logo.png";
import giftlyImage from "@/assets/Giftly-screenshot.png";

interface Project {
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
        image: "https://github.com/victorpantarotti/Savey/raw/main/Savey-ExampleScreenshot.png",
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
        id: "giftly",
        logo: giftlyLogo,
        image: giftlyImage,
        devStatus: "development",
        githubRepo: "https://github.com/victorpantarotti/Giftly"
    }
];

export default projects;