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
  legalRep: "Nguyễn Thanh Mức — Giám đốc",
};

export const navLinks = [
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#lanh-dao", label: "Ban lãnh đạo" },
  { href: "#du-an", label: "Dự án" },
  { href: "#nang-luc", label: "Năng lực" },
  { href: "#phap-ly", label: "Pháp lý" },
  { href: "#doi-tac", label: "Đối tác" },
  { href: "#lien-he", label: "Liên hệ" },
];

export const heroStats = [
  { value: "500 tỷ", label: "Vốn điều lệ đăng ký" },
  { value: "3", label: "Dự án hạ tầng trọng điểm" },
  { value: "2.000 MW", label: "Công suất tuabin gió / năm" },
  { value: "1.000+", label: "Việc làm công nghệ cao" },
];

export const achievements = [
  "Hơn 40 năm kinh nghiệm trong công nghệ sản xuất máy tính (IBM laptop, Toshiba Laptop) tại Irvine, California; nguyên Chủ tịch Hội đồng thành viên National Computer Corporation (NCC) thập niên 1980, người tiên phong trong ngành sản xuất máy tính.",
  "10 năm nghiên cứu tài chính và tín dụng bất động sản (Financial & Mortgage) tại Hoa Kỳ.",
  "10 năm kinh nghiệm xây dựng nhà ở bền vững bằng công nghệ tấm 3D (EVG 3D Panels), chống chịu bão, động đất và thiên tai.",
  "Nghiên cứu và ứng dụng năng lượng tái tạo — điện gió, điện mặt trời — từ quy mô mái nhà, trường học, phòng khám đến các nhà máy điện công suất vài chục MW tới 100MW.",
  "Chuyên môn công nghệ xử lý chất thải rắn phát điện quy mô công nghiệp, công nghệ Plasma – DME gasification (Waste to Energy), cung cấp điện cho lưới quốc gia.",
  "Sở hữu các dự án nhà máy lọc dầu và công nghệ khai khoáng.",
];

export const leadership = {
  name: "GS. Phan Sam Nhu",
  nameEn: "Prof. Phan Sam Nhu",
  born: "1936",
  title: "Chủ tịch Hội đồng Quản trị",
  nationality: "Quốc tịch Hoa Kỳ",
  photo: licenses["leadership-portrait"],
  achievements,
};

export const projects = [
  {
    id: "tan-kien",
    index: "01",
    title: "Tan Kien Smart Station City",
    subtitle: "Khu công nghiệp đường sắt Tân Kiên",
    location: "TP. Hồ Chí Minh, Việt Nam",
    cover: hsnl["hsnl-06"],
    lede:
      "Khu công nghiệp đường sắt khép kín rộng 60 hecta, quy tụ 6 ngành công nghiệp chuyên biệt hiện đại không gây ô nhiễm môi trường, phục vụ trực tiếp tuyến đường sắt tốc độ cao TP.HCM – Cần Thơ.",
    stats: [
      { value: "60 ha", label: "Tổng diện tích khu công nghiệp" },
      { value: "450 triệu USD", label: "Tổng vốn đầu tư dự kiến" },
      { value: "6", label: "Ngành công nghiệp chuyên biệt" },
      { value: "135 km", label: "Chiều dài tuyến đường sắt phục vụ" },
    ],
    facilities: [
      {
        title: "Nhà máy đóng & sửa chữa toa xe",
        desc: "Chuyển giao công nghệ sản xuất đầu máy phục vụ tuyến đường sắt tốc độ cao TP.HCM – Cần Thơ; hướng tới đầu máy “Made in Vietnam”.",
      },
      {
        title: "Nhà máy ống thép — 40 triệu USD",
        desc: "Sản xuất ống thép, dầm và bệ đỡ cầu cạn phục vụ toàn tuyến; công nghệ hiện đại thay thế phương pháp đúc truyền thống, đáp ứng hơn 50 cầu cạn và 4 cầu lớn.",
      },
      {
        title: "Nhà máy tấm 3D — 25 triệu USD",
        desc: "Sản xuất tấm 3D theo công nghệ Cộng hòa Áo, phục vụ xây dựng nhà ở cho công nhân thu nhập thấp và khu đô thị nhà ga dọc tuyến.",
      },
      {
        title: "Nhà máy điện rác — Công nghệ Plasma",
        desc: "Xử lý 2.000 tấn rác thải/ngày, phát điện cung cấp cho toàn tuyến đường sắt và khu vực lân cận; công nghệ không phát sinh chất thải, thân thiện môi trường.",
      },
    ],
    gallery: [
      { src: hsnl["hsnl-05"], caption: "Phối cảnh tổng thể Tan Kien Smart Station City" },
      { src: hsnl["hsnl-06"], caption: "Bản đồ quy hoạch khu công nghiệp Tân Kiên — 60ha" },
      { src: hsnl["hsnl-07"], caption: "Nhà máy đóng & sửa chữa toa xe đường sắt" },
      { src: hsnl["hsnl-08"], caption: "Nhà máy sản xuất ống thép, dầm cầu cạn" },
      { src: hsnl["hsnl-09"], caption: "Nhà máy sản xuất tấm 3D — công nghệ Áo" },
      { src: hsnl["hsnl-10"], caption: "Nhà máy điện rác công nghệ Plasma" },
    ],
  },
  {
    id: "wind-turbine",
    index: "02",
    title: "Nhà máy sản xuất Tuabin Điện gió",
    subtitle: "Wind Turbine Manufacturing Complex",
    location: "Đồng bằng sông Cửu Long — Hợp tác GURSUNG Construction Investment JSC",
    cover: hsnl["hsnl-11"],
    lede:
      "Tổ hợp 5 nhà máy sản xuất tuabin điện gió quy mô công nghiệp trên diện tích 12 hecta, sở hữu cảng biển dài 1.000m, hợp tác chuyển giao công nghệ cùng W2E Germany và Aeronautica USA — đưa Việt Nam vào chuỗi cung ứng thiết bị điện gió toàn cầu.",
    stats: [
      { value: "12 ha", label: "Tổng diện tích nhà máy" },
      { value: "1.000 m", label: "Chiều dài mặt cảng" },
      { value: "2.000 MW", label: "Công suất sản xuất mỗi năm" },
      { value: "150 triệu USD", label: "Vốn đầu tư giai đoạn 1" },
    ],
    facilities: [
      { title: "5 nhà máy thành phần", desc: "Nhà máy đóng xà lan, nhà máy sản xuất đầu tuabin, cánh quạt, thân trụ và kết cấu thép." },
      { title: "Nhà máy cánh quạt — 2.500 m²", desc: "Sản xuất cánh tuabin gió công suất lớn, chuyển giao công nghệ từ đối tác Đức W2E." },
      { title: "Nhà máy đầu tuabin — 4.000 m²", desc: "Tổ hợp nhà máy I + II sản xuất nacelle & hub cho tuabin công suất tới 3MW trở lên." },
      { title: "Bãi chứa ngoài trời — 50.000 m²", desc: "Kho bãi tập kết cấu kiện quy mô lớn, tối ưu logistics vận chuyển ra cảng." },
    ],
    highlights: [
      "Hợp tác vận hành & chuyển giao công nghệ với W2E Germany và Aeronautica USA",
      "Doanh thu dự kiến 2 tỷ USD/năm khi vận hành toàn công suất",
      "Tạo hơn 1.000 việc làm công nghệ cao cho lao động địa phương",
      "Vị trí chiến lược trung tâm các tỉnh miền Tây — khu vực trọng điểm điện gió Việt Nam",
      "Năng lực thi công điện gió ngoài khơi: nền móng cọc đơn, tháp khí tượng biển, lắp đặt tuabin bằng tàu cẩu chuyên dụng",
    ],
    gallery: [
      { src: hsnl["hsnl-11"], caption: "Phối cảnh tổng thể nhà máy sản xuất tuabin điện gió" },
      { src: hsnl["hsnl-12"], caption: "Tổng diện tích 12 hecta" },
      { src: hsnl["hsnl-13"], caption: "Mặt cảng dài 1.000m" },
      { src: hsnl["hsnl-14"], caption: "5 nhà máy thành phần trong tổ hợp" },
      { src: hsnl["hsnl-15"], caption: "Công suất sản xuất 2.000MW/năm" },
      { src: hsnl["hsnl-16"], caption: "Đầu tư giai đoạn 1: 150 triệu USD" },
      { src: hsnl["hsnl-17"], caption: "Hợp tác với W2E Germany & Aeronautica USA" },
      { src: hsnl["hsnl-18"], caption: "Xưởng sản xuất cánh quạt — 2.500m²" },
      { src: hsnl["hsnl-19"], caption: "Khu văn phòng điều hành — 600m²" },
      { src: hsnl["hsnl-20"], caption: "Nhà máy sản xuất tuabin I + II — 4.000m²" },
      { src: hsnl["hsnl-21"], caption: "Kho bãi ngoài trời — 50.000m²" },
      { src: hsnl["hsnl-24"], caption: "Tạo việc làm cho hơn 1.000 lao động công nghệ cao" },
      { src: hsnl["hsnl-26"], caption: "Vị trí trung tâm các tỉnh miền Tây" },
    ],
  },
  {
    id: "an-phu",
    index: "03",
    title: "An Phu Industrial Park (APIP)",
    subtitle: "Khu kinh tế cửa khẩu Mộc Bài — Tây Ninh",
    location: "Xã Lợi Thuận, huyện Bến Cầu, tỉnh Tây Ninh",
    cover: licenses["moc-bai-master-map"],
    lede:
      "Khu công nghiệp An Phú (APIP) rộng 103 hecta cùng khu đô thị Virginia Town 35 hecta, nằm trong Khu kinh tế cửa khẩu Mộc Bài trên trục đường Xuyên Á, hưởng chính sách ưu đãi đầu tư đặc biệt của khu kinh tế cửa khẩu.",
    stats: [
      { value: "103 ha", label: "Khu công nghiệp An Phú (APIP)" },
      { value: "35 ha", label: "Khu đô thị Virginia Town" },
      { value: "73 km", label: "Cách trung tâm TP.HCM" },
      { value: "0%", label: "Thuế TNDN 4 năm đầu hoạt động" },
    ],
    facilities: [
      { title: "Ưu đãi thuế thu nhập doanh nghiệp", desc: "Miễn 100% 4 năm đầu, giảm còn 5% trong 9 năm tiếp theo, 10% trong 15 năm kể từ khi bắt đầu hoạt động." },
      { title: "Miễn thuế xuất nhập khẩu & VAT", desc: "Hàng hoá, dịch vụ xuất nhập khẩu ra vào khu công nghiệp và khu kinh tế cửa khẩu được hưởng thuế suất VAT 0%." },
      { title: "Kết nối hạ tầng vùng", desc: "73km tới TP.HCM, 70km sân bay Tân Sơn Nhất, 75km cảng Sài Gòn, 170km thủ đô Phnom Penh — trên trục đường Xuyên Á kết nối Thái Lan, Lào, Campuchia, Myanmar." },
      { title: "Khu đô thị Virginia Town", desc: "35,2 hecta biệt thự, nhà phố liền kề, trường học, sân tennis, trung tâm thương mại phục vụ chuyên gia và người lao động khu công nghiệp." },
    ],
    gallery: [
      { src: licenses["moc-bai-master-map"], caption: "Bản đồ quy hoạch tổng thể Khu kinh tế cửa khẩu Mộc Bài" },
      { src: licenses["an-phu-industrial-zone-1"], caption: "Vị trí Khu công nghiệp APIP & khu đô thị trong tương quan vùng" },
      { src: licenses["apip-overview"], caption: "Tổng quan An Phu Industrial Park — 103ha" },
      { src: licenses["an-phu-industrial-park-brand"], caption: "Nhà xưởng tiêu chuẩn An Phu Industrial Park" },
      { src: anphu["anphu-2"], caption: "Sơ đồ phân lô APIP & chính sách ưu đãi nhà đầu tư" },
      { src: anphu["anphu-3"], caption: "Vị trí Khu kinh tế cửa khẩu Mộc Bài trên trục đường Xuyên Á" },
      { src: anphu["anphu-1"], caption: "Khu nhà ở — khu công nghiệp APIP & tiện ích thương mại" },
      { src: anphu["anphu-4"], caption: "Quy hoạch khu đô thị Virginia Town — 35,2ha" },
    ],
  },
];

export const capabilityGroups = [
  {
    key: "wind-offshore",
    label: "Thi công điện gió ngoài khơi",
    items: [
      { src: hsnl["hsnl-27"], caption: "Khảo sát địa chất & hải văn khu vực xây dựng" },
      { src: hsnl["hsnl-28"], caption: "Chi tiết kết cấu tháp tuabin" },
      { src: hsnl["hsnl-29"], caption: "Chi tiết tuabin gió & quy trình lắp đặt" },
      { src: hsnl["hsnl-30"], caption: "Các mô hình móng tuabin ngoài khơi" },
      { src: hsnl["hsnl-31"], caption: "Tuabin ven bờ & căn cứ thi công trên biển" },
      { src: hsnl["hsnl-32"], caption: "Quy trình lắp đặt bằng tàu chuyên dụng" },
      { src: hsnl["hsnl-33"], caption: "Ống Mono RCD & lắp đặt máy ray biển" },
      { src: hsnl["hsnl-34"], caption: "Thi công trên biển — Sea Construction" },
      { src: hsnl["hsnl-35"], caption: "Lắp đặt tuabin gió trên biển" },
      { src: hsnl["hsnl-36"], caption: "Thi công nền móng ngoài biển" },
      { src: hsnl["hsnl-37"], caption: "Gia công cốt thép & đổ bê tông móng trụ" },
    ],
  },
  {
    key: "equipment",
    label: "Thiết bị & máy móc xây dựng",
    items: [
      { src: hsnl["hsnl-39"], caption: "Xe cẩu chuyên dụng công trường" },
      { src: hsnl["hsnl-40"], caption: "Cẩu bánh xích công suất lớn" },
      { src: hsnl["hsnl-41"], caption: "Đội xe cẩu bánh xích 175 tấn" },
      { src: hsnl["hsnl-42"], caption: "Xe khoan cọc nhồi & cẩu container" },
    ],
  },
  {
    key: "steel",
    label: "Sản xuất & kinh doanh thép",
    items: [
      { src: hsnl["hsnl-43"], caption: "Sản xuất ống thép quy mô công nghiệp" },
      { src: hsnl["hsnl-44"], caption: "Dây chuyền cán thép hình chữ I" },
      { src: hsnl["hsnl-45"], caption: "Nhà máy cán ống & tấm thép" },
    ],
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
      { src: hsnl["hsnl-50"], caption: "Thi công cầu vượt sông quy mô lớn" },
    ],
  },
];

export const licenseDocs = [
  {
    src: hsnl["hsnl-02"],
    title: "Giấy chứng nhận đăng ký doanh nghiệp",
    desc: "Công ty Cổ phần Quốc tế Năng lượng Thăng Long — Mã số DN 0313781295, cấp lần đầu 28/04/2016, thay đổi lần thứ 2 ngày 19/08/2020.",
  },
  {
    src: licenses["investment-cert-1"],
    title: "Giấy chứng nhận đăng ký đầu tư",
    desc: "Dự án Nhà ở An Phú tại Khu kinh tế cửa khẩu Mộc Bài — Tây Ninh, mã số dự án 7604472866, do Ban Quản lý Khu kinh tế tỉnh Tây Ninh cấp.",
  },
  {
    src: licenses["investment-cert-2"],
    title: "Quy mô dự án nhà ở An Phú",
    desc: "Tổng diện tích đất sử dụng 352.004 m², bao gồm biệt thự, nhà phố liền kề, công trình công cộng, cây xanh và hạ tầng giao thông nội bộ.",
  },
  {
    src: licenses["investment-cert-3"],
    title: "Vốn đầu tư & tiến độ góp vốn",
    desc: "Tổng vốn đầu tư 678,4 tỷ đồng; vốn góp thực hiện dự án 143 tỷ đồng do Công ty CP Địa ốc An Phú – Mộc Bài thực hiện.",
  },
  {
    src: licenses["investment-cert-4"],
    title: "Ưu đãi & nghĩa vụ nhà đầu tư",
    desc: "Các điều khoản ưu đãi thuế TNDN, thuế nhập khẩu, tiền thuê đất và trách nhiệm tuân thủ pháp luật đầu tư, đất đai, xây dựng.",
  },
  {
    src: licenses["investment-cert-5"],
    title: "Thông tin nhà đầu tư & xác nhận",
    desc: "Công ty Cổ phần Địa ốc An Phú – Mộc Bài, người đại diện pháp luật ông Chu Minh Chiến — Chủ tịch HĐQT; xác nhận của Ban Quản lý Khu kinh tế tỉnh Tây Ninh.",
  },
];

export const partnerLogos = [
  "KECC", "SunDay", "Hyundai E&C", "KBS", "Kunhwa", "Kumho E&C", "Emart",
  "Doosan Heavy Industries", "Vinaconex", "VEC", "Dayou", "Sungjin Industrial",
  "POSCO E&C", "Cienco 4", "Cienco 5", "Cienco 6", "PetroVietnam PVC",
  "Ssangyong Construction", "Hanshin", "CC Construction Guarantee", "Samsung",
  "GS E&C", "Doosung Motor", "Bo Minh Construction", "KWM", "Globalinx Group",
  "Fluor", "Braemar Asia", "Emerson", "AnPhu Real Estate", "Anderson Greenwood",
  "Alaska Gasline Development Corp", "Baylor College of Medicine", "Cameron",
  "CenterPoint Energy", "Johnson Matthey", "LNG America", "Newfield", "Metro",
  "Quantum Petroleum", "SapuraKencana Petroleum", "MTIP My Thuy Int'l Port",
  "Ports America",
];

export const partnerPages = [hsnl["hsnl-51"], hsnl["hsnl-52"]];
