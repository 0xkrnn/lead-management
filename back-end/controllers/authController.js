const bcrypt = require("bcrypt")
const authModel = require("../model/userAuth");
const jwt = require("jsonwebtoken");
require("dotenv").config()


const handleRegister = async (req, res) => {

    try {

        const exist = await authModel.findOne({ email: req.body.email })
        console.log(exist)

        if (!exist) {
            const hashedPwd = await bcrypt.hash(req.body.password, 10)

            const user = await new authModel({
                email: req.body.email,
                password: hashedPwd
            });

            await user.save()
            return res.status(201).json({ success: "created" });

        } else {
            res.status(400).json({ "message": "email already exists" })
        }

    } catch (err) {
        console.log(err)
        res.json({ "error": err.message })
    }

}

const handleLogin = async (req, res) => {

    const user = await authModel.findOne({ email: req.body.email });

    if (!user) {
        return res.status(400).json({ "message": "unauthorized" });
    } else {
        const match = await bcrypt.compare(req.body.password, user.password)
        if (match) {
            const accessToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
            console.log(accessToken);
            // res.setHeader("set-cookie",`jwt=${accessToken}`);
            res.cookie("jwt",accessToken,{"http-Only" : false,"sameSite":"none",secure:true})
            return res.status(200).json({ "message": "logged In" })
        } else {
            return res.status(401).json({ "message": "email and password doesn't match " })
        }
    }
}

module.exports = {
    handleRegister,
    handleLogin
}