import type { Meta, StoryObj } from '@storybook/svelte';
import Select from "$lib/components/Select.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'UI/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple: Story = {
    args: {
        name: 'select',
        type: 'company_size',
        group: 'company'
    },
};
