// IMPORT EXPRESS SERVER
const express = require('express');

// USE Router FOR EXPRESS SERVER
const router = express.Router();

//IMPORT EMPLOYEE MODEL AND BIND IT
const EmpModel = require('../models/employee_schema');

// URL :- localhost:4500/emp/register  (USING POSTMAN POST)
/*
{
  "empname": "Chandan",
  "empemail": "chan@gmail.com",
  "empmobile": "9831125144",
  "empdob": "05/09/1984",
  "emppass": "abcd",
  "empgender": "Male",
  "empcountry": "India",
  "empaddress": "Kol",
}
*/
// post is used to INSERT DOCUMENT/RECORD
// CALLBACK using lambda 
router.post('/register', (req, res) => 
                 {
                    
//Create Object of Employee Model Class
// And Receive value from request body and Store value within the Object
                   const empobj = new EmpModel({
                                 empname: req.body.empname,
                                 empemail: req.body.empemail,
                                 empmobile: req.body.empmobile,
                                 empdob: req.body.empdob,
                                 emppass: req.body.emppass,
                                 empgender: req.body.empgender,
                                 empcountry: req.body.empcountry,
                                 empaddress: req.body.empaddress,
                                 });//CLOSE EmpModel
     //INSERT/SAVE THE RECORD/DOCUMENT
                   empobj.save()
                         .then(inserteddocument => {
    res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' +'<br\>'+ inserteddocument);
                               })//CLOSE THEN
                         .catch(err =>{
    res.status(500).send({ message: err.message || 'Error in Employee Save '})
                               });//CLOSE CATCH
                            }//CLOSE CALLBACK FUNCTION BODY Line 27
                            );//CLOSE POST METHOD Line 26


//SHOULD BE EXPORTED
module.exports = router;