import ProductFactory from "./product.factory";

describe("Product Factory Unit Tests", () => {
  it("should create a product type a", () => {
    const product = ProductFactory.create("a", "Product A", 15);

    expect(product.id).toBeDefined();
    expect(product.name).toBe("Product A");
    expect(product.price).toBe(15);
    expect(product.constructor.name).toBe("Product");
  });

  it("should create a product type b", () => {
    const product = ProductFactory.create("b", "Product B", 15);

    expect(product.id).toBeDefined();
    expect(product.name).toBe("Product B");
    expect(product.price).toBe(30);
    expect(product.constructor.name).toBe("ProductB");
  });

  it("should throw an error when product type is not supported", () => {
    expect(() => ProductFactory.create("c", "Product C", 1)).toThrow(
      "Product type not supported"
    );
  });
});
