import { useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Translate } from "../../Components/Languages/Translator";
import { UserCreationForm } from "./CreationFunctions";

//Alleen nog niks getranslate, voor backend shit heb je overal de 'sendData' functie nodig

export function UserCreation() {
  const [create, setCreate] = useState<string>("");

  return (
    <body className="usercreation-body h-screen">
      <Navbar />
      <div className="usercreation-container bg-white dark:bg-slate-800 grid place-items-center dark:text-cyan-400">
        <h1 className="text-3xl pb-1 pt-4 border-b border-black dark:border-cyan-600">
          {Translate("Create a user")}
        </h1>
        <div className="grid md:grid-cols-2 place-items-center max-w-[800px] w-[80vw] bg-slate-100 dark:bg-slate-700 my-5 pt-2">
          <UserCreationForm />
        </div>
      </div>
    </body>
  );
}
