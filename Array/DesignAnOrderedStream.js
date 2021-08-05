/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.result = new Array(n);
    this.ptr = 0;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.result[idKey - 1] = value;
    if (this.result[this.ptr] == undefined) return [];
    var return_arr = [];
    return_arr.push(this.result[this.ptr]);
    for (var i = this.ptr + 1; i < this.result.length; ++i) {
        if (this.result[i] != undefined) return_arr.push(this.result[i]);
        else {
            this.ptr = i;
            return return_arr;
        }
    }
    return return_arr;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */