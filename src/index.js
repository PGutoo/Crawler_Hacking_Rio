var request = require("request");
var cheerio = require("cheerio");

  request(
    "https://www.sciencedirect.com/search/advanced?qs=energy%20efficiency",
    function(err, res, body) {
      if (err) console.log("Erro: " + err);

      var $ = cheerio.load(body);
      $(".ResultList li").each(function() {
        var titulolink = $(this)
          .find(".result-item-content h2")
          .text()
          .trim();
        var conteudo = $(this)
          .find(".subtype-srctitle-link span")
          .text()
          .trim();
        console.log(titulolink);
        console.log(conteudo);
      });
    }
  );
