// Este archivo contiene todas las queries a la BD
const { db } = require('../config/db');
const res = require("express/lib/response");
const {response} = require("express");

const getfeedbackbyID = async (id) =>{
    try{
        const query = 'SELECT U.name, f.feedback FROM users U JOIN feedback f ON U.id = f.user_id WHERE U.id = $1;'
        const { rows } = await db.query(query, [id]);
        return rows;
    } catch (error){
        console.log(error);
        throw new Error(error);

    }
}

const createFeedback = async(feedback, userID) => {
    try{
        const query = "INSERT INTO feedback (feedback, user_id) VALUES($1, $2) RETURNING *";
        const { rows } = await db.query(query, [feedback, userID]);
        return rows[0];

    } catch(error){
        console.log(error);
        throw new(error);
    }
}

module.exports = {getfeedbackbyID, createFeedback};