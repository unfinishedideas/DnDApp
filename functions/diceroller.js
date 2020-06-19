const DiceRoller = (params = {numOfDice, numOfSides, modifiers}) => {
    let inputCheck = true;
    if (!params) {inputCheck = false;}
    if (!Number.isInteger(numOfSides)) {inputCheck = false;}
    if (!Number.isInteger(numOfDice)) {inputCheck = false;}
    if (!Number.isInteger(modifiers)) {inputCheck = false;}
    if (!inputCheck) {return 0}

    let results = [];

    for (let i = numOfDice; numOfDice > 0; --numOfDice) {
        const min = 1;
        const max = numOfSides;
        results.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return results;
}