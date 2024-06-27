import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */


export let colors = ["rgb(255, 118, 118)", "rgb(118, 166, 255)"];









/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Aswin",
    lastName: "Pradeep",
    initials: "Ap", // the example uses first and last, but feel free to use three or more if you like.
    position:  "I love building robust backend systems \nand AI software products",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            text: "freelance backend developer"
        },
        {
            emoji: "📧",
            text: "aswinpradeep15@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/aswin.pradeep.12/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/aswin_pradeep__/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/aswinpradeepgit",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/aswinpradeep621/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/mr__ap_",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello, I'm Aswin Pradeep. I'm currently in the data science domain with an edtech startup, working on the curriculum team. I'm also pursuing a Master's in Computer Science. I aim to transition into software engineering because I love problem-solving and building tech products, especially robust backend systems. I have expertise in DSA and use Java and Python for backend development. I'm passionate about system design (both LLD and HLD), and I enjoy learning, applying new concepts, and teaching coding online. I've built some cool projects that you can check out in the portfolio section.",
    skills:
        {
            proficientWith: ['java','python','springboot',"Django",'fast api', "mysql",'git', 'github',"system design(lld,hld)", "dsa","aws", "docker", "kubernetes", "redis", "kafka"],
            exposedTo: ["Backend Development", "Microservices", "API development (RESTFul, GraphQL)",'machine learning', 'deep learning', 'nlp',"langchain",'streamlit']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'Working-out',
            emoji: '🏋🏻‍♀️'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'Gaming',
            emoji: '🎮'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Trade automation",
            live: "https://ns-frontend-v2.streamlit.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/aswinpradeepgit/Automation_Main_Repo.git", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Personal portfolio website",
            live: "https://www.aswinpradeep.com",
            source: "https://github.com/aswinpradeepgit/react_personal_website.git",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://",
            source: "https://",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://",
            source: "https://",
            image: mock5
        }
    ]
}