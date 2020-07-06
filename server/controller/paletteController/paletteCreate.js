const { Palette } = require('../../models');

module.exports = {
    post : (req, res) => {
        const { paletteName, description, colorCode } = req.body
        Palette.findOrCreate({
            where: {
                userId,
            },
            defaults : {
                paletteName,
                description,
                colorCode,
           }
        })
        .then((data) => {
            if (data) {
                res.status(200).send(data);
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
    }
}