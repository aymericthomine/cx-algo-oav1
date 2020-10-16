function howManyCamelCase(str = '') {
    let sentence = ''
    let count = 0
  
    if (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) {
        count++;
    }

    for (let i = 0; i < str.length; i++) {         
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            count++;
        } 
    }  

    return count

}

console.log(howManyCamelCase('iLoveTennis'))
