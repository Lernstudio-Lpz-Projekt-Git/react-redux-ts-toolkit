import React, { useState } from "react";
//import { useDispatch } from "react-redux";
import { useAppDispatch } from '../app/hooks';
// Import der reducer-Action
import { changeColor } from "../features/theme";

function ChangeColor() {
  const [color, setColor] = useState({});
// Wir rufen useDispatch auf und speichern es in die Variable, dispatch. 
  const dispatch = useAppDispatch();

 // Dieser Hook gibt einen Verweis auf die Dispatch-Funktion aus dem Redux-Store zurück. 
 // Sie können damit Aktionen nach Bedarf versenden bzw. auslösen. Hier versenden wir die Aktion 
 // changeColor(), indem wir dispatch aufrufen und den Rückgabewert des Actionscreators übergeben.
  return (
    <div className="changeColor">
      <div className="btn-artice">
      <label htmlFor="fc">Schriftfarbe</label>
      <input
        type="text"
        id="fc" 
        name="fc"
        onChange={(event) => {
          setColor(color => ({...color, fc:event.target.value}));
        }}
      />
      </div>
      <div className="btn-artice">
      <label htmlFor="bg">Hintergrund</label>
       <input
        type="text"
        id="bg" 
        name="bg"
        onChange={(event) => {
          setColor(color => ({...color, bg:event.target.value}));
        }}
      />
      </div>
      <button className="btncolor"
        onClick={() => {
          console.log("color: ", color);
          dispatch(changeColor(color));
        }}
      >
        Change Color
      </button>
    </div>
  );
}

export default ChangeColor;
