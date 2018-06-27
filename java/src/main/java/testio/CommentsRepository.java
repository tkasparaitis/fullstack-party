package testio;

import org.springframework.data.repository.CrudRepository;
import testio.Comments;

import java.util.List;

public interface CommentsRepository extends CrudRepository<Comments, Long> {
    List<Comments> findByIssue(Integer issueId);
}