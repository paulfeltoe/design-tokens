const colorScales = {
  Gray: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  Primary: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  Success: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  Warning: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  Error: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  Info: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
};

function createColorGrid() {
  const container = document.createElement("div");
  container.style.cssText = "padding: 32px; font-family: var(--font-family-sans);";

  container.innerHTML = `<h1 style="font-size: var(--font-size-4xl); font-weight: var(--font-weight-bold); margin-bottom: 32px;">Color Palette</h1>`;

  for (const [name, steps] of Object.entries(colorScales)) {
    const section = document.createElement("div");
    section.style.marginBottom = "32px";
    section.innerHTML = `<h2 style="font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: 12px;">${name}</h2>`;

    const grid = document.createElement("div");
    grid.style.cssText = "display: grid; grid-template-columns: repeat(11, 1fr); gap: 8px;";

    for (const step of steps) {
      const varName = `--color-${name.toLowerCase()}-${step}`;
      const swatch = document.createElement("div");
      swatch.style.cssText = `
        background: var(${varName});
        border-radius: var(--border-radius-base);
        aspect-ratio: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        padding: 8px 4px;
        border: 1px solid var(--color-border-subtle);
      `;
      const label = document.createElement("span");
      label.textContent = step;
      label.style.cssText = `
        font-size: 11px;
        font-weight: 500;
        color: ${step >= 500 ? "white" : "var(--color-text-primary)"};
        text-align: center;
      `;
      swatch.appendChild(label);
      grid.appendChild(swatch);
    }
    section.appendChild(grid);
    container.appendChild(section);
  }
  return container;
}

const semanticGroups = {
  "Text Colors": [
    ["--color-text-primary", "Primary"],
    ["--color-text-secondary", "Secondary"],
    ["--color-text-tertiary", "Tertiary"],
    ["--color-text-disabled", "Disabled"],
    ["--color-text-inverse", "Inverse"],
    ["--color-text-link", "Link"],
    ["--color-text-link-hover", "Link Hover"],
    ["--color-text-error", "Error"],
    ["--color-text-success", "Success"],
    ["--color-text-warning", "Warning"],
  ],
  "Background Colors": [
    ["--color-bg-primary", "Primary"],
    ["--color-bg-secondary", "Secondary"],
    ["--color-bg-tertiary", "Tertiary"],
    ["--color-bg-inverse", "Inverse"],
    ["--color-bg-overlay", "Overlay"],
  ],
  "Border Colors": [
    ["--color-border-default", "Default"],
    ["--color-border-strong", "Strong"],
    ["--color-border-subtle", "Subtle"],
    ["--color-border-disabled", "Disabled"],
    ["--color-border-focus", "Focus"],
    ["--color-border-error", "Error"],
  ],
  "Interactive Colors": [
    ["--color-interactive-primary", "Primary"],
    ["--color-interactive-primary-hover", "Primary Hover"],
    ["--color-interactive-primary-active", "Primary Active"],
    ["--color-interactive-primary-disabled", "Primary Disabled"],
    ["--color-interactive-secondary", "Secondary"],
    ["--color-interactive-secondary-hover", "Secondary Hover"],
    ["--color-interactive-secondary-active", "Secondary Active"],
  ],
};

function createSemanticColors() {
  const container = document.createElement("div");
  container.style.cssText = "padding: 32px; font-family: var(--font-family-sans);";

  container.innerHTML = `<h1 style="font-size: var(--font-size-4xl); font-weight: var(--font-weight-bold); margin-bottom: 32px;">Semantic Colors</h1>`;

  for (const [group, tokens] of Object.entries(semanticGroups)) {
    const section = document.createElement("div");
    section.style.marginBottom = "32px";
    section.innerHTML = `<h2 style="font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: 12px;">${group}</h2>`;

    const grid = document.createElement("div");
    grid.style.cssText = "display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px;";

    for (const [varName, label] of tokens) {
      const isText = group === "Text Colors";
      const card = document.createElement("div");
      card.style.cssText = `
        border: 1px solid var(--color-border-default);
        border-radius: var(--border-radius-base);
        overflow: hidden;
      `;

      const preview = document.createElement("div");
      if (isText) {
        preview.style.cssText = `
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${varName.includes("inverse") ? "var(--color-bg-inverse)" : "var(--color-bg-primary)"};
        `;
        preview.innerHTML = `<span style="color: var(${varName}); font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold);">Aa</span>`;
      } else {
        preview.style.cssText = `height: 64px; background: var(${varName});`;
      }

      const info = document.createElement("div");
      info.style.cssText = "padding: 8px; font-size: 12px;";
      info.innerHTML = `<div style="font-weight: 600;">${label}</div><div style="color: var(--color-text-tertiary); margin-top: 2px; font-family: var(--font-family-mono); font-size: 10px;">${varName}</div>`;

      card.appendChild(preview);
      card.appendChild(info);
      grid.appendChild(card);
    }
    section.appendChild(grid);
    container.appendChild(section);
  }
  return container;
}

export default {
  title: "Tokens/Colors",
};

export const Palette = {
  render: () => createColorGrid(),
};

export const Semantic = {
  render: () => createSemanticColors(),
};
