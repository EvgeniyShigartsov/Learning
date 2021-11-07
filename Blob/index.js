const box = document.querySelector('.box ')
const DOMAIN = 'http://api.aviationstack.com/v1/airports?access_key=79d0c72f8c324728513229dae07d80d2&limit=6472'
const link = document.querySelector('#link')
// const blob = new Blob(['Hello, world!'], { type: 'text/plain' })

// const href = URL.createObjectURL(blob)
// link.href = href

const getAirports = async () => {
    const res = await fetch(DOMAIN)
    const data = await res.json()

    const jsonString = JSON.stringify(data)
    const blob = new Blob([jsonString], { type: 'text/plain' })
    const href = URL.createObjectURL(blob)
    link.href = href
    box.insertAdjacentHTML('beforeend', `<div>Данные загружены</div>`)

    return data
}
// getAirports()
// URL.revokeObjectURL(link.href);
