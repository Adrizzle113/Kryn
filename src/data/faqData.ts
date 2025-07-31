export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'one-time-projects',
    question: 'Do you offer one-time projects, or only subscriptions?',
    answer: `<p>We now offer <strong>both!</strong> 🎉 </p><p>While our subscription is perfect for ongoing design needs, we also provide one-time design sprints for larger projects like branding, web design, or Webflow development.</p><p>If you need a stunning brand identity, a high-converting website, or custom design work and have a set deadline to hit, our one-time projects are the option for you!</p><p>👉 <a href="https://www.magier.com/one-time-project"><strong>Explore our one-time project options here</strong></a></p>`
  },
  {
    id: 'large-projects',
    question: 'What about large projects or a relaunch?',
    answer: `<p>No problem! We also handle one-time projects and large-scale tasks like complete website relaunches, rebranding, and other custom requests. Just send us an email at <a href="#"><strong>hi@magier.com</strong></a> with the scope of your project, and we'll get back to you with more details and an offer.</p>`
  },
  {
    id: 'payment-options',
    question: 'Which payment options do you offer?',
    answer: `<p>You can pay for your magier design subscription by credit card, PayPal, direct debit or bank transfer.</p>`
  },
  {
    id: 'cancel-subscription',
    question: 'Can I cancel my subscription monthly?',
    answer: `<p>Yes, we do not have long contract periods. Our model is super flexible! Your subscription will be renewed every month and you can cancel it 7 days before the end of the payment cycle for the following month.</p>`
  },
  {
    id: 'delivery-time',
    question: 'When do I get my results?',
    answer: `<p>We deliver high-quality work - quickly and without compromising on quality. </p><p>How it works:</p><ul role="list"><li>Within 48 hours of submitting your task, you'll receive your first design.</li><li>Every 48 hours there's an update - be it a revision or the delivery of the next task.</li><li>Our streamlined process ensures you never have to wait long.</li></ul><p>Got a specific deadline? Let us know!</p><p>‍</p>`
  }
] as const;
