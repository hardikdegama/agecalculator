document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculate-button');
    const birthdateInput = document.getElementById('birthdate');
    const resultDisplay = document.getElementById('result');

    calculateButton.addEventListener('click', () => {
        const birthdateValue = birthdateInput.value;
        if (!birthdateValue) {
            resultDisplay.textContent = 'Please enter a valid birthdate.';
            return;
        }

        const birthdate = new Date(birthdateValue);
        const now = new Date();

        let years = now.getFullYear() - birthdate.getFullYear();
        let months = now.getMonth() - birthdate.getMonth();
        let days = now.getDate() - birthdate.getDate();

        // Adjust for negative values in days and months
        if (days < 0) {
            months--;
            const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += lastMonth.getDate();
        }
        if (months < 0) {
            months += 12;
            years--;
        }

        const totalDays = Math.floor((now - birthdate) / (1000 * 60 * 60 * 24));
        const totalWeeks = Math.floor(totalDays / 7);
        const totalMinutes = Math.floor(totalDays * 24 * 60);
        const totalSeconds = Math.floor(totalMinutes * 60);

        resultDisplay.innerHTML = `
        <div class = 'txt'>
            <p>You are ${years} years, ${months} months, and ${days} days old.</p>
            <p>Or ${totalWeeks} weeks and ${totalDays % 7} days old.</p>
            <p>Total days lived: ${totalDays} days.</p>
            <p>Total minutes lived: ${totalMinutes} minutes.</p>
            <p>Total seconds lived: ${totalSeconds} seconds.</p>
</div>        `;
    });
});
