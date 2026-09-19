"use client";

import React, { useState } from "react";
import { Home, Building2, Factory, Sun, ClipboardList, Zap, BatteryCharging, Wrench, CheckSquare, Square } from "lucide-react";
import styles from "./Calculator.module.css";

interface CalculatorProps {
  onQuoteRequest: (summary: string) => void;
}

export default function Calculator({ onQuoteRequest }: CalculatorProps) {
  // Input states
  const [propertyType, setPropertyType] = useState("residential-medium");
  const [monthlyBill, setMonthlyBill] = useState(50000); // Naira
  const [backupHours, setBackupHours] = useState(8);
  const [includeMaintenance, setIncludeMaintenance] = useState(false);

  // Helper for Maintenance pricing based on property type
  const getMaintenancePrice = (type: string) => {
    switch (type) {
      case "residential-small":
        return 150000;
      case "residential-medium":
        return 250000;
      case "commercial":
        return 600000;
      case "industrial":
        return 1500000;
      default:
        return 250000;
    }
  };

  // Calculation results
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
  const systemSize = Math.round(loadKW * 10) / 10;
  // Assume 550W panels
  const numPanels = Math.ceil((systemSize * 1000) / 550);

  // Calculate inverter size (kVA)
  let inverterSize = 3.5;
  if (systemSize <= 3.5) inverterSize = 3.5;
  else if (systemSize <= 6) inverterSize = 5.0;
  else if (systemSize <= 12) inverterSize = 10.0;
  else if (systemSize <= 24) inverterSize = 20.0;
  else if (systemSize <= 60) inverterSize = 50.0;
  else inverterSize = 100.0;

  // Calculate battery sizing (kWh)
  const backupLoad = Math.max(1, loadKW * 0.4);
  const batterySize = Math.round(backupLoad * backupHours * 10) / 10;

  // Calculate cost in Naira
  const panelsCost = numPanels * 280000;
  const inverterCost = inverterSize * 250000 + 400000;
  const batteryCost = (batterySize / 5) * 1400000;
  const installationCost = (panelsCost + inverterCost + batteryCost) * 0.12;

  const maintenanceFee = includeMaintenance ? getMaintenancePrice(propertyType) : 0;
  const totalCost = panelsCost + inverterCost + batteryCost + installationCost + maintenanceFee;
  const estCostMin = Math.round((totalCost * 0.9) / 50000) * 50000;
  const estCostMax = Math.round((totalCost * 1.1) / 50000) * 50000;

  // Calculate savings and CO2
  const estimatedKwhPerYear = systemSize * 4.5 * 365;
  const annualSavings = Math.round(estimatedKwhPerYear * 160);
  const co2Saved = Math.round((estimatedKwhPerYear * 0.0006) * 10) / 10;

  const handleRequestQuote = () => {
    const maintInfo = includeMaintenance 
      ? `, INCLUDES Annual Solar Maintenance Plan (+₦${getMaintenancePrice(propertyType).toLocaleString()}/yr)`
      : "";
    const summary = `${systemSize}kW System (${numPanels}x 550W Panels), ${inverterSize}kVA Inverter, ${batterySize}kWh Felicity Solar Storage for ${propertyType.toUpperCase()} property${maintInfo}. Est. Total Cost: ₦${estCostMin.toLocaleString()} - ₦${estCostMax.toLocaleString()}`;
    onQuoteRequest(summary);
  };

  return (
    <div className={styles.calculatorCard}>
      <div className={styles.grid}>
        {/* Inputs */}
        <div className={styles.inputsCol}>
          <h3 className={styles.colTitle}>Your requirements</h3>

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

          {/* Solar Maintenance Toggle */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>Solar Maintenance & Servicing Plan</label>
            <div
              className={`${styles.maintOptionCard} ${includeMaintenance ? styles.maintActive : ""}`}
              onClick={() => setIncludeMaintenance(!includeMaintenance)}
            >
              <div className={styles.maintCheckCol}>
                {includeMaintenance ? (
                  <CheckSquare size={22} className={styles.maintCheckedIcon} />
                ) : (
                  <Square size={22} className={styles.maintUncheckedIcon} />
                )}
              </div>
              <div className={styles.maintInfoCol}>
                <div className={styles.maintHeaderRow}>
                  <span className={styles.maintTitle}>Include Annual Solar Maintenance</span>
                  <span className={styles.maintPriceBadge}>
                    +₦ {getMaintenancePrice(propertyType).toLocaleString()} / yr
                  </span>
                </div>
                <p className={styles.maintDescText}>
                  Covers 4x annual panel washing, inverter health diagnostics, thermal audits & priority breakdown support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Outputs */}
        <div className={styles.outputsCol}>
          <h3 className={`${styles.colTitle} ${styles.whiteText}`}>Recommended sizing</h3>

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

            {includeMaintenance && (
              <div className={styles.maintIncludedBadge}>
                <Wrench size={14} /> Includes Annual Maintenance Plan (+₦{getMaintenancePrice(propertyType).toLocaleString()}/yr)
              </div>
            )}

            <p className={styles.pricingNote}>
              *Prices include Tier-1 Felicity batteries, cabling, earthing, installation, and initial system warranty.
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
