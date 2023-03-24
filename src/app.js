function toggleMobileMenu() {
    let menuButton = document.getElementById('m-menu-button')
    let menu = document.getElementById('m-menu')

    let menuIcon = menuButton.children[1]
    let closeIcon = menuButton.children[2]

    if (menuIcon.classList.contains('block')) {
        menuIcon.classList.replace('block', 'hidden')
        closeIcon.classList.replace('hidden', 'block')
        menu.classList.replace('hidden', 'block')
    } else {
        menuIcon.classList.replace('hidden', 'block')
        closeIcon.classList.replace('block', 'hidden')
        menu.classList.replace('block', 'hidden')
    }
}
function getPageFromUrl() {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)

    let page = urlParams.get('page')

    return page
}

async function getBooksData() {
    let response = await fetch('./data.json')
    let json = await response.json()
    return json['books']
}

/**
 * To get books data, you should make sure that your function is async function
 * and call `getBooksData` function with await.
 *
 * e.g.
 * async function yourFunction() {
 *      let books = await getBooksData();
 * }
 */
