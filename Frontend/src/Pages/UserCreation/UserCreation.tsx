import { useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Translate } from "../../Components/Languages/Translator";
import { selectCreate } from "./CreationFunctions";

//Alleen nog niks getranslate, voor backend shit heb je overal de 'sendData' functie nodig

export function UserCreation() {
  const [create, setCreate] = useState<string>("");

  return (
    <body className="usercreation-body h-screen">
      <Navbar />
      <div className="usercreation-container bg-white dark:bg-slate-800 grid place-items-center dark:text-cyan-400">
        <h1 className="text-3xl pb-1 pt-4 border-b border-black dark:border-cyan-600">
          What would you like to create?
        </h1>
        <div className="pt-4">
          <input
            type="radio"
            id="user"
            className="hidden"
            name="create"
          ></input>
          <label
            htmlFor="user"
            className="self-start hover:rounded-2xl transition-all ease-in-out duration-200 rounded-xl bg-vBlue dark:bg-slate-500 md:text-xl text-sm text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600 px-2 pb-1 mx-2"
            onClick={() => {
              setCreate("user");
            }}
          >
            User
          </label>
          <input
            type="radio"
            id="mach"
            className="hidden"
            name="create"
          ></input>
          <label
            htmlFor="mach"
            className="self-start hover:rounded-2xl transition-all ease-in-out duration-200 rounded-xl bg-vBlue dark:bg-slate-500 md:text-xl text-sm text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600 px-2 pb-1 mx-2"
            onClick={() => {
              setCreate("machine");
            }}
          >
            Machine
          </label>
          <input
            type="radio"
            id="comp"
            className="comp hidden"
            name="create"
          ></input>
          <label
            htmlFor="comp"
            className="self-start hover:rounded-2xl transition-all ease-in-out duration-200 rounded-xl bg-vBlue dark:bg-slate-500 md:text-xl text-sm text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600 px-2 pb-1 mx-2"
            onClick={() => {
              setCreate("company");
            }}
          >
            Company
          </label>
        </div>
        <div className="grid md:grid-cols-2 place-items-center max-w-[800px] w-[80vw] bg-slate-100 dark:bg-slate-700 my-5 pt-2">
          <>{selectCreate(create)}</>
        </div>
      </div>
    </body>
  );
}
