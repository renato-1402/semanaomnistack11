const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * 
 */
/**
 * Metodos Http
 * GET: Buscar/listar uma info do backend
 * POST: Criar um info no back-end
 * PUT:Alterar uma info no back-end
 * DELETE: deletar uma info no back-end
 */
/**
 * tipos de parametros
 * 
 * Query params: paramentros nomeados enviados nas rotas apos o ?(filtros, paginação)
 * Route params :Parâmetros utilizados para identifivar recursos
 * Request Body : Corpo da requisição utilizado para criar ou alterar recursos 
 */
/**
 * 
 */


app.listen(3333);