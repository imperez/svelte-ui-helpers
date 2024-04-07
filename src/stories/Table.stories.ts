import type { Meta, StoryObj } from '@storybook/svelte';
import Table from "$lib/components/tables/Table.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'UI/Table',
    component: Table,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple: Story = {
    args: {
        columns: [
            {label: 'Name'},
            {label: 'E-Mail'},
            {label: 'Address'},
        ],
        rowGroups: [
            [
                {label: 'Rich Perez'},
                {label: 'test@test.com'},
                {label: '123 Test Ave.'},
            ],
            [
                {label: 'Rich Perez'},
                {label: 'test@test.com'},
                {label: '123 Test Ave.'},
            ],
            [
                {label: 'Rich Perez'},
                {label: 'test@test.com'},
                {label: '123 Test Ave.'},
            ],
        ]
    },
};
