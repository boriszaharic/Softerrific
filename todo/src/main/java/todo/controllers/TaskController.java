package todo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import todo.entities.Task;
import todo.repositories.TaskRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class TaskController {
	@Autowired
	private TaskRepository taskRepository;
	
	@GetMapping("/tasks")
	public List<Task> getTasks(){
		return taskRepository.findAll();
	}
	
	@GetMapping("/task/{id}")
	public Task getTask(@PathVariable Long id){
		return taskRepository.findOne(id);
	}
	
	@DeleteMapping("/task/{id}")
	public boolean deleteTask(@PathVariable Long id){
		taskRepository.delete(id);
		return true;
	}
	
	@PostMapping("/task")
	public Task createTask(@RequestBody Task task){
		return taskRepository.save(task);
	}
	
	@PutMapping("/task")
	public Task updateTask(@RequestBody Task task){
		return taskRepository.save(task);
	}
	
	
}
