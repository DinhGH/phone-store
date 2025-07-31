import DynamicTable from "./DynamicTable";

export default function PhoneCompare() {
  const headers = [
    "Tiêu chí",
    "Điện thoại thông minh (Smartphone)",
    "Điện thoại phổ thông",
  ];

  const rows = [
    [
      "Thiết kế chính",
      "Tĩnh, không chuyển động (trượt camera)",
      "Tĩnh, lật, trượt, xoay, phím bấm",
    ],
    [
      "Hình dáng tổng thể",
      "Thanh mảnh, tối ưu màn hình",
      "Đa dạng, chủ yếu khối lớn",
    ],
    [
      "Cơ chế mở rộng",
      "Không hoặc trượt camera hiện đại",
      "Lật, trượt để lộ phím, hoặc xoay",
    ],
    [
      "Chất liệu bề mặt",
      "Thường kim loại hoặc kính, một vài dòng cơ bản làm từ nhựa",
      "Chủ yếu nhựa, đôi khi vỏ tháo rời",
    ],
    [
      "Phong cách thiết kế",
      "Hiện đại, liền mạch",
      "Truyền thống, phong cách đa dạng",
    ],
  ];

  return <DynamicTable headers={headers} rows={rows} />;
}
