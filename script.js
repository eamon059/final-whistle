function hideAllPages() {
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("groupsPage").classList.add("hidden");
  document.getElementById("statsPage").classList.add("hidden");
  document.getElementById("knockoutPage").classList.add("hidden");
}

function goHome() {
  hideAllPages();
  document.getElementById("homePage").classList.remove("hidden");
}

function showGroups() {
  hideAllPages();
  document.getElementById("groupsPage").classList.remove("hidden");
}

function showStats() {
  hideAllPages();
  document.getElementById("statsPage").classList.remove("hidden");
}

function showKnockout() {
  hideAllPages();
  document.getElementById("knockoutPage").classList.remove("hidden");
}

function loadGroups() {
  const container = document.getElementById("groupsContainer");

  container.innerHTML = "";

  GROUPS.forEach(group => {
    container.innerHTML += `
      <div class="group-card">
        <h3>Group ${group.id}</h3>
        <p>${group.matches} matches</p>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadGroups();
});
