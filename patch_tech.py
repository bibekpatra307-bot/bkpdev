import re

with open('components/home/Technologies.tsx', 'r') as f:
    content = f.read()

content = content.replace("'https://cdn.simpleicons.org/css3/1572B6'", "'/icons/css3.svg'")
content = content.replace("'https://cdn.simpleicons.org/visualstudiocode/007ACC'", "'/icons/vscode.svg'")
content = content.replace("'https://cdn.simpleicons.org/openai/412991'", "'/icons/openai.svg'")

with open('components/home/Technologies.tsx', 'w') as f:
    f.write(content)
