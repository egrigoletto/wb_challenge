# Desafio Willbank
Este reprositório contém uma aplicação simples, se trata de a busca de dados a partir de uma API mockada e testes unitários de algumas funções

Há um fluxo secundário, que verifica a integridade da aplicação, se responder, está ok.

## Como usar

Com o docker instalado em sua máquina execute o comando abaixo

	docker-compose up

Com a máquina iniciada aparecerá uma instrução escrito "Servidor Rodando". 
Para visualizar acesse o endereço abaixo:

	  http://localhost:8080 - para máquinas linux ou instalalções de Windows com "Docker for Windows" ou Linux/

Com isso basta fazer uma chamada para as rotas abaixo:

 - _/example_: teste para verificar se o sistema está ok
 - _/customer/resend_transaction_: executa a seleção de dados para reprocessamento da chave pix no formato soicitado
 - _/customer/balance_: retorna os dados através de agência e conta
 - _/docs_: uma documentação em swagger disponível para ver os dados obrigatórios e cada chamada da API

### Como executar os testes:

Com a aplicação devidamente executando com o docker execute o comand abaixo numa janela de terminal

    docker ps

Localize o container onde está a aplicação e copie seu ID, ele estará sob o nome de NODEJS_SERVER_TEST.

Após isso digite o seguinte comando:
    docker exec -it (o id copiado do container) bash

Após a tela se abrir execute o comando
    npm run test
