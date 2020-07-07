const express = require('express');
const router = express.Router();

const paletteController = require('../controller/paletteController');

// * POST /colorController/colorCreate
router.post('/makePalette', paletteController.paletteCreate.post);

// * POST /colorController/colorDrop
router.post(
  ['/MyPage', '/admin', 'paletteDetail/:id'],
  paletteController.paletteDrop.post
);

// * POST /colorController/colorEdit
router.post('/editPalette/:id', paletteController.paletteEdit.post);

// * GET /colorController/colorInfo
// router.get(
//   ['/', '/paletteDetail/:id', '/allPalette', '/editPalette/:id'],
//   paletteController.paletteInfo.get
// );

// * GET /colorController/visitCheck
//router.get(['/', '/paletteDetail/:id'], paletteController.visitCheck.get);

module.exports = router;
