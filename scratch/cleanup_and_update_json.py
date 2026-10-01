import os
import json

dest_dir = r"d:\project\portfolio\public\image\projects\renew-ticfactory"
keep_files = {
    "fireshot-008.png",
    "fireshot-013.png",
    "fireshot-014.png",
    "fireshot-015.png",
    "fireshot-017.png",
    "fireshot-018.png",
    "fireshot-019.png"
}

for fname in os.listdir(dest_dir):
    if fname not in keep_files:
        p = os.path.join(dest_dir, fname)
        os.remove(p)
        print(f"Removed legacy file: {fname}")

# Update projects.json
json_path = r"d:\project\portfolio\src\data\projects.json"
with open(json_path, 'r', encoding='utf-8') as f:
    projects = json.load(f)

for p in projects:
    if p.get('slug') == 'renew-ticfactory':
        p['img'] = "/image/projects/renew-ticfactory/fireshot-008.png"
        p['heroImg'] = "/image/projects/renew-ticfactory/fireshot-008.png"
        p['galleryLayout'] = None  # We will use custom TicFactoryMockup component!
        p['colorBackgound'] = { "light": "#EFECE6", "dark": "#0B2114" }
        p['galleryImgs'] = [
            "/image/projects/renew-ticfactory/fireshot-008.png",
            "/image/projects/renew-ticfactory/fireshot-014.png",
            "/image/projects/renew-ticfactory/fireshot-013.png",
            "/image/projects/renew-ticfactory/fireshot-017.png",
            "/image/projects/renew-ticfactory/fireshot-015.png",
            "/image/projects/renew-ticfactory/fireshot-019.png",
            "/image/projects/renew-ticfactory/fireshot-018.png"
        ]
        break

with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(projects, f, ensure_ascii=False, indent=2)

print("projects.json updated with fireshot images.")
