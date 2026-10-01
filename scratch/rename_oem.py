import os

dir_path = r"d:\project\portfolio\public\image\projects\renew-ticfactory"
old_name = os.path.join(dir_path, "ticfactory-full-oem.png.png")
new_name = os.path.join(dir_path, "ticfactory-full-oem.png")

if os.path.exists(old_name):
    if os.path.exists(new_name):
        os.remove(new_name)
    os.rename(old_name, new_name)
    print("Renamed ticfactory-full-oem.png.png -> ticfactory-full-oem.png")
else:
    print("ticfactory-full-oem.png.png not found or already renamed.")
