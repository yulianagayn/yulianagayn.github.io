export default class Lang {

    constructor() {
        this.detected = (navigator.language || navigator.userLanguage).split('-')[0];
        this.current = '';
        this.dictionary = Lang.load(this.current || this.detected);
    }

    translate(key) {
        return _.get(this.dictionary, key, '#fix this#');
    }

    static load(lang, stop) {
        let dictionary = null;
        $.ajax({
            url: '/lang/' + lang + '.json',
            dataType: 'json',
            async: false,
            success: function (data) {
                dictionary = data;
            },
            error: function () {
            }
        });
        return (dictionary == null && !stop) ? Lang.load('en') : dictionary;
    }
}