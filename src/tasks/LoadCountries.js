import countries from "../data/countries.json";
import papa from "papaparse";
import legendItems from "../entities/LegendItems";

class LoadCountriesTask {
  covidUrl =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";

  setState = null;

  load = (setState) => {
    this.setState = setState;

    papa.parse(this.covidUrl, {
      download: true,
      header: true,
      complete: (result) => this.#processCovidData(result.data),
    });
  };

  #processCovidData = (covidCountries) => {
    for (let i = 0; i < countries.features.length; i++) {
      const country = countries.features[i];
      const covidCountry = covidCountries.find(
        (covidCountry) => country.properties.ISO_A3 === covidCountry.ISO3
      );

      country.properties.confirmed = 0;
      country.properties.confirmedText = 0;
      country.properties.deaths = 0;
      country.properties.deathsText = 0;

      if (covidCountry != null) {
        let confirmed = Number(covidCountry.Confirmed);
        country.properties.confirmed = confirmed;
        country.properties.confirmedText =
          this.formatNumberWithCommas(confirmed);

        let deaths = Number(covidCountry.Deaths);
        country.properties.deaths = deaths;
        country.properties.deathsText = this.formatNumberWithCommas(deaths);
      }

      this.#setCountrycolor(country);
    }

    this.setState(countries.features);
  };

  #setCountrycolor = (mapCountry) => {
    const legendItem = legendItems.find((legendItem) =>
      legendItem.isFor(mapCountry.properties.confirmed)
    );

    if (legendItem != null) {
      mapCountry.properties.color = legendItem.color;
    }
  };

  formatNumberWithCommas = function (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
}

export default LoadCountriesTask;
