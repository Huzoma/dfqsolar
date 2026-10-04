"use client";

import React, { useState } from "react";
import { z } from "zod";
import styles from "./LeadCaptureForm.module.css";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please provide a valid phone number"),
  message: z.string().optional(),
});

type Props = {
  productName: string;
};

export default function LeadCaptureForm({ productName }: Props) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const WHATSAPP_NUMBER = "2348140679281";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    const lines = [
      "Product Inquiry from dfqsolarworld.com",
      "",
      `Product: ${productName}`,
      `Name: ${formData.fullName}`,
      `Phone: ${formData.phone}`,
      formData.message ? `Message: ${formData.message}` : "",
    ].filter(Boolean);

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: "", phone: "", message: "" });
    }, 6000);
  };

  return (
    <div className={styles.formCard}>
      <h3 className={styles.formTitle}>Request a Quote</h3>
      <p className={styles.formSubtitle}>Interested in the {productName}? Send us a message via WhatsApp and our team will get back to you.</p>

      {submitted ? (
        <div className={styles.successMessage}>
          Thank you! You will be redirected to WhatsApp to send your inquiry.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Full Name *</label>
            <input
              type="text"
              placeholder="Your Name"
              className={`${styles.input} ${errors.fullName ? styles.inputError : ""}`}
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) setErrors({ ...errors, fullName: "" });
              }}
            />
            {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>WhatsApp Phone *</label>
            <input
              type="text"
              placeholder="+234..."
              className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: "" });
              }}
            />
            {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Message (Optional)</label>
            <textarea
              placeholder="Any specific requirements?"
              className={styles.textarea}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
              }}
              rows={4}
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Send via WhatsApp
          </button>
        </form>
      )}
    </div>
  );
}
