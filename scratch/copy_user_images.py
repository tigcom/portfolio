import shutil
import os

user_uploaded_dir = r"C:\Users\GIGABYTE\.gemini\antigravity\brain\1438a90e-7307-469e-8200-8d8172ebd02a\.user_uploaded"
target_dir = r"d:\project\portfolio\public\image\projects\renew-ticfactory"

mapping = {
    "media_1790002211289.png": "thap-ho-so-3d.png",
    "media_1790002239743.png": "footer-section.png",
    "media_1790002261287.png": "quote-request-oem.png"
}

for src_name, dest_name in mapping.items():
    src_path = os.path.join(user_uploaded_dir, src_name)
    dest_path = os.path.join(target_dir, dest_name)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dest_path)
        print(f"Copied user image {src_name} -> {dest_name}")
    else:
        print(f"ERROR: {src_path} does not exist!")

print("User images copied successfully.")
