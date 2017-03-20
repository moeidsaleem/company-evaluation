
var mongoose = require('mongoose');

var adjustmentSchema = mongoose.Schema({
    	adjustment_id:{
		type: Number,	
		index:true
	},
	income_statement_id:{
		type: mongoose.model.types.ObjectId,
		ref:'Income_statement',
		index:true
	},
	adj_type:{
		type: String,
		required:true
	},
	adj_name:{
		type: String,
		required:true
	},
	adj_amount:{
		type:Number,
		required:true
	}
});


var Adjustment = module.exports = mongoose.model('Adjustment', adjustmentSchema);


// // Get Companies
// module.exports.getCompanies = function(callback, limit){
// 	Company.find(callback).limit(limit).sort([['corporate_name', 'ascending']]);
// }

// Add Company
module.exports.addAdjustment = function(company, callback){
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




