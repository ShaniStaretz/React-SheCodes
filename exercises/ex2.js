/*Rewrite these two object types to use the class keyword, instead of direct prototype manipulation. Speaker is a simple type that exposes a speak method which, when called, logs the given text along with the speaker's name. Shouter is a subtype of Speaker which shouts its text and makes it uppercase.*/
class Speaker {
  constructor(name, verb) {
    this.name = name
    this.verb = verb || "says"
  }
  speak(text) {
    console.log(this.name + " " + this.verb + " '" + text + "'")

  }

}
class Shouter extends Speaker{
  constructor(name, verb){
super(name, verb);

  }
  speak(text){
    super.speak(text.toUpperCase())
  }
}
// new Shouter("Dr. Loudmouth").speak("hello there")
// var x = 7;
// console.log(x);

// {
//   let x = 12;
//   console.log(x);
// }

// console.log(x);

const a = 9;
const b = [4,5,6]
 a=b[0];
