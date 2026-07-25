import urllib.request
import json
import re

url = "https://unsplash.com/ntext/search/photos?query=laptop"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    print(urllib.request.urlopen(req).read().decode('utf-8')[:200])
except Exception as e:
    print(e)
