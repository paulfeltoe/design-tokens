import React from 'react';
import { Badge } from '../../src/components';
import { PageHeader, Section, Tip } from '../shared/DocBlock';

export default {
  title: 'Components/Badge',
};

export const Overview = () => (
  <div style={{ fontFamily: 'Roboto, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Badge"
      description="Badges display short metadata like read times, statuses, or counts. They come in semantic color variants."
    />

    <Tip>
      In the Figma designs, badges appear on content cards showing read time (e.g. "5 min"), activity status, and category labels.
    </Tip>

    <Section title="Variants">
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        <Badge>Default</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="info">Info</Badge>
      </div>
    </Section>

    <Section title="Content examples">
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        <Badge variant="primary">5 min read</Badge>
        <Badge variant="success">Completed</Badge>
        <Badge variant="warning">In Progress</Badge>
        <Badge variant="info">New</Badge>
        <Badge variant="error">Overdue</Badge>
        <Badge>3 articles</Badge>
      </div>
    </Section>
  </div>
);
