"use client";

import React, { useState, useEffect } from "react";
import { Home, Building2, Factory, Sun, ClipboardList, Zap, BatteryCharging } from "lucide-react";
import styles from "./Calculator.module.css";

interface CalculatorProps {
  onQuoteRequest: (summary: string) => void;
}

export default function Calculator({ onQuoteRequest }: CalculatorProps) {
  // Input states
  const [propertyType, setPropertyType] = useState("residential-medium");
  const [monthlyBill, setMonthlyBill] = useState(50000); // Naira
  const [backupHours, setBackupHours] = useState(8);

  // Calculation results
  const [systemSize, setSystemSize] = useState(5); // kW
  const [numPanels, setNumPanels] = useState(10);
  const [batterySize, setBatterySize] = useState(10); // kWh (Felicity Solar)
  const [inverterSize, setInverterSize] = useState(5); // kVA
  const [estCostMin, setEstCostMin] = useState(2500000); // Naira
  const [estCostMax, setEstCostMax] = useState(3200000); // Naira
  const [annualSavings, setAnnualSavings] = useState(480000); // Naira
  const [co2Saved, setCo2Saved] = useState(3.8); // Tons/year

  useEffect(() => {
    let loadKW = 0;

    switch (propertyType) {
      case "residential-small":
        loadKW = monthlyBill / 12000;
        break;
      case "residential-medium":
        loadKW = monthlyBill / 10000;
        break;
      case "commercial":
        loadKW = monthlyBill / 8000;
        break;
      case "industrial":
        loadKW = monthlyBill / 7000;
        break;
      default:
        loadKW = 5;
    }

    loadKW = Math.max(1.5, Math.min(250, loadKW));

    // Calculate solar sizing (kW)
    const solarKW = Math.round(loadKW * 10) / 10;
    // Assume 550W panels
    const panelsCount = Math.ceil((solarKW * 1000) / 550);

    // Calculate inverter size (kVA)
    let recommendedInverter = 3.5;
    if (solarKW <= 3.5) recommendedInverter = 3.5;
    else if (solarKW <= 6) recommendedInverter = 5.0;
    else if (solarKW <= 12) recommendedInverter = 10.0;
    else if (solarKW <= 24) recommendedInverter = 20.0;
    else if (solarKW <= 60) recommendedInverter = 50.0;
    else recommendedInverter = 100.0;

    // Calculate battery sizing (kWh)
    const backupLoad = Math.max(1, loadKW * 0.4);
    const storageKWh = Math.round(backupLoad * backupHours * 10) / 10;

    // Calculate cost in Naira
    const panelsCost = panelsCount * 280000;
    const inverterCost = recommendedInverter * 250000 + 400000;
    const batteryCost = (storageKWh / 5) * 1400000;
    const installationCost = (panelsCost + inverterCost + batteryCost) * 0.12;

    const totalCost = panelsCost + inverterCost + batteryCost + installationCost;
    const minCost = Math.round((totalCost * 0.9) / 50000) * 50000;
    const maxCost = Math.round((totalCost * 1.1) / 50000) * 50000;

    // Calculate savings and CO2
    const estimatedKwhPerYear = solarKW * 4.5 * 365;
    const savings = Math.round(estimatedKwhPerYear * 160);
    const co2 = Math.round((estimatedKwhPerYear * 0.0006) * 10) / 10;

    setSystemSize(solarKW);
    setNumPanels(panelsCount);
    setBatterySize(storageKWh);
    setInverterSize(recommendedInverter);
    setEstCostMin(minCost);
    setEstCostMax(maxCost);
    setAnnualSavings(savings);
    setCo2Saved(co2);
  }, [propertyType, monthlyBill, backupHours]);

  const handleRequestQuote = () => {
    const summary = `${systemSize}kW System (${numPanels}x 550W Panels), ${inverterSize}kVA Inverter, ${batterySize}kWh Felicity Solar Storage for ${propertyType.toUpperCase()} property. Est. Cost: ₦${estCostMin.toLocaleString()} - ₦${estCostMax.toLocaleString()}`;
    onQuoteRequest(summary);
  };

  return (
    <div className={styles.calculatorCard}>
      <div className={styles.grid}>
        {/* Inputs */}
        <div className={styles.inputsCol}>
          <h3 className={styles.colTitle}>1. System Requirements</h3>

          {/* Property Type */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>Property Type</label>
            <div className={styles.radioGrid}>
              <button
                type="button"
                className={`${styles.radioBtn} ${propertyType === "residential-small" ? styles.radioActive : ""}`}
                onClick={() => setPropertyType("residential-small")}
              >
                <Home size={16} className={styles.radioIcon} />
                <span>Small Home</span>
              </button>
              <button
                type="button"
                className={`${styles.radioBtn} ${propertyType === "residential-medium" ? styles.radioActive : ""}`}
                onClick={() => setPropertyType("residential-medium")}
              >
                <Home size={16} className={styles.radioIcon} />
                <span>Large Home</span>
              </button>
              <button
                type="button"
                className={`${styles.radioBtn} ${propertyType === "commercial" ? styles.radioActive : ""}`}
                onClick={() => setPropertyType("commercial")}
              >
                <Building2 size={16} className={styles.radioIcon} />
                <span>Commercial Office</span>
              </button>
              <button
                type="button"
                className={`${styles.radioBtn} ${propertyType === "industrial" ? styles.radioActive : ""}`}
                onClick={() => setPropertyType("industrial")}
              >
                <Factory size={16} className={styles.radioIcon} />
                <span>Factory / Industrial</span>
              </button>
            </div>
          </div>

          {/* Monthly Bill */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label className={styles.label}>Avg. Monthly Power Bill</label>
              <span className={styles.valDisplay}>₦ {monthlyBill.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="15000"
              max="600000"
              step="5000"
              className={styles.rangeInput}
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(Number(e.target.value))}
            />
            <div className={styles.rangeLabels}>
              <span>₦ 15K</span>
              <span>₦ 300K</span>
              <span>₦ 600K+</span>
            </div>
          </div>

          {/* Backup Hours */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label className={styles.label}>Required Battery Backup</label>
              <span className={styles.valDisplay}>{backupHours} Hours</span>
            </div>
            <input
              type="range"
              min="2"
              max="24"
              step="2"
              className={styles.rangeInput}
              value={backupHours}
              onChange={(e) => setBackupHours(Number(e.target.value))}
            />
            <div className={styles.rangeLabels}>
              <span>2 hrs (Basic)</span>
              <span>12 hrs (Overnight)</span>
              <span>24 hrs (Full Off-Grid)</span>
            </div>
          </div>
        </div>

        {/* Outputs */}
        <div className={styles.outputsCol}>
          <h3 className={`${styles.colTitle} ${styles.whiteText}`}>2. Recommended Sizing</h3>

          <div className={styles.resultsGrid}>
            <div className={styles.resultCard}>
              <div className={styles.resIconBox}>
                <Sun size={20} className={styles.resIcon} />
              </div>
              <div className={styles.resData}>
                <span className={styles.resVal}>{systemSize} kW</span>
                <span className={styles.resLabel}>Solar Array Size</span>
              </div>
            </div>

            <div className={styles.resultCard}>
              <div className={styles.resIconBox}>
                <ClipboardList size={20} className={styles.resIcon} />
              </div>
              <div className={styles.resData}>
                <span className={styles.resVal}>{numPanels} Panels</span>
                <span className={styles.resLabel}>550W Tier-1 Panels</span>
              </div>
            </div>

            <div className={styles.resultCard}>
              <div className={styles.resIconBox}>
                <Zap size={20} className={styles.resIcon} />
              </div>
              <div className={styles.resData}>
                <span className={styles.resVal}>{inverterSize} kVA</span>
                <span className={styles.resLabel}>Smart Hybrid Inverter</span>
              </div>
            </div>

            <div className={styles.resultCard}>
              <div className={styles.resIconBox}>
                <BatteryCharging size={20} className={styles.resIcon} />
              </div>
              <div className={styles.resData}>
                <span className={styles.resVal}>{batterySize} kWh</span>
                <span className={styles.resLabel}>Felicity Lithium Storage</span>
              </div>
            </div>
          </div>

          {/* Cost & Savings Summary */}
          <div className={styles.pricingSummaryBox}>
            <div className={styles.costRow}>
              <span className={styles.costLabel}>Est. System Cost (installed):</span>
              <span className={styles.costVal}>
                ₦ {estCostMin.toLocaleString()} - ₦ {estCostMax.toLocaleString()}
              </span>
            </div>
            <p className={styles.pricingNote}>
              *Prices include Tier-1 Felicity batteries, cabling, earthing, installation, and 12-month free maintenance.
            </p>

            <div className={styles.savingsBox}>
              <div className={styles.savingsItem}>
                <span className={styles.savingsTitle}>Annual Savings</span>
                <span className={styles.savingsVal}>~ ₦ {annualSavings.toLocaleString()}</span>
              </div>
              <div className={styles.savingsItem}>
                <span className={styles.savingsTitle}>CO₂ Emissions Saved</span>
                <span className={styles.savingsVal}>{co2Saved} Tons / year</span>
              </div>
            </div>

            <button onClick={handleRequestQuote} className={styles.quoteBtn}>
              Request Formal Quote & Sizing Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
