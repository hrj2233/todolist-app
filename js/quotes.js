const quotes = [
  {
    quote: 'Anyone who has ever made anything of importance was disciplined.',
    author: 'Andrew Hendrixson',
  },
  {
    quote:
      'Don’t spend time beating on a wall, hoping to transform it into a door.',
    author: 'Coco Chanel',
  },
  {
    quote: 'Creativity is intelligence having fun.',
    author: 'Albert Einstein',
  },
  {
    quote:
      'Optimism is the one quality more associated with success and happiness than any other.',
    author: 'Brian Tracy',
  },
  {
    quote:
      'Always keep your eyes open. Keep watching. Because whatever you see can inspire you.',
    author: 'Grace Coddington',
  },
  {
    quote:
      'What you get by achieving your goals is not as important as what you become by achieving your goals.',
    author: 'Henry David Thoreau',
  },
  {
    quote: 'If the plan doesn’t work, change the plan, but never the goal.',
    author: 'Author Unknown',
  },
  {
    quote: 'I destroy my enemies when I make them my friends.',
    author: 'Abraham Lincoln',
  },
  {
    quote: 'Don’t live the same year 75 times and call it a life.',
    author: 'Robin Sharma',
  },
  {
    quote: 'You cannot save people, you can just love them.',
    author: 'Anaïs Nin',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
