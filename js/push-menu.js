var dropDownProto = Object.create(HTMLElement.prototype);

dropDownProto.createdCallback = function() {
  var button = this.querySelector("button");
  var menu = this.querySelector(".menu");
  button.addEventListener("click", function() {
    if(menu.style.display == 'block')
      menu.style.display = 'none';
    else
      menu.style.display = 'block';
  });
}

var DropDown = document.registerElement("drop-down", {prototype: dropDownProto});