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
        <PriceCard
            v-for="pricing in pricings"
            :key="pricing.planType"
            :description="pricing.description"
            :textColor="pricing.textColor"
            :backgroundColor="pricing.backgroundColor"
            :planType="pricing.planType"
            :price="pricing.price"
        />
    </div>
</template>

<script>
import TheHeadline from '@/components/TheHeadline'
import PriceCard from '@/components/PriceCard'
export default {
    components: {
        PriceCard,
        TheHeadline,
    },
    data() {
        return {
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
}
</script>

<style></style>
