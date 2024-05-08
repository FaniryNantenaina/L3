const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const mysql = require('mysql');
const app = express();
// const flash = require('express-flash')
const etudiantRouter = require('./routes/message_routes');


//set views file
app.set('views', path.join(__dirname,'views'));

//set view engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

//Ressources statiques
app.use('/assets' , express.static("public"));


const onDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: 'haja',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: onDay }
}))

app.use(require('./notification/flash'))

//routes pour l'etudiant
app.use(etudiantRouter);



//lien vers menu principal
app.get('/menu_principal',(req, res) => {
    res.render('menu_principal');
});






//lien vers semantic modal 
app.get('/semantic_modal',(req, res) => {
    res.render('semantic_modal');
});

app.listen(3001, () => {
    console.log('Serveur bien démmarer...!');
}); 
