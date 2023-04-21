import http from 'node:http'
//para se usar o "import", precisa colocar "type" : "module", no packet.json.
//novas versões do node pede antes da importação colocar o "node:"

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === 'GET' && url === '/users') {
        return res
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'John Doe',
            email: 'johndoe@example.com'
        })

        return res.writeHead(201).end('Criação de usuário')
    }

    return res.writeHead(404).end('Not found')
})

server.listen(3333)