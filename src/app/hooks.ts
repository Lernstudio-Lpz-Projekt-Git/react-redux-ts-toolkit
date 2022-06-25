// Da es sich hierbei um tatsächliche Variablen und nicht um Typen handelt, ist es wichtig, sie in einer 
// separaten Datei wie app/hooks.ts und nicht in der Speicher-Setup-Datei zu konfigurieren werden. Dies ermöglicht 
// es Ihnen, sie in jede Komponentendatei zu importieren, die die Hooks verwenden muss, und vermeidet 
// potenzielle Probleme mit zirkulären Importabhängigkeiten.
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// In der gesamten Applikation anstelle von `useDispatch` und `useSelector` verwenden
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// In einer React-Redux-Anwendung, die Typescript verwendet, beschwert sich Typescript, dass es den Typ 
// des Zustands nicht kennt, wenn es versucht, den globalen Zustand mit dem UseSelector-Hook zu erhalten. 
// Verwenden Sie den benutzerdefinierten useTypedSelector-Hook, um typescript zu unterstützen. 