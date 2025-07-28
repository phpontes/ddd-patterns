import CustomerFactory from "./customer.factory";
import Address from "../value-object/address";

describe("Customer Factory Unit Tests", () => {
  it("should create a customer", () => {
    let customer = CustomerFactory.create("Mução");

    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("Mução");
    expect(customer.Address).toBeUndefined();
  });

  it("should create a customer with an address", () => {
    const address = new Address(
      "Francisco Ferreira",
      1,
      "59470-000",
      "Cachoeira do Sapo"
    );

    let customer = CustomerFactory.createWithAddress("Mução", address);

    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("Mução");
    expect(customer.Address).toBe(address);
  });
});
