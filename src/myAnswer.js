//1.
// My answer
function findMultiples(integer, limit) {
    var multiplesOfaNumber = parseInt(limit / integer);
    var arrayMultiples = [];
    for (var i = 1; i <= multiplesOfaNumber; i++) {
      arrayMultiples.push(integer * i);
    }
    return arrayMultiples;
  }
  
  // A smarter way 
    function findMultiple(int, limit) {
    let result = [];
    for (let i = int; i <= limit; i += int) {
      to
      result.push(i);
    }
    return result;
  }
  console.log(findMul(5, 90));
  
  
  //2.
  // my ans
  function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1];
      }
    }
    return null;
  }
  
  // Smarter Way
  function firstNonConsecutive(arr) {
    var notConsecutiveArray = [];
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] != arr[i] + 1) {
        notConsecutiveArray.push(arr[i + 1]);
      }
    }
    if (notConsecutiveArray.length == 0) {
      return null;
    } else {
      return notConsecutiveArray[0];
    }
  }

  //3.
  // my ans
  function filter_list(l) {
    var filteredList = [];
    for (let i = 0; i < l.length; i++) {
      if (typeof l[i] === "number") {
        filteredList.push(l[i]);
      }
    }
    return filteredList;
  }
  
  