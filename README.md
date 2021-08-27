# FizzBuzz

## Informações sobre o projeto

A aplicação FizzBuzz tem como propósito verificar se a quantidade de elementos digitadas pelo usuário é múltiplo de x, y e z (sendo esses definidos pelo usuário). Caso seja, irá substituir os números multiplos pelas palavras, respectivamente: "Fizz", "Buzz" e "FizzBuzz".

## Recursos extras

- Sistema de data e hora atuais (em PT-BR)


## Tecnologias Usadas

O projeto FizzBuzz foi feito com as seguintes tecnologias:

- [Angular](https://angular.io/)
- [Bootstrap](https://getbootstrap.com/)
- 
## Ferramentas Utilizadas

O projeto FizzBuzz foi desenvolvido na seguinte Ferramenta:

- [VS Code](https://code.visualstudio.com/)

## Guia de instalação 

Para poder executar o projeto em sua máquina, primeiro é necessário clonar o projeto do GitHub. Em um terminal de sua preferência, execute os seguintes comandos:

```
git clone https://github.com/mateusascacibas/FizzBuzzComTestes
cd FizzBuzzComTestes
npm install
ng serve
```
Após isso, a aplicação poderá ser acessada pelo navegador na porta:

```https://localhost:4200```

## Para executar no Docker

Para executar o projeto no Docker, abra um terminal de preferência e execute os seguintes comandos: 




Baixar a imagem
```
docker pull dannxp/fizzbuzzcomtestes
```

Executar a imagem:

```
docker run -d -p 8080:80 dannxp/fizzbuzzcomtestes
```

No navegador:

```sh
https://localhost:8080
```

#### Kubernetes (Opcional)

Para executar no Kubernetes, realize os seguintes passos:

```sh
minikube start --driver=docker
```

Gerar deploy no Kubernetes:

```sh
kubectl apply -f arquivo.yaml
```

Gerar serviço no Kubernetes
```sh
kubectl apply -f servico.yaml
```
Executar o serviço

```sh
minikube service --url fizzbuzzcomtestesservico
```

Obrigado se leu até aqui!
Projeto desenvolvido por: Daniel Cardoso da Silva, Mateus Ascacibas e Telma Carvalho.
