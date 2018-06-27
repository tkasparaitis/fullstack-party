package testio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import testio.Comments;
import testio.CommentsRepository;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import javax.management.Query;
import java.util.ArrayList;
import java.util.List;


@Controller
@RequestMapping(path="/comment")
public class CommentsController {
    @Autowired
    private CommentsRepository commentsRepository;

    @GetMapping(path="/{issueId}")
    public @ResponseBody List<Comments> getComments (@PathVariable Integer issueId) {
        List<Comments> comments = commentsRepository.findByIssue(issueId);
        return comments;
    }


}