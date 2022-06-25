import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// Das Wort "Thunk" ist ein Begriff aus der Informatik und bedeutet "ein Stück Code, das eine bestimmte Arbeit 
// zeitversetzt ausführt". Anstatt eine Logik jetzt auszuführen, können wir einen Funktionskörper 
// oder Code schreiben, der später für die Ausführung der Arbeit verwendet werden kann.
// https://redux.js.org/usage/writing-logic-thunks
import { RootState, AppThunk } from '../../app/store';
import { fetchCount } from './counterAPI';

// Typisierung des States
export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}
// Initalisierung des States
const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

// Die folgende Funktion wird als Thunk bezeichnet und ermöglicht die Ausführung asynchroner Logik. 
// Sie kann wie eine herkömmliche Aktion ausgeführt werden: "dispatch(incrementAsync(10))". Dadurch wird der 
// Thunk mit der Funktion "Dispatch" als erstes Argument aufgerufen. Asynchroner Code kann anschließend 
// ausgeführt werden und andere Aktionen können abgearbeitet werden. Thunks werden typischerweise verwendet, 
// um asynchrone Anfragen zu stellen.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    // Der zurückgegebene Wert ist die Payload der Aktion "Fulfilled".
    return response.data;
  }
);

// createSlice ist eine 'higher order function', die einen Initialzustand, ein Objekt 
// mit Reducer-Funktionen und einen Slice-Namen akzeptiert. Sie generiert automatisch 
// 'action creators' und 'action types', die den Reducer-Funktionen und dem State entsprechen.
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // Die Property "reducer" erlaubt es, rducer-Funktionen zu definieren und damit verbundene Aktionen zu erzeugen.
  reducers: {
    increment: (state) => {
      // Das Redux-Toolkit ermöglicht es, "mutierende" Logik in Reducern zu schreiben. 
      // Standardmäßig wird der State nicht wirklich verändert, (hier ist es eher eine Ausnahme, da der State neu berechnet wird)
      // Die 'action' erkennt die Änderungen an einem "Entwurfszustand" und erzeugt 
      // auf der Grundlage dieser Änderungen einen neuen unveränderlichen Zustand
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Verwendet den Typ 'PayloadAction', um den Inhalt von "action.payload" zu typisieren. 
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  // Die Property `extraReducers` ermöglicht dem Slice, anderweitig definierte Aktionen zu verwalten, 
  // einschließlich der Aktionen, die von createAsyncThunk oder in anderen Slices erzeugt werden.
  // extraReduzierer ermöglicht es createSlice, auf andere Aktionstypen als die von ihm generierten Typen zu reagieren.
  // Wie bei reducers werden auch diese case reducers an createReducer übergeben und können ihren States "verändern".
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      // Man kann Aufrufe verketten oder jedes Mal eine eigene Zeile "builder.addCase()" verwenden.
      // Hier werden die Aufrufe verkettet:
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Die nachstehende Funktion wird als Selektor bezeichnet und ermöglicht es dem Programm, einen Wert aus dem Status zu selektieren. 
// Selektoren können auch inline definiert werden, wo sie dann anstelle von der in der Slice-Datei erzeugten Selektor verwendeten  werden. 
// Siehe in Datei --> Counter.ts - Zum Beispiel: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value;
// Die Verwendung von configureStore sollte keine zusätzlichen Typisierungen erfordern. Sie werden jedoch den 
// RootState-Typ und/oder den Dispatch-Typ extrahieren wollen, damit sie bei Bedarf referenziert werden können. 
// Die Ableitung dieser Typen aus dem Store selbst bedeutet, dass sie korrekt aktualisiert werden, wenn Sie 
// weitere State Slices hinzufügen oder Middleware-Einstellungen ändern.

// Man kann auch Thunks von Hand schreiben, die sowohl synchrone als auch asynchrone Logik enthalten können. 
// Hier ist ein Beispiel für die bedingte Auslösung von Aktionen auf der Grundlage des aktuellen Zustands.
export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };

export default counterSlice.reducer;
