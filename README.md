# Компонент ProductCard

## Структура проекта

```
src/
├── components/
│   ├── ProductCard.tsx - Основной компонент карточки товара
│   └── ProductCard.css - Стили компонента
├── App.tsx - Демонстрационное приложение
├── App.css - Стили приложения
└── index.tsx - Точка входа в приложение
```

## Использование компонента

```jsx
import ProductCard from './components/ProductCard';

// Пример использования
<ProductCard
  title="Смартфон XYZ Pro"
  origin="Китай"
  price={34900} // Цена в копейках
  currency="RUB"
  imageUrl="https://example.com/image.jpg"
/>
```

## Запуск проекта

```
npm install   # Установка зависимостей
npm start     # Запуск в режиме разработки
npm run build # Сборка для продакшена
```
