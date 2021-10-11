const router = require('express').Router();

const validator = require('validator');

router.get('/', function (req, res) {
    res.json({content: 'This is the default for calculator, try /calculator/add?a=2&b=3'});
});

router.get('/add', function (req, res) {

    // declare variables for input
    let numA = "";
    let numB = "";

    // validate querystring to ensure valid input
    if (typeof req.query.a !== 'undefined' && typeof req.query.b !== 'undefined') {
        numA = req.query.a;
        numB = req.query.b;
        if (!validator.isNumeric(numA, { no_symbols: true}) || !validator.isNumeric(numB, { no_symbols: true})) {
            res.statusMessage = "Bad Request - incorrect values";
            res.status(400).end();
            return false;
        }
        else{
            numA = Number(req.query.a);
            numB = Number(req.query.b)
        }
    }
    else {
        res.statusMessage = "Bad Request - Missing Parameters";
        res.status(400).end();
    }

    // send back the result as an object in JSON form
    res.json({
        a: numA,
        b: numB,
        sum: numA + numB
    })

})

router.get('/subtract', function (req, res) {

    // declare variables for input
    let numA = "";
    let numB = "";

    // validate querystring to ensure valid input
    if (typeof req.query.a !== 'undefined' && typeof req.query.b !== 'undefined') {
        numA = req.query.a;
        numB = req.query.b;
        if (!validator.isNumeric(numA, { no_symbols: true}) || !validator.isNumeric(numB, { no_symbols: true})) {
            res.statusMessage = "Bad Request - incorrect values";
            res.status(400).end();
            return false;
        }
        else{
            numA = Number(req.query.a);
            numB = Number(req.query.b)
        }
    }
    else {
        res.statusMessage = "Bad Request - Missing Parameters";
        res.status(400).end();
    }

    // send back the result as an object in JSON form
    res.json({
        a: numA,
        b: numB,
        subtraction: numA - numB
    })

})

router.get('/divide', function (req, res) {

    // declare variables for input
    let numA = "";
    let numB = "";

    // validate querystring to ensure valid input
    if (typeof req.query.a !== 'undefined' && typeof req.query.b !== 'undefined') {
        numA = req.query.a;
        numB = req.query.b;
        if (!validator.isNumeric(numA, { no_symbols: true}) || !validator.isNumeric(numB, { no_symbols: true})) {
            res.statusMessage = "Bad Request - incorrect values";
            res.status(400).end();
            return false;
        }
        else{
            numA = Number(req.query.a);
            numB = Number(req.query.b)
        }
    }
    else {
        res.statusMessage = "Bad Request - Missing Parameters";
        res.status(400).end();
    }

    // send back the result as an object in JSON form
    res.json({
        a: numA,
        b: numB,
        division: numA / numB
    })

})

router.get('/multiply', function (req, res) {

    // declare variables for input
    let numA = "";
    let numB = "";

    // validate querystring to ensure valid input
    if (typeof req.query.a !== 'undefined' && typeof req.query.b !== 'undefined') {
        numA = req.query.a;
        numB = req.query.b;
        if (!validator.isNumeric(numA, { no_symbols: true}) || !validator.isNumeric(numB, { no_symbols: true})) {
            res.statusMessage = "Bad Request - incorrect values";
            res.status(400).end();
            return false;
        }
        else{
            numA = Number(req.query.a);
            numB = Number(req.query.b)
        }
    }
    else {
        res.statusMessage = "Bad Request - Missing Parameters";
        res.status(400).end();
    }

    // send back the result as an object in JSON form
    res.json({
        a: numA,
        b: numB,
        multiplication: numA * numB
    })

})

module.exports = router;