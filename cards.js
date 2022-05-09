   var cards = document.querySelectorAll("#cards div");
var cardsImg=[];
  var rubashka= "img/rubashka.png";
for(let i=0;i<cards.length;i++)
    {
        let j=i+1;
        let currentImg=document.querySelector("#cards div:nth-child("+j+") img");
        let currentDiv=document.querySelector("#cards div:nth-child("+j+")");
        cardsImg[i]=currentImg.src;
         currentImg.src= rubashka;
       console.log(currentImg.src)
        rubashka=currentImg.src;
        currentImg.addEventListener("click",function()
        {
            currentImg=document.querySelector("#cards div:nth-child("+j+") img");
            if(currentImg.src == rubashka)
                {
                    setTimeout(function () {
                currentImg.src=cardsImg[i];
                
                }, 500)
                    currentImg.id ='anim';
                    
//                    currentImg.onanimationend
                    setTimeout(function () {
                currentImg.id='';
                
                }, 1000)
                }
            else
                {
                    setTimeout(function () {
                currentImg.src= "img/rubashka.png";
                
                }, 500)
                    currentImg.id ='anim2';
                    setTimeout(function () {
                currentImg.id='';
                currentImg.transform="rotateY(180deg)";
                }, 1000)
                }
            
        })
    }
