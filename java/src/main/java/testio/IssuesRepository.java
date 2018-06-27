package testio;

import org.springframework.data.repository.CrudRepository;

import testio.Issues;

import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IssuesRepository extends CrudRepository<Issues, Long> {
    List<Issues> findByStatus(Integer status, Pageable pageable);
    Issues findById(Integer id);
    Long countByStatus(Integer status);
}