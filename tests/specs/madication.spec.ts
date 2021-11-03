import { loginPage } from "../pageobjects/login.page";
import { patientListPage } from "../pageobjects/patient.list.page";
import { mainMenuPage } from "../pageobjects/main.menu";
import { medicationPage } from "../pageobjects/medication.page";

// 3. Assert that Medication Section contains next 4 items: Requests,  Completed, New Request, Return Medication
// 4. Click to New Request item
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
        await expect (medicationPage.MedicationSubLinks).toBeElementsArrayOfSize(4)
        await expect (medicationPage.MedicationSubLinks[0]).toHaveTextContaining('Requests')
        // await expect (medicationPage.MedicationSubSection.selectByVisibleText("Requests")).toBePresent()

        // await browser.debug()
        // await expect(medicationPage.MedicationSubSection).toBeClickable();'
        // await expect(medicationPage.MedicationHeader).toHaveTextContaining(
        //     "Medication Requests"
        // );
    });
});
