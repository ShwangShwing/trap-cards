const attachAntiMultisubmit = () => {
    let isDisabled = false;
    document.querySelector('[type=submit]').addEventListener("click", (event) => {
        if (isDisabled) {
            return false;
        }

        const submitButton = event.target;
        const prevValue = submitButton.value;
        isDisabled = true;
        submitButton.value = "Изчакай..."
        const reenableTimeMs = 7000;
        setTimeout(() => {
            submitButton.value = prevValue;
            isDisabled = false;
        }, reenableTimeMs);
        
        return true;
    });
}

const initialize = () => {
    attachAntiMultisubmit();
}

if (document.readyState == 'interactive' || document.readyState == 'complete') {
    console.log(document.readyState);
    initialize();
} else {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('event');
        initialize();
    })
}
