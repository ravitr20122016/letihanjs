const chalk = require('chalk');
const etl = {
easy: '1',
to: '2',
learn: '3',
a:'s'
};

const objectArray = Object.entries(etl);
  
  objectArray.forEach(([key, value]) => {
    console.log(chalk.green(key +" : " +value)); 
    
  });

  console.log(chalk.green("\nJUMLAH KEY ADALAH = "+objectArray.length+"\n"));    
  


