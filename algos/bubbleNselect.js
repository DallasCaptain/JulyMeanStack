//bubble sort

function bsort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let y =0; y < arr.length - i; y++){
            // console.log('i: ' + i + ' y: ' + y)
            if(arr[y] > arr[y+1]){
                // temp = arr[y]
                // arr[y] = arr[y+1]
                // arr[y+1] = temp

                [ arr[y] , arr[y+1] ] = [ arr[y+1] , arr[y] ]

            }
        }
    }
}


//selection sort

function ssort(){
    for(let i = 0; i < arr.length; i++){
        min_i = i
        for(let y = i; y < arr.length; y++){
            // console.log('i: ' + i + ' y: ' + y)
            if(arr[y] < arr[min_i]){
                min_i = y
            }
        }
        temp = arr[min_i]
        arr[min_i] = arr[i]
        arr[i] = temp
    }
}

let arr = [10,9,8,7,6,5,4,3,2,1]
// console.log('b: ', arr)
// bsort(arr)
// console.log('a: ', arr)
console.log('b: ', arr)
ssort(arr)
console.log('a: ', arr)