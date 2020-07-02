const express = require('express');
const router = express.Router();

const { colorController } = require('../controller/colorController');

// * POST /colorController/colorCreate
router.post('/makePalette', colorController.colorCreate.post);

// * POST /colorController/colorDrop
router.post(['/MyPage', '/admin'], colorController.colorDrop.post);

// * POST /colorController/colorEdit
router.post('/editPalette/:id', colorController.colorEdit.post);

// * GET /colorController/colorInfo
router.get(
  ['/', '/paletteDetail/:id', '/allPalette', '/editPalette/:id'],
  colorController.colorInfo.get
);

// * GET /colorController/visitCheck
router.get(['/', '/paletteDetail/:id'], colorController.visitCheck.get);

module.exports = router;
