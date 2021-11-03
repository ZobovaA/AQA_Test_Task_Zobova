import { loginPage } from "../pageobjects/login.page";
import { patientListPage } from "../pageobjects/patient.list.page";
import { mainMenuPage } from "../pageobjects/main.menu";
import { medicationPage } from "../pageobjects/medication.page";

// 5. Fill all fields using next data (Field name: field data):
// i. Patiend: Test Patient (after typing patient name, select “Test  Patient - P00201” from dropdown of the same patients
// ii. Visit: click on field and select any available date
// iii. Medication: Pramoxine (after typing, select any from
// dropdown of available medication)
// iv. Prescription: Testing prescription
// v. Prescription Date: use date of 1 day before, from current  date
// vi. Quantity Requested: type random number in range from 1 to  5
// vii. Refils: type random number in range from 5 to 10
// 6. Click Add button
// 7. Assert that Medication Request Saved popup is displayed and  contains next items: Ok button and Cross button
// 8. Click Ok button

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

        await medicationPage.inputPatient.click();
        await medicationPage.inputPatient.setValue("Patient field: test123");

        await medicationPage.inputMedication.click();

        await browser.keys("dsaw - m00001");
        await medicationPage.inputMedication.setValue(
            "Medication field: test123"
        );
        await medicationPage.inputPrescription.setValue(
            "Prescription field: test123"
        );

        await medicationPage.inputQuantity.setValue("Quantity field: 6");
        await browser.pause(2000);
        await medicationPage.visitDrop.click();
        await browser.pause(1000);
        await $("option=3/8/2021 (Imaging)").click();
        await medicationPage.MedicationAddBtn.click();
    });
});

// // Patient click
// await browser.pause(1000)
// await $('.test-patient-input .tt-input').click()
// await browser.pause(1000)
// await browser.keys('Patient X Sandra - P01689')
// await browser.keys('Backspace')
// await browser.pause(1000)
// await browser.keys('9')

// // Select visit
// await browser.pause(2000)
// await $('.test-add-visit select').click()
// await browser.pause(1000)
// await $('option=3/8/2021 (Imaging)').click()

// Medication
// await $('.test-medication-input').click()
// await browser.keys('dsaw - m00001')

// Prescription
// await $('.test-medication-prescription textarea').setValue('Prescription')

// })
// })
