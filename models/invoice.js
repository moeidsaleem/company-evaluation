
var mongoose = require('mongoose');

var invoiceSchema = mongoose.Schema({
	income_statement_id:{
		type:Number,
		index:true,
		unique:true

	},
	year:{
		type:Number,
		required:true
	},
	revenue:{
		type:Number,
		required:true
	},
	profit:{
		type:Number,
		required:true
	},
	interest:{
		type:Number,
		required:true
	},
	depreciation:{
		type:Number,
		required:true
	},
	year:{
		type:Number,
		required:true
	},
	amortization:{
		type:Number,
		required:true
	},
	officer_comp:{
		type:Number,
		required:true
	},
	weight:{
		type:String,
		required:true
	},
	report_id:{
		type:mongoose.model.types.ObjectId,
		ref:'Report',
		index:true
	}
    	
});


var Invoice = module.exports = mongoose.model('Invoice', invoiceSchema);


// Get Companies
module.exports.getCompanies = function(callback, limit){
	Company.find(callback).limit(limit).sort([['corporate_name', 'ascending']]);
}

// Add Company
module.exports.addCompany = function(company, callback){
	var add = {
		industry_code:company.industry_code,
  		 corporate_name:company.corporate_name,
  		company_DBA:company.company_DBA,
  		corporate_type:company.corporateType,
  		formation_date:company.formationDate,
  		business_description:company.businessDescription,
  		isFranchise:company.isFranchise,
  		franchise_name:company.franchise_name
	}
	Company.create(add, callback);
}




