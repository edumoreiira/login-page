export interface Modal{
    title: string,
    description: string,
    buttonName1: string,
    buttonName2: string,
    buttonStatus?: 'error' | 'ok' | 'default' | 'alert'
}