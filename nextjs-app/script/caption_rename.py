import os
import re
import base64
from openai import OpenAI
from PIL import Image   # 用来获取图片像素大小

# 初始化 OpenAI
client = OpenAI()

# 需要处理的文件夹路径
IMAGE_FOLDER = r"C:\Users\zhang\Downloads\Downloads\独立站图片素材\英文"

# 清理描述字符串 -> 合法文件名
def sanitize_filename(text, max_length=80):
    text = re.sub(r'[^a-zA-Z0-9_\- ]', '', text)
    text = text.strip().replace(" ", "_")
    return text[:max_length]

def generate_caption(image_path):
    # 读取图片并转 base64
    with open(image_path, "rb") as f:
        b64_image = base64.b64encode(f.read()).decode("utf-8")

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": "请用简洁的英文描述这张图片，5-10个词即可，方便重命名文件。"},
                    {
                        "type": "image_url",
                        "image_url": {"url": f"data:image/jpeg;base64,{b64_image}"}
                    },
                ],
            }
        ],
    )
    return response.choices[0].message.content.strip()

def main():
    print(f"🔍 开始扫描文件夹: {IMAGE_FOLDER}")

    for filename in os.listdir(IMAGE_FOLDER):
        filepath = os.path.join(IMAGE_FOLDER, filename)
        if not os.path.isfile(filepath):
            continue
        if not filename.lower().endswith((".jpg", ".jpeg", ".png")):
            continue

        print(f"正在处理: {filename}")
        try:
            # 获取图片分辨率
            with Image.open(filepath) as img:
                width, height = img.size

            # AI 生成描述
            caption = generate_caption(filepath)
            safe_name = sanitize_filename(caption)

            # 新文件名：描述 + 像素大小
            new_filename = f"{safe_name}_{width}x{height}{os.path.splitext(filename)[1]}"
            new_path = os.path.join(IMAGE_FOLDER, new_filename)

            os.rename(filepath, new_path)
            print(f"✅ {filename} -> {new_filename}")

        except Exception as e:
            print(f"❌ {filename} 出错: {e}")

if __name__ == "__main__":
    main()
