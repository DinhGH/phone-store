import DynamicTable from "./DynamicTable";

export default function PhoneSuggestByNeed() {
  const headers = [
    "Nhu cầu",
    "Thiết bị gợi ý",
    "Đặc điểm chính",
    "Thông số nổi bật",
    "Ưu điểm",
  ];

  const rows = [
    [
      "Chụp ảnh đẹp",
      "Google Pixel, iPhone, Samsung",
      "Camera đa dạng, hỗ trợ chụp thiếu sáng",
      "Độ phân giải cao",
      "Ảnh rõ nét, nhiều chế độ",
    ],
    [
      "Chơi game (gaming)",
      "ROG Phone, iPhone, OnePlus",
      "Chip mạnh, đồ họa mượt",
      "Hiệu năng xử lý cao",
      "Trải nghiệm game ổn định",
    ],
    [
      "Pin trâu, dung lượng lớn",
      "Xiaomi, Realme, Samsung M",
      "Pin lớn, thiết kế bền",
      "4000–6000mAh",
      "Sử dụng lâu, ít sạc",
    ],
    [
      "Công việc văn phòng",
      "iPhone, Samsung Galaxy, Pixel",
      "Tích hợp công cụ quản lý",
      "Màn hình lớn",
      "Quản lý hiệu quả, tiện lợi",
    ],
    [
      "Mỏng nhẹ, thời trang",
      "iPhone, Oppo Find, Vivo X",
      "Kiểu dáng mỏng, chất liệu cao cấp",
      "Trọng lượng nhẹ",
      "Tăng tính thẩm mỹ, dễ mang",
    ],
    [
      "Phổ thông, giá rẻ",
      "Redmi, Realme, Samsung A",
      "Giá hợp lý, dễ sử dụng",
      "Dung lượng cơ bản",
      "Tiếp cận rộng, tiết kiệm",
    ],
  ];

  return (
    <div
      className="
        p-4
      "
    >
      <h2
        className="
          mb-4
          text-lg font-bold
        "
      >
        Gợi ý thiết bị theo nhu cầu
      </h2>
      <DynamicTable headers={headers} rows={rows} />
    </div>
  );
}
