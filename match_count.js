var countMatches = function (items, ruleKey, ruleValue) {
    const map = {
        'type': 0,
        'color': 1,
        'name': 2
    }
    const countMatches = (items, key, value) => items.filter(i => i[map[key]] == value).length
};