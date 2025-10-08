// God's in his heaven, all's right with the world.
addEventListener("DOMContentLoaded", () => {
    switchTab(sessionStorage.getItem("currentTab"));
    (localStorage.getItem("tema") == "claro") ? (document.documentElement.classList.add("claro")) : (document.documentElement.classList.remove("claro"));
});


function switchTab(tabName) {
    const olaTab = document.getElementById("olaTab");
    const olaContent = document.getElementById("olaContent");
    const sobreTab = document.getElementById("sobreTab");
    const sobreContent = document.getElementById("sobreContent");
    const projetosTab = document.getElementById("projetosTab");
    const projetosContent = document.getElementById("projetosContent");
    const contatoTab = document.getElementById("contatoTab");
    const contatoContent = document.getElementById("contatoContent");

    switch (tabName) {
        case "ola":
            olaContent.style.display = "grid";
            sobreContent.style.display = "none";
            projetosContent.style.display = "none";
            contatoContent.style.display = "none";

            olaTab.classList.add("current");
            sobreTab.classList.remove("current");
            projetosTab.classList.remove("current");
            contatoTab.classList.remove("current");

            sessionStorage.setItem("currentTab", "ola");
            break;
        case "sobre":
            sobreContent.style.display = "grid";
            olaContent.style.display = "none";
            projetosContent.style.display = "none";
            contatoContent.style.display = "none";

            sobreTab.classList.add("current");
            olaTab.classList.remove("current");
            projetosTab.classList.remove("current");
            contatoTab.classList.remove("current");

            sessionStorage.setItem("currentTab", "sobre");
            break;
        case "projetos":
            projetosContent.style.display = "grid";
            sobreContent.style.display = "none";
            olaContent.style.display = "none";
            contatoContent.style.display = "none";

            projetosTab.classList.add("current");
            sobreTab.classList.remove("current");
            olaTab.classList.remove("current");
            contatoTab.classList.remove("current");

            sessionStorage.setItem("currentTab", "projetos");
            break;
        case "contato":
            contatoContent.style.display = "grid";
            sobreContent.style.display = "none";
            projetosContent.style.display = "none";
            olaContent.style.display = "none";

            contatoTab.classList.add("current");
            sobreTab.classList.remove("current");
            projetosTab.classList.remove("current");
            olaTab.classList.remove("current");

            sessionStorage.setItem("currentTab", "contato");
            break;
        default:
            switchTab("ola");
            break;
    }
}

function trocarTema() {
    (localStorage.getItem("tema") == "claro") ? (document.documentElement.classList.add("claro")) : (document.documentElement.classList.remove("claro"));
}