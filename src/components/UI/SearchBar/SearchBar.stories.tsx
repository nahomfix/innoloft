import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchBar } from './index';

export default {
  title: 'UI/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Enter interests, keyword, company name, etc.',
};
