import { ref } from 'vue'
import { defineStore } from 'pinia'
import data from '../data.json'

export interface Paint {
    img: string;
    name: string;
    brand: string;
    line: string;
}

export const usePaintStore = defineStore('paint', () => {
    const savedPaints = localStorage.getItem('paintList')

    const paintList = ref<Paint[]>(
        // savedPaints ? JSON.parse(savedPaints) : []
        data.PaintList
    )

    // function setItem(paint: Paint): void {
    //     paintList.value.push(paint)

    //     localStorage.setItem(
    //     'paintList',
    //     JSON.stringify(paintList.value)
    //     )
    // }

    // function removeItem(index: number): void {
    //     paintList.value.splice(index, 1)

    //     localStorage.setItem(
    //     'paintList',
    //     JSON.stringify(paintList.value)
    //     )
    // }

    // function clearItems(): void {
    //     paintList.value = []
    //     localStorage.removeItem('paintList')
    // }

    return {
        paintList,
        // setItem,
        // removeItem,
        // clearItems
    }
})