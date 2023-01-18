import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Translate } from "../../Components/Languages/Translator";
import { useState } from "react";
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
  const [company, setCompany] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  var currentRole = 0;
  var token = localStorage.getItem("token")
  if (token != null) {
    currentRole = getRole(token);
  }

  const sendData = () =>
    console.log("User created:", name, email, phone, company, role, password);

  return (
    <div className="grid pb-4 dark:text-cyan-400">
      <label htmlFor="name">{Translate("User's Name:")}</label>
      <input
        type="text"
        id="name"
        onChange={(e) => setName(e.target.value)}
        className="dark:bg-slate-500 rounded-sm dark:focus:outline-slate-300 dark:focus:bg-slate-300 px-2 text-black"
      />
      <br />
      <label htmlFor="email">{Translate("User's Email:")}</label>
      <input
        type="text"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        className="dark:bg-slate-500 rounded-sm dark:focus:outline-slate-300 dark:focus:bg-slate-300 px-2 text-black"
      />
      <br />
      <label htmlFor="phone">{Translate("User's Phone Number:")}</label>
      <input
        type="text"
        id="phone"
        onChange={(e) => setPhone(e.target.value)}
        className="dark:bg-slate-500 rounded-sm dark:focus:outline-slate-300 dark:focus:bg-slate-300 px-2 text-black"
      />
      <br />
      <label htmlFor="company">{Translate("User's Company:")}</label>
      <input
        type="text"
        id="company"
        onChange={(e) => setCompany(e.target.value)}
        className="dark:bg-slate-500 rounded-sm dark:focus:outline-slate-300 dark:focus:bg-slate-300 px-2 text-black"
      />
      <br />
      <label htmlFor="role">{Translate("User's Role:")}</label>
      <select id="role" onChange={(e) => setRole(e.target.value)} className="dark:bg-slate-500 rounded-sm dark:focus:outline-slate-300 dark:focus:bg-slate-300 px-2 text-black">
        {currentRole === 1 && (<option value="2">Client</option>)}
        {currentRole === 2 && (<option value="3">Trained user</option>)}
        {currentRole === 2 && (<option value="4">Untrained user</option>)}
        <option value="5">adf</option>
        <option value="6">af</option>
      </select>
      <br />
      <label htmlFor="password">{Translate("User's Password:")}</label>
      <input
        type="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        className="dark:bg-slate-500 rounded-sm dark:focus:outline-slate-300 dark:focus:bg-slate-300 px-2 text-black"
      />
      <div>
        <button
          className="self-start hover:rounded-2xl transition-all ease-in-out duration-200 rounded-xl bg-vBlue dark:bg-slate-500 md:text-xl text-sm text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600 md:w-[100px] w-[20vw] md:h-[4.5vh] h-[4vh] md:mt-8"
          onClick={() => {
            if (
              name === "" ||
              email === "" ||
              phone === "" ||
              company === "" ||
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
  const [company, setCompany] = useState<string>("");

  const sendData = () => console.log("Machine created:", name, type, company);

  return (
    <div className="grid pb-4 dark:text-cyan-400">
      <label htmlFor="name">Machine's Name:</label>
      <input
        type="text"
        id="name"
        onChange={(e) => setName(e.target.value)}
        className="dark:bg-slate-500 rounded-sm dark:focus:outline-slate-300 dark:focus:bg-slate-300 px-2 text-black"
      />
      <br />
      <label htmlFor="type">Machine's Type:</label>
      <input
        type="text"
        id="type"
        onChange={(e) => setType(e.target.value)}
        className="dark:bg-slate-500 rounded-sm dark:focus:outline-slate-300 dark:focus:bg-slate-300 px-2 text-black"
      />
      <br />
      <label htmlFor="company">Machine's Company:</label>
      <input
        type="text"
        id="company"
        onChange={(e) => setCompany(e.target.value)}
        className="dark:bg-slate-500 rounded-sm dark:focus:outline-slate-300 dark:focus:bg-slate-300 px-2 text-black"
      />
      <div>
        <button
          className="self-start hover:rounded-2xl transition-all ease-in-out duration-200 rounded-xl bg-vBlue dark:bg-slate-500 md:text-xl text-sm text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600 md:w-[100px] w-[20vw] md:h-[4.5vh] h-[4vh] md:mt-8"
          onClick={() => {
            if (name === "" || type === "" || company === "") {
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
        className="dark:bg-slate-500 rounded-sm dark:focus:outline-slate-300 dark:focus:bg-slate-300 px-2 text-black"
      />
      <br />
      <label htmlFor="address">Company's Address:</label>
      <input
        type="text"
        id="address"
        onChange={(e) => setAddress(e.target.value)}
        className="dark:bg-slate-500 rounded-sm dark:focus:outline-slate-300 dark:focus:bg-slate-300 px-2 text-black"
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
