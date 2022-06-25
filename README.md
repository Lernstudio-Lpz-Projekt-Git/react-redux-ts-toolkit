# Was ist die Redux-API? 
Redux ist eine JavaScript-Bibliothek, die ein Konzept bereitstellt, durch das es möglich ist, den State einer Applikation zu lesen, zu ändern und abzubilden. Mit Redux wird ein Zustands-Container (Store) erstellt, der den globalen Applikations-Zustand verwaltet (State). Weiterhin hält der Store Methoden bereit, durch die der Zugriff zum State bereitgestellt wird und mit denen Daten im State verändert werden können:

* getState => Daten im State werden gelesen
* dispatch => Daten im State werden verändert
* subscribe => Callback, sobald der State geändert wurde

Letztendlich ist der Redux Store nur ein Objekt mit ein paar Methoden. Und mit dispatch werden weitere Objekte über die Reducer an den Store gegeben (Objekt mit type und payload), durch die im Reducer ein neuer State erstellt wird. Wir schieben also eigentlich nur simple Objekte mit synchronen Funktionen hin und her. Das ist fast alles.

## Redux Toolkit
Vor allem Anfängern empfiehlt sich, die Bibliothek Redux Toolkit zu benutzen, wenn Redux in einer Applikation eingebunden werden soll. Redux Toolkit stellt diverse Funktionen zur Verfügung, die das Schreiben von Actions und Reducer sowie das Erstellen eines Stores vereinfachen. Ohne theoretischen Hintergrund allerdings ist auch Redux Toolkit nicht sofort zugänglich. 
Das Redux Toolkit-Paket wurde ursprünglich erstellt, um drei häufige Bedenken in Bezug auf Redux auszuräumen: 
* Die Konfiguration eines Redux-Speichers ist zu kompliziert.
* Es müssen sehr viele Packages hinzugefügt werden, damit Redux irgendetwas Nützliches tut.
* Redux erfordert zu viel Boilerplate-Code*

## Drei Thesen zu Redux / Redux Toolkit
* Redux ist eine erstklassige Lösung für die gemeinsame Status-Verwaltung.<br>
* Redux ist ein globaler Status, muss aber nicht so verwendet werden.<br>
* Wenn eine Komponente den freigegebenen Status nicht direkt verwendet oder aktualisiert, sollte sie nicht davon abhängig sein. <br>

## State-Management mit Redux & Redux Toolkit für React
Mit React ist es möglich, komplexe Benutzeroberflächen zu erstellen. Je aufwendiger eine Applikation und je mehr Daten gleichzeitig verarbeitet werden, desto anspruchsvoller wird es, die Applikationsdaten zu verwalten und den Überblick über den aktuellen Zustand der Anwendung zu behalten. Wenn man diesen Zustand der Applikation organisiert, spricht man vom State-Management.

Beim Programmieren einer komplexen Applikation stellt sich die Frage: In welchem Zustand oder Status befindet sich jetzt gerade die Applikation, und wie kann man diesen Status abbilden und Änderungen nachvollziehen?

Wenn ein Komponenten-State Daten enthält, die von anderen Komponenten genutzt werden sollen, werden diese über Props an verschachtelte Unterkomponenten weitergegeben. In der Praxis bedeutet dies meist, dass die oberste Komponente innerhalb des Komponentenbaums den Zugriff auf veränderbare Daten im lokalen Komponenten-State hält und die Werte weitergibt. Wenn ein State-Wert durch Unterkomponenten geändert werden kann, gibt die oberste Komponente einen Action-Callback als Prop weiter, und die Unterkomponente kann damit den State der obersten Komponente ändern, die diese Änderungen wiederum zurück an die Unterkomponenten gibt.

Dies ist der übliche Datenfluss von React: Ein Event verändert den Status einer Komponente, die daraufhin den neuen Wert als Props an andere Komponenten weitergibt. Dies ist ein uni-direktionaler Datenaustausch, d.h. die Daten werden nur in eine Richtung weitergegeben. Je komplexer aber die Datenstrukturen werden und je differenzierter das User Interface sein soll, das diese Daten anzeigt, desto aufwendiger wird es, diese Daten durch mehrere Komponentenebenen durchzureichen.

Hier kommt das globale <b>State-Management</b> ins Spiel, das den Zustand bzw. die notwendigen Daten einer Applikation unabhängig vom lokalen State der Komponenten in einer Art Container (Store) hält und den Komponenten zur Verfügung stellt.

<b>Die Daten werden demnach nicht mehr durch einzelne Komponentenebenen durchgereicht, sondern eine tief verschachtelte Komponente kann sich direkt mit dem globalen State verbinden und hat Zugriff auf dessen Daten.</b> Dies vereinfacht nicht nur den Datenfluss, sondern verhilft zu einer weit besseren Übersicht über den aktuellen Zustand der Applikation.

<h3>Diese Projekt möchte die Funktionsweise der React-Redux-Toolkits veranschaulichen.</h3>

# Installation
Der empfohlene Weg, um neue Apps mit React und Redux zu starten, ist die Verwendung des offiziellen Redux+JS-Templates oder Redux+TS-Templates für Create React App, das die Vorteile des Redux Toolkits und der Integration von React Redux mit React-Komponenten nutzt.

## Using Create React App
<b>Redux + Plain JS template</b><br>
``npx create-react-app my-app --template redux``

<b>Redux + TypeScript template</b><br>
``npx create-react-app my-app --template redux-typescript``

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
