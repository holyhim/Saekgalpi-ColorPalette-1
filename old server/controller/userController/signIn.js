const { User } = require('../../models');

module.exports = {
    post: (req, res) => {
        const { email, password } = req.body;
        let session = req.session;
        User.findOne({
            where: {
                email: email,
                password: password,
            },
        })
            .then((data) => {
                if (!data) {
                    res.status(401).send('Email or Password Not Found');
                    console.log('401 Error');
                } else {
                    session.email = email;
                    res.status(200).send(data);
                    console.log('로그인이 되었습니다.');
                }
            })
            .catch((err) => {
                res.status(500).send(err);
                console.log('500 Error');
            });
    },
};
