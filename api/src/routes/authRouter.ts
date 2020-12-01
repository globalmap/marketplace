import express from 'express';
import firebase from '../firebaseConfig';

const router = express.Router();

router.post('/login', (req, res) => {
    const email: string = req.body.email;
    const password: string = req.body.password
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            res.send(user)
        }) 
        .catch(err => {
            res.send(err)
        })
})

router.post('/register', (req, res) => {
    const email: string = req.body.email;
    const password: string = req.body.password;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            res.send(user)
        })
        .catch(err => {
            console.log(err.code)
            res.send(err.code)
        })
})

router.post('/restore', (req, res) => {
    const email: string = req.body.email;

    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            res.send("Check your email")
        })
        .catch((err) => {
            res.send(err)
        })
})

router.get('/signout', (req, res) => {
    firebase.auth().signOut()
        .then(() => {
            res.send("Sign Out succefuly!!")
        })
})

module.exports = router;