var express = require('express');
var router = express.Router();

// Models
Company = require('../models/company.js');



// Get all Companies Data 
router.get('/', function(req, res){
	Company.getCompanies(function(err, companies){
		if(err){
			res.send(err);
		}
		res.json(companies);
	});
});



// Add Invoice
router.post('/', function(req, res){
	var company = req.body;
	Company.addCompany(company, function(err, company){
		if(err){
			res.send(err);
		}
		res.json(company);
	});
});


module.exports = router;
