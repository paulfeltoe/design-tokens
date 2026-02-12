import React from 'react';

const base = {
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSize: 14,
  lineHeight: 1.6,
  color: '#171717',
};

export const Tip = ({ children }) => (
  <div
    style={{
      ...base,
      backgroundColor: '#eff6ff',
      borderLeft: '3px solid #3b82f6',
      padding: '12px 16px',
      borderRadius: '0 6px 6px 0',
      marginBottom: 16,
      fontSize: 13,
    }}
  >
    {children}
  </div>
);

export const Warning = ({ children }) => (
  <div
    style={{
      ...base,
      backgroundColor: '#fffbeb',
      borderLeft: '3px solid #f59e0b',
      padding: '12px 16px',
      borderRadius: '0 6px 6px 0',
      marginBottom: 16,
      fontSize: 13,
    }}
  >
    {children}
  </div>
);

export const CodeBlock = ({ code, label }) => (
  <div style={{ marginBottom: 16 }}>
    {label && (
      <div style={{ ...base, fontSize: 12, fontWeight: 600, color: '#525252', marginBottom: 4 }}>
        {label}
      </div>
    )}
    <pre
      style={{
        backgroundColor: '#1e1e1e',
        color: '#d4d4d4',
        padding: '14px 16px',
        borderRadius: 6,
        fontSize: 13,
        lineHeight: 1.5,
        overflow: 'auto',
        fontFamily: "'Fira Code', Consolas, Monaco, monospace",
        margin: 0,
      }}
    >
      <code>{code}</code>
    </pre>
  </div>
);

export const UsageTable = ({ rows }) => (
  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, marginBottom: 16 }}>
    <thead>
      <tr style={{ borderBottom: '2px solid #e5e5e5', textAlign: 'left' }}>
        <th style={{ padding: '8px 12px', fontWeight: 600 }}>Token</th>
        <th style={{ padding: '8px 12px', fontWeight: 600 }}>When to use</th>
      </tr>
    </thead>
    <tbody>
      {rows.map(([token, usage], i) => (
        <tr key={i} style={{ borderBottom: '1px solid #f5f5f5' }}>
          <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>{token}</td>
          <td style={{ padding: '8px 12px', color: '#525252' }}>{usage}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export const Section = ({ title, description, children }) => (
  <div style={{ marginBottom: 40 }}>
    <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>{title}</h3>
    {description && <p style={{ color: '#525252', fontSize: 14, marginBottom: 16 }}>{description}</p>}
    {children}
  </div>
);

const listItemStyle = {
  ...base,
  fontSize: 13,
  padding: '3px 0',
  lineHeight: 1.5,
};

export const Guidelines = ({ doItems = [], dontItems = [] }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
    {doItems.length > 0 && (
      <div style={{ backgroundColor: '#f0fdf4', borderRadius: 6, padding: '12px 16px', borderLeft: '3px solid #22c55e' }}>
        <div style={{ ...base, fontSize: 13, fontWeight: 600, color: '#166534', marginBottom: 6 }}>When to use</div>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          {doItems.map((item, i) => <li key={i} style={listItemStyle}>{item}</li>)}
        </ul>
      </div>
    )}
    {dontItems.length > 0 && (
      <div style={{ backgroundColor: '#fef2f2', borderRadius: 6, padding: '12px 16px', borderLeft: '3px solid #ef4444' }}>
        <div style={{ ...base, fontSize: 13, fontWeight: 600, color: '#991b1b', marginBottom: 6 }}>When NOT to use</div>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          {dontItems.map((item, i) => <li key={i} style={listItemStyle}>{item}</li>)}
        </ul>
      </div>
    )}
  </div>
);

export const PageHeader = ({ title, description }) => (
  <div style={{ marginBottom: 32 }}>
    <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>{title}</h2>
    {description && <p style={{ color: '#525252', fontSize: 15, lineHeight: 1.6, marginBottom: 0 }}>{description}</p>}
  </div>
);
