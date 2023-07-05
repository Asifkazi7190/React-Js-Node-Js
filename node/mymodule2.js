var log = {
    info : function(message)
    {
        console.log("info",message);
    }
    ,
    warning : function(message)
    {
        console.log("warning",message);
    }
    ,
    error : function(message)
    {
        console.log("error",message);
    }
}
module.exports = log;