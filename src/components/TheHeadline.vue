<template>
    <div class="hero">
        <img :src="require(`@/assets/${image}`)" alt="image" />
    </div>
    <div
        class="headline"
        :style="{ background: backgroundColor, color: textColor }"
    >
        <p class="headline__sub-heading">{{ subHeading }}</p>
        <p class="headline__heading">{{ heading }}</p>
        <div v-if="author" class="headline__info">
            <span class="headline__date">{{ date }}</span> by
            <span class="headline__author">{{ author }}</span>
        </div>
        <p class="headline__paragraph" :style="{ color: `${textColor}b6` }">
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
                    :stroke="textColor === '#ffffff' ? '#ffffff' : '#000000'"
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
        'subHeading',
        'date',
        'author',
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
    &__sub-heading {
        padding: 3rem 0;
        font-size: 1.6rem;
        letter-spacing: 2.5px;
    }
    &__paragraph {
        padding: 3rem 0;
        font-size: 1.6rem;
        // opacity: 60%;
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
    &__info {
        padding-top: 2rem;
        font-size: 1.5rem;
    }
    &__date {
        opacity: 60%;
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
