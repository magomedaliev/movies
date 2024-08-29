<template>
    <header class="header">
        <h1 class="header__title roboto-bold" @click="this.$router.push('/')">
            #movienow
        </h1>
    </header>
</template>

<script>

</script>

<style>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    margin: 0 0 40px 0;
    background-color: #FA2828FA;
    box-shadow: 0 8px 7px 0 #00000047;
}

.header__title {
    font-size: 48px;
    letter-spacing: 10px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
}
</style>
