var countMatches = function(items, ruleKey, ruleValue) {
    var count = 0;
    let pos_to_check = ruleKey == "type" ? 0 : ruleKey == "color" ? 1 : 2;
    for (var i = 0; i < items.length; ++i) {
        if (items[i][pos_to_check] == ruleValue) count++;
    }
    return count;
};