import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  const products = [
    {
      id: 1,
      title: "Смартфон XYZ Pro",
      origin: "Китай",
      price: 34900,
      currency: "RUB" as const,
      imageUrl:
        "https://api.oneapipro.com/images/placeholder?text=Смартфон XYZ Pro&width=400&height=300&color=524d66",
    },
    {
      id: 2,
      title: "Наушники AudioMax",
      origin: "Япония",
      price: 9990,
      currency: "RUB" as const,
      imageUrl:
        "https://api.oneapipro.com/images/placeholder?text=Наушники AudioMax&width=400&height=300&color=524d66",
    },
    {
      id: 3,
      title: "Планшет TabX",
      origin: "США",
      price: 4999,
      currency: "USD" as const,
      imageUrl:
        "https://api.oneapipro.com/images/placeholder?text=Планшет TabX&width=400&height=300&color=524d66",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Каталог товаров</h1>
      </header>
      <main className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            origin={product.origin}
            price={product.price}
            currency={product.currency}
            imageUrl={product.imageUrl}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
