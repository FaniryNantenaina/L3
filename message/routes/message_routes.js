const express = require('express');
// const flash = require('express-flash');
const router = express.Router();
const connection = require('../config/db');

router.use(require('../notification/flash'))

//boutton lien vers la page d'ajout etudiant(page ajout_message)
router.get('/ajout_message',(req, res) => {
    res.render('ajout_message');
});

//select dans database (page index)
router.get('/listes_message',(req, res) => {
    let sql = "SELECT * from message";
    connection.query(sql, (err, rows) =>{ 
        if(err) throw err;
        res.render('listes_message', { 
            user : rows
        });
    }); 
});

//ajouter un étudiant dans database
router.post('/enregistrer', (req, res) => {
    let sql2 = "select * from message where NumInscription = '"+req.body.num+"'";
    connection.query(sql2, (err2, rows) => {
        if(err2) throw err2

        if(rows.length > 0){
            req.flash('error', "Le numéro d'inscription '"+req.body.num+"' existe déjà !")
            res.redirect('/ajout_message')
        }else{
            let data = {NumInscription: req.body.num, Nom: req.body.nom,  email: req.body.email, Adresse: req.body.adresse, Prenom: req.body.prenom};
            let sql = "INSERT INTO message SET ?";
            connection.query(sql, data,(err, resultat) => {
                if(err) throw err;
                res.redirect('http://localhost/site/stage/successmessage.html');
            });
        }
    });
    
});

//Modifier un étudiant
router.get('/modifier_message/num=(:NumInscription)',(req, res) => {
    const userNum = req.params.NumInscription;
    let sql = "select * from message  where NumInscription ='"+userNum+"' ";
    connection.query(sql, (err, result) => {
        if(err) throw err;
        res.render('modifier_message', {
            user : result[0]
        });
    }); 
});

router.post('/modifier', (req, res) => {
    const userNum = req.body.num;
    let sql = "UPDATE message SET NumInscription ='"+req.body.num+"', Nom ='"+req.body.nom+"', Email ='"+req.body.email+"',Adresse ='"+req.body.adresse+"', Prenom ='"+req.body.prenom+"' WHERE NumInscription ='"+userNum+"' ";
    connection.query(sql, (err, resultat) => {
        if(err) throw err;
        res.redirect('http://localhost:3001/listes_message');       
    });
});

//Supprimer un étudiant
router.get('/supprimer_etudiant/num=(:NumInscription)',(req, res) => {
    const userNum = req.params.NumInscription;
    let sql = "DELETE from message where NumInscription ='"+userNum+"' ";
    connection.query(sql, (err, result) => {
        if(err) throw err;
        res.redirect('/listes_message');
    }); 
});

module.exports = router;