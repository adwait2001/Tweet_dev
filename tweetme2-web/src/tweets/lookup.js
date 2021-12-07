import { backendLookup } from '../lookup'

export function createTweets(newTweet, callback) {
  backendLookup("POST", "/tweet/create/", callback, { content: newTweet })
}

export function TweetDetailView(TweetId, callback) {
  backendLookup("GET",`/tweet/${TweetId}/`,callback)
}

export function loadTweets(username, callback) {
  let endpoint="/tweet/"
  if (username) {
    endpoint=`/tweet/?username=${username}`
  }
  backendLookup("GET", endpoint, callback)
}

export function TweetAction(tweetId, action, callback) {
  const data = { id: tweetId, action: action }
  backendLookup("POST", "/tweet/action/", callback, data)
}
