import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { CronOptions } from "projects/cron-editor/src/lib/CronOptions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  // Hangfire 1.7+ compatible expression: '3 2 12 1/1 ?'
  // Quartz compatible expression: '4 3 2 12 1/1 ? *'
  public cronExpression = "0 12 1W 1/1 ?";
  public isCronDisabled = false;
  public cronOptions: CronOptions = {
    formInputClass: "form-control cron-editor-input",
    formSelectClass: "form-control cron-editor-select",
    formRadioClass: "cron-editor-radio",
    formCheckboxClass: "cron-editor-checkbox",

    defaultTime: "10:00:00",
    use24HourTime: true,

    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: false,
    hideAdvancedTab: false,

    hideSeconds: true,
    removeSeconds: true,
    removeYears: true,
  };

  activeTab: "default" | "reactiveForm" | "ngModel" = "default";

  cronForm = new FormGroup({
    cron: new FormControl<string>(this.cronExpression),
  });

  ngOnInit(): void {
    this.cronForm.valueChanges.subscribe((value) => {
      console.log("Cron Form value: ", value);
    });
  }
}
