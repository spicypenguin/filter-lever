const filterRoles = function () {
    const jobs = document.querySelectorAll(".row.pt1");

    const desiredLocation = 'united states';
    const desiredTitle = 'Product Manager';
    const headTitle = 'Head of Product';

    jobs.forEach((job, index) => {
        roleInfo = job.children[0].innerText;
        if (!roleInfo.includes(desiredLocation) || (!roleInfo.includes(desiredTitle) && !roleInfo.includes(headTitle))) {
            job.style.display = "none";
        }
    });
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

const existingNode = document.getElementByClassName('row items-center mb2');
const textSearch = document.createElement('input');
textSearch.type = 'text';
textSearch.onkeyup = 'filterRoles';
insertAfter(textSearch, existingNode);