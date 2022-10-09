<script>
  import { TasksCollection } from '../api/TasksCollection';

  let newTask = '';

  const handleSubmit = () => {
      // Insert a task into the collection
      TasksCollection.insert({
          text: newTask,
          createdAt: new Date(), // current time
      });

      // Clear form
      newTask = '';
  }
</script>

<!-- Add a listener to the submit button-->
<form class="task-form" on:submit|preventDefault={handleSubmit}>
  <input
          type="text"
          name="text"
          placeholder="Type to add new tasks"
          bind:value={newTask}
          required
  />
  <button type="submit">Add Task</button>
</form>