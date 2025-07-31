import DynamicTable from "./DynamicTable";

export default function PhoneCompareIosAndroid() {
  const headers = ["Tiêu chí", "Android", "iOS"];

  const rows = [
    [
      "Nguồn gốc",
      "Dựa trên Linux, phát triển bởi Google",
      "Hệ điều hành riêng, độc quyền cho Apple",
    ],
    [
      "Ra mắt",
      "Năm 2007, từ Android Inc",
      "Năm 2007, cùng với iPhone đầu tiên",
    ],
    [
      "Số lượng ứng dụng",
      "Khoảng 3,5 triệu ứng dụng",
      "Khoảng 1,6 triệu ứng dụng",
    ],
    [
      "Khả năng cập nhật",
      "2–3 năm (các dòng Samsung và Google Pixel có thể từ 4–5 năm, tùy mẫu)",
      "7 năm cập nhật chính thức",
    ],
    [
      "Tùy biến giao diện",
      "Cao, hỗ trợ widget, phím tắt, launcher tùy biến",
      "Hạn chế, chủ yếu dùng giao diện mặc định",
    ],
    [
      "Bảo mật",
      "Mã nguồn mở, dễ bị tấn công bởi phần mềm độc hại",
      "Đóng, kiểm duyệt nghiêm ngặt qua App Store",
    ],
    [
      "Cài ứng dụng ngoài",
      "Dễ dàng, hỗ trợ cài qua file APK",
      "Khó khăn, cần tinh chỉnh máy (Jailbreak)",
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
        So sánh Android và iOS
      </h2>
      <DynamicTable headers={headers} rows={rows} />
    </div>
  );
}
