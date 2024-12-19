<script setup>
import { defineProps } from 'vue';
const props = defineProps(['label','placeholder'])
const value = defineModel('value')

</script>
<template>
    <div class="w-full">
        <label class="font-montserrat font-bold text-foreground">{{ props.label }}</label>
        <textarea class="w-full min-h-[200px] h- p-2.5 rounded-md text-black" :placeholder=props.placeholder v-model="value" ></textarea>
    </div>
</template>