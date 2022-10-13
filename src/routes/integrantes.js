const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const integrantes = require('../datos.json');

router.get('/', (req, res) => {
    res.json(integrantes);
});

router.post('/', (req, res) => {
    const {Nombre, Carne} = req.body;
    if(Nombre  && Carne) {
    const id = integrantes.length + 1;
    const NewIntegrante = {id, ...req.body};
    console.log(NewIntegrante);
    integrantes.push(NewIntegrante);
    res.json(integrantes);
  } else {
    res.status(500).json({error: 'Peticion Erronea'});
  }
});
router.put('/:id', (req, res) => {
  const {id} = req.params;
  const {Nombre, Carne } = req.body;
  if(Nombre && Carne ){
    _.each(integrantes, (integrante, i) => {
        if(integrante.id == id){
            integrante.Nombre = Nombre;
            integrante.Carne = Carne;
        }
    });
    res.json(integrantes);
  } else {
    res.status(500).json({error: 'Ocurrio un error.'});
  }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
   _.each(integrantes, (integrante, i) => {
     if(integrante.id == id) {
        integrantes.splice(i, 1);
     }
});

    res.send(integrantes);
});
module.exports = router;
