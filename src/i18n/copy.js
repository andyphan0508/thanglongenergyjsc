// Static per-page copy that lives outside data/content.js (headings, ledes,
// labels). Each leaf is a { vi, en } pair; headings split into pre/em/post so
// components can re-insert the italic <em> emphasis around the right words.

export const nav = {
  contactCta: { vi: "Liên hệ", en: "Contact" },
  drawerCta: { vi: "Liên hệ hợp tác", en: "Partner with us" }
};

export const footer = {
  tagline: {
    vi: "Tiên phong đầu tư hạ tầng năng lượng tái tạo, tổ hợp sản xuất tuabin gió và các khu công nghiệp trọng điểm quốc gia.",
    en: "Pioneering investment in renewable energy infrastructure, wind turbine manufacturing complexes, and flagship national industrial parks."
  },
  taxCodeLabel: { vi: "MST", en: "Tax Code" },
  capitalLabel: { vi: "Vốn ĐL", en: "Charter Capital" },
  contactHeading: { vi: "Thông tin liên hệ", en: "Contact Information" },
  quickLinksHeading: { vi: "Điều hướng nhanh", en: "Quick Links" },
  officeLabel: { vi: "Trụ sở điều hành", en: "Head Office" },
  hotlineLabel: { vi: "Hotline trực tiếp", en: "Direct Hotline" },
  emailLabel: { vi: "Hộp thư điện tử", en: "Email" },
  rightsReserved: { vi: "Bảo lưu mọi quyền.", en: "All rights reserved." },
  legalRepLabel: { vi: "Đại diện pháp luật", en: "Legal Representative" },
  backToTop: { vi: "Về đầu trang", en: "Back to top" }
};

export const hero = {
  eyebrow: "Thang Long International Energy JSC",
  titlePre: { vi: "Kiến tạo hạ tầng ", en: "Building tomorrow's " },
  titleEm: { vi: "năng lượng & công nghiệp", en: "energy & industrial" },
  titlePost: { vi: " tương lai", en: " infrastructure" },
  lede: {
    vi: "Đầu tư và phát triển tổ hợp sản xuất tuabin điện gió 2.000MW, KCN đường sắt tốc độ cao và KCN Mộc Bài trên hành lang kinh tế Xuyên Á.",
    en: "Investing in and developing a 2,000MW wind turbine manufacturing complex, a high-speed railway industrial park, and Moc Bai Industrial Park on the Trans-Asia economic corridor."
  },
  ctaPrimary: { vi: "3 Đại dự án trọng điểm", en: "3 Flagship Projects" },
  ctaSecondary: { vi: "Hồ sơ pháp lý", en: "Legal Dossier" },
  visualCaption: { vi: "Tầm nhìn hạ tầng năng lượng — công nghiệp", en: "A vision for energy & industrial infrastructure" }
};

export const about = {
  eyebrow: { vi: "Hồ sơ doanh nghiệp", en: "Corporate Profile" },
  headingPre: { vi: "Hạ tầng công nghiệp & ", en: "International industrial & " },
  headingEm: { vi: "năng lượng tái tạo", en: "renewable energy" },
  headingPost: { vi: " quốc tế", en: " infrastructure" },
  lede: {
    vi: "quy tụ năng lực kỹ thuật và hợp tác quốc tế để phát triển các dự án hạ tầng công nghiệp nặng, năng lượng tái tạo và bất động sản khu kinh tế quy mô lớn.",
    en: "brings together engineering capability and international partnerships to develop large-scale heavy-industrial infrastructure, renewable energy, and economic-zone real estate projects."
  },
  pillars: [
    {
      title: { vi: "Chuyển giao công nghệ cao", en: "High-technology transfer" },
      desc: { vi: "Đối tác trực tiếp W2E Germany & Aeronautica USA", en: "Direct partnerships with W2E Germany & Aeronautica USA" }
    },
    {
      title: { vi: "Hạ tầng liên vùng", en: "Inter-regional infrastructure" },
      desc: {
        vi: "Tuyến đường sắt TP.HCM – Cần Thơ & KKT Xuyên Á",
        en: "Ho Chi Minh City – Can Tho railway & Trans-Asia economic zone"
      }
    },
    {
      title: { vi: "Năng lượng & vật liệu xanh", en: "Green energy & materials" },
      desc: { vi: "Điện gió ngoài khơi, tấm 3D và điện rác Plasma", en: "Offshore wind, 3D panels, and Plasma waste-to-energy" }
    }
  ],
  facts: [
    {
      label: { vi: "Vốn điều lệ", en: "Charter Capital" },
      sub: { vi: "100% vốn đăng ký hợp pháp", en: "100% legally registered capital" }
    },
    {
      label: { vi: "Mã số doanh nghiệp", en: "Enterprise Code" },
      sub: { vi: "Sở KH&ĐT TP.HCM cấp", en: "Issued by HCMC Dept. of Planning & Investment" }
    },
    {
      value: { vi: "Từ 28/04/2016", en: "Since 28/04/2016" },
      label: { vi: "Thời gian hoạt động", en: "Operating Since" },
      sub: { vi: "Đổi mới lần 2: 19/08/2020", en: "2nd amendment: 19/08/2020" }
    },
    {
      value: { vi: "Vincom Center, Q.1, TP.HCM", en: "Vincom Center, District 1, HCMC" },
      label: { vi: "Trụ sở điều hành", en: "Head Office" },
      sub: { vi: "Phòng 1508, 72 Lê Thánh Tôn", en: "Room 1508, 72 Le Thanh Ton" }
    }
  ],
  bannerCaption: {
    vi: "Phối cảnh tổ hợp nhà máy — hạ tầng công nghiệp thực tế",
    en: "Rendering of the factory complex — real industrial infrastructure"
  }
};

export const leadership = {
  eyebrow: { vi: "Ban lãnh đạo cấp cao", en: "Senior Leadership" },
  headingPre: { vi: "Kinh nghiệm quốc tế, tầm nhìn ", en: "International experience, a vision for " },
  headingEm: { vi: "công nghệ & năng lượng", en: "technology & energy" },
  headingPost: "",
  lede: {
    vi: "Hơn 4 thập kỷ cống hiến trong công nghiệp máy tính, tài chính bất động sản và năng lượng sạch tại Hoa Kỳ và quốc tế.",
    en: "Over four decades of contribution to the computer industry, real estate finance, and clean energy in the U.S. and internationally."
  },
  born: { vi: "sinh năm", en: "born" },
  badges: [
    { vi: "40+ năm Công nghệ cao Hoa Kỳ", en: "40+ years in U.S. high technology" },
    { vi: "Cựu Chủ tịch NCC (Irvine, California)", en: "Former Chairman, NCC (Irvine, California)" },
    { vi: "Chuyên gia Điện rác Plasma & Năng lượng tái tạo", en: "Plasma Waste-to-Energy & Renewables Expert" },
    { vi: "Công nghệ tấm 3D (Cộng hòa Áo)", en: "3D Panel Technology (Austria)" }
  ]
};

export const projectsPage = {
  eyebrow: { vi: "Dự án trọng điểm", en: "Flagship Projects" },
  headingPre: { vi: "Ba trụ cột hạ tầng ", en: "Three pillars of " },
  headingEm: { vi: "quy mô quốc gia", en: "national-scale infrastructure" },
  headingPost: "",
  lede: {
    vi: "Tập trung vào 3 lĩnh vực then chốt: sản xuất thiết bị điện gió, công nghiệp đường sắt tốc độ cao và khu kinh tế cửa khẩu Xuyên Á.",
    en: "Focused on three key sectors: wind power equipment manufacturing, high-speed railway industry, and the Trans-Asia border economic zone."
  },
  tagPrefix: { vi: "Dự án", en: "Project" },
  badgePrefix: { vi: "DỰ ÁN", en: "PROJECT" },
  photosCount: { vi: "hình ảnh", en: "photos" },
  galleryButton: { vi: "Xem bộ ảnh chi tiết", en: "View full gallery" },
  photosSuffix: { vi: "hình", en: "photos" }
};

export const capabilities = {
  eyebrow: { vi: "Năng lực thực thi", en: "Execution Capabilities" },
  headingPre: { vi: "Thiết bị, công nghệ & ", en: "Equipment, technology & " },
  headingEm: { vi: "kinh nghiệm thi công thực địa", en: "hands-on field experience" },
  headingPost: "",
  lede: {
    vi: "Năng lực toàn diện trong thi công điện gió ngoài khơi, thiết bị siêu trường siêu trọng, sản xuất ống thép và xử lý nền móng biển.",
    en: "Comprehensive capability in offshore wind construction, heavy-lift equipment, steel pipe manufacturing, and marine foundation works."
  }
};

export const licensesPage = {
  eyebrow: { vi: "Hồ sơ pháp lý minh bạch", en: "Transparent Legal Records" },
  headingPre: { vi: "Giấy phép & ", en: "Licenses & " },
  headingEm: { vi: "chứng nhận đầu tư chính thức", en: "official investment certificates" },
  headingPost: "",
  lede: {
    vi: "Toàn bộ hồ sơ đăng ký doanh nghiệp, chứng nhận đầu tư và quy hoạch xây dựng được cấp bởi cơ quan nhà nước có thẩm quyền.",
    en: "The complete set of enterprise registration, investment certification, and construction planning records issued by competent state authorities."
  },
  docLabel: { vi: "Văn bản", en: "Document" }
};

export const partners = {
  eyebrow: { vi: "Hệ sinh thái đối tác", en: "Partner Ecosystem" },
  headingPre: { vi: "Đồng hành cùng ", en: "Standing alongside " },
  headingEm: { vi: "các tập đoàn kỹ thuật quốc tế", en: "international engineering groups" },
  headingPost: "",
  lede: {
    vi: "Mạng lưới nhà thầu và đối tác chuyển giao công nghệ hàng đầu từ Hoa Kỳ, CHLB Đức, Hàn Quốc và Việt Nam.",
    en: "A network of leading contractors and technology-transfer partners from the U.S., Germany, South Korea, and Vietnam."
  },
  directoryHeading: {
    vi: "Danh mục đối tác & khách hàng theo hồ sơ năng lực",
    en: "Partner & client directory (capability profile)"
  },
  directoryCaption: { vi: "Danh mục đối tác — Trang", en: "Partner Directory — Page" },
  directoryAlt: { vi: "Đối tác & Khách hàng trang", en: "Partners & Clients, page" }
};

export const contactPage = {
  eyebrow: { vi: "Kết nối hợp tác", en: "Let's Connect" },
  headingPre: { vi: "Sẵn sàng đồng hành cùng ", en: "Ready to partner with " },
  headingEm: { vi: "đối tác chiến lược", en: "strategic allies" },
  headingPost: "",
  lede: {
    vi: "luôn sẵn sàng tiếp nhận thông tin hợp tác đầu tư, chuyển giao công nghệ và phát triển dự án. Liên hệ trực tiếp qua các kênh dưới đây.",
    en: "is always ready to receive investment, technology-transfer, and project-development inquiries. Reach us directly through the channels below."
  },
  officeLabel: { vi: "Trụ sở điều hành", en: "Head Office" },
  hotlineLabel: { vi: "Hotline trực tiếp", en: "Direct Hotline" },
  emailLabel: { vi: "Hộp thư điện tử", en: "Email" },
  hoursLabel: { vi: "Giờ làm việc", en: "Working Hours" },
  hoursValue: { vi: "Thứ 2 – Thứ 6, 08:00 – 17:30", en: "Mon – Fri, 08:00 – 17:30" },
  emailButton: { vi: "Gửi email hợp tác", en: "Send a partnership email" },
  legalHeading: { vi: "Thông tin pháp nhân", en: "Corporate Information" },
  companyNameLabel: { vi: "Tên doanh nghiệp", en: "Company Name" },
  taxCodeLabel: { vi: "Mã số thuế", en: "Tax Code" },
  capitalLabel: { vi: "Vốn điều lệ", en: "Charter Capital" },
  legalRepLabel: { vi: "Đại diện pháp luật", en: "Legal Representative" }
};

export const notFound = {
  eyebrow: { vi: "404 — Không tìm thấy trang", en: "404 — Page Not Found" },
  headingPre: { vi: "Trang bạn tìm không ", en: "This page does not " },
  headingEm: { vi: "tồn tại", en: "exist" },
  headingPost: "",
  lede: {
    vi: "Đường dẫn có thể đã bị thay đổi hoặc không còn khả dụng. Vui lòng quay lại trang chủ để tiếp tục khám phá.",
    en: "The link may have changed or is no longer available. Please return to the homepage to keep exploring."
  },
  backHome: { vi: "Về trang chủ", en: "Back to Home" }
};
