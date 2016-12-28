var obj = {
  a : 1000,
  b : function(){
    console.log(this.a);
  }
}

// obj.b();

setTimeout( obj.b.bind(obj), 500);
