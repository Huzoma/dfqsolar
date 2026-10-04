import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "./Footer";
import "@testing-library/jest-dom";

describe("Footer", () => {
  it("renders footer sections", () => {
    render(<Footer />);
    expect(screen.getByText(/DFQ Solar World is a global leader/i)).toBeInTheDocument();
    expect(screen.getByText("Quick Links")).toBeInTheDocument();
    expect(screen.getAllByText("Contact Us")[0]).toBeInTheDocument();
  });

  it("handles newsletter subscription", async () => {
    const user = userEvent.setup();
    render(<Footer />);
    
    const emailInput = screen.getByPlaceholderText("Enter your email");
    await user.type(emailInput, "test@example.com");
    
    const submitBtn = screen.getByRole("button", { name: "Subscribe" });
    await user.click(submitBtn);
    
    expect(screen.getByText("Subscribed successfully!")).toBeInTheDocument();
  });

  it("calls setActiveTab when a quick link is clicked", async () => {
    const setActiveTab = vi.fn();
    const user = userEvent.setup();
    render(<Footer setActiveTab={setActiveTab} />);
    
    // There are multiple "Products" buttons, we pick the first one in quick links
    const productsLinks = screen.getAllByRole("button", { name: "Products" });
    await user.click(productsLinks[0]);
    
    expect(setActiveTab).toHaveBeenCalledWith("products");
  });
});
