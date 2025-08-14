import { stripe } from '@/lib/stripe';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { productId, productName, priceInCents } = await request.json();

    if (!productId || !productName || !priceInCents) {
      return new NextResponse('Missing product information', { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: productName,
            },
            unit_amount: priceInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/purchase-success`,
      cancel_url: `${request.headers.get('origin')}/`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err: any) {
    console.error('Error creating Stripe session:', err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
