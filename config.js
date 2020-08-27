/**
 * @author Alessio Proietti <alessio.proietti [at] protonmail.com>
 */

module.exports = {
    twitterApi: {
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token_key: process.env.ACCESS_TOKEN_KEY,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    },
    twilioApi: {
        accountSid:process.env.TWILIO_ACCOUNT_SID,
        authToken:process.env.TWILIO_AUTH_TOKEN,
    },
    number: {
        to: process.env.TWILIO_NUMBER_TO,
        from:process.env.TWILIO_NUMBER_FROM,
    },
    twiliobody: "Ciao Alessio! Questo messaggio lo hai scritto pochi minuti fa tu sul tuo editor preferito. Bye Sarchiapone :)"
    oai: "http://www.openarchives.org/OAI/2.0/",
    arxiv: "http://arxiv.org/OAI/arXiv/"
}