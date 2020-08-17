window.onload = () => {
    
    const list= document.getElementsByTagName("*");
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if(element.hasAttribute('trackSizeChange'))
            responsiveElements.set(element, NaN);
    }

    setInterval(onTick, 300);
}

const reload = () => location.reload();
const responsiveElements = new Map();
const onTick = () => {
    responsiveElements.forEach((size,el)=>{
        const currSize = el.offsetWidth;
        if(currSize !== size){
            responsiveElements.set(el, currSize);
            onElementSizeChanged(el, currSize);
        }
    });
};

const onElementSizeChanged = (element, newSize) =>{
    const leftPadding = window.getComputedStyle(element, null).getPropertyValue('padding-left')
    const rightPadding = window.getComputedStyle(element, null).getPropertyValue('padding-right')
    console.log(element.childNodes);
};