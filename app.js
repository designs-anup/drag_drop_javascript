const imgBox = document.querySelector(".dragBox")
const whiteBoxs = document.querySelectorAll(".whiteBox")

// console.log(whiteBoxs);

imgBox.addEventListener('dragstart', (e)=> {
    console.log("drag start ....");
    console.log(e.target);
    e.target.classList.add('hold')
})

imgBox.addEventListener('dragend', (e)=>{
    console.log("drag end ....");
    e.target.classList.remove('hold')
})

whiteBoxs.forEach((whiteBox) => {
    // console.log(whiteBox);
    
    whiteBox.addEventListener('dragover', (e)=>{
        e.preventDefault()
        console.log("drag over ....");
        
    })
    whiteBox.addEventListener('dragenter', (e)=>{
        e.preventDefault()
        console.log("drag enter ....");
    })
    whiteBox.addEventListener('dragleave', (e)=>{
        e.preventDefault()
        console.log("drag leave ....");
    })
    whiteBox.addEventListener('drop', (e)=>{
        e.preventDefault()
        console.log("drop ....");
        e.target.append(imgBox)
    })
})