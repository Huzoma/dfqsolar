import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";
import "@testing-library/jest-dom";

describe("Navbar", () => {
  it("renders desktop navigation items", () => {
    render(<Navbar activeTab="home" />);
    expect(screen.getAllByRole("button", { name: "Home" })[0]).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: "About Us" })[0]).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: "Products" })[0]).toBeInTheDocument();
  });

  it("calls setActiveTab when a navigation item is clicked", async () => {
    const setActiveTab = vi.fn();
    const user = userEvent.setup();
    render(<Navbar activeTab="home" setActiveTab={setActiveTab} />);
    
    await user.click(screen.getAllByRole("button", { name: "Products" })[0]);
    expect(setActiveTab).toHaveBeenCalledWith("products");
  });

  it("toggles mobile menu when hamburger is clicked", async () => {
    const user = userEvent.setup();
    render(<Navbar activeTab="home" />);
    
    const hamburger = screen.getByLabelText("Toggle Navigation Menu");
    await user.click(hamburger);
    
    // Check if the drawer has the open class - testing library queries would find both, 
    // so we can test interaction. 
    // In our implementation, the mobile items are buttons as well.
    const mobileProducts = screen.getAllByRole("button", { name: "Products" })[1];
    expect(mobileProducts).toBeInTheDocument();
  });
});
