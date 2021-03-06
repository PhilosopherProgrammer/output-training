/**
 * https://stackoverflow.com/questions/9960908/permutations-in-javascript 
 */

const permutator = (inputArr) => {
    let result = [];
  
    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = [...arr];
          let next = curr.splice(i, 1);
          permute([...curr], m.concat(next))
       }
     }
   }
  
   permute(inputArr)
  
   return result;
  }

  console.log(permutator([1, 2, 3]));