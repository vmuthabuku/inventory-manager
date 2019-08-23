const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const config = require('./config/config').get(process.env.NODE_ENV)

mongoose.Promise = global.Promise
mongoose.connect(config.DATABASE, { useNewUrlParser: true })

const { User } = require('./models/user')
const { Car } = require('./models/car')
const { auth } = require('./middleware/auth')

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.post("/api/register", (req, res) => {
    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            success: true,
            user: doc
        })
    })
})

// LOGIN USER
app.post('/api/login',(req,res)=>{
    User.findOne({'email':req.body.email},(err,user)=>{
        if(!user) return res.json({isAuth:false,message:'Auth failed, email not found'})

        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({
                isAuth:false,
                message:'Wrong password'
            });

            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);
                res.cookie('auth',user.token).json({
                    isAuth:true,
                    id:user._id
                })
            })
        })
    })
})

// GET SPECIFIC USER
app.get('/api/getUser',(req,res)=>{
    let id = req.query.id;

    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            name: doc.name,
            lastname: doc.lastname
        })
    })
})

// GET ALL USERS
app.get('/api/users',(req,res)=>{
    User.find({},(err,users)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(users)
    })
})

// GET USER POSTS
app.get('/api/user_posts',(req,res)=>{
    Car.find({ownerId:req.query.user}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})

// app.get('/api/user_posts',(req,res)=>{
//     Car.find({ownerId:req.query.user},(err,docs)=>{
//         if(err) return res.status(400).send(err);
//         res.send(docs)
//     })
// })

// LOG OUT
app.get('/api/auth',auth,(req,res)=>{
    res.json({
        isAuth:true,
        id:req.user._id,
        email:req.user.email,
        name:req.user.name,
        lastname:req.user.lastname,
        token:req.user.token
    })
});


app.get('/api/logout',auth,(req,res)=>{
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200)
    })
})

app.get("/api/getcar", (req, res) => {
    const id = req.query.id

    Car.findById(id, (err, doc) => {
        if (err) return res.status(400).send(err);
        return res.send(doc)
    })
})

// GET ALL WITH LIMIT
app.get("/api/getcars", (req, res) => {
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let order = req.query.order;

    Car.find().skip(skip).sort({ _id: order }).limit(limit).exec((err, doc) => {
        if (err) return res.status(400).send(err);
        res.send(doc);
    })
})

// POST A CAR
app.post("/api/car", (req, res) => {
    const car = new Car(req.body)

    car.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            success: true,
            gameId: doc._id,
            post:doc
        })

    })
})

// UPDATE A CAR
app.post("/api/car_update", (req, res) => {
    Car.findByIdAndUpdate(req.body._id, req.body, { new: false }, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json({
            success: true,
            doc
        })


    })
})

// DELETE A CAR
app.delete("/api/delete_car", (req, res) => {
    let id = req.query.id
    Car.findByIdAndRemove(id,{ useFindAndModify: false }, (err, doc) => {
        if (err) return res.status(400).send(err)
        res.json({
            success: true,
            doc
        })
    })
})
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("Server is active")
})



