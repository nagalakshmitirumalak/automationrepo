function sorting(sArray: number[]): number[]{
    let length = sArray.length;
    
    for(let i=0; i<length; i++){
        for(let j=1; j<length-i; j++){
            
                if(sArray[j]!==undefined && sArray[j-1]!==undefined){
                    if((sArray[j])!<(sArray[j-1])!){
                        const temp = sArray[j];
                        sArray[j] = sArray[j-1]!;
                        sArray[j-1] = temp!;
                    }
                }
            
        }
    }

    return sArray;

}

console.log(sorting([5, 9, 3, 7, 0]));