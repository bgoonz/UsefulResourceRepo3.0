# import the required library
import requests

site = input("Enter website url: ")
response = requests.get(site)

# printing the html of website
print(response.text)

# sending requests to website
if response.status_code == 200:
    response = requests.get(site + "/admin.php")

    if response.status_code == 200:
        print("Vulnerable")
    else:
        print("Non-vulnerable")

else:
    print("Failure")
