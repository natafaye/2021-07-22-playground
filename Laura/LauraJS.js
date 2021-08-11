var currentCupsOfRice = 0;
var requiredCupsOfRice = 10;
do{
   console.log('The bowl contains ' +currentCupsOfRice++ + ' cups of rice.');
} while (currentCupsOfRice !== requiredCupsOfRice);

console.log("We have enough rice!");