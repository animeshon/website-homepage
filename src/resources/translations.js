export const stringsLang = lang => {
    switch (lang) {
        // ------------------------
        // ------------------------
        // JAPANESE
        // ------------------------
        // ------------------------
        // case 'ja':
        //     return {
               
        //     };
        // ------------------------
        // ------------------------
        // ENGLISH
        // ------------------------
        // ------------------------
        default:
            return {
                header: {
                    headerTitle: 'The most complete and accessible Japanese Multimedia Ecosystem',
                    headerUnderline: 'All the Anime, Manga, Doujinshi, Light Novels, Visual Novels, Games in one place',
                    headerFormPlaceholder: 'E-mail',
                    headerFormButton: 'Join Now',
                    headerFormDisclaimer: `Get free trial for a month
                                           When we start 5.99€ /month
                                           No credit card required`,
                },
                firstSlide: {
                    headline: 'The project the Community needs and the project the Community deserves',
                    subslides: [
                        {
                            keywords: ["Discover", "Organize", "Rate", "Discuss"],
                            description: "Intuitive and complete experience. Discover a new world of hidden content"
                        },
                        {
                            keywords: ["Expand", "Integrate", "Improve"],
                            description: "Easy to use Interface and SDKs to build you idea on top of Animeshon"
                        },
                    ]
                },
                userSlide: {
                    headline: "Easy to find, easy to consult, easy to consume",
                    subline: "All the information about Japanese Multimedia Content in one place, easily accessible",
                    additional: [
                        {
                            title: "Universally accessible.",
                            description: " The informations are available for everyone, everywhere, on everything and in every language."
                        },
                        {
                            title: "Thightly linked content.",
                            description: " Find all the related contents of you beloved opera has never been easy task. Thanks to Animeshon it becomes as easy as breathing."
                        }
                    ]
                },
                devSlide: {
                    headline: "Unleash the potential of infinte ideas",
                    subline: "Powerfull and easy to use interfaces and SDKs to exploit Animeshon and realize your idea",
                    additional: [
                        {
                            title: "Complete and comprehensive Documentation.",
                            description: " Everything we do is for the community, take a look to our documentation and start playing with Animeshon's services."
                        },
                        {
                            title: "Foundation Tool-Set in constant evolution.",
                            description: " The set of tools provided to the dev-community is in constant evolution to provide better, more usable and more performant services."
                        }
                    ]
                },
                contactsSlide: {
                    headline: "Enter the Isekai Portal",
                    contacts: [
                        {
                            title: "Discourse Forum",
                            description: "Be part of the dev-community andl help Animeshon to provide better service. Together we are invincible.",
                            link: "www.google.it",
                            aria: "discourse link",
                            span: "Learn More"
                            
                        },
                        {
                            title: "Reddit",
                            description: "Ask, Discuss and leave feedbacks about Animeshon's mission and ideals. We hear you!",
                            link: "www.google.it",
                            aria: "Reddit link",
                            span: "Learn More"
                        },
                        {
                            title: "Official Twiter",
                            description: "Don't miss any official update about the project.",
                            link: "www.google.it",
                            aria: "Twiter link",
                            span: "Learn More"
                        }
                    ]
                },
                faq: {
                    headline: 'FAQ',
                    questions: [
                        {
                            question: 'What is Animeshon?',
                            answer: `Animeshon is a platform where users can consume Manga produced by
                            independent Japanese Manga artists. We build a bridge between users in the world
                            and Manga artists in Japan and offer a place where both of them can support each
                            other.`,
                        },
                        {
                            question: 'What are Animeshon\'s ideals?',
                            answer: `We believe in the boundary between people which cry, laugh and love the wonderfull stories of the Anime & Manga culture.
                            We believe in an community where people which share this boundary support and interact with each other, creating new stories.
                            The anime, manga, and light novel communities still have much potential to grow, and we at Animeshon will work as hard as possible to provide the optimal environment for the prosperity of these communities.`,
                        }
                    ]
                },    
                emailResponses: {
                    internalServerError:
                        'An error has occurred trying to process your request. Please refresh the page and try again.',
                    badRequest:
                        'An error has occurred trying to process your request. Please refresh the page and try again.',
                    invalidResource:
                        'The email address you provided is either invalid or suspicious. Please check the email address and try again.',
                    alreadySubscribed:
                        'The email address you provided is already registered.',
                    successfulStatus: `Thank you for registering to Animeshon! You will receive a confirmation email soon.`,
                },
            };
    }
};
