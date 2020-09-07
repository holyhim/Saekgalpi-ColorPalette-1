const { User } = require('../../models');

module.exports = {
    get: (req, res) => {
        const email = req.session.email;
        if (email) {
            User.findOne({
                where: {
                    email: email,
                },
            })
                .then((data) => {
                    if (data) {
                        res.status(200).send(data);
                        console.log('마이페이지 정보를 불러왔습니다.');
                    } else {
                        res.status(401).send('need user');
                        console.log('유저가 존재하지 않습니다.');
                    }
                })
                .catch((err) => {
                    res.status(500).send(err);
                    console.log('500 Error');
                });
        }
    },
};
