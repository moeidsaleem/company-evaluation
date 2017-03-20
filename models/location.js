
var mongoose = require('mongoose');

var locationSchema = mongoose.Schema({
    	location_id:{
		type: Number,
		index: true,
		unique:true
	},
	location_name:{
		type:String,
		index:true,
		unique:true
	},
	location_type:{
		type: String,
		required:true
	},
	location_address:{
		type: String,
		required:true
	},
	location_city:{
		type: String,
		required:true
	},
	location_state:{
		type: String,
		required:true
	},
	location_zip:{
		type: String,
		required:true
	},
	location_isOwned:{
		type: Boolean,
		required:true
	},
	report_id:{
		type:mongoose.model.types.ObjectId,
		ref:'Report',
		index:true
	}
});


var Location = module.exports = mongoose.model('Location', locationSchema);


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




