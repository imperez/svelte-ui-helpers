import type { Meta, StoryObj } from '@storybook/svelte';
import Loader from "$lib/components/loaders/Loader.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'Loaders/Loader',
    component: Loader,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple: Story = {
    args: {
    },
};
