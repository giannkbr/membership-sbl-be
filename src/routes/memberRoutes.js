const express = require('express');
const { body } = require('express-validator');
const memberController = require('../controller/memberController');
const router = express.Router();

const memberValidationRules = [
  body('fullName').notEmpty().withMessage('Full name is required'),
  body('placeOfBirth').notEmpty().withMessage('Place of birth is required'),
  body('dateOfBirth').isDate().withMessage('Date of birth must be a valid date'),
  body('phoneNumber').isNumeric().withMessage('Phone number must be numeric'),
  body('email').isEmail().withMessage('Email must be valid'),
  body('address').notEmpty().withMessage('Address is required'),
  body('province').notEmpty().withMessage('Province is required'),
  body('city').notEmpty().withMessage('City is required'),
  body('gender').notEmpty().withMessage('Gender is required'),
  body('occupation').notEmpty().withMessage('Occupation is required'),
  body('maritalStatus').notEmpty().withMessage('Marital status is required'),
];

router.post('/members', memberValidationRules, memberController.createMember);
router.get('/members', memberController.getAllMembers);
router.get('/members/:id', memberController.getMemberById);
router.put('/members/:id', memberValidationRules, memberController.updateMember);
router.delete('/members/:id', memberController.deleteMember);

module.exports = router;
