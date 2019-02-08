# React Native - Desafio 2

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
