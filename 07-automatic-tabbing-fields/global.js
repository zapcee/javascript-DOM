window.addEventListener('load', function(){
    
    const first = document.getElementById('first');
    const second = document.getElementById('second');
    const third = document.getElementById('third');

    first.addEventListener('keyup', () => {
        inputText = first.value.length;
        maxLength = parseInt(first.getAttribute("maxlength"));

        if (inputText == maxLength){
            second.focus();
        }
    });

    second.addEventListener('keyup', () => {
        inputText = second.value.length;
        maxLength = parseInt(second.getAttribute("maxlength"));

        if (inputText == maxLength){
            third.focus();
        }
    });
});