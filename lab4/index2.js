let table = document.getElementById("table");
let canvas = document.getElementsByClassName("canvas")[0];
let cWidth = 600;
let cHeight = 300;
table.addEventListener("DOMSubtreeModified", e=> {
    e.preventDefault();
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    if(table.children.length==1)
        return;
    let elements = Array.from(table.children);
    elements = elements.slice(1);  
    let dElements = elements.map(el=> {
        return Number(el.children[2].textContent);
    });
    let tElements = elements.map(el=> {
        return el.children[1].textContent;
    });
    let max = Math.max.apply(Math, dElements);  
    let width = cWidth / (table.children.length-1);
    let heightK = cHeight / max;
    let curX=5;
    let color = 12345;
    dElements.forEach((el,i) => {
        let newD = document.createElement('div');
        newD.className ="diagramEl";
        newD.style.left = curX+"px";
        if (el<0)
            newD.style.top = cHeight +"px";
        else
            newD.style.top = cHeight-el*heightK +"px";
        newD.style.width = width +"px";
        newD.style.maxWidth = width +"px";
        if (el<0)
        {
            newD.style.height= "0px";
            newD.style.paddingTop = "5px";
        }
        else
        {
            newD.style.height= el*heightK +"px";
            newD.style.paddingTop=el*heightK+5 + "px";
        }
        newD.style.backgroundColor="#F"+color.toString();
        newD.textContent = tElements[i];
        newD.dataset.alt = " ("+el+")  ";
        newD.dataset.text = tElements[i];
        newD.addEventListener('mouseover', () => {
            newD.textContent=newD.dataset.alt;
        });
        newD.addEventListener('mouseout', () => {
            newD.textContent=newD.dataset.text;
        });
        canvas.appendChild(newD);
        color+=7777;
        if (color>66666)
            color=12345;
        curX+=width;
    });
    curX=0;
});
document.getElementById("add").addEventListener('click', e => {
    e.preventDefault();
    let newRow = document.createElement("tr");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn btn-danger";
    deleteButton.addEventListener('click', e=> {
        e.preventDefault();
        deleteButton.closest("table").removeChild(deleteButton.closest("tr"));
    });
    newRow.appendChild(document.createElement("td"));
    newRow.className="center";
    newRow.children[0].appendChild(deleteButton);
    newRow.appendChild(document.createElement("td"));
    newRow.appendChild(document.createElement("td"));
    newRow.children[1].contentEditable=true;
    newRow.children[1].textContent="None";
    newRow.children[2].contentEditable=true;
    newRow.children[2].textContent= Math.floor(Math.random() * (200 - 10)) + 10;
    table.appendChild(newRow);
});
