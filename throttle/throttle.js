// Active the func at most one time during every delay time
function throttle(func, delay) {
    let isThrottled = false;
    function wrapper(...args) {
        if(!isThrottled) {
            func.apply(this, args)
            isThrottled = true;
            setTimeout(() => {
                isThrottled = false;
            }, delay)
        }
    }

    return wrapper;
}

// Active the func at most one time during every delay time and remember the state
function throttle_state(func, delay) {
    let isThrottled = false,
        savedArgs,
        savedThis;
    
    function wrapper(...args) {
        if(isThrottled) {
            savedArgs = args;
            savedThis = this;
            return;
        }

        isThrottled = true;
        func.apply(this, args);

        setTimeout(() => {
            isThrottled = false;
            if(savedArgs){
                func.apply(savedThis, savedArgs)
                savedArgs = null;
            }
        }, delay)
    }

    return wrapper;
}