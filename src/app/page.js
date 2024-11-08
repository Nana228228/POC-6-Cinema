"use client";

import styles from './page.module.css';
import Assento from './components/Assento';
import BotaoCompra from './components/BotaoCompra';
import ListaDeAssentos from './components/ListaDeAssentos';
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
            .catch(err => {
                console.error("Erro ao buscar dados do filme:", err);
                alert("Erro ao buscar dados do filme. Verifique o console para mais detalhes.");
            });
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
            
            <section className={styles.infoSection}>
                <h2>Sinopse do filme</h2>
                <p>{filme.sinopse}</p>
                <h3>Data de lançamento</h3>
                <p>{filme.dataLancamento}</p>
                <h3>Direção</h3>
                <p>{filme.diretor}</p>
            </section>

            <div className={styles.assentosContainer}>
                <ListaDeAssentos 
                    assentos={filme.assentos}
                    selecionarAssento={selecionarAssento} 
                    selecionados={selecionados} 
                />
            </div>

            <BotaoCompra 
                preco={filme.preco} 
                totalSelecionados={selecionados.length} 
                className={styles.botaoCompra}
            />
        </div>
    );
}


