const wordSearch = (letters, word) => { 
    
  let verticalJoin = [];

    for (let i = 0; i < letters[0].length; i++) {
      const col =[]
      for(let j = 0; j < letters.length; j++) {
          col.push(letters[j][i]);
        }
        verticalJoin.push(col);
    }
    verticalJoin = verticalJoin.map(ls => ls.join(''));

    const horizontalJoin = letters.map(ls => ls.join(''))

    const thirdArray = verticalJoin.concat(horizontalJoin);
    console.log(thirdArray);

    for (l of thirdArray) {
        if (l.includes(word)) return true;
    }
    for (j of thirdArray)   {
        
        if (!l.includes(word)) return false;
    }
}

module.exports = wordSearch









