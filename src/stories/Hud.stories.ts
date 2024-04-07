import type { Meta, StoryObj } from '@storybook/svelte';
import Hud from "$lib/components/layout/Hud.svelte";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'Layout/Hud',
    component: Hud,
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<Hud>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple: Story = {
    args: {
    },
};
