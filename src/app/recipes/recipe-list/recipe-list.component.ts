import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('Pasata','Good food','https://scenenow.com/Content/editor_api/images/Penne-Marinara-Sauce-foodiecrush.com-004-87b06a79-47a8-4d32-a7a6-3698a76f1a01.jpg')
    ,new Recipe('Pasata','Good food','https://scenenow.com/Content/editor_api/images/Penne-Marinara-Sauce-foodiecrush.com-004-87b06a79-47a8-4d32-a7a6-3698a76f1a01.jpg')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
