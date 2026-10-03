<script setup lang="ts">
import { reactive } from 'vue'
import { usePaintStore, type Paint } from '../store/paint'

const store = usePaintStore()

</script>

<template>
    <section>
        <table>
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Line</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, index) in store.paintList">
                    <td><img :src="value.img" alt="" /></td>
                    <td><span>{{ value.name }}</span></td>
                    <td><span>{{ value.brand }}</span></td>
                    <td><span>{{ value.line }}</span></td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<style lang="css">
    td img {
        max-height: 70px;
    }
</style>