import React, {useState} from 'react';
//Component
export function LanguageSwitch() {
  const root = document.getElementsByTagName("html")[0];

  const toggleLanguage = () => {
    if (localStorage.lang === "en") {
      localStorage.lang = "pl";
    }
    else {
      localStorage.lang = "en";
    }
    window.location.reload()
  }
  
  return (
      <button className='h-12 w-12 text-white dark:text-black' onClick={toggleLanguage}>
        {localStorage.lang}
      </button>
  );
}