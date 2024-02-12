import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fun Activity';

  myObject: {
    identifier?: string,
    fImg?: string,
    fTxt?: string,
    bImg?: string,
    bTxt?: string,
    flip?: string
  }[] = 
  [
  {
    identifier: 'abc1',
    fImg: 'https://i.imgur.com/hADsCdm.png',
    fTxt: '1',
    bImg: 'https://i.imgur.com/XsbqCXt.png',
    bTxt: 'Someone gives you an elephant you can\'t sell or give away. What do you do with it?',
    flip: 'inactive'
  }, 
  {
    identifier: 'abc2',
    fImg: 'https://i.imgur.com/hADsCdm.png',
    fTxt: '2',
    bImg: 'https://i.imgur.com/XsbqCXt.png',
    bTxt: 'What are the other 10 use of pencil apart from writing?',
    flip: 'inactive'
  }, 
  {
    identifier: 'abc3',
    fImg: 'https://i.imgur.com/hADsCdm.png',
    fTxt: '3',
    bImg: 'https://i.imgur.com/XsbqCXt.png',
    bTxt: 'How do you fit a camel into a fridge?',
    flip: 'inactive'
  }
  , 
  {
    identifier: 'abc4',
    fImg: 'https://i.imgur.com/hADsCdm.png',
    fTxt: '4',
    bImg: 'https://i.imgur.com/XsbqCXt.png',
    bTxt: 'Do you think on your self as a hunter or gatherer?',
    flip: 'inactive'
  }, 
  {
    identifier: 'abc5',
    fImg: 'https://i.imgur.com/hADsCdm.png',
    fTxt: '5',
    bImg: 'https://i.imgur.com/XsbqCXt.png',
    bTxt: 'If you are an office appliance, what would you be?',
    flip: 'inactive'
  }, 
  {
    identifier: 'abc5',
    fImg: 'https://i.imgur.com/hADsCdm.png',
    fTxt: '6',
    bImg: 'https://i.imgur.com/XsbqCXt.png',
    bTxt: 'If you could throw a parade of any caliber through your office, what type of parade would it be?',
    flip: 'inactive'
  }, 
  {
    identifier: 'abc5',
    fImg: 'https://i.imgur.com/hADsCdm.png',
    fTxt: '7',
    bImg: 'https://i.imgur.com/XsbqCXt.png',
    bTxt: 'If you are CEO of this company tomorrow, what is the first change you would make?',
    flip: 'inactive'
  }, 
  {
    identifier: 'abc5',
    fImg: 'https://i.imgur.com/hADsCdm.png',
    fTxt: '8',
    bImg: 'https://i.imgur.com/XsbqCXt.png',
    bTxt: 'If you could get rid of any one thing in office, which would it be and why?',
    flip: 'inactive'
  }, 
  {
    identifier: 'abc5',
    fImg: 'https://i.imgur.com/hADsCdm.png',
    fTxt: '9',
    bImg: 'https://i.imgur.com/XsbqCXt.png',
    bTxt: 'Which three famous people would you invite to a dinner party?',
    flip: 'inactive'
  }, 
  {
    identifier: 'abc5',
    fImg: 'https://i.imgur.com/hADsCdm.png',
    fTxt: '10',
    bImg: 'https://i.imgur.com/XsbqCXt.png',
    bTxt: 'What would you do if you found a lottery ticket that won $10 million after concluding the interview and leaving the office?',
    flip: 'inactive'
  }, 
  {
    identifier: 'abc5',
    fImg: 'https://i.imgur.com/hADsCdm.png',
    fTxt: '11',
    bImg: 'https://i.imgur.com/XsbqCXt.png',
    bTxt: 'Describe the color yellow to somebody who is blind.',
    flip: 'inactive'
  }, 
  {
    identifier: 'abc5',
    fImg: 'https://i.imgur.com/hADsCdm.png',
    fTxt: '12',
    bImg: 'https://i.imgur.com/XsbqCXt.png',
    bTxt: 'Would you rather ride a giraffe to work or an elephant? Pros and cons of your preferred method of transportation?',
    flip: 'inactive'
  }, 
  {
    identifier: 'abc5',
    fImg: 'https://i.imgur.com/hADsCdm.png',
    fTxt: '13',
    bImg: 'https://i.imgur.com/XsbqCXt.png',
    bTxt: 'If you were stuck on a deserted island (and had all the food, water and shelter you needed) what 3 personal items would you bring?',
    flip: 'inactive'
  }, 
  {
    identifier: 'abc5',
    fImg: 'https://i.imgur.com/hADsCdm.png',
    fTxt: '14',
    bImg: 'https://i.imgur.com/XsbqCXt.png',
    bTxt: 'How would you describe your company’s office building to a blind person?',
    flip: 'inactive'
  }, 
  {
    identifier: 'abc5',
    fImg: 'https://i.imgur.com/hADsCdm.png',
    fTxt: '15',
    bImg: 'https://i.imgur.com/XsbqCXt.png',
    bTxt: 'What do you do if you found an elephant in your in your backyard?',
    flip: 'inactive'
  }
  ];
}
