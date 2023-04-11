const box = document.querySelector("#selector-box");
const leafs = box.children;
const nLeafs = 35;

for(let i=1; i<=nLeafs; i++){
    let elem = document.createElement("div")
    elem.setAttribute("class","unit");
    elem.id = "unit"+i;
    box.appendChild(elem);
};

for(let x=0; x<leafs.length; x++){
    const e = leafs[x]
    //e.addEventListener("click", tempFunc)
    const changecol = setInterval(() => {
        tempFunc(e)
    }, 1000);
};

function tempFunc(thise){
    const oldcol = thise.style.backgroundColor || "rgb(255,255,255)"
    const colorlist = oldcol.match(/\d+/g)
    let col = [];
    for(let y=0;y<colorlist.length;y++){
        const ran = Math.floor(Math.random()*256)
        //col.push((colorlist[y]-15))}
        col.push(ran)
    }
    //console.log(col)
    thise.style = `background-color:rgb(${col[0]},${col[1]},${col[2]})`
    return;
};

