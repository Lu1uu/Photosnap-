<template>
    <div
        class="card"
        :style="{ backgroundColor: backgroundColor, color: textColor }"
    >
        <p class="card__plan-type">{{ planType }}</p>
        <p class="card__description" :style="{ color: `${textColor}b6` }">
            {{ description }}
        </p>
        <p class="card__price">{{ price }}</p>
        <p class="card__per-month">Per Month</p>
        <button
            class="card__button"
            :style="{ backgroundColor: textColor, color: backgroundColor }"
        >
            Pick plan
        </button>
    </div>
</template>

<script>
export default {
    props: ['backgroundColor', 'textColor', 'planType', 'description', 'price'],
}
</script>

<style lang="scss">
.card {
    margin-bottom: 3rem;
    width: 100%;
    padding: 5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__plan-type {
        font-size: 3.2rem;
        font-weight: bold;
    }
    &__description,
    &__per-month {
        line-height: 2.5rem;
        opacity: 0.6;
        text-align: center;
        margin-top: 2rem;
        font-size: 1.5rem;
    }
    &__price {
        margin-top: 4rem;
        font-weight: 700;
        font-size: 4.8rem;
        letter-spacing: 4.17px;
    }
    &__per-month {
        margin-top: -1rem;
        opacity: 60%;
        text-transform: lowercase;
    }
    &__button {
        cursor: pointer;
        border: none;
        margin-top: 4rem;
        width: 100%;
        padding: 1.5rem;
        text-align: center;
        text-transform: uppercase;
    }
}
</style>
