import { loginPage } from "../pageobjects/login.page";
import { patientListPage } from "../pageobjects/patient.list.page";
import { mainMenuPage } from "../pageobjects/main.menu";
import { madicationPage } from "../pageobjects/madication.page";

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
        await madicationPage.MedicationLink.click();
        await expect(madicationPage.MedicationSubLinks).toBeElementsArrayOfSize(
            4
        );
        await expect(madicationPage.MedicationSubLinks[0]).toHaveTextContaining(
            "Requests"
        );
        await expect(madicationPage.MedicationSubLinks[1]).toHaveTextContaining(
            "Completed"
        );
        await expect(madicationPage.MedicationSubLinks[2]).toHaveTextContaining(
            "New Request"
        );
        await expect(madicationPage.MedicationSubLinks[3]).toHaveTextContaining(
            "Return Medication"
        );

        await madicationPage.NewRqstbtn.click();

        await expect(madicationPage.currentTitle).toHaveTextContaining(
            "New Medication Request"
        );

        await browser.pause(4000);
        await madicationPage.inputPatient.setValue("Test - Patient - P00201");
        await madicationPage.inputPatient.click(); 

        await madicationPage.visitDrop.click();
        await madicationPage.visitDropOption.click(); 
        await madicationPage.inputMedication.setValue("Pramoxine"); 
        await madicationPage.inputMedicationSug.click();

        await madicationPage.inputPrescription.setValue("Testing prescription");

        await madicationPage.inputDate.setValue("11/3/2021"); 

        await madicationPage.inputPrescription.click();
        await madicationPage.inputPrescription.click();
        await madicationPage.inputQuantity.setValue(getRandom(1, 5));

        await  madicationPage.refilsInput.setValue(getRandom(5, 10)); 
        await madicationPage.MedicationAddBtn.click();
        await madicationPage.btnOk.click();
    });
});
