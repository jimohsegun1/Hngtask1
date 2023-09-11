document.addEventListener("DOMContentLoaded", function () {
    // Function to get the current day of the week
    function getCurrentDayOfTheWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const dayIndex = currentDate.getUTCDay();
        return daysOfWeek[dayIndex];
    }

    // Function to get the current UTC time in milliseconds
    function getCurrentUTCTime() {
        return Date.now();
    }

    // Update the elements with dynamic data
    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = `Current Day of the Week: ${getCurrentDayOfTheWeek()}`;
    document.querySelector("[data-testid='currentUTCTime']").textContent = `Current UTC Time: ${getCurrentUTCTime()} ms`;
});
