<template>
    <div class="presets">
        <div class="preset" v-for="cookie in decryptedKeyval">
            <div class="title">Имя</div>
            <div class="value">{{ cookie[0] }}</div>
            <div class="title">Дата начала</div>
            <div class="value">{{ cookie[1].start_date }}</div>
            <div class="title">Дата конца</div>
            <div class="value">{{ cookie[1].end_date }}</div>
            <div class="title" v-if="cookie[1].is_monday">Понедельник</div>
            <div class="title" v-if="cookie[1].is_tuesday">Вторник</div>
            <div class="title" v-if="cookie[1].is_wednesday">Среда</div>
            <div class="title" v-if="cookie[1].is_thursday">Четверг</div>
            <div class="title" v-if="cookie[1].is_friday">Пятница</div>
            <div class="title" v-if="cookie[1].is_saturday">Суббота</div>
            <div class="title" v-if="cookie[1].is_sunday">Воскресенье</div>
            <div class="title">Время начала</div>
            <div class="value">{{ cookie[1].start_time }}</div>
            <div class="title">Время конца</div>
            <div class="value">{{ cookie[1].end_time }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
let cookies = document.cookie.split(";").filter((val)=>{return !val.includes("theme")})
let keyval = cookies.map(val => [val.split("=")])
console.log(keyval)
const decryptedKeyval = ref(keyval.map(val => [val[0][0], JSON.parse(decodeURIComponent(val[0][1]))]))
console.log(decryptedKeyval)
</script>

<style scoped>
.presets {
    display: flex;
    font-family: "Roboto", sans-serif;
}

.preset {
    padding: 10px;
    background: var(--md-sys-color-surface);
    border: 1px solid var(--md-sys-color-outline);
    border-radius: 8px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>