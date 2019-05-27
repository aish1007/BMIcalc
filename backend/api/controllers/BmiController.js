/**
 * BmiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
calculate313 : function(req,res){
  var finalbmi, msg, cssclass ;
    var weight = req.body.weight;
    var height = req.body.height;


if(weight > 0 && height > 0){	
 finalbmi = Math.floor(weight/(height*height));
if(finalbmi < 18.5){
msg = "You are underweight.";
cssclass = "text-warning";
}
if(finalbmi > 18.5 && finalbmi < 25){
msg = "You are healthy";
cssclass = "text-success";

}
if(finalbmi > 25){
bmi = " Your bmi is" + finalbmi;
msg = "You are obese";
cssclass = "text-danger";
}
}
else{
finalbmi = "";
msg = "Your details are incorrect. Please Fill in everything correctly",
cssclass = "text-danger";
}

return res.json({
 bmival : finalbmi,
 message : msg,
 css : cssclass
});

}
};

