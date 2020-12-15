const etl = {
easy: '1',
to: '2',
learn: '3',
a:'s'
};

const objectArray = Object.entries(etl);
  
  objectArray.forEach(([key, value]) => {
    console.log(key +" : " +value); // 'one'
    
  });

