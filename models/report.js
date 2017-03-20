
var mongoose = require('mongoose');

var reportSchema = mongoose.Schema({
	report_id:{
		type:Number,
		index:true,
		unique:true
	},
	user_id:{
		type:mongoose.Schema.types.ObjectId,
		ref:'User',
		index:true
	},
	naics_code:{
		type:mongoose.Schema.types.ObjectId,
		ref:'Naics_full',
		index:true
	},
	company_name:{
		type:String,
		required:true
	},
	company_dba:{
		type:String,
		required:true
	},
	company_type:{
		type:String,
		required:true
	},
	company_dof:{
		type:Date,
		required:true
	},
	company_desc:{
		type:String
	},
	is_franchise:{
		type:Boolean
	},
	franchise_id:{
		type:mongoose.Schema.types.ObjectId,
		ref:'Franchise',
		index:true
	},
	start_year:{
		type:Number
	},
	diversification_risk:{
		type:Number
	},
	personal_goodwill:{
		type:Number
	},
	competition_risk:{
		type:Number
	},
	management_risk:{
		type:Number
	}    	
});


var Report = module.exports = mongoose.model('Report', reportSchema);


// Get All Reports
module.exports.getReports = function(callback, limit){
	Company.find(callback).limit(limit).sort([['company_name', 'ascending']]);
}

// Add Report
module.exports.addReport = function(company, callback){
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




