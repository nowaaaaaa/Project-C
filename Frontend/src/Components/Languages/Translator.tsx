import React, {useState} from 'react';
import langPack from './Languagepacks.json';

interface IDictionary {
    [index:string]: string;
}
let lang_nl: IDictionary = langPack.nl;

export function Translate(str: string) {
    if (localStorage.lang === "nl" && lang_nl[str] !== undefined) return lang_nl[str];
    return str;
}
