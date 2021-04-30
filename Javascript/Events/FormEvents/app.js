// const tweetForm = document.querySelector('#tweetForm')
// const tweetContent = document.querySelector('#content');

// tweetForm.addEventListener('submit', function (e) {
//     /*     const userInput = document.querySelectorAll('input')[0];
//         const tweetInput = document.querySelectorAll('input')[1]; */
//     e.preventDefault();
//     const unameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(unameInput.value, tweetInput.value)
//     /* reset the values after passing */
//     unameInput.value = '';
//     tweetInput.value = '';

// });

// const addTweet = (uname, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(uname);
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`)
//     // console.log(newTweet);
//     tweetContent.append(newTweet)
// }

// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const content = document.querySelector('#list');


form.addEventListener('submit', function (e) {
    e.preventDefault();

    const productInput = form.elements.product;
    const quantityInput = form.elements.qty;
    updateList(productInput.value, quantityInput.value);
    productInput.value = '';
    quantityInput.value = '';

});


const updateList = (p_Input, q_Input) => {
    const newInp = document.createElement('li');
    // const tag = document.createElement('b');
    // tag.append(p_Input);
    // newInp.append(tag);
    newInp.append(`${q_Input}` + '');
    newInp.append(`${p_Input }`);

    content.append(newInp);

};