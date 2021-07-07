Array.prototype.myFilter = function (callback, thisArg) {

    if (!((typeof callback === 'Function' || typeof callback === 'function') && this))
        throw new TypeError ();

    const len = this.length;
    let res = new Array(len);
    const self = this;
    let newLength = 0;
    let i = -1;

    let currentVal;
    if (thisArg === undefined) {
        while (++i !== len) {
            if (i in this) {
                currentVal = self[i];
                if (callback(self[i], i, self)) {
                    res[newLength++] = currentVal;
                }
            }
        }
    }
    else{
        while (++i !== len) {
            if (i in this) {
                currentVal = self[i];
                if (callback.call(thisArg, self[i], i, self)) {
                    res[newLength++] = currentVal;
                }
            }
        }
    }

    res.length = newLength;
    return res;
};