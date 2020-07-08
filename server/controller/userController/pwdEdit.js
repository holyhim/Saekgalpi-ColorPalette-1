const { User } = require('../../models');
//const Eslintrc = require('../../.eslintrc');

module.exports = {
    post: (req, res) => {
        const id = req.params.id;
        const {
            currentPassword,
            changePassword,
            checkChangePassword,
        } = req.body;
        User.findOne({
            where: {
                id: id,
                password: currentPassword,
            },
        })
            .then((data) => {
                if (data) {
                    if (changePassword === checkChangePassword) {
                        User.update(
                            {
                                password: changePassword,
                            },
                            {
                                where: {
                                    id: id,
                                },
                            }
                        )
                            .then((data) => {
                                res.status(200).send(data);
                            })
                            .catch((err) => {
                                if (err) {
                                    res.status(404).send(err);
                                }
                            });
                    } else if (changePassword !== checkChangePassword) {
                        res.status(401).send('변경할 비밀번호를 확인해주세요.');
                    }
                } else if (!data) {
                    res.status(401).send('아이디, 패스워드를 확인해주세요.');
                }
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    },
};
