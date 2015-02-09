var dropDownProto = Object.create(HTMLElement.prototype);

dropDownProto.createdCallback = function() {
  var button = this.querySelector("button");
  var menu = this.querySelector(".menu");
  button.addEventListener("click", function() {
    if(menu.style.display == 'none')
      menu.style.display = 'block';
    else
      menu.style.display = 'none';
  });
}

var DropDown = document.registerElement("drop-down", {prototype: dropDownProto});