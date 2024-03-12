
let count=0;

var temp=[]

var unique=(arr)=>{
    for(let i=0;i<arr.length;i++){
        count=0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count++;
            }
        }
        if(count==1){
            temp.push(arr[i]);

        }
        
    }
    return temp;

}

console.log(unique([1, 2, 2, 3, 4, 4, 5])); 