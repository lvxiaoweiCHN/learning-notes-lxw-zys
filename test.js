let a=[2,4,5,6,1,0,3]
function quickSort(arr){
    let len=arr.length
    if(len<=1){
        return arr
    }
    let pre=[]
    let tail=[]
    let mid=arr[0]
    for(let i=1;i<len;i++){
        if(arr[i] < mid){
            pre.push(arr[i])
        }
        if (arr[i] > mid){
            tail.push(arr[i])
        }
        
    }
   return [ ...quickSort(pre), mid, ...quickSort(tail)]
}
console.log( quickSort(a))