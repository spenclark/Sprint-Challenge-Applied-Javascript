// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // div
    const headDiv = document.createElement('div')
    headDiv.classList.add('header')

    // span date
    const headDate = document.createElement('span')
    headDate.textContent = 'MARCH 28, 2019';
    headDate.classList.add('date')
    headDiv.appendChild(headDate);

    // h1
    const headTitle = document.createElement('h1')
    headTitle.textContent = 'Lambda Times';
    headDiv.appendChild(headTitle);

    // span temp
    const spanTemp = document.createElement('span')
    spanTemp.textContent = '98°';
    spanTemp.classList.add('temp');
    headDiv.appendChild(spanTemp);

    return headDiv
}

const header = document.querySelector('.header-container');

header.appendChild(Header())