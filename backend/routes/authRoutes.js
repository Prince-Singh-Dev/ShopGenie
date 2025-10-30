import express from "express"
import { login , logout , registration } from "../controller/authcontroller.js"

const authRoutes = express.Router()

authRoutes.post("/registration",registration)
authRoutes.post("/login",login)
authRoutes.get("/logout",logout)
export default authRoutes;