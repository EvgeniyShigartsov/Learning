const http = require('http')
const fs = require('fs')
const port = 3000

const requestHandler = (request, response) => {
    if (request.url !== '/list') {
        fs.readFile('index.html', 'utf-8', (err, data) => {
            if (err) return response.end('Some Error')

            const requestHandler = () => {
                let result = request.url === '/favicon.ico' ? '' : request.url.split('=').pop()
                console.log('/////////////////////////////////')
                console.log(result)
                console.log(request.url)
                console.log('/////////////////////////////////')

                return result !== '' ? `<li>${result}</li>` : ''
            }
            const dataToAppend = requestHandler()

            fs.appendFile('list.txt', dataToAppend, 'utf-8', (err) => console.log(err))
            response.end(data)
        })
    } else if (request.url === '/list') {
        fs.readFile('list.txt', 'utf-8', (err, data) => {
            if (err) return response.end('<h1>some troubles</h1>')

            const list = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <ol>${data}</ol>
            </body>
            </html>`
            response.end(list)
        })
    }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('SOMETHING BAD HAPPENNED', err)
    }
    console.log(`server is listening on ${port} port`)
})
