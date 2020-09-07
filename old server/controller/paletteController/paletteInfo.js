const { Palette } = require('../../models');

module.exports = {
    get: (req, res) => {
        const id = req.params.id;

        //* user 당 팔레트 요청
        if (id) {
            Palette.findAll({
                where: {
                    userId: id,
                },
            })
                .then((data) => {
                    if (data) {
                        res.status(200).send(data);
                        console.log(`${id}의 유저 팔레트입니다.`);
                    } else {
                        res.status(404).send('Bad Request');
                        console.log('404 Error');
                    }
                })
                .catch((err) => {
                    res.status(500).send(err);
                    console.log('500 Error');
                });
        }
        //* 전체 팔레트 요청
        else {
            Palette.findAll()
                .then((data) => {
                    if (data) {
                        res.status(200).send(data);
                        console.log('모든 팔레트가 요청되었습니다.');
                    } else {
                        res.status(404).send('Bad Request');
                        console.log('404 Error');
                    }
                })
                .catch((err) => {
                    res.status(500).send(err);
                    console.log('500 Error');
                });
        }
    },
    updatedGet: (req, res) => {
        //* updatedAt으로 팔레트 요청

        Palette.findAll({
            order: [['updatedAt', 'DESC']],
            limit: 4,
        })
            .then((data) => {
                if (data) {
                    res.status(200).send(data);
                    console.log('최신순으로 팔레트를 불러옵니다.');
                } else {
                    res.status(404).send('Bad Request');
                    console.log('404 Error');
                }
            })
            .catch((err) => {
                res.status(500).send(err);
                console.log('500 Error');
            });
    },
    visitGet: (req, res) => {
        //* visit으로 팔레트 요청

        Palette.findAll({
            order: [['visit', 'DESC']],
            limit: 16,
        })
            .then((data) => {
                if (data) {
                    res.status(200).send(data);
                    console.log('인기순으로 팔레트를 불러옵니다.');
                } else {
                    res.status(404).send('Bad Request');
                    console.log('404 Error');
                }
            })
            .catch((err) => {
                res.status(500).send(err);
                console.log('500 Error');
            });
    },
};
