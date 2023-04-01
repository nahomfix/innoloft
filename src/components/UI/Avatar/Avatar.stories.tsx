import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './index';

export default {
  title: 'UI/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Large = Template.bind({});
Large.args = {
  src: 'https://randomuser.me/api/portraits/men/75.jpg',
  alt: 'Image',
  size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  src: 'https://randomuser.me/api/portraits/men/75.jpg',
  alt: 'Image',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  src: 'https://randomuser.me/api/portraits/men/75.jpg',
  alt: 'Image',
  size: 'small',
};
