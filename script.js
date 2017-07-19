var hitboxes = []
var last_click = null

window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var canvas_context = canvas.getContext("2d");
    var img = document.getElementById("image");
    canvas_context.drawImage(img, canvas.width/2-img.width/2, canvas.height-img.height);

    canvas.addEventListener('mousedown', function(evt) {
      var canvas_bounds = canvas.getBoundingClientRect();
      var x = evt.clientX - canvas_bounds.left - canvas.width/2
      var y = canvas.height - (evt.clientY - canvas_bounds.top)

      if(!last_click)
      {
        last_click = {x: x, y: y}
      }else
      {
        hitboxes.push({x: last_click.x, y: last_click.y, w: x - last_click.x, h: last_click.y - y})
        new_hitbox = hitboxes[hitboxes.length - 1]
        canvas_context.rect(new_hitbox.x + canvas.width/2,canvas.height - new_hitbox.y,new_hitbox.w,new_hitbox.h);
        canvas_context.stroke();
        last_click = null
        var output = ''
        for (i = 0; i<hitboxes.length; i++) {
          output += '<hitbox x="' + hitboxes[i].x + '" y="' + hitboxes[i].y + '" width="' + hitboxes[i].w + '" height="' + hitboxes[i].h + '"/>\n'
        }
        document.getElementById("output").innerHTML = output
      }
    }, false);
}
