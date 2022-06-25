import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
// Import der Reducer-Funktionen aus der Datei: counterSlice.ts
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount, // inline definierter Selektor
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  // Der useSelector-Hook stellt das Redux-Store-Objekt über die Slice des Counters bereit (Inline)
  const count = useAppSelector(selectCount);
   // Wir rufen useDispatch auf und speichern den Rückgabewert in einer Variablen, dispatch.
   // Dieser Hook gibt einen Referenzpunkt auf die Dispatch-Funktion aus dem Redux-Speicher zurück. 
   // Mit ihm können Sie nach Bedarf Aktionen versenden.
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    // Nachfolgender Code enthält alle Dispatcher, die die oben Importierten Reducer-Funktionen aufrufen
    <div className="countContainer">
      <h3 className="cHeader">Counter unter verschiedenen Bedingungen verändern</h3>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Betrag erhöhen
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Assynchron hinzufügen
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Betrag erhöhen, wenn ungerade
        </button>
      </div>
    </div>
  );
}
