const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
const {Character, Occupation} = require ('../db.js');


const router = Router();

const getApiInfo = async() => {
    const apiUrl = await axios.get('https://breakingbadapi.com/api/characters');
    const infoApi = await apiUrl.data.map ( c => {
        return {
            id: c.char_id,
            name: c.name,
            birthday: c.birthday,
            nickname: c.nickname,
            status: c.status,
            occupation: c.occupation,
            img: c.img

        }
    })
    return infoApi
    
}


const getDbInfo = async () => {
    return await Character.findAll({
        include:{
            model: Occupation,
            atributes:['name'],
            through: {
                atributes: [],
            }
        }
    })
}

const getAllCharacters = async () => {
    const apiCharacters = await getApiInfo()

    const dbCharacters = await getDbInfo()

    infoTotal = apiCharacters.concat(dbCharacters)
   
    return infoTotal
}

const allCharacters = async (req,res) => {
    const { name } = req.query;
    let characters = await getAllCharacters();
    if (name) {
        let characterName = characters.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
        characters ?
        res.status(200).send(characterName) :
        res.status(400).send('No se encuentra el personaje')
    }
    else {
        res.status(200).send(characters)
    }
}

const getById = async(req,res) => {
    
try {
    const { id } = req.params;
    
    if(Number(id) === NaN) {
        const dbId = await Character.findByPk(id);
        
        res.status(200).send(dbId);

    } else {
        const getApi = await getAllCharacters()
        
        const apiId = getApi.find((e) => e.id == id )
        console.log(apiId)
        res.status(200).send(apiId)
    }
    } catch (error) {
        console.log(error)
    }
}

const getOccupation = async(req, res) => { 
    const occupationApi = await axios.get('https://breakingbadapi.com/api/characters');
    const occupations = occupationApi.data.map(el => el.occupation)
    const occEach = occupations.map(el => {
     for (let i=0; i<el.length; i++) return el[i]
    })
    occEach.forEach(el => {
     Occupation.findOrCreate({
         where: {name: el}
     })
    })
    const allOccupations = await Occupation.findAll()
     res.send(allOccupations)
    
     };


const postCharacter = async (req, res) =>  {
    let {

        name,
        nickname,
        birthday,
        status,
        occupation,
        image,
       

   } = req.body


   let characterCreated = await Character.create ({
    name,
    nickname,
    birthday,
    status,
   
    image,
   })
   console.log("name" ,characterCreated.name)

   let occupationDb = await Occupation.findAll ({
       where: {name : occupation}
   })
   characterCreated.addOccupation(occupationDb)

   res.send('personaje creado con exito')
}



module.exports = {
    allCharacters,
    getById,
    postCharacter,
    getOccupation
}