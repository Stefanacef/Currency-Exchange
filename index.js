"use strict";
// Global Variables
const currencyAdBtn = document.querySelector(".currency-ad--btn");
const currencyAddList = document.querySelector(".currency-add--list");
const currenciesFront = document.querySelector(".currencies");
let baseCurrency;
let baseCurrencyAmount;
//Initial currency
const keys = ["EUR", "CAD", "GBP", "USD"];
//All currencies
let currencies = [
  {
    name: "Euro",
    abbreviation: "EUR",
    symbol: "\u20AC",
    flagURL:
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
    alt: "Flag of Europe",
  },
  {
    name: "Japanese Yen",
    abbreviation: "JPY",
    symbol: "\u00A5",
    flagURL: "http://www.geonames.org/flags/l/jp.gif",
    alt: "Flag of Japan",
  },
  {
    name: "British Pound",
    abbreviation: "GBP",
    symbol: "\u00A3",
    flagURL: "http://www.geonames.org/flags/l/uk.gif",
    alt: "Flag of U.K.",
  },
  {
    name: "Australian Dollar",
    abbreviation: "AUD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/au.gif",
    alt: "Flag of Australia",
  },
  {
    name: "Canadian Dollar",
    abbreviation: "CAD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/ca.gif",
    alt: "Flag of Canada",
  },
  {
    name: "US Dollar",
    abbreviation: "USD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/us.gif",
    alt: "Flag of U.S.A.",
  },
  {
    name: "Swiss Franc",
    abbreviation: "CHF",
    symbol: "\u0043\u0048\u0046",
    flagURL: "http://www.geonames.org/flags/l/ch.gif",
    alt: "Flag of France",
  },
  {
    name: "Chinese Yuan Renminbi",
    abbreviation: "CNY",
    symbol: "\u00A5",
    flagURL: "http://www.geonames.org/flags/l/cn.gif",
    alt: "Flag of China",
  },
  {
    name: "Swedish Krona",
    abbreviation: "SEK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/se.gif",
    alt: "Flag of Sweden",
  },
  {
    name: "New Zealand Dollar",
    abbreviation: "NZD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/nz.gif",
    alt: "Flag of New Zealand",
  },
  {
    name: "Mexican Peso",
    abbreviation: "MXN",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/mx.gif",
    alt: "Flag of Mexic",
  },
  {
    name: "Singapore Dollar",
    abbreviation: "SGD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/sg.gif",
    alt: "Flag of Singapore ",
  },
  {
    name: "Hong Kong Dollar",
    abbreviation: "HKD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/hk.gif",
    alt: "Flag of Hong Kong",
  },
  {
    name: "Norwegian Krone",
    abbreviation: "NOK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/no.gif",
    alt: "Flag of Norway",
  },
  {
    name: "South Korean Won",
    abbreviation: "KRW",
    symbol: "\u20A9",
    flagURL: "http://www.geonames.org/flags/l/kr.gif",
    alt: "Flag of South Korea",
  },
  {
    name: "Turkish Lira",
    abbreviation: "TRY",
    symbol: "\u20BA",
    flagURL: "http://www.geonames.org/flags/l/tr.gif",
    alt: "Flag of Turkey",
  },
  {
    name: "Russian Ruble",
    abbreviation: "RUB",
    symbol: "\u20BD",
    flagURL: "http://www.geonames.org/flags/l/ru.gif",
    alt: "Flag of Russia",
  },
  {
    name: "Indian Rupee",
    abbreviation: "INR",
    symbol: "\u20B9",
    flagURL: "http://www.geonames.org/flags/l/in.gif",
    alt: "Flag of India",
  },
  {
    name: "Brazilian Real",
    abbreviation: "BRL",
    symbol: "\u0052\u0024",
    flagURL: "http://www.geonames.org/flags/l/br.gif",
    alt: "Flag of Brazilia",
  },
  {
    name: "South African Rand",
    abbreviation: "ZAR",
    symbol: "\u0052",
    flagURL: "http://www.geonames.org/flags/l/za.gif",
    alt: "Flag of South Africa",
  },
  {
    name: "Philippine Peso",
    abbreviation: "PHP",
    symbol: "\u20B1",
    flagURL: "http://www.geonames.org/flags/l/ph.gif",
    alt: "Flag of Philippine",
  },
  {
    name: "Czech Koruna",
    abbreviation: "CZK",
    symbol: "\u004B\u010D",
    flagURL: "http://www.geonames.org/flags/l/cz.gif",
    alt: "Flag of Czech",
  },
  {
    name: "Indonesian Rupiah",
    abbreviation: "IDR",
    symbol: "\u0052\u0070",
    flagURL: "http://www.geonames.org/flags/l/id.gif",
    alt: "Flag of Indonesia",
  },
  {
    name: "Malaysian Ringgit",
    abbreviation: "MYR",
    symbol: "\u0052\u004D",
    flagURL: "http://www.geonames.org/flags/l/my.gif",
    alt: "Flag of Malaysia ",
  },
  {
    name: "Hungarian Forint",
    abbreviation: "HUF",
    symbol: "\u0046\u0074",
    flagURL: "http://www.geonames.org/flags/l/hu.gif",
    alt: "Flag of Hungaria ",
  },
  {
    name: "Icelandic Krona",
    abbreviation: "ISK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/is.gif",
    alt: "Flag of Iceland",
  },
  {
    name: "Croatian Kuna",
    abbreviation: "HRK",
    symbol: "\u006B\u006E",
    flagURL: "http://www.geonames.org/flags/l/hr.gif",
    alt: "Flag of Croatia",
  },
  {
    name: "Bulgarian Lev",
    abbreviation: "BGN",
    symbol: "\u043B\u0432",
    flagURL: "http://www.geonames.org/flags/l/bg.gif",
    alt: "Flag of Bulgaria",
  },
  {
    name: "Romanian Leu",
    abbreviation: "RON",
    symbol: "\u006C\u0065\u0069",
    flagURL: "http://www.geonames.org/flags/l/ro.gif",
    alt: "Flag of Romania",
  },
  {
    name: "Danish Krone",
    abbreviation: "DKK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/dk.gif",
    alt: "Flag of Denmark.",
  },
  {
    name: "Thai Baht",
    abbreviation: "THB",
    symbol: "\u0E3F",
    flagURL: "http://www.geonames.org/flags/l/th.gif",
    alt: "Flag of Thailand",
  },
  {
    name: "Polish Zloty",
    abbreviation: "PLN",
    symbol: "\u007A\u0142",
    flagURL: "http://www.geonames.org/flags/l/pl.gif",
    alt: "Flag of Poland",
  },
  {
    name: "Israeli Shekel",
    abbreviation: "ILS",
    symbol: "\u20AA",
    flagURL: "http://www.geonames.org/flags/l/il.gif",
    alt: "Flag of Israel",
  },
];
//API
const currApi =
  "http://api.exchangeratesapi.io/v1/latest?access_key=ba380d24d0d92eed59299f7f5b6c1da5";

////////
//Add currecies
const addCurreciesList = function () {
  currencies.map((e, i) =>
    currencyAddList.insertAdjacentHTML(
      "beforeend",
      `<li data-currency="${currencies[i].abbreviation}" class="currency-add--elem">
                  <img
                  src="${currencies[i].flagURL}"
                  alt=" ${currencies[i].name}"
                  class="currency-flag"
                />
                <p class="currency-name">${currencies[i].abbreviation} = ${currencies[i].name}</p>
                      </li>`
    )
  );
};
// Add event listener on btn
const addCurrencyBtn = function (e) {
  currencyAddList.classList.toggle("add-open"); 
};
currencyAdBtn.addEventListener("click", addCurrencyBtn);
////////////////////////

//Add new currency
const addCurrencyOnClick = function (e) {
  const listItem = e.target.closest("li");
  if (!listItem.classList.contains("add-open")) {
    const newCurr = currencies.find(
      (a) => a.abbreviation === listItem.getAttribute("data-currency")
    );
    if (newCurr) newAddCurrecies(newCurr);
  }
};

currencyAddList.addEventListener("click", addCurrencyOnClick);
////////////////////////////

//Close Currency On Click
const closeCurrencyOnClick = function (e) {
  if (e.target.classList.contains("currency-close")) {
    const parent = e.target.parentNode;
    parent.remove();
    currencyAddList
      .querySelector(`[data-currency=${parent.id}]`)
      .classList.remove("exist");
    if (parent.classList.contains("base")) {
      const newBase = currenciesFront.querySelector(".currency-li");
      if (newBase) {
        setNewCurrBase(newBase);
        baseCurrencyAmount = Number(
          newBase.querySelector(".input input").value
        );
      }
    }
  }
};

currenciesFront.addEventListener("click", closeCurrencyOnClick);
//////////////

//Set New Currency Base
const setNewCurrBase = function (e) {
  e.classList.add("base");
  baseCurrency = e.id;
  const baseCurrencyRate = currencies.find(
    (a) => a.abbreviation === baseCurrency
  ).rate;
  currenciesFront.querySelectorAll(".currency-li").forEach((e) => {
    const currencyRate = currencies.find((c) => c.abbreviation === e.id).rate;
    const exchangeRate =
      e.id === baseCurrency ? 1 : (currencyRate / baseCurrencyRate).toFixed(3);
    e.querySelector(
      ".currency-base--rate"
    ).textContent = `1 ${baseCurrency} = ${exchangeRate} ${e.id}`;
  });
};
///////////////////////////

//New Currecies
const newAddCurrecies = function (c) {
  if (currenciesFront.childElementCount === 0) {
    baseCurrency = c.abbreviation;
    baseCurrencyAmount = 0;
  }
  currencyAddList
    .querySelector(`[data-currency=${c.abbreviation}]`)
    .classList.add("exist");
  const baseCurrencyRate = currencies.find(
    (a) => a.abbreviation === baseCurrency
  ).rate;
  const exchangeRate =
    c.abbreviation === baseCurrency
      ? 1
      : (c.rate / baseCurrencyRate).toFixed(3);
  const inputVlaue = baseCurrencyAmount
    ? (baseCurrencyAmount * exchangeRate).toFixed(3)
    : "";
  currenciesFront.insertAdjacentHTML(
    "beforeend",
    `<li class="currency-li ${c.abbreviation === baseCurrency ? "base" : ""} "
    id="${c.abbreviation}">
      <img
        src="${c.flagURL}"
        alt="${c.alt}"
        class="currency-flag"
      />
      <div class="currency-info">
        <p class="input">
          <span class="currency-symbo">${
            c.symbol
          }</span class><input class="base" placeholder="0.000" value="${inputVlaue}" />
        </p>
        <p class="currency-name">${c.abbreviation} = ${c.name}</p>
        <p class="currency-base--rate">1 ${baseCurrency}= ${exchangeRate} ${
      c.abbreviation
    }</p>
      </div>
      <span class="currency-close">X</span>
    </li>`
  );
};
////////////////////////////////////////////

//Add currencies
const addCurecies = function () {
  for (let i = 0; i < keys.length; i++) {
    const abreviation = currencies.find((c) => c.abbreviation === keys[i]);
    if (abreviation) newAddCurrecies(abreviation);
  }
};
//////////////////////////////////////////////////////////

///Add input value
const inputChange = function (e) {
  const isNewBase = e.target.closest("li").id !== baseCurrency;
  if (isNewBase) {
    currenciesFront.querySelector(`#${baseCurrency}`).classList.remove("base");
    setNewCurrBase(e.target.closest("li"));
  }
  const newBaseCurr = isNaN(e.target.value) ? 0 : Number(e.target.value);
  if (baseCurrencyAmount !== newBaseCurr || isNewBase) {
    baseCurrencyAmount = newBaseCurr;
    const baseCurrencyRate = currencies.find(
      (a) => a.abbreviation === baseCurrency
    ).rate;
    currenciesFront.querySelectorAll(".currency-li").forEach((e) => {
      if (e.id !== baseCurrency) {
        const currencyRate = currencies.find(
          (c) => c.abbreviation === e.id
        ).rate;

        const exchangeRate =
          e.id === baseCurrency
            ? 1
            : (currencyRate / baseCurrencyRate).toFixed(3);
        e.querySelector(".input input").value =
          exchangeRate * baseCurrencyAmount !== 0
            ? (exchangeRate * baseCurrencyAmount).toFixed(3)
            : "";
      }
    });
  }
};

currenciesFront.addEventListener("input", inputChange);
///////////

//Input style
const focus = function (e) {
  const inputVal = e.target.value;
  if (isNaN(inputVal) || Number(inputVal) === 0) e.target.value = "";
  else e.target.value = Number(inputVal).toFixed(3);
};
currenciesFront.addEventListener("focusout", focus);

const keydown = function (e) {
  if (e.key === "Enter") e.target.blur();
};

currenciesFront.addEventListener("keydown", keydown);

///////api
fetch(currApi)
  .then((res) => res.json())
  .then((data) => {
    document.querySelector(".date").textContent = data.date
      .split("-")
      .reverse()
      .join(".");
    data.rates["EUR"] = 1;
    currencies = currencies.filter((c) => data.rates[c.abbreviation]);
    currencies.forEach((c) => (c.rate = data.rates[c.abbreviation]));
    addCurreciesList();
    addCurecies();
  })
  .catch((err) => console.log(err));
