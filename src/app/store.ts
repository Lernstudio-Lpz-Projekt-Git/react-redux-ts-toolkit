import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// die Alias-Namen für den Reducer sind frei wählbar
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user';
import themeReducer from '../features/theme';

// Erzeugen Sie einen Redux-Speicher mit configureStore():
// Um Redux zu konfigurieren wird die createStore-Methode verwendet. Diese Funktion erwartet
// als Argumente eine reducer-Funktion, einen optionalen initialen State und 
// eine ebenfalls optionale Menge von Enhancer-Funktionen. 
// reducer: Es wird ein Objekt übergeben, das aus verschiedenen Keys mit Reducer-Funktionen 
// als Values besteht. Aus diesen einzelnen Reducerfunktionen wird anschließend automatisch 
// der Root-Reducer gebildet. Intern nutzt das Redux Toolkit hierzu die combineReducers-Funktion.
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    theme: themeReducer,
  },
});

// Typisierungen die insbesondere mit TypeScript hilfreich sind
// Ableitung der Typen `RootState` und `AppDispatch` aus dem Store selbst
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// Für useDispatch kennt der Standard-Dispatch-Typ keine Thunks oder andere Middleware. Um Thunks korrekt 
// zu versenden, müssen Sie den spezifischen angepassten AppDispatch-Typ aus dem Store verwenden, 
// der die Thunk-Middleware-Typen enthält, und diesen mit useDispatch verwenden. Das Hinzufügen eines 
// vorgefertigten useDispatch-Hook verhindert, dass Sie vergessen, AppDispatch dort zu importieren, wo es benötigt wird.
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
