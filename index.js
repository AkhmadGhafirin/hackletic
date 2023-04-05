let data = [
    {
        title: 'Surprising NBA Offseason Trades to Start Thinking About Now',
        desc: 'Lorem ipsum dolor',
        img: 'assets/article/arc1.jpg',
        user: 'George Djoni'
    },
    {
        title: 'Tyus Jones Takes over Point Guard Duties in Chicago',
        desc: 'Lorem ipsum dolor',
        img: 'assets/article/arc2.jpg',
        user: 'Rony'
    },
    {
        title: 'Blazers Swap Anfernee Simons for Raptors\' OG Anunoby',
        desc: 'Lorem ipsum dolor',
        img: 'assets/article/arc3.jpg',
        user: 'Akhmad Ghafirin'
    },
    {
        title: 'Paul George Helps Knicks Join East\'s Elite',
        desc: 'Lorem ipsum dolor',
        img: 'assets/article/arc3.jpg',
        user: 'Dody Agus Salim'
    }
]

showNews(data)

function deleteNews(id) {
    const delNews = document.getElementById(id)
    delNews.remove()
}

function updateNews(img, title, desc, user, id) {
    const updateNews = document.getElementById(id)
    // pakai query selection
}

function createNews(img, title, desc, user, time) {
    const sectionList = document.getElementById('section-list')
    let id = `news-${sectionList.childElementCount}`
    let parentDiv = document.createElement('div')
    parentDiv.setAttribute('class', 'col-md-4')
    parentDiv.setAttribute('id', id)
    let childDiv = document.createElement('div')
    childDiv.setAttribute('class', 'MyArticleContainer')
    let imgNews = document.createElement('img')
    imgNews.setAttribute('class', 'MyArticleImages')
    imgNews.setAttribute('src', img)
    let textTitle = document.createElement('div')
    textTitle.setAttribute('class', 'MyArticleTitle')
    textTitle.innerText = title
    let footerDiv = document.createElement('div')
    footerDiv.setAttribute('class', 'MyArticleFooter')
    let textUsername = document.createElement('div')
    textUsername.setAttribute('class', 'MyArticleUserName')
    textUsername.innerText = user
    let imgUser = document.createElement('img')
    imgUser.setAttribute('class', 'MyArticleUserIcon')
    imgUser.setAttribute('src', 'assets/user.png')
    let textPostTime = document.createElement('div')
    textPostTime.setAttribute('class', 'MyArticleUserName')
    textPostTime.innerText = time
    let imgPostTime = document.createElement('img')
    imgPostTime.setAttribute('class', 'MyArticleUserIcon')
    imgPostTime.setAttribute('src', 'assets/time.png')
    let btnDelete = document.createElement('img')
    btnDelete.setAttribute('class', 'MyArticleUserIcon')
    btnDelete.setAttribute('src', 'assets/del.png')


    btnDelete.addEventListener('click', () => {
        deleteNews()
    })

    let btnUpdate = document.createElement('img')
    btnUpdate.setAttribute('class', 'MyArticleUserIcon')
    btnUpdate.setAttribute('src', 'assets/del.png')


    btnUpdate.addEventListener('click', () => {
        openUpdateForm(id)
    })

    footerDiv.append(textUsername)
    footerDiv.append(imgUser)
    footerDiv.append(textPostTime)
    footerDiv.append(imgPostTime)
    footerDiv.append(btnDelete)
    childDiv.append(imgNews)
    childDiv.append(textTitle)
    childDiv.append(footerDiv)
    parentDiv.append(childDiv)
    sectionList.append(parentDiv)
}

function showNews(data) {
    for (let i = 0; i < data.length; i++) {
        createNews(data[i].img, data[i].title, data[i].desc, data[i].user, 'data[i].time')
    }
}

function openCreateForm() {
    
}

function openUpdateForm(id) {
    updateNews(id)  
}