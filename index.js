var sidenav = document.querySelector(".side-navbar")
    sidenav.computedStyleMap.displayty = "none"

    function showNavbar()
    {
    sidenav.style.left="0"
    }
    function closeNavbar()
    {
    sidenav.style.left ="-60%"
    }