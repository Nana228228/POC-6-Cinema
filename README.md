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
├── app/ 
/components
  ├── 
  ├── 
  ├── 
  └──     
/fonts
  └── global.css
/layout.js
/page.js
/public
  └── favicon.ico    
├── .eslintrc.json
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tailwind.config.js
</pre>

<h2 id="">page.js</h2>
A página do projeto implementa uma interface para exibir **informações** sobre um filme e permitir a __seleção de assentos__ no cinema.

