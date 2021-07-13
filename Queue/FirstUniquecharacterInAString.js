var firstUniqChar = function(s) {
    if (s.length == 1) return 0;
    let map = new Map();
    for (let x of s) {
        if (map.has(x)) {
            map.set(x, map.get(x) + 1);
        } else {
            map.set(x, 0);
        }
    }
    for (let [k, v] of map) {
        if (v === 0) {
            let val = s.indexOf(k);
            return val;
        }
    }
    return -1;
};