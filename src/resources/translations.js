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
                    headerTitle: 'Japanese Multimedia Research and Development',
                    headerUnderline: 'everything you ever dreamed for your Anime and Manga experience',
                    headerFormPlaceholder: 'E-mail',
                    headerFormButton: 'Join Now',
                    headerFormDisclaimer: `Get free trial for a month
                                           When we start 5.99€ /month
                                           No credit card required`,
                },
                firstSlide: {
                    headline: 'The project the community needs, the project the community deserves',
                    subslides: [
                        {
                            keywords: ["Discover", "&", "Organize"],
                            description: "Re-organize your collection and discover a world of content you've never seen"
                        },
                        {
                            keywords: ["Develop", "&", "Integrate"],
                            description: "Develop your own idea and expand your horizons through our integrations"
                        },
                    ]
                },
                userSlide: {
                    headline: "The easiest way to search for your favorite content",
                    subline: "Anime, Manga, Doujinshi, Light Novels, Visual Novels, Cosplays and much more...",
                    additional: [
                        {
                            title: "Everything in a single place. ",
                            description: "With Animeshon all information about your favorite multimedia content is centralized an easily available."
                        },
                        {
                            title: "Innovation through research. ",
                            description: "We are pushing this industry beyond its limits through academic research carried out with universities and research institutions."
                        }
                    ]
                },
                devSlide: {
                    headline: "Unleash the potential of your dreams",
                    subline: "Powerful interfaces and SDKs to easily integrate all our services and products",
                    additional: [
                        {
                            title: "Always up-to-date documentation. ",
                            description: "Everything we do is designed for our community, take a look at our documentation and start developing with Animeshon."
                        },
                        {
                            title: "A universal foundation toolset. ",
                            description: "The set of tools provided to developers is in constant evolution to provide better, more usable and more performant services."
                        }
                    ],
                    doc: {
                        link: "https://docs.animeshon.com/",
                        aria: "documentation link",
                        span: "Learn More"
                    }
                },
                contactsSlide: {
                    headline: "Isekai to our world",
                    contacts: [
                        {
                            title: "Discourse",
                            description: "Need technical help? Join our developer community!",
                            link: "https://discuss.animeshon.com/",
                            aria: "discourse link",
                            span: "Learn More"
                            
                        },
                        {
                            title: "Reddit",
                            description: "We want to hear your opinion and feedback!",
                            link: "https://www.reddit.com/r/animeshon/",
                            aria: "Reddit link",
                            span: "Learn More"
                        },
                        {
                            title: "Twitter",
                            description: "Don't miss any official update about Animeshon.",
                            link: "https://twitter.com/AnimeshonSNS",
                            aria: "Twitter link",
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
