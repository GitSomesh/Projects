var userModel = require('./userModel');

module.exports.getDataFromDBService =() =>{

    return new Promise(function checkUrl(resolve,reject){
        
        userModel.find({},function returnData(error,result){

            if(error){
                reject(false);
            }
            else{
                resolve(result);
            }
            
        });
    });
}
module.exports.createUserDBService =(userDetails) =>{

    return new Promise(function myFun(resolve,reject){

        var userModelData= new userModel();

        userModelData.fullname = userDetails.fullname;
        userModelData.enrollmentno = userDetails.enrollmentno;
        userModelData.email = userDetails.email;
        userModelData.phonenumber = userDetails.phonenumber;
        userModelData.password = userDetails.password;
        userModelData.gender = userDetails.gender;

       



        userModelData.save(function resultHandle(error,result){

            if(error){
                reject(false);
            }
            else{
                resolve(result);
            }
            
        });
    });
}
