import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { HonorificTitle } from "../HonofiricTitle";
import { HonorificTitleService } from "../HonorificTItle.service";

@Component({
  selector: "passenger-name-form",
  templateUrl: "passenger-name-form.component.html",
})
export class PassengerNameFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public formGroup = new FormGroup({});
  @Input() public name = "";
  @Input() public required = false;
  @Input() public disabled = false;

  public readonly nameMinLength = 2;
  public readonly nameMaxLength = 32;

  public honorificTitles: HonorificTitle[] = [];
  public honorificTitleControl = new FormControl();
  public firstNameControl = new FormControl();
  public lastNameControl = new FormControl();
  public form = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private honorificTitleService: HonorificTitleService,
  ) {
  }

  public ngOnInit() {
    const nameValidators = Validators.compose([
      Validators.minLength(this.nameMinLength),
      Validators.maxLength(this.nameMaxLength),
    ]);

    this.honorificTitleControl = new FormControl("");
    this.firstNameControl = new FormControl("", nameValidators);
    this.lastNameControl = new FormControl("", nameValidators);

    this.form = this.formBuilder.group({
      firstName: this.firstNameControl,
      honorificTitle: this.honorificTitleControl,
      lastName: this.lastNameControl,
    });

    this.formGroup.addControl(this.name, this.form);

    this.honorificTitleService.getAll()
      .subscribe((r) => this.honorificTitles = r);
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.formGroup && !changes.formGroup.currentValue) {
      throw new Error("[formGroup] is required and cannot change");
    }

    if (changes.name && !changes.name.currentValue) {
      throw new Error("[name] is required and cannot change");
    }

    if (changes.disabled) {
      if (changes.disabled.currentValue) {
        this.form.disable();
      } else {
        this.form.enable();
      }
    }
  }

  public ngOnDestroy() {
    this.formGroup.removeControl(this.name);
  }
}
