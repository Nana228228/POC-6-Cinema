import React from 'react';
import styles from '../page.module.css';
import Assento from './Assento';

export default function ListaDeAssentos({ assentos, selecionarAssento, selecionados }) {
    return (
      <div className={styles.assentosContainer}>
        <div className={styles.grid}>
          {assentos.map((assento) => (
            <Assento 
              key={assento.numero} 
              assento={assento} 
              onSelect={selecionarAssento} 
              selecionado={selecionados.includes(assento.numero)} 
            />
          ))}
        </div>
        <div className={styles.legenda}>
          <span className={styles.livre}>● livre</span>
          <span className={styles.selecionado}>● selecionado</span>
          <span className={styles.indisponivel}>● indisponível</span>
        </div>
      </div>
    );
}