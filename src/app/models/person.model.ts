import { Product } from "./product.model";

export class Person {
    id!: String;
    name!: String;
    role!: String;
    password!: String;
    wishlist!: Product[];
    phone!: string;
    cart!: Product[]
}