import type { Meta, StoryObj } from '@storybook/svelte';
import Messages from "$lib/components/Messages.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'UI/Messages',
    component: Messages,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<Messages>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple: Story = {
    args: {
        list: [
            {description: 'Test Error', type: 'error'},
            {description: 'Test Info', type: 'info'},
            {description: 'Test Warning', type: 'warning'},
        ]
    },
};
