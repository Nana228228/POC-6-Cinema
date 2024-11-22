import React from 'react';
import styles from '../page.module.css';

export default function Assento({ assento, selecionado, onSelect }) {
    return (
        <div
            className={`${styles.assento} ${!assento.disponivel ? styles.indisponivel : ''} ${selecionado ? styles.selecionado : ''}`}
            onClick={() => assento.disponivel && onSelect(assento.numero)} // Apenas selecionável se disponível
        >
            {/* Conteúdo opcional, ex.: número do assento */}
        </div>
    );
}