function test(who) {
const map = {
    "Contato": () => {
        removesobre ();
        removeportifolio()

    },
    "Sobre": () => {
        removecontato ();
        removeportifolio()

    },
    "Portfolio": () => {
        removesobre ();
        removecontato()

    }
}
map[who]();
    document.getElementById(who).style.display= "block"
}



function removesobre (){
    document.getElementById("Sobre").style.display= "none"
}

function removecontato (){
    document.getElementById("Contato").style.display= "none"
}

function removeportifolio() {
    document.getElementById("Portfolio").style.display = "none"
}