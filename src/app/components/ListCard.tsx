"use client";

import { useEffect, useState } from "react";
import ProductCard from "./Card";

type Product = {
  id: number;
  name: string;
  original: number;
  discount: number;
  smemberDiscount: number;
  sstudentDiscount: number;
  imageUrl: string;
  inch: string;
  capacity: string;
  rating: number;
};

const getPrice = (p: Product) =>
  Math.round((1 - p.discount / 100) * p.original);

export default function ProductList({
  setItemCount,
}: {
  setItemCount: (value: number) => void;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [showFilter, setShowFilter] = useState(false);
  const [priceRange, setPriceRange] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setAllProducts(data);
      })
      .catch((err) => console.error("Lỗi khi fetch sản phẩm:", err));
  }, []);

  const handleFilter = () => {
    let filtered = [...allProducts];

    switch (priceRange) {
      case "lt2":
        filtered = filtered.filter((p) => getPrice(p) < 2_000_000);
        break;
      case "2to3":
        filtered = filtered.filter(
          (p) => getPrice(p) >= 2_000_000 && getPrice(p) < 3_000_000,
        );
        break;
      case "3to5":
        filtered = filtered.filter(
          (p) => getPrice(p) >= 3_000_000 && getPrice(p) < 5_000_000,
        );
        break;
      case "5to7":
        filtered = filtered.filter(
          (p) => getPrice(p) >= 5_000_000 && getPrice(p) < 7_000_000,
        );
        break;
      case "7to10":
        filtered = filtered.filter(
          (p) => getPrice(p) >= 7_000_000 && getPrice(p) < 10_000_000,
        );
        break;
      case "gt10":
        filtered = filtered.filter((p) => getPrice(p) >= 10_000_000);
        break;
      default:
        break;
    }

    switch (sortOrder) {
      case "asc":
        filtered.sort((a, b) => getPrice(a) - getPrice(b));
        break;
      case "desc":
        filtered.sort((a, b) => getPrice(b) - getPrice(a));
        break;
      default:
        break;
    }

    setProducts(filtered);
    setShowFilter(false);
  };

  return (
    <div
      className="
        pt-5 pb-7 px-10
        bg-gradient-to-b from-[#F83E60] to-[#FE5048]
        rounded-2xl
        relative
      "
    >
      <div
        className="
          flex z-20
          justify-end gap-2.5 absolute top-4 right-10
        "
      >
        <button
          onClick={() => {
            setProducts(allProducts);
            setShowFilter(false);
            setPriceRange("");
            setSortOrder("");
          }}
          className="
            px-4 py-1
            bg-[#e28c96]
            rounded-xl
            shadow-lg
            active:bg-[#edc7c7]
          "
        >
          All
        </button>
        <div
          className="
            relative
          "
        >
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="
              px-4 py-1
              bg-[#e28c96]
              rounded-xl
              shadow-lg
              active:bg-[#edc7c7]
            "
          >
            Xếp theo giá
          </button>

          {showFilter && (
            <div
              className="
                z-50
                w-72
                mt-2 p-4
                bg-white
                rounded-lg
                shadow-md
                absolute right-0
              "
            >
              <div
                className="
                  mb-4
                "
              >
                <p
                  className="
                    mb-1
                    font-semibold
                  "
                >
                  Sắp xếp theo giá:
                </p>
                <label
                  className="
                    block
                  "
                >
                  <input
                    type="radio"
                    name="sort"
                    value="asc"
                    checked={sortOrder === "asc"}
                    onChange={(e) => setSortOrder(e.target.value)}
                  />{" "}
                  Thấp đến cao
                </label>
                <label
                  className="
                    block
                  "
                >
                  <input
                    type="radio"
                    name="sort"
                    value="desc"
                    checked={sortOrder === "desc"}
                    onChange={(e) => setSortOrder(e.target.value)}
                  />{" "}
                  Cao đến thấp
                </label>
              </div>

              <div>
                <p
                  className="
                    mb-1
                    font-semibold
                  "
                >
                  Lọc theo khoảng giá:
                </p>
                {[
                  { value: "lt2", label: "Dưới 2 triệu" },
                  { value: "2to3", label: "2 - 3 triệu" },
                  { value: "3to5", label: "3 - 5 triệu" },
                  { value: "5to7", label: "5 - 7 triệu" },
                  { value: "7to10", label: "7 - 10 triệu" },
                  { value: "gt10", label: "Trên 10 triệu" },
                ].map(({ value, label }) => (
                  <label
                    key={value}
                    className="
                      block
                    "
                  >
                    <input
                      type="radio"
                      name="priceRange"
                      value={value}
                      checked={priceRange === value}
                      onChange={(e) => setPriceRange(e.target.value)}
                    />{" "}
                    {label}
                  </label>
                ))}
              </div>

              <button
                onClick={handleFilter}
                className="
                  w-8/12
                  mt-3 px-4 py-1
                  bg-[#d84f5f]
                  rounded-xl
                  shadow-lg
                  active:scale-105 -translate-x-1/2 relative left-1/2
                "
              >
                Lọc
              </button>
            </div>
          )}
        </div>
      </div>

      <div
        className="
          grid grid-cols-3
          mt-14
          gap-4
          lg:grid-cols-4
        "
      >
        {products.map((i) => (
          <ProductCard key={i.id} product={i} setItemCount={setItemCount} />
        ))}
      </div>
    </div>
  );
}
