button = document.querySelector('.bottom-left-section button');
ts = document.querySelector('.top-section');
colors = ['lightblue', 'cyan', 'white', 'pink', 'green', 'orange'];

if (button) {
    button.onclick = () => {
        alert('You clicked the `sign up` button!');
        ts.setAttribute('style', `background-color: ${colors[Math.floor(Math.random() * colors.length)]}`);
    };
}

// if (button) {
//     button.onclick = () => alert('You clicked the "Sign Up" button!');
// }