export function allContacts(){
    // data simulation
    const contacts= [
        { name: 'Bambang', address: 'Jakarta' },
        { name: 'Syahrini', address: 'Cilacap' }
    ]

    return {
        type: 'ALL_CONTACTS',
        payload: contacts
    }
}