function calculate() {
    // modes: 
    // bmi - 1
    // bmr - 2
    // needed calorie intake - 3

    //variables assignment
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var age = document.getElementById("age").value;


    if (document.getElementById("sex_female").checked === false && document.getElementById("sex_male").checked === false) {
        alert("Enter gender!");
        calculations();
    }

    //BMI calculation
    var BMI = weight / (height * height) * 10000;
    BMI = Math.round(BMI);

    //BMR calculation
    //This is based on the Mifflin - St Jeor equation. 
    var BMR;
    if (document.getElementById("sex_male").checked === true) {
        BMR = 10 * weight + 6.25 * height - 5 * age + 5; //man
    } else {
        BMR = 10 * weight + 6.25 * height - 5 * age - 161; //woman
    }

    //Needeed calorie intake based on the activity level calculations
    var calorie_intake;

    if (document.getElementById("rarely").checked === true) {
        calorie_intake = BMR * 1.2;
    } else if (document.getElementById("often").checked === true) {
        calorie_intake = BMR * 1.375;
    } else if (document.getElementById("very-often").checked === true) {
        calorie_intake = BMR * 1.55;
    } else if (document.getElementById("everyday").checked === true) {
        calorie_intake = BMR * 1.95;
    } else {
        alert("If you don't enter your training activity, we can't calculate your calorie intake.");
    }

    //Needeed calorie intake based on the activity level calculations
    var calorie_intake;

    if (document.getElementById("BMI").checked === true) {
        var mode = 1;
    } else if (document.getElementById("BMR").checked === true) {
        var mode = 2;
    } else if (document.getElementById("intake").checked === true) {
        var mode = 3;
    } else if (document.getElementById("all").checked === true) {
        var mode = 4;
    } else {
        alert("Please choose what to calculate.");
    }

    //checking if user input is legit         
    if (document.getElementById("age").value > 0 && document.getElementById("age").value <= 120) {
        if (height > 55 && height < 290) {
            if (weight > 15 && weight < 290) {
                if (mode == 1) alert("Your BMI is " + BMI + ".\n");
                else if (mode == 2) alert("Your BMR is: " + BMR + ".\n");
                else if (mode == 3) alert("Your calorie intake should be: " + calorie_intake);
                else alert("Your BMI is " + BMI + ".\n" + "Your BMR is: " + BMR + ".\nYour calorie intake should be: " + calorie_intake);
            } else alert("Wrong weight input, please try again");

        } else alert("Wrong height input, please try again");

    } else alert("Invalid age input, please try again");
    return 0; //success
}