const express = require('express')
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors')
const knex = require('knex')

const register = require('./controllers/register')
const signin = require('./controllers/signin')
const profile = require('./controllers/profile')
const image = require('./controllers/image')
const sentiment = require('./controllers/movieReview')
const news = require('./controllers/news')

const db = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
          }
    }
});


const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) =>{
    res.json("It is working")
})

app.post('/signin', (req, res) => {signin.handleSignin(req, res, db, bcrypt)})

app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)})

app.get('/profile/:id', (req, res) => {profile.handleProfileGet(req, res, db)})

app.put('/image', (req, res) => {image.handleImagePut(req, res, db)})
app.post('/imageurl', (req, res) => {image.handleApiCall(req, res)})

app.post('/sentiment', (req, res) => {sentiment.handleApiCall(req, res)})

app.post('/news', (req, res) => {news.handleApiCall(req, res)})

app.listen(process.env.PORT || 3000, ()=>{
    console.log('app running on port ${process.env.PORT}')
})