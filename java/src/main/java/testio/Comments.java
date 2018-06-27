package testio;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Comments {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    private String issue;
    private Integer parent;
    private String author;
    private String avatr;
    private String text;
    private String timestamp;




    public Integer getId() { return id; }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getIssue() { return issue; }
    public void setIssue(String issue) {
        this.issue = issue;
    }

    public Integer getParent() { return parent; }
    public void setParent(Integer parent) {
        this.parent = parent;
    }

    public String getAuthor() { return author; }
    public void setAuthor(String author) {
        this.author = author;
    }

    public String getAvatr() { return avatr; }
    public void setAvatr(String avatr) {
        this.avatr = avatr;
    }

    public String getText() { return text; }
    public void setText(String text) {
        this.avatr = text;
    }

    public String getTimestamp() { return timestamp; }
    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }
}
