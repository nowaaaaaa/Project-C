import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Translate } from "../../Components/Languages/Translator";
import { useState, useEffect } from "react";
import { getRole } from '../../Pages/Login/AccountManager';

const MySwal = withReactContent(Swal);

export function popUp() {
  var color = "";
  var buttonText = Translate("Continue");
  if (localStorage.theme === "light") {
    color = "#FFFFFF";
  } else {
    color = "#1e293b";
  }
  MySwal.fire({
    title: <p className="dark:text-cyan-400">{Translate("Input left empty")}</p>,
    icon: "warning",
    confirmButtonText: buttonText,
    confirmButtonColor: "#2F80ED",
    background: color,
    width: "400px",
    padding: "3em",
  });
}

export function successPopup(text: string) {
  var color = "";
  if (localStorage.theme === "light") {
    color = "#FFFFFF";
  } else {
    color = "#1e293b";
  }
  MySwal.fire({
    title: (
      <p className="dark:text-cyan-400">
        {Translate("Succesfully created ")} {text}
      </p>
    ),
    icon: "success",
    showConfirmButton: false,
    background: color,
    timer: 1100,
  });
}

export function UserCreationForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [companyId, setCompanyId] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {setRole("2")}, [])

  var currentRole = 0;
  var token = localStorage.getItem("token")
  if (token != null) {
    currentRole = getRole(token);
  }

  const sendData = () =>
    console.log("User created:", name, email, phone, companyId, role, password);

  return (
    <div className="grid pb-4 dark:text-cyan-400 text-cyan-800">
      <label htmlFor="name">{Translate("User's Name:")}</label>
      <input
        type="text"
        id="name"
        onChange={(e) => setName(e.target.value)}  // py-1 px-1.5 md:mb-3 focus:border-vBlue border-slate-300 border
        className="bg-slate-200 dark:bg-slate-600 dark:text-slate-300 rounded-sm dark:focus:border-slate-400 dark:border-slate-500 border-slate-300 focus:border-slate-400 border outline-none px-2"
      />
      <br />
      <label htmlFor="email">{Translate("User's Email:")}</label>
      <input
        type="text"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        className="bg-slate-200 dark:bg-slate-600 dark:text-slate-300 rounded-sm dark:focus:border-slate-400 dark:border-slate-500 border-slate-300 focus:border-slate-400 border outline-none px-2"
      />
      <br />
      <label htmlFor="phone">{Translate("User's Phone Number:")}</label>
      <input
        type="text"
        id="phone"
        onChange={(e) => setPhone(e.target.value)}
        className="bg-slate-200 dark:bg-slate-600 dark:text-slate-300 rounded-sm dark:focus:border-slate-400 dark:border-slate-500 border-slate-300 focus:border-slate-400 border outline-none px-2"
      />
      <br />
      <label htmlFor="company">{Translate("User's Company Id:")}</label>
      <input
        type="text"
        id="company"
        onChange={(e) => setCompanyId(e.target.value)}
        className="bg-slate-200 dark:bg-slate-600 dark:text-slate-300 rounded-sm dark:focus:border-slate-400 dark:border-slate-500 border-slate-300 focus:border-slate-400 border outline-none px-2"
      />
      <br />
      <label htmlFor="role">{Translate("User's Role:")}</label>
      <select id="role" onChange={(e) => setRole(e.target.value)} className="bg-slate-200 dark:bg-slate-600 dark:text-slate-300 rounded-sm dark:focus:border-slate-400 dark:border-slate-500 border-slate-300 focus:border-slate-400 border outline-none px-2">
        {currentRole <= 1 && (<option value="2">Client</option>)}
        {currentRole <= 2 && (<option value="3">Trained user</option>)}
        {currentRole <= 2 && (<option value="4">Untrained user</option>)}
      </select>
      <br />
      <label htmlFor="password">{Translate("User's Password:")}</label>
      <input
        type="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        className="bg-slate-200 dark:bg-slate-600 dark:text-slate-300 rounded-sm dark:focus:border-slate-400 dark:border-slate-500 border-slate-300 focus:border-slate-400 border outline-none px-2"
      />
      <div>
        <button
          className="self-start hover:rounded-2xl transition-all ease-in-out duration-200 rounded-xl bg-vBlue dark:bg-slate-500 md:text-xl text-sm text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600 md:px-1.5 p-1 md:w-[110px] w-[20vw] mt-5"
          onClick={() => {
            if (
              name === "" ||
              email === "" ||
              phone === "" ||
              companyId === "" ||
              role === "" ||
              password === ""
            ) {
              popUp();
            } else {
              sendData();
              var msg = "'" + name + "'"
              successPopup(msg);
            }
          }}
        >
          {Translate("Create")}
        </button>
      </div>
    </div>
  );
}

export function MachineCreationForm() {
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [companyId, setCompanyId] = useState<string>("");

  const sendData = () => console.log("Machine created:", name, type, companyId);

  return (
    <div className="grid pb-4 dark:text-cyan-400">
      <label htmlFor="name">Machine's Name:</label>
      <input
        type="text"
        id="name"
        onChange={(e) => setName(e.target.value)}
        className="bg-slate-200 dark:bg-slate-600 dark:text-slate-300 rounded-sm dark:focus:border-slate-400 dark:border-slate-500 border-slate-300 focus:border-slate-400 border outline-none px-2"
      />
      <br />
      <label htmlFor="type">Machine's Type:</label>
      <input
        type="text"
        id="type"
        onChange={(e) => setType(e.target.value)}
        className="bg-slate-200 dark:bg-slate-600 dark:text-slate-300 rounded-sm dark:focus:border-slate-400 dark:border-slate-500 border-slate-300 focus:border-slate-400 border outline-none px-2"
      />
      <br />
      <label htmlFor="company">Machine's Company:</label>
      <input
        type="text"
        id="company"
        onChange={(e) => setCompanyId(e.target.value)}
        className="bg-slate-200 dark:bg-slate-600 dark:text-slate-300 rounded-sm dark:focus:border-slate-400 dark:border-slate-500 border-slate-300 focus:border-slate-400 border outline-none px-2"
      />
      <div>
        <button
          className="self-start hover:rounded-2xl transition-all ease-in-out duration-200 rounded-xl bg-vBlue dark:bg-slate-500 md:text-xl text-sm text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600 md:w-[100px] w-[20vw] md:h-[4.5vh] h-[4vh] md:mt-8"
          onClick={() => {
            if (name === "" || type === "" || companyId === "") {
              popUp();
            } else {
              sendData();
              var msg = "'" + name + "'"
              successPopup(msg);
            }
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export function CompanyCreationForm() {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const sendData = () => console.log("Company created:", name, address);

  return (
    <div className="grid pb-4 dark:text-cyan-400">
      <label htmlFor="name">Company's Name:</label>
      <input
        type="text"
        id="name"
        onChange={(e) => setName(e.target.value)}
        className="bg-slate-200 dark:bg-slate-600 dark:text-slate-300 rounded-sm dark:focus:border-slate-400 dark:border-slate-500 border-slate-300 focus:border-slate-400 border outline-none px-2"
      />
      <br />
      <label htmlFor="address">Company's Address:</label>
      <input
        type="text"
        id="address"
        onChange={(e) => setAddress(e.target.value)}
        className="bg-slate-200 dark:bg-slate-600 dark:text-slate-300 rounded-sm dark:focus:border-slate-400 dark:border-slate-500 border-slate-300 focus:border-slate-400 border outline-none px-2"
      />
      <div>
        <button
          className="self-start hover:rounded-2xl transition-all ease-in-out duration-200 rounded-xl bg-vBlue dark:bg-slate-500 md:text-xl text-sm text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600 md:w-[100px] w-[20vw] md:h-[4.5vh] h-[4vh] md:mt-8"
          onClick={() => {
            if (name === "" || address === "") {
              popUp();
            } else {
              sendData();
              var msg = "'" + name + "'"
              successPopup(msg);
            }
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export function selectCreate(creation: string) {
  switch (creation) {
    case "user":
      return <UserCreationForm />;
    case "machine":
      return <MachineCreationForm />;
    case "company":
      return <CompanyCreationForm />;
    default:
      return <p>Select something to create</p>;
  }
}
