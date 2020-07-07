const { Palette } = require('../../models');

module.exports = {
    post: (req, res) => {
        const id = req.params.id;
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
        Palette.create({
            userId: id,
            paletteName,
            description,
            colorCode01,
            colorCode02,
            colorCode03,
            colorCode04,
            colorCode05,
            colorCode06,
            colorCode07,
        })
            .then((result) => {
                if (result) {
                    res.status(200).send(result);
                } else {
                    res.status(404).send('Bad Request');
                    alert('잘못된 요청입니다');
                }
            })
            .catch((err) => {
                if (err) {
                    res.status(500).send('Errror');
                }
            });
    },
};
