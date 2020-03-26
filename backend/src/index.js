//inport funcionalidades do modulo express 
const express = require('express');
const routes = require('./routes');

// armazena uma aplicaçao
const app = express();
// Abaixo, informa o js para converter o json recebido em algo js
// erro "undefined" quando utilizado o POST 
app.use(cors());
app.use(express.json());
app.use(routes);

/*
------------- METODOS HTTP ------------------
GET: Buscar uma informação do backend
POST: Criar uma informação no backend
PUT: Alterar uma informação no backend
DELETE: Deletar uma informação no backend
----------------------------------------------
*/  
/*
------------- TIPO DE PARAMETROS -------------
QUERY: Parametros nomeados enviados na rota apos simbolo de "?" (filtros e paginação)
ROUTE PARAMS: Parametro para identificar recursos
REQUEST BODY: Corpo da requisição, utilizado para criar ou alterar recursos
----------------------------------------------
*/
/*
------------- DATABASE -----------------------
SQL: MySql, SqLite, PostgreSql, Oracle, Microsoft Sql server
NoSQL: MongoDB, CouchDB, etc
----------------------------------------------
*/




//setando porta para aplicação
app.listen(3333);

