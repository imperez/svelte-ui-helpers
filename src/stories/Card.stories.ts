import type { Meta, StoryObj } from '@storybook/svelte';
import Card from "$lib/components/Card.svelte";
import SimpleCard from "./components/SimpleCard.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'UI/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        title: {table: { disable: true }},
        body: {table: { disable: true }},
        actions: {table: { disable: true }},
    },
} satisfies Meta<Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple: Story = {
    render: () => ({
        Component: SimpleCard,
    })
};
