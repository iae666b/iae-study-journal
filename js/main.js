// without maven
const highlightDatesWithoutMaven = ['20231228', '20240104', '20240106', '20240111', '20240125', '20240126', '20240129', '20240130', '20240131', '20240221', '20240222', '20240223', '20240228', '20240303', '20240306', '20240308', '20240310', '20240313', '20240315', '20240317', '20240321', '20240322', '20240324', '20240420', '20240424', '20240426', '20240508', '20240510', '20240512', '20240515', '20240519', '20240522', '20240524', '20240525', '20240529', '20240531', '20240602', '20240605', '20240607', '20240729', '20240730', '20240801', '20240802'];
// web1
const highlightDatesWeb1 = ['20240329', '20240331', '20240410', '20240412', '20240414', '20240417', '20240419'];
// with 'note' dir or not
const specialDate = '20240420';

let totalOfNightClasses = 0;
let totalOfDayClasses = 0;
let totalOfAllClasses = 0;

function createCalendar() {
    createCalendarByYearAndMonths(2023, 11);
    createCalendarByYearAndMonths(2024, 0);
    createCalendarByYearAndMonths(2025, 0, 6);

    console.log("night = " + totalOfNightClasses + "(Count)");
    console.log("day = " + totalOfDayClasses + "(Count)");
    console.log("day & night = " + totalOfAllClasses + "(Count)");
    console.log("converted into total days (" + totalOfNightClasses + " * 0.5 + " + totalOfDayClasses + ") = " + (totalOfNightClasses * 0.5 + totalOfDayClasses) + "(Day)");
}

function createCalendarByYearAndMonths(year, month_start, month_end = 12) {
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const weekdays = ['一', '二', '三', '四', '五', '六', '日'];

    for (let month = month_start; month < month_end; month++) {
        const monthElement = document.createElement('div');
        monthElement.className = 'month';

        const monthName = document.createElement('div');
        monthName.className = 'month-name';
        monthName.textContent = year + '-' + months[month];
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

            let currentDateStr = `${year}${(month + 1).toString().padStart(2, '0')}${day.toString().padStart(2, '0')}`;

            if (highlightDatesWithoutMaven.includes(currentDateStr)) {
                dayElement.classList.add('highlight', 'highlight_without_maven');
                dayElement.addEventListener('click', () => {
                    let urlSuffix = currentDateStr >= specialDate ? '/note' : '';
                    const url = `https://gitee.com/iae23a12/iae-se/tree/main/src/day${currentDateStr.slice(2) + urlSuffix}`;
                    window.open(url, '_blank');
                });
            }
            if (highlightDatesWithMaven.includes(currentDateStr)) {
                dayElement.classList.add('highlight', 'highlight_with_maven');
                dayElement.addEventListener('click', () => {
                    let urlSuffix = currentDateStr >= specialDate ? '/note' : '';
                    const url = `https://gitee.com/iae23a12/iae-se-maven/tree/main/src/main/java/day${currentDateStr.slice(2) + urlSuffix}`;
                    window.open(url, '_blank');
                });
            }
            if (highlightDatesWeb1.includes(currentDateStr)) {
                dayElement.classList.add('highlight', 'highlight_web1');
                dayElement.addEventListener('click', () => {
                    const url = `https://gitee.com/iae23a12/iae-web1/tree/main/day${currentDateStr.slice(2) + '/note'}`;
                    window.open(url, '_blank');
                });
            }
            if (highlightDatesWeb2.includes(currentDateStr)) {
                dayElement.classList.add('highlight', 'highlight_web2');
                dayElement.addEventListener('click', () => {
                    const url = `https://gitee.com/iae23a12/iae-web2/tree/main/src/main/webapp/day${currentDateStr.slice(2) + '/note'}`;
                    window.open(url, '_blank');
                });
            }
            if (highlightHome.includes(currentDateStr)) {
                dayElement.classList.add('highlight', 'highlight_web2');
                dayElement.addEventListener('click', () => {
                    const url = `https://gitee.com/iae23a12/home/tree/main/src/main/webapp/day${currentDateStr.slice(2) + '/note'}`;
                    window.open(url, '_blank');
                });
            }
            if (highlightHtmlNote.includes(currentDateStr)) {
                dayElement.classList.add('highlight', 'highlight_web2');
                dayElement.addEventListener('click', () => {
                    const url = `https://iae666b.github.io/iae-study-journal/notes/day${currentDateStr.slice(2) + '/note'}`;
                    window.open(url, '_blank');
                });
            }

            let currentDate = stringToDate(currentDateStr)
            if (currentDate.getDay() === 6 || currentDate.getDay() === 0 || schoolHolidays.includes(currentDateStr)) {
                dayElement.classList.add('weekend');
            }

            if (dayElement.classList.contains('highlight')) {
                totalOfAllClasses ++;

                if (dayElement.classList.contains('weekend')) {
                    totalOfDayClasses ++;
                } else {
                    totalOfNightClasses ++;
                }
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

function stringToDate(dateString) {
    const year = parseInt(dateString.substring(0, 4));
    const month = parseInt(dateString.substring(4, 6)) - 1;
    const day = parseInt(dateString.substring(6, 8));
    return new Date(year, month, day);
}

document.addEventListener('DOMContentLoaded', createCalendar);
