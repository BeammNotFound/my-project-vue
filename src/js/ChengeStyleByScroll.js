function showTop(scrollNumber) {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(scrollTop);
    if (scrollTop > scrollNumber) {
        document.getElementById("bigBox").style.display = "block";
        document.getElementById("experienceBox").style.display = "block";
        document.getElementById("HeadBox").style.marginBottom = "20px";
    }
    window.onscroll  = showTop
}
export {
    showTop
}
