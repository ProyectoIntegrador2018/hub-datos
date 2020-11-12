const { Router } = require('express');
const companyController = require('./../controllers/Company');

const router = new Router();

/*
 * COMPANY ROUTES
 * GET      /companies             - Returns all companies
 * POST     /companies             - Creates a new company in the data base.
 */
router.get('/', companyController.getCompanies);
router.post('/', companyController.postCompany);

module.exports = router;