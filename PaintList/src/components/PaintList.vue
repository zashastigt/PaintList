<script setup lang="ts">
import { usePaintStore} from '../store/paint'
import ListRow from './ListRow.vue';

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
                <tr v-for="value in store.paintList">
                    <ListRow :img="value.img" :name="value.name" :brand="value.brand" :line="value.line" />
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