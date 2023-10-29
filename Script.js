document.querySelector('.container').addEventListener("mousemove",Myfunction1)
elementLeft = document.querySelector('.container');
elementLeft.addEventListener("mouseleave",function(){
    gsap.to(elementLeft,{
        backgroundColor : "white",
    });
    elementLeft.innerHTML="Bhat Muddu";
})
function Myfunction1(details)
{


    var loc=elementLeft.getBoundingClientRect();   //it gives all details about that element
    var insideRectloc=details.clientX-loc.left;    //element starts from 1 and givs the location of mouse cursor from 1
    if(insideRectloc < loc.width/2) // 
    {
        redcolor=gsap.utils.mapRange(0,loc.width/2,255,0,insideRectloc);
        gsap.to(elementLeft,{
            backgroundColor :`rgb(${redcolor},0,0)`,
            ease : Power4,
        });
        elementLeft.innerHTML="Mouse Moved To Left";
    }
    else if(insideRectloc > loc.width/2){
        bluecolor=gsap.utils.mapRange(loc.width/2+30,loc.width,0,255,insideRectloc);
        gsap.to(elementLeft,{
            backgroundColor :`rgb(0,0,${bluecolor})`,
            ease : Power4,
            
        });
        elementLeft.innerHTML="Mouse Moved To Right";
    }
    else{
        greencolor=gsap.utils.mapRange(loc.width/2-30,loc.width/2+30,0,255,insideRectloc);
        gsap.to(elementLeft,{
            backgroundColor :`rgb(0,${greencolor},0)`,
            ease : Power4,
            
        });
    }
    
}