<script setup lang="ts">

type Paint = {
    img: string;
    name: string;
    brand: string;
}

const paintList: Paint[] = JSON.parse(
    localStorage.getItem("paintList") ?? "[]"
)

</script>

<template>
    <section>
        <table>
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Brand</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="value in paintList">
                    <td><img :src="value.img" alt="" /></td>
                    <td><span>{{ value.name }}</span></td>
                    <td><span>{{ value.brand }}</span></td>
                </tr>
            </tbody>
            
        </table>
    </section>
</template>

<style lang="css">

</style>