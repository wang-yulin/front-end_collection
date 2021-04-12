//debounce : until last action cooling dowm sometimes and then do the next action
function debounce(func, delay) {
    let timerId;
    function wrapper(...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => func.apply(this, args), delay)
    }
    return wrapper;
}

function debounce_leading(func, delay) {
    let timerId;
    function wrapper(...args) {
        if(!timerId) {
            func.apply(this, args);
        }
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            timerId = undefined;
        }, delay)
    }

    return wrapper;
}