# React Native - Desafio 2

[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/osvaldokalvaitir/react-native-desafio2/blob/master/LICENSE)
![](https://img.shields.io/github/package-json/v/osvaldokalvaitir/react-native-desafio2.svg)
![](https://img.shields.io/github/last-commit/osvaldokalvaitir/react-native-desafio2.svg?color=red)
![](https://img.shields.io/github/languages/top/osvaldokalvaitir/react-native-desafio2.svg?color=yellow)
![](https://img.shields.io/github/languages/count/osvaldokalvaitir/react-native-desafio2.svg?color=lightgrey)
![](https://img.shields.io/github/languages/code-size/osvaldokalvaitir/react-native-desafio2.svg)
![](https://img.shields.io/github/repo-size/osvaldokalvaitir/react-native-desafio2.svg?color=blueviolet)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)

Aplicação GitIssues usando React Native, ESLint, EditorConfig, Babel Root Import, Babel Module Resolver, prop-types, React Navigation, React Native Vector Icons, React DevTools e Reactotron.

## Desafio 2

Crie uma aplicação do zero e configura as ferramentas: ESLint, Reactotron, Babel Root Import e EditorConfig. Nesse desafio você irá construir uma aplicação utilizando a API do Github para listar issues (questões) de um repositório. A interface da aplicação deve ser construída utilizando FlexBox e seguir conforme imagem abaixo:

O app permitirá ao usuário inserir o nome de um repositório existente que será exibido na lista da primeira tela e clicando sobre os repositórios, poderá listar as issues pertencentes ao mesmo, além disso pode filtrar entre issues Abertas, fechadas ou todas. As duas páginas do app devem ser estilizadas como as seguintes imagens:

![Telas](/assets/screens.png)

### Regras

- O input de adicionar repositório deve receber a informação da seguinte forma: organização/repositório (Exemplo: “rocketseat/comunidade”);
- Ao clicar no botão “+” uma request será enviada à API do Github buscando informações do repositório e armazenando os campos ID, nome, organização e avatar no storage (AsyncStorage) do dispositivo;
- A lista de repositórios adicionada deve ser mantida no AsyncStorage em forma de array e recuperada ao inicializar a aplicação exibindo os dados em tela;
- O usuário deve poder atualizar a lista de repositórios arrastando a lista pra baixo com a opção refresh do `<FlatList />`;
- Ao clicar em um repositório, o usuário deverá ser navegado para a tela de issues do repositório e só nesse momento carregar as issues da API (não armazene as issues no AsyncStorage). Você vai precisar enviar o repositório como parâmetro na navegação, veja: https://reactnavigation.org/docs/en/params.html;
- Deve ser possível filtrar entre issues abertas, fechadas e todas (por padrão);
- A linha do título da issue deve ocupar apenas a linha (https://facebook.github.io/react-native/docs/text#numberoflines), não quebrando e mostrando “...” (https://facebook.github.io/react-native/docs/text#ellipsizemode) no final do texto para indicar que possui mais conteúdo;
- Ao clicar em uma issue, o usuário deve ser redirecionado para a URL da issue pelo navegador (https://facebook.github.io/react-native/docs/linking#openurl), não é preciso abrir a informação na tela do app;
- As abas de status das issues não precisam utilizar React Navigation, você pode fazer apenas com botões `<TouchableOpacity>`;

### Exemplos URL

Repositório: https://api.github.com/repos/react-community/react-navigation
Issues: https://api.github.com/repos/react-community/react-navigation/issues

## Índice

- [Telas](#telas)

  - [Home](#home)

  - [Issues](#issues)

- [Rotas](#rotas)

- [Desenvolvimento](#desenvolvimento)

  - [Configurações Iniciais](#configurações-iniciais)

  - [Instalação do Projeto](#instalação-do-projeto)

  - [Execução do Projeto](#execução-do-projeto)

  - [Bibliotecas](#bibliotecas)

  - [Outras Ferramentas](#outras-ferramentas)

## Telas

### Home

![Home](/assets/home.png)
Esta é a primeira tela, onde estão todos os repositórios do GitHub informados pelo usuário.

### Issues

![Issues](/assets/issues.png)
Nesta tela estão todas as issues referentes ao repositório selecionado pelo usuário.

## Rotas

- Busca um repositório do GitHub

- Busca todas as issues de um repositório do GitHub

## Desenvolvimento

### Configurações Iniciais

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/README.md) e siga as Configurações Iniciais.

### Instalação do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/nodejs.md) e siga a Instalação de Projeto.

### Execução do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-cli.md) e siga a Execução de Projeto.

### Bibliotecas

- [Axios](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/axios.md)

- [Babel Root Import](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/babel-plugin-root-import.md)

- [babel-eslint](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/babel-eslint.md)

- [eslint](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint.md)

- [ESLint plugin for React Native](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint-plugin-react-native.md)

- [eslint-import-resolver-babel-plugin-root-import](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint-import-resolver-babel-plugin-root-import.md)

- [prop-types](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/prop-types.md)

- [React Native Gesture Handler](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-gesture-handler.md)

- [React Native Vector Icons](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-vector-icons.md)

- [React Navigation](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-navigation.md)

- [react-devtools](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-devtools.md)

- [react-native-cli](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-cli.md)

- [reactotron-react-native](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/reactotron-react-native.md)

### Outras Ferramentas

- [Reactotron](https://github.com/osvaldokalvaitir/projects-settings/blob/master/inspector/reactotron.md)
