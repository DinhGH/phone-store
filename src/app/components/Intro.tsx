"use client";

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import IntroImage from "./IntroImage";
import PhoneCompare from "./PhoneCompare";
import PhoneCompareIosAndroid from "./PhoneCompareIosAndroid";
import PhoneSuggestByNeed from "./PhoneSuggestByNeed";
import CompareByPrice from "./CompareByPrice";
import CompareByBrand from "./CompareByBrand";

export default function Intro() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div
        className="
          relative
        "
      >
        <div
          className={`
            overflow-hidden
            w-full
            px-10 py-7 my-5
            bg-[#F7F7F8]
            rounded-2xl
            transition-all
            duration-500 ease-in-out
            ${expanded ? "max-h-[99999px]" : "max-h-[900px]"}
          `}
        >
          <div
            className="
              pl-7 py-2 pr-1
              bg-white
              border-l-6 border-gray-500 rounded-md
            "
          >
            <p>
              <span
                className="
                  text-red-700
                "
              >
                Điện thoại
              </span>{" "}
              ngày nay không chỉ là công cụ liên lạc mà còn là trợ thủ đắc lực
              trong công việc và giải trí. Với sự phát triển công nghệ, thiết bị
              này đã thay đổi cách con người tương tác với thế giới. Bài viết
              dưới đây sẽ cung cấp những thông tin tổng quan về lịch sử hình
              thành, tiêu chí lựa chọn và thương hiệu tốt nên mua tại DPHONE.
              Cùng khám phá ngay nhé!
            </p>
          </div>

          <div
            className="
              my-10
            "
          >
            <div
              onClick={() => setShow(!show)}
              className="
                flex
                pl-7 pr-4 py-2
                font-semibold text-2xl
                bg-[#E4E4E7]
                rounded-tl-md rounded-tr-md
                cursor-pointer
                justify-between
              "
            >
              <p>Nội dung chính</p>
              {show ? (
                <IoIosArrowUp
                  className="
                    text-xl
                    translate-y-1/2
                  "
                />
              ) : (
                <IoIosArrowDown
                  className="
                    text-xl
                    translate-y-1/2
                  "
                />
              )}
            </div>

            <div
              className={`
                overflow-hidden
                px-5 py-2
                bg-[#E4E4E7]
                rounded-bl-md rounded-br-md
                transition-all
                duration-900
                ${show ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <ul
                className="
                  pl-8 space-y-1
                  text-md text-gray-800
                  list-decimal
                "
              >
                <div>
                  <h6>
                    <a href="#sec1">
                      Điện thoại smartphone - Lịch sử hình thành, chức năng
                    </a>
                  </h6>
                  <ul
                    className="
                      pl-5
                      list-disc
                    "
                  >
                    <li>
                      <a href="#s11">Lịch sử hình thành</a>
                    </li>
                    <li>
                      <a href="#s12">Chức năng điện thoại di động</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6>
                    <a href="#sec2">
                      Phân loại điện thoại thông minh chi tiết nhất
                    </a>
                  </h6>
                  <ul
                    className="
                      pl-5
                      list-disc
                    "
                  >
                    <li>
                      <a href="#s21">Dựa theo kiểu dáng</a>
                    </li>
                    <li>
                      <a href="#s22">Theo hệ điều hành phổ biến</a>
                    </li>
                    <li>
                      <a href="#s23">Theo nhu cầu sử dụng</a>
                    </li>
                    <li>
                      <a href="#s24">Phân loại mobile phone theo tầm giá</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6>
                    <a href="#sec3">
                      Các tính năng nổi bật nhất trên điện thoại hiện nay
                    </a>
                  </h6>
                  <ul
                    className="
                      pl-5
                      list-disc
                    "
                  >
                    <li>
                      <a href="#s31">Gọi điện, nhắn tin, kết nối 4G/5G</a>
                    </li>
                    <li>
                      <a href="#s32">Chụp ảnh, quay video chất lượng cao</a>
                    </li>
                    <li>
                      <a href="#s33">
                        Đa nhiệm, ứng dụng phong phú (nghe nhạc, xem video...)
                      </a>
                    </li>
                    <li>
                      <a href="#s34">
                        Tính năng đặc biệt: AI, chống nước, sạc nhanh
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6>
                    <a href="#sec4">
                      Top điện thoại di động giá rẻ nên mua tại DPHONE
                    </a>
                  </h6>
                </div>
                <div>
                  <h6>
                    <a href="#sec5">
                      Tiêu chí chọn mua điện thoại giá rẻ, dùng bền
                    </a>
                  </h6>
                  <ul
                    className="
                      pl-5
                      list-disc
                    "
                  >
                    <li>
                      <a href="#s51">Xác định nhu cầu và ngân sách</a>
                    </li>
                    <li>
                      <a href="#s52">
                        Đánh giá thiết kế, màn hình, camera, pin, cấu hình
                      </a>
                    </li>
                    <li>
                      <a href="#s53">So sánh sản phẩm và thương hiệu</a>
                    </li>
                    <li>
                      <a href="#s54">Chọn nơi mua dtdd uy tín</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6>
                    <a href="#sec6">
                      Mua điện thoại giá rẻ, chính hãng tại DPHONE
                    </a>
                  </h6>
                </div>
              </ul>
            </div>
          </div>

          <div>
            <section
              className="
                intro
              "
            >
              <h1 id="sec1">
                Điện thoại smartphone - Lịch sử hình thành, chức năng
              </h1>
              <p>
                Các dòng smartphone sơ khai chỉ là thiết bị liên lạc đơn thuần
                hỗ trợ tác vụ nghe gọi cơ bản, giờ đây lại được tích hợp thêm đa
                dạng nhu cầu của người sử dụng như chụp ảnh, kết nối mạng, gọi
                video,...
              </p>
              <h2 id="s11">Lịch sử hình thành</h2>
              <p>
                Đầu tiên phải nhắc đến chính là lịch sử ra đời,{" "}
                <strong>điện thoại di động</strong> ra mắt năm 1973, mở ra kỷ
                nguyên liên lạc không dây. Các nhà sáng chế không ngừng tích hợp
                tính năng thông minh vào thiết bị cầm tay. Những bước tiến ban
                đầu đã đặt nền móng cho sự phát triển của các dòng hiện đại.
                <br></br>
                <br></br>
                Năm 1994, đt đầu tiên xuất hiện với màn hình cảm ứng đơn sắc và
                rộng 4.5 inch. Máy nặng đến 0,5kg, chip 16MHz, RAM và ROM 1MB,
                giúp quản lý lịch, danh bạ và gửi nhận email. Kiểu dáng cồng
                kềnh nhưng đánh dấu bước ngoặt quan trọng trong công nghệ.
                <IntroImage src={"/intro/1.webp"} />
                Giai đoạn 1996-1997, được cải tiến với trọng lượng nhẹ hơn. Điện
                thoại trở nên đa dụng hơn khi sở hữu bàn phím vật lý cùng bộ nhớ
                mở rộng và pin dùng lâu. Thời điểm bây giờ còn hay được gọi là
                smartphone, thu hút người dùng doanh nghiệp nhờ tính năng quản
                lý công việc thông minh. Cuối thập niên 1990, khái niệm
                smartphone được định hình rõ ràng hơn. Máy được tích hợp bút
                stylus, hỗ trợ duyệt web và email nâng cao. Hơn hết, thiết kế
                trên điện thoại dần đa dạng với kiểu dáng gập hay trượt, đáp ứng
                nhiều nhu cầu.
                <IntroImage src={"/intro/2.webp"} />
                Đầu những năm 2000, hệ điều hành như Symbian, Palm OS, Windows
                Mobile phát triển mạnh. Một số mẫu hỗ trợ gửi fax hoặc tài liệu
                qua kết nối mạng. Điện thoại trở thành công cụ quan trọng cho
                nhiều người dùng. <br></br>
                <br></br>Giai đoạn 2007-2018, iOS và Android thống lĩnh với màn
                hình cảm ứng lớn. Thiết bị tích hợp camera đa dạng, màn hình
                tràn viền và kháng nước, định hình xu hướng công nghệ hiện đại,
                từ giải trí đến công việc.
              </p>
              <h2 id="s12">Chức năng điện thoại di động</h2>
              <p>
                Hiện nay, đt di động không chỉ là công cụ liên lạc mà còn là sản
                phẩm đa năng phục vụ nhiều nhu cầu. Với hệ điều hành như Android
                hoặc iOS, các dòng này cho phép người dùng truy cập kho ứng dụng
                phong phú. Các tính năng nổi bật bao gồm:
              </p>
              <ul
                className="
                  ml-4 mt-5
                  ul-content list-disc
                "
              >
                <li>
                  <strong>Kết nối Internet:</strong> Truy cập web qua Wi-Fi hoặc
                  dữ liệu di động (3G, 4G, 5G), giúp lướt web, xem video và sử
                  dụng mạng xã hội.
                </li>
                <li>
                  <strong>Giao tiếp đa dạng:</strong> Dịch vụ chat qua các ứng
                  dụng như Messenger, WhatsApp, hoặc email qua Gmail, Outlook,
                  đảm bảo liên lạc nhanh chóng.
                </li>
                <li>
                  <strong>Giải trí và sáng tạo:</strong> Chụp ảnh, quay video,
                  chơi game, nghe nhạc, đáp ứng nhu cầu giải trí mọi lúc, mọi
                  nơi.
                </li>
                <li>
                  <strong>Hỗ trợ công việc:</strong> Lịch, danh bạ, ghi chú và
                  ứng dụng văn phòng giúp quản lý công việc hiệu quả.
                </li>
                <li>
                  <strong>Công nghệ tiên tiến:</strong> Một số mẫu tích hợp trí
                  tuệ nhân tạo AI, trợ lý ảo, cảm biến vân tay hoặc nhận diện
                  khuôn mặt, nâng cao trải nghiệm người tiêu dùng.
                </li>
              </ul>
              <IntroImage src={"/intro/3.webp"} />
            </section>

            <section
              className="
                intro
              "
            >
              <h1 id="sec2">Phân loại điện thoại thông minh chi tiết nhất</h1>
              <p>
                Các dòng <strong>smartphone</strong> ngày nay mang đến nhiều lựa
                chọn đa dạng, phù hợp với từng nhu cầu sử dụng. Việc phân loại
                giúp người dùng dễ dàng tìm kiếm thiết bị ưng ý.
              </p>
              <h2 id="s21">Dựa theo kiểu dáng</h2>
              <p>
                Khi mua điện thoại giá rẻ hay cao cấp, việc lựa chọn kiểu dáng
                luôn là lựa chọn hàng đầu người dùng quan tâm. Vì vậy, các
                thương hiệu đều nhắm đến việc cho ra mắt mẫu máy phù hợp kiểu
                dáng, màu sắc trẻ trung và sang trọng. Đơn cử một vài thương
                hiệu làm tốt việc này như iPhone, Samsung, OPPO và Xiaomi,..
                <IntroImage src={"/intro/4.webp"} />
                Bên cạnh đó, bạn có thể xem chi tiết nhất các đặc điểm và sự
                khác biệt trong phần thiết kế kiểu dáng của mẫu điện thoại thông
                minh và điện thoại phổ thông dưới đây để chọn được mẫu máy phù
                hợp với nhu cầu hơn ngay. Trong đó, gồm có:
              </p>
              <PhoneCompare />
              <h2 id="s22">Theo hệ điều hành phổ biến</h2>
              <p>
                Điện thoại mobile hiện nay sẽ chia làm hai hệ hành phổ biến
                chính là Android hoặc iOS, mỗi hệ có nguồn gốc khác nhau và ưu
                điểm khác biệt. Android được phát triển bởi Android Inc từ 2003,
                được Google mua lại năm 2005 và chính thức ra mắt năm 2007. iOS
                thì được giới thiệu cùng năm trên iPhone đầu tiên, tập trung
                trải nghiệm liền mạch của người dùng.
                <IntroImage src={"/intro/5.webp"} />
                Cùng so sánh điểm khác biệt và nguồn gốc chi tiết trên điện
                thoại Android và iOS dưới đây ngay:
              </p>
              <PhoneCompareIosAndroid />
              <h2 id="s23">Theo nhu cầu sử dụng</h2>
              <p>
                Không chỉ dừng lại ở việc nghe gọi thông thường, điện thoại di
                động để được lựa chọn mua nhiều còn cần phải trang bị đa dạng
                tính như hơn như hỗ trợ camera chất lượng cao, mang lại hình ảnh
                rõ nét trong mọi điều kiện. Khả năng xử lý mạnh mẽ giúp trải
                nghiệm giải trí mượt mà trong mọi điều kiện.
                <IntroImage src={"/intro/6.webp"} />
                Ngoài ra, còn một vài nhu cầu khác như pin lâu dài và thiết kế
                thời trang trên các dòng điện thoại. Một số model cung cấp dung
                lượng pin lớn, kéo dài hoạt động cho cả ngày. Sản phẩm mỏng nhẹ
                nâng cao phong cách, đáp ứng yêu cầu thẩm mỹ hàng ngày.<br></br>
                <br></br> Dưới đây là bảng tổng hợp một vài nhu cầu trên điện
                thoại bạn có thể xem qua:
              </p>
              <PhoneSuggestByNeed />
              <h2 id="s24">Phân loại mobile phone theo tầm giá</h2>
              <p>
                Điện thoại trên thị trường được phân chia theo các mức giá khác
                nhau, phù hợp với nhiều đối tượng người dùng. Mỗi phân khúc đem
                đến trải nghiệm riêng, từ cơ bản đến yêu cầu cao cấp hơn. Sự đa
                dạng giúp người dùng dễ dàng lựa chọn máy theo sở thích cá nhân.
                <IntroImage src={"/intro/7.webp"} />
                Cùng điểm qua một vài dòng sản phẩm mới nhất phù hợp theo từng
                mức giá bạn có thể xem thêm để chọn mua điện thoại giá rẻ phù
                hợp với nhu cầu nhưng hiệu năng vẫn tốt ngay nhé!
              </p>
              <CompareByPrice />
            </section>

            <section
              className="
                intro
              "
            >
              <h1 id="sec3">
                Các tính năng nổi bật nhất trên điện thoại hiện nay
              </h1>
              <p>
                Chưa dừng lại tại đó, điện thoại thông minh ngày nay tích hợp
                nhiều tính năng vượt trội, đáp ứng nhu cầu đa dạng. Nhờ đó, các
                dòng máy này trở thành công cụ hiệu quả cho cả liên lạc lẫn giải
                trí.
              </p>
              <h2 id="s31">Gọi điện, nhắn tin, kết nối 4G/5G</h2>
              <p>
                Điện thoại đóng vai trò quan trọng trong việc duy trì liên lạc
                thông qua gọi điện và nhắn tin. Một số mẫu có chất lượng âm
                thanh tiên tiến, đảm bảo cuộc gọi rõ ràng trong nhiều điều kiện.
                Hơn nữa, tính năng chặn số không mong muốn giúp người dùng tránh
                bị làm phiền.<br></br>
                <br></br> Kết nối 5G trên các dòng smartphone mang lại tốc độ
                truyền tải cao, vượt xa mạng 4G. Độ trễ thấp giúp cải thiện trải
                nghiệm lướt web và tải dữ liệu nhanh chóng. Ngoài ra, mạng 5G hỗ
                trợ nhiều thiết bị kết nối đồng thời mà vẫn duy trì hiệu suất ổn
                định.
                <IntroImage src={"/intro/8.webp"} />
                Bên cạnh đó, điện thoại di động tích hợp ứng dụng nhắn tin qua
                mạng xã hội hoặc dịch vụ chat. Tính năng ghi âm cuộc gọi cho
                phép lưu trữ thông tin quan trọng. Những cải tiến này giúp việc
                liên lạc trở nên linh hoạt và tiện lợi hơn trên các dòng smart
                phone ngày nay.<br></br>
                <br></br> Lưu ý: Tính năng ghi âm có thể bị hạn chế hoặc cấm bởi
                pháp luật của một số quốc gia.
              </p>
              <h2 id="s32">Chụp ảnh, quay video chất lượng cao</h2>
              <p>
                Chụp ảnh trên điện thoại ngày càng phổ biến nhờ công nghệ camera
                tiên tiến. Một số mẫu dùng cảm biến độ phân giải cao, mang lại
                hình ảnh sắc nét trong nhiều điều kiện. Công nghệ AI hỗ trợ tự
                động điều chỉnh thông số, nâng cao chất lượng ảnh chụp.<br></br>
                <br></br> Hơn nữa, khả năng quay video độ phân giải cao trên các
                dòng máy giúp ghi lại khoảnh khắc sống động. Tính năng chống
                rung đảm bảo video mượt mà, phù hợp cho cả quay di chuyển. Một
                số dòng điện thoại thông minh còn hỗ trợ chế độ quay chậm, tạo
                hiệu ứng sáng tạo.
                <IntroImage src={"/intro/9.webp"} />
                Ngay cả các mẫu điện thoại giá rẻ cũng đáp ứng tốt nhu cầu chụp
                ảnh cơ bản. Người dùng dễ dàng chỉnh sửa ảnh trực tiếp trên máy
                mà không cần phần mềm bổ sung. Tính năng này giúp thay thế hiệu
                quả các thiết bị chụp ảnh truyền thống.
              </p>
              <h2 id="s33">
                Đa nhiệm, ứng dụng phong phú (nghe nhạc, xem video, lịch, nhắc
                nhở)
              </h2>
              <p>
                Nhờ khả năng đa nhiệm, điện thoại xử lý nhiều ứng dụng cùng lúc
                mà vẫn đảm bảo hiệu suất. Một số mẫu được trang bị bộ nhớ RAM
                lớn, giúp chạy mượt mà các tác vụ nặng. Kho ứng dụng phong phú
                cung cấp phần mềm đa dạng, từ giải trí đến công việc. <br></br>
                <br></br>Cụ thể, dtdd còn đem lại trải nghiệm nghe nhạc và xem
                video chất lượng cao nhờ màn hình sắc nét. Một số sản phẩm tích
                hợp công nghệ âm thanh cải tiến, tạo cảm giác sống động. Những
                tính năng này biến điện thoại thành trung tâm giải trí di động
                tiện lợi.
                <IntroImage src={"/intro/10.webp"} />
                Một tính năng hỗ trợ tiếp theo chính là quản lý công việc với
                lịch và lời nhắc tích hợp. Người dùng có thể lưu trữ danh bạ,
                tài liệu và các tệp quan trọng. Những công cụ này trên các dòng
                smartphone giúp tổ chức công việc và học tập hiệu quả hơn.
              </p>
              <h2 id="s34">Tính năng đặc biệt: AI, chống nước, sạc nhanh</h2>
              <p>
                Công nghệ AI trên điện thoại cải thiện hiệu suất thông qua các
                chip xử lý hiện đại. Trợ lý ảo hỗ trợ điều khiển bằng giọng nói,
                mang lại sự tiện lợi trong sử dụng hàng ngày. Ngoài ra, AI còn
                tối ưu hóa chất lượng ảnh chụp và quản lý năng lượng hiệu quả.
                <br></br>
                <br></br> Về sạc nhanh, một số dòng cho phép nạp pin nhanh chóng
                với công suất cao, rút ngắn thời gian chờ. Công nghệ sạc an toàn
                đảm bảo thiết bị không bị hư hại khi sử dụng dòng điện mạnh. Một
                số sản phẩm còn có sạc không dây, tăng tính linh hoạt.
                <IntroImage src={"/intro/11.webp"} />
                Đồng thời, các máy này đạt chuẩn chống nước có thể chịu nước ở
                độ sâu nhất định trong thời gian giới hạn. Tính năng này bảo vệ
                thiết bị khỏi bụi và nước mưa, tăng độ bền. Tuy nhiên, người
                dùng cần đóng kín các cổng trước khi tiếp xúc với môi trường ẩm
                ướt.
              </p>
            </section>

            <section
              className="
                intro
              "
            >
              <h1 id="sec4">
                Top điện thoại di động giá rẻ nên mua tại DPHONE
              </h1>
              <p>
                Điện thoại di động thông minh trên thị trường mang đến nhiều lựa
                chọn hấp dẫn cho người tiêu dùng. Các thiết bị được thiết kế để
                đáp ứng từ cơ bản đến chuyên sâu, tùy theo mục đích sử dụng. Sự
                đa dạng giúp người mua dễ dàng tìm kiếm sản phẩm phù hợp với sở
                thích.
              </p>
              <CompareByBrand />
            </section>

            <section
              className="
                intro
              "
            >
              <h1 id="sec5">Tiêu chí chọn mua điện thoại giá rẻ, dùng bền</h1>
              <p>
                Điện thoại hiện nay đa dạng về tính năng, phù hợp nhiều ngân
                sách. Việc lựa chọn dòng điện thoại thông minh cần dựa trên nhu
                cầu sử dụng thực tế.
              </p>
              <h2 id="s51">Xác định nhu cầu và ngân sách</h2>
              <p>
                Việc chọn dòng điện thoại phù hợp bắt đầu từ xác định mục đích
                sử dụng như liên lạc, giải trí hay công việc. Một số mẫu trong
                tầm giá thấp vẫn đáp ứng tốt nhu cầu cơ bản. Xác định rõ nhu cầu
                giúp người tiêu dùng tiết kiệm chi phí hiệu quả.
                <IntroImage src={"/intro/12.webp"} />
                Tiếp theo, ngân sách quyết định phạm vi lựa chọn dòng smartphone
                phù hợp. Các thiết bị giá rẻ thường nằm trong khoảng từ vài
                triệu đồng, đủ để đáp ứng nhu cầu phổ thông. Lựa chọn đúng ngân
                sách đảm bảo trải nghiệm sử dụng ổn định và lâu dài.
              </p>
              <h2 id="s52">
                Đánh giá thiết kế, màn hình, camera, pin, cấu hình
              </h2>
              <p>
                Khi chọn điện thoại, thiết kế và màn hình ảnh hưởng lớn đến trải
                nghiệm sử dụng. Một số mẫu có kích thước màn hình lớn với độ
                phân giải cao, mang lại hình ảnh rõ nét. Thiết kế tiện dụng giúp
                người dùng thoải mái khi cầm nắm hàng ngày.
                <IntroImage src={"/intro/13.webp"} />
                Cấu hình và pin cũng cần được cân nhắc khi chọn điện thoại thông
                minh. Một số thiết bị có bộ nhớ RAM đủ mạnh và dung lượng pin
                lớn, hỗ trợ dùng liên tục nhiều giờ. Camera chất lượng cao giúp
                chụp ảnh đẹp trong nhiều điều kiện ánh sáng.
              </p>
              <h2 id="s53">So sánh sản phẩm và thương hiệu</h2>
              <p>
                Việc so sánh các mẫu điện thoại thông minh dựa trên thông số kỹ
                thuật là bước quan trọng. Một số thiết bị được trang bị chip xử
                lý mạnh, đáp ứng tốt các tác vụ đa nhiệm. Việc so sánh này giúp
                người dùng tìm được dòng điện thoại phù hợp cho nhiều nhu cầu.
                <IntroImage src={"/intro/14.webp"} />
                Hơn nữa, các thương hiệu cung cấp chính sách hỗ trợ khác nhau
                cho từng dòng điện thoại di động. Một số mẫu đi kèm thời gian
                bảo hành dài và cập nhật phần mềm định kỳ. Những yếu tố này đảm
                bảo các dòng smartphone hoạt động ổn định qua thời gian.
              </p>
              <h2 id="s54">Chọn nơi mua dtdd uy tín</h2>
              <p>
                Việc chọn nơi mua uy tín đảm bảo điện thoại có chất lượng đáng
                tin cậy. Một số nơi cung cấp thiết bị chính hãng với chính sách
                hỗ trợ rõ ràng, tránh rủi ro về hàng kém chất lượng. Vì vậy, mua
                tại DPHONE là lựa chọn phù hợp để đảm bảo trải nghiệm sử dụng
                lâu dài.
                <IntroImage src={"/intro/15.webp"} />
                Hơn nữa, nơi uy tín giúp người tiêu dùng yên tâm về giá điện
                thoại và dịch vụ sau mua. Các thiết bị thường được kiểm tra kỹ
                lưỡng trước khi đến tay khách hàng. Điều này giúp duy trì hiệu
                suất ổn định và bền bỉ.
              </p>
            </section>
            <section
              className="
                intro
              "
            >
              <h1 id="sec6">
                Mua điện thoại (mobile) giá rẻ, chính hãng tại DPHONE
              </h1>
              <p>
                Điện thoại chính hãng tại DPHONE đáp ứng nhu cầu đa dạng từ giải
                trí đến công việc. Các sản phẩm đảm bảo chất lượng, đi kèm chính
                sách bảo hành rõ ràng. Người dùng dễ dàng tìm thấy các dòng máy
                thông minh phù hợp với ngân sách và mục đích sử dụng.
                <IntroImage src={"/intro/16.webp"} />
                DPHONE cung cấp nhiều dòng điện thoại với giá cạnh tranh, cũng
                như giao hàng nhanh chóng khi mua online. Dịch vụ tư vấn chuyên
                nghiệp hỗ trợ khách hàng chọn thiết bị ưng ý. Chính sách hậu mãi
                chu đáo giúp trải nghiệm mua sắm thêm trọn vẹn.<br></br>
                <br></br> Bài viết đã cung cấp thông tin chi tiết về việc chọn
                mua điện thoại phù hợp. Từ lịch sử đến tính năng, người dùng có
                cái nhìn rõ ràng hơn về các dòng này. Vì vậy, DPHONE là địa chỉ
                đáng tin cậy để sở hữu sản phẩm chất lượng với giá tốt.<br></br>
                <br></br> Như vậy chúng ta đã tìm hiểu về định nghĩa, vai trò và
                các thương hiệu được yêu thích. Bên cạnh smartphone thì máy tính
                bảng cũng dần trở thành thiết bị công nghệ không thể thiếu đối
                với cộng đồng.
              </p>
            </section>
          </div>

          {!expanded && (
            <div
              className="
                z-10
                w-full h-16
                bg-gradient-to-t from-[#F7F7F8] to-transparent
                pointer-events-none
                absolute bottom-[20px] left-0
              "
            />
          )}
        </div>
        <div
          className="
            flex z-20
            mt-2
            justify-center relative
          "
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="
              text-blue-600 text-sm
              opacity-80
              hover:scale-105
            "
          >
            {expanded ? "Ẩn bớt ▲" : "Xem thêm ▼"}
          </button>
        </div>
      </div>
    </>
  );
}
