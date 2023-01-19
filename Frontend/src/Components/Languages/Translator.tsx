import langPack from './Languagepacks.json';

interface Dictionary {
    [index:string]: string;
}
interface LanguageMap {
    [index:string]: Dictionary;
}

var names = Object.getOwnPropertyNames(langPack);
var values = Object.values(langPack);
let langMap:LanguageMap = {};
for (let i = 0; i < names.length; i++) {    
    langMap[names[i]] = values[i];
}
export function Translate(str: string) {
    let res: string = str;
    if (names.find(el => el === localStorage.lang) !== undefined) {
        res = langMap[localStorage.lang][str];
        if (res === undefined) return str;
    }
    return res;
}
