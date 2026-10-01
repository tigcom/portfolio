import json

json_path = r"d:\project\portfolio\src\data\projects.json"
with open(json_path, 'r', encoding='utf-8') as f:
    projects = json.load(f)

updated_kplus = False
updated_ticfactory = False

for p in projects:
    if p.get('slug') == 'kplus-digital-banking':
        p['img'] = "/image/k-pluss.png"
        updated_kplus = True
    elif p.get('slug') == 'renew-ticfactory':
        p['img'] = "/image/ticfactory.png"
        updated_ticfactory = True

with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(projects, f, ensure_ascii=False, indent=2)

print(f"Updated kplus-digital-banking img: {updated_kplus}")
print(f"Updated renew-ticfactory img: {updated_ticfactory}")
