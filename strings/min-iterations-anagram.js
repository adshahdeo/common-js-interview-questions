function getMinimumDifference(a, b) {
    const changes = [];
    for (let i = 0; i < a.length; i++) {
        changes.push(anagramIterations (a[i], b[i]));
    }
    console.log(changes);
    return changes;
}

const anagramIterations = (string1, string2) => {
    if (string1.length !== string2.length) {
        return -1;
    }
    const newArr = new Array(26).fill(0);
    for (let i = 0; i < string1.length; i++) {
        const string2Index = string2.charCodeAt(i) - 97,
            string1Index = string1.charCodeAt(i) - 97;
        newArr [string2Index]++;
        newArr [string1Index]--;
    } 
    let iterations = 0;
    for (let i = 0; i < 26; i++) {
        if (newArr[i] > 0) iterations += newArr[i];
    }
    return iterations;
}