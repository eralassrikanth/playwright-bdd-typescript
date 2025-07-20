Feature: Login Functionality
  @login
  Scenario Outline: Successful login with valid credentials
    Given I am on the login page
    When I enter my email "<email>"
    And I click the login button
    And I enter the OTP "<otp>"
    And I click the verify OTP button
    Then I should be logged in successfully
    Examples:
      | email                  | otp    |
      | prachi@adityabirla.com | 123456 |
      | user2@example.com      | 654321 |
