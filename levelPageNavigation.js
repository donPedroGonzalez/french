const grammaireArr = [];
const exprQuotidiennesArr = ["ex1", "ex2"];
const vocabulaireArr = [];
const exprIdiomatiquesArr = [];
const jeuxLinguistiquesArr = [];

window.onload = onPageLoad();

function onPageLoad(){
    let grammaire = document.getElementById("grammaire");
    let exprQuotidiennes = document.getElementById("exprQuotidiennes");
    let vocabulaire = document.getElementById("vocabulaire");
    let exprIdiomatiques = document.getElementById("exprIdiomatiques");
    let jeuxLinguistiques = document.getElementById("jeuxLinguistiques");
    replacePlaceholder(exprQuotidiennesArr, exprQuotidiennes);
}

function replacePlaceholder (arr, element) {
    if (arr.length === 0) return;
    // console.log("I'm in!");
    element.innerText = "";  
    //let anchor, paragraph;
    for (let item of arr){
        console.log("item", item);
        let paragraph = document.createElement("p");
        paragraph.innerText = item;   
        paragraph.style.fontSize = "larger";
        paragraph.style.fontWeight = "bold";
        paragraph.style.width = "75px";
        paragraph.style.textAlign = "center";
        paragraph.style.position = "relative";
        paragraph.style.float = "left";        
        let anchor = document.createElement("a");
        anchor.setAttribute("href", element.id + "/" + item + "/" + item + ".html");
        anchor.appendChild(paragraph);
        element.appendChild(anchor); 
    }
}