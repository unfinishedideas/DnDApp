const diceRoller = (numOfDice, numOfSides, modifiers) => {
    let inputCheck = true;
    if (!Number.isInteger(numOfSides)) {inputCheck = false;}
    if (!Number.isInteger(numOfDice)) {inputCheck = false;}
    if (!Number.isInteger(modifiers)) {inputCheck = false;}
    if (!inputCheck) {return 0}

    let results = [];
    
    for(let i = 0; i < numOfDice; i+= 1)
    {
        const min = 1;
        const max = numOfSides;
        let roll = Math.floor(Math.random() * (max - min + 1) + min);
        roll += modifiers;
        results.push(roll);
    }

    let total = results.reduce((total, result) => total + result); 
    return {string: `${numOfDice}d${numOfSides}`, results: results, total: total};
};

export default diceRoller;