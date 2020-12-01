"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var firebaseConfig_1 = __importDefault(require("../firebaseConfig"));
var router = express_1.default.Router();
router.post('/login', function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    firebaseConfig_1.default.auth().signInWithEmailAndPassword(email, password)
        .then(function (user) {
        res.send(user);
    })
        .catch(function (err) {
        res.send(err);
    });
});
router.post('/register', function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    firebaseConfig_1.default.auth().createUserWithEmailAndPassword(email, password)
        .then(function (user) {
        res.send(user);
    })
        .catch(function (err) {
        console.log(err.code);
        res.send(err.code);
    });
});
router.post('/restore', function (req, res) {
    var email = req.body.email;
    firebaseConfig_1.default.auth().sendPasswordResetEmail(email)
        .then(function () {
        res.send("Check your email");
    })
        .catch(function (err) {
        res.send(err);
    });
});
router.get('/signout', function (req, res) {
    firebaseConfig_1.default.auth().signOut()
        .then(function () {
        res.send("Sign Out succefuly!!");
    });
});
module.exports = router;
