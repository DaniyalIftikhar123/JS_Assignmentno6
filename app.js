//********chapter 35 Q no 1 */
// var date= new Date();
// document.write(date)

//********chapter 35 Q no 2*/

// function greet(){
//     var firstName ="Daniyal"
//     var lastName = "Iftikhar"
//     document.write("Welcome to the function "+firstName+ " "+ lastName)
// }
// greet()

//********chapter 35 Q no 3 */

// function add(){
//     var num1= +prompt("Enter first Number")
// var num2  = +prompt("Enter Second Number")

//     var result = num1+num2
//     return result;
// }

// document.write(add())


//********chapter 35 Q no 4 */


// function result(num1,num2,operator){

//     var add = num1+num2
//     return add

// }

// document.write(result(5,10,"+"))

//********chapter 35 Q no 5 */

// function square(a){
//     return a*a

// }
// document.write(square(5))

//********chapter 35 Q no 6 */

// var ans = 1
// function fact(n){
//     for(var i=n;i>=1;i--)
//     {
//         ans *= i
//     }
//     document.write(ans)

// }
// fact(5)

//********chapter 35 Q no 7 */

// function num(){
// var startnum= prompt("Enter start number")
// var endnum = prompt("Enter End Number")
// for(var i= startnum ; i<=endnum;i++)

// document.write(i+"<br>")

// }

// num()

//********chapter 35 Q no 8 */


function calculateHypotenuse(base,perpendicular){
   
    var bsquare= base*base
    var psquare=perpendicular*perpendicular
    var hypo=bsquare+psquare
     var hypot =Math.sqrt(hypo)
    return hypot
   }

console.log(calculateHypotenuse(6,8))
