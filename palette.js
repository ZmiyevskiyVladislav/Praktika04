//        window.addEventListener("load",function loadDoc(){
//            var head = document.querySelector("head");
//    head.append("<link rel='stylesheet' type='text/css' href='/style.css' />");
   var canvas_trs = document.querySelectorAll("tr.canvas_trs");
var palitra_tr = document.querySelectorAll("tr.palitra_trs");
console.log(canvas_trs);
console.log(canvas_trs.length);
console.log(palitra_tr);
console.log(palitra_tr.length);
var SelectedColorbefore;

for (let i=1;i<palitra_tr.length+1;i++)
    {
        for(let j=1;j<palitra_tr[i-1].children.length+1;j++)
            {
//                var selected = $("tr.palitra:nth-child(i)");
               var selectedCellColor = document.querySelector(".palitra_trs:nth-child("+i+") td:nth-child("+j+")");
                selectedCellColor.style.border="";
//               console.log(selectedCellColor.style.background);
                selectedCellColor.addEventListener("click", function()
                {
                      console.log(SelectedColorbefore)
                    if( typeof SelectedColorbefore != 'undefined')
                        {
                            SelectedColorbefore.id="";
                        }
                      selectedCellColor = document.querySelector(".palitra_trs:nth-child("+i+") td:nth-child("+j+")");
                    console.log("i: "+i);
                console.log("j: "+j);
                     console.log("width: "+selectedCellColor.style.backgroundColor);
//                    selectedCellColor.style.background="yellow";
                    var selectedColor=selectedCellColor.style.backgroundColor;
                    selectedCellColor.id="selected";
                    console.log(selectedColor);
                    console.log(selectedCellColor.style);
                    console.log(selectedCellColor.style.backgroundColor);
                    console.log(selectedCellColor.innerHTML);
                    SelectedColorbefore=selectedCellColor;
                }
            )
                
            }
      }
for(let i=1;i<canvas_trs.length+1;i++)
    {
        
        for(let j=1;j<canvas_trs[i-1].children.length+1;j++)
            {
                let selected = document.querySelector(".canvas_trs:nth-child("+i+") td:nth-child("+j+")");
                console.log("canvas: "+selected)
                selected.addEventListener("click", function()
                {
                    let selected = document.querySelector(".canvas_trs:nth-child("+i+") td:nth-child("+j+")");
                    selected.style.background= selectedCellColor.style.backgroundColor;
                }
             )
            }
    }

// window.removeEventListener("load",loadDoc)
//})
