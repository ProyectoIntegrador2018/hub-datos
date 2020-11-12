const companyModel = require("./../models/Company.model");

const getCompanies = async (req, res) => {
    try {
        const universities = await companyModel.find({});
        return res.status(200).json(universities);
    } catch(e) {
        res.statsMessage = 'Ocurrio un error por favor intentelo de nuevo';
        return res.status(500);
    }
};

const postCompany = async (req, res) => {
    const company = new companyModel();
    company.name = req.body.name;
    try {
        await company.save();
        return res.status(201).json(company);
    } catch(e) {
        res.statsMessage = 'Ocurrio un error por favor intentelo de nuevo';
        return res.status(500).json(e);
    }
};

module.exports = {
    getCompanies,
    postCompany
}