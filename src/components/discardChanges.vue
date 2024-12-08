<template>
    <div class="container">
        <header class="header">
            <div class="header-controls">
                <button 
                    @click="discardChanges" 
                    class="btn-secondary btn" 
                    :class="{'disabled': !wasSomethingChanged}">
                    Discard
                </button>
            </div>
        </header>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Референси для стейту
const formula = ref({});
const formulaBackup = ref({});
const wasSomethingChanged = ref(false);

// Метод для отримання даних із localStorage
const loadFromLocalStorage = () => {
    const storedData = localStorage.getItem('formulaBackup'); // Отримуємо дані з localStorage
    if (storedData) {
        try {
            formulaBackup.value = JSON.parse(storedData); // Парсимо JSON
            formula.value = { ...formulaBackup.value }; // Ініціалізуємо формулу
        } catch (error) {
            console.error('Помилка при парсингу даних з localStorage:', error);
        }
    }
};

// Метод для скидання змін
const discardChanges = () => {
    if (wasSomethingChanged.value) {
        formula.value = { ...formulaBackup.value }; // Повертаємо попередні дані
        wasSomethingChanged.value = false;
    }
};

// Викликаємо метод завантаження під час монтування компонента
onMounted(() => {
    loadFromLocalStorage();
});
</script>
