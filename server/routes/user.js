const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

// * POST /userController/signIn
router.post('/signIn', userController.signIn.post);

// * POST /userController/signOut
router.post('/signOut', userController.signOut.post);

// * POST /userController/signUp
router.post('/signUp', userController.signUp.post);

// * GET /userController/userInfo
router.get('/userInfo', userController.userInfo.get);

// * GET /userController/SCEdit
//router.get('/changeSignatureColor/:id', userController.SCEdit.get);

// * POST /userController/pwdEdit
router.post('/changePassword/:id', userController.pwdEdit.post);

// * GET /userController/admin
//router.get('', userController.admin.get);

// * POST /userController/admin
//router.post('', userController.admin.post);

// admin 관련 url은 admin page가 존재하지 않아서 공란으로 두었습니다.

module.exports = router;
