const express = require("express");
const router = express.Router();
const db = require("../models");

let setSpecies;
let setArea;
let setRarity;
let setColor;
let num;

router.post('/new', (req, res) => {
    db.Monster.create({
        dex_species: req.body.dex_species,
        dex_area: req.body.dex_area,
        dex_rarity: req.body.dex_rarity,
        dex_colors: req.body.dex_colors
    }).then(newPet=> res.send(newPet))
});

router.get('/monster/find/:id', (req, res) => {
    findRarity();
    console.log(setRarity)
    db.Monster.findAll({
        where: {
            dex_area: req.params.id,
            dex_rarity: setRarity,
        },
    }).then(monster => {
        findMonster(monster);
            res.send(monster[num])
            console.log(monster[num].dataValues);
            setSpecies = monster[num].dataValues.dex_species;
            setArea = monster[num].dataValues.dex_area;
            setColor = 3;
        });
})

router.post('/monsters/add', (req, res) => {
    console.log(setSpecies)
    db.Pet.create({
        species: setSpecies,
        area: setArea,
        rarity: setRarity,
        color: 3,
        CollectionId: 1
    }).then(newPet=> res.send(newPet))
});


findRarity = (region) => {
    num = Math.floor(Math.random() * 100) + 1;
        if (num >= 90) { 
            setRarity = "rare"
        }
        else if (num >= 70) { 
            setRarity = "uncommon"
        }else {
            setRarity = "common"
        }
}

findMonster = (monster) => {
    num = Math.floor(Math.random() * (monster.length -1))
    console.log(monster.length -1)
    console.log(num);
}


module.exports = router;