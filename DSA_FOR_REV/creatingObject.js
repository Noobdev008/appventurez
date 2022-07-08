let obj = {}

obj.firstName = "Shubham";
obj.lastName = "Srivastava";
obj.age = 25;
obj.eyeColor = "black";
obj.sayHi= function add(){
     return this.age+2
}
obj.object = {
    designation:"Software Engineer",
    possting:"Lucknow"
}
obj.arr = [1,2,3,4]
console.log(obj);