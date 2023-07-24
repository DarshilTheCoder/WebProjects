console.log('this is drag and drop utility');
// main js starts from here

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');


// Event listener for draggable element imgBox
imgBox.addEventListener('dragstart',(e)=>{
    console.log('Dragstart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
        
    }, 0);

});


imgBox.addEventListener('dragend',(e)=>{
    console.log('Dragend has been triggered');
    e.target.className = 'imgBox';
});

// jitne bhi whiteBox class ke elements hai unme
for(whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover',(e)=>{
        // by default i cant drag so we add 
        e.preventDefault();
        console.log('Dragover has been triggered');

    });

    whiteBox.addEventListener('dragenter',(e)=>{
        console.log('Dragenter has been triggered');
        e.target.className += ' dashed';
    });

    whiteBox.addEventListener('dragleave',(e)=>{
        console.log('Dragleave has been triggered');
        e.target.className = 'whiteBox'
    });

    whiteBox.addEventListener('drop',(e)=>{
        console.log('Drop has been triggered');
        e.target.append(imgBox);
    });
}