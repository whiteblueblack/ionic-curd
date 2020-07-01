import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  list: any = [];

  ngOnInit() {
    for(let i = 0; i< 10; i++ ){
      this.list.push({
        name: '测试'+i,
        key: i
      })
    }
  }

  createDom() {
    const item = {name:'测试添加', key: (Math.random() * 10).toFixed(2)};
    this.list = [...this.list, item];
    console.log('list',this.list)
  }

  deleteDom(item) {
    this.list = this.list.filter(ele => ele.key !== item.key);
  }
}
