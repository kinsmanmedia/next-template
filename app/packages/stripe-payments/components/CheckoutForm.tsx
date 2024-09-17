'use client'

import { useState } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import { Button } from "@/components/ui/button"

export function CheckoutForm() {
    const stripe = useStripe()
    const elements = useElements()
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/payment-confirmation`,
            },
        })

        if (error) {
            setErrorMessage(error.message ?? 'An unknown error occurred')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <Button type="submit" disabled={!stripe} className="mt-4">
                Pay now
            </Button>
            {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
        </form>
    )
}