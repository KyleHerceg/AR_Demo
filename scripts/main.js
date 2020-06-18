AFRAME.registerComponent('cursor-listener', {
    init: function () {
      this.el.addEventListener('click', function (evt) {
        this.setAttribute('animation-mixer', "clip: Take 001; loop: once");
        console.log('I was clicked at: ', evt.detail.intersection.point);
      });
    }
  });