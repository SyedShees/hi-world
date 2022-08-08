import { Component } from "@angular/core";

@Component({
    selector: 'items',
    template: `
    <h2>{{title}}</h2>
    <ul>
        <li *ngFor="let item of items">{{items}}</li>
    </ul>
    `
})
export class ItemsComponents
{
    title="List Of Items";
    items= ["item1","item2"];
}