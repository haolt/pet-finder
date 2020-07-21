import Repository from './Repository';

const resource = '/types';

export default {
  getAll() {
    return Repository.get(`${resource}`);
  },
}
