
var mongoose = require('mongoose');

var companySchema = mongoose.Schema({
    	industry_code:{
		type: Number,
		required: true
	},
	corporate_name:{
		type: String,
		required:true
	},
	company_DBA:{
		type: String,
		required:true
	},
	corporate_type:{
		type: String,
		required:true
	},
	formation_date:{
		type:Date,
		required:true
	},
	business_description:{
		type:String,
		required:true
	},
	isFranchise:{
		type:Boolean,
		required:true
	},
	franchise_name:{
		type:String,
		required:false
	}
});


var Company = module.exports = mongoose.model('Company', companySchema);


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




