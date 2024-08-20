console.log("This is a 30 sec timer application!");

function timer(seconds) {
    let counter = 0;

    const intervalId = setInterval(() => {
        counter++;
        console.log(`${counter} second(s)`);
        
        if (counter === seconds) {
            clearInterval(intervalId); 
            console.log("30 seconds completed!");
        }
    }, 1000);
}

timer(30);
