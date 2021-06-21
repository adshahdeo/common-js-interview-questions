const search = (arr, low, high, key) => {
    if (low > high) return 'not found';

    let mid = parseInt((low+high)/2);

    if (key === arr[mid]) {
        for (let i = mid-1; i > 0; i--) {
            if (arr[i] === key) mid--;
            else return mid;
        }
    }

    if (arr[mid] <= arr[high]) {
        if (key > arr[mid] && key <= arr[high]) return search(arr, mid+1, high, key);
        else return search(arr, low, mid-1, key);
    } else {
        if (key >= arr[low] && key < arr[mid]) return search(arr, low+1, mid, key);
        else return search(arr, mid+1, high, key);
    }
}

const arr = [5, 6, 7, 8, 9, 1, 2, 2, 2, 3, 3, 3, 4];
console.log(search(arr, 0, arr.length-1, 3));