var bmi;

function calculateBMI() {
    //get variables
    var hfeet = parseFloat(document.getElementById("height-feet").value);
    var hinch = parseFloat(document.getElementById("height-inch").value);
    var weight = parseFloat(document.getElementById("weight").value);

    //math
    var heightInches = (hfeet * 12) + hinch;
    bmi = (weight * 703)/Math.pow(heightInches, 2);

    //logic
    var message;
    if (bmi >= 30) {
        message = "You are obese."
    } else if (bmi >= 25) {
        message = "You are overweight."
    } else if  (bmi >= 18.5) {
        message = "You are normal weight."
    } else {
        message = "You are underweight."
    }

    //out
    document.getElementById("output").innerHTML = "Your BMI is " + bmi + ". " + message;

    $(document).ready(function() {
        if (bmi >= 30) {
            $("#obese").css("background-color", "yellow")
        } else if (bmi >= 25) {
            $("#over").css("background-color", "yellow")
        } else if  (bmi >= 18.5) {
            $("#normal").css("background-color", "yellow")
        } else {
            $("#under").css("background-color", "yellow")
        }
    });
}

function clearform() {
    document.getElementById("output").innerHTML = "";
    $("tr").css("background-color", "#f19f4d")
}