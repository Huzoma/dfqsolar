import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LeadCaptureForm from "./LeadCaptureForm";
import "@testing-library/jest-dom";

describe("LeadCaptureForm", () => {
  beforeEach(() => {
    vi.stubGlobal("open", vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders correctly with product name (AC-3)", () => {
    render(<LeadCaptureForm productName="Test Product" />);
    expect(screen.getByText("Interested in the Test Product? Send us a message via WhatsApp and our team will get back to you.")).toBeInTheDocument();
  });

  it("shows validation errors when submitting empty form", async () => {
    const user = userEvent.setup({ delay: null });
    render(<LeadCaptureForm productName="Test Product" />);
    
    await user.click(screen.getByRole("button", { name: /Send via WhatsApp/i }));
    
    expect(screen.getByText("Name must be at least 2 characters")).toBeInTheDocument();
    expect(screen.getByText("Please provide a valid phone number")).toBeInTheDocument();
  });

  it("constructs WhatsApp URL and opens it on valid submission (AC-4)", async () => {
    const user = userEvent.setup({ delay: null });
    render(<LeadCaptureForm productName="Test Product" />);
    
    await user.type(screen.getByLabelText(/Full Name \*/i), "John Doe");
    await user.type(screen.getByLabelText(/WhatsApp Phone \*/i), "1234567890");
    await user.click(screen.getByRole("button", { name: /Send via WhatsApp/i }));
    
    expect(window.open).toHaveBeenCalledTimes(1);
    const urlCall = vi.mocked(window.open).mock.calls[0][0];
    expect(urlCall).toContain("https://wa.me/2348140679281");
    expect(urlCall).toContain("John%20Doe");
    expect(urlCall).toContain("1234567890");
    expect(urlCall).toContain("Test%20Product");
    
    expect(screen.getByText(/Thank you! You will be redirected/i)).toBeInTheDocument();
  });
});
