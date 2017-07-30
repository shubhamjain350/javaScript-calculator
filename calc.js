/**
 * Created by pranavkapoor on 09/07/17.
 */
var firstNumber="";
var secondNumber="";
var flag=false;
var operator="pero";
function forFirstNumber(id){
  if(id=="zero" && flag==false && firstNumber.length<8) {
      firstNumber = firstNumber.concat("0");
      $("#displayBar").text(firstNumber);
  }

      else if(id=="zero" && flag==true && secondNumber.length<8){
          secondNumber=secondNumber.concat("0");
          $("#displayBar").text(secondNumber);
  }
    if(id=="one" && flag==false && firstNumber.length<8) {
        firstNumber = firstNumber.concat("1");
        $("#displayBar").text(firstNumber);
    }
    else if(id=="one" && flag==true && secondNumber.length<8){
        secondNumber=secondNumber.concat("1");
        $("#displayBar").text(secondNumber);
    }
    if(id=="two" && flag==false && firstNumber.length<8) {
        firstNumber = firstNumber.concat("2");
        $("#displayBar").text(firstNumber);
    }
    else if(id=="two" && flag==true && secondNumber.length<8){
        secondNumber=secondNumber.concat("2");
        $("#displayBar").text(secondNumber);
    }
    if(id=="three" && flag==false && firstNumber.length<8) {
        firstNumber = firstNumber.concat("3");
        $("#displayBar").text(firstNumber);
    }
    else if(id=="three" && flag==true && secondNumber.length<8){
       secondNumber=secondNumber.concat("3");
        $("#displayBar").text(secondNumber);
    }
    if(id=="four" && flag==false && firstNumber.length<8) {
        firstNumber = firstNumber.concat("4");
        $("#displayBar").text(firstNumber);
    }
    else if(id=="four" && flag==true && secondNumber.length<8){
        secondNumber=secondNumber.concat("4");
        $("#displayBar").text(secondNumber);
    }
    if(id=="five" && flag==false && firstNumber.length<8) {
        firstNumber = firstNumber.concat("5");
        $("#displayBar").text(firstNumber);
    }
    else if(id=="five" && flag==true && secondNumber.length<8){
        secondNumber=secondNumber.concat("5");
        $("#displayBar").text(secondNumber);
    }
    if(id=="six" && flag==false && firstNumber.length<8) {
        firstNumber = firstNumber.concat("6");
        $("#displayBar").text(firstNumber);
    }
    else if(id=="six" && flag==true && secondNumber.length<8){
       secondNumber=secondNumber.concat("6");
        $("#displayBar").text(secondNumber);
    }
    if(id=="seven" && flag==false && firstNumber.length<8) {
        firstNumber = firstNumber.concat("7");
        $("#displayBar").text(firstNumber);
    }
    else if(id=="seven" && flag==true && secondNumber.length<8){
        secondNumber=secondNumber.concat("7");
        $("#displayBar").text(secondNumber);
    }
    if(id=="eight" && flag==false && firstNumber.length<8) {
        firstNumber = firstNumber.concat("8");
        $("#displayBar").text(firstNumber);
    }
    else if(id=="eight" && flag==true && secondNumber.length<8){
        secondNumber=secondNumber.concat("8");
        $("#displayBar").text(secondNumber);
    }
    if(id=="nine" && flag==false && firstNumber.length<8) {
        firstNumber = firstNumber.concat("9");
        $("#displayBar").text(firstNumber);
    }
    else if(id=="nine" && flag==true && secondNumber.length<8){
       secondNumber=secondNumber.concat("9");
        $("#displayBar").text(secondNumber);
    }
    if(id=="ac")
    {

            $("#displayBar").text("Pranav Calculator");
        }
};

    $("#zero").click(function () {
       forFirstNumber("zero");

    });
        $("#one").click(function () {
            forFirstNumber("one");

    });

    $("#two").click(function () {
        forFirstNumber("two");
    });

    $("#three").click(function () {
        forFirstNumber("three");

    });

    $("#four").click(function () {
        forFirstNumber("four");


    });

    $("#five").click(function () {
        forFirstNumber("five");


    });

    $("#six").click(function () {
        forFirstNumber("six");

    });

    $("#seven").click(function () {
        forFirstNumber("seven");

    });

    $("#eight").click(function () {
        forFirstNumber("eight");

    });

    $("#nine").click(function () {
        forFirstNumber("nine");
    });

$("#ac").click(function () {

    firstNumber="";
    secondNumber="";
flag=false;
    forFirstNumber("ac");

});
function stringToNumber(Number) {
return parseInt(Number);

}
$("#equal").click(function () {

if(operator=="pero")
{
    $("#displayBar").text("Pranav Calculator");
}
else if(operator=="plus"){
    firstNumber=stringToNumber(firstNumber);
    secondNumber=stringToNumber(secondNumber);
    answer=firstNumber+secondNumber;
    $("#displayBar").text(answer);

    firstNumber="";
    secondNumber="";


}
else if(operator=="minus")
{
    firstNumber=stringToNumber(firstNumber);
    secondNumber=stringToNumber(secondNumber);
    answer=firstNumber-secondNumber;

    $("#displayBar").text(answer);

    firstNumber="";
    secondNumber="";

}
else if(operator=="multiply"){
    firstNumber=stringToNumber(firstNumber);
    secondNumber=stringToNumber(secondNumber);
    answer=firstNumber*secondNumber;
    $("#displayBar").text(answer);

    firstNumber="";
    secondNumber="";
}
else if(operator=="divide"){
    firstNumber=stringToNumber(firstNumber);
    secondNumber=stringToNumber(secondNumber);
    answer=firstNumber/secondNumber;
    answer=answer +"";

    if(answer.length>12){
        answer=answer.substring(0,12);
        $("#displayBar").text(answer);
    }
    else{
        $("#displayBar").text(answer);
    }

    firstNumber="";
    secondNumber="";

}
else if(operator=="percentage"){
    firstNumber=stringToNumber(firstNumber);
    secondNumber=stringToNumber(secondNumber);
    answer=firstNumber%secondNumber;
    $("#displayBar").text(answer);

    firstNumber="";
    secondNumber="";
}

}); //closing of result calculation, which is taking operator as a input and calculating the result

    $("#plus").click(function () {
flag=true;
operator="plus";

    });
    $("#minus").click(function () {
flag=true;
        operator="minus";

    });
    $("#multiply").click(function () {
flag=true;
        operator="multiply";

    });
    $("#divide").click(function () {
flag =true;
        operator="divide";


    });
$("#percentage").click(function () {
    flag =true;
    operator="percentage";


});



