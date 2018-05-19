package todo.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Task {
	@Id
	@GeneratedValue
	private long id;
	private String summary;
	private String status;
	private String dueDate;
	private String description;
	
	
	@Override
	public String toString() {
		return "Task [id=" + id + ", summary=" + summary + ", status=" + status + ", dueDate=" + dueDate
				+ ", description=" + description + "]";
	}
	public Task() {
	}
	public Task(String summary, String status, String dueDate, String description) {
		this.summary = summary;
		this.status = status;
		this.dueDate = dueDate;
		this.description = description;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getDueDate() {
		return dueDate;
	}
	public void setDueDate(String dueDate) {
		this.dueDate = dueDate;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
