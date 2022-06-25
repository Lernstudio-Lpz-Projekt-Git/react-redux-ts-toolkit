// Importieren Sie zunächst die createSlice -Methode aus der redux-toolkit-Bibliothek. 
import { createSlice } from "@reduxjs/toolkit";

// Startwerte für die Slice-Componente definieren
const initialStateValue = { name: "", age: 0, email: "" };

// createSlice ist eine 'higher order function', die einen Initialzustand, ein Objekt 
// mit Reducer-Funktionen und einen Slice-Namen akzeptiert. Sie generiert automatisch 
// 'action creators' und 'action types', die den Reducer-Funktionen und dem State entsprechen.
export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});
// createSlice analysiert alle Funktionen, die im Feld reducers definiert sind, und erzeugt 
// für jeden Anwendungsfall einen Action Creator, der den Namen des reducers als Aktionstyp verwendet.
// const { actions, reducer } = userSlice
// Export der Funktionen 
export const { login, logout } = userSlice.actions;
// Export des Slice-Name: user
export default userSlice.reducer;
