const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.post('/incidents', celebrate({

    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),

    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.create);

routes.get('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string()//.required(), PARA FUNCIONAR TESTES NO MOBILE, MANTER REQUIRED COMENTADO
    }).unknown(),

    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required().length(30),
        description: Joi.string(),
        value: Joi.number(),
    }),
}), IncidentController.index);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);


module.exports = routes;