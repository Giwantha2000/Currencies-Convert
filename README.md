Currency Converter App
This is a Full Stack Web Application that allows users to convert currencies based on the latest exchange rates. The app is built with a React front end and a Node.js back end, utilizing the Open Exchange Rates API for currency data.

Features
Convert currencies using up-to-date exchange rates.
Select source and target currencies from a comprehensive list.
View conversion results instantly.
Clear form inputs easily.
Technologies Used
Front End: React, Tailwind CSS
Back End: Node.js, Express.js
API: Open Exchange Rates
Styling: Tailwind CSS
Getting Started
Prerequisites
Node.js
npm (Node Package Manager)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/currency-converter-app.git
cd currency-converter-app
Install dependencies:

bash
Copy code
# For the server
cd server
npm install

# For the client
cd ../client
npm install
Set up the API key:

Sign up for an API key from Open Exchange Rates, and replace YOUR_API_KEY with your actual API key in both the server and client code.

Running the Application
Start the server:

bash
Copy code
cd server
node server.js
Start the client:

bash
Copy code
cd ../client
npm start
Open your browser and navigate to http://localhost:3000 to use the application.

API Endpoints
Get All Currencies
Endpoint: /getAllCurrencies
Method: GET
Description: Retrieves a list of all currency names.
Convert Currency
Endpoint: /convert
Method: GET
Parameters:
date: The date for historical exchange rates (format: YYYY-MM-DD).
sourceCurrency: The currency code of the source currency.
targetCurrency: The currency code of the target currency.
amountInSourceCurrency: The amount in the source currency.
Description: Converts an amount from the source currency to the target currency based on historical exchange rates.
Contributing
Feel free to open issues or submit pull requests for improvements and bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Open Exchange Rates for providing the exchange rate data.
