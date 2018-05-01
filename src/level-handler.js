let info = require("./levels-info");

module.exports = (exp) => {
    if(exp >= info["4"]) {
        return 4;
    }
    else if(exp >= info["3"]) {
        return 3;
    }
    else if(exp >= info["2"]) {
        return 2;
    }
    else if(exp >= info["1"]) {
        return 1;
    }
};
