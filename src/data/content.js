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
  legalRep: "Nguyễn Thanh Mức — Giám đốc"
};

export const navLinks = [
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/lanh-dao", label: "Ban lãnh đạo" },
  { href: "/du-an", label: "Dự án" },
  { href: "/nang-luc", label: "Năng lực" },
  { href: "/phap-ly", label: "Pháp lý" },
  { href: "/doi-tac", label: "Đối tác" },
  { href: "/lien-he", label: "Liên hệ" }
];

export const heroStats = [
  { value: "500 tỷ", label: "Vốn điều lệ đăng ký" },
  { value: "3", label: "Đại dự án chiến lược" },
  { value: "2.000 MW", label: "Công suất tuabin gió / năm" },
  { value: "1.000+", label: "Kỹ sư & chuyên gia công nghệ cao" }
];

export const achievements = [
  "Hơn 40 năm dẫn đầu công nghệ sản xuất máy tính (IBM, Toshiba laptop) tại Irvine, California; nguyên Chủ tịch NCC thập niên 1980.",
  "10 năm nghiên cứu chuyên sâu về thị trường tài chính và tín dụng bất động sản tại Hoa Kỳ.",
  "Tiên phong phát triển nhà ở bền vững bằng công nghệ tấm 3D (EVG 3D Panels) từ Cộng hòa Áo.",
  "Nghiên cứu và triển khai các tổ hợp điện gió, điện mặt trời quy mô công nghiệp từ 50MW tới hàng trăm MW.",
  "Làm chủ công nghệ điện rác Plasma – DME gasification không phát thải, xử lý rác phát điện lên lưới quốc gia."
];

export const leadership = {
  name: "GS. Phan Sam Nhu",
  nameEn: "Prof. Phan Sam Nhu",
  born: "1936",
  title: "Chủ tịch Hội đồng Quản trị",
  nationality: "Quốc tịch Hoa Kỳ",
  photo: licenses["leadership-portrait"],
  achievements
};

export const projects = [
  {
    id: "tan-kien",
    index: "01",
    title: "Tan Kien Smart Station City",
    subtitle: "Khu công nghiệp đường sắt Tân Kiên",
    location: "TP. Hồ Chí Minh, Việt Nam",
    cover: hsnl["hsnl-06"],
    lede: "Khu công nghiệp đường sắt khép kín 60ha với 6 ngành công nghiệp phụ trợ không khói, phục vụ trực tiếp tuyến đường sắt tốc độ cao TP.HCM – Cần Thơ.",
    stats: [
      { value: "60 ha", label: "Tổng diện tích KCN" },
      { value: "450 triệu USD", label: "Tổng mức đầu tư" },
      { value: "6", label: "Ngành công nghiệp lõi" },
      { value: "135 km", label: "Tuyến đường sắt phục vụ" }
    ],
    facilities: [
      {
        title: "Nhà máy đóng & sửa chữa toa xe",
        desc: "Chuyển giao công nghệ sản xuất đầu máy, toa xe tốc độ cao hướng tới mục tiêu “Made in Vietnam”."
      },
      {
        title: "Nhà máy ống thép & dầm cầu cạn — 40 triệu USD",
        desc: "Sản xuất ống thép đúc và bệ dầm thay thế bê tông đúc truyền thống cho hơn 50 cầu cạn toàn tuyến."
      },
      {
        title: "Nhà máy tấm 3D tấm tường — 25 triệu USD",
        desc: "Ứng dụng công nghệ Áo sản xuất tấm 3D cách âm, cách nhiệt cho nhà ở công nhân và đô thị ga."
      },
      {
        title: "Nhà máy điện rác Plasma — 2.000 tấn/ngày",
        desc: "Khí hóa rác bằng công nghệ Plasma không phát thải, phát điện sạch cung ứng cho hệ thống đường sắt."
      }
    ],
    gallery: [
      {
        src: hsnl["hsnl-05"],
        caption: "Phối cảnh tổng thể Tan Kien Smart Station City"
      },
      {
        src: hsnl["hsnl-06"],
        caption: "Quy hoạch phân khu KCN Tân Kiên — 60ha"
      },
      {
        src: hsnl["hsnl-07"],
        caption: "Nhà máy đóng & bảo dưỡng toa xe đường sắt"
      },
      {
        src: hsnl["hsnl-08"],
        caption: "Dây chuyền sản xuất ống thép, dầm cầu cạn"
      },
      { src: hsnl["hsnl-09"], caption: "Nhà máy tấm 3D công nghệ Cộng hòa Áo" },
      {
        src: hsnl["hsnl-10"],
        caption: "Nhà máy điện rác công nghệ Plasma khí hóa"
      }
    ]
  },
  {
    id: "wind-turbine",
    index: "02",
    title: "Tổ hợp sản xuất Tuabin Điện gió",
    subtitle: "Wind Turbine Manufacturing Complex",
    location: "Đồng bằng sông Cửu Long — Hợp tác GURSUNG JSC",
    cover: hsnl["hsnl-11"],
    lede: "Tổ hợp 5 nhà máy sản xuất thiết bị điện gió công nghiệp quy mô 12ha sở hữu 1.000m cầu cảng, chuyển giao công nghệ từ W2E (Đức) và Aeronautica (Mỹ).",
    stats: [
      { value: "12 ha", label: "Quy mô tổ hợp nhà máy" },
      { value: "1.000 m", label: "Chiều dài mặt cảng biển" },
      { value: "2.000 MW", label: "Công suất thiết bị / năm" },
      { value: "150 triệu USD", label: "Đầu tư giai đoạn 1" }
    ],
    facilities: [
      {
        title: "5 nhà máy thành phần",
        desc: "Sản xuất đồng bộ thân trụ thép, cánh quạt, nacelle, đầu tuabin và đóng xà lan vận chuyển."
      },
      {
        title: "Nhà máy cánh quạt — 2.500 m²",
        desc: "Sản xuất cánh tuabin gió công suất lớn theo tiêu chuẩn kỹ thuật W2E Germany."
      },
      {
        title: "Nhà máy đầu tuabin (Nacelle & Hub) — 4.000 m²",
        desc: "Dây chuyền lắp ráp tổ hợp phát điện tuabin công suất từ 3MW trở lên."
      },
      {
        title: "Bãi tập kết & logistics cảng — 50.000 m²",
        desc: "Khu tập kết siêu trường siêu trọng kết nối trực tiếp 1.000m cảng xuất khẩu."
      }
    ],
    highlights: [
      "Đối tác công nghệ: W2E Germany & Aeronautica USA",
      "Doanh thu ước tính 2 tỷ USD/năm khi vận hành tối đa",
      "Thi công lắp đặt điện gió ngoài khơi trọn gói bằng tàu cẩu biển chuyên dụng"
    ],
    gallery: [
      {
        src: hsnl["hsnl-11"],
        caption: "Phối cảnh tổng thể tổ hợp nhà máy điện gió"
      },
      { src: hsnl["hsnl-12"], caption: "Mặt bằng tổng thể 12 hecta" },
      { src: hsnl["hsnl-13"], caption: "Hệ thống cầu cảng biển dài 1.000m" },
      { src: hsnl["hsnl-14"], caption: "Sơ đồ bố trí 5 nhà máy thành phần" },
      { src: hsnl["hsnl-15"], caption: "Năng lực xuất xưởng 2.000MW/năm" },
      {
        src: hsnl["hsnl-16"],
        caption: "Khu vực đầu tư giai đoạn 1: 150 triệu USD"
      },
      {
        src: hsnl["hsnl-17"],
        caption: "Chứng nhận chuyển giao W2E & Aeronautica"
      },
      { src: hsnl["hsnl-18"], caption: "Xưởng chế tạo cánh quạt tuabin" },
      {
        src: hsnl["hsnl-19"],
        caption: "Trung tâm văn phòng điều hành công nghệ"
      },
      {
        src: hsnl["hsnl-20"],
        caption: "Xưởng lắp ráp Nacelle & thiết bị phát điện"
      },
      { src: hsnl["hsnl-21"], caption: "Bãi chứa cấu kiện xuất khẩu 50.000m²" }
    ]
  },
  {
    id: "an-phu",
    index: "03",
    title: "An Phu Industrial Park (APIP)",
    subtitle: "Khu kinh tế cửa khẩu Mộc Bài — Tây Ninh",
    location: "Khu kinh tế cửa khẩu Mộc Bài, Tây Ninh",
    cover: licenses["moc-bai-master-map"],
    lede: "Khu công nghiệp An Phú 103ha và đô thị Virginia Town 35ha tọa lạc trên trục đường Xuyên Á, hưởng chính sách thuế ưu đãi cao nhất của khu kinh tế cửa khẩu.",
    stats: [
      { value: "103 ha", label: "KCN An Phú (APIP)" },
      { value: "35 ha", label: "Đô thị Virginia Town" },
      { value: "0%", label: "Thuế TNDN 4 năm đầu" },
      { value: "73 km", label: "Kết nối trung tâm TP.HCM" }
    ],
    facilities: [
      {
        title: "Ưu đãi thuế TNDN vượt trội",
        desc: "Miễn 100% 4 năm đầu, giảm 50% trong 9 năm tiếp theo và thuế suất 10% trong 15 năm."
      },
      {
        title: "Miễn thuế XNK & Thuế VAT 0%",
        desc: "Toàn bộ máy móc thiết bị nhập khẩu và hàng hóa xuất khẩu được miễn thuế XNK."
      },
      {
        title: "Tâm điểm hành lang kinh tế Xuyên Á",
        desc: "73km tới TP.HCM, 70km sân bay Tân Sơn Nhất, kết nối trực tiếp Campuchia, Thái Lan, Lào."
      },
      {
        title: "Khu đô thị Virginia Town 35,2ha",
        desc: "Biệt thự, nhà phố, trường học, trung tâm thương mại phục vụ chuyên gia & kỹ sư."
      }
    ],
    gallery: [
      {
        src: licenses["moc-bai-master-map"],
        caption: "Bản đồ quy hoạch tổng thể KKT Cửa khẩu Mộc Bài"
      },
      {
        src: licenses["an-phu-industrial-zone-1"],
        caption: "Vị trí chiến lược KCN APIP & Virginia Town"
      },
      {
        src: licenses["apip-overview"],
        caption: "Tổng quan hạ tầng KCN An Phú — 103ha"
      },
      {
        src: licenses["an-phu-industrial-park-brand"],
        caption: "Phối cảnh nhà xưởng tiêu chuẩn quốc tế"
      },
      { src: anphu["anphu-2"], caption: "Sơ đồ phân lô & ưu đãi nhà đầu tư" },
      {
        src: anphu["anphu-3"],
        caption: "Vị trí trên hành lang kinh tế Xuyên Á"
      },
      {
        src: anphu["anphu-1"],
        caption: "Khu dịch vụ thương mại & nhà ở chuyên gia"
      },
      {
        src: anphu["anphu-4"],
        caption: "Quy hoạch đô thị Virginia Town — 35,2ha"
      }
    ]
  }
];

export const capabilityGroups = [
  {
    key: "wind-offshore",
    label: "Thi công điện gió ngoài khơi",
    items: [
      {
        src: hsnl["hsnl-27"],
        caption: "Khảo sát địa chất & hải văn khu vực xây dựng"
      },
      { src: hsnl["hsnl-28"], caption: "Chi tiết kết cấu tháp tuabin" },
      {
        src: hsnl["hsnl-29"],
        caption: "Chi tiết tuabin gió & quy trình lắp đặt"
      },
      { src: hsnl["hsnl-30"], caption: "Các mô hình móng tuabin ngoài khơi" },
      {
        src: hsnl["hsnl-31"],
        caption: "Tuabin ven bờ & căn cứ thi công trên biển"
      },
      {
        src: hsnl["hsnl-32"],
        caption: "Quy trình lắp đặt bằng tàu chuyên dụng"
      },
      { src: hsnl["hsnl-33"], caption: "Ống Mono RCD & lắp đặt máy ray biển" },
      {
        src: hsnl["hsnl-34"],
        caption: "Thi công trên biển — Sea Construction"
      },
      { src: hsnl["hsnl-35"], caption: "Lắp đặt tuabin gió trên biển" },
      { src: hsnl["hsnl-36"], caption: "Thi công nền móng ngoài biển" },
      {
        src: hsnl["hsnl-37"],
        caption: "Gia công cốt thép & đổ bê tông móng trụ"
      }
    ]
  },
  {
    key: "equipment",
    label: "Thiết bị & máy móc xây dựng",
    items: [
      { src: hsnl["hsnl-39"], caption: "Xe cẩu chuyên dụng công trường" },
      { src: hsnl["hsnl-40"], caption: "Cẩu bánh xích công suất lớn" },
      { src: hsnl["hsnl-41"], caption: "Đội xe cẩu bánh xích 175 tấn" },
      { src: hsnl["hsnl-42"], caption: "Xe khoan cọc nhồi & cẩu container" }
    ]
  },
  {
    key: "steel",
    label: "Sản xuất & kinh doanh thép",
    items: [
      { src: hsnl["hsnl-43"], caption: "Sản xuất ống thép quy mô công nghiệp" },
      { src: hsnl["hsnl-44"], caption: "Dây chuyền cán thép hình chữ I" },
      { src: hsnl["hsnl-45"], caption: "Nhà máy cán ống & tấm thép" }
    ]
  },
  {
    key: "supply",
    label: "Cung ứng vật liệu & nạo vét nền móng",
    items: [
      { src: hsnl["hsnl-38"], caption: "Khai thác than đốt / Steam coal" },
      { src: hsnl["hsnl-46"], caption: "Cung cấp vật liệu xây dựng" },
      { src: hsnl["hsnl-47"], caption: "Tàu nạo vét nền móng ngoài khơi" },
      { src: hsnl["hsnl-48"], caption: "Lắp đặt ống & nạo vét nền móng" },
      { src: hsnl["hsnl-49"], caption: "Kinh nghiệm thi công cầu đường" },
      { src: hsnl["hsnl-50"], caption: "Thi công cầu vượt sông quy mô lớn" }
    ]
  }
];

export const licenseDocs = [
  {
    src: hsnl["hsnl-02"],
    title: "Giấy chứng nhận đăng ký doanh nghiệp",
    desc: "Công ty Cổ phần Quốc tế Năng lượng Thăng Long — Mã số DN 0313781295, cấp lần đầu 28/04/2016, thay đổi lần thứ 2 ngày 19/08/2020."
  },
  {
    src: licenses["investment-cert-1"],
    title: "Giấy chứng nhận đăng ký đầu tư",
    desc: "Dự án Nhà ở An Phú tại Khu kinh tế cửa khẩu Mộc Bài — Tây Ninh, mã số dự án 7604472866, do Ban Quản lý Khu kinh tế tỉnh Tây Ninh cấp."
  },
  {
    src: licenses["investment-cert-2"],
    title: "Quy mô dự án nhà ở An Phú",
    desc: "Tổng diện tích đất sử dụng 352.004 m², bao gồm biệt thự, nhà phố liền kề, công trình công cộng, cây xanh và hạ tầng giao thông nội bộ."
  },
  {
    src: licenses["investment-cert-3"],
    title: "Vốn đầu tư & tiến độ góp vốn",
    desc: "Tổng vốn đầu tư 678,4 tỷ đồng; vốn góp thực hiện dự án 143 tỷ đồng do Công ty CP Địa ốc An Phú – Mộc Bài thực hiện."
  },
  {
    src: licenses["investment-cert-4"],
    title: "Ưu đãi & nghĩa vụ nhà đầu tư",
    desc: "Các điều khoản ưu đãi thuế TNDN, thuế nhập khẩu, tiền thuê đất và trách nhiệm tuân thủ pháp luật đầu tư, đất đai, xây dựng."
  },
  {
    src: licenses["investment-cert-5"],
    title: "Thông tin nhà đầu tư & xác nhận",
    desc: "Công ty Cổ phần Địa ốc An Phú – Mộc Bài, người đại diện pháp luật ông Chu Minh Chiến — Chủ tịch HĐQT; xác nhận của Ban Quản lý Khu kinh tế tỉnh Tây Ninh."
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
