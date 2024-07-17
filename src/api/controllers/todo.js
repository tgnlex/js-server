class Todos {  
  public static list = [];
  public static makeElement(todo) {
    const element = `
      <li>
        <h4>${todo.id}. ${todo.task}</h4>
        <p>${todo.description}</p>
      </li>`;
    return element;
  }
  public static addElement(todoElement) {
		  this.list.push(todoElement);

  };
  public static makeList(todos) {
    for (todo in todos) {
        const elem = this.makeElement(todo);
				if (elem) { this.addElement(elem) }
				else { console.error(`[TODO]: failed to add todo element to list`) }
    }
    return list;
  };
  public static add(todo) {
    const elem = this.makeElement(todo);
    if (elem) { this.addElement(elem) } 
    else { console.error(`[TODO]: failed to add todo with id of ${todo.id} to list.`)} 							
  };
  public static delete(id) {
    this.list.splice(id, id);
  };
  public static grab(id) {
    const item = this.list[id];
    if (item) { return item } 
    else { console.error(`[TODO]: Could not find todo item with id of ${id}.`) }
  };
  public static updateTask(id, task) {
    const item = this.grab(id);
    if (item) { item.task = task} 
    else { console.error(`[TODO]: Failed to update todo item with id of ${id}`) }
  };
  public static updateDesc(id, description) {
    const item = this.grab(id);
    if (item) { item.description = description } 
    else { console.error(`[TODO]: Failed to update todo item with id of ${id}`)}
  };
  public static update(id, task, desc) {
    updateTask(id, task);
    updateDesc(id, desc);
  }
};

export {Todos}
