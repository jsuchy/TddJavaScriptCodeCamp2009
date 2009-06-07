var boxes = {
  color: "green",
  changeColor: function(element) {
    this.color = this.color === "green" ? "red" : "green";
    
    element.style.backgroundColor = this.color;
  }
}