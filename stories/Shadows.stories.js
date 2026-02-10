const shadowTokens = [
  ["--shadow-none", "None", "No shadow"],
  ["--shadow-sm", "Small", "Subtle cards, hover lift"],
  ["--shadow-base", "Base", "Default cards, dropdowns"],
  ["--shadow-md", "Medium", "Floating cards, raised sections"],
  ["--shadow-lg", "Large", "Dropdowns, popovers"],
  ["--shadow-xl", "Extra Large", "Modals, dialogs"],
  ["--shadow-2xl", "2XL", "Toast notifications, overlays"],
  ["--shadow-inner", "Inner", "Pressed/active inputs"],
];

function createShadows() {
  const container = document.createElement("div");
  container.style.cssText = "padding: 32px; font-family: var(--font-family-sans);";

  container.innerHTML = `<h1 style="font-size: var(--font-size-4xl); font-weight: var(--font-weight-bold); margin-bottom: 32px;">Shadows</h1>`;

  const grid = document.createElement("div");
  grid.style.cssText = "display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 24px;";

  for (const [varName, label, desc] of shadowTokens) {
    const card = document.createElement("div");
    card.style.cssText = `
      padding: 24px;
      border-radius: var(--border-radius-md);
      box-shadow: var(${varName});
      border: 1px solid var(--color-border-subtle);
      background: var(--color-bg-primary);
    `;
    card.innerHTML = `
      <div style="font-weight: var(--font-weight-semibold); margin-bottom: 4px;">${label}</div>
      <div style="font-size: var(--font-size-xs); color: var(--color-text-tertiary); font-family: var(--font-family-mono); margin-bottom: 8px;">${varName}</div>
      <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">${desc}</div>
    `;
    grid.appendChild(card);
  }
  container.appendChild(grid);

  return container;
}

export default {
  title: "Tokens/Shadows",
};

export const Elevation = {
  render: () => createShadows(),
};
