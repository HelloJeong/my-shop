import { ProductType } from "../type";
import getDummy, { sleep } from "../dummy";

const getP = (): Promise<ProductType[]> => {
  return new Promise<ProductType[]>(async (resolve) => {
    await sleep(Math.floor(Math.random() * 1500));
    const dummy = getDummy(Math.floor(Math.random() * 10) + 5);
    resolve(dummy);
  });
};

export default class ProductService {
  public static async getProducts(): Promise<ProductType[]> {
    const products = await getP();

    return products;
  }
}
