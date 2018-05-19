package todo;

import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import todo.entities.Task;
import todo.repositories.TaskRepository;

@SpringBootApplication
public class TodoApplication implements CommandLineRunner {

	@Autowired
	private TaskRepository taskRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(TodoApplication.class, args);
	}
	
	public void run(String... args) throws Exception{
		
		Date date = new Date();
		Format formatter = new SimpleDateFormat("dd/MM/yy");
		String string = formatter.format(date);
		taskRepository.save(new Task("Summary","status",string, "Description for first task."));
	}
}
