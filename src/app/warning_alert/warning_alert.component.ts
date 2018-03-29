import { Component } from "@angular/core";


@Component(

    {
        selector:'my-warning-alert',
        templateUrl:'./warning_alert.component.html',
        styleUrls:['./warning_alert.component.css']
    }
)

export class WarningAlertComponent {
    waring_message = 'This is my first warning message'
}