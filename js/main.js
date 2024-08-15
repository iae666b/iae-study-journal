// without maven
const highlightDatesWithoutMaven = [20231228, 20240104, 20240106, 20240111, 20240125, 20240126, 20240129, 20240130, 20240131, 20240221, 20240222, 20240223, 20240228, 20240303, 20240306, 20240308, 20240310, 20240313, 20240315, 20240317, 20240321, 20240322, 20240324, 20240420, 20240424, 20240426, 20240508, 20240510, 20240512, 20240515, 20240519, 20240522, 20240524, 20240525, 20240529, 20240531, 20240602, 20240605, 20240607, 20240729, 20240730, 20240801, 20240802];
// with maven
const highlightDatesWithMaven = [20240805, 20240806, 20240808, 20240809, 20240812, 20240813, 20240815];
// with 'note' dir or not
const specialDate = '20240420';

function createCalendar() {
    createCalendarByYearAndMonths(2023, 11);
    createCalendarByYearAndMonths(2024, 0);
}

function createCalendarByYearAndMonths(year, month_start) {
    const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    const weekdays = ['一', '二', '三', '四', '五', '六', '日'];

    for (let month = month_start; month < 12; month++) {
        const monthElement = document.createElement('div');
        monthElement.className = 'month';

        const monthName = document.createElement('div');
        monthName.className = 'month-name';
        monthName.textContent = months[month];
        monthElement.appendChild(monthName);

        const weekdaysElement = document.createElement('div');
        weekdaysElement.className = 'weekdays';
        weekdays.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'weekday';
            dayElement.textContent = day;
            weekdaysElement.appendChild(dayElement);
        });
        monthElement.appendChild(weekdaysElement);

        const daysElement = document.createElement('div');
        daysElement.className = 'days';

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < (firstDay.getDay() + 6) % 7; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'day';
            daysElement.appendChild(emptyDay);
        }

        // Add days of the month
        for (let day = 1; day <= lastDay.getDate(); day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'day';
            dayElement.textContent = day;

            const currentDate = parseInt(`${year}${(month + 1).toString().padStart(2, '0')}${day.toString().padStart(2, '0')}`);
            if (highlightDatesWithoutMaven.includes(currentDate)) {
                dayElement.classList.add('highlight');
                dayElement.addEventListener('click', () => {
                    let urlSuffix = currentDate.toString() >= specialDate ? '/note' : '';
                    const url = `https://gitee.com/iae23a12/iae-se/tree/main/src/day${currentDate.toString().slice(2) + urlSuffix}`;
                    window.open(url, '_blank');
                });
            }
            if (highlightDatesWithMaven.includes(currentDate)) {
                dayElement.classList.add('highlight');
                dayElement.addEventListener('click', () => {
                    let urlSuffix = currentDate.toString() >= specialDate ? '/note' : '';
                    const url = `https://gitee.com/iae23a12/iae-se-maven/tree/main/src/main/java/day${currentDate.toString().slice(2) + urlSuffix}`;
                    window.open(url, '_blank');
                });
            }

            daysElement.appendChild(dayElement);
        }

        monthElement.appendChild(daysElement);
        document.getElementById("calendar-body").appendChild(monthElement);
        if (month === 11) {
            const hr = document.createElement('hr');
            monthElement.after(hr);
        }
    }
}

document.addEventListener('DOMContentLoaded', createCalendar);