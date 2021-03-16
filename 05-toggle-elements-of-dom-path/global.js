window.addEventListener('load', function(){
    const contentToToggle = document.querySelectorAll('.second_five li');
    const buttonToggle = document.getElementById("toggle_button");

    buttonToggle.addEventListener('click', function(){
        contentToToggle.forEach((v) => {
            if(v.style.display == 'none') {
                v.style.display = 'list-item'
            } else {
                v.style.display = 'none'
            }
        });
    });
});