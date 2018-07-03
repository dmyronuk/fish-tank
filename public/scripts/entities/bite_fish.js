class BiteFish extends Fish {
  constructor(options){
    super(options);
    this.imageUri = '/images/bite-fish.gif';
  }

  onClick(event){
    let $denizen = $('#' + this.id);
    $denizen.toggleClass("spinning");
  }
}

