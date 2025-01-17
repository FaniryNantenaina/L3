const express = require('express');
// const flash = require('express-flash');
const router = express.Router();
const connection = require('../config/db');

router.use(require('../notification/flash'))

//boutton lien vers la page d'ajout etudiant(page ajout_etudiant)
router.get('/ajout_etudiant',(req, res) => {
    res.render('ajout_etudiant');
});

//select dans database (page index)
router.get('/listes_etudiant',(req, res) => {
    let sql = "SELECT * from etudiant";
    connection.query(sql, (err, rows) =>{ 
        if(err) throw err;
        res.render('listes_etudiant', { 
            user : rows
        });
    }); 
});

//ajouter un étudiant dans database
router.post('/enregistrer', (req, res) => {
    let sql2 = "select * from etudiant where NumInscription = '"+req.body.num+"'";
    connection.query(sql2, (err2, rows) => {
        if(err2) throw err2

        if(rows.length > 0){
            req.flash('error', "Le numéro cin '"+req.body.num+"' est déjà inscrit sur une formation!")
            res.redirect('/ajout_etudiant')
        }else{
            let data = {NumInscription: req.body.num, Nom: req.body.nom, Prenom: req.body.prenom , Adresse: req.body.adresse, Formation: req.body.formation, email: req.body.email, Contact: req.body.contact};
            let sql = "INSERT INTO etudiant SET ?";
            connection.query(sql, data,(err, resultat) => {
                if(err) throw err;
                res.redirect('http://localhost/site/stage/reussi.html');
            });
        }
    });
    
});

//Modifier un étudiant
router.get('/modifier_etudiant/num=(:NumInscription)',(req, res) => {
    const userNum = req.params.NumInscription;
    let sql = "select * from etudiant where NumInscription ='"+userNum+"' ";
    connection.query(sql, (err, result) => {
        if(err) throw err;
        res.render('modifier_etudiant', {
            user : result[0]
        });
    }); 
});

router.post('/modifier', (req, res) => {
    const userNum = req.body.num;
    let sql = "UPDATE etudiant SET NumInscription ='"+req.body.num+"', Nom ='"+req.body.nom+"',Prenom ='"+req.body.prenom+"', Adresse ='"+req.body.adresse+"',  Formation ='"+req.body.formation+"', Email ='"+req.body.email+"', Contact ='"+req.body.contact+"' WHERE NumInscription ='"+userNum+"' ";
    connection.query(sql, (err, resultat) => {
        if(err) throw err;
         
    });
});

//Supprimer un étudiant
router.get('/supprimer_etudiant/num=(:NumInscription)',(req, res) => {
    const userNum = req.params.NumInscription;
    let sql = "DELETE from etudiant where NumInscription ='"+userNum+"' ";
    connection.query(sql, (err, result) => {
        if(err) throw err;
        res.redirect('/listes_etudiant');
    }); 
});



module.exports = router;