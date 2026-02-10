function createTypography() {
  const container = document.createElement("div");
  container.style.cssText = "padding: 32px; font-family: var(--font-family-sans); max-width: 900px;";

  const headings = [
    ["H1", "--font-size-5xl", "--font-weight-bold", "--line-height-tight", "48px"],
    ["H2", "--font-size-4xl", "--font-weight-bold", "--line-height-tight", "36px"],
    ["H3", "--font-size-3xl", "--font-weight-semibold", "--line-height-snug", "30px"],
    ["H4", "--font-size-2xl", "--font-weight-semibold", "--line-height-snug", "24px"],
    ["H5", "--font-size-xl", "--font-weight-semibold", "--line-height-normal", "20px"],
    ["H6", "--font-size-lg", "--font-weight-semibold", "--line-height-normal", "18px"],
  ];

  container.innerHTML = `<h1 style="font-size: var(--font-size-4xl); font-weight: var(--font-weight-bold); margin-bottom: 32px;">Typography</h1>`;

  // Headings
  const headingSection = document.createElement("div");
  headingSection.innerHTML = `<h2 style="font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: 16px; color: var(--color-text-secondary);">Headings</h2>`;

  for (const [name, size, weight, lineHeight, px] of headings) {
    const row = document.createElement("div");
    row.style.cssText = "display: flex; align-items: baseline; gap: 16px; margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid var(--color-border-subtle);";
    row.innerHTML = `
      <span style="width: 40px; font-size: var(--font-size-sm); color: var(--color-text-tertiary); font-weight: var(--font-weight-medium);">${name}</span>
      <span style="flex: 1; font-size: var(${size}); font-weight: var(${weight}); line-height: var(${lineHeight});">The quick brown fox</span>
      <span style="font-size: var(--font-size-xs); color: var(--color-text-tertiary); font-family: var(--font-family-mono); white-space: nowrap;">${px}</span>
    `;
    headingSection.appendChild(row);
  }
  container.appendChild(headingSection);

  // Body text
  const bodySection = document.createElement("div");
  bodySection.style.marginTop = "32px";
  bodySection.innerHTML = `
    <h2 style="font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: 16px; color: var(--color-text-secondary);">Body Text</h2>
    <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid var(--color-border-subtle);">
      <div style="font-size: var(--font-size-xs); color: var(--color-text-tertiary); margin-bottom: 4px; font-family: var(--font-family-mono);">Body Large — 18px</div>
      <p style="font-size: var(--font-size-lg); line-height: var(--line-height-relaxed);">Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes.</p>
    </div>
    <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid var(--color-border-subtle);">
      <div style="font-size: var(--font-size-xs); color: var(--color-text-tertiary); margin-bottom: 4px; font-family: var(--font-family-mono);">Body Base — 16px</div>
      <p style="font-size: var(--font-size-base); line-height: var(--line-height-normal);">Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes.</p>
    </div>
    <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid var(--color-border-subtle);">
      <div style="font-size: var(--font-size-xs); color: var(--color-text-tertiary); margin-bottom: 4px; font-family: var(--font-family-mono);">Body Small — 14px</div>
      <p style="font-size: var(--font-size-sm); line-height: var(--line-height-normal);">Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes.</p>
    </div>
  `;
  container.appendChild(bodySection);

  // Font families
  const familySection = document.createElement("div");
  familySection.style.marginTop = "32px";
  familySection.innerHTML = `
    <h2 style="font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: 16px; color: var(--color-text-secondary);">Font Families</h2>
    <div style="margin-bottom: 16px; padding: 16px; border: 1px solid var(--color-border-default); border-radius: var(--border-radius-base);">
      <div style="font-size: var(--font-size-xs); color: var(--color-text-tertiary); margin-bottom: 4px; font-family: var(--font-family-mono);">--font-family-sans (Inter)</div>
      <p style="font-family: var(--font-family-sans); font-size: var(--font-size-2xl);">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789</p>
    </div>
    <div style="margin-bottom: 16px; padding: 16px; border: 1px solid var(--color-border-default); border-radius: var(--border-radius-base);">
      <div style="font-size: var(--font-size-xs); color: var(--color-text-tertiary); margin-bottom: 4px; font-family: var(--font-family-mono);">--font-family-serif (Georgia)</div>
      <p style="font-family: var(--font-family-serif); font-size: var(--font-size-2xl);">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789</p>
    </div>
    <div style="margin-bottom: 16px; padding: 16px; border: 1px solid var(--color-border-default); border-radius: var(--border-radius-base);">
      <div style="font-size: var(--font-size-xs); color: var(--color-text-tertiary); margin-bottom: 4px; font-family: var(--font-family-mono);">--font-family-mono (Fira Code)</div>
      <p style="font-family: var(--font-family-mono); font-size: var(--font-size-2xl);">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789</p>
    </div>
  `;
  container.appendChild(familySection);

  // Font weights
  const weightSection = document.createElement("div");
  weightSection.style.marginTop = "32px";
  weightSection.innerHTML = `<h2 style="font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: 16px; color: var(--color-text-secondary);">Font Weights</h2>`;

  const weights = [
    ["Thin", 100], ["Extra Light", 200], ["Light", 300], ["Normal", 400],
    ["Medium", 500], ["Semibold", 600], ["Bold", 700], ["Extra Bold", 800], ["Black", 900],
  ];

  for (const [name, value] of weights) {
    const row = document.createElement("div");
    row.style.cssText = "display: flex; align-items: baseline; gap: 16px; margin-bottom: 8px;";
    row.innerHTML = `
      <span style="width: 100px; font-size: var(--font-size-sm); color: var(--color-text-tertiary);">${name} (${value})</span>
      <span style="font-size: var(--font-size-2xl); font-weight: ${value};">The quick brown fox</span>
    `;
    weightSection.appendChild(row);
  }
  container.appendChild(weightSection);

  return container;
}

export default {
  title: "Tokens/Typography",
};

export const Overview = {
  render: () => createTypography(),
};
