//import React from "react";
//import { useSelector } from "react-redux";
import { useAppSelector } from '../app/hooks';

// Der useSelector-Hook stellt uns das Redux-Store-Objekt zur Verfügung.
// useSelector ist eine Funktion, die den aktuellen State als Argument heranzieht
// und beliebige Daten aus dem globalem Store zurückgibt. Diese Funktion ermöglicht es, die
// Rückgabewerte in einer Variablen innerhalb des Bereichs Ihrer funktionalen Komponenten
// zu speichern und zu benutzen, anstatt sie als Properties weiterzugeben.
function Viewer() {
  const user = useAppSelector((state) => state.user.value);
  const themeColor = useAppSelector((state) => state.theme.value);

  console.log("themeColor: ", themeColor.bg);
  return (
    <div className="viewer" style={{ backgroundColor: themeColor.bg, color: themeColor.fc }}>
      <div className="userList">
        <p> Name: {user.name} </p>
        <p> Alter: {user.age}</p>
        <p> Email: {user.email}</p>
      </div>
    </div>
  );
}

export default Viewer;
