import requests, json, os, time
from datetime import datetime

api_key = open(os.path.expanduser("~/.config/openweathermap/api-key"), "r").read()
city = "Algonquin"
country_code = "US"
lang = "en"
units = "imperial"
complete_url = "http://api.openweathermap.org/data/2.5/weather?appid={}&q={},{}&lang={}&units={}".format(api_key, city, country_code, lang, units)

response = requests.get(complete_url)

x = response.json()

def eww(variable, value):
    os.system("{} {}=\"{}\"".format("eww -c $HOME/.config/hypr/components/eww update", variable, value))

# icons codes -> https://openweathermap.org/weather-conditions
def getIcon(iconCode):
    switcher = {
        "01d": "",
        "01n": "",
        "02d": "",
        "02n": "",
        "03d": "",
        "03n": "",
        "04d": "",
        "04n": "",
        "09d": "",
        "09n": "",
        "10d": "",
        "10n": "",
        "11d": "",
        "11n": "",
        "13d": "",
        "13n": "",
        "50d": "",
        "50n": "",
    }
    return switcher.get(iconCode, "?")


if x["cod"] != "404":
    eww("weatherIcon", getIcon(x["weather"][0]["icon"]))
    eww("weatherDescription", x["weather"][0]["description"])
    eww("weatherTemperature", "{}".format(int(x["main"]["temp"])))
    eww("windValue", "{} mph".format(int(x["wind"]["speed"])))
    eww("sunrise", time.strftime("%l:%M %p", time.localtime(x["sys"]["sunrise"])))
    eww("sunset", time.strftime("%I:%M %p", time.localtime(x["sys"]["sunset"])))

else:
    print(" City Not Found ")