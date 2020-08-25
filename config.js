/**
 * @author Alessio Proietti <alessio.proietti [at] protonmail.com>
 */

module.exports = {
    twitterApi: {
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token_key: process.env.ACCESS_TOKEN_KEY,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET
    },
    oai: "http://www.openarchives.org/OAI/2.0/",
    arxiv: "http://arxiv.org/OAI/arXiv/"
}