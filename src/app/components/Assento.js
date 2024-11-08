import React from 'react';
import styles from '../page.module.css';

export default function Assento({ assento, selecionado, onSelect }) {
    return (
        <div
            className={`${styles.assento} ${assento.status === 'indisponivel' ? styles.indisponivel : ''} ${selecionado ? styles.selecionado : ''}`}
            onClick={() => onSelect(assento.numero)}  // Passando o número do assento para a função onSelect
        >
            {/* Aqui você pode adicionar um conteúdo visual, se necessário */}
        </div>
    );
}
