const { Palette, User } = require('../../models');

module.exports = {
    post: (req, res) => {
        const {
            paletteName,
            description,
            colorCode01,
            colorCode02,
            colorCode03,
            colorCode04,
            colorCode05,
            colorCode06,
            colorCode07,
        } = req.body;
        const { id } = req.params;
        User.findOne({
            where: {
                id,
            },
        })
            .then((data) => {
                if (data) {
                    Palette.create({
                        paletteName,
                        description,
                        colorCode01,
                        colorCode02,
                        colorCode03,
                        colorCode04,
                        colorCode05,
                        colorCode06,
                        colorCode07,
                    });
                }
            })
            .then((result) => {
                if (result) {
                    res.status(200).send(result);
                } else {
                    res.status(404).send('Bad Request');
                    alert('잘못 된 요청입니다');
                }
            })
            .catch((err) => {
                if (err) {
                    res.status(500).send('Errror');
                }
            });
    },
};
