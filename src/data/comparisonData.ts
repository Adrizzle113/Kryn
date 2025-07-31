export interface ComparisonData {
  criteria: string[];
  magier: (string | boolean)[];
  competitors: {
    name: string;
    values: (string | boolean)[];
  }[];
}

export const comparisonData: ComparisonData = {
  criteria: [
    'Pricing',
    'Unlimited tasks',
    'Unlimited revisions',
    'Pre-qualified designers',
    'Time to start',
    'Processing time'
  ],
  magier: [
    'Fixed monthly price',
    true,
    true,
    true,
    '<2 days',
    '<48h'
  ],
  competitors: [
    {
      name: 'Platforms',
      values: [
        'Per task',
        true,
        true,
        true,
        '1 week',
        '1 week'
      ]
    },
    {
      name: 'Freelancer',
      values: [
        'Per task',
        true,
        true,
        false,
        '2+ weeks',
        'Several weeks'
      ]
    },
    {
      name: 'Agencies',
      values: [
        'Per task',
        true,
        true,
        false,
        '4+ weeks',
        'Several weeks'
      ]
    }
  ]
} as const;
