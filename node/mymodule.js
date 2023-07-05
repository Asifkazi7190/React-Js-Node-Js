function getCurrentDate()
{
    var date = new Date();
    var currentdate = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    return currentdate;
}
module.exports.getDate = getCurrentDate;