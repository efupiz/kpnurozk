const cron = require("node-cron");
let shell = require("shelljs");

const PORT =process.env.PORT || 3001;

cron.schedule("* * * * *", function(){
    if(shell.exec("node parsS.js").code !== 0){}
});

cron.schedule("* * * * *", function(){
    if(shell.exec("node parsN.js").code !== 0){}
});

cron.schedule("* * * * *", function(){
    if(shell.exec("node parsSTitle.js").code !== 0){}
});

