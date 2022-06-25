import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// die Erzeugung des Redux-Store ist in eine seperate Datei ausgelagert --> './app/store'
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

// Der Provider umschließt die App, wodurch die gesamte Anwendung Zugriff auf den Redux-Store hat. 
// Wir verwenden Provider, damit wir den Store als Attribut übergeben können. Dadurch vermeiden wir, 
// dass wir den Store als Props speichern müssen.
// Wenn Sie Ihre Anwendung mit npm start starten und die Redux Dev Tools öffnen, sollten Sie @@INIT sehen. 
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Create React App enthält standardmäßig einen Performance Protokollierung, mit dem Sie die Leistung Ihrer Anwendung 
// anhand verschiedener Metriken messen und analysieren können. Diese Funktion wird ausgelöst, wenn die Berechnung 
// der endgültigen Werte für eine der Messungen auf der Seite abgeschlossen ist. Sie können sie verwenden, um die 
// Ergebnisse auf der Konsole zu protokollieren oder an einen bestimmten Endpunkt zu senden. 
// (z. B. reportWebVitals(console.log)) - Erfahren Sie mehr: https://bit.ly/CRA-vitals
reportWebVitals();
