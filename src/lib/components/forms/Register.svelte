<script lang="ts">
    import Form from "./Form.svelte";

    const submitHandler = async (formData: FormData) => {
    };
</script>

<Form label="Join" {submitHandler}>
    <label for="name">Name</label>
    <input type="name" id="name" name="name" required />

    <label for="email">E-Mail</label>
    <input type="email" id="email" name="email" required />

    <label for="password">Password</label>
    <input type="password" id="password" name="password" required />
</Form>
