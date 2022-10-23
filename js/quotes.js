const quotes = [
  {
    quote:
      "세상의 중요한 업적 중 대부분은, 희망이 보이지 않는 상황에서도 끊임없이 도전한 사람들이 이룬 것이다.",
    author: "데일 카네기",
  },
  {
    quote:
      "다른 사람들이 할 수 있거나 할 일을 하지 말고, 다른 이들이 할 수 없고 하지 않을 일들을 하라.",
    author: "아멜리아 에어하트",
  },
  {
    quote: "주여, 제가 이룬 것보다 항상 더 많이 갈망하게 하소서.",
    author: "미켈란젤로",
  },
  {
    quote: "약간의 광기를 띠지 않은 위대한 천재란 없다.",
    author: "세네카",
  },
  {
    quote: "누구도 본인의 동의없이 남을 지배할 만큼 훌륭하지는 않다",
    author: "에이브러햄 링컨",
  },
  {
    quote: "미래를 예측하는 최선의 방법은 미래를 창조하는 것이다.",
    author: "알랜 케이",
  },
  {
    quote: "낭비한 시간에 대한 후회는 더 큰 시간 낭비이다.",
    author: "메이슨 쿨리",
  },
  {
    quote: "우리는 젊을 때에 배우고 나이가 들어서 이해한다.",
    author: "마리 폰 에브너 에셴바흐",
  },
  {
    quote: "영원히 살 것처럼 꿈꾸고 오늘 죽을 것처럼 살아라.",
    author: "제임스 딘",
  },
  {
    quote: "내일은 우리가 어제로부터 무엇인가 배웠기를 바란다.",
    author: "존 웨인",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${todaysQuote.quote}`;
author.innerText = `- ${todaysQuote.author} -`;
