// Temperature Converter

function celsiusToFahrenheit(celsius){
    var celsiusToFahrenheit = (celsius*9/5)+32;
    
    console.log(celsius +  " Celsius To Fahrenheit Degree : " + celsiusToFahrenheit + ` F `);
}
celsiusToFahrenheit(20);


function fahrenheitToCelsius(fahrenheit){
    var fahrenheitToCelsius = (fahrenheit-32)*5/9;
    
    console.log(fahrenheit + " Fahrenheit To Celsius Degree : " + fahrenheitToCelsius + ` C `)
}
fahrenheitToCelsius(78);
