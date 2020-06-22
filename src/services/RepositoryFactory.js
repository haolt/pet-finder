import AnimalRepository from './animalRepository';
import AuthRequest from './AuthRequest';

const repositories = {
  animals: AnimalRepository,
  authentication: AuthRequest,
}

const RepositoryFactory = {
  get: name => repositories[name],
};

export default RepositoryFactory;
