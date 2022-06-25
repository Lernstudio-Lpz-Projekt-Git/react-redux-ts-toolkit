import { createSlice } from "@reduxjs/toolkit";
// Startwerte für die Slice-Componente definieren
const initialStateValue = {bg:"#074f8a", fc:"#f1f1f1"};

// createSlice ist eine 'higher order function', die einen Initialzustand, ein Objekt 
// mit Reducer-Funktionen und einen Slice-Namen akzeptiert. Sie generiert automatisch 
// 'action creators' und 'action types', die den Reducer-Funktionen und dem State entsprechen.
export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialStateValue },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});
// createSlice analysiert alle Funktionen, die im Feld reducers definiert sind, und erzeugt 
// für jeden Anwendungsfall einen Action Creator, der den Namen des reducers als Aktionstyp verwendet.
// const { actions, reducer } = themeSlice
// Export der Funktionen 
export const { changeColor } = themeSlice.actions;
// Export des Slice-Name: theme
export default themeSlice.reducer;
