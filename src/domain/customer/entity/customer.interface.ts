import Address from "../value-object/address";

export default interface CustomerInterface {
  id: string;
  name: string;
  rewardPoints: number;
  Address: Address;

  changeName(name: string): void;
  changeAddress(address: Address): void;
  isActive(): boolean;
  activateCustomer(): void;
  deactivateCustomer(): void;
  addRewardPoints(points: number): void;
}
