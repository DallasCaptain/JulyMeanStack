cat = [1,2,2,3]
dog = [1,2,3,5]


function intersection(arr1,arr2){
let i = 0
let y =0
let inter =[]
    while(i < arr1.length && y<arr2.length){
        if(arr1[i]==arr2[y]){
            inter.push(arr1[i])
            i++
            y++
        }else{
            if(arr1[i]>arr2[y]){
                y++
            }else{
                i++
            }
        }
    }
    return inter
}

console.log(intersection(cat,dog))
console.log(intersection(dog,cat))