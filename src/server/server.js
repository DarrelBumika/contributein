import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'test' } = {}) {
    let server = createServer({
        environment,

        models: {
            campaigns: Model,
        },

        seeds(server) {
            server.create("campaign", {id: "P0001", title: "A", description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"})
            server.create("campaign", {id: "P0002", title: "B", description: "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"})
            server.create("campaign", {id: "P0003", title: "C", description: "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"})
            server.create("campaign", {id: "P0004", title: "D", description: "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDD"})
            server.create("campaign", {id: "P0005", title: "E", description: "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"})
            server.create("campaign", {id: "P0006", title: "F", description: "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"})
            server.create("campaign", {id: "P0007", title: "G", description: "GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG"})
            server.create("campaign", {id: "P0008", title: "H", description: "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"})
            server.create("campaign", {id: "P0009", title: "I", description: "IIIIIIIIIIIIIIIIIIIIIIIIIIIIII"})
        },

        routes() {
            this.namespace = "api"

            this.get("/campaigns", (schema, request) => {
                return schema.campaigns.all()
            })

            this.get("/campaigns/:id", (schema, request) => {
                let id = request.params.id
                return schema.campaigns.find(id)
            })
        }
    })

    return server
}