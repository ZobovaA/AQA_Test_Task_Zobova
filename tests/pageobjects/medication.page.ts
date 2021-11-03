import { Page } from "./page";
class MedicationPage extends Page {
    get NewRqstbtn() {
        return $(".btn-primary");
    }

    get MedicationHeader() {
        return $(".view-current-title");
    }

    get MedicationSubLinks () {
        return $$(".category-sub-item");
    }



    get MedicationLink () {
        return $("#ember767");
    }

    
    get inputPatient() {
        return $("#patientTypeAhead-ember2758");
    }

    get inputMedication() {
        return $("#inventoryItemTypeAheaMedicationSubItemsd-ember2825");
    }

    get inputPrescription() {
        return $("#prescription-ember2857");
    }

    get dropMedication() {
        return $("#visit-ember2803");
    }

    get inputDate() {
        return $("#display_prescriptionDate-ember2880");
    }

    get inputQuantity() {
        return $("#quantity-ember2899");
    }
    get inputRefils() {
        return $("#ember2906");
    }

    get MedicationAddBtn() {
        return $(".btn-primary");
    }

    get MedicationCancelBtn() {
        return $(".btn-default");
    }

    open() {
        return super.open("medication");
    }
}

export const medicationPage = new MedicationPage();
