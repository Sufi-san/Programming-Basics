# Program to convert a month short form into the full name of the month
monthConversions = {  # A Dictionary
    # Keys: (All keys must be unique)
    "Jan": "January",
    "Feb": "February",
    "Mar": "March",
    "Apr": "April",
    "May": "May",
    "Jun": "June",
    "Jul": "July",
    "Aug": "August",
    "Sep": "September",
    "Oct": "October",
    "Nov": "November",
    "Dec": "December"
}
print(monthConversions)
print(monthConversions["Jan"])
print(monthConversions.get("Sep"))
print(monthConversions.get("Jam", "Invalid Key"))  # Default value when a key isn't found
