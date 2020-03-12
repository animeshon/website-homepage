const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g; // eslint-disable-line
export const validate = (string, lang) => {
    if (!emailRegex.test(string)) {
        switch (lang) {
            case 'en':
                return 'Please provide a valid email address.';
            case 'jp':
                return 'Some japanese error.';
            case 'it':
                return 'Inserisci una email valida.';
            case 'de':
                return 'Some german shit.';
            case 'es':
                return 'Some spanish things.';
            default:
                return 'Please provide a valid email address.';
        }
    }
};

export const checkValidity = string => {
    const condition = string.match(emailRegex);
    return condition !== null;
};
