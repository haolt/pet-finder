import AnimalRepository from './animalRepository';
import TypeRequest from './TypeRequest';

import AuthRequest from './AuthRequest';

const repositories = {
  animals: AnimalRepository,
  authentication: AuthRequest,
  types: TypeRequest
}

const RepositoryFactory = {
  get: name => repositories[name],
};

export default RepositoryFactory;
