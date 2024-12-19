<script setup>
import { defineProps } from 'vue';
const props = defineProps(['label','placeholder','type'])
const value = defineModel('value')

</script>
<template>
    <div class="w-full">
        <label class="font-montserrat font-bold text-foreground">{{ props.label }}</label>
        <input class="w-full p-2.5 rounded-md text-black" :type=props.type :placeholder=props.placeholder v-model="value" />
    </div>
</template>