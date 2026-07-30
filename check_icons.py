import urllib.request

icons = [
  ("HTML5", "https://cdn.simpleicons.org/html5/E34F26"),
  ("CSS3", "https://cdn.simpleicons.org/css3/1572B6"),
  ("JavaScript", "https://cdn.simpleicons.org/javascript/F7DF1E"),
  ("TypeScript", "https://cdn.simpleicons.org/typescript/3178C6"),
  ("React", "https://cdn.simpleicons.org/react/61DAFB"),
  ("Next.js", "https://cdn.simpleicons.org/nextdotjs/000000"),
  ("Node.js", "https://cdn.simpleicons.org/nodedotjs/339933"),
  ("Express.js", "https://cdn.simpleicons.org/express/000000"),
  ("Firebase", "https://cdn.simpleicons.org/firebase/DD2C00"),
  ("Git", "https://cdn.simpleicons.org/git/F05032"),
  ("GitHub", "https://cdn.simpleicons.org/github/181717"),
  ("Vercel", "https://cdn.simpleicons.org/vercel/000000"),
  ("Cloudflare", "https://cdn.simpleicons.org/cloudflare/F38020"),
  ("Visual Studio Code", "https://cdn.simpleicons.org/visualstudiocode/007ACC"),
  ("npm", "https://cdn.simpleicons.org/npm/CB3837"),
  ("OpenAI", "https://cdn.simpleicons.org/openai/412991"),
  ("Google AI Studio", "https://cdn.simpleicons.org/google/4285F4"),
  ("Google Gemini", "https://cdn.simpleicons.org/googlegemini/8E75B2"),
  ("Claude", "https://cdn.simpleicons.org/claude/D97757"),
  ("Cursor AI", "https://cdn.simpleicons.org/cursor/000000"),
  ("Figma", "https://cdn.simpleicons.org/figma/F24E1E"),
]

for name, url in icons:
    try:
        urllib.request.urlopen(url)
    except Exception as e:
        print(f"Failed: {name} - {url} ({e})")
