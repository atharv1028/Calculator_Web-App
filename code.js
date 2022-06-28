img = "";
number1 = "";
number2 = "";
answer = "";
equation = "";

function addition()
{
    answer = Number(document.getElementById("number1Input").value) + Number(document.getElementById("number2Input").value);
    document.getElementById("answer1").innerHTML = "Answer : " + answer;
}

function subtraction()
{
    document.getElementById("number1Input").value = number1;
    document.getElementById("number2Input").value = number2;
    equation = "subtract";
    document.getElementById("statement").innerHTML = number1 + " - " + number2;
}

function multiplication()
{
    document.getElementById("number1Input").value = number1;
    document.getElementById("number2Input").value = number2;
    equation = "multiply";
    document.getElementById("statement").innerHTML = number1 + " × " + number2;
}

function division()
{
    number1 = document.getElementById("number1Input").value;
    number2 = document.getElementById("number2Input").value;
    answer = number1 / number2;
    document.getElementById("answer1").innerHTML = "Answer : " + answer;
}