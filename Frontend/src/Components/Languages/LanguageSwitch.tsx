export function LanguageSwitch() {
  const toggleLanguage = (str: string) => {
    localStorage.lang = str;
    window.location.reload()
  }
  return (
    <>
      <div className="relative group">
      <button className="text-cyan-800 dark:text-cyan-400 flex flex-row items-center px-4 py-4 mt-2 font-bold text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 md:text-[18px] text-2xl">
          <span>{localStorage.lang}</span>
      </button>
      <div className="absolute hidden group-hover:block">
          <div className="p-2 rounded-xl bg-slate-200 dark:bg-slate-500 shadow-lg dark:text-gray-100">
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <li>
              <button className='' onClick={() => toggleLanguage("en")}>EN</button>
              </li>
              <li>
              <button className='' onClick={() => toggleLanguage("nl")}>NL</button>
              </li>
            </ul>
          </div>
      </div>
  </div>  
    </>
  );
}