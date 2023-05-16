function myObject() {
    this.foo = function () {
       console.log('foo');
       this.bar();
     },
     this.bar = function() {
       console.log('bar');
       this.baz();
       this.olar = function(){
        this.baz();
        console.log("Olá! Dentro da função");
   }
     },
     this.baz = function() {
       console.log('baz');
     }
   };
var obj = new myObject();
obj.foo();