const allElem = document.querySelectorAll('.elem')
const allFullElem = document.querySelectorAll('.fullElem')
const backBtn = document.querySelectorAll('.fullElem .back')

allElem.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        allFullElem[elem.id].style.display='block'
        
    })  
})
backBtn.forEach((backElem)=>{
    backElem.addEventListener('click',()=>{
        allFullElem[backElem.id].style.display = 'none'
    })
    
})