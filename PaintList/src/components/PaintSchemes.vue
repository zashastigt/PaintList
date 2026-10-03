<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useSchemesStore, type Scheme } from '../store/schemes'
import { usePaintStore, type Paint } from '../store/paint'

const schemeStore = useSchemesStore()
const paintStore = usePaintStore()

const showAdd = ref(false)

const newScheme = reactive<Scheme>({
    part: '',
    brand: '',
    line: '',
    name: ''
})

function addScheme(): void {
  schemeStore.setItem({ ...newScheme })
}
</script>

<template>
    <section>
        <table>
            <thead>
                <tr>
                    <th scope="col">Part</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Line</th>
                    <th scope="col">Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, index) in schemeStore.paintSchemes">
                    <td><span>{{ value.part }}</span></td>
                    <td><span>{{ value.brand }}</span></td>
                    <td><span>{{ value.line }}</span></td>
                    <td><span>{{ value.name }}</span></td>
                </tr>
            </tbody>
        </table>
        <button @click="showAdd = !showAdd">Plus Icon</button>
        <div v-if="showAdd">
            <input v-model="newScheme.part">
            <table>
                <tr>
                    <td><span>{{ newScheme.part }}</span></td>
                    <td><span>{{ newScheme.brand }}</span></td>
                    <td><span>{{ newScheme.line }}</span></td>
                    <td><span>{{ newScheme.name }}</span></td>
                </tr>
            </table>
            <button @click="addScheme">Add</button>
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
                <tr v-if="newScheme.part !== ''" v-for="(value, index) in paintStore.paintList" @click="() => {
                    newScheme.brand = paintStore.paintList[index].brand
                    newScheme.line = paintStore.paintList[index].line
                    newScheme.name = paintStore.paintList[index].name
                }">
                    <td><img :src="value.img" alt="" /></td>
                    <td><span>{{ value.name }}</span></td>
                    <td><span>{{ value.brand }}</span></td>
                    <td><span>{{ value.line }}</span></td>
                </tr>
            </tbody>
        </table>
        </div>
    </section>
</template>
<style lang="css">

</style>