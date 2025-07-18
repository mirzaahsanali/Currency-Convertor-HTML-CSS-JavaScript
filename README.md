# Currency Converter

A simple and modern web-based currency converter that allows users to convert amounts between different currencies using real-time exchange rates.

## Features

- Convert between 100+ currencies
- Real-time exchange rates powered by [@fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api)
- Country flags for selected currencies
- Responsive and clean UI

## Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Edge, etc.)

### Installation

1. Clone or download this repository.
2. Open [`index.html`](index.html) in your browser.

## File Structure

- [`index.html`](index.html): Main HTML file for the app UI
- [`style.css`](style.css): Stylesheet for the UI
- [`codes.js`](codes.js): Currency code to country mapping
- [`converter.js`](converter.js): Main logic for fetching rates and updating the UI

## Usage

1. Enter the amount you want to convert.
2. Select the source and target currencies.
3. Click **Get Exchange Rate** to view the converted amount.

## API

Exchange rates are fetched from [@fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api).

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the [MIT License](LICENSE).