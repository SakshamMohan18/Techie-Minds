document.getElementById('dropdownBtn').addEventListener('click', function () {
  const dropdownMenu = document.getElementById('dropdownMenu');
  dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
});

document.getElementById('setLimitBtn').addEventListener('click', function () {
  const maxCalorie = parseInt(document.getElementById('max').value);

  if (maxCalorie < 0) {
    alert("Please enter a positive value for calories.");
    return;
  }

  document.getElementById('calorieLimitMessage').innerText = `Your max calorie limit is: ${maxCalorie} calories.`;

  // Hide dropdown after setting the limit
  document.getElementById('dropdownMenu').style.display = 'none';
});
