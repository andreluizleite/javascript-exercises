//Exercise 6: Remove Duplicates from Array
//Write a function removeDuplicates that takes an array and returns a new array with duplicates removed.




function removeDuplicates(arr) {

    let list = [];

    for(let i=0; i < arr.length; i++)
        {
            if(list.indexOf(arr[i])=== -1)
                {
                    list.push(arr[i]);
                }
                
        }

        return list;
    
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([1, 1, 1, 1])); // [1]