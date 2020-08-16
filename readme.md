<div align="center">
    <a href="https://www.leroymerlin.com.br" title="Leroy Merlin">
        <img width=100 src="https://cdn.leroymerlin.com.br/assets/images/logo-leroy-merlin.svg" alt="Leroy Merlin"/>
    </a>
    <h1 align="center">Teste Frontend - Felipe Zeba</h1>
</div>

## A Pessoa

**Nome:** `Felipe Zeba`

**E-mail:** `felipe_zeba@outlook.com`

**Usuário:** @felipe_zebafelipezeba

## Sobre o teste
O desafio consiste em consumir uma lista de produtos através de uma API, exibi-los em um grid uniforme, criar uma experiencia de compra, adicionando o produto ao carrinho, calculando o frete e mostrando o valor total a ser pago.

### Requisitos básicos
 - Utilizar react;
 - Layout responsivo;
 - Não utilizar framework de CSS (Bootstrap, PureCss, MaterialUI, etc.);
 - Ser capaz de rodar os comandos `yarn start/build`;
 - Utilizar o padrão de _commit_ baseado no [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/);

### Visual e funcionalidades
Ao acessar a aplicação o usuário deve conseguir:
 1. Visualizar  uma lista de produtos;
 2. Ao clicar em um produto, adicionar ao carrinho;
 4. Ao clicar no carrinho:
    - Listar os produtos no carrinho;
    - Conseguir alterar a quantidade de produtos no carrinho;
   	- Conseguir calcular o frete;
   	- Exibir o subtotal (produtos + frete);
 5. Exibir a quantidade de itens no carrinho, no header;

### Guia
As specs do layout se encontram nos links abaixo, aonde contém informações do grid, cores e etc.
- [mobile](https://marvelapp.com/ca4ah6h/screen/60225576)
- [desktop](https://www.figma.com/file/cQtsnVm1RJM2MM0sd64hSk/lmbr-test-front-end?node-id=0:1)

### API
Acesse a documentação da [API](API.md) para mais informações.

### Requisitos adicionais
- Testes, seja unitário ou e2e;
- Redux/Context API;
- Interface animada;
- Feedback de interações - ex(popup ao adicionar um item no carrinho);

### O que iremos avaliar
- Boas práticas e patterns;
- Código e estrutura da aplicação;
- Componentização e fluxo do dados;

### Observações
Se você está realizando o teste em um ambiente `Windows`, se atente ao nome dos arquivos e seus respectivos imports pois os caminhos dos arquivos são case-insensitive, podendo esconder erros de importação que só são percebidos em ambientes Unix/Linux

### Dúvidas
- Sinta-se livre para tirar dúvidas a qualquer momento. Para isso, abra _issues_ aqui mesmo no repositório e responderemos assim que possível.

Boa sorte! 🍀

## 🔖 Layout

#### Desktop
<h1 align="center">
    <img alt="Leroy Merlin" title="#Leroy Merlin" src="src/assets/images/readme/home_desktop.png" width="400px" margin="50px"/>
    <img alt="Leroy Merlin" title="#Leroy Merlin" src="src/assets/images/readme/cart_desktop.png" width="400px" margin="10px"/>
</h1>

#### Tablet
<h1 align="center">
    <img alt="Leroy Merlin" title="#Leroy Merlin" src="src/assets/images/readme/home_tablet.png" width="300px" margin="50px" />
    <img alt="Leroy Merlin" title="#Leroy Merlin" src="src/assets/images/readme/cart_tablet.png" width="300px" margin="10px" />
</h1>

#### Smart phone
<h1 align="center">
    <img alt="Leroy Merlin" title="#Leroy Merlin" src="src/assets/images/readme/home_phone.png" width="185px" margin="50px" />
    <img alt="Leroy Merlin" title="#Leroy Merlin" src="src/assets/images/readme/cart_phone.png" width="185px" margin="10px" />
</h1>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://github.com/facebook/react)
- [Redux](https://redux.js.org/)
- [React-redux](https://react-redux.js.org)
- [Redux Persist](https://www.npmjs.com/package/redux-persist)
- [React-saga](https://redux-saga.js.org)
- [ReduxSauce](https://www.npmjs.com/package/reduxsauce)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [React-router-dom](https://www.npmjs.com/package/react-router-dom)
- [Immer](https://www.npmjs.com/package/immer)
- [Reacj-input-masked](https://www.npmjs.com/package/react-input-mask)
- [Reactjs-popup](https://www.npmjs.com/package/reactjs-popup)

## 🏃‍♂️ Instalando o projeto

- Clone ou baixe o repositório.
- `yarn` para instalar todas as dependências.
- `yarn start` para incializar o Metro Bundler.

