export const paymentData = {
  lastUpdated: "April 2, 2025",
  title: "Payment methods",
  pageTitle: "Payment Methods — Elexira™",
  pageDescription: "Accepted payment methods at Elexira. Credit cards, digital wallets, and more.",
  sections: [
    {
      title: "Accepted payment methods",
      type: "nested",
      subsections: [
        {
          title: "Credit & debit cards",
          items: ["Visa", "Mastercard", "American Express", "Discover"],
        },
        {
          title: "Digital wallets",
          items: ["Apple Pay", "Google Pay", "Shop Pay", "PayPal"],
        },
        {
          title: "Buy now, pay later",
          items: ["Klarna", "Afterpay", "Affirm"],
        },
      ],
    },
    {
      title: "Payment security",
      type: "paragraphs",
      content: [
        "All transactions are secured using industry-standard SSL encryption. Your payment information is never stored on our servers and is processed through secure, PCI-compliant payment providers."
      ]
    },
    {
      title: "Billing information",
      type: "list",
      items: [
        "Your billing address must match the address associated with your payment method",
        "All prices are displayed in USD",
        "International orders may be subject to currency conversion fees from your bank",
        "Sales tax will be calculated based on your shipping address"
      ]
    },
    {
      title: "Payment verification",
      type: "text-list",
      content: [
        "For your security, some transactions may require additional verification. This could include:"
      ],
      items: [
        "CVV verification",
        "3D Secure authentication",
        "Address verification",
        "Bank confirmation"
      ]
    },
    {
      title: "Orders & authorization",
      type: "list",
      items: [
        "Your card will be authorized at the time of purchase",
        "The charge will be processed when your order ships",
        "Pre-orders may be charged at the time of purchase",
        "Orders may be held for additional verification if needed"
      ]
    }
  ]
};
