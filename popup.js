let popupBtns = document.querySelectorAll("button.popup-btn");

if (popupBtns) {
  var popupWrapper = document.createElement("div");
  popupWrapper.className = "popup-Wrapper";
  document.body.prepend(popupWrapper);
}

popupBtns.forEach(popupBtn =>{
    popupBtn.addEventListener("click", (e) => {
        var popup = popupBtn.nextElementSibling;
        popup.classList.add("show");
        popupWrapper.classList.add("show");
      
      
      
        let popupCloses = document.querySelectorAll(".popup-close");
        let popupCloseFun = e => {
          popup.classList.remove("show");
          popupWrapper.classList.remove("show");
        }
        
        popupCloses.forEach(popupClose => {
          popupClose.addEventListener("click", popupCloseFun)
        })
      
        popupWrapper.addEventListener("click" , popupCloseFun)
      });
})
