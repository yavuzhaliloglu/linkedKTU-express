const jwt = require('jsonwebtoken');

const createLoginToken = (user, res) => {
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
        },
        process.env.JWT_ACCESS_SECRET,
        {
            expiresIn: '24h',
        },
    );
    res.header('token', token);

    return token;
};

module.exports = { createLoginToken };
