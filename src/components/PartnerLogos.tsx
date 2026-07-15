import React from "react";

interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
  color?: string; // If provided, override default colors (e.g. for footer white logo)
}

export function LongiLogo({ className, style, color }: LogoProps) {
  const fill = color || "#E31B23";
  return (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ width: "100%", height: "100%", ...style }}>
      <text x="0" y="28" fontFamily="var(--font-headings)" fontWeight="900" fontSize="26" fill={fill} letterSpacing="0.5">LONGi</text>
      <rect x="0" y="34" width="85" height="3" fill={fill} />
    </svg>
  );
}

export function JinkoSolarLogo({ className, style, color }: LogoProps) {
  const greenFill = color || "#78B13F";
  const orangeFill = color || "#F7941D";
  const gridStroke = color || "#FFFFFF";
  return (
    <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ width: "100%", height: "100%", ...style }}>
      <text x="0" y="28" fontFamily="var(--font-headings)" fontWeight="900" fontSize="22" fill={greenFill}>Jinko</text>
      <text x="64" y="28" fontFamily="var(--font-headings)" fontWeight="900" fontSize="22" fill={orangeFill}>Solar</text>
      <rect x="134" y="10" width="18" height="18" rx="2" fill={greenFill} />
      <path d="M138 10 V28 M142 10 V28 M146 10 V28 M134 14 H152 M134 18 H152 M134 22 H152" stroke={gridStroke} strokeWidth="0.5" />
    </svg>
  );
}

export function HuaweiLogo({ className, style, color }: LogoProps) {
  const fill = color || "#ED1C24";
  const textFill = color || "#102A43";
  return (
    <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ width: "100%", height: "100%", ...style }}>
      {/* Huawei Flower Graphic */}
      <g transform="translate(0, 4) scale(1.3)" fill={fill}>
        <path d="M3.67 6.14S1.82 7.91 1.72 9.78v.35c.08 1.51 1.22 2.4 1.22 2.4 1.83 1.79 6.26 4.04 7.3 4.55 0 0 .06.03.1-.01l.02-.04v-.04C7.52 10.8 3.67 6.14 3.67 6.14z" />
        <path d="M9.65 18.6c-.02-.08-.1-.08-.1-.08l-7.38.26c.8 1.43 2.15 2.53 3.56 2.2.96-.25 3.16-1.78 3.88-2.3.06-.05.04-.09.04-.09z" />
        <path d="M9.06 3.19A3.42 3.42 0 006.49 6.34v.41c.03.6.16 1.05 1.16 2.05C8.31 9.8 10.51 13.55 11.2 14.55c.05.05.1.03.1.03a.1.1 0 00.06-.1C12.36 13.5 13.5 9 13.5 9s-.02-.85-.8-1.56a5.55 5.55 0 00-3.64-4.25z" />
        <path d="M12.06 3.19c-.3.08-.8.36-.8.36s-4.36 8.54-5.5 10.54c0 0-.03.05.02.09l.06.02h.06c1.14 0 5.48-.03 5.48-.03s1.54-.5 2.34-2.2c.4-.7.42-1.46.42-1.46v-.06c0-1.07-.8-1.82-.8-1.82a5.55 5.55 0 00-1.28-5.44z" />
      </g>
      <text x="44" y="26" fontFamily="var(--font-headings)" fontWeight="800" fontSize="18" fill={textFill} letterSpacing="1">HUAWEI</text>
    </svg>
  );
}

export function SolisLogo({ className, style, color }: LogoProps) {
  const fill = color || "#F39200";
  const grayFill = color || "#627D98";
  return (
    <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ width: "100%", height: "100%", ...style }}>
      <circle cx="16" cy="20" r="10" stroke={fill} strokeWidth="3" />
      <circle cx="28" cy="20" r="10" stroke={fill} strokeWidth="3" />
      <text x="48" y="27" fontFamily="var(--font-headings)" fontWeight="700" fontSize="22" fill={fill}>solis</text>
    </svg>
  );
}

export function SungrowLogo({ className, style, color }: LogoProps) {
  const fill = color || "#E50012";
  return (
    <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ width: "100%", height: "100%", ...style }}>
      <text x="0" y="22" fontFamily="var(--font-headings)" fontWeight="800" fontSize="22" fill={fill} letterSpacing="-0.5">SUNGROW</text>
      <text x="2" y="34" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill={fill} letterSpacing="0.5">Clean power for all</text>
    </svg>
  );
}

export function TrinaSolarLogo({ className, style, color }: LogoProps) {
  const fill = color || "#0055A5";
  return (
    <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ width: "100%", height: "100%", ...style }}>
      <path d="M10 12 L20 20 L10 28 Z M20 12 L30 20 L20 28 Z M30 12 L40 20 L30 28 Z" fill={fill} />
      <text x="48" y="27" fontFamily="var(--font-headings)" fontWeight="800" fontSize="18" fill={fill}>Trinasolar</text>
    </svg>
  );
}

export function FelicitySolarLogo({ className, style, color }: LogoProps) {
  const orangeFill = color || "#F7941D";
  const darkFill = color || "#071C3D";
  return (
    <svg viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ width: "100%", height: "100%", ...style }}>
      <circle cx="20" cy="20" r="16" fill={orangeFill} />
      <text x="13" y="28" fontFamily="var(--font-headings)" fontWeight="900" fontSize="22" fill="#FFFFFF">F</text>
      <text x="44" y="27" fontFamily="var(--font-headings)" fontWeight="800" fontSize="20" fill={darkFill}>felicity</text>
      <text x="116" y="27" fontFamily="var(--font-headings)" fontWeight="800" fontSize="20" fill={orangeFill}>solar</text>
    </svg>
  );
}
