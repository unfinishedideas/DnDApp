const diceRoller = (numOfDice, numOfSides, modifier) => {
    let inputCheck = true;
    if (!Number.isInteger(numOfSides) || numOfSides <= 3) {inputCheck = false;}
    if (!Number.isInteger(numOfDice)  || numOfDice <= 0 ) {inputCheck = false;}
    if (!Number.isInteger(modifier)) {inputCheck = false;}
    if (!inputCheck) {return rejectObject}

    let results = [];
    
    for(let i = 0; i < numOfDice; i+= 1)
        {
            const min = 1;
            const max = numOfSides;
            let roll = Math.floor(Math.random() * (max - min + 1) + min);
            results.push(roll);
        }

    let total = results.reduce((total, result) => total + result);
    total += modifier;

    // Not very DRY. -P
    if (modifier && modifier > 0) {
        return {string: `${numOfDice}d${numOfSides} + ${Math.abs(modifier)}`, results: results, total: total};
    } else if (modifier && modifier < 0) {
        return {string: `${numOfDice}d${numOfSides} - ${Math.abs(modifier)}`, results: results, total: total};
    } else {
        return {string: `${numOfDice}d${numOfSides}`, results: results, total: total};
    }
};

export default diceRoller;

const rejectObject = {string: 'Invalid input',results: [],total: 0}