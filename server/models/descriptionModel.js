// Este archivo contiene todas las queries a la BD
const { db } = require('../config/db');
const res = require("express/lib/response");
const {response} = require("express");

const getDescriptionbyID = async (id) =>{
    try{
        const query = 'SELECT U.name, d.description, d.prescription FROM users U JOIN description d ON U.id = d.userd_id WHERE U.id = $1;'
        const { rows } = await db.query(query, [id]);
        return rows;
    } catch (error){
        console.log(error);
        throw new Error(error);

    }
}

const createDescription = async(description, prescription, userID) =>{
    try{
        const query =
        'INSERT INTO description(description, prescription, userd_id) VALUES ($1, $2, $3) RETURNING *;';
        const { rows } = await db.query(query, [description, prescription, userID]);
        return rows[0];
    } catch(error){
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {getDescriptionbyID, createDescription};