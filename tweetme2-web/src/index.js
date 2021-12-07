import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { DetailComponent, TweetComponent } from './tweets';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const appEl = document.getElementById('root')
if (appEl) {
    ReactDOM.render(<App />, appEl);
}

const e=React.createElement

const tweetsEl = document.getElementById("tweetme-2")
if (tweetsEl) {
    ReactDOM.render(e(TweetComponent,tweetsEl.dataset), tweetsEl);
}
const tweetDetailElements=document.querySelectorAll(".tweetme-detail")

tweetDetailElements.forEach(container=>{
    ReactDOM.render(e(DetailComponent,container.dataset),container)
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
