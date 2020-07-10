//combinearrays - create sorted array given 2 sorted arrays

function combineA(arr1,arr2){
    result =[]
    //loop over the values in both arrays
        //put smallest values into result first
            //if x < y => result add x
            //instead of removing values, use counters to track progress
    // for(let i = 0,y = 0; i < arr1.length && y < arr2.length ; i++ , y++){
    //     console.log('I: ',i,'Y: ',y)
    // }
    // console.log('***')
    let i=0,y = 0
    while(i < arr1.length && y < arr2.length){
        //console.log('I: ',i,'Y: ',y)
        if(arr1[i] < arr2[y]){
            //add arr1[i] to result
            //not look at arr1[i] again
            result.push(arr1[i])
            i++
        }else{
            //add arr2[y] to resulst
            //not look at arr2[y] again
            result.push(arr2[y])
            y++
        }
    }
    //are values still not looked at?
    //add remaining values to result
    while(i < arr1.length){
        result.push(arr1[i])
        i++
    }
    while(y < arr2.length){
        result.push(arr2[y])
        y++
    }
    console.log('combined:',result)
    return result
}


//combineA([1,2,3,5],[2,5,7])





//mergesort
function mergesort(arr){
    //stop calling merge sort when they are 1 item
    //break array into 2 pieces
    //call mergesort on each piece
    //add pieces back together with combine arrays
    //base case // escape clause
    if(arr.length == 1){
        console.log('singled,', arr)
        return arr
    }
    //iterate
    let left = arr.slice(0,Math.floor(arr.length/2))
    let right = arr.slice(Math.floor(arr.length/2))
    console.log('left:',left,'right:',right)
    return combineA(mergesort(left),mergesort(right))   
    //console.log(left,right)

    //recursive call

}

console.log(mergesort([5,7,3,4,5,2,8,9]))