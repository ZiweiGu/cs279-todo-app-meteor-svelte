<script>
  import Task from './Task.svelte';
  import { TasksCollection } from '../api/TasksCollection';
  import TaskForm from './TaskForm.svelte';

  // Allow filtering out completed tasks
  const hideCompletedFilter = { isChecked: { $ne: true } };

  let incompleteCount;
  let pendingTasksTitle = '';
  let tasks = [];

  // use Svelte’s reactive statement to run functions whenever there are changes to the data
  // sort tasks based on time created (newest first)
  // show the number of pending tasks in the app bar
  $m: {
        tasks = TasksCollection.find(hideCompleted ? hideCompletedFilter : {}, { sort: { createdAt: -1 } }).fetch()

        incompleteCount = TasksCollection.find(hideCompletedFilter).count();

        pendingTasksTitle = `${
                incompleteCount ? ` (${incompleteCount})` : ''
        }`;
    }

  let hideCompleted = false;
  
  // Toggle task status 
  const setHideCompleted = value =>  { hideCompleted = value; }
</script>


<div class="app">
  <header>
    <div class="app-bar">
        <div class="app-header">
            <h1>📝️ To Do List {pendingTasksTitle}</h1>
        </div>
    </div>
  </header>

  <!-- Create a Task form-->
  <div class="main">
      <TaskForm />
      <div class="filter">
        <!-- Add event listener to the hideComplete button -->
        <button on:click={() => setHideCompleted(!hideCompleted)}>
            {hideCompleted ? 'Show All' : 'Hide Completed'}
        </button>
    </div>

      <ul class="tasks">
          {#each tasks as task (task._id)}
              <Task task={task} />
          {/each}
      </ul>
  </div>
</div>
