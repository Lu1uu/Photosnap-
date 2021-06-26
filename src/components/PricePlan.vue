<template>
    <div class="plan">
        <h2 class="plan__feature">{{ feature }}</h2>
        <div class="plan__packages">
            <div class="plan__type">
                <p>Basic</p>
                <div v-show="checkboxes[0] != ''" class="plan__checkbox" html>
                    &#x2713;
                </div>
            </div>
            <div class="plan__type">
                <p>Pro</p>
                <div v-show="checkboxes[1] != ''" class="plan__checkbox" html>
                    &#x2713;
                </div>
            </div>
            <div class="plan__type">
                <p>Business</p>
                <div v-show="checkboxes[2] != ''" class="plan__checkbox" html>
                    &#x2713;
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['feature', 'checkboxes'],
}
</script>

<style lang="scss" scoped>
.plan {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    margin-bottom: 1rem;
    &__feature {
        letter-spacing: 2px;
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }
    &__packages {
        display: flex;
        &:nth-child(2) {
            padding-bottom: 1.5rem;
        }
    }
    &__type {
        color: rgba(0, 0, 0, 0.6);
        margin-right: 5rem;
        font-size: 1rem;
        text-align: center;
        * {
            padding-bottom: 0.5rem;
        }
    }
}
</style>
