import type { Meta, StoryObj } from '@storybook/svelte';

import Button from '$lib/components/buttons/Button.svelte';
import LoadingState from "$lib/enums/LoadingState";
import ButtonDisplay from "$lib/enums/ButtonDisplay";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text'
    },
    name: {
      control: 'text'
    },
    href: {
      control: 'text'
    },
    value: {
      control: 'text'
    },
    loadingState: {
      options: LoadingState.all().map(s => s.name),
      control: { type: 'select' }
    },
    display: {
      options: ButtonDisplay.all().map(s => s.name),
      control: { type: 'select' }
    },
    isActive: {
      control: { type: 'boolean' }
    }
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple: Story = {
  args: {
    loadingState: LoadingState.None,
    label: 'Click Me',
  },
};

export const Loading: Story = {
  args: {
    loadingState: LoadingState.Loading,
    label: 'Loading'
  },
};

export const Anchor: Story = {
  args: {
    loadingState: LoadingState.None,
    label: 'Click Me',
    href: 'https://www.google.com'
  },
};

export const Active: Story = {
  args: {
    loadingState: LoadingState.None,
    label: 'Click Me',
    isActive: true
  },
};