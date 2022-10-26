
var navElement = document.getElementById("navigation");
var newElement, navParagraph;
var validExList = ["ex1", "ex2"];
for (var i = 0; i < validExList.length; i++)
{
    newElement = document.createElement("a");
    newElement.setAttribute("href", "../" + validExList[i] + "/" + validExList[i] + ".html");
    newElement.innerText = validExList[i];
    newElement.style.textDecoration = "none";
    navParagraph = document.createElement("p");
    navParagraph.appendChild(newElement);
    navElement.appendChild(navParagraph);
    navElement.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
    navElement.style.fontSize = "larger";
}