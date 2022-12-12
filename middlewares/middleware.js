const authorization = (req, res, next) => {
    console.log("middleware called")
    const token = req.headers.access_token;
    try {
        const data = jwt.verify(token, jwttokenKey);
        if(data) {
            next();
        } else {
            res.send("Invalid Token")
        }
    } catch (error) {
        res.status(400).send("Invalid Request")
    }
}
module.exports = authorization;