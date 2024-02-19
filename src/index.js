require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubData = {
    "login": "Abhigyan-Thakur",
    "id": 129932686,
    "node_id": "U_kgDOB76djg",
    "avatar_url": "https://avatars.githubusercontent.com/u/129932686?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Abhigyan-Thakur",
    "html_url": "https://github.com/Abhigyan-Thakur",
    "followers_url": "https://api.github.com/users/Abhigyan-Thakur/followers",
    "following_url": "https://api.github.com/users/Abhigyan-Thakur/following{/other_user}",
    "gists_url": "https://api.github.com/users/Abhigyan-Thakur/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Abhigyan-Thakur/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Abhigyan-Thakur/subscriptions",
    "organizations_url": "https://api.github.com/users/Abhigyan-Thakur/orgs",
    "repos_url": "https://api.github.com/users/Abhigyan-Thakur/repos",
    "events_url": "https://api.github.com/users/Abhigyan-Thakur/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Abhigyan-Thakur/received_events",
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
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-04-05T06:24:55Z",
    "updated_at": "2024-01-12T13:19:27Z"
}
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/facebook', (req, res) => {
    res.send('fblogin')
})
app.get('/githubdata', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})