import React from 'react';
import styles from '../page.module.css';

export default function BotaoCompra({ preco, totalSelecionados }) {
    const total = preco * totalSelecionados;

    const handleCompra = () => {
        alert("Compra realizada com sucesso!");
    };

    return (
        <button onClick={handleCompra} className={styles.botaoCompra}>
            Comprar R$ {total.toFixed(2)}
        </button>
    );
}