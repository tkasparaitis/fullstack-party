package testio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import testio.Issues;
import testio.Info;
import testio.IssuesRepository;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import javax.management.Query;
import java.util.ArrayList;
import java.util.List;


@Controller
@RequestMapping(path="/issue")
public class IssuesController {
    @Autowired
    private IssuesRepository issuesRepository;

    @GetMapping(path="/{pageId}")
    public @ResponseBody List<Issues> getIssuesPage (@PathVariable Integer pageId) {
        Pageable topLimit = new PageRequest(pageId, 25);
        List<Issues> n = issuesRepository.findByStatus(1, topLimit);
        return n;
    }

    @GetMapping(path="/db/info")
    public @ResponseBody Info getIssuesInfo () {
        Long activeIssues = issuesRepository.countByStatus(1);
        Long nactiveIssues = issuesRepository.countByStatus(0);

        Info info = new Info((activeIssues+nactiveIssues),activeIssues);
        return info;
    }

    @GetMapping(path="/entry/{issueId}")
    public @ResponseBody Issues getIssue (@PathVariable Integer issueId) {
        Issues issue = issuesRepository.findById(issueId);
        return issue;
    }


}