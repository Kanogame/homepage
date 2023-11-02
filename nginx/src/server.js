const daily = [{
  name: "solve 1 task on duolingo",
  buttonId: "duolingo",
},
{
  name: "solve 1 task on genki",
  buttonId: "duolingo",
}, {
  name: "solve 1 CTF on picoCTF",
  buttonId: "duolingo",
}]

const dailyContainer = document.querySelector(".daily");
for (i of daily) {
  const task = document.createElement("div");
  task.innerHTML = (GetTaskStatus(i.buttonId) == 1 ? "good" : "bad") + i.name; 
  document.getElementById(i.buttonId).addEventListener("click", () => {
    return SetTaskStatus(taskid);
  });
  dailyContainer.append(task);
}

async function GetTaskStatus(taskid) {
  try {
    const response = await fetch("http://127.0.0.1/api/activities/get");
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
      body: JSON.stringify({type: taskid, value: 1})
  })
}