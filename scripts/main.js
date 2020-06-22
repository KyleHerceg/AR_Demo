AFRAME.registerComponent('anim-on-down', {
  init: function () {
    var el = this.el; 
    el.addEventListener('mousedown', function () {
      el.setAttribute("animation-mixer", "loop: pingpong");
    });
  }
});