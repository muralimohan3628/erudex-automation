//Uncompleted
const constantVars = require('../fixtures/baseData')

describe('Student Activity', ()=>{
    it('Signin', ()=>{
       cy.signIn(constantVars.URL+'login/index.html?',
                 constantVars.studentUsername,
                 constantVars.studentPassword);
    });
    //TCs
    it('Reach Activity Page', ()=>{
        cy.get('.dash-blk > .icon-curriculum')
          .click()
        cy.get('[href="#/activities"]')
          .click()
    });
    it('Select a Subject from the group', ()=>{
        //select Physics
        cy.get('.subject-button.Physics')
          .click()
        //Assert Chapters are visible
        cy.get('.columns.chapters-column')
          .should('be.visible')
        //Select a chapter with pending activity //Atoms
    });
    it('Assert No activity message',()=>{
      
      cy.contains('Wave Optics')
        .click()
      cy.contains('No Activities')
        .should('be.visible')
    });
    it('Assert Icons are correct', ()=>{
        cy.get('.assignment-chapter-count.pending')
          .last()
          .parent()
          .click()
        //Check the icons
        const PENDING_ICON_CLASS = 'fa fa-clock-o';
        const COMPLETED_ICON_CLASS = 'fa fa-check-circle';
        cy.get('[ng-show="selectedChapter.pendingAssignments && selectedChapter.pendingAssignments.length > 0"] > .resource-row-icon > .assignment-chapter-count > i')
          .should('have.class', PENDING_ICON_CLASS)
        cy.get('[ng-show="selectedChapter.completedAssignments && selectedChapter.completedAssignments.length > 0"] > .resource-row-icon > .assignment-chapter-count > i')
          .should('have.class', COMPLETED_ICON_CLASS)
    });
    it('Check Pending Activities and Submit Activity', ()=>{
        //Get the first pending activity for submissal
        //cy.get('[ng-show="selectedChapter.pendingAssignments && selectedChapter.pendingAssignments.length > 0"] > ul')
        let pendAct1;
        cy.get('[ng-show="selectedChapter.pendingAssignments && selectedChapter.pendingAssignments.length > 0"] > .assignment-grid >')
          .first()
          .click()
          .then(($obj)=>{
            pendAct1 = $obj.text();
            //Check that the activity is displayed in the below container
            cy.get('.half-activity-view-area > .row.activity-title-header > span.ng-binding')
              .then(($obj)=>{
                let actName2 = $obj.text()
                expect(actName2).to.eq(pendAct1.slice(0,actName2.length))
              })
          })
        

        //View resources
        cy.get('.select-resource-list-item.clickable')
          .first()
          .click()
        cy.wait(4000)
        cy.get('[ng-click="closeModal()"]')
          .click()
        /*Submit Assignment
        cy.get('[ng-click="onSubmit()"]')
          .click()
        */
    });
    it('Check Completed Activites', ()=>{
        //Completed Assignments
        //cy.get('[ng-show="selectedChapter.completedAssignments && selectedChapter.completedAssignments.length > 0"]')
        //Get the first pending activity for submissal
        //cy.get('[ng-show="selectedChapter.completedAssignments && selectedChapter.completedAssignments.length > 0"] > ul > li')
        cy.get('[ng-show="selectedChapter.completedAssignments && selectedChapter.completedAssignments.length > 0"] > .assignment-grid >')
          .first()
          .click()
          .then(($obj)=>{
            const completedActName1 = $obj.text();
            cy.get('[ng-show="selectedChapter.completedAssignments && selectedChapter.completedAssignments.length > 0"] > ul')
              .first()
              .click()
            //Check that the activity is displayed in the below container
            cy.get('.half-activity-view-area > .row.activity-title-header > span.ng-binding')
              .then(($obj)=>{
                let actName2 = $obj.text()
                expect(actName2).to.eq(completedActName1.slice(0, actName2.length))
              })
          })
    });
    //End of TCs
    it('Log Out', ()=>{
        cy.logOut('[ng-click="logout()"]')
    })
});