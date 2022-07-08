// 1st method using spread operator

const food = { beef: '🥩', bacon: '🥓' };

const cloneFood = { ...food };

console.log(cloneFood);

console.log("------------");

//2nd methoud using obhject assign
const food2 = { chicken: '🥩', bacon: '🥓' };

const cloneFood2 = Object.assign({}, food2);

console.log(cloneFood2);


console.log("-----------------");


//  Using JSON

const food3 = { chicken: '🥩', bacon: '🥓' };

const cloneFood3 = JSON.parse(JSON.stringify(food3));

console.log(cloneFood3);