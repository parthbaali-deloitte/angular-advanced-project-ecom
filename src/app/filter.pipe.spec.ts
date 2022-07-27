import { FilterPipe } from './filter.pipe';
describe('FilterPipe', () => {
  let filter: FilterPipe
  beforeEach(() => {
    filter = new FilterPipe();
  });

  it('create an instance', () => {
    expect(filter).toBeTruthy();
  });

  it('search the product', () => {
    const products = [
      {
        "id": "1",
        "product_name": "Surf Excel",
        "product_weight": "1Kg",
        "product_price": "590",
        "owner": "pankil@gmail.com",
        "count": 2
      },
      {
        "id": "2",
        "product_name": "Nivea",
        "product_weight": "200ml",
        "product_price": "180",
        "owner": "pankil@gmail.com",
        "count": 1
      }
    ]
    const testOutput = [
      {
        "id": "1",
        "product_name": "Surf Excel",
        "product_weight": "1Kg",
        "product_price": "590",
        "owner": "pankil@gmail.com",
        "count": 2
      }
    ]

    const result = filter.transform(products, "Surf", "product_name")
    expect(result).toEqual(testOutput)
  });

});