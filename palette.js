   var canvas_trs = document.querySelectorAll("#canvas tr");
var palitra_tr = document.querySelectorAll("#palitra tr");
var SelectedColorbefore;

for (let i=1;i<palitra_tr.length+1;i++)
    {
        for(let j=1;j<palitra_tr[i-1].children.length+1;j++)
            {
               var selectedCellColor = document.querySelector("#palitra tr:nth-child("+i+") td:nth-child("+j+")");
                selectedCellColor.style.border="";
                selectedCellColor.addEventListener("click", function()
                {
                    if( typeof SelectedColorbefore != 'undefined')
                        {
                            SelectedColorbefore.id="";
                        }
                      selectedCellColor = document.querySelector("#palitra tr:nth-child("+i+") td:nth-child("+j+")");
                    var selectedColor=getComputedStyle(selectedCellColor).backgroundColor;
                    selectedCellColor.id="selected";
                    SelectedColorbefore=selectedCellColor;
                }
            )
                
            }
      }
for(let i=1;i<canvas_trs.length+1;i++)
    {
        
        for(let j=1;j<canvas_trs[i-1].children.length+1;j++)
            {
                let selected = document.querySelector("#canvas tr:nth-child("+i+") td:nth-child("+j+")");
                selected.addEventListener("click", function()
                {
                    let selected = document.querySelector("#canvas tr:nth-child("+i+") td:nth-child("+j+")");
                    selected.style.background= getComputedStyle(selectedCellColor).backgroundColor;
                }
             )
            }
    }