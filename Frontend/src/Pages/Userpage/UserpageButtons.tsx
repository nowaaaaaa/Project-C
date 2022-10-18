import React from 'react';

export function UserpageButtons() {
  const root = document.getElementsByTagName("html")[0];
  const user = "Client";
  const toggleMode = () => {
    if (localStorage.theme === "light") {
      root.setAttribute("class", "dark");
      localStorage.theme = "dark";
    }
    else {
      root.removeAttribute("class");
      localStorage.theme = "light";
    }
  }

  return (
    <>
      <div className="userpageButtons bg-white dark:bg-slate-900">
      {user}
      </div>
    </>
  );
}