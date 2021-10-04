var lang_en = false;
 //eslint-disable-next-line
var currentSite = window.location.pathname;

function getCurrentSite(){
    return currentSite = window.location.pathname;
}

function changeLanguage(change){
    if(change === true){
        if(lang_en ? lang_en = false : lang_en = true);
        getCurrentSite();
    }

    return lang_en;
};

export default (getCurrentSite, changeLanguage);