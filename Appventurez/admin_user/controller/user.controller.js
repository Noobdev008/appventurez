const {
    create,
    createAdmin,
    getUserById,
    getUser,
    updateUser,
    deleteUser,
    getUserByEmail,
    updateJWT,
    logout,
    resetPassword,
} = require('.././model/user.model');

const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');

module.exports = {
    createUser: (req, res) => {
        // console.log('logcontroller');
        const body = req.body;
        // const bodyType = req.body.UserType;
        const bodyEmail = req.body.Email;
        // console.log(req.body.Password);
        // console.log(body +" "+ req.body[0]);
        body.Password = bcrypt.hashSync(body.Password, 10);
        const jsontokenreg = sign({ type: "user", email: bodyEmail }, "SECRET_KEY", { expiresIn: "300h" });
        body.JWT = jsontokenreg
        // console.log(body.password)

        create(body, (err, results) => {
            console.log('inmodel');
            if (err) {
                console.log("User Controller: " + err);
                return res.status(500).json({
                    success: 0,
                    message: "Database Connection Error"
                })
            }

            return res.status(200).json({
                success: 1,
                data: results,
                token: jsontokenreg
            })
        })
    },
    createAdmin: (req, res) => {
        console.log('logcontroller');
        const body = req.body;
        // const bodyType = req.body.UserType;
        const bodyEmail = req.body.Email;
        // console.log(req.body.Password);
        // console.log(body +" "+ req.body[0]);
        body.Password = bcrypt.hashSync(body.Password, 10);
        const jsontokenreg = sign({ type: "admin", email: bodyEmail }, "SECRET_KEY", { expiresIn: "300h" });
        body.JWT = jsontokenreg
        // console.log(body.password)

        createAdmin(body, (err, results) => {
            // console.log('inmodel');
            if (err) {
                console.log("User Controller: " + err);
                return res.status(500).json({
                    success: 0,
                    message: "Database Connection Error"
                })
            }

            return res.status(200).json({
                success: 1,
                data: results,
                token: jsontokenreg
            })
        })
    },
    getUserById: (req, res) => {
        const id = req.params.id;
        getUserById(id, (err, results) => {
            if (err) {
                console.log(err)
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not found",
                });
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },
    getUser: (req, res) => {
        getUser((err, results) => {
            if (err) {
                console.log(err);
                return
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },
    updateUser: (req, res) => {
        // body.Password = bcrypt.hashSync(body.Password, 10);;
        // console.log(body.Password);
        const bodyType = req.body.UserType;
        const bodyEmail = req.body.Email;
        // console.log(req.body.Password);
        // console.log(body +" "+ req.body[0]);
        body.Password = bcrypt.hashSync(body.Password, 10);
        const jsontokenreg = sign({ bodyType, bodyEmail }, "SECRET_KEY", { expiresIn: "300h" });
        body.JWT = jsontokenreg
        updateUser(req.body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Failed to updateUser"

                })
            }
            return res.json({
                success: 1,
                message: "Update Success",
                // token:jsontokenreg
            });
        });
    },
    deleteUser: (req, res) => {
        const data = req.body;
        deleteUser(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (typeof results === Object) {
                return res.json({
                    success: 0,
                    message: "Record Not Found",
                })
            }
            return res.json({
                success: 1,
                message: "User Delete Successfully",
            })
        });
    },
    login: (req, res) => {
        const body = req.body;
        // console.log(body);
        getUserByEmail(body.Email, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: 0,
                    data: 'Invalid email address or password'
                });
            }
            // console.log(results.Password+ " results");
            // console.log(body.Password + " password");
            // body.Password = bcrypt.hashSync(body.Password, 10);
            // console.log(body.Password + " password2");
            // console.log(results.Password + " results");
            // const result = bcrypt.compareSync(body.Password,results.Password);
            // console.log(result +" result");
            if (results) {
                // results.Password = undefined;
                const jasontoken = sign({ result: results }, "SECRET_KEY", { expiresIn: "300h" });
                updateJWT(body.Email, jasontoken, (err, results) => {
                    if (err) {
                        res.send({ err: " updateJWT failed" });
                    }
                    res.send({
                        login: "Login Sucessfully",
                        token: jasontoken

                    });
                })
            } else {
                return res.json({
                    success: 0,
                    data: "Invalid email address or password"
                })
            }
        })
    },
    userLogout: (req, res) => {
        // try {
        //     const token = '';
        //      create(token);
        //     res.send("User Lougout Sucessfully");
        // } catch (err) {
        //     console.log(err);
        // }
        // res.send("Hi")
        // console.log(req.body.Email + " from LOGOUT");
        logout(req.body.Email, req.body.JWT, (err, data) => {
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).send({ success: true, message: "Logout Successfully", data });
            }
        });
    },
    resetPassword: (req, res) => {
        // console.log(req.body.Password+" "+req.body.ID);
        let bodyPasswords = req.body.Password;
        console.log(bodyPasswords + " password");
        bodyPasswords = bcrypt.hashSync(bodyPasswords, 10);
        console.log(bodyPasswords + " passwordHash");
        resetPassword(bodyPasswords, req.body.ID, (err, data) => {
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).send({
                    success: true,
                    message: "Password Reset Successfully",
                    // password: Password
                });
            }
        })
    }

}