import { ref } from 'vue'
import { defineStore } from 'pinia'
import data from '../data.json'

export interface Scheme {
    part: string;
    brand: string;
    line: string;
    name: string;
}

export const useSchemesStore = defineStore('schemes', () => {
    const savedSchemes = localStorage.getItem('paintSchemes')

    const paintSchemes = ref<Scheme[]>(
        savedSchemes ? JSON.parse(savedSchemes) : []
    )

    function setItem(scheme: Scheme): void {
        paintSchemes.value.push(scheme)

        localStorage.setItem(
        'paintSchemes',
        JSON.stringify(paintSchemes.value)
        )
    }

    function removeItem(index: number): void {
        paintSchemes.value.splice(index, 1)

        localStorage.setItem(
        'paintSchemes',
        JSON.stringify(paintSchemes.value)
        )
    }

    function clearItems(): void {
        paintSchemes.value = []
        localStorage.removeItem('paintSchemes')
    }

    return {
        paintSchemes,
        setItem,
        removeItem,
        clearItems
    }
})