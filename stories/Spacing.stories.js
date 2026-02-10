const spacingTokens = [
  ["--spacing-0", "0px"],
  ["--spacing-1", "4px"],
  ["--spacing-2", "8px"],
  ["--spacing-3", "12px"],
  ["--spacing-4", "16px"],
  ["--spacing-5", "20px"],
  ["--spacing-6", "24px"],
  ["--spacing-8", "32px"],
  ["--spacing-10", "40px"],
  ["--spacing-12", "48px"],
  ["--spacing-16", "64px"],
  ["--spacing-20", "80px"],
  ["--spacing-24", "96px"],
  ["--spacing-32", "128px"],
];

function createSpacing() {
  const container = document.createElement("div");
  container.style.cssText = "padding: 32px; font-family: var(--font-family-sans); max-width: 800px;";

  container.innerHTML = `<h1 style="font-size: var(--font-size-4xl); font-weight: var(--font-weight-bold); margin-bottom: 32px;">Spacing</h1>
    <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: 24px;">Based on a 4px grid. Use these for all padding, margin, and gap values.</p>`;

  for (const [varName, value] of spacingTokens) {
    const row = document.createElement("div");
    row.style.cssText = "display: flex; align-items: center; gap: 16px; margin-bottom: 8px;";
    row.innerHTML = `
      <span style="width: 120px; font-size: var(--font-size-sm); font-family: var(--font-family-mono); color: var(--color-text-tertiary); flex-shrink: 0;">${varName.replace('--', '')}</span>
      <span style="width: 48px; font-size: var(--font-size-sm); color: var(--color-text-secondary); text-align: right; flex-shrink: 0;">${value}</span>
      <div style="flex: 1; display: flex; align-items: center;">
        <div style="width: var(${varName}); height: 24px; background: var(--color-primary-500); border-radius: 2px; min-width: ${value === '0px' ? '2px' : '0'}; ${value === '0px' ? 'opacity: 0.3' : ''}"></div>
      </div>
    `;
    container.appendChild(row);
  }

  return container;
}

export default {
  title: "Tokens/Spacing",
};

export const Scale = {
  render: () => createSpacing(),
};
