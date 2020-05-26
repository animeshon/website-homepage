export const stringsLang = lang => {
    switch (lang) {
        // ------------------------
        // ------------------------
        // JAPANESE
        // ------------------------
        // ------------------------
        case 'ja':
            return {
                header: {
                    headerTitle: '世界初イタリアデザインの漫画プラットフォーム',
                    headerUnderline:
                        '日本語や英語はもちろんその他の言語でも漫画をお読みいただけます。',
                    headerFormPlaceholder: 'Eメール',
                    headerFormButton: '登録',
                    headerFormDisclaimer: `1ヶ月間無料お試し。
                    期間終了後は月5.99€。
                    クレジットカード登録不要。`,
                },
                firstFeature: {
                    headline:
                        'イタリアのIT企業が開発した最新のデジタル漫画技術',
                    featureOne: 'フェアトレード漫画',
                    featureTwo: 'スマートリーディング',
                    featureThree: '多彩なオリジナル漫画',
                    featureFour: '漫画家を直接応援可能',
                    featureFive: '毎週新作品をお届け',
                    featureSix: '広告なし',
                    featureSeven: '各言語対応',
                    priceFeature: 'たった5.99€/月で漫画読み放題',
                    imageOneAltText:
                        'Animeshon.comのアプリを表示しているiPhone',
                },
                secondFeature: {
                    headline: 'スマホ、タブレット、パソコンでご利用可能',
                    featureDeviceMobile: 'スマートフォン',
                    featureDeviceTablet: 'タブレット',
                    featureDeviceComputer: 'パソコン',
                    googlePlayAltText: 'Google Play',
                    appStoreAltText: 'Apple App Store',
                    chromeAltText: 'Google Chrome ウェブブラウザ',
                    firefoxAltText: 'Mozilla Firefox ブラウザ',
                    edgeAltText: 'Microsoft Edge ブラウザ',
                    safariAltText: 'Apple Safari ブラウザ',
                },
                trialFeature: {
                    headline: '無料登録で新しい漫画をお読みいただけます。',
                    paragraph: '今までにない漫画の体験をしましょう！',
                    trialFormPlaceholder: 'Eメール',
                    trialFormButton: '登録',
                },
                faq: {
                    headline: 'FAQ',
                    questionOne: 'Animeshonはどんなサービスですか？',
                    responseOne: `Animeshonは世界中のお客様と日本の漫画家の架け橋をし、お互いに支え合える場を提供します。プラットフォームでは漫画を各言語でお読みいただくことができます。`,
                    questionTwo: '利用料はいくらですか？',
                    responseTwo: `月額5.99€で、漫画読み放題です。全ての収入は漫画家とシェアし、今後の活動に役立てていただきます。`,
                    questionThree: 'フェアトレード漫画とは何ですか？',
                    responseThree: `フェアトレード漫画とは、適切な労働条件、
                                    フェアな利益配分、持続可能性をもとに作られた漫画で、
                                    漫画家の生活水準向上を目指します。
                                    多くの漫画家は厳しい経済状況及び労働状況で、
                                    漫画を制作しており、継続が難しくなる場合がほとんどです。
                                    また、海外では、言語の壁のため、漫画の流通が非常に限られており、
                                    海賊版が横行しています。このままでは、
                                    海賊版サイトに日本の漫画産業が潰されてしまいます。
                                    そこで、Animeshonはフェアトレード漫画を推進しています。`,
                    questionFour: '',
                    responseFour: ``,
                },
                emailResponses: {
                    internalServerError:
                        'JP-An error has occurred trying to process your request. Please refresh the page and try again.',
                    badRequest:
                        'JP-An error has occurred trying to process your request. Please refresh the page and try again.',
                    originNotAllowed:
                        'JP-An error has occurred trying to process your request. Please refresh the page and try again.',
                    invalidRequestAudience:
                        'JP-An error has occurred trying to process your request. Please refresh the page and try again.',
                    invalidResource:
                        'JP-The email address you provided is either invalid or suspicious. Please check the email address and try again.',
                    successfulStatus:
                        'JP-Thank for registering to Animeshon! You will receive a confirmation email soon.',
                },
            };
        // ------------------------
        // ------------------------
        // ENGLISH
        // ------------------------
        // ------------------------
        default:
            return {
                header: {
                    headerTitle: 'Experience new Manga from Japan',
                    headerUnderline: 'Read and watch anywhere in any language',
                    headerFormPlaceholder: 'E-mail',
                    headerFormButton: 'Join Now',
                    headerFormDisclaimer: `Get free trial for a month
                                           When we start 5.99€ /month
                                           No credit card required`,
                },
                firstFeature: {
                    headline: 'Better Manga Experience',
                    featureOne: 'Fair-trade Manga',
                    featureTwo: 'Smart reading',
                    featureThree: 'Variety of original Manga',
                    featureFour: 'Support Manga artists directly',
                    featureFive: 'New chapters every week',
                    featureSix: 'No more aggressive ads',
                    featureSeven: 'No more bad translations',
                    priceFeature:
                        'Only 5.99€/month for unlimited Manga entertainment',
                    imageOneAltText: 'iPhones displaying the Animeshon.com app',
                },
                secondFeature: {
                    headline: 'Connect to your devices!',
                    featureDeviceMobile: 'Mobile',
                    featureDeviceTablet: 'Tablet',
                    featureDeviceComputer: 'Computer',
                    googlePlayAltText: 'Google Play',
                    appStoreAltText: 'Apple App Store',
                    chromeAltText: 'Google Chrome Browser',
                    firefoxAltText: 'Mozilla Firefox Browser',
                    edgeAltText: 'Microsoft Edge Browser',
                    safariAltText: 'Apple Safari Browser',
                },
                trialFeature: {
                    headline: 'Subscribe now and read new Manga',
                    paragraph: 'Discover Manga you have never read before.',
                    trialFormPlaceholder: 'E-mail',
                    trialFormButton: 'Join Now',
                },
                faq: {
                    headline: 'FAQ',
                    questionOne: 'What is Animeshon?',
                    responseOne: `Animsheon is a platform where users can consume Manga produced by
                                  independent Japanese Manga artists. We build a bridge between users in the world
                                  and Manga artists in Japan and offer a place where both of them can support each
                                  other.`,
                    questionTwo: 'How much does Animeshon cost?',
                    responseTwo: `We offer a 5.99€/month plan for unlimited access to all content.
                                  All revenues are shared with Manga artists, giving them the possibility to
                                  continue and improve their production. `,
                    questionThree: 'What is fair-trade Manga?',
                    responseThree: `There are a lot of illegal platforms where you can read Manga for free,
                                  but using those platforms wouldn’t support artists and could even destroy 
                                  the Manga industry. Moreover, the average income of Manga artists is very low, 
                                  and often that makes it difficult to continue producing Manga. Therefore, 
                                  we provide fairtrade Manga. Fairtrade Manga is Manga made under fair 
                                  distribution terms, decent working conditions, fair revenue share, and 
                                  sustainability, enabling Manga artists to improve their life.`,
                    questionFour: '',
                    responseFour: ``,
                },
                emailResponses: {
                    internalServerError:
                        'An error has occurred trying to process your request. Please refresh the page and try again.',
                    badRequest:
                        'An error has occurred trying to process your request. Please refresh the page and try again.',
                    originNotAllowed:
                        'An error has occurred trying to process your request. Please refresh the page and try again.',
                    invalidRequestAudience:
                        'An error has occurred trying to process your request. Please refresh the page and try again.',
                    invalidResource:
                        'The email address you provided is either invalid or suspicious. Please check the email address and try again.',
                    successfulStatus:
                        'Thank for registering to Animeshon! You will receive a confirmation email soon.',
                },
            };
    }
};
