# Instalação
## Ambiente
Para instalar o ambiente de desenvolvimento da aplicação, é necessário ter as seguintes aplicações instaladas:

 - Node.js
 - Bower
 - Grunt-cli
## Dependências
Para instalar as ferramentas de build, navegue até a raiz do projeto e execute no terminal:
```sh
npm install
```
E para instalar as dependências da aplicação, execute:

```sh
bower install
```

## Build
Para executar o projeto em modo de desenvolvimento, execute o seguinte comando no terminal:

```sh
grunt serve
```
Para realizar o build do projeto para produção, execute o seguinte comando no terminal:

```sh
grunt build
```
## Testes
Para executar os testes unitários, execute o seguinte comando no terminal:

```sh
grunt test
```
# Sobre o projeto
## Bibliotecas utilizadas
### Angular.js

Framework de javascript. Foi utilizado para criar a SPA (Single-Page Application) de maneira simples e bem estruturada.

### Bootstrap
Framework de CSS. Foi utilizado para facilitar a estilização da aplicação.

### Toastr
Biblioteca utilizada para exibir alertas de forma simples.

## Ferramentas
Foi utilizada a ferramenta Yeoman para a geração da configuração do Grunt, que agrega os passos para realizar o build do projeto.

Dentre os plugins executados nas tarefas do Grunt, temos: minificadores de javascript, minificadores de CSS e plugins de injeção de dependências.

# Contato
Felipe dos Santos Brito. E-mail: <a href="mailto:fsb.felipe21@gmail.com">fsb.felipe21@gmail.com</a>

