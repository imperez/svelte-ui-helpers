import type { Meta, StoryObj } from '@storybook/svelte';
import Title from "$lib/components/layout/Title.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'Layout/Title',
    component: Title,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<Title>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple: Story = {
    args: {
        label: 'Test Title'
    },
};
