var converter = {
    rupeesToDoller : function(rupees)
    {
        var doller = rupees / 81.96;
        console.log ("Doller is",doller);
    }
    ,
    rupeesToEuro : function(rupees)
    {
        var euro = rupees / 89.59;
        console.log("Euro is",euro)
    }
    ,
    rupeestoDirham : function(rupees)
    {
        var dihram = rupees / 22.31;
        console.log("Dihram is",dihram);
    }
}
module.exports = converter