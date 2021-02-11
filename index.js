function map(sourceArray, num) {
    let newArray = []
  
    for (let i = 0; i < sourceArray.length; i++) {
      let x = sourceArray[i]
      newArray.push(num(x))
    }
  
    return newArray;
}
  
function reduce(sourceArray, num, starting){
    let newArray = (!!starting) ? starting : sourceArray[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < sourceArray.length; i++) {
        newArray = num(sourceArray[i], newArray)
    }
  
    return newArray;
}