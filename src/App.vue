<template>
    <div>
        <router-link to="/swiper">swiper</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    created() {},
};
</script>

<style lang="scss" scoped>
.test {
    color: red;
    display: flex;
}
</style>
