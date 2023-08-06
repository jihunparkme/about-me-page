/*!
* Start Bootstrap - Resume v7.0.3 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    countWorkDay("11st-start-date", "11st-work-period");
    countTotalWorkPeriod();
});

function countWorkDay(id, target) {

    let today = new Date();

    let workDate = document.getElementById(id).innerText;
    let startDateList = workDate.split("~")[0].trim().split(".");
    let y = startDateList[0];
    let m = startDateList[1];
    let d = startDateList[2];

    let startDate = new Date(y,m-1,d,0,0,0);

    let year = parseInt(monthDiff(startDate, today) / 12);
    let month = monthDiff(startDate, today) % 12;

    document.getElementById(target).innerText = getPeriodInnerTest(year, month);
}

function monthDiff(start, end) {

    let months;
    months = (end.getFullYear() - start.getFullYear()) * 12;
    months -= start.getMonth();
    months += end.getMonth();

    return months <= 0 ? 0 : months;
}

function countTotalWorkPeriod() {
    
    let workPeriodList = document.getElementsByClassName("work-period");
    let year = 0;
    let month = 0;

    for (let i=0; i<workPeriodList.length; i++) {
        let date = workPeriodList[i].innerText.split(" ");
        let y = 0;
        let m = 0;
        if (date.length == 2) {
            y = date[0].split("년");
            m = date[1].split("개월");
        } else {
            m = date[0].split("개월");
        }

        year += parseInt(y);
        month += parseInt(m);
    }

    year += parseInt(month / 12);
    month = month % 12;

    document.getElementById("total-work-period").innerText = "총 " + getPeriodInnerTest(year, month);
}

function getPeriodInnerTest(year, month) {
    let innerText = '';
    if (year > 0) {
        innerText += year + "년 ";
    }
    innerText += month + "개월";

    return innerText;
}


const items = document.querySelectorAll('.question');

function openCloseAnswer() {
const answerId = this.id.replace('que', 'ans');

if(document.getElementById(answerId).style.display === 'block') {
  document.getElementById(answerId).style.display = 'none';
  document.getElementById(this.id + '-toggle').textContent = '+';
} else {
  document.getElementById(answerId).style.display = 'block';
  document.getElementById(this.id + '-toggle').textContent = '-';
}
}

items.forEach(item => item.addEventListener('click', openCloseAnswer));
