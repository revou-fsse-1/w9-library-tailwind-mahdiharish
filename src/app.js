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

function loadBooks() {
    const searchParams = new URLSearchParams(window.location.search)
    let page = searchParams.get('page')
    page = page ? Number(page) : 1
    const bookGrid = document.getElementById('book-grid')
    bookGrid.innerHTML = ''
    fetch('./data.json')
        .then((response) => response.json())
        .then((data) => {
            const startIndex = 12 * (page - 1)
            const endIndex = 12 * page
            const booksToDisplay = data.books.slice(startIndex, endIndex)
            booksToDisplay.forEach((book) => {
                const bookContainer = document.createElement('div')
                bookContainer.className =
                    'w-full bg-white border border-rose-200 rounded-lg shadow dark:bg-rose-800 dark:border-rose-700'
                const bookLink = document.createElement('a')
                bookLink.href = '#'
                const bookImage = document.createElement('img')
                bookImage.className = 'h-72 mx-auto'
                bookImage.src = book.image
                bookImage.alt = book.title
                bookLink.appendChild(bookImage)
                const bookDetails = document.createElement('div')
                bookDetails.className = 'p-5'
                const bookTitleLink = document.createElement('a')
                bookTitleLink.href = '#'
                const bookTitle = document.createElement('h5')
                bookTitle.className =
                    'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'
                bookTitle.innerHTML = book.title
                const bookAuthors = document.createElement('p')
                bookAuthors.className =
                    'mb-3 font-normal text-gray-200 dark:text-gray-200'
                const authorLabel = document.createElement('b')
                authorLabel.innerHTML = 'Author(s): '
                const authorNames = document.createTextNode(
                    book.authors.join(', ')
                )
                bookAuthors.appendChild(authorLabel)
                bookAuthors.appendChild(authorNames)
                bookTitleLink.appendChild(bookTitle)
                bookDetails.appendChild(bookTitleLink)
                bookDetails.appendChild(bookAuthors)
                bookContainer.appendChild(bookLink)
                bookContainer.appendChild(bookDetails)
                bookGrid.appendChild(bookContainer)
            })
        })
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
