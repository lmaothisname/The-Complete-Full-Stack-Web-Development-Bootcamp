function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    //Write your code here:
    var fiboSeq = [];
    if (n===1) {
        fiboSeq = [0];
    } else if(n===2){
        fiboSeq = [0,1];
    }else {
        fiboSeq=[0,1]
        for(var i = 2 ;i<n;i++) {
            fiboSeq.push(fiboSeq[fiboSeq.length-2]+fiboSeq[fiboSeq.length-1])
        }
    }
    return fiboSeq;
        
    
    
    
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

