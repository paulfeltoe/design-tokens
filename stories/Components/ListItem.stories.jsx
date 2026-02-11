import React from 'react';
import { ListItem } from '../../src/components';
import { Avatar, Badge } from '../../src/components';
import { PageHeader, Section, Tip } from '../shared/DocBlock';

export default {
  title: 'Components/ListItem',
};

export const Overview = () => (
  <div style={{ fontFamily: 'Roboto, system-ui, sans-serif', maxWidth: 420 }}>
    <PageHeader
      title="ListItem"
      description="List items display rows of information with optional leading/trailing elements, subtitles, and chevrons for navigation."
    />

    <Tip>
      In the Figma designs, list items appear in habit lists, settings menus, practitioner directories, and toolkit options with title, subtitle, and right chevron.
    </Tip>

    <Section title="Basic">
      <div>
        <ListItem title="Meditation" subtitle="10 min daily practice" showChevron onClick={() => {}} />
        <ListItem title="Journaling" subtitle="Write for 5 minutes" showChevron onClick={() => {}} />
        <ListItem title="Breathing Exercise" subtitle="4-7-8 technique" showChevron onClick={() => {}} />
      </div>
    </Section>

    <Section title="With leading avatar">
      <div>
        <ListItem
          title="Dr. Sarah Mitchell"
          subtitle="Clinical Psychologist"
          leading={<Avatar name="Sarah Mitchell" size="base" />}
          showChevron
          onClick={() => {}}
        />
        <ListItem
          title="Dr. James Chen"
          subtitle="Nutritionist"
          leading={<Avatar name="James Chen" size="base" />}
          showChevron
          onClick={() => {}}
        />
        <ListItem
          title="Dr. Emily Rodriguez"
          subtitle="Physical Therapist"
          leading={<Avatar name="Emily Rodriguez" size="base" />}
          showChevron
          onClick={() => {}}
          showDivider={false}
        />
      </div>
    </Section>

    <Section title="With trailing badge">
      <div>
        <ListItem
          title="Cognitive Behavior Therapy"
          subtitle="6 modules"
          trailing={<Badge variant="success">Completed</Badge>}
          onClick={() => {}}
        />
        <ListItem
          title="Relaxation Techniques"
          subtitle="4 modules"
          trailing={<Badge variant="warning">In Progress</Badge>}
          onClick={() => {}}
        />
        <ListItem
          title="Physical Activity Plan"
          subtitle="8 modules"
          trailing={<Badge variant="info">New</Badge>}
          onClick={() => {}}
          showDivider={false}
        />
      </div>
    </Section>

    <Section title="Settings pattern">
      <div>
        <ListItem title="Notification Preferences" showChevron onClick={() => {}} />
        <ListItem title="Privacy Settings" showChevron onClick={() => {}} />
        <ListItem title="Account Details" showChevron onClick={() => {}} />
        <ListItem title="Help & Support" showChevron onClick={() => {}} showDivider={false} />
      </div>
    </Section>
  </div>
);
