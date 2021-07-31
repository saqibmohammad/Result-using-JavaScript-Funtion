function result(n)
{
switch (true){
    case n<35:
        console.log("RESULT: FAILED");
        break;
    case n>=35 && n<60:
        console.log("RESULT: PASSED with SECOND DIVISON");
        break;
    case n>=60 && n<80:
        console.log("RESULT: PASSED with FIRST DIVISON");
        break;
    case n>85 && n<=100:
        console.log("RESULT: PASSED with DISTINCTION")
        break;
    default:
        console.log("ERROR! Make Sure you Haven't Enter Percentage between 80 to 85 or above 100")
}
}

result(89);