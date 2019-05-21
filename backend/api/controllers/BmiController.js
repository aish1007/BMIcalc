/**
 * BmiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
calculate0313 : function(req,res){
  var finalbmi, msg;
    var weight = req.body.weight;
    var height = req.body.height;
    
    finalBmi =  Math.floor(weight/(height*height));


return res.send(finalBmi.toString());

}
};

