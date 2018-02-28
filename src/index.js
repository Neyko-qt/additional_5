module.exports = function check(str, bracketsConfig) {

    var openedBracets = [];
    var closedBracets = [];

    if (str.length % 2 == 1) {
      return false;
    }
    
    var result = [];

    for (var  i = 0; i < bracketsConfig.length; i++) {
      openedBracets.push(bracketsConfig[i][0]);
      closedBracets.push(bracketsConfig[i][1]);
    }

    for (var i = 0; i < str.length ; i++) {
        
      if (~openedBracets.indexOf(str[i])) {
        result.push(str[i]);
      }

      if (~closedBracets.indexOf(str[i])) {
        
        if (closedBracets.indexOf(str[i]) == openedBracets.indexOf(result[result.length-1])) {
          result.pop();
        }

      }
    }

    if (result.length == 0){
      return true;
    }
    
    return false;
}