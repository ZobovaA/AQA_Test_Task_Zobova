import { loginPage } from "../pageobjects/login.page";
import { patientListPage } from "../pageobjects/patient.list.page";
import { mainMenuPage } from "../pageobjects/main.menu";
import { medicationPage } from "../pageobjects/medication.page";

const getRandom = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

describe("Request a new medication ", () => {
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.loginFn();
    });

    it("clicked to medication section", async () => {
        await medicationPage.MedicationLink.click();
        await expect(medicationPage.MedicationSubLinks).toBeElementsArrayOfSize(
            4
        );
        await expect(medicationPage.MedicationSubLinks[0]).toHaveTextContaining(
            "Requests"
        );
        await expect(medicationPage.MedicationSubLinks[1]).toHaveTextContaining(
            "Completed"
        );
        await expect(medicationPage.MedicationSubLinks[2]).toHaveTextContaining(
            "New Request"
        );
        await expect(medicationPage.MedicationSubLinks[3]).toHaveTextContaining(
            "Return Medication"
        );

        await medicationPage.NewRqstbtn.click();

        await expect(medicationPage.currentTitle).toHaveTextContaining(
            "New Medication Request"
        );

        await browser.pause(4000);
        await medicationPage.inputPatient.setValue("Test - Patient - P00201");
        await medicationPage.inputPatient.click(); 

        await medicationPage.visitDrop.click();
        await medicationPage.visitDropOption.click(); 
        await medicationPage.inputMedication.setValue("Pramoxine"); 
        await medicationPage.inputMedicationSug.click();

        await medicationPage.inputPrescription.setValue("Testing prescription");

        await medicationPage.inputDate.setValue("11/3/2021"); 

        await medicationPage.inputPrescription.click();
        await medicationPage.inputPrescription.click();
        await medicationPage.inputQuantity.setValue(getRandom(1, 5));

        await  medicationPage.refilsInput.setValue(getRandom(5, 10)); // TODO - add selector for refills

        await $("button=Ok").click();
    });
});
