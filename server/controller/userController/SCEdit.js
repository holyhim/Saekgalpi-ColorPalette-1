// Changed SignatureColor API

const { User } = require('../../models');

module.exports = {
    post: (req, res) => {
        const id = req.params.id;
        const { signatureColor } = req.body;
        User.update(
            {
                signatureColor: signatureColor,
            },
            {
                where: {
                    id: id,
                },
            }
        )
            .then((data) => {
                if (data) {
                    res.status(200).send(data);
                    console.log('signatureColor가 성공적으로 변경되었습니다.');
                } else {
                    res.status(401).send('need user');
                    console.log('유저가 존재하지 않습니다.');
                }
            })
            .catch((err) => {
                res.status(500).send(err);
                console.log('500 Error');
            });
    },
};
