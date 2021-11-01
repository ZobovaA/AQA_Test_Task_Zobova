export class Page {
    open (path: string) {
        return browser.url(`http://demo.hospitalrun.io/#/${path}`)
    }
}

