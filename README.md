# top-secret-area-51-password-generator

## Main project goal

- This project randomly generates a password that meets certain criteria outlined by the user. This program is design to provide greater security for companies whose employees have access to sensitive data.

## Updates

### JS

- This update adds functionality to the application
  - What makes this application unique is the way a random values are selected
    - Every character chosen for the password has both a 'character type' and a 'value'
      - This password generator gives an equal probability for the character type depending on the users specifications
        - i.e. There is a 25%/25%/25%/25% if the user wants lowercase/uppercase/number/specialCharacter, There is a 33.33%/33.33%/33.33% if the user wants        lowercase/uppercase/number/,...
      - This password generator gives an equal probability for the character value depending on the character type
        - i.e. When selecting a lowercase letter there is an equal chance for any value between a-z to be selected,...

## Installation

- No installation is required. The webpage may be viewed [here](https://vtaymany.github.io/top-secret-area-51-password-generator/)

## Roadmap

- It is advised to collect user inputs from HTML forms rather than alert prompts.
  - Many form elements such as checkboxes have some degree of validation and logic built in which would help clean up the code.

## Screenshots

![Diagram showing how values are chosen](Assets/screenshots/password-generator-chart.png 'Performance improvement results')
![Screenshot showing how a random value is selected from an array consistenting of a random value of every possible character type](Assets/screenshots/password-generator-screenshot.png 'Original performance')

## Credits

- [w3schools](https://www.w3schools.com/)

## License

© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
