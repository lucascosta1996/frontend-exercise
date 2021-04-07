import { createServer, Model } from 'miragejs';
import initialData from './initialData';

export function makeServer() {
  let server = createServer({
    models: {
      requests: Model,
      terms: Model,
      charts: Model,
      insertions: Model,
    },
    seeds(server) {
      initialData.supportRequests.forEach(item => {
        server.create('request', item);
      });
      initialData.terms.forEach((item) => {
        server.create('term', { term: item });
      });
      server.create('chart', initialData.charts);
      server.create('insertion', initialData.general);
    },
    routes() {
      this.get('/api/requests', (schema, request) => {
        return schema.requests.all();
      });
      this.get('/api/requests/quantity', (schema, request) => {
        return schema.requests.all().length;
      });
      this.post('/api/requests', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        attrs.name = `${attrs.name} ${Math.random().toFixed(2)}`
        return schema.requests.create(attrs);
      });
      this.patch('/api/requests/:id', (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let supportRequest = schema.requests.find(id);
        return supportRequest.update(newAttrs);
      });
      this.get('/api/terms', (schema, request) => {
        return schema.terms.all();
      });
      this.get('/api/charts', (schema, request) => {
        return schema.charts.all();
      });
      this.get('/api/insertions', (schema, request) => {
        return schema.insertions.all();
      });
    },
  });
  return server;
}