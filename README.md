# VueJS  Memory game

Um pequeno projeto demonstrando um jogo da memória feito *VueJS* (cli 3.x) e com o padrão Material design do *Vuetify*.


A Paleta de cores utilizada esta disponivel em [Adobe Colors](https://color.adobe.com/pt/Cópia-de-blue-orange-v2-color-theme-11100538/).

### Este projeto utiliza cypress para testes em E2E, mais abaixo as instruções para rodar o teste

## Correções:

- [x] Componentizar a aplicação visando responsabilidade e reusabilidade de cada componente.
> Toda aplicação foi refatorada e componentizada pensando na OO e reusabilidade dos componentes.

- [x] Criar uma estrutura de dados (classe de model) para armazenar as cartas a fim de manter a integridade dos dados.
> Criei models para o deck, cartas, jogo, placar e jogador, passando a cada um as variáveis e métodos pertinentes a model,

_Afim de manter os atributos da model com seus tipos respeitados para não haver quebra de encapsulamento foi feira uma alteração no "eslintrc.js", inserindo a seguinte configuração,  "no-underscore-dangle": [2, { "allowAfterThis": true }_

- [x] Desacoplar lógica do jogo do .vue para um serviço JS pensando em reaproveitamento e responsabilidade.
> Durante a criação dos models todos métodos agoras pertencem as classes retirando assim do .vue a responsabilidade lógica.

- [x] Remover código, estilos e testes que não estão sendo utilizados.
> Refatorado os componentes Sass e removido todos testes de exemplo.

- [] Bônus: Criar teste unitário para o serviço.
> Um detalhe sobre o teste em E2E com a refatoração ele também sofreu alterações, agora ele conta com mais de 60 asserts e também faz a validação da integração que fiz com o mockapi para registrar o jogador.

## A fazer:

- [x] Definir as cores tema da aplicação.
- [x] Definir a arquitetura.
- [x] Inicializar o git flow.
- [x] Definir temas das imagens que serao utilizadas nas cartas.
- [x] Implantar método para controle de turnos.
- [x] Implantar método para sortear a posição das cartas.
- [x] Implantar método para seleção de cartas.
- [x] Implantar método para permanência visual do par completo de cartas.
- [x] Implantar método para armazenar nome do jogador
- [x] Definir e implantar como sera exibido o ranking dos jogadores ordenados pela quantidade de turnos necessarios para completar o jogo.


## Para instalar as dependencais
```
yarn install

```

### Para compilar a aplicação e hot-reload
```
yarn run serve

```
ou apenas

```
yarn serve

```

### Para buildar a aplicação
```
yarn run build

```

### Esta aplicação utiliza o cypress para testes automátizados digite o seguinte comando para abrir a interface dos testes, certifique-se que o projeto esteja rodando na porta 8080
```
./node_modules/.bin/cypress open

// Lembrando que se estiver em um windows pode ser necessário trocar a barra / pela invertida \.

```

### Caso sua porta padrão não seja 8080 favor alterar o script com essa informação

```javascript
// no arquivo autoplay.spec.js

// No comando
context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080"); // Aqui
  });

```

### O script que corre o jogo está nomeado como "autoplay.spec.js"

Neste link segue um print de como é a interface do Cypress e como encontrar o script https://pasteboard.co/HIu6POa.png


### Para corrigir os problemas de line break em LN / CRLF, ou de lint em geral.
```
yarn lint --fix

```
