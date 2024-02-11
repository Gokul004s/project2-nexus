window.addEventListener("scroll",function()
{
    var header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0 )
})

function showSidebar(){
    const sidebar=document.querySelector('.side-bar')
    sidebar.style.display='flex'
    
    const navitems=document.querySelector('.nav .menubtn')
    navitems.style.display='none'
}

function hideSidebar(){
    const hidebar=document.querySelector('.side-bar')
    hidebar.style.display='none'
    const navitems=document.querySelector('.nav .menubtn')
    navitems.style.display='flex'
}
