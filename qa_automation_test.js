/// <reference types="Cypress" />

import questionnairePage from '../page_objects/questionnaire.page';
import { now, months } from 'moment';

it('Opening Google questionnaire', function() {
    cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSeY_W-zSf2_JxR4drhbgIxdEwdbUbE4wXhxHZLgxZGiMcNl7g/viewform')
})

it('Fill first and second question.', function() {
    cy.get('[data-value="Check this"]')
    .click({multiple: true})

    // var date = new Date(); // dneska
    // date.setDate(date.getDate() + 5); // dneska + 5 dni
    // console.log(date);

    // const todayPlusfive = Cypress.moment().format('dd-MM-yyyy')

    // cy.get('input[class*=exportInput][type=date]')
    // .dblclick()
    // .type(todayPlusfive)

})

it('Validate that the third question is mandatory, fill it, and go to another step.', function() {
    cy.get("span > span:contains(Další)")
    .click()

    .get('[data-item-id="1133270322"]')
    .contains('Tato otázka je povinná.')
    .should('be.visible')

    .get('input[type="text"]')
    .type('July')

    .get("span > span:contains(Další)")
    .wait(2000)
    .click()
})

it('Fill next questions and go back to the first step.', function() {
    cy.get('div[role="heading"]')
    .contains('More awesome questions')

  var favoriteMovies = ['Harry Potter', 'Star Wars', 'Stranger Things', 'Friends', 'Sherlock'];

  const randomFavMovies = favoriteMovies.sort(() => .5 - Math.random()).slice(0,3)


    cy.get('textarea[jsname="YPqjbf"]')
    .type(randomFavMovies.join(', '))
    console.log(randomFavMovies)

    cy.get('div[role="listbox"]')
    .click()

    .get('div[jsname="V68bde"]')
    .should('be.visible')

    .get('div[class="exportSelectPopup quantumWizMenuPaperselectPopup"]')
    .contains('Black')
    .click()

    .get("span > span:contains(Zpět)")
    .click()
    })

    it('Reverse text in the third question and go to the second step.', function() {

        function reverseString(str) {
            // Step 1. Use the split() method to return a new array
            var splitString = str.split(""); // var splitString = "hello".split("");
            // ["h", "e", "l", "l", "o"]
         
            // Step 2. Use the reverse() method to reverse the new created array
            var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
            // ["o", "l", "l", "e", "h"]
         
            // Step 3. Use the join() method to join all elements of the array into a string
            var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
            // "olleh"
            
            //Step 4. Return the reversed string
            return joinArray; // "olleh"
        }
         
       var reverseJuly = reverseString("July");
    
        cy.get('input[type="text"]')
        .clear()
        .type(reverseJuly)
    
        .get("span > span:contains(Další)")
        .click()
    })


    it('Check that both questions are still filled and go to final step.', function() {
        cy.get('textarea[jsname="YPqjbf"]')
        .should('not.be.empty')
    
        cy.get('div[role="listbox"]')
        .click()
    
        .get('div[jsname="V68bde"]')
        .should('be.visible')
    
        .get('div[class="exportSelectPopup quantumWizMenuPaperselectPopup"]')
        .contains('Black')
        .click()
    
        cy.get('div[class="exportSelectPopup quantumWizMenuPaperselectPopup"]')
        .should('not.be.visible')
    
        .get("span > span:contains(Další)")
        .should('be.visible')
        .click()
    })

    // .get('div[class="freebirdFormviewerViewItemsItemItem HasError"]')
    // .contains('Tato otázka je povinná.')
    // .should('not.be.visible')   

    // .get("span > span:contains(Další)")
    // .should('be.visible')
    // .click()

    it('Fill last question and send the form.', function() {
        cy.get('div[jsname="ibnC6b"]')
        .contains('Yes')
        .click()
    
        .get("span > span:contains(Odeslat)")
        .should('be.visible')
        .click()
    })

    // cy.get('div[class="freebirdFormviewerViewItemsItemItem"]').then(($answer) => {
    //         if ($answer.contains('Black')) {
    //             cy.get("span > span:contains(Další)")
    //             .should('be.visible')
    //             .click()
    //         } else {
    //             cy.get('div[class="exportSelectPopup quantumWizMenuPaperselectPopup"]')
    //                     .contains('Black')
    //                     .click()
    //         }
    //       })

    // cy.get('div[class="freebirdFormviewerViewItemsItemItem"]').then(($btn) => {
    //     if ($btn.contains('HasError')) {
    //         cy.get('div[class="exportSelectPopup quantumWizMenuPaperselectPopup"]')
    //         .contains('Black')
    //         .click()
    //     } else {
    //       cy.get("span > span:contains(Další)")
    //       .should('be.visible')
    //       .click()
    //     }
    //   })