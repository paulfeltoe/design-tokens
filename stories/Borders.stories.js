function createBorders() {
  const container = document.createElement("div");
  container.style.cssText = "padding: 32px; font-family: var(--font-family-sans); max-width: 900px;";

  container.innerHTML = `<h1 style="font-size: var(--font-size-4xl); font-weight: var(--font-weight-bold); margin-bottom: 32px;">Borders</h1>`;

  // Border widths
  const widthSection = document.createElement("div");
  widthSection.style.marginBottom = "48px";
  widthSection.innerHTML = `<h2 style="font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: 16px; color: var(--color-text-secondary);">Border Widths</h2>`;

  const widths = [
    ["--border-width-none", "None", "0px"],
    ["--border-width-thin", "Thin", "1px"],
    ["--border-width-medium", "Medium", "2px"],
    ["--border-width-thick", "Thick", "4px"],
  ];

  const widthGrid = document.createElement("div");
  widthGrid.style.cssText = "display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;";

  for (const [varName, label, value] of widths) {
    const card = document.createElement("div");
    card.style.cssText = `
      padding: 24px;
      border: var(${varName}) solid var(--color-primary-500);
      border-radius: var(--border-radius-base);
      text-align: center;
    `;
    card.innerHTML = `
      <div style="font-weight: var(--font-weight-semibold); margin-bottom: 4px;">${label}</div>
      <div style="font-size: var(--font-size-xs); color: var(--color-text-tertiary); font-family: var(--font-family-mono);">${value}</div>
    `;
    widthGrid.appendChild(card);
  }
  widthSection.appendChild(widthGrid);
  container.appendChild(widthSection);

  // Border radii
  const radiusSection = document.createElement("div");
  radiusSection.innerHTML = `<h2 style="font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: 16px; color: var(--color-text-secondary);">Border Radii</h2>`;

  const radii = [
    ["--border-radius-none", "None", "0px"],
    ["--border-radius-sm", "Small", "4px"],
    ["--border-radius-base", "Base", "8px"],
    ["--border-radius-md", "Medium", "12px"],
    ["--border-radius-lg", "Large", "16px"],
    ["--border-radius-xl", "XL", "24px"],
    ["--border-radius-full", "Full", "9999px"],
  ];

  const radiusGrid = document.createElement("div");
  radiusGrid.style.cssText = "display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 16px;";

  for (const [varName, label, value] of radii) {
    const card = document.createElement("div");
    card.style.cssText = `text-align: center;`;
    const preview = document.createElement("div");
    preview.style.cssText = `
      width: 80px;
      height: 80px;
      background: var(--color-primary-100);
      border: 2px solid var(--color-primary-500);
      border-radius: var(${varName});
      margin: 0 auto 8px;
    `;
    card.appendChild(preview);
    card.innerHTML += `
      <div style="font-weight: var(--font-weight-semibold); font-size: var(--font-size-sm);">${label}</div>
      <div style="font-size: var(--font-size-xs); color: var(--color-text-tertiary); font-family: var(--font-family-mono);">${value}</div>
    `;
    radiusGrid.appendChild(card);
  }
  radiusSection.appendChild(radiusGrid);
  container.appendChild(radiusSection);

  return container;
}

export default {
  title: "Tokens/Borders",
};

export const Overview = {
  render: () => createBorders(),
};
