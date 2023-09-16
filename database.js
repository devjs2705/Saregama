var mysql = require("./connection").con;

const bodyParser = require("body-parser");

var express = require("express");
var app = express();

const notifier = require('node-notifier');
app.use(bodyParser.urlencoded({ extended:true }));

app.use(express.static("./"));


app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/HomePage.html');
})

app.get('/searchPage',function(req, res){
    res.sendFile(__dirname + '/views/searchPage.html');
    // res.send("Hello");
})

app.get('/HomePage',function(req, res){
    res.sendFile(__dirname + '/views/HomePage.html');
    // res.send("Hello");
})

app.get('/library',function(req, res){
    res.sendFile(__dirname + '/views/library.html');
    // res.send("Hello");
})

app.get('/createPlaylist',function(req, res){
    res.sendFile(__dirname + '/views/createPlaylist.html');
    // res.send("Hello");
})

app.get('/signUp',function(req, res){
    res.sendFile(__dirname + '/views/sign_up_page.html');
    // res.send("Hello");
})

app.get('/login',function(req, res){
    console.log(req.query);
    res.sendFile(__dirname + '/views/login_page.html');
})

// app.get('/submit', (req, res)=>{
//     const {email, password, name} = req.query;

//     // XSS Sanitization
//     let qry1 = "select * from users where email=? or password=?";
//     mysql.query(qry1, [email, password], (err, results)=>{
//         if(err)
//             throw err;
//         else
//         {
//             if(results.length > 0)
//             {

//             }
//             else
//             {
//                 let qry2 = "INSERT INTO users (name, email, password) VALUES(?, ?, ?, ?)";
//                 mysql.query(qry2, [name, email, password], (err, results) => {
//                     res.send(results);
//                     // res.sendFile(__dirname + '/views/login_page.html');
//                 });
//             }
//         }
//     });
// })

app.post('/submit', (req, res) => {
    const { name, email, confirmEmail, password} = req.body;
  
    if(email !=  confirmEmail)
    {
      notifier.notify({
        title: 'Credential not matched!',
        message: 'emails not matched...',
        sound: true,
        wait: true
      })

      res.sendFile(__dirname + '/views/sign_up_page.html');
    }
    else
    {
      if((email && confirmEmail && password && name) == false)
      {
        notifier.notify({
          title: 'ERROR',
          message: 'please fill all the details...',
          sound: true,
          wait: true
        })

        res.sendFile(__dirname + '/views/sign_up_page.html');
      }
      else
      {

        const qry = 'select * from users where email = ?'
        mysql.query(qry, [email], (err, result)=>{
          if(result.length > 0)
          {
            notifier.notify({
              title: 'Notification',
              message: 'email already exists...',
              sound: true,
              wait: true
            });
            res.sendFile(__dirname + '/views/sign_up_page.html');
          }
          else
          {
            const sql = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`;

            mysql.query(sql, (err, result) => {
            if (err)
            {
              res.status(500).send(err);
            }
            else
            {
              res.status(200).sendFile(__dirname + '/views/login_page.html');
            }
            });
          }
        }) 
      }
    }
  });

  app.post('/check', (req, res) => {
    let email = req.body.loginEmail;
    let password = req.body.loginPassword;

    if(email && password){
      let qry = "select * from users where email = ? and password = ?";
      mysql.query(qry, [email, password], (req, results)=>{
        if(results.length > 0){
          res.sendFile(__dirname + '/views/HomePage.html');
        }
        else{
          notifier.notify({
            title: 'Credential not matched!',
            message: 'Incorrect email or password...',
            sound: true,
            wait: true
          })
          res.sendFile(__dirname + '/views/login_page.html');
        }
      })
    }
    else{
      notifier.notify({
        title: 'ERROR',
        message: 'Please enter email and password...',
        sound: true,
        wait: true
      })
      res.sendFile(__dirname + '/views/login_page.html');
    }
  });


app.listen(5000, (err)=>{
    if(err) throw err;

    console.log("Listening");
});