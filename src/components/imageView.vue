<template>
    <div class="image-view-container">
        <div class="tool-bar-contaner">
            <div class="tool-bar-item">X</div>
        </div>
        <div class="image-content-container">
            <div
                class="scroll-container"
                ref="scrollContainer"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
            >
                <div
                    class="image-container"
                    v-for="(item, index) in list"
                    :key="item.id"
                >
                    <img
                        :class="['img', { active: currentIndex === index }]"
                        :src="item.src"
                        @touchstart.stop="handleImageStart"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // 数据源
        list: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            startX: 0,
            // 滚动方向
            direction: 'left',
            scrollContainer: null,
            currentIndex: 0,
        };
    },
    methods: {
        // 开始触摸
        handleTouchStart(e) {
            const touch = e.changedTouches[0];
            this.startX = touch.pageX;
        },
        // 触摸结束
        handleTouchEnd(e) {
            const touch = e.changedTouches[0];
            if (touch.pageX - this.startX <= 0) {
                this.direction = 'left';
            } else {
                this.direction = 'right';
            }
            // this.innerContainer = this.$refs.innerContainer;
            // this.lastScrollLeft = this.innerContainer.scrollLeft;
        },
        handleImageStart() {},
    },
};
</script>

<style scoped lang="scss">
.image-view-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    top: 0;
    left: 0;
    z-index: 1000;
}
.tool-bar-contaner {
    position: fixed;
    width: 100vw;
    height: 40px;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
    .tool-bar-item {
        color: #fff;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.image-content-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .scroll-container {
        height: auto;
        white-space: nowrap;
        border: 1px solid red;
        display: flex;
        align-items: center;
        .image-container {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            overflow: auto;
        }
        .img {
            width: 100%;
            &.active {
                // transform: scale(2);
                transform-origin: 0 50%;
            }
        }
    }
}
</style>