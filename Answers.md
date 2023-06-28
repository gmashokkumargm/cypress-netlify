1. How long did you spend on the technical test? What would you add to your solution if you had more time? If you didn't spend much time on the technical test then use this as an opportunity to explain what you would add.
    4 to 5 hrs spent for the overall challenge, If I have more time the way of approach is to understand the application flow and test functionally instead of UI level. 
    for ex: To add a book test, if I know more about the API details instead of adding a book and verifying I could have checked the response and validate it. 

2. What do you think is the most interesting trend in test automation?
    I would say component testing as most of the organization moving towards developing reusable component. And smart way of testing instead of having validation in UI. Also mocking the request and response to try some edge cases. 

3. How would you approach adding automated testing to an existing (web) application with no existing E2E tests? Have you ever had to do this?
    - First, analyze what type of application and what functionalities we have in the application. Based on that we need to decide which is the best tool for the application. 
    - Then start thinking about which environment we are going to run our E2E test whether in Localhost or staging (test environment) or production (not suggested).
    - Test data: How we are going to inject and maintain the test data
    - Add one or two E2E test
    - Run in the CICD pipeline. 
