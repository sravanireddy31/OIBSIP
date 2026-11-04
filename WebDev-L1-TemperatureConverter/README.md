# Therma — Temperature Converter

A responsive temperature converter created for Oasis Infobyte Web Development & Designing Internship — Level 1, Task 3.

## Features

- Converts Celsius, Fahrenheit, and Kelvin using vanilla JavaScript
- Shows all three temperature scales after each successful conversion
- Supports decimal and valid negative values
- Rejects missing, invalid, and below-absolute-zero inputs
- Accessible labels, keyboard-friendly controls, clear error feedback, and live result updates
- Light blue glassmorphism design with a backdrop-filter fallback and reduced-motion support
- Premium visual layer with refined result cards, distinct scale accents, and restrained reveal feedback
- Responsive layout for mobile and desktop without external application dependencies

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript

## Folder structure

```text
WebDev-L1-TemperatureConverter/
├── index.html
├── style.css
├── premium.css
├── script.js
├── README.md
└── screenshots/
```

## Run locally

1. Open `OIBSIP` in VS Code.
2. Open `WebDev-L1-TemperatureConverter/index.html`.
3. Use Live Server’s **Go Live** action, or open the HTML file in a current browser.
4. Enter a temperature, select its unit, and choose **Convert temperature**.

## Required test cases

| Input | Expected result |
| --- | --- |
| `0°C` | `32°F`, `273.15 K` |
| `100°C` | `212°F`, `373.15 K` |
| `25°C` | `77°F`, `298.15 K` |
| `273.15 K` | `0°C`, `32°F` |
| `-300°C` | Below-absolute-zero error |
| Empty input | Required-input error |
