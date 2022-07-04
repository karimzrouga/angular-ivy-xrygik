import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  aa = test();
  name = x;

  //Console.log("bonjour");
}
let date = ['2022:01:05', '2022:01:15', '2022:01:05', '2022:01:06'];
let valeur = [1, 1, 3, 14];
let donne = [date, valeur];
let x = 'test';
function max() {
  let maxdate = date[0];
  let filterResult: any = date.filter((u) => {
    if (u > maxdate) {
      maxdate = u;
    }
  });
  x = maxdate;
}

function test() {
  let max = 0;
  let dateval = '2022:01:05';
  const indexes = date.reduce((r, n, i) => {
    n === dateval && r.push(i);

    return r;
  }, []);
  if (indexes.length > 0) {
    for (let i = 0; i < date.length; i++) {
      if (indexes.indexOf(i) != -1)
        if (valeur[i] > max) {
          max = valeur[i];
        }
    }
  } else {
    x = dateval + '=> -1';
  }
  x = dateval + '=>' + max;
}
