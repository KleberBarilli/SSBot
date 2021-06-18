const Twit = require("twit");
const twit = new Twit(require("./config"));

const mediaArtsSearch = { q: "#SSBets", count: 100, result_type: "recent" };

const retweetLatest = () => {
  twit.get("search/tweets", mediaArtsSearch, (error, data) => {
    console.log(error, data);      
    if (!error) {      
      let retweetId = data.statuses[0].id_str;      
      twit.post("statuses/retweet/" + retweetId, {}, (error, response) => {
        if (response) {
          console.log(
            "O bot retweetou com sucesso"
          );
        }
               if (error) {
          console.log("Ocorreu um erro com o twitter:", error);
        }
      });
    }
        else {
      console.log("Houve um problema com a hashtag:", error);
    }
  });
}
retweetLatest();
setInterval(retweetLatest, 1000 * 60 * 1);
