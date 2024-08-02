let imagediv=document.querySelector(".imgdiv")
let whiteboxes=document.getElementsByClassName("whitebox")
imagediv.addEventListener("dragstart", (e) => {
    imagediv.classList.add("border")
    setTimeout(() => {
          e.target.classList.add("display");
    }, 0);
})
imagediv.addEventListener("dragend", () => {
    imagediv.classList.remove("border");
    imagediv.classList.remove("display")
    imagediv.className = "imgdiv";
})
for (const whitebox of whiteboxes) {
    whitebox.addEventListener("dragenter", (e) => {
        e.target.classList.add("hover")
    })
    whitebox.addEventListener("dragover", (e) => {
        e.preventDefault();
    })
    whitebox.addEventListener("dragleave", (e) => {
        
        e.target.classList.remove("hover")
    })
    whitebox.addEventListener("drop", (e) => {
        e.target.className="whitebox"
        e.target.append(imagediv);
    })
}