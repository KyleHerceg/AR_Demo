AFRAME.registerComponent('cursor-listener', {
    init: function () {
      this.el.addEventListener('click', function (evt) {
        console.log("Clicked")
        this.setAttribute('animation-mixer', "clip: Take 001; loop: once");
      });
    }
  });