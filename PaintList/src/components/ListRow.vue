<script setup lang="ts">

defineProps({
    img: String,
    name: String,
    brand: String,
    line: String
})

</script>

<template>
    <td><img :src="img" alt="" /></td>
    <td>{{ name }}</td>
    <td>{{ brand }}</td>
    <td>{{ line }}</td>
</template>

<style lang="css">

</style>