import json

with open(r'd:\project\portfolio\src\data\projects.json', 'r', encoding='utf-8') as f:
    projects = json.load(f)

for p in projects:
    if p.get('slug') == 'renew-ticfactory':
        p['galleryImgs'] = [
            "/image/projects/renew-ticfactory/hero-home.png",
            "/image/projects/renew-ticfactory/factory-tech.png",
            "/image/projects/renew-ticfactory/thap-ho-so-3d.png",
            "/image/projects/renew-ticfactory/quote-request-oem.png",
            "/image/projects/renew-ticfactory/news-detail.png",
            "/image/projects/renew-ticfactory/footer-section.png"
        ]
        break

with open(r'd:\project\portfolio\src\data\projects.json', 'w', encoding='utf-8') as f:
    json.dump(projects, f, ensure_ascii=False, indent=2)

print("Successfully updated galleryImgs for renew-ticfactory in projects.json")
