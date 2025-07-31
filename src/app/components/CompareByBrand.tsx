import DynamicTable from "./DynamicTable";

export default function CompareByBrand() {
  const headers = [
    "Thương hiệu",
    "Phân khúc giá",
    "Hệ điều hành / Hệ sinh thái",
    "Đặc điểm & nhóm người dùng phù hợp",
  ];

  const rows = [
    [
      "Apple",
      "Cao cấp",
      "iOS",
      "Kiểu dáng sang trọng, hiệu năng mượt mà, bảo mật cao. Phù hợp cho người làm việc chuyên nghiệp, thích hệ sinh thái đồng bộ và ổn định.",
    ],
    [
      "Samsung",
      "Trung cấp – Cao cấp",
      "Android",
      "Đa dạng mẫu mã, màn hình đẹp (AMOLED), tùy biến linh hoạt, hỗ trợ công việc và giải trí. Phù hợp với người dùng đa nhu cầu, thích cập nhật phần mềm thường xuyên.",
    ],
    [
      "Xiaomi",
      "Phổ thông – Trung cấp",
      "Android",
      "Hiệu năng ổn trong tầm giá, pin khỏe, dễ tùy biến giao diện. Phù hợp cho học sinh – sinh viên, người dùng phổ thông hay lướt web, xem video.",
    ],
    [
      "Realme",
      "Phổ thông – Trung cấp",
      "Android",
      "Thiết kế trẻ trung, hiệu năng ổn định, pin bền, sắc nét. Hướng đến người thích chụp ảnh, sử dụng lâu dài và có ngân sách vừa phải.",
    ],
    [
      "OPPO",
      "Trung cấp – Cận cao cấp",
      "Android",
      "Camera selfie tốt, kiểu dáng thời trang, sạc nhanh. Rất phù hợp với giới trẻ năng động, yêu thích phong cách cá nhân và chụp ảnh.",
    ],
    [
      "Vivo",
      "Trung cấp – Cận cao cấp",
      "Android",
      "Camera sáng tạo, hiệu năng tốt và quay phim ổn định. Dành cho người đam mê làm video, sáng tạo nội dung, yêu cầu kiểu dáng mỏng, nhẹ.",
    ],
    [
      "Nokia",
      "Phổ thông – Trung cấp",
      "Android One",
      "Thiết kế bền bỉ, giao diện đơn giản, bảo mật cơ bản. Thích hợp với người lớn tuổi, người mới dùng smartphone hoặc cần máy phụ.",
    ],
    [
      "Asus",
      "Trung cấp – Cao cấp",
      "Android",
      "Chip mạnh, tản nhiệt tốt, tối ưu chơi game (ROG Phone). Dành cho gamer chuyên nghiệp hoặc hiệu năng cao trong tầm giá.",
    ],
    [
      "Honor",
      "Trung cấp – Cận cao cấp",
      "Android",
      "Thiết kế đẹp, hiệu năng ổn định, tập trung vào màn hình và camera. Phù hợp với người yêu thích công nghệ, cần sản phẩm cân bằng giữa giá, thiết kế và hiệu năng.",
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
        So sánh thương hiệu điện thoại
      </h2>
      <DynamicTable headers={headers} rows={rows} />
    </div>
  );
}
