import os
import shutil
import sys

# Force UTF-8 stdout
sys.stdout.reconfigure(encoding='utf-8')

src_dir = r"C:\Users\GIGABYTE\Downloads\FireShot"
dest_dir = r"d:\project\portfolio\public\image\projects\renew-ticfactory"

os.makedirs(dest_dir, exist_ok=True)

files = sorted([f for f in os.listdir(src_dir) if f.endswith('.png')])

mapping = {
    "FireShot Capture 008 - TIC FACTORY — Nhà Máy Chế Biến Gấc & Nông Sản Xuất Khẩu Tây Ninh_ - [ticfactory-demo.vercel.app].png": "fireshot-008.png",
    "FireShot Capture 013 - TIC FACTORY — Nhà Máy Chế Biến Gấc & Nông Sản Xuất Khẩu Tây Ninh_ - [ticfactory-demo.vercel.app].png": "fireshot-013.png",
    "FireShot Capture 014 - TIC FACTORY — Nhà Máy Chế Biến Gấc & Nông Sản Xuất Khẩu Tây Ninh_ - [ticfactory-demo.vercel.app].png": "fireshot-014.png",
    "FireShot Capture 015 - TIC FACTORY — Nhà Máy Chế Biến Gấc & Nông Sản Xuất Khẩu Tây Ninh_ - [ticfactory-demo.vercel.app].png": "fireshot-015.png",
    "FireShot Capture 017 - TIC FACTORY — Nhà Máy Chế Biến Gấc & Nông Sản Xuất Khẩu Tây Ninh_ - [ticfactory-demo.vercel.app].png": "fireshot-017.png",
    "FireShot Capture 018 - TIC FACTORY — Nhà Máy Chế Biến Gấc & Nông Sản Xuất Khẩu Tây Ninh_ - [ticfactory-demo.vercel.app].png": "fireshot-018.png",
    "FireShot Capture 019 - Góc Nhìn Chuyên Gia & Hồ Sơ Nông Học - TIC FACTORY Insights - TIC F_ - [ticfactory-demo.vercel.app].png": "fireshot-019.png"
}

print(f"Found {len(files)} FireShot images in {src_dir}")

for original_name, new_name in mapping.items():
    src_file = os.path.join(src_dir, original_name)
    dest_file = os.path.join(dest_dir, new_name)
    if os.path.exists(src_file):
        shutil.copy2(src_file, dest_file)
        print(f"Copied to {new_name}")
    else:
        print(f"WARNING: File not found: {original_name}")

print("Copy completed successfully.")
