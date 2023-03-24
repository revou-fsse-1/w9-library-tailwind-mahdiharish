// FUNCTION TO TOGGLE HAMBURGER MENU
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
async function getBooksData() {
    let response = await fetch('./data.json')
    let json = await response.json()
    return json['books']
}

function previousPage() {
    let searchString = window.location.search
    let searchParams = new URLSearchParams(searchString)
    let pageParam = searchParams.get('page')
    if (pageParam && pageParam === '2') {
        window.location.replace('?page=1')
    } else {
        window.location.reload()
    }
}
function nextPage() {
    let searchString = window.location.search
    let searchParams = new URLSearchParams(searchString)
    let pageParam = searchParams.get('page')
    if (pageParam && pageParam === '1') {
        window.location.replace('?page=2')
    } else {
        window.location.reload()
    }
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
