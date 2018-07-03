class Starter extends Denizen {

  constructor(options) {
    super(options);
    this.imageUri = '/images/volcano.jpg';
    this.position.y += this.height;
  }

  update(t) {
    // no physics for Starter
  }

  onClick(event) {
    var xVel = randRangeInt(-300, 300);
    var yVel = 400 - Math.abs(xVel);
    var s = new Seed({
      tank: this.tank,
      position: this.position,
      velocity: new Vector(xVel, yVel),
      type: this.tank.getRandomSpecies(),
    });

    let $denizen = $('#' + this.id)
    let $body = $("body");
    if($body.find(".lava").length < 1){
      let $lava = $("<div/>").addClass("lava");
      let left = parseInt($denizen.css("left"));
      $lava.css("left", left - 80)
      $lava.css("bottom", $denizen.css("bottom"))
      $body.append($lava);
    }
    $body.find(".lava").toggleClass("exploding");
  }
}
