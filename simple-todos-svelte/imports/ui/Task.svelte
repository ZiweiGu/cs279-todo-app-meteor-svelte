<script>
  import { TasksCollection } from '../api/TasksCollection';

  export let task;

  const toggleChecked = () => {
    // Set the isChecked property to the opposite of its current value
    TasksCollection.update(task._id, {
      $set: { isChecked: !task.isChecked }
    });
  };

  // remove deleted tasks from database
  const deleteThisTask = () => {
        TasksCollection.remove(task._id);
    };
</script>

<li>
  <!-- Allow toggling task status (completed or not)-->
  <input
          type="checkbox"
          readonly
          checked={!!task.isChecked}
          on:click={toggleChecked}
  />
  <span>{ task.text }</span>
  <!-- Show delete option as a red close icon-->
  <button class="delete" on:click={deleteThisTask}>&times;</button>
</li>