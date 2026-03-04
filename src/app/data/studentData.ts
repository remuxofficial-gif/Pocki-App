export interface Portfolio {
  id: string;
  name: string;
  description: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  estimatedReturn: string;
  minInvestment: number;
  allocation: {
    category: string;
    percentage: number;
  }[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  description: string;
}

export const portfolios: Portfolio[] = [
  {
    id: '1',
    name: 'Starter Portfolio',
    description: 'Stable portfolio for beginners.',
    riskLevel: 'Low',
    estimatedReturn: '4-6% per year',
    minInvestment: 1,
    allocation: [
      { category: 'Bonds', percentage: 60 },
      { category: 'Stocks', percentage: 30 },
      { category: 'Cash', percentage: 10 }
    ]
  },
  {
    id: '2',
    name: 'Dynamic Portfolio',
    description: 'Balanced portfolio aiming for steady growth.',
    riskLevel: 'Medium',
    estimatedReturn: '6-8% per year',
    minInvestment: 1,
    allocation: [
      { category: 'Stocks', percentage: 50 },
      { category: 'Bonds', percentage: 40 },
      { category: 'Cash', percentage: 10 }
    ]
  },
  {
    id: '3',
    name: 'Aggressive Portfolio',
    description: 'Higher-risk portfolio focused on long-term returns.',
    riskLevel: 'High',
    estimatedReturn: '8-12% per year',
    minInvestment: 1,
    allocation: [
      { category: 'Tech Stocks', percentage: 70 },
      { category: 'Growth Stocks', percentage: 20 },
      { category: 'Bonds', percentage: 10 }
    ]
  }
];

export const lessons: Lesson[] = [
  {
    id: '1',
    title: 'What is Investing?',
    duration: '5 min read',
    completed: true,
    description: 'Learn the basics of investing and how it can help you grow your wealth over time.'
  },
  {
    id: '2',
    title: 'Understanding Risk',
    duration: '7 min read',
    completed: true,
    description: 'Discover different types of investment risk and how to manage them effectively.'
  },
  {
    id: '3',
    title: 'How Diversification Works',
    duration: '6 min read',
    completed: false,
    description: 'Learn why putting all your eggs in one basket is risky and how to diversify.'
  },
  {
    id: '4',
    title: 'Compound Interest Magic',
    duration: '8 min read',
    completed: false,
    description: 'Understand how your money can grow exponentially over time with compound interest.'
  },
  {
    id: '5',
    title: 'Stocks vs Bonds',
    duration: '6 min read',
    completed: false,
    description: 'Learn the key differences between stocks and bonds and when to use each.'
  },
  {
    id: '6',
    title: 'ETFs Explained',
    duration: '5 min read',
    completed: false,
    description: 'Discover what Exchange-Traded Funds are and why they\'re great for beginners.'
  }
];

export const portfolioPerformance = [
  { month: 'Oct', value: 0 },
  { month: 'Nov', value: 45 },
  { month: 'Dec', value: 52 },
  { month: 'Jan', value: 78 },
  { month: 'Feb', value: 95 },
  { month: 'Mar', value: 127.50 }
];
