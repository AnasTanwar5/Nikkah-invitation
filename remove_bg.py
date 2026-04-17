from PIL import Image
import sys

def remove_white(image_path, out_path):
    img = Image.open(image_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(out_path, "PNG")

remove_white("public/assets/flower-corner.png", "public/assets/flower-corner.png")
remove_white("public/assets/flower-center.png", "public/assets/flower-center.png")
print("Done")
