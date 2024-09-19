function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const bmi = weight / (height * height);

    // Determine BMI category
    let category;
    if (bmi < 18) {
        category = 'Underweight 😒';
    } else if (bmi < 24) {
        category = 'Normal weight 😎';
    } else if (bmi < 29) {
        category = 'Overweight you are Reduce excess weight by exersive !';
    } else {
        category = 'Obesity 😂';
    }

    // Display the result
    document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(2)} (${category}).`;
}
