<template>
    <div class="swiper-container" ref="outerContainer">
        <div
            class="swiper-inner-container"
            ref="innerContainer"
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
        >
            <slot>
                <div class="swiper-item" v-for="item in 10" :key="item">
                    item{{ item }}
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
const timeGap = 200;
const scrollGap = 20;
export default {
    data() {
        return {
            startX: 0,
            // 滚动方向
            direction: 'left',
            innerContainer: null,
            outerContainer: null,
            scrollTimeOut: null,
            lastScrollLeft: 0,
            clientWidth: 0,
            currentIndex: 0,
            splitNum: 0,
            part: 6,
        };
    },
    mounted() {
        this.outerContainer = this.$refs.outerContainer;
        this.clientWidth = this.outerContainer?.clientWidth;
        this.splitNum = this.clientWidth / this.part;
    },
    methods: {
        innerScrollToLeft() {
            this.innerContainer.scroll({
                left: this.currentIndex * this.clientWidth,
                behavior: 'smooth',
            });
        },
        // 滚动结束
        scrollEnd() {
            if (!this.clientWidth) {
                this.outerContainer = this.$refs.outerContainer;
                this.clientWidth = this.outerContainer.clientWidth;
                this.splitNum = this.clientWidth / this.part;
            }
            this.currentIndex = Math.floor(
                this.lastScrollLeft / this.clientWidth
            );
            const leftNum = this.lastScrollLeft % this.clientWidth;
            if (this.direction === 'left') {
                if (leftNum >= this.splitNum) {
                    this.currentIndex++;
                }
            } else {
                // 右滑
                if (leftNum >= this.splitNum * (this.part - 1)) {
                    this.currentIndex++;
                }
            }
            this.innerScrollToLeft();
        },
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
            this.innerContainer = this.$refs.innerContainer;
            this.lastScrollLeft = this.innerContainer.scrollLeft;
            this.judgeScrollEnd();
        },
        // 判断是否滚动结束
        judgeScrollEnd() {
            if (this.scrollTimeOut) {
                clearTimeout(this.scrollTimeOut);
                this.scrollTimeOut = null;
            }
            this.scrollTimeOut = setTimeout(() => {
                const currentScrollLeft = this.innerContainer.scrollLeft;
                const gapLeft = Math.abs(
                    currentScrollLeft - this.lastScrollLeft
                );
                this.lastScrollLeft = currentScrollLeft;
                if (gapLeft <= scrollGap) {
                    // 滚动结束
                    clearTimeout(this.scrollTimeOut);
                    this.scrollTimeOut = null;
                    this.scrollEnd();
                    return;
                }
                this.judgeScrollEnd();
            }, timeGap);
        },
    },
};
</script>

<style scoped lang="scss">
.swiper-container {
    width: 90%;
    height: 200px;
    overflow: hidden;
    .swiper-inner-container {
        height: 90%;
        border: 1px solid green;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    .swiper-item {
        width: 100%;
        border: 1px solid red;
        height: 100%;
        display: inline-block;
    }
}
</style>
