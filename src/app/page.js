"use client";
import styles from './page.module.css';
import Assento from './components/Assento';
import BotaoCompra from './components/BotaoCompra';
import ListaDeAssentos from './components/ListaDeAssentos';
import Status from './components/Status'; // Importe o componente Status
import { useState, useEffect } from 'react';

export default function CinemaPage() {
  const [filme, setFilme] = useState(null);
  const [selecionados, setSelecionados] = useState([]);

  useEffect(() => {
    fetch('/api/filme')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro na resposta da API: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => setFilme(data))
  }, []);

  const selecionarAssento = (numero) => {
    if (!selecionados.includes(numero)) {
      setSelecionados([...selecionados, numero]);
    } else {
      setSelecionados(selecionados.filter(n => n !== numero));
    }
  };

  if (!filme) return <p>Carregando...</p>;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{filme.titulo}</h1>
        <h2 className={styles.subtitle}>{filme.horario}</h2>
      </header>

      <article className={styles.article}>
        <div className={styles.assentosContainer}>
          <ListaDeAssentos 
            assentos={filme.assentos}
            selecionarAssento={selecionarAssento} 
            selecionados={selecionados} 
          />
          <div className={styles.tela}>Tela</div>
          <Status />
        </div>
        <section className={styles.infoSection}>
          <h4>Sinopse do filme</h4>
          <p>{filme.sinopse}</p>
          <h4>Data de lançamento</h4>
          <p>{filme.dataLancamento}</p>
          <h4>Direção</h4>
          <p>{filme.direcao}</p>
        </section>
      </article>
      <BotaoCompra 
        preco={filme.preco} 
        totalSelecionados={selecionados.length} 
      />
    </div>
  );
}
