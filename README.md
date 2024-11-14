# POC 5: React com Next.js

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

   * [Introdução](#introducao)
   * [Estrutura](#estrutura)
   * [Componentes](#componentes)
      - [Assento.js](#)
      - [BotaoCompra.js](#)
      - [ListaDeAssetos.js](#)
   * [Page.js](#page)
   * [Estilos ](#styles)
   * [Layout](#layout)
   * [Autores](#autores)


<h2 id="introducao">Introdução</h2>

<h2 id="comecando">Começando o projeto</h2>

Para criar um projeto usando o framework Next.js, digite no terminal: 
```bash
nmx create-next-app@latest nome-do-projeto
```

Para entrar no diretório do projeto e iniciar o servidor de desenvolvimento, digite:

```bash
cd nome-do-projeto
npm run dev
```

<h2 id="estrutura">Estrutura</h2>

<pre>
Estrutura inicial
└── app
    ├── api
    │   └── filme
    │       └── route.js
    ├── components
    │   ├── Assento.js
    │   ├── BotaoCompra.js
    │   └── ListaDeAssentos.js
    ├── favicon.ico
    ├── fonts
    │   ├── GeistMonoVF.woff
    │   └── GeistVF.woff
    ├── globals.css
    ├── layout.js
    ├── page.js
    └── page.module.css

<h2 id="">page.js</h2>
A página do projeto implementa uma interface para exibir informações sobre um filme e permitir a **seleção de assentos** no cinema.

<h3> Importações </h3>

```js
"use client";

import styles from './page.module.css';
import BotaoCompra from './components/BotaoCompra';
import ListaDeAssentos from './components/ListaDeAssentos';
import { useState, useEffect } from 'react';

```
Nota-se que o arquivo é o único que faz uso dos hooks (`useState` e `useEffect`), que devem ser importados do react. 
`useState` é usado para criar estados e `useEffect` para lidar com efeitos colaterais (qualquer operação que ocorre fora do fluxo de renderização), como chamadas de API ou
manipulação do DOM. 


<h3>Função principal CinemaPage() </h3>

<h4> Estados </h4>

```js 
const [filme, setFilme] = useState(null);
const [selecionados, setSelecionados] = useState([]);
```

`filme`: Estado que armazena os dados do filme. Inicialmente, é null (não carregado).
`selecionados`: Estado que guarda os números dos assentos que o usuário selecionou.

<h4> buscando dados do JSON </h4>

```js
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
```
`useEffect`: Executa uma função assim que o componente é montado. <br>
`fetch('/api/filme')`: Faz uma requisição GET para a API /api/filme para buscar os dados do filme. <br>
`Verificação de erro`: Verifica se a resposta da API é bem-sucedida (response.ok). Caso contrário, lança um erro. <br> 
`setFilme(data)`: **Atualiza o estado filme com os dados retornados da API.** <br>
`Tratamento de erro`: Exibe um erro no console e mostra um alerta ao usuário caso ocorra um problema ao buscar os dados. <br>


