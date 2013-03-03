
pjs.config({
		log: 'file',
		writer: 'file',
		format: 'json',
		logFile: 'log.' + Date.now() + '.txt',
		outFile: 'data.' + Date.now() + '.json'
	});

var scraperSaleRoom = function() {
  var items = [];
  item = {};
  item.user = "tobi";
  ah = $("h1.auctionHouse a").text();
  ahURL = $("h1.auctionHouse a").attr("href");
  item.auctionHouse = {name: ah, country: "US", URL: ahURL};
  item.dateTime = Date.now();
  item.title = $("h3.lotNumber").text();
  item.description = $("div.description").last().text();
  item.maker = "UNKNOWN";
  item.placeDate = "UNKNOWN";
  item.region = "UNKNOWN";
  item.sellType = "auction";
  item.auctionDate = $("ul.date li").first().text();
  item.image = $("#largeImage").attr("src");
  item.estimateCurrency = "GBP";
  if ($("h4.estimates").size()>0) {
    item.estimateAmountLow = $("h4.estimates").next("p").text();
  }
  if (!item.estimateAmountLow) item.estimateAmountLow = "UNKNOWN";
  item.estimateAmountHigh = item.estimateAmountLow;
  item.detailsURL = $(location).attr('href');
  item.scrapedURL = $(location).attr('href');
  console.log(item.dateTime + ": found: " + item.auctionHouse + " // " + item.title);
  items.push(item);
	return items;
};

var scraperRareMaps = function() {
  var items = [];
	var item;
  var region = $(".layoutContent h1").text();
	$(".productTable tbody tr").each(function() {
		item = {};
		item.user = "tobi";
		item.auctionHouse = {name: "Barry Lawrence Ruderman Antique Maps Inc.", country: "US", URL: "http://www.raremaps.com"};
		item.dateTime = Date.now();
		item.title = $(this).find("td.productTitle a").text();
		item.description = item.title;
    item.maker = $(this).find("td.productMaker a").text();
    item.placeDate = $(this).find("td.productDate").text();
    item.region = region;
    item.sellType = "sale";
    item.auctionDate = $(this).find("td.productDateAdded").text();
		item.image = item.auctionHouse.URL + $(this).find("td.productIllustration img").attr("src");
		item.estimateCurrency = "USD";
		item.estimateAmountLow = $(this).find("td.productPrice").text();
    if (!item.estimateAmountLow) item.estimateAmountLow = "UNKNOWN";
    item.estimateAmountHigh = item.estimateAmountLow;
		item.detailsURL = $(this).find("td.productInfo a.productDetailsLink").attr("href");
    item.scrapedURL = $(location).attr('href');
    console.log(item.dateTime + ": found: " + item.auctionHouse.name + " // " + item.title);
		items.push(item);
	});
	return items;
};

//Raremaps
var raremapsURLs = [
"http://www.raremaps.com/gallery/browse/category/World/World",
"http://www.raremaps.com/gallery/browse/category/World/Eastern%20Hemisphere",
"http://www.raremaps.com/gallery/browse/category/World/Western%20Hemisphere",
"http://www.raremaps.com/gallery/browse/category/World/Northern%20Hemisphere",
"http://www.raremaps.com/gallery/browse/category/World/Southern%20Hemisphere",
"http://www.raremaps.com/gallery/browse/category/World/Polar",
"http://www.raremaps.com/gallery/browse/category/World/Celestial",
"http://www.raremaps.com/gallery/browse/category/World/Atlantic%20Ocean",
"http://www.raremaps.com/gallery/browse/category/World/Pacific%20Ocean",
"http://www.raremaps.com/gallery/browse/category/World/Indian%20Ocean",
"http://www.raremaps.com/gallery/browse/category/America/America",
"http://www.raremaps.com/gallery/browse/category/America/North%20America",
"http://www.raremaps.com/gallery/browse/category/America/United%20States",
"http://www.raremaps.com/gallery/browse/category/America/New%20England",
"http://www.raremaps.com/gallery/browse/category/America/Northeast",
"http://www.raremaps.com/gallery/browse/category/America/Mid%20Atlantic",
"http://www.raremaps.com/gallery/browse/category/America/Southeast",
"http://www.raremaps.com/gallery/browse/category/America/Florida",
"http://www.raremaps.com/gallery/browse/category/America/South",
"http://www.raremaps.com/gallery/browse/category/America/Midwest",
"http://www.raremaps.com/gallery/browse/category/America/Plains",
"http://www.raremaps.com/gallery/browse/category/America/Rocky%20Mountains",
"http://www.raremaps.com/gallery/browse/category/America/Southwest",
"http://www.raremaps.com/gallery/browse/category/America/Texas",
"http://www.raremaps.com/gallery/browse/category/America/California",
"http://www.raremaps.com/gallery/browse/category/America/Northwest",
"http://www.raremaps.com/gallery/browse/category/America/Alaska",
"http://www.raremaps.com/gallery/browse/category/America/Hawaii",
"http://www.raremaps.com/gallery/browse/category/America/Caribbean",
"http://www.raremaps.com/gallery/browse/category/America/Canada",
"http://www.raremaps.com/gallery/browse/category/America/Baja%20California",
"http://www.raremaps.com/gallery/browse/category/America/Mexico",
"http://www.raremaps.com/gallery/browse/category/America/South%20America",
"http://www.raremaps.com/gallery/browse/category/America/Central%20America",
"http://www.raremaps.com/gallery/browse/category/America/Brazil",
"http://www.raremaps.com/gallery/browse/category/Europe/Europe",
"http://www.raremaps.com/gallery/browse/category/Europe/Aegean",
"http://www.raremaps.com/gallery/browse/category/Europe/Austria",
"http://www.raremaps.com/gallery/browse/category/Europe/Balkans",
"http://www.raremaps.com/gallery/browse/category/Europe/Baltic",
"http://www.raremaps.com/gallery/browse/category/Europe/Belgium",
"http://www.raremaps.com/gallery/browse/category/Europe/Black+Sea",
"http://www.raremaps.com/gallery/browse/category/Europe/British%20Isles",
"http://www.raremaps.com/gallery/browse/category/Europe/Czechoslovakia",
"http://www.raremaps.com/gallery/browse/category/Europe/France",
"http://www.raremaps.com/gallery/browse/category/Europe/Georgia",
"http://www.raremaps.com/gallery/browse/category/Europe/Germany",
"http://www.raremaps.com/gallery/browse/category/Europe/Greece",
"http://www.raremaps.com/gallery/browse/category/Europe/Hungary",
"http://www.raremaps.com/gallery/browse/category/Europe/Iceland",
"http://www.raremaps.com/gallery/browse/category/Europe/Ireland",
"http://www.raremaps.com/gallery/browse/category/Europe/Islands",
"http://www.raremaps.com/gallery/browse/category/Europe/Italy",
"http://www.raremaps.com/gallery/browse/category/Europe/Luxembourg",
"http://www.raremaps.com/gallery/browse/category/Europe/Mediterranean",
"http://www.raremaps.com/gallery/browse/category/Europe/Netherlands",
"http://www.raremaps.com/gallery/browse/category/Europe/Poland",
"http://www.raremaps.com/gallery/browse/category/Europe/Portugal",
"http://www.raremaps.com/gallery/browse/category/Europe/Romania",
"http://www.raremaps.com/gallery/browse/category/Europe/Russia",
"http://www.raremaps.com/gallery/browse/category/Europe/Scandinavia",
"http://www.raremaps.com/gallery/browse/category/Europe/Scotland",
"http://www.raremaps.com/gallery/browse/category/Europe/Spain",
"http://www.raremaps.com/gallery/browse/category/Europe/Switzerland",
"http://www.raremaps.com/gallery/browse/category/Europe/Transylvania",
"http://www.raremaps.com/gallery/browse/category/Europe/Turkey",
"http://www.raremaps.com/gallery/browse/category/Europe/Ukraine",
"http://www.raremaps.com/gallery/browse/category/Asia/Asia",
"http://www.raremaps.com/gallery/browse/category/Asia/Japan",
"http://www.raremaps.com/gallery/browse/category/Asia/Korea",
"http://www.raremaps.com/gallery/browse/category/Asia/China",
"http://www.raremaps.com/gallery/browse/category/Asia/India",
"http://www.raremaps.com/gallery/browse/category/Asia/Southeast%20Asia",
"http://www.raremaps.com/gallery/browse/category/Asia/Central%20Asia",
"http://www.raremaps.com/gallery/browse/category/Asia/Asia%20Minor",
"http://www.raremaps.com/gallery/browse/category/Asia/Philippines",
"http://www.raremaps.com/gallery/browse/category/Asia/Russia",
"http://www.raremaps.com/gallery/browse/category/Asia/Middle%20East",
"http://www.raremaps.com/gallery/browse/category/Asia/Holy%20Land",
"http://www.raremaps.com/gallery/browse/category/Asia/Armenia",
"http://www.raremaps.com/gallery/browse/category/Asia/Caspian+Sea",
"http://www.raremaps.com/gallery/browse/category/Africa/Africa",
"http://www.raremaps.com/gallery/browse/category/Africa/North%20Africa",
"http://www.raremaps.com/gallery/browse/category/Africa/South%20Africa",
"http://www.raremaps.com/gallery/browse/category/Africa/East%20Africa",
"http://www.raremaps.com/gallery/browse/category/Africa/West%20Africa",
"http://www.raremaps.com/gallery/browse/category/Africa/Egypt",
"http://www.raremaps.com/gallery/browse/category/Africa/Mediterranean",
"http://www.raremaps.com/gallery/browse/category/Africa/African%20Islands",
"http://www.raremaps.com/gallery/browse/category/Oceana/Oceana",
"http://www.raremaps.com/gallery/browse/category/Oceana/Australia",
"http://www.raremaps.com/gallery/browse/category/Oceana/New%20Zealand",
"http://www.raremaps.com/gallery/browse/category/Oceana/Hawaii",
"http://www.raremaps.com/gallery/browse/category/Oceana/Other%20Islands",
"http://www.raremaps.com/gallery/browse/category/World/Polar",
"http://www.raremaps.com/gallery/browse/category/World/Celestial",
"http://www.raremaps.com/gallery/browse/category/Curiosities/Title%20Pages",
"http://www.raremaps.com/gallery/browse/category/Curiosities/Celestial",
"http://www.raremaps.com/gallery/browse/category/Curiosities/Anthropomorphic",
"http://www.raremaps.com/gallery/browse/category/Curiosities/Portraits",
"http://www.raremaps.com/gallery/browse/category/Curiosities/Costumes",
"http://www.raremaps.com/gallery/browse/category/City%20Plans%20%26%20Views/City%20Plans%20%26%20Views",
"http://www.raremaps.com/gallery/browse/category/City%20Plans%20%26%20Views/Eastern%20US",
"http://www.raremaps.com/gallery/browse/category/City%20Plans%20%26%20Views/Western%20US",
"http://www.raremaps.com/gallery/browse/category/City%20Plans%20%26%20Views/Europe",
"http://www.raremaps.com/gallery/browse/category/City%20Plans%20%26%20Views/Asia",
"http://www.raremaps.com/gallery/browse/category/City%20Plans%20%26%20Views/Africa",
"http://www.raremaps.com/gallery/browse/category/City%20Plans%20%26%20Views/Other"
];

//SaleRoom: 
// URLs: "http://www.the-saleroom.com/en-gb/search-results?searchterm=map&x=0&y=0&sortterm=startDate&page=";
var saleroombaseURL = "http://www.the-saleroom.com/en-gb/search-results?searchterm=map&";
var saleroomURLs = [];
for (i=1; i<30; i++) {
  x = Math.ceil(Math.random()*100);
  y = Math.ceil(Math.random()*100);
  page = i;
  saleroomURLs.push(saleroombaseURL + "&x=" + x + "&y=" +y + "&sortterm=startDate&page=" + page);
}

pjs.addSuite({
  url: saleroomURLs,
  moreUrls: function() {
      return _pjs.getAnchorUrls('li.blurb a');
  },
  scrapable: function() {
      return $('h1.auctionHouse').size() > 0;
  },
  maxDepth: 2,
	scraper: scraperSaleRoom
});

//Add raremaps as last, as they are the fastest.
pjs.addSuite({
  url: raremapsURLs,
  moreUrls: function() {
      return _pjs.getAnchorUrls('div.pagerNextOn a');
  },
  scrapable: function() {
      return $('.productTable').size() > 0;
  },
	scraper: scraperRareMaps
});

