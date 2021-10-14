import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Question, Survey, Option } from './survey-data';

export interface QuestionType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css']
})
export class CreateQuestionsComponent implements OnInit {
  surveyForm: FormGroup;

  selectedOption: any[] = [];

  editMode = false;


  questions: QuestionType[] = [
    { value: 'choice', viewValue: 'choice' },
    { value: 'Text', viewValue: 'Text' }
  ];


  constructor(
    // private surveyService: SurveyService,

  ) { }

  ngOnInit() {
    this.initForm();

  }

  private initForm() {
    let surveyTitle = '';
    let surveyQuestions = new FormArray([]);
    this.surveyForm = new FormGroup({
      'surveyTitle': new FormControl(surveyTitle, [Validators.required]),
      'surveyQuestions': surveyQuestions
    });

    this.onAddQuestion();

  }

  onAddQuestion() {
    console.log(this.surveyForm);

    const surveyQuestionItem = new FormGroup({
      'questionTitle': new FormControl('', Validators.required),
      'questionType': new FormControl('', Validators.required),
      'questionGroup': new FormGroup({})
    });

    (<FormArray>this.surveyForm.get('surveyQuestions')).push(surveyQuestionItem);

  }

  onRemoveQuestion(index) {


    this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup = new FormGroup({});
    this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionType = new FormControl({});

    (<FormArray>this.surveyForm.get('surveyQuestions')).removeAt(index);
    this.selectedOption.splice(index, 1);
    console.log(this.surveyForm);

  }


  onSeletQuestionType(questionType, index) {
    if (questionType === 'choice') {
      this.addOptionControls(questionType, index)
    }
  }

  addOptionControls(questionType, index) {

    let options = new FormArray([]);
    let showRemarksBox = new FormControl(false);


    (this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup).addControl('options', options);
    (this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup).addControl('showRemarksBox', showRemarksBox);

    this.clearFormArray((<FormArray>this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options));

    this.addOption(index);
    this.addOption(index);
  }


  private clearFormArray(formArray: FormArray) {
    while (formArray.length !== 0) {
      formArray.removeAt(0)
    }
  }


  addOption(index) {
    const optionGroup = new FormGroup({
      'optionText': new FormControl('', Validators.required),
    });
    (<FormArray>this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options).push(optionGroup);
  }

  removeOption(questionIndex, itemIndex) {
    (<FormArray>this.surveyForm.controls.surveyQuestions['controls'][questionIndex].controls.questionGroup.controls.options).removeAt(itemIndex);
  }

  postSurvey() {

    let formData = this.surveyForm.value;
    console.log(formData);

    console.log();
    let ID = 0;
    let Title = formData.surveyTitle;
    let IsDeleted = false;
    let IsAnonymous = formData.IsAnonymous;
    //  let Question: Question[] = [];
    let Questions = [];

    let surveyQuestions = formData.surveyQuestions;
    let survey = new Survey(ID, Title, IsDeleted, Questions);


    surveyQuestions.forEach((question, index, array) => {


      let questionItem = {
        'ID': 0,
        "Type": question.questionType,
        "Text": question.questionTitle,
        "options": [],
        "Required": false,
        "Remarks": "",
        "hasRemarks": false

      }
      if (question.questionGroup.hasOwnProperty('showRemarksBox')) {
        questionItem.hasRemarks = question.questionGroup.showRemarksBox;
      }


      if (question.questionGroup.hasOwnProperty('options')) {



        question.questionGroup.options.forEach(option => {
          let optionItem: Option = {
            "OptionText": option.optionText,
            "OptionColor": "",
            "hasRemarks": false

          }
          questionItem.options.push(optionItem)
        });
      }


      survey.Question.push(questionItem)


    });


    console.log(survey);
    console.log('posting survey');


  }


  onSubmit() {

    this.postSurvey();

  }






}