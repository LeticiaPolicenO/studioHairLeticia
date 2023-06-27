/*--------show menu-------------*/
const showMenu= (toggleId, navID) => {
    const toggle= document.getElementById(toggleId),
        nav= document.getElementById(navID)
    //validar se existe as variaveis 
    if(toggle && nav){
        toggle.addEventListener("click", () =>{
            nav.classList.toggle("showMenu")
        })
    }
}
showMenu("navToggle", "nav")

/*-------------remover menu mobile----------------*/
const navLink= document.querySelectorAll(".navLink");
function linkAction(){
    const navmenu= document.getElementById("nav")
    navmenu.classList.remove("showMenu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))


/*-------------deixa o link clicado com a classe active-------------
--*/
const linkColor= document.querySelectorAll(".navLink")

function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove("activeLink"))
        this.classList.add("activeLink")
    }
}

linkColor.forEach(L=> L.addEventListener("click", colorLink))

