import { db } from "../connect.js";
import bcrypt from "bcryptjs";
//import jwt from "jsonwebtoken";

export const register = (req, res) => {
    // CHECK IF USER EXISTS
    const selectQuery = "SELECT * FROM users WHERE username = ?";
    db.query(selectQuery, [req.body.username], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length) return res.status(409).json("Este nombre de usuario ya está en uso!");
  
    //   // CREATE A NEW USER
    //   const salt = bcrypt.genSaltSync(10);
    //   const hashedPassword = bcrypt.hashSync(req.body.password, salt);
  
    //   const insertQuery =
    //     "INSERT INTO users (`username`, `email`, `password`, `name`) VALUES (?, ?, ?, ?)";
  
    //   const values = [
    //     req.body.username,
    //     req.body.email,
    //     req.body.password,
    //     //hashedPassword,
    //     req.body.name,
    //  ];
  
    //   db.query(insertQuery, values, (err, data) => {
    //     if (err) return res.status(500).json(err);
    //     return res.status(200).json("Usuario registrado");
    //   });
    });
  };
  

export const login = (req, res) => {

}

export const logout = (req, res) => {

}