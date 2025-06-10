import React from "react";
import "./ProductCard.css";

type Currency = "RUB" | "USD" | "EUR";

interface ProductCardProps {
  title: string;
  origin: string;
  price: number;
  currency: Currency;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  origin,
  price,
  currency,
  imageUrl,
}) => {
  const formatPrice = (price: number, currency: Currency): string => {
    const mainUnits = price / 100;

    const currencyOptions: { [key in Currency]: Intl.NumberFormatOptions } = {
      RUB: { style: "currency", currency: "RUB", minimumFractionDigits: 0 },
      USD: { style: "currency", currency: "USD", minimumFractionDigits: 2 },
      EUR: { style: "currency", currency: "EUR", minimumFractionDigits: 2 },
    };

    return new Intl.NumberFormat("ru-RU", currencyOptions[currency]).format(
      mainUnits
    );
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="product-info">
        <h2 className="product-title">{title}</h2>
        <p className="product-origin">Страна: {origin}</p>
        <p className="product-price">{formatPrice(price, currency)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
