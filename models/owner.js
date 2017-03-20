
var mongoose = require('mongoose');

var ownerSchema = mongoose.Schema({
    	industry_code:{
		type: Number,
		required: true
	},
	owner_name:{
		type: String,
		required:true
	},
	percent_owned:{
		type: String,
		required:true
	},
	roles:{
		type: String,
		required:true
	},
	report_id:{
		type:mongoose.model.types.ObjectId,
		ref:'Report'
	}
});


var Owner = module.exports = mongoose.model('Owner', ownerSchema);


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




