class SwitchFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/nemo.png';
  }

  onClick(event) {
    this.makeNewVelocity(50);
  }
}
