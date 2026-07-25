import urllib.request
import re

topics = ['coding', 'laptop', 'server', 'cyber', 'data-center', 'software']
ids = set()

for topic in topics:
    url = f"https://html.duckduckgo.com/html/?q=site:unsplash.com/photos+{topic}"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        found = re.findall(r'unsplash\.com/photos/[a-zA-Z0-9-]+-([a-zA-Z0-9]{11})', html)
        for i in found: ids.add(i)
    except: pass

print(list(ids))
