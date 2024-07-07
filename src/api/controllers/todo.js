function error(err) { 
  console.error(`
    TODO ERROR: 
    ${ err.name } \n  
    ${ err.message} 
  `)
}
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
    try {
		  this.list.push(todoElement);
    } catch (err) {
      error(err);
      throw(err);
    }
  }
  public static makeList(todos) {
    for (todo in todos) {
      try {
        const elem = this.makeElement(todo);
        this.list.push(elem);
      } catch (err) {
        error(err);
				throw err;
      }
    }
    return list;
  };
  public static add(todo) {
    try {
      const elem = this.makeElement(todo);
      this.list.push(elem);							
    } catch (err) { 
      error(err);
      throw err;
    };
  };
  public static delete(id) {
    try {
      this.list.splice(id, id);
    } catch(err) { 
      error(err);  
      throw err;
    };
  };
  public static getTodo(id) {
    const item = this.list[id];
    if(item) {
      return item;
    } else {
      console.error('[TODO]: ID did not correspond to any items in the list.')
    }
  };
  public static updateTask(id, task) {
    try {
      const item = this.list[id];
      item.task = task;
    } catch(err) {
		  error(err) 
      throw err;
    }
  };
  public static updateDesc(id, description) {
    try {
      const item = this.list[id];
      item.description = description;
    } catch (err) {
      error(err);
      throw err;
    }
  }
};

export {Todos}
