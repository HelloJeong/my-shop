import faker from "faker";
import { ProductType } from "./type";

export function sleep(ms: number) {
  return new Promise((resolve: any) => setTimeout(() => resolve(), ms));
}

export default function getDummy(count: number): ProductType[] {
  const obj: ProductType[] = [];
  for (let i = 0; i < count; i++) {
    obj.push({
      id: i,
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs() + faker.lorem.paragraphs(),
      price: +faker.commerce.price() * 100,
      md: faker.datatype.boolean(),
      // img: "https://via.placeholder.com/800.jpg",
      img: faker.random.image(),
    });
  }
  return obj;
}
