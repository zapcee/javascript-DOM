window.addEventListener('load', function(){
    const hideContent = document.getElementsByClassName("hide_me");
    const hideClick = document.getElementById("button");

    hideClick.addEventListener('click', function(){
        Array.from(hideContent).forEach((v) => {
            v.style.display = "none";
        });
    });
});