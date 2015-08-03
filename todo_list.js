var TodoList = function() {
	this.tasks = []
};

TodoList.prototype.add = function(item) {
	this.tasks.push(new Task(item, this.tasks.length))
};

TodoList.prototype.list = function() {
	return this.tasks;
};

TodoList.prototype.remove = function(item) {
	for(i = 0; i < this.tasks.length; i ++) {
		if(this.tasks[i] === item) {
			this.tasks.splice(i, 1);
		}
	}
}


var Task = function(description, id) {
	this.id = id;
	this.description = description;
	this.completed = false;
};

Task.prototype.complete = function() {
	this.completed = true;
}



// Driver code


// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

breadTask.completed //-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}
