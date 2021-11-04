import { config as sharedConfig } from './wdio.shared.conf'

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            browserName: 'firefox',
            'wdio:devtoolsOptions': {
                headless: false
            }
        }]
    }
}
