import { Page } from "./page";

class PatientListPage extends Page  {
    get panelHeading() {
        return $(".panel-heading");
    }
 
    
    open() {
        return super.open("patients");
    }
}

export const patientListPage = new PatientListPage()