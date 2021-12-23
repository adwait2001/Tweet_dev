import { backendLookup } from '../lookup'

// export function createTweets(newTweet,stack,image,callback) {
//   backendLookup("POST", "/tweet/create/", callback, { content: newTweet,stack: stack,image:image})
// }

// export function createTweets(FormData,callback) {
//   const data = {content:FormData.get('content'),stack:FormData.get('stack'),image:FormData.get('image')}
//   backendLookup("POST", "/tweet/create/", callback, data)
// }

export function TweetDetailView(TweetId, callback) {
  backendLookup("GET",`/tweet/${TweetId}/`,callback)
}

export function loadTweets(username, callback ,nextUrl) {
  let endpoint="/tweet/"
  if (username) {
    endpoint=`/tweet/?username=${username}`
  }
  if (nextUrl) {
    endpoint=nextUrl.replace("http://localhost:8000/api","")
  }
  backendLookup("GET", endpoint, callback)
}

export function TweetAction(tweetId, action, callback) {
  const data = { id: tweetId, action: action }
  backendLookup("POST", "/tweet/action/", callback, data)
}

export function apiTweetFeed(callback, nextUrl) {
  let endpoint =  "/tweet/feed"
  if (nextUrl !== null && nextUrl !== undefined) {
      endpoint = nextUrl.replace("http://localhost:8000/api", "")
  }
  backendLookup("GET", endpoint, callback)
}