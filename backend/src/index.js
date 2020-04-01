/**
 * Rotas / Recursos
 * 
 * MÉTODOS HTTP:
 * GET          BUSCAR / LISTAR UMA INFORMAÇÃO NO BACK END
 * POST         CRIAR UMA INFORMAÇÃO NO BACK END
 * PUT          ALTERAR UMA INFORMAÇÃO NO BACK END       
 * DELETE       DELETAR UMA INFORMAÇÃO NO BACK END
 */

/** 
 * TIPOS DE PARÂMETROS
 * Query Params: PARÂMETROS NOMEADOS ENVIADOS NA ROTA APÓS O SÍMBOLO DE ? (FILTROS, PAGINAÇÃO)
 * Route Params: PARÂMETROS UTILIZADOS PARA IDENTIFICAR RECURSOS
 * Request Body: CORPO DA REQUISIÇÃO UTILIZADO P/ CRIAR/ALTERAR RECURSOS
 */
const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
app.use(errors());