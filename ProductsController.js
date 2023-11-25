'use strict'

const util = require('util')
const db = require('./db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM products'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response["rows"])
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM products WHERE id = ' + req.params.productId
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response["rows"])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let productId = req.params.productId;
        let sql = "UPDATE products SET name = \'" + data.name + "\', color = \'" + data.color + "\', price = \'" + data.price + "\' WHERE id = " + req.params.productId;
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO products VALUES (' + data.id + ", \'" + data.name + "\', \'" + data.color + "\', \'" + data.price + "\')"
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM products WHERE id = ' + req.params.productId;
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}
