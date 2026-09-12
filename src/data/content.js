import { hsnl, anphu, licenses } from "./images";

export const company = {
  nameVi: "Công ty Cổ phần Quốc tế Năng lượng Thăng Long",
  nameEn: "Thang Long International Energy JSC",
  shortName: "Thăng Long Energy",
  taxCode: "0313781295",
  established: "28/04/2016",
  amended: "19/08/2020",
  charterCapital: "500.000.000.000 VND",
  address:
    "Tầng 15, Phòng 1508, Toà nhà Vincom Center, số 72 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
  phone: "090 272 6171",
  legalRepName: "Nguyễn Thanh Mức",
  legalRepTitle: { vi: "Giám đốc", en: "Director" }
};

export const navLinks = [
  { href: "/gioi-thieu", label: { vi: "Giới thiệu", en: "About" } },
  { href: "/lanh-dao", label: { vi: "Ban lãnh đạo", en: "Leadership" } },
  { href: "/du-an", label: { vi: "Dự án", en: "Projects" } },
  { href: "/nang-luc", label: { vi: "Năng lực", en: "Capabilities" } },
  { href: "/phap-ly", label: { vi: "Pháp lý", en: "Legal" } },
  { href: "/doi-tac", label: { vi: "Đối tác", en: "Partners" } },
  { href: "/lien-he", label: { vi: "Liên hệ", en: "Contact" } }
];

export const heroStats = [
  {
    value: { vi: "500 tỷ", en: "VND 500B" },
    label: { vi: "Vốn điều lệ đăng ký", en: "Registered charter capital" }
  },
  {
    value: "3",
    label: { vi: "Đại dự án chiến lược", en: "Flagship strategic projects" }
  },
  {
    value: "2.000 MW",
    label: { vi: "Công suất tuabin gió / năm", en: "Wind turbine output / year" }
  },
  {
    value: "1.000+",
    label: {
      vi: "Kỹ sư & chuyên gia công nghệ cao",
      en: "Engineers & high-tech specialists"
    }
  }
];

export const achievements = [
  {
    vi: "Hơn 40 năm dẫn đầu công nghệ sản xuất máy tính (IBM, Toshiba laptop) tại Irvine, California; nguyên Chủ tịch NCC thập niên 1980.",
    en: "Over 40 years leading computer manufacturing technology (IBM, Toshiba laptops) in Irvine, California; former Chairman of NCC in the 1980s."
  },
  {
    vi: "10 năm nghiên cứu chuyên sâu về thị trường tài chính và tín dụng bất động sản tại Hoa Kỳ.",
    en: "A decade of in-depth research into U.S. real estate finance and credit markets."
  },
  {
    vi: "Tiên phong phát triển nhà ở bền vững bằng công nghệ tấm 3D (EVG 3D Panels) từ Cộng hòa Áo.",
    en: "Pioneered sustainable housing using 3D panel technology (EVG 3D Panels) from Austria."
  },
  {
    vi: "Nghiên cứu và triển khai các tổ hợp điện gió, điện mặt trời quy mô công nghiệp từ 50MW tới hàng trăm MW.",
    en: "Researched and deployed industrial-scale wind and solar power complexes ranging from 50MW to several hundred MW."
  },
  {
    vi: "Làm chủ công nghệ điện rác Plasma – DME gasification không phát thải, xử lý rác phát điện lên lưới quốc gia.",
    en: "Mastered zero-emission Plasma waste-to-energy (DME gasification) technology, converting waste into power for the national grid."
  }
];

export const leadership = {
  name: "GS. Phan Sam Nhu",
  nameEn: "Prof. Phan Sam Nhu",
  born: "1936",
  title: { vi: "Chủ tịch Hội đồng Quản trị", en: "Chairman of the Board" },
  nationality: { vi: "Quốc tịch Hoa Kỳ", en: "U.S. Citizen" },
  photo: licenses["leadership-portrait"],
  achievements
};

export const projects = [
  {
    id: "tan-kien",
    index: "01",
    title: "Tan Kien Smart Station City",
    subtitle: {
      vi: "Khu công nghiệp đường sắt Tân Kiên",
      en: "Tan Kien Railway Industrial Park"
    },
    location: { vi: "TP. Hồ Chí Minh, Việt Nam", en: "Ho Chi Minh City, Vietnam" },
    cover: hsnl["hsnl-06"],
    lede: {
      vi: "Khu công nghiệp đường sắt khép kín 60ha với 6 ngành công nghiệp phụ trợ không khói, phục vụ trực tiếp tuyến đường sắt tốc độ cao TP.HCM – Cần Thơ.",
      en: "A self-contained 60-hectare railway industrial park with 6 non-polluting supporting industries, directly serving the Ho Chi Minh City – Can Tho high-speed railway line."
    },
    stats: [
      { value: "60 ha", label: { vi: "Tổng diện tích KCN", en: "Total park area" } },
      {
        value: { vi: "450 triệu USD", en: "USD 450M" },
        label: { vi: "Tổng mức đầu tư", en: "Total investment" }
      },
      { value: "6", label: { vi: "Ngành công nghiệp lõi", en: "Core industries" } },
      { value: "135 km", label: { vi: "Tuyến đường sắt phục vụ", en: "Railway line served" } }
    ],
    facilities: [
      {
        title: {
          vi: "Nhà máy đóng & sửa chữa toa xe",
          en: "Railcar Manufacturing & Repair Plant"
        },
        desc: {
          vi: "Chuyển giao công nghệ sản xuất đầu máy, toa xe tốc độ cao hướng tới mục tiêu “Made in Vietnam”.",
          en: "Technology transfer for manufacturing high-speed locomotives and railcars, aiming for a genuine “Made in Vietnam” standard."
        }
      },
      {
        title: {
          vi: "Nhà máy ống thép & dầm cầu cạn — 40 triệu USD",
          en: "Steel Pipe & Viaduct Beam Plant — USD 40M"
        },
        desc: {
          vi: "Sản xuất ống thép đúc và bệ dầm thay thế bê tông đúc truyền thống cho hơn 50 cầu cạn toàn tuyến.",
          en: "Produces cast steel pipes and beam supports that replace traditional cast concrete for more than 50 viaducts along the line."
        }
      },
      {
        title: {
          vi: "Nhà máy tấm 3D tấm tường — 25 triệu USD",
          en: "3D Wall Panel Plant — USD 25M"
        },
        desc: {
          vi: "Ứng dụng công nghệ Áo sản xuất tấm 3D cách âm, cách nhiệt cho nhà ở công nhân và đô thị ga.",
          en: "Applies Austrian 3D panel technology for sound and thermal insulation in worker housing and station-area developments."
        }
      },
      {
        title: {
          vi: "Nhà máy điện rác Plasma — 2.000 tấn/ngày",
          en: "Plasma Waste-to-Energy Plant — 2,000 tons/day"
        },
        desc: {
          vi: "Khí hóa rác bằng công nghệ Plasma không phát thải, phát điện sạch cung ứng cho hệ thống đường sắt.",
          en: "Zero-emission Plasma waste gasification, generating clean power for the railway system."
        }
      }
    ],
    gallery: [
      {
        src: hsnl["hsnl-05"],
        caption: {
          vi: "Phối cảnh tổng thể Tan Kien Smart Station City",
          en: "Overall rendering of Tan Kien Smart Station City"
        }
      },
      {
        src: hsnl["hsnl-06"],
        caption: { vi: "Quy hoạch phân khu KCN Tân Kiên — 60ha", en: "Zoning plan of Tan Kien Industrial Park — 60ha" }
      },
      {
        src: hsnl["hsnl-07"],
        caption: {
          vi: "Nhà máy đóng & bảo dưỡng toa xe đường sắt",
          en: "Railcar manufacturing & maintenance plant"
        }
      },
      {
        src: hsnl["hsnl-08"],
        caption: {
          vi: "Dây chuyền sản xuất ống thép, dầm cầu cạn",
          en: "Steel pipe and viaduct beam production line"
        }
      },
      {
        src: hsnl["hsnl-09"],
        caption: { vi: "Nhà máy tấm 3D công nghệ Cộng hòa Áo", en: "3D panel plant using Austrian technology" }
      },
      {
        src: hsnl["hsnl-10"],
        caption: {
          vi: "Nhà máy điện rác công nghệ Plasma khí hóa",
          en: "Plasma gasification waste-to-energy plant"
        }
      }
    ]
  },
  {
    id: "wind-turbine",
    index: "02",
    title: { vi: "Tổ hợp sản xuất Tuabin Điện gió", en: "Wind Turbine Manufacturing Complex" },
    subtitle: {
      vi: "Hợp tác cùng GURSUNG JSC — Đồng bằng sông Cửu Long",
      en: "In partnership with GURSUNG JSC — Mekong Delta"
    },
    location: {
      vi: "Đồng bằng sông Cửu Long — Hợp tác GURSUNG JSC",
      en: "Mekong Delta, Vietnam — GURSUNG JSC partnership"
    },
    cover: hsnl["hsnl-11"],
    lede: {
      vi: "Tổ hợp 5 nhà máy sản xuất thiết bị điện gió công nghiệp quy mô 12ha sở hữu 1.000m cầu cảng, chuyển giao công nghệ từ W2E (Đức) và Aeronautica (Mỹ).",
      en: "A complex of 5 factories manufacturing industrial wind power equipment across 12 hectares with a 1,000m deep-water wharf, built on technology transferred from W2E (Germany) and Aeronautica (USA)."
    },
    stats: [
      { value: "12 ha", label: { vi: "Quy mô tổ hợp nhà máy", en: "Complex footprint" } },
      { value: "1.000 m", label: { vi: "Chiều dài mặt cảng biển", en: "Deep-water wharf length" } },
      { value: "2.000 MW", label: { vi: "Công suất thiết bị / năm", en: "Equipment output / year" } },
      {
        value: { vi: "150 triệu USD", en: "USD 150M" },
        label: { vi: "Đầu tư giai đoạn 1", en: "Phase 1 investment" }
      }
    ],
    facilities: [
      {
        title: { vi: "5 nhà máy thành phần", en: "5 component factories" },
        desc: {
          vi: "Sản xuất đồng bộ thân trụ thép, cánh quạt, nacelle, đầu tuabin và đóng xà lan vận chuyển.",
          en: "Integrated production of steel towers, blades, nacelles, turbine hubs, and transport barge assembly."
        }
      },
      {
        title: { vi: "Nhà máy cánh quạt — 2.500 m²", en: "Blade Factory — 2,500 m²" },
        desc: {
          vi: "Sản xuất cánh tuabin gió công suất lớn theo tiêu chuẩn kỹ thuật W2E Germany.",
          en: "Manufactures large-capacity wind turbine blades to W2E Germany technical standards."
        }
      },
      {
        title: { vi: "Nhà máy đầu tuabin (Nacelle & Hub) — 4.000 m²", en: "Nacelle & Hub Factory — 4,000 m²" },
        desc: {
          vi: "Dây chuyền lắp ráp tổ hợp phát điện tuabin công suất từ 3MW trở lên.",
          en: "Assembly line for turbine power-generation units rated 3MW and above."
        }
      },
      {
        title: { vi: "Bãi tập kết & logistics cảng — 50.000 m²", en: "Staging Yard & Port Logistics — 50,000 m²" },
        desc: {
          vi: "Khu tập kết siêu trường siêu trọng kết nối trực tiếp 1.000m cảng xuất khẩu.",
          en: "Heavy-lift staging area connected directly to the 1,000m export wharf."
        }
      }
    ],
    highlights: [
      { vi: "Đối tác công nghệ: W2E Germany & Aeronautica USA", en: "Technology partners: W2E Germany & Aeronautica USA" },
      {
        vi: "Doanh thu ước tính 2 tỷ USD/năm khi vận hành tối đa",
        en: "Estimated revenue of USD 2B/year at full operating capacity"
      },
      {
        vi: "Thi công lắp đặt điện gió ngoài khơi trọn gói bằng tàu cẩu biển chuyên dụng",
        en: "Full-package offshore wind installation using specialized crane vessels"
      }
    ],
    gallery: [
      {
        src: hsnl["hsnl-11"],
        caption: {
          vi: "Phối cảnh tổng thể tổ hợp nhà máy điện gió",
          en: "Overall rendering of the wind turbine manufacturing complex"
        }
      },
      { src: hsnl["hsnl-12"], caption: { vi: "Mặt bằng tổng thể 12 hecta", en: "12-hectare overall site plan" } },
      {
        src: hsnl["hsnl-13"],
        caption: { vi: "Hệ thống cầu cảng biển dài 1.000m", en: "1,000m deep-water wharf system" }
      },
      {
        src: hsnl["hsnl-14"],
        caption: { vi: "Sơ đồ bố trí 5 nhà máy thành phần", en: "Layout of the 5 component factories" }
      },
      { src: hsnl["hsnl-15"], caption: { vi: "Năng lực xuất xưởng 2.000MW/năm", en: "2,000MW/year production capacity" } },
      {
        src: hsnl["hsnl-16"],
        caption: {
          vi: "Khu vực đầu tư giai đoạn 1: 150 triệu USD",
          en: "Phase 1 investment area: USD 150M"
        }
      },
      {
        src: hsnl["hsnl-17"],
        caption: {
          vi: "Chứng nhận chuyển giao W2E & Aeronautica",
          en: "W2E & Aeronautica technology transfer certification"
        }
      },
      { src: hsnl["hsnl-18"], caption: { vi: "Xưởng chế tạo cánh quạt tuabin", en: "Turbine blade manufacturing workshop" } },
      {
        src: hsnl["hsnl-19"],
        caption: { vi: "Trung tâm văn phòng điều hành công nghệ", en: "Technical operations office center" }
      },
      {
        src: hsnl["hsnl-20"],
        caption: {
          vi: "Xưởng lắp ráp Nacelle & thiết bị phát điện",
          en: "Nacelle & generator assembly workshop"
        }
      },
      { src: hsnl["hsnl-21"], caption: { vi: "Bãi chứa cấu kiện xuất khẩu 50.000m²", en: "50,000m² export component storage yard" } }
    ]
  },
  {
    id: "an-phu",
    index: "03",
    title: "An Phu Industrial Park (APIP)",
    subtitle: {
      vi: "Khu kinh tế cửa khẩu Mộc Bài — Tây Ninh",
      en: "Moc Bai Border Economic Zone — Tay Ninh"
    },
    location: {
      vi: "Khu kinh tế cửa khẩu Mộc Bài, Tây Ninh",
      en: "Moc Bai Border Economic Zone, Tay Ninh"
    },
    cover: licenses["moc-bai-master-map"],
    lede: {
      vi: "Khu công nghiệp An Phú 103ha và đô thị Virginia Town 35ha tọa lạc trên trục đường Xuyên Á, hưởng chính sách thuế ưu đãi cao nhất của khu kinh tế cửa khẩu.",
      en: "The 103-hectare An Phu Industrial Park and 35-hectare Virginia Town urban area sit on the Trans-Asia corridor, enjoying the highest tax incentives available in a border economic zone."
    },
    stats: [
      { value: "103 ha", label: { vi: "KCN An Phú (APIP)", en: "An Phu Industrial Park (APIP)" } },
      { value: "35 ha", label: { vi: "Đô thị Virginia Town", en: "Virginia Town urban area" } },
      { value: "0%", label: { vi: "Thuế TNDN 4 năm đầu", en: "Corporate income tax, first 4 years" } },
      { value: "73 km", label: { vi: "Kết nối trung tâm TP.HCM", en: "Distance to central Ho Chi Minh City" } }
    ],
    facilities: [
      {
        title: { vi: "Ưu đãi thuế TNDN vượt trội", en: "Outstanding corporate income tax incentives" },
        desc: {
          vi: "Miễn 100% 4 năm đầu, giảm 50% trong 9 năm tiếp theo và thuế suất 10% trong 15 năm.",
          en: "100% exemption for the first 4 years, a 50% reduction for the next 9 years, and a 10% rate for 15 years."
        }
      },
      {
        title: { vi: "Miễn thuế XNK & Thuế VAT 0%", en: "Import/export duty exemption & 0% VAT" },
        desc: {
          vi: "Toàn bộ máy móc thiết bị nhập khẩu và hàng hóa xuất khẩu được miễn thuế XNK.",
          en: "All imported machinery and equipment, plus exported goods, are exempt from import/export duties."
        }
      },
      {
        title: { vi: "Tâm điểm hành lang kinh tế Xuyên Á", en: "At the heart of the Trans-Asia economic corridor" },
        desc: {
          vi: "73km tới TP.HCM, 70km sân bay Tân Sơn Nhất, kết nối trực tiếp Campuchia, Thái Lan, Lào.",
          en: "73km to Ho Chi Minh City, 70km to Tan Son Nhat Airport, with direct links to Cambodia, Thailand, and Laos."
        }
      },
      {
        title: { vi: "Khu đô thị Virginia Town 35,2ha", en: "Virginia Town urban area — 35.2ha" },
        desc: {
          vi: "Biệt thự, nhà phố, trường học, trung tâm thương mại phục vụ chuyên gia & kỹ sư.",
          en: "Villas, townhouses, schools, and a commercial center serving experts and engineers."
        }
      }
    ],
    gallery: [
      {
        src: licenses["moc-bai-master-map"],
        caption: {
          vi: "Bản đồ quy hoạch tổng thể KKT Cửa khẩu Mộc Bài",
          en: "Master plan of Moc Bai Border Economic Zone"
        }
      },
      {
        src: licenses["an-phu-industrial-zone-1"],
        caption: { vi: "Vị trí chiến lược KCN APIP & Virginia Town", en: "Strategic location of APIP & Virginia Town" }
      },
      {
        src: licenses["apip-overview"],
        caption: { vi: "Tổng quan hạ tầng KCN An Phú — 103ha", en: "Infrastructure overview of An Phu Industrial Park — 103ha" }
      },
      {
        src: licenses["an-phu-industrial-park-brand"],
        caption: {
          vi: "Phối cảnh nhà xưởng tiêu chuẩn quốc tế",
          en: "Rendering of international-standard factory units"
        }
      },
      {
        src: anphu["anphu-2"],
        caption: { vi: "Sơ đồ phân lô & ưu đãi nhà đầu tư", en: "Land subdivision plan & investor incentives" }
      },
      {
        src: anphu["anphu-3"],
        caption: { vi: "Vị trí trên hành lang kinh tế Xuyên Á", en: "Location on the Trans-Asia economic corridor" }
      },
      {
        src: anphu["anphu-1"],
        caption: {
          vi: "Khu dịch vụ thương mại & nhà ở chuyên gia",
          en: "Commercial services & expert housing area"
        }
      },
      {
        src: anphu["anphu-4"],
        caption: { vi: "Quy hoạch đô thị Virginia Town — 35,2ha", en: "Virginia Town urban master plan — 35.2ha" }
      }
    ]
  }
];

export const capabilityGroups = [
  {
    key: "wind-offshore",
    label: { vi: "Thi công điện gió ngoài khơi", en: "Offshore Wind Construction" },
    items: [
      {
        src: hsnl["hsnl-27"],
        caption: { vi: "Khảo sát địa chất & hải văn khu vực xây dựng", en: "Geological & hydrographic survey of the site" }
      },
      { src: hsnl["hsnl-28"], caption: { vi: "Chi tiết kết cấu tháp tuabin", en: "Turbine tower structural details" } },
      {
        src: hsnl["hsnl-29"],
        caption: { vi: "Chi tiết tuabin gió & quy trình lắp đặt", en: "Wind turbine details & installation process" }
      },
      { src: hsnl["hsnl-30"], caption: { vi: "Các mô hình móng tuabin ngoài khơi", en: "Offshore turbine foundation models" } },
      {
        src: hsnl["hsnl-31"],
        caption: { vi: "Tuabin ven bờ & căn cứ thi công trên biển", en: "Nearshore turbines & offshore construction base" }
      },
      {
        src: hsnl["hsnl-32"],
        caption: { vi: "Quy trình lắp đặt bằng tàu chuyên dụng", en: "Installation process using specialized vessels" }
      },
      { src: hsnl["hsnl-33"], caption: { vi: "Ống Mono RCD & lắp đặt máy ray biển", en: "Mono pile RCD & marine rail installation" } },
      {
        src: hsnl["hsnl-34"],
        caption: { vi: "Thi công trên biển — Sea Construction", en: "Offshore construction" }
      },
      { src: hsnl["hsnl-35"], caption: { vi: "Lắp đặt tuabin gió trên biển", en: "Offshore wind turbine installation" } },
      { src: hsnl["hsnl-36"], caption: { vi: "Thi công nền móng ngoài biển", en: "Offshore foundation construction" } },
      {
        src: hsnl["hsnl-37"],
        caption: { vi: "Gia công cốt thép & đổ bê tông móng trụ", en: "Rebar fabrication & pile foundation concreting" }
      }
    ]
  },
  {
    key: "equipment",
    label: { vi: "Thiết bị & máy móc xây dựng", en: "Construction Equipment & Machinery" },
    items: [
      { src: hsnl["hsnl-39"], caption: { vi: "Xe cẩu chuyên dụng công trường", en: "Specialized site cranes" } },
      { src: hsnl["hsnl-40"], caption: { vi: "Cẩu bánh xích công suất lớn", en: "Heavy-duty crawler cranes" } },
      { src: hsnl["hsnl-41"], caption: { vi: "Đội xe cẩu bánh xích 175 tấn", en: "Fleet of 175-ton crawler cranes" } },
      { src: hsnl["hsnl-42"], caption: { vi: "Xe khoan cọc nhồi & cẩu container", en: "Bored-pile drilling rigs & container cranes" } }
    ]
  },
  {
    key: "steel",
    label: { vi: "Sản xuất & kinh doanh thép", en: "Steel Manufacturing & Trading" },
    items: [
      { src: hsnl["hsnl-43"], caption: { vi: "Sản xuất ống thép quy mô công nghiệp", en: "Industrial-scale steel pipe manufacturing" } },
      { src: hsnl["hsnl-44"], caption: { vi: "Dây chuyền cán thép hình chữ I", en: "I-beam steel rolling line" } },
      { src: hsnl["hsnl-45"], caption: { vi: "Nhà máy cán ống & tấm thép", en: "Pipe & steel plate rolling mill" } }
    ]
  },
  {
    key: "supply",
    label: { vi: "Cung ứng vật liệu & nạo vét nền móng", en: "Materials Supply & Foundation Dredging" },
    items: [
      { src: hsnl["hsnl-38"], caption: { vi: "Khai thác than đốt / Steam coal", en: "Steam coal extraction" } },
      { src: hsnl["hsnl-46"], caption: { vi: "Cung cấp vật liệu xây dựng", en: "Construction material supply" } },
      { src: hsnl["hsnl-47"], caption: { vi: "Tàu nạo vét nền móng ngoài khơi", en: "Offshore foundation dredging vessels" } },
      { src: hsnl["hsnl-48"], caption: { vi: "Lắp đặt ống & nạo vét nền móng", en: "Pipe installation & foundation dredging" } },
      { src: hsnl["hsnl-49"], caption: { vi: "Kinh nghiệm thi công cầu đường", en: "Bridge & road construction experience" } },
      { src: hsnl["hsnl-50"], caption: { vi: "Thi công cầu vượt sông quy mô lớn", en: "Large-scale river-crossing bridge construction" } }
    ]
  }
];

export const licenseDocs = [
  {
    src: hsnl["hsnl-02"],
    title: { vi: "Giấy chứng nhận đăng ký doanh nghiệp", en: "Enterprise Registration Certificate" },
    desc: {
      vi: "Công ty Cổ phần Quốc tế Năng lượng Thăng Long — Mã số DN 0313781295, cấp lần đầu 28/04/2016, thay đổi lần thứ 2 ngày 19/08/2020.",
      en: "Thang Long International Energy JSC — Enterprise code 0313781295, first issued 28/04/2016, 2nd amendment on 19/08/2020."
    }
  },
  {
    src: licenses["investment-cert-1"],
    title: { vi: "Giấy chứng nhận đăng ký đầu tư", en: "Investment Registration Certificate" },
    desc: {
      vi: "Dự án Nhà ở An Phú tại Khu kinh tế cửa khẩu Mộc Bài — Tây Ninh, mã số dự án 7604472866, do Ban Quản lý Khu kinh tế tỉnh Tây Ninh cấp.",
      en: "An Phu Housing Project in Moc Bai Border Economic Zone — Tay Ninh, project code 7604472866, issued by the Tay Ninh Economic Zone Management Board."
    }
  },
  {
    src: licenses["investment-cert-2"],
    title: { vi: "Quy mô dự án nhà ở An Phú", en: "Scale of the An Phu Housing Project" },
    desc: {
      vi: "Tổng diện tích đất sử dụng 352.004 m², bao gồm biệt thự, nhà phố liền kề, công trình công cộng, cây xanh và hạ tầng giao thông nội bộ.",
      en: "Total land area of 352,004 m², including villas, townhouses, public works, greenery, and internal transport infrastructure."
    }
  },
  {
    src: licenses["investment-cert-3"],
    title: { vi: "Vốn đầu tư & tiến độ góp vốn", en: "Investment Capital & Contribution Schedule" },
    desc: {
      vi: "Tổng vốn đầu tư 678,4 tỷ đồng; vốn góp thực hiện dự án 143 tỷ đồng do Công ty CP Địa ốc An Phú – Mộc Bài thực hiện.",
      en: "Total investment of VND 678.4 billion; capital contributed to date of VND 143 billion, executed by An Phu – Moc Bai Real Estate JSC."
    }
  },
  {
    src: licenses["investment-cert-4"],
    title: { vi: "Ưu đãi & nghĩa vụ nhà đầu tư", en: "Investor Incentives & Obligations" },
    desc: {
      vi: "Các điều khoản ưu đãi thuế TNDN, thuế nhập khẩu, tiền thuê đất và trách nhiệm tuân thủ pháp luật đầu tư, đất đai, xây dựng.",
      en: "Terms on corporate income tax and import duty incentives, land rent, and compliance obligations under investment, land, and construction law."
    }
  },
  {
    src: licenses["investment-cert-5"],
    title: { vi: "Thông tin nhà đầu tư & xác nhận", en: "Investor Information & Confirmation" },
    desc: {
      vi: "Công ty Cổ phần Địa ốc An Phú – Mộc Bài, người đại diện pháp luật ông Chu Minh Chiến — Chủ tịch HĐQT; xác nhận của Ban Quản lý Khu kinh tế tỉnh Tây Ninh.",
      en: "An Phu – Moc Bai Real Estate JSC, legal representative Mr. Chu Minh Chien — Chairman of the Board; confirmed by the Tay Ninh Economic Zone Management Board."
    }
  }
];

export const partnerLogos = [
  "KECC",
  "SunDay",
  "Hyundai E&C",
  "KBS",
  "Kunhwa",
  "Kumho E&C",
  "Emart",
  "Doosan Heavy Industries",
  "Vinaconex",
  "VEC",
  "Dayou",
  "Sungjin Industrial",
  "POSCO E&C",
  "Cienco 4",
  "Cienco 5",
  "Cienco 6",
  "PetroVietnam PVC",
  "Ssangyong Construction",
  "Hanshin",
  "CC Construction Guarantee",
  "Samsung",
  "GS E&C",
  "Doosung Motor",
  "Bo Minh Construction",
  "KWM",
  "Globalinx Group",
  "Fluor",
  "Braemar Asia",
  "Emerson",
  "AnPhu Real Estate",
  "Anderson Greenwood",
  "Alaska Gasline Development Corp",
  "Baylor College of Medicine",
  "Cameron",
  "CenterPoint Energy",
  "Johnson Matthey",
  "LNG America",
  "Newfield",
  "Metro",
  "Quantum Petroleum",
  "SapuraKencana Petroleum",
  "MTIP My Thuy Int'l Port",
  "Ports America"
];

export const partnerPages = [hsnl["hsnl-51"], hsnl["hsnl-52"]];
