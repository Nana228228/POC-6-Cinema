# POC 6

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

   * [Introdução](#introducao)
   * [Estrutura](#estrutura)
   * [Componentes](#componentes)
      - [Assento.js](#)
      - [BotaoCompra.js](#)
      - [ListaDeAssetos.js](#)
   * [Page.js](#cinemapage)
   * [Estilos ](#styles)
   * [Layout](#layout)
   * [Autores](#autores)


<h2 id="introducao">Introdução</h2>
Nessa POC, os conceitos aprendidos até aqui de React e recursos  de desenvolvimento web serão colocados em prática no desenvolvimento de uma interface de reserva de assentos de cinema. Para ver o enunciado completo, acesse: 
https://bragafilho.craft.me/CZ5uesfSq3ICAe.
Explicaremos as técnicas usadas com anotação do código, dividindo-o em partes compreensíveis e detalhando sua semântica. 


<h2 id="comecando">Começando o projeto</h2>

Para criar um projeto usando o framework Next.js, digite no terminal: 
```bash
npx create-next-app@latest nome-do-projeto
```

Para entrar no diretório do projeto e iniciar o servidor de desenvolvimento, digite:

```bash
cd nome-do-projeto
npm run dev
```

<h2 id="estrutura">Estrutura do diretório app</h2>

<pre>
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
  
</pre>
<h2 id="Assento.js">Assento.js</h2>
Esse componente define a aparência de cada assento de forma individual e o comportamento ao ser clicado. 


```js
//1) Importações
import React from 'react';
import styles from '../page.module.css';
//2) Definindo o Componente
export default function Assento({ assento, selecionado, onSelect }) {
    return (
        //3) Aparência e Comportamento do Assento
        <div
            className={`${styles.assento} ${assento.status === 'indisponivel' ? styles.indisponivel : ''} ${selecionado ? styles.selecionado : ''}`}
            onClick={() => onSelect(assento.numero)}  // Passando o número do assento para a função onSelect
        >
        
        </div>
    );
}

```
Pularemos a explicação de o que são componentes e como declará-los por motivos de concisão. Para saber mais, acesse as POCs anteriores. <br>
O componente recebe três props:<br>
`assento`: Representa o assento em si, incluindo detalhes como o número e disponibilidade.<br>
`selecionado`: Indica se o assento foi clicado pelo usuário.<br>
`onSelect`: É uma função que será chamada quando o assento for clicado.<br>
`<div>`: É a "caixa" que representa o assento.<br>

`className`: Define o estilo visual do assento usando if ternário (expressão condicional):<br>

  * `styles.assento`: O estilo comum a todos os assentos - a classe `.assento` dentro do arquivo `styles` importado posteriormente.<br>
  * `assento.status === 'indisponivel' ? styles.indisponivel : ''`: Verifica se o assento está "indisponível" e, se sim, aplica um estilo que mostra que ele está ocupado (a classe `.indisponivel` dentro do arquivo `styles`).<br>
    
  * `selecionado ? styles.selecionado : ''`: Verifica se o assento foi selecionado pelo usuário e aplica um estilo diferente (a classe `.selecionado` dentro do arquivo `styles`).<br>

<h2 id="ListaDeAssentos.js">ListaDeAssentos.js</h2>
O componente ListaDeAssentos recebe dados (p. ex. quais assentos estão disponíveis) da API interna e passa essas informações para o componente Assento.js. Além disso, exibe os assentos de forma organizada e a legenda. 

```js
//1) Importações
import React from 'react';
import styles from '../page.module.css';
import Assento from './Assento';

//2) Declaração do componente 
export default function ListaDeAssentos({ assentos, selecionarAssento, selecionados }) {
  return (

//3)Renderização dos assentos
      <div className={styles.assentosContainer}>
        <div className={styles.grid}>
          {assentos.map((x) => (
            <Assento 
              key={x.numero} 
              assento={x} 
              onSelect={selecionarAssento} 
              selecionado={selecionados.includes(x.numero)} 
            />
          ))}
      </div>
      
{/*4)Legenda */}
        <div className={styles.legenda}>
          <span className={styles.livre}>● livre</span>
          <span className={styles.selecionado}>● selecionado</span>
          <span className={styles.indisponivel}>● indisponível</span>
        </div>
      </div>
    );
}

```
Props (ou entradas da função):

`assentos`: Uma lista de assentos com o mesmo nome no JSON que será exibida. <br>
`selecionarAssento`: Uma função que permite selecionar um assento.<br>
`selecionados`: Uma lista de assentos que já foram selecionados através da interação com o usuário e do uso de estados.<br>

container `.grid`: utiliza o método .map para iterar sobre a lista de objetos `assentos` do JSON e renderiza um componente Assento para cada item. <br>
* `key={x.numero}`: cada item da lista gera um componente assento com o tributo key igual ao valor da chave numero. O React usa essa propriedade para identificar de forma única cada elemento ou componente em uma lista, evitando comportamentos inesperados.<br>
* `assento={x}`:cada item da lista gera um componente assento com o tributo key igual ao valor da chave numero<br>
* `onSelect={selecionarAssento}`: A função para selecionar o assento<br>
* `selecionado={selecionados.includes(x.numero)}`:Um valor booleano (true ou false) que indica se o assento está selecionado. Ele verifica se o número do assento está na lista selecionados<br>


Renderização dos assentos:
* `styles.assento`: O estilo comum a todos os assentos - a classe `.assento` dentro do arquivo `styles` importado posteriormente.

Legenda

<h2 id="page.js">page.js</h2>
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


<h3 id="cinemapage">Função principal CinemaPage() </h3>

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

<h4>Função de Seleção de Assentos</h4> 
A função recebe como parâmetro um numero que identifica o assento. A partir desse dado, se o assento ainda não está selecionado, ele é adicionado à lista. Caso contrário, é removido.
Usa setSelecionados para atualizar a lista de assentos selecionados.

```js
const selecionarAssento = (numero) => {
    if (!selecionados.includes(numero)) {
        setSelecionados([...selecionados, numero]);
    } else {
        setSelecionados(selecionados.filter(n => n !== numero));
    }
};

```
<h4> Renderização Condicional </h4>
Verifica se os dados do filme ainda não foram carregados (filme é null), exibe a mensagem "Carregando...".

```js
if (!filme) return <p>Carregando...</p>;
```

<h4> Estrutura da Página</h4>

```js 
return (

//Header
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>{filme.titulo}</h1>
                <h2 className={styles.subtitle}>{filme.horario}</h2>
            </header>

//InfoSection
            <section className={styles.infoSection}>
                <h2>Sinopse do filme</h2>
                <p>{filme.sinopse}</p>
                <h3>Data de lançamento</h3>
                <p>{filme.dataLancamento}</p>
                <h3>Direção</h3>
                <p>{filme.diretor}</p>
            </section>
//Lista de Assentos
            <div className={styles.assentosContainer}>
                <ListaDeAssentos 
                    assentos={filme.assentos}
                    selecionarAssento={selecionarAssento} 
                    selecionados={selecionados} 
                />
            </div>

//Botão de Compra
            <BotaoCompra 
                preco={filme.preco} 
                totalSelecionados={selecionados.length} 
                className={styles.botaoCompra}
            />
        </div>
    );
}
```
O cabeçaho e a infosection exibem seu conteúdo a partir de dados do JSON

`ListaDeAssentos`: Componente que renderiza os assentos disponíveis para seleção.
Props:
assentos: A lista de assentos obtida da API.
selecionarAssento: Função para lidar com a seleção de assentos.
selecionados: Lista de assentos atualmente selecionados.


`BotaoCompra`: Componente para confirmar a compra dos assentos.
Props:
`preco`: Preço do ingresso, obtido dos dados do filme.
`totalSelecionados`: Número total de assentos selecionados.
`className`: Classe CSS para estilização.















