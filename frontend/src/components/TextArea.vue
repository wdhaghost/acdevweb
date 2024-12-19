<script setup>
import { defineProps } from 'vue';
const props = defineProps(['label','placeholder','text'])

</script>
<template>
    <div class="grow">
        <label class="font-montserrat font-bold text-foreground">{{ props.label }}</label>

        <textarea class="w-full h- p-2.5 rounded-md text-black" :placeholder=props.placeholder ></textarea>
    </div>
</template>