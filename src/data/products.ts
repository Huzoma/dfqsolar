export type Product = {
  id: string;
  name: string;
  description: string;
  primaryImage: string;
  specs: { key: string; value: string; benefit: string }[];
};

export const products: Product[] = [
  {
    id: "solar-panels",
    name: "DFQ Solar Panels",
    description: "High-efficiency N-Type Bifacial Monocrystalline modules (550W+). Delivers exceptional output even in low-light and high-temperature environments.",
    primaryImage: "/assets/product-panel.png",
    specs: [
      { key: "Efficiency", value: "Up to 22.5%", benefit: "Converts more sunlight into power, maximizing the energy you get from your roof space." },
      { key: "Warranty", value: "25 Years Performance", benefit: "Guaranteed to keep producing reliable energy for decades without failure." },
      { key: "Frame", value: "Anodized Aluminum Alloy", benefit: "Built tough to withstand harsh weather, rust, and heavy winds." },
    ],
  },
  {
    id: "lithium-batteries",
    name: "Felicity Solar Lithium Battery",
    description: "Wall-mounted Lithium Iron Phosphate (LiFePO4) storage systems (5kWh & 10kWh packs). Built for continuous cycle durability in demanding climates.",
    primaryImage: "/assets/product-battery.png",
    specs: [
      { key: "Lifespan", value: "> 6,000 cycles", benefit: "Lasts over 15 years with daily charging and discharging, saving you replacement costs." },
      { key: "Warranty", value: "10 Years Strategic coverage", benefit: "Long-term peace of mind with robust manufacturer support and guarantees." },
      { key: "Safety", value: "Smart BMS Included", benefit: "Automatically protects your home against power surges, overheating, and battery overcharging." },
    ],
  },
  {
    id: "hybrid-inverters",
    name: "DFQ Hybrid Inverters",
    description: "Smart multi-mode hybrid inverters (3.5kVA to 50kVA). Coordinates power between solar arrays, lithium battery storage, utilities, and backup generators.",
    primaryImage: "/assets/product-inverter.png",
    specs: [
      { key: "Switchover", value: "< 10ms seamless switching", benefit: "Switches to battery power instantly during a blackout—your TV or AC won't even blink." },
      { key: "Phase", value: "Single and 3-Phase outputs", benefit: "Fully compatible with both standard homes and heavy-duty commercial equipment." },
      { key: "Control", value: "Built-in MPPT chargers", benefit: "Intelligently extracts the maximum possible power from your solar panels throughout the day." },
    ],
  },
  {
    id: "mppt-controllers",
    name: "MPPT Controllers",
    description: "Advanced MPPT controllers for maximum efficiency in solar energy conversion.",
    primaryImage: "/assets/product-mppt.png",
    specs: [
      { key: "Efficiency", value: "Up to 99%", benefit: "Ensures almost zero energy is wasted as it travels from your panels to your batteries." },
      { key: "Compatibility", value: "12V/24V/48V Auto work", benefit: "Automatically adjusts to work perfectly with any standard battery system size." },
      { key: "Protection", value: "Smart limits", benefit: "Extends the life of your batteries by keeping them safely within limits to prevent damage." },
    ],
  },
  {
    id: "solar-street-lights",
    name: "Smart Solar Street Lights",
    description: "All-in-one solar street and compound lighting solutions. Features high-capacity lithium buffers, daylight sensors, and motion dimmers.",
    primaryImage: "/assets/product-streetlight.jpg",
    specs: [
      { key: "Brightness", value: "8,000 - 15,000 lm", benefit: "Powerful enough to brightly illuminate large compounds, streets, or parking lots." },
      { key: "Battery", value: "High-grade LiFePO4 pack", benefit: "Provides reliable all-night lighting, even after consecutive cloudy days." },
      { key: "Sensing", value: "Auto night-switch + PIR motion", benefit: "Turns on automatically at dusk and brightens when it detects movement to save energy." },
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
