/// <reference types="Cypress" />
import DataEntry from '../../support/pageObjects/DataEntry'
const DEntry = new DataEntry()
const Dataentry = require('../../fixtures/DatEntry.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(Dataentry.Username,
            Dataentry.Password);
     });
    it('Create Assessment ',function() {
        DEntry.getCreateAssessment()
            .click({force: true})
        DEntry.getNameAssessment()
            .type(Dataentry.exmType)
        DEntry.getType()
            .contains(Dataentry.testtype)
        DEntry.getCurriculam()
            .contains(Dataentry.Curriculum)
        DEntry.getGrade()
            .contains(Dataentry.Class)
        DEntry.getSubject()
            .contains(Dataentry.Subject)
        DEntry.getLevel()
            .contains(Dataentry.Level)
        DEntry.getDuration()
            .clear()
        DEntry.getDuration()
            .type(Dataentry.Duration)
        DEntry.getMarks()
            .clear()
        DEntry.getMarks()
            .type(Dataentry.Marks)
        DEntry.getSelectquestions()
            .click()
        cy.wait(7000)
        DEntry.getChapter()
            .contains(Dataentry.Chapter)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.wait(2000)  
        DEntry.getTopic()
            .contains(Dataentry.Topic)
        cy.wait(2000)      
        DEntry.getDifficulty()
            .contains(Dataentry.Level)
        DEntry.getSkillType()
            .contains(Dataentry.Skill)
        DEntry.getPastexam()
            .contains(Dataentry.pastExm)
        DEntry.getExamyear()
            .contains(Dataentry.Year)
        DEntry.getQstntype()
            .contains(Dataentry.QstType)
        DEntry.getDescription()
            .type(Dataentry.content)
        DEntry.getConcept()
            .type(Dataentry.content)
        DEntry.getAddquestion1()
            .click({ force: true })
        DEntry.getAddquestion2()
            .click({ force: true })
        DEntry.getAddquestion3()
            .click({ force: true })
        DEntry.getAddquestion4()
            .click({ force: true })
        DEntry.getAddquestion5()
            .click({ force: true })
        DEntry.getOK()
            .click({force:true})
        cy.wait(2500)
        DEntry.getDeleteqstn()
            .click()
        DEntry.getSuccess()
            .click()
        DEntry.getAddNew()
            .click()
    })
    it('Add Questions ',function() {
        //DEntry.getAddCurriculam()
        //    .contains(Dataentry.Curriculum)
        cy.wait(2000)
        DEntry.getAddGrade()
            .contains(Dataentry.Class)
        cy.wait(2000)
        DEntry.getAddSubject()
            .contains(Dataentry.Subject)
        DEntry.getAddChapter()
            .contains(Dataentry.Chapter)
        DEntry.getAddTopic()
            .contains(Dataentry.Topic)
        DEntry.getAddDifficulty()
            .contains(Dataentry.Level)
        DEntry.getAddSkillType()
            .contains(Dataentry.Skill)
        DEntry.getAddQstntype()
            .contains(Dataentry.Qstntype)
        Cypress.on('uncaught:exception', (err, runnable) => {
             return false
          })
        DEntry.getNumericDescription()
            .type(Dataentry.discript)
        DEntry.getNumericAns()
            .type(Dataentry.NumVal)
        DEntry.getQstnSolution()
            .click()
        DEntry.getAnswer1()
            .type(Dataentry.Answer1)
        DEntry.getQstnSolution()
            .click()
        DEntry.getQstnHint()
            .click()
        DEntry.getHint1()
            .type(Dataentry.Hint1)
        DEntry.getQstnHint()
            .click()
        DEntry.getPreview()
            .click()
        DEntry.getClose()
            .click()
        DEntry.getSave()
            .click()
        DEntry.getCLOSE()
            .click()
        DEntry.getSaving()
            .click()
    })
    it('Logout', ()=>{
        cy.Logout()
    })    
})    