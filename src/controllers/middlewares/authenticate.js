const authentication = async (req, res, next) => {
    //your auth code for authentication for now just writing the dummy check

    if(1==1){
        next()
    }else{
        return res.status(401).send({
            sucess: false,
            message: "Invalid User"
        });
    }
};

module.exports = authentication;