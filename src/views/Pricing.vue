<template>
    <TheHeadline
        :key="headline.paragraph"
        :heading="headline.heading"
        :paragraph="headline.paragraph"
        :callToAction="headline.callToAction"
        :backgroundColor="headline.backgroundColor"
        :textColor="headline.textColor"
        :image="headline.image"
    />
    <div class="container px-1">
        <ToggleSwitch @togglePrices="togglePrices" />
        <PriceCard
            v-for="pricing in pricings"
            :key="pricing.planType"
            :description="pricing.description"
            :textColor="pricing.textColor"
            :backgroundColor="pricing.backgroundColor"
            :planType="pricing.planType"
            :price="pricing.price"
        />
        <h2
            style="  letter-spacing: 2px;
            font-size: 1.2rem; text-transform: uppercase; padding-bottom: 1rem;"
        >
            The Features
        </h2>
        <hr />
        <br />
        <PricePlan
            v-for="feature in features"
            :key="feature.feature"
            :feature="feature.feature"
            :checkboxes="feature.checkboxes"
        />
    </div>
    <div class="beta">
        <h2 class="beta__heading">We’re in beta. Get your invite today!</h2>
        <div class="beta__call-to-action">
            <p>GET AN INVITE</p>
            <svg
                class="headline__arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="14"
            >
                <g fill="none" fill-rule="evenodd" stroke="#fff">
                    <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
import TheHeadline from '@/components/TheHeadline'
import PriceCard from '@/components/PriceCard'
import PricePlan from '@/components/PricePlan'
import ToggleSwitch from '@/components/UI/ToggleSwitch'

export default {
    components: {
        PricePlan,
        PriceCard,
        TheHeadline,
        ToggleSwitch,
    },
    mounted() {
        window.scrollTo(0, 0)
    },
    data() {
        return {
            originalPrice: true,
            features: [
                {
                    feature: 'Unlimited story posting',
                    checkboxes: ['x', 'x', 'x'],
                },
                {
                    feature: 'unlimited photo upload',
                    checkboxes: ['x', 'x', 'x'],
                },
                {
                    feature: 'embedding custom content',
                    checkboxes: ['', 'x', 'x'],
                },
                {
                    feature: 'customize metadata',
                    checkboxes: ['', 'x', 'x'],
                },
                {
                    feature: 'advanced metric',
                    checkboxes: ['', 'x', 'x'],
                },
                {
                    feature: 'photo downloads',
                    checkboxes: ['', '', 'x'],
                },
                {
                    feature: 'search engine indexing',
                    checkboxes: ['', '', 'x'],
                },
                {
                    feature: 'custom analytics',
                    checkboxes: ['', '', 'x'],
                },
            ],
            headline: {
                paragraph:
                    'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.',
                heading: 'PRICING',
                callToAction: '',
                backgroundColor: '#000000',
                textColor: '#ffffff',
                image: 'pricing/desktop/hero.jpg',
            },
            pricings: [
                {
                    price: '$19.00',
                    planType: 'Basic',
                    backgroundColor: '#F5F5F5',
                    textColor: '#000000',
                    description:
                        'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
                },
                {
                    price: '$39.00',
                    planType: 'Pro',
                    backgroundColor: '#000000',
                    textColor: '#f5f5f5',
                    description:
                        'More advanced features available. Recommended for photography veterans and professionals.',
                },
                {
                    price: '$99.00',
                    planType: 'Business',
                    backgroundColor: '#F5F5F5',
                    textColor: '#000000',
                    description:
                        'Additional features available such as more detailed metrics. Recommended for business owners.',
                },
            ],
        }
    },
    methods: {
        togglePrices() {
            this.pricings = this.pricings.map((plan) => {
                let [, price] = plan.price.match(/\$(\w+)/)
                price = +price
                if (this.originalPrice) {
                    price *= 10
                } else {
                    price /= 10
                }
                return { ...plan, price: `$${price}.00` }
            })
            this.originalPrice = !this.originalPrice
        },
    },
}
</script>

<style lang="scss">
.beta {
    background-image: url('../assets/shared/mobile/bg-beta.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    padding: 6rem 3rem;
    display: grid;
    place-items: center;
    &__heading {
        text-transform: uppercase;
        font-size: 3.2rem;
        font-weight: 700;
        line-height: 40px;
        letter-spacing: 3.3px;
    }
    &__call-to-action {
        place-self: start;
        margin-top: 5rem;
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
</style>
