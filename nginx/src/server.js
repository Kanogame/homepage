const daily = [{
  name: "solve 1 task on duolingo",
  buttonId: "duolingo",
},
{
  name: "solve 1 task on genki",
  buttonId: "genki",
}, {
  name: "solve 1 CTF on picoCTF",
  buttonId: "picoCTF",
}]

const dailyContainer = document.querySelector(".daily");
for (let i = 0; i < daily.length; i++) {
  const task = document.createElement("div");
  const status = await GetTaskStatus(daily[i].buttonId);
  task.innerHTML =(status.value === "1" ? "<span style='color:#9EBA96'>\uf42e</span> " : "<span style='color:#f9cb74'>!</span> ") + daily[i].name; 
  document.getElementById(daily[i].buttonId).addEventListener("click", async function () {
    await SetTaskStatus(daily[i].buttonId);
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