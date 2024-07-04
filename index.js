const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "Pravin324",
    "id": 138319487,
    "node_id": "U_kgDOCD6Wfw",
    "avatar_url": "https://avatars.githubusercontent.com/u/138319487?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Pravin324",
    "html_url": "https://github.com/Pravin324",
    "followers_url": "https://api.github.com/users/Pravin324/followers",
    "following_url": "https://api.github.com/users/Pravin324/following{/other_user}",
    "gists_url": "https://api.github.com/users/Pravin324/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Pravin324/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Pravin324/subscriptions",
    "organizations_url": "https://api.github.com/users/Pravin324/orgs",
    "repos_url": "https://api.github.com/users/Pravin324/repos",
    "events_url": "https://api.github.com/users/Pravin324/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Pravin324/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 0,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-07-01T17:10:26Z",
    "updated_at": "2023-07-01T17:10:26Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
    res.send('praveendotcom')
})

app.get('/login',(req, res) => {
    res.send('<h1>please login at chai aur code<h1/>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>chai aur code</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})