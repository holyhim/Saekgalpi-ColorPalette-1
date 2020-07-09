const { User } = require('../../models');

module.exports = {
    post: (req, res) => {
        const {
            userName,
            signatureColor,
            email,
            password,
            checkPassword,
        } = req.body;
        User.findOne({
            where: {
                userName: userName,
                email: email,
            },
        })
            .then((data) => {
                if (data) {
                    res.status(401).send('Username, Email Check');
                    console.log('이메일, 닉네임 확인해주세요.');
                } else if (!data) {
                    if (password !== checkPassword) {
                        res.status(401).send('Password Not Equle');
                        console.log('패스워드 확인하세요.');
                    } else if (password === checkPassword) {
                        User.create({
                            userName: userName,
                            signatureColor: signatureColor,
                            email: email,
                            password: password,
                        })
                            .then((data) => {
                                res.status(200).send(data);
                                console.log('가입되었습니다.');
                                //res.redirect('/user/signIn');
                            })
                            .catch((err) => {
                                res.status(500).send(err);
                                console.log('500 Error');
                            });
                    }
                }
            })
            .catch((err) => {
                res.status(500).send(err);
                console.log('500 Error');
            });
    },
};
