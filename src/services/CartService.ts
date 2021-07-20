import { sleep } from "../dummy";
import { CartType } from "../type";

export default class CartService {
  public static async addCart(product: CartType): Promise<CartType> {
    await sleep(1000);
    return product;
  }
}
