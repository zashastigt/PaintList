<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useSchemesStore, type Scheme } from '../store/schemes'
import { usePaintStore } from '../store/paint'
import SchemeRow from './SchemeRow.vue'
import ListRow from './ListRow.vue'

const schemeStore = useSchemesStore()
const paintStore = usePaintStore()

const showAdd = ref(false)

const newScheme = reactive<Scheme>({
    part: '',
    brand: '',
    line: '',
    name: ''
})

function emptyScheme(): void {
    showAdd.value = false
    newScheme.part = ''
    newScheme.brand = ''
    newScheme.line = ''
    newScheme.name = ''
}

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
                <tr v-for="value in schemeStore.paintSchemes">
                    <SchemeRow :part="value.part" :brand="value.brand" :line="value.line" :name="value.name" />
                </tr>
            </tbody>
        </table>

        <svg @click="showAdd = !showAdd" class="plus_button" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" fill="rgb(40, 18, 70)" stroke="black" stroke-width="2"/>
            <line x1="100" y1="50" x2="100" y2="150" stroke="black" stroke-width="10" stroke-linecap="round"/>
            <line x1="50" y1="100" x2="150" y2="100" stroke="black" stroke-width="10"stroke-linecap="round"/>
        </svg>

        <div class="popUp" v-if="showAdd">
            <input v-model="newScheme.part">
            <table>
                <tr>
                    <SchemeRow :part="newScheme.part" :brand="newScheme.brand" :line="newScheme.line" :name="newScheme.name" />
                </tr>
            </table>

            <button @click="addScheme(); emptyScheme()">Add</button>

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
                        <ListRow :img="value.img" :name="value.name" :brand="value.brand" :line="value.line" />
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
<style lang="css">
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .plus_button {
        height: 50px;
    }

    .popUp {
        background-color: rgb(40, 18, 70);
        border-radius: 10px;
        padding: 10px;
    }

    table{
        & td {
            border: none;
        }
    }
</style>