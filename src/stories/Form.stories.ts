import type { Meta, StoryObj } from '@storybook/svelte';
import Form from "$lib/components/forms/Form.svelte";
import SimpleForm from "./components/SimpleForm.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'Forms/Form',
    component: Form,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple: Story = {
    render: () => ({
        Component: SimpleForm,
    })
};
