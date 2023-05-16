var express = require('express');
var router = express.Router();
const db = require('../db')

const textos = [[],[],[]]
let hojas = 0

router.get('/', async (req, res) => {
  db.query('SELECT * FROM colores', (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).send('Internal server error');
    } else {
      res.render('index', {colores: results, textos: textos, hojas: hojas});
    }
  });
});

router.get('/a2', async (req, res) => {
  let letras=0;
  let negro;
  let amarillo;
  let azul;
  let rosa;
  hojas = hojas + textos[0].length
  textos[0].forEach(text =>{
    letras = letras+text.length;
  })
  negro = letras*0.5;
  amarillo = letras*0.2;
  azul = letras*0.3;
  rosa = letras*0.3;
  textos[0] = [];
  db.query(`UPDATE colores set negro=negro-${negro}, amarillo=amarillo-${amarillo}, azul=azul-${azul}, rosa=rosa-${rosa} where impresora="A2"`, (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).send('Internal server error');
    } else {
      res.redirect('/');
    }
  });
})
router.get('/a3', async (req, res) => {
  let letras=0;
  let negro;
  let amarillo;
  let azul;
  let rosa;
  hojas = hojas + textos[1].length
  textos[1].forEach(text =>{
    letras = letras+text.length;
  })
  negro = letras*0.5;
  amarillo = letras*0.2;
  azul = letras*0.3;
  rosa = letras*0.3;
  textos[1] = [];
  db.query(`UPDATE colores set negro=negro-${negro}, amarillo=amarillo-${amarillo}, azul=azul-${azul}, rosa=rosa-${rosa} where impresora="A3"`, (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).send('Internal server error');
    } else {
      res.redirect('/');
    }
  });
})
router.get('/a4', async (req, res) => {
  let letras=0;
  let negro;
  let amarillo;
  let azul;
  let rosa;
  hojas = hojas + textos[2].length
  textos[2].forEach(text =>{
    letras = letras+text.length;
  })
  negro = letras*0.5;
  amarillo = letras*0.2;
  azul = letras*0.3;
  rosa = letras*0.3;
  textos[2] = [];
  db.query(`UPDATE colores set negro=negro-${negro}, amarillo=amarillo-${amarillo}, azul=azul-${azul}, rosa=rosa-${rosa} where impresora="A4"`, (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).send('Internal server error');
    } else {
      res.redirect('/');
    }
  });
})

router.get('/enviar', async (req, res) => {
  if(req.query.n_impresora === 'A2') textos[0].push(req.query.texto)
  if(req.query.n_impresora === 'A3') textos[1].push(req.query.texto)
  if(req.query.n_impresora === 'A4') textos[2].push(req.query.texto)
  res.redirect('/')
})


module.exports = router;
