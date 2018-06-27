package testio;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Issues {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private Integer status;
    private String author;
    private String labels;
    private String timestamp;


//    public Issues(Integer id, String title, Integer status, String author, String labels, String timestamp) {
//        this.id = id;
//        this.title = title;
//        this.status = status;
//        this.author = author;
//        this.labels = labels;
//        this.timestamp = timestamp;
//    }



    public Integer getId() { return id; }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() { return title; }
    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getStatus() { return status; }
    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getAuthor() { return author; }
    public void setAuthor(String author) {
        this.author = author;
    }

    public String getLabels() { return labels; }
    public void setLabels(String labels) {
        this.labels = labels;
    }

    public String getTimestamp() { return timestamp; }
    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }
}
