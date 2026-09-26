import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface Paint {
    img: string;
    name: string
    brand: string
}

export const usePaintStore = defineStore('paint', () => {
    const savedPaints = localStorage.getItem('paintList')

    const paintList = ref<Paint[]>(
        savedPaints ? JSON.parse(savedPaints) : []
    )

    function setItem(paint: Paint): void {
        paintList.value.push(paint)

        localStorage.setItem(
        'paintList',
        JSON.stringify(paintList.value)
        )
    }

    function removeItem(index: number): void {
        paintList.value.splice(index, 1)

        localStorage.setItem(
        'paintList',
        JSON.stringify(paintList.value)
        )
    }

    function clearItems(): void {
        paintList.value = []
        localStorage.removeItem('paintList')
    }

    return {
        paintList,
        setItem,
        removeItem,
        clearItems
    }
})