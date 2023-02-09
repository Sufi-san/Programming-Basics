# Program to convert fahrenheit to celcius temperature

fahrenheit = float(input("Enter the temperature in fahrenheit: "))
celcius = round((fahrenheit-32)*5/9,3)
print(f"Celcius Temperature: {celcius}\u00B0C")