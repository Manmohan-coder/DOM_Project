const allElem = document.querySelectorAll('.elem')
const allFullElem = document.querySelectorAll('.fullElem')

allElem.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        allFullElem[elem.id].style.display='block'
        
    })  
})