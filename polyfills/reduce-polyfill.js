Array.prototype.myReduce = function(callback, inititalVal) {
    
    if (!((typeof callback === 'Function' || typeof callback === 'function') && this))
        throw new TypeError();

    let value = inititalVal === undefined ? this[0] : inititalVal;

    for (let i = inititalVal === undefined ? 1 : 0; i < this.length; i++) {
        value = callback (this[i], value);
    }

    return value;
}