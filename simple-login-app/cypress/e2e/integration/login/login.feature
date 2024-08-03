# cypress/e2e/integration/login/login.feature

Feature: Login

  Scenario: User logs in with valid credentials
    Given I am on the login page
    When I enter valid credentials
    And I submit the form
    Then I should see a success message

  Scenario: User logs in with invalid credentials
    Given I am on the login page
    When I enter invalid credentials
    And I submit the form
    Then I should see an error message
