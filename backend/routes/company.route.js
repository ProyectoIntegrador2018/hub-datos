const { Router } = require('express');
const companyController = require('./../controllers/Company');
const { auth, verifyRole } = require("../middleware/auth");

const router = new Router();

/*
 * COMPANY ROUTES
 * GET      /companies             - Returns all companies
 * POST     /companies             - Creates a new company in the data base.
 */
router.get('/', companyController.getCompanies);
router.post('/', auth, verifyRole(["administrador"]), companyController.postCompany);

module.exports = router;