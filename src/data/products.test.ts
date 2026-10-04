import { describe, it, expect } from "vitest";
import { getProductById, products } from "./products";

describe("products", () => {
  it("should return the product if a valid ID is provided (AC-2)", () => {
    const product = getProductById("solar-panels");
    expect(product).toBeDefined();
    expect(product?.name).toBe("DFQ Solar Panels");
  });

  it("should return undefined if an invalid ID is provided", () => {
    const product = getProductById("invalid-id");
    expect(product).toBeUndefined();
  });

  it("should contain valid product entries in the catalog with required fields", () => {
    expect(products.length).toBeGreaterThan(0);
    products.forEach((product) => {
      expect(product.id).toBeTruthy();
      expect(product.name).toBeTruthy();
      expect(product.primaryImage).toBeTruthy();
      expect(product.specs.length).toBeGreaterThan(0);
    });
  });
});
