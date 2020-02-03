import React from 'react';
import Title from './Title';
import Presentation from './Presentation';
import SimilarProducts from './SimilarProducts';
import MetaInfo from './MetaInfo';

const data = {
  title: 'Моторное масло MOBIL Super 3000 X1 5W-40, 4л',
  code: '39207',
  discount: false,
  gallery: [
    'https://hotline.ua/img/tx/175/175737275.jpg',
    'https://hotline.ua/img/tx/099/0995515.jpg',
    'https://cdn.27.ua/499/7d/73/163187_1.jpeg',
    'https://avtomaliar.ua/image/cache/catalog/data/maslo/mobil1_esp_formula_5w_30_4l-900x962-watermark_image_pr.jpg',
    'https://images.ua.prom.st/1768683698_w640_h640_motornoe-maslo-mobil-1.jpg',
  ],
  reviews: [
    {
      id: 1,
      text:
        'У Huawei краща основна камера ніж в Lenovo при тому, що Lenovo ніколи не були сильні в плані фото, а також у y6 pro кращий процесор (вища частота) і, як кажуть, краща оптимізація, що позитивно впливає на тривалість роботи. До того ж, мені здається, що у Huawei менше проблем по якості ніж у Lenovo. Захист від бризг у Р1m є скоріше рекламним трюком ніж реальним захистом та і потреба в ньому виникає не часто.',
    },
    {
      id: 2,
      text:
        'У Huawei краща основна камера ніж в Lenovo при тому, що Lenovo ніколи не були сильні в плані фото, а також у y6 pro кращий процесор (вища частота) і, як кажуть, краща оптимізація, що позитивно впливає на тривалість роботи. До того ж, мені здається, що у Huawei менше проблем по якості ніж у Lenovo. Захист від бризг у Р1m є скоріше рекламним трюком ніж реальним захистом та і потреба в ньому виникає не часто.',
    },
    {
      id: 3,
      text:
        'У Huawei краща основна камера ніж в Lenovo при тому, що Lenovo ніколи не були сильні в плані фото, а також у y6 pro кращий процесор (вища частота) і, як кажуть, краща оптимізація, що позитивно впливає на тривалість роботи. До того ж, мені здається, що у Huawei менше проблем по якості ніж у Lenovo. Захист від бризг у Р1m є скоріше рекламним трюком ніж реальним захистом та і потреба в ньому виникає не часто.',
    },
  ],
  question: 4,
  rating: 4.9,
  stock: false,
  price: 456,
  description:
    'ELF Tranself NFJ 75W-80 1л - Трансмиссионное масло. Тип масла: Трансмиссионное масло ; Тип основы масла: синтетическое масло; SAE: 75W-80; Емкость, л: 1 ELF Tranself NFJ 75W-80 1л - Трансмиссионное масло Тип масла:     Трансмиссионное масло ; Тип основы масла: синтетическое масло; SAE: 75W-80; Емкость, л: 1',
  similar: [
    {
      stock: true,
      description: 'Трансмиссионное масло \nCASTRO Manual \nEP 80W-90 1л',
      price: 345,
      code: '39207',
      discount: 10,
      rating: 3.7,
      reviews: 3,
      img: 'https://cdn.27.ua/499/7d/73/163187_1.jpeg',
    },
    {
      stock: false,
      description: 'Трансмиссионное масло \nCASTRO Manual \nEP 80W-90 1л',
      price: 238,
      code: '39109',
      discount: false,
      rating: 4.8,
      reviews: 4,
      img:
        'https://avtomaliar.ua/image/cache/catalog/data/maslo/mobil1_esp_formula_5w_30_4l-900x962-watermark_image_pr.jpg',
    },
    {
      stock: true,
      description: 'Трансмиссионное масло \nCASTRO Manual \nEP 80W-90 1л',
      price: 415,
      code: '41354',
      discount: 7,
      rating: 4.5,
      reviews: 8,
      img: 'https://images.ua.prom.st/1768683698_w640_h640_motornoe-maslo-mobil-1.jpg',
    },
    {
      stock: true,
      description: 'Трансмиссионное масло \nCASTRO Manual \nEP 80W-90 1л',
      price: 645,
      code: '35247',
      discount: 40,
      rating: 1.7,
      reviews: 4,
      img: 'https://cdn.27.ua/499/7d/73/163187_1.jpeg',
    },
    {
      stock: false,
      description: 'Трансмиссионное масло \nCASTRO Manual \nEP 80W-90 1л',
      price: 288,
      code: '35160',
      discount: false,
      rating: 5,
      reviews: 7,
      img: 'https://hotline.ua/img/tx/175/175737275.jpg',
    },
    {
      stock: true,
      description: 'Трансмиссионное масло \nCASTRO Manual \nEP 80W-90 1л',
      price: 515,
      code: '41777',
      discount: 16,
      rating: 2.5,
      reviews: 1,
      img: 'https://hotline.ua/img/tx/099/0995515.jpg',
    },
  ],
  feature: [
    {
      title: 'Класс вязкости:',
      value: '84',
    },
    {
      title: 'сСт при 40ºC:',
      value: '14',
    },
    {
      title: 'Зольность сульфатная, % мас., ASTM D 874:',
      value: '1,1',
    },
    {
      title: 'Содержание фосфора:',
      value: '0,0095',
    },
    {
      title: 'Класс вязкости:',
      value: '84',
    },
    {
      title: 'сСт при 40ºC:',
      value: '14',
    },
    {
      title: 'Зольность сульфатная, % мас., ASTM D 874:',
      value: '1,1',
    },
    {
      title: 'Содержание фосфора:',
      value: '0,0095',
    },
    {
      title: 'сСт при 40ºC:',
      value: '14',
    },
    {
      title: 'Зольность сульфатная, % мас., ASTM D 874:',
      value: '1,1',
    },
  ],
};
function Product() {
  return (
    <main>
      <div className="container">
        <Title title={data.title} code={data.code} />
        <Presentation {...data} />
        <SimilarProducts {...data} />
        <MetaInfo {...data} />
      </div>
    </main>
  );
}

export default Product;
