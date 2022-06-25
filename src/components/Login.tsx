import React from "react";
//import { useDispatch } from "react-redux";
import { useAppDispatch } from "../app/hooks"; // siehe '../app/hooks' & '../app/store'
// Import der Reducer-Funktionen
import { login, logout } from "../features/user";

function Login() {
  // Beispiel-Werte die beim Funktions-Dispatch-Aufruf den State ändern
  const loginValue = {
    name: "Maxi Musterfrau",
    age: 20,
    email: "maximo@gmail.com",
  };
  // Wir rufen useDispatch auf und speichern den Rückgabewert in einer Variablen, dispatch.
  // Dieser Hook gibt einen Referenzpunkt auf die Dispatch-Funktion aus dem Redux-Speicher zurück.
  // Mit ihm können Sie nach Bedarf Aktionen versenden.
  const dispatch = useAppDispatch();

  return (
    <div className="loginBtn">
      <button
        className="btnlogin"
        onClick={() => {
          dispatch(login(loginValue));
        }}
      >
        Login
      </button>

      <button
        className="btnlogout"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Login;
