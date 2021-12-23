import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { DetailComponent, FeedComponent, TweetComponent } from './tweets';
import { ProfileBadgeComponent } from './profiles';

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

const tweetFeedEl  = document.getElementById("tweetme-2-feed")
if (tweetFeedEl) {
    ReactDOM.render(e(FeedComponent,tweetFeedEl.dataset), tweetFeedEl);
}

const userProfileBadgeElements = document.querySelectorAll(".tweetme-2-profile-badge")

userProfileBadgeElements.forEach(container=> {
    ReactDOM.render(
        e(ProfileBadgeComponent, container.dataset), 
        container);
})

const tweetDetailElements=document.querySelectorAll(".tweetme-detail")

tweetDetailElements.forEach(container=>{
    ReactDOM.render(e(DetailComponent,container.dataset),container)
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
