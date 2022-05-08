//        window.addEventListener("load",function loadDoc(){
//            var head = document.querySelector("head");
//    head.append("<link rel='stylesheet' type='text/css' href='/style.css' />");
   var cards = document.querySelectorAll("#cards div");
var cardsImg=[];
console.log(cards);
  var rubashka= "file:///C:/Users/zmiie/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/HTML/%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%BD%D0%B0%203/img/rubashka.png";
for(let i=0;i<cards.length;i++)
    {
        let j=i+1;
        let currentImg=document.querySelector("#cards div:nth-child("+j+") img");
        let currentDiv=document.querySelector("#cards div:nth-child("+j+")");
        cardsImg[i]=currentImg.src;
         currentImg.src= rubashka;
       
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
                
                }, 999)
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


// window.removeEventListener("load",loadDoc)
//})
