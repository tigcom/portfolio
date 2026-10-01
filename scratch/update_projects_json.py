import json

with open(r'd:\project\portfolio\src\data\projects.json', 'r', encoding='utf-8') as f:
    projects = json.load(f)

new_project = {
  "slug": "renew-ticfactory",
  "num": f"{len(projects)+1:02d}",
  "title": {
    "en": "TIC Factory — Enterprise B2B Agro-Tech Platform",
    "vi": "TIC Factory — Nền tảng Nông sản & Công nghệ B2B"
  },
  "subtitle": {
    "en": "High-End Redesign for B2B Gac & Tropical Agricultural Processing",
    "vi": "Nền tảng B2B Nông sản Xuất khẩu & Chế biến Chiết xuất Gấc"
  },
  "category": "development",
  "tags": [
    "Next.js 15",
    "React 19",
    "GSAP 3",
    "Tailwind CSS v4",
    "Lenis Smooth Scroll",
    "TypeScript"
  ],
  "year": "2026",
  "img": "/image/projects/renew-ticfactory/hero-home.png",
  "colorBackgound": { "light": "#0F2E1B", "dark": "#051A0D" },
  "heroImg": "/image/projects/renew-ticfactory/hero-home.png",
  "galleryLayout": "cover-flow",
  "galleryImgs": [
    "/image/projects/renew-ticfactory/hero-home.png",
    "/image/projects/renew-ticfactory/factory-tech.png",
    "/image/projects/renew-ticfactory/oem-odm-services.png",
    "/image/projects/renew-ticfactory/products-catalog.png",
    "/image/projects/renew-ticfactory/quality-export.png",
    "/image/projects/renew-ticfactory/home-mobile.png"
  ],
  "techStack": [
    "Next.js 15",
    "React 19",
    "GSAP 3.12",
    "Lenis 1.1",
    "Tailwind CSS v4",
    "TypeScript",
    "Lucide React"
  ],
  "role": {
    "en": "Lead UI/UX & Frontend Developer",
    "vi": "Trưởng nhóm Thiết kế UI/UX & Frontend Developer"
  },
  "overview": {
    "en": "TIC Factory is an enterprise B2B agro-tech platform built for a leading manufacturer specializing in Gac fruit extracts (cold-pressed Gac oil, freeze-dried powder, frozen puree) and tropical agricultural exports. The platform showcases high-end industrial processing capabilities, OEM/ODM solutions, international quality certifications (ISO 22000, HACCP, FDA), and interactive product exploration for global importers.",
    "vi": "TIC Factory là nền tảng số B2B dành cho nhà sản xuất & xuất khẩu nông sản hàng đầu Việt Nam, chuyên về các sản phẩm chiết xuất từ Gấc (dầu gấc ép lạnh, bột gấc sấy thăng hoa, puree gấc cấp đông) và nông sản nhiệt đới. Nền tảng trình diễn năng lực chế biến công nghiệp cao, dịch vụ gia công OEM/ODM, tiêu chuẩn chất lượng quốc tế (ISO 22000, HACCP, FDA) cùng giao diện trải nghiệm sản phẩm tương tác cho đối tác toàn cầu."
  },
  "problem": {
    "en": "Traditional agricultural B2B websites often lack visual identity, smooth interactive experience, and clear presentation of high-tech manufacturing standards required by international buyers. The objective was to create a modern, anti-slop high-end web experience with asynchronous smooth scrolling, custom GSAP animations, 12-column asymmetric grids, and OKLCH color palettes reflecting high-tech agriculture.",
    "vi": "Các trang web B2B nông sản truyền thống thường thiếu bản sắc thương hiệu, trải nghiệm tương tác chưa mượt mà và chưa làm nổi bật được chuẩn mực sản xuất công nghệ cao trước các đối tác quốc tế. Mục tiêu dự án là tái kiến thiết trải nghiệm web cao cấp, ứng dụng cuộn mượt bất đồng bộ (Lenis), hiệu ứng GSAP tùy biến, bố cục lưới 12 cột bất đối xứng và bảng màu OKLCH đậm chất nông sản công nghệ cao."
  },
  "processSteps": [
    {
      "title": {
        "en": "High-End Anti-Slop UI & Layout",
        "vi": "Kiến trúc Giao diện Cao cấp Anti-Slop"
      },
      "description": {
        "en": "Designed asymmetrical 12-column CSS grid layouts, custom typography pairing Geist with display accents, multi-layered micro-shadows, and dark mode OKLCH surfaces with noise overlays.",
        "vi": "Thiết kế bố cục CSS Grid 12 cột bất đối xứng, phối hợp phông chữ Geist chuẩn mực, hiệu ứng bóng đổ đa tầng và bề mặt OKLCH tối có lớp phủ phím noise tinh tế."
      }
    },
    {
      "title": {
        "en": "GSAP & Lenis Smooth Motion Engine",
        "vi": "Động cơ Chuyển động GSAP & Lenis"
      },
      "description": {
        "en": "Integrated Lenis smooth scrolling bound to GSAP ticker without standard transitions, featuring pinned section scrubs, interactive product showcases, and responsive motion matching user preferences.",
        "vi": "Tích hợp cuộn mượt Lenis đồng bộ cùng vòng lặp RAF của GSAP, tạo nên các phân khu pin scroll, trình diễn sản phẩm tương tác và hiệu ứng chuyển động tối ưu hiệu năng."
      }
    },
    {
      "title": {
        "en": "B2B OEM/ODM & Factory Capabilities",
        "vi": "Phân khu Nhà máy & Gia công OEM/ODM B2B"
      },
      "description": {
        "en": "Structured detailed pages for factory technical specs, extraction process flowcharts, export certification standards, and R&D consultation request forms for global B2B clients.",
        "vi": "Xây dựng chi tiết các phân khu kỹ thuật nhà máy, quy trình chiết xuất ép lạnh/sấy thăng hoa, tiêu chuẩn xuất khẩu quốc tế và biểu mẫu đăng ký tư vấn R&D cho khách hàng B2B."
      }
    }
  ],
  "results": [
    {
      "value": 100,
      "suffix": "%",
      "label": {
        "en": "Responsive & Anti-Slop Verified",
        "vi": "Chuẩn Giao diện Anti-Slop & Responsive"
      }
    },
    {
      "value": 5,
      "suffix": "+",
      "label": {
        "en": "B2B Product Portfolios",
        "vi": "Dòng Sản phẩm B2B Chủ lực"
      }
    },
    {
      "value": 60,
      "suffix": "fps",
      "label": {
        "en": "Smooth GSAP Animation",
        "vi": "Hiệu năng Chuyển động GSAP"
      }
    },
    {
      "value": 3,
      "suffix": "+",
      "label": {
        "en": "Global Certifications (ISO/HACCP/FDA)",
        "vi": "Chứng nhận Quốc tế (ISO/HACCP/FDA)"
      }
    }
  ],
  "githubLink": "",
  "prevSlug": "internet-banking",
  "prevTitle": {
    "en": "KBIZ Internet Banking",
    "vi": "KBIZ Internet Banking Doanh nghiệp"
  },
  "nextSlug": "sixdo-ecommerce",
  "nextTitle": {
    "en": "SIXDO E-Commerce",
    "vi": "SIXDO E-Commerce"
  }
}

# Check if renew-ticfactory already exists
existing = [p for p in projects if p.get('slug') == 'renew-ticfactory']
if not existing:
    projects.append(new_project)
    print("Added renew-ticfactory to projects.json")
else:
    # Update existing
    idx = projects.index(existing[0])
    projects[idx] = new_project
    print("Updated renew-ticfactory in projects.json")

with open(r'd:\project\portfolio\src\data\projects.json', 'w', encoding='utf-8') as f:
    json.dump(projects, f, ensure_ascii=False, indent=2)

print(f"Total projects in projects.json: {len(projects)}")
