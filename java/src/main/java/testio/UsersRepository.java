package testio;

import org.springframework.data.repository.CrudRepository;

import testio.Users;

public interface UsersRepository extends CrudRepository<Users, Long> {

}
