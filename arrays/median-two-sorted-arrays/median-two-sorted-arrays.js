const findMedianSortedArrays = (nums1, nums2) => {
    nums1 = merger (nums1, nums2);
    return nums1.length %2 !== 0 ? nums1[Math.floor(nums1.length/2)] : parseFloat((nums1[nums1.length/2] + nums1[nums1.length/2 - 1])/2);
};

const merger = (arr1, arr2) => {
    const res = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            res.push(arr1.shift());
        } else {
            res.push(arr2.shift());           
        }
    }
    
    return [...res, ...arr1, ...arr2];
}