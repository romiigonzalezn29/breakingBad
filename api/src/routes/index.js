const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios')
const { Character, Occupation} = require ('../db.js')
const {allCharacters, getById, postCharacter, getOccupation} = require ('./controllers.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/characters', allCharacters)
router.get('/character/:id', getById)
router.get('/occupations', getOccupation)
router.post('/character', postCharacter)
module.exports = router;
