import DynamicTable from "./DynamicTable";

export default function CompareByPrice() {
  const headers = [
    "Mức giá",
    "Đặc điểm chính",
    "Sản phẩm gợi ý",
    "Lợi ích nổi bật",
  ];

  const rows = [
    [
      "2–4 triệu",
      "Camera chụp ảnh thường, pin lớn, kết nối cơ bản",
      "Redmi A3, Realme, Redmi 13",
      "Hình ảnh cơ bản, pin bền, phù hợp lướt mạng, xem video, gọi điện",
    ],
    [
      "4–7 triệu",
      "Camera đa năng, pin mạnh, hỗ trợ 5G, chip trung bình",
      "Redmi Note 13, Oppo A58, Samsung A14 5G",
      "Chụp ảnh linh hoạt, kết nối nhanh, lý tưởng chơi game nhẹ, công việc",
    ],
    [
      "7–13 triệu",
      "Camera chuyên nghiệp, pin cao, hỗ trợ 5G, chip mạnh",
      "Vivo V40, Galaxy A55, Xiaomi 14T",
      "Hình ảnh sắc nét, hiệu năng tốt, dùng chơi game nặng, quay phim ngắn",
    ],
    [
      "Trên 13 triệu",
      "Camera đỉnh cao, chip mạnh, thiết kế cao cấp",
      "iPhone 16, ROG Phone 8, Galaxy S24",
      "Chụp ảnh chuyên sâu, xử lý mượt, thích hợp chơi game chuyên nghiệp, chỉnh video",
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
        So sánh theo mức giá điện thoại
      </h2>
      <DynamicTable headers={headers} rows={rows} />
    </div>
  );
}
