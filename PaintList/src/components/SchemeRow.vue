<script setup lang="ts">

defineProps({
    part: String,
    brand: String,
    line: String,
    name: String
})

</script>

<template>
    <td>{{ part }}</td>
    <td>{{ brand }}</td>
    <td>{{ line }}</td>
    <td>{{ name }}</td>
</template>

<style lang="css">

</style>