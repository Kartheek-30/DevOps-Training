console.log("This is a 30 sec timer application!");

function timer(){
    for(let i = 1; i<=30; i++){
        setTimeout(()=> {
            console.log(i);
         }, i*1000);
    }
    setTimeout(() => {
        console.log("30 seconds completed!");
    }, 30000);
}

timer();