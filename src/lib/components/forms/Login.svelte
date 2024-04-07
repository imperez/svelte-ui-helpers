<script lang="ts">
    import Form from "./Form.svelte";

    const submitHandler = async (formData: FormData) => {
    };
</script>

<Form label="Login" {submitHandler}>
    <label for="email">E-Mail</label>
    <input type="email" id="email" name="email" required />

    <label for="password">Password</label>
    <input type="password" id="password" name="password" required />
</Form>
