import {
    person_1, person_2, person_3,
    snippet_1, snippet_2, snippet_3,
    portfolio_1, portfolio_2, portfolio_3,
    googleImg, facebookImg, youtubeImg, pinterestImg,
    htmlIcon, jsIcon, reactIcon, nodeIcon, webflowIcon,
    facebookIcon, twitterIcon, instagramIcon, linkedinIcon, youtubeIcon, githubIcon, dev_x, defi_x, dark_x,

} from '../assets'

export const navLinks = [
    {
        id: "home",
        title: "Home"
    },
    {
        id: "about",
        title: "About"
    },
    {
        id: "blog",
        title: "Blog"
    },
    {
        id: "portfolio",
        title: "Portfolio"
    },
]

export const heroContent = [
    {
        id: "hero-content-1",
        title: "About Me",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis lacus gravida.",
        buttonText: "Learn More",
    },
    {
        id: "hero-content-2",
        title: "My Work",
        content: "Purus ut faucibus pulvinar elementum integer enim neque fermentum iaculis eu non diam phasellus dolor consectur.",
        buttonText: "Browse Portfolio",
    },
]

export const socialMedia = [
    {
        id: "social-media-1",
        icon: facebookIcon,
        link: "https://www.facebook.com/",
    },
    {
        id: "social-media-2",
        icon: twitterIcon,
        link: "https://www.twitter.com/",
    },
    {
        id: "social-media-3",
        icon: instagramIcon,
        link: "https://www.instagram.com/",
    },
    {
        id: "social-media-4",
        icon: linkedinIcon,
        link: "https://www.linkedin.com/",
    },
    {
        id: "social-media-5",
        icon: youtubeIcon,
        link: "https://www.youtube.com/",
    },
    {
        id: "social-media-6",
        icon: githubIcon,
        link: "https://www.github.com/",
    },
]

export const stats = [
    {
        id: "stats-1",
        title: "Years of experience",
        value: "12",
    },
    {
        id: "stats-2",
        title: "Successful projects",
        value: "150",
    },
]

export const previousWorked = [
    {
        id: "previous-worked-1",
        img: googleImg,
    },
    {
        id: "previous-worked-2",
        img: facebookImg,
    },
    {
        id: "previous-worked-3",
        img: youtubeImg,
    },
    {
        id: "previous-worked-4",
        img: pinterestImg,
    },
]

export const mySkills = [
    {
        id: "my-skills-1",
        icon: htmlIcon,
        title: "HTML & CSS",
        content: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
    {
        id: "my-skills-2",
        icon: jsIcon,
        title: "Javascript",
        content: "Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
        id: "my-skills-3",
        icon: reactIcon,
        title: "React JS",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: "my-skills-4",
        icon: nodeIcon,
        title: "Node JS",
        content: "Excepteur sint occaecat cupidatat non proident ame.",
    },
    {
        id: "my-skills-5",
        icon: webflowIcon,
        title: "Webflow",
        content: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
]

export const testimonial = [
    {
        id: "testimonial-1",
        name: "Andy Smith",
        icon: googleImg,
        img: person_1,
        title: "VP of DevOps at Google",
        content: `"John did an amazing work with our web-app, everything he did to optimize our software help us to reduce our loading speed by 56%"`,
    },
    {
        id: "testimonial-2",
        name: "Jim benson",
        icon: pinterestImg,
        img: person_2,
        title: "VP of DevOps at Pinterest",
        content: `"We've never had come this far without John's great attention to detail and care for the final product"`,
    },
    {
        id: "testimonial-3",
        name: "Sophie Moore",
        icon: youtubeImg,
        img: person_3,
        title: "VP of DevOps at Youtube",
        content: `“I think John was essential to our product because he truly cared to deliver world-class work results”`,
    },
]

export const blogAndraticles = [
    {
        id: "blog-articles-1",
        date: "March 18, 2022",
        title: "The Best IDE's and Code Editors for Developers in 2022",
        tag: "Articles",
    },
    {
        id: "blog-articles-2",
        date: "March 18, 2022",
        title: "7 Great Web Development Language to Learn this Year",
        tag: "Articles",
    },
    {
        id: "blog-articles-3",
        date: "March 18, 2022",
        title: "How to Optimize your Website for Better Performance",
        tag: "Tutorials",
    },
]

export const myPortfolio = [
    {
        id: "first-section",
        data: [
            {
                id: "portfolio-1",
                firstTitle: "Agency Website",
                secondTitle: "Development for Dev X",
                icon: dev_x,
                img: portfolio_1,
                tags: ["React JS", "Web Development"],
            }
        ]
    },
    {
        id: "second-section",
        data: [
            {
                id: "portfolio-2",
                firstTitle: "Cypto Website",
                secondTitle: "Development for DeFi X",
                icon: defi_x,
                img: portfolio_2,
                tags: ["React JS", "Web Development"],
            },
            {
                id: "portfolio-3",
                firstTitle: "Trading Website",
                secondTitle: "Development for Dark X",
                icon: dark_x,
                img: portfolio_3,
                tags: ["Webflow", "Web Development"],
            }
        ]
    },
]

export const snippets = [
    {
        id: "snippet-1",
        img: snippet_1,
        title: "Dashboard Widgets",
        content: "Excepteur sint occaecat cupidatat non proident sunt in"
    },
    {
        id: "snippet-2",
        img: snippet_2,
        title: "Calendar Widgets",
        content: "Excepteur sint occaecat cupidatat non proident sunt in"
    },
    {
        id: "snippet-3",
        img: snippet_3,
        title: "Dashboard UI Cards",
        content: "Excepteur sint occaecat cupidatat non proident sunt in"
    },
]