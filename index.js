const express = require('express')
const userSchema = require('./model/userSchema')
const app = express()
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const testMiddleware = require('./middleware/testMiddleware')
const port = 3000
app.use(express.json())


//mongoose connect
//connect korte import korte hobe mongoose

mongoose.connect('mongodb+srv://exNodejs:rita@expressnodejs.s97scz6.mongodb.net/JWT?appName=expressNodejs')
  .then(() => console.log('Connected!'));
  
  //akta cluster a arekta project nibo sudu database name change korte hobe r collection name ta schema file thake baki ta same to same rakle e hobe
//mongoose connect

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//post method use korsi tai ai khane middleware dite hoi

// database a data send
app.post('/users', (req, res) => {
    
  res.send('connected!')
  const{name, email, password} = req.body
  //req.body ar pore e token dite hobe
  const token = jwt.sign({ id: 'email' }, 'rita');
  const user = new userSchema({
    name:name,
    email:email,
    password:password,
    token : token,
  })
  console.log(token)
  user.save()
});

// database a data send
//database ar data dekte
//testMiddleware file async ar pase dite hobe na hole file ar data asbe but pore ai file ar data show hobe na

app.get('/users', testMiddleware, async(req, res) => {
  const users = await userSchema.find({})
  res.send(users)
})

//database ar data dekte


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
