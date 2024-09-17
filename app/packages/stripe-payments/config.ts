import { loadEnvConfig } from '@next/env'
import Stripe from 'stripe'

loadEnvConfig(process.cwd())

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-06-20", // Updated to the latest API version
})