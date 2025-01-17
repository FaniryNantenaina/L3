const mysql = require('mysql');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});
exports.register = (req, res) => {
  console.log(req.body);
  const {name, email, password, passwordConfirm} = req.body;
  db.query("SELECT email FROM users WHERE email = ?", [email], async (error, results) => {
    if(error) {
      console.log(error);
    }

    if(results.length > 0) {
      return res.render('register', {
        message: 'Cet email existe déjà !'
      });
    }else if(password !== passwordConfirm){
      return res.render('register', {
        message: 'Veuillez bien vérifier votre mot de passe !'
      });
    }
    let hashedPassword = await bcrypt.hash(password, 8);
    console.log(hashedPassword);
    db.query('INSERT INTO users SET ?', {name: name, email: email, password: hashedPassword}, (error, results) => {
      if(error) {
        console.log(error);
      }else{
        console.log(results);
        return res.render('register', {
          message: 'utilisateur bien enregistré , vous pouvez connecter des maintenant !'
        });
      }
    });
  });
};
exports.login = async (req, res) => {
  try {
    const {email, password} = req.body;
    if(!email || !password) {
      return res.status(400).render('login', {
        message: 'Completer les champs svp!'
      });
    }
    db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
      console.log(results);
      if(!results || !(await bcrypt.compare(password, results[0].password))){
        res.status(401).render('login', {
          message: 'Email ou Mot de passe incorrect! '
        });
      }else{
        const id = results[0].id;
        res.status(200).redirect('http://localhost/site/stage/index2.html');
      }
    });
  } catch (error) {
    console.log(error);
  }
};