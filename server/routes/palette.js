const express = require('express');
const router = express.Router();

const paletteController = require('../controller/paletteController');

// * POST /colorController/paletteCreate
router.post('/makePalette', paletteController.paletteCreate.post);

// * POST /colorController/paletteDrop
router.post('/paletteDetail/:id', paletteController.paletteDrop.post);

// * POST /colorController/paletteEdit
router.post('/editPalette/:id', paletteController.paletteEdit.post);

// * GET /colorController/paletteInfo
router.get(
    ['/', '/admin', '/paletteDetail/:id', '/allPalette', '/editPalette/:id'],
    paletteController.paletteInfo.get
);
// * updateGet
router.get('/', paletteController.paletteInfo.updatedGet);

// *  visitGet
router.get('/', paletteController.paletteInfo.visitGet);

// * GET /colorController/visitCheck
router.get('/paletteDetail/:id', paletteController.visitCheck.get);

module.exports = router;
