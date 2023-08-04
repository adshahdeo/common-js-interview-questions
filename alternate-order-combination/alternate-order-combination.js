function solution(A) {
    if(checkPerfectOrder(A)) {
        return 0;
    }
    let cuts = -1;
    for (let i = 0; i < A.length; i++) {
        let newArr = [];
        for(let p = 0; p < i; p++) {
            newArr.push(A[p]);
        }
        for (let q = i + 1; q < A.length; q++) {
            newArr.push(A[q]);
        }

        if (checkPerfectOrder(newArr)) {
            cuts++;
        }
    }
    if(cuts > -1) {
        cuts++;
    }
    return cuts;
}

function checkPerfectOrder(A) {
    let check = false;
    for (let j = 0; j < A.length-2 ; j++) {
        if ((A[j] - A[j + 1] > 0) && (A[j + 1] - A[j + 2] < 0)) {
            check = true;
        } else if ((A[j] - A[j + 1] < 0) && (A[j + 1] - A[j + 2] > 0)) {
            check = true;
        } else {
            check = false;
            break;
        }
    }

    if (check) {
        return true;
    } else {
        return false;
    }
}
