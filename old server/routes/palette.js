const express = require('express');
const router = express.Router();

const paletteController = require('../controller/paletteController');

// * POST /colorController/paletteCreate
router.post('/makePalette', paletteController.paletteCreate.post);

// * POST /colorController/paletteDrop
router.post(
    ['/admin', '/paletteDetail/:id'],
    paletteController.paletteDrop.post
);

// * POST /colorController/paletteEdit
router.post('/editPalette/:id', paletteController.paletteEdit.post);

// * GET /colorController/paletteInfo
router.get(
    [
        '/MyPage/:id',
        '/admin',
        '/paletteDetail/:id',
        '/allPalette',
        '/editPalette/:id',
    ],
    paletteController.paletteInfo.get
);
// * updateGet
router.get('/updateGet', paletteController.paletteInfo.updatedGet);

// *  visitGet
router.get('/visitGet', paletteController.paletteInfo.visitGet);

// * GET /colorController/visitCheck
router.get('/paletteDetailVisit/:id', paletteController.visitCheck.get);

module.exports = router;
