 
var mongoose = require('mongoose');

var balanceSheetSchema = mongoose.Schema({
    	balance_sheet_id:{
		type: Number,
		index:true,
		unique:true
	},
	cash:{
		type: Number,
		required:true
	},
	ar:{
		type: Number,
		required:true
	},
	inventory:{
		type: Number,
		required:true
	},
	other_current_assets:{
		type: Number,
		required:true
	},
	fixed_assets_cost:{
		type: Number,
		required:true
	},
	accum_depreciation:{
		type: Number,
		required:true
	},
	other_assets:{
		type: String,
		required:true
	},
	ap:{
		type: Number,
		required:true
	},
	short_term_notes:{
		type: Number,
		required:true
	},
	other_current_liabilities:{
		type: Number,
		required:true
	}
	corporate_type:{
		type: String,
		required:true
	},
	long_term_debt:{
		type: Number,
		required:true
	}
});


var Balance_sheet = module.exports = mongoose.model('Balance_sheet', companySchema);


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




