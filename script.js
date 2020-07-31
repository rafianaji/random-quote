let quotes=[
    'Don’t ever make your family to suffer the most because of you. - Ali bin Abi Thalib',
    'Life is a journey to be experienced, not a problem to be solved. - Winnie The Pooh',
    'Do something today that your future self will thank you for. - Sean Patrick Flanery',
    'Education is not the learning of facts, but the training of the mind to think. - Albert Einstein',
    'People who think too much about the consequences of a decision or action will never be brave. - Ali bin Abi Thalib',
    'Don\'t forget beautiful sunsets needs cloudy skies. - Paulo Coelho',
    'I hear and I forget. I see and I remember. I do and I understand. - Confucius',
    'No one can change a person, but a person can be the reason someone changes". - Spongebob Squarepants',
    'What\'s will find you. - Ali bin Abi Thalib',
    'Do not grieve over what has passed, unless it makes you work harder for what is about to come. - Umar bin Khattab',
    'Life is really simple, but we insist on making it complicated. - Confucius'
];
let colors = ['#8DC26F', '#005C97', '#2c3e50', '#FFA17F', '#0b8793', '#9a8478', '#29323c', '#63D471', '#A55C1B', '#515585'];
function newQuote() {
    let numberQuote = Math.floor (Math.random() * (quotes.length));
    let numberColor = Math.floor (Math.random() * (colors.length));
    document.getElementById("quote").innerHTML = quotes[numberQuote];
    document.getElementById("quote").style.color = colors[numberColor];
    document.body.style.backgroundColor= colors[numberColor];
}