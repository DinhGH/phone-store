import FaqItem from "./FaqItem";

const faqs = [
  {
    question:
      "Vì sao tôi nên tham gia thu cũ đổi mới khi mua điện thoại tại DPHONE?",
    answer:
      ">>Việc thu cũ đổi mới giúp bạn tiết kiệm chi phí và dễ dàng nâng cấp thiết bị mới với giá ưu đãi.",
  },
  {
    question:
      "Thủ tục trả góp điện thoại tại DPHONE như thế nào? Có dễ dàng không?",
    answer:
      ">>Rất đơn giản, bạn chỉ cần CMND/CCCD và đến cửa hàng hoặc đăng ký online. Xét duyệt nhanh chóng.",
  },
  {
    question:
      "Tôi có thể bảo hành điện thoại ở đâu và chính sách bảo hành như thế nào?",
    answer:
      ">>Bạn có thể bảo hành tại các trung tâm DPHONE trên toàn quốc. Chính sách bảo hành tùy thuộc hãng và sản phẩm.",
  },
  {
    question: "Tôi có thể thanh toán qua những hình thức nào?",
    answer:
      ">>Bạn có thể thanh toán bằng tiền mặt, chuyển khoản, thẻ ngân hàng, ví điện tử hoặc trả góp.",
  },
];

export default function FaqList() {
  return (
    <div>
      <h1
        className="
          mt-5
          text-2xl font-bold
        "
      >
        Câu hỏi thường gặp
      </h1>
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
