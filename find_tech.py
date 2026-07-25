import urllib.request
import json
import re

good_ids = []
for i in range(1, 10):
    url = f"https://picsum.photos/v2/list?page={i}&limit=100"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        data = json.loads(urllib.request.urlopen(req).read().decode('utf-8'))
        for item in data:
            if re.search(r'computer|laptop|macbook|desk|tech|office|typewriter|screen', item.get('url', ''), re.IGNORECASE):
                good_ids.append(item['id'])
    except Exception as e:
        print(e)
print(good_ids)
