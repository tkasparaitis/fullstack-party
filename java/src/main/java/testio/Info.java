package testio;

public class Info {

    private Long total;
    private Long open;

    public Info(Long total, Long open){
        this.total = total;
        this.open = open;
    }

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }

    public Long getOpen() {
        return open;
    }

    public void setOpen(Long open) {
        this.open = open;
    }
}
