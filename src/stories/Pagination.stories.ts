import type { Meta, StoryObj } from '@storybook/svelte';
import Pagination from "$lib/components/layout/Pagination.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'Layout/Pagination',
    component: Pagination,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple: Story = {
    args: {
        page: 2,
        totalPages: 3
    },
};
