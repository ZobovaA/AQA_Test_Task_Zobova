import { Page } from "./page";
class MedicationPage extends Page {
    get NewRqstbtn() {
        return $(".btn.btn-primary");
    }

    get currentTitle() {
        return $(".view-current-title");
    }

    get MedicationHeader() {
        return $(".view-current-title");
    }

    get MedicationSubLinks() {
        return $$(".category-sub-item");
    }

    get MedicationLink() {
        return $("#ember767");
    }

    get visitDrop() {
        return $(".test-add-visit select");
    }

    get inputPatient() {
        return $(".test-patient-input .tt-input");
    }

    get visitDropOption() {
        return $("option=8/11/2021 (Pharmacy)");
    }

    get inputMedication() {
        return $(".test-medication-input .tt-input");
    }

    get inputMedicationSug() {
        return $(".test-medication-input .tt-suggestion");
    }

    get inputPrescription() {
        return $(".test-medication-prescription textarea");
    }

    get dropMedication() {
        return $(".test-add-visit .form-control");
    }

    get inputDate() {
        return $(".col-sm-4.col-sm-4 input");
    }

    get refilsInput() {
        return $("input[id^=refills]");
    }

    get inputQuantity() {
        return $(".test-quantity-input .ember-text-field");
    }

    get MedicationAddBtn() {
        return $(".panel-footer .btn-primary");
    }

    get CalendarInput() {
        return $(".col-sm-4 .ember-text-field");
    }

    get btnOk() {
        return $("button=Ok");
    }

    

    open() {
        return super.open("medication");
    }
}

export const medicationPage = new MedicationPage();
