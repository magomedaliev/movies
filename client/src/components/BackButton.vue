<template>
    <button class="back-btn roboto-regular" @click="backHome">
        <BackArrowIcon />
        Назад к списку
    </button>
</template>

<script>
import BackArrowIcon from "@/components/icons/BackArrowIcon.vue";

export default {
    components: {
        BackArrowIcon
    },
    methods: {
        backHome: function () {
            this.$router.push("/");
        }
    }
}
</script>

<style>
.back-btn {
    font-size: 20px;
    color: #FF5252FA;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
}

.back-btn:hover {
    text-decoration: underline;
}
</style>
