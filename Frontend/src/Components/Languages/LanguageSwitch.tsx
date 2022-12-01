import React, {useState} from 'react';
//Component
export function LanguageSwitch() {
  const root = document.getElementsByTagName("html")[0];

  const toggleLanguage = (str: string) => {
    localStorage.lang = str;
    window.location.reload()
  }
  
  return (
    <>
      {/*<button className='h-12 w-12 text-white dark:text-black' onClick={toggleLanguage}>
        {localStorage.lang}
  </button>*/}
      <div className="relative group">
      <button className="text-cyan-800 dark:text-cyan-400 flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
          <span>{localStorage.lang}</span>
      </button>
      <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
          
          <div className="px-2 pt-2 pb-4 bg-slate-200 dark:bg-slate-600 shadow-lg">
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <li>
              <button className='' onClick={() => toggleLanguage("en")}>EN</button>
              </li>
              <li>
              <button className='' onClick={() => toggleLanguage("nl")}>NL</button>
              </li>
              <li>
              <button className='' onClick={() => toggleLanguage("pl")}>PL</button>
              </li>
              <li>
              <button className='' onClick={() => toggleLanguage("de")}>DE</button>
              </li>
              <li>
              <button className='' onClick={() => toggleLanguage("cn")}>CN</button>
              </li>
            </ul>
          </div>
      </div>
  </div>  
    </>
  );
}