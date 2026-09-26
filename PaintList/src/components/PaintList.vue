<script setup lang="ts">
import { reactive } from 'vue'
import { usePaintStore, type Paint } from '../store/paint'

const store = usePaintStore()


// const paintList: Paint[] = JSON.parse(
//     localStorage.getItem("paintList") ?? "[]"
// )

// const newPaint = reactive<Paint>({
//     img: '',
//     name: '',
//     brand: ''
// })

// function addPaint(): void {
//   store.setItem({ ...newPaint })

//     newPaint.img = ''
//     newPaint.name = ''
//     newPaint.brand = ''
// }
</script>

<template>
    <section>
        <!-- <input
            v-model="newPaint.name"
            type="text"
            placeholder="img"
        />

        <input
            v-model="newPaint.name"
            type="text"
            placeholder="Name"
        />

        <input
            v-model="newPaint.brand"
            type="text"
            placeholder="Brand"
        />

        <button @click="addPaint">Add</button> -->

        <table>
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Brand</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, index) in store.paintList">
                    <td><img :src="value.img" alt="" /></td>
                    <td><span>{{ value.name }}</span></td>
                    <td><span>{{ value.brand }}</span></td>
                    <!-- <button @click="store.removeItem(index)">
                Remove
                </button> -->
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