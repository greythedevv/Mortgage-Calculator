Mortgage Calculator


This project is a responsive mortgage calculator built with HTML, CSS, and JavaScript. It allows users to calculate monthly mortgage repayments and total repayment amounts based on the mortgage amount, term, interest rate, and mortgage type (repayment or interest-only). The calculator is fully responsive and works across desktop and mobile devices.

Table of Contents

Features

Technologies Used

Installation

Usage

How It Works

Responsive Design

File Structure

Future Improvements

License

Features

Calculate monthly repayments based on user input.

Display total repayment over the mortgage term.

Switch between Repayment and Interest-Only mortgage types.

Clear all input fields with a single click.

Responsive layout for desktop, tablet, and mobile.

Real-time formatting of currency values with toLocaleString.

Technologies Used

HTML5 – Structure of the page.

CSS3 – Styling and responsive layout.

JavaScript (ES6) – Dynamic calculations and DOM manipulation.

Installation

Clone the repository:

git clone https://github.com/your-username/mortgage-calculator.git

Open the project folder.

Open index.html in your preferred browser.

No backend or server is required; the project runs entirely on the client side.

Usage

Enter the mortgage amount in pounds (£).

Enter the mortgage term in years.

Enter the interest rate as a percentage (%).

Select the mortgage type:

Repayment – Calculates standard monthly repayments including principal and interest.

Interest Only – Calculates monthly repayments of interest only.

Click Calculate Repayments to see the results.

Click Clear All to reset the form.

The results will display:

Monthly repayments

Total repayment over the mortgage term

How It Works

The mortgage calculator uses the standard mortgage formula:

𝑀
=
𝑃
𝑟
(
1
+
𝑟
)
𝑛
(
1
+
𝑟
)
𝑛
−
1
M=P
(1+r)
n
−1
r(1+r)
n
	​


Where:

𝑀
M = monthly repayment

𝑃
P = mortgage principal amount

𝑟
r = monthly interest rate (annual rate ÷ 12 ÷ 100)

𝑛
n = total number of payments (years × 12)

JavaScript Logic

DOM elements are selected using getElementById.

Input values are parsed with parseFloat.

Monthly interest rate is calculated as rateValue / (100 * 12).

Monthly repayments and total repayments are computed using the mortgage formula.

Results are formatted as currency using toLocaleString.

Clear button resets all input fields using a loop over <input> elements.

Responsive Design

The layout uses Flexbox and media queries to adapt to various screen sizes:

Desktop (>900px) – Left panel (form) and right panel (results) are side by side.

Tablet (≤900px) – Panels stack vertically.

Mobile (≤500px) – Buttons and text scale down for readability, input fields and results stack fully.

File Structure
mortgage-calculator/
│
├── index.html          # Main HTML file
├── Src/
│   ├── mortgage.css    # CSS styling
│   └── mortgage.js     # JavaScript logic
└── README.md           # Project documentation
Future Improvements

Add dynamic mortgage type calculation for Interest-Only option.

Add input validation to prevent negative values or empty inputs.

Include graphs to visualize repayments over time.

Implement currency and localization options.

Save user inputs in local storage for quick retrieval.

License

This project is open-source and available under the MIT License.