//  Solution 1: Create a new array
var restoreString = function(s, indices) {
    if (s.length == 1) return s;
    let result = new Array(s.length);
    for (var i = 0; i < s.length; ++i) {
        result[indices[i]] = s.charAt(i);
    }
    return result.join("");
};

// Solution 2: Create a new string
var restoreString = function(s, indices) {
    if (s.length == 1) return s;
    let auxiliary = s;
    for (var i = 0; i < s.length; ++i) {
        // Since string is immutable -> Cannot replace a value of an character in a string
        s = s.split("");
        s[indices[i]] = auxiliary.charAt(i);
        s = s.join("");
    }
    return s;
};