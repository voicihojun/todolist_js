const quotes = [
  { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  {
    quote:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Life is not a problem to be solved, but a reality to be experienced.",
    author: "Soren Kierkegaard",
  },
  {
    quote:
      "Everything negative – pressure, challenges – is all an opportunity for me to rise.",
    author: "Kobe Bryant",
  },
  {
    quote:
      "Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty.",
    author: "John F. Kennedy",
  },
  {
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.",
    author: "Steve Jobs",
  },
  {
    quote:
      "My mama always said, life is like a box of chocolates. You never know what you’re gonna get.",
    author: "Forrest Gump",
  },
  { quote: "Keep calm and carry on.", author: "Winston Churchill" },
  {
    quote:
      "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    author: "Mark Twainv",
  },
  {
    quote:
      "If you can do what you do best and be happy, you’re further along in life than most people.",
    author: "Leonardo DiCaprio",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote["quote"];
author.innerText = todaysQuote["author"];
