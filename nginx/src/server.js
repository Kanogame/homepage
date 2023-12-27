import look from "../config/look.json" assert {type: 'json'};
const tasks = look.tasks;

const dailyContainer = document.querySelector(".daily");
for (let i = 0; i < tasks.length; i++) {
  const task = document.createElement("div");
  const status = await GetTaskStatus(tasks[i].id);
  task.innerHTML =(status.value === "1" ? "<span style='color:#9EBA96'>\uf42e</span> " : "<span style='color:#f9cb74'>!</span> ") + tasks[i].name; 
  document.getElementById(tasks[i].id).addEventListener("click", async function () {
    await SetTaskStatus(tasks[i].id);
  }, false);
  dailyContainer.append(task);
}

async function GetTaskStatus(taskid) {
  try {
    const response = await fetch("http://127.0.0.1/api/activities/get?type=" + taskid);
    const res = await response.json();
    return res;
  }
  catch (Exception) {
    return 0; 
  }
}

async function SetTaskStatus(taskid) {
  await fetch("http://127.0.0.1/api/activities/edit", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"},
      body: JSON.stringify({type: taskid, value: "1"})
  })
}