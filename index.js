const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
    slide.addEventListener("click", () =>{
        clearClassList('active', slides)

        slide.classList.add('active');
    })
}
function clearClassList(classForClear, objFor) {
    objFor.forEach( (objIter) => {
        objIter.classList.remove(classForClear);
    } )
}