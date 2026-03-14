const btnSeeMore = document.querySelector('.seeMore')

const allGamesPage = () => {
    document.body.style.cursor = 'progress'
    btnSeeMore.style.cursor = 'progress'

    btnSeeMore.disabled = true

    setTimeout(() => {
       document.body.style.cursor = 'default'
       btnSeeMore.style.cursor = 'pointer'
       btnSeeMore.disabled = false

       window.location.href = './all-games.html'
    }, 500);
}

btnSeeMore.addEventListener('click' ,allGamesPage)