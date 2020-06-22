import Repository from './Repository';

const resource = '/animals';

export default {
  getAll() {
    return Repository.get(`${resource}`);
  },
  getAnAnimal(id) {
    return Repository.get(`${resource}/${id}`);
  }
}

