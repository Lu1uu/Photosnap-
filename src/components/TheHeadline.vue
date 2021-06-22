<template>
    <div class="hero">
        <img :src="require(`@/assets/home/${image}`)" alt="image" />
    </div>
    <div
        class="headline"
        :style="{ background: backgroundColor, color: textColor }"
    >
        <div class="headline__heading">{{ heading }}</div>
        <p class="headline__paragraph">
            {{ paragraph }}
        </p>
        <div class="headline__call-to-action">
            <p>{{ callToAction }}</p>
            <svg
                class="headline__arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="14"
            >
                <g
                    fill="none"
                    fill-rule="evenodd"
                    :stroke="textColor === 'white' ? 'white' : 'black'"
                >
                    <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'heading',
        'paragraph',
        'callToAction',
        'backgroundColor',
        'textColor',
        'image',
    ],
}
</script>

<style lang="scss" scoped>
.headline {
    padding: 7rem 3.5rem;
    &__heading {
        font-size: 3.8rem;
        font-weight: bold;
        letter-spacing: 3.33px;
        line-height: 40px;
        text-transform: uppercase;
    }
    &__paragraph {
        padding: 5rem 0;
        font-size: 1.6rem;
        opacity: 60%;
        line-height: 25px;
    }
    &__call-to-action {
        cursor: pointer;
        display: flex;
        line-height: 15.6px;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-size: 1.6rem;
        p {
            padding-right: 2rem;
        }
    }
}
.hero {
    background: white;
    width: 100%;
    height: 40rem;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
}
</style>
