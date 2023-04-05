let data = [
    {
        title: 'Surprising NBA Off season Trades to Start Thinking About Now',
        desc: 'Surprising NBA Off season Trades',
        img: 'https://cdn.nba.com/teams/uploads/sites/1610612765/2023/03/GettyImages-1248204952.jpg?imwidth=1200&imheight=800',
        user: 'George Djoni',
        time: 'March 10, 2023'
    },
    {
        title: 'Tyus Jones Takes over Point Guard Duties in Chicago',
        desc: 'Tyus Jones Takes over',
        img: 'https://cdn.nba.com/teams/uploads/sites/1610612765/2023/03/GettyImages-1248205068.jpg?imwidth=1200&imheight=800',
        user: 'Rony',
        time: 'March 1, 2023'
    },
    {
        title: 'Blazers Swap Anfernee Simons for Raptors\' OG Anunoby',
        desc: 'Blazers Swap Anfernee Simons',
        img: 'https://cdn.nba.com/teams/uploads/sites/1610612765/2023/03/GettyImages-1248205110.jpg?imwidth=1200&imheight=800',
        user: 'Akhmad Ghafirin',
        time: 'February 5, 2023'
    },
    {
        title: 'Paul George Helps Knicks Join East\'s Elite',
        desc: 'Paul George Helps Knicks',
        img: 'https://cdn.nba.com/teams/uploads/sites/1610612765/2023/03/GettyImages-1248204563.jpg?imwidth=1200&imheight=800',
        user: 'Dody Agus Salim',
        time: 'February 1, 2023'
    }
]

let page = 1;
showPage(page);
showNews(data)
setupCreateNews()

// delete selected news
function deleteNews(id) {
    const delNews = document.getElementById(id)
    delNews.remove()
}

// add create news to section list
function createNews(img, title, desc, user, time) {
    // get element section list
    const sectionList = document.getElementById('section-list')

    // create element parent div
    let parentId = `news-${sectionList.childElementCount}`
    const parentDiv = document.createElement('div')
    parentDiv.setAttribute('class', 'MyArticleContainer')
    parentDiv.setAttribute('id', parentId)

    // create element img news
    let imgId = `img-${sectionList.childElementCount}`
    const imgNews = document.createElement('img')
    imgNews.setAttribute('class', 'MyArticleImages')
    imgNews.setAttribute('id', imgId)
    imgNews.setAttribute('src', img)

    // create element content div / parent title & desc
    const contentDiv = document.createElement('div')
    contentDiv.setAttribute('class', 'MyArticleContent')

    // create element title div
    let titleId = `title-${sectionList.childElementCount}`
    const textTitle = document.createElement('div')
    textTitle.setAttribute('class', 'MyArticleTitle')
    textTitle.setAttribute('id', titleId)
    textTitle.innerText = title

    // create element desc div
    let descId = `desc-${sectionList.childElementCount}`
    const textDesc = document.createElement('div')
    textDesc.setAttribute('class', 'MyArticleDesc')
    textDesc.setAttribute('id', descId)
    textDesc.innerText = desc

    // create element footer div / parent username, post time info & action
    const footerDiv = document.createElement('div')
    footerDiv.setAttribute('class', 'MyArticleFooter')

    // create element footer user div / parent username, post time
    const footerUserDiv = document.createElement('div')
    footerUserDiv.setAttribute('class', 'MyUserFooter')

    // create element username div
    let userId = `user-${sectionList.childElementCount}`
    const textUser = document.createElement('div')
    textUser.setAttribute('class', 'MyArticleUserName')
    textUser.setAttribute('id', userId)
    textUser.innerText = user

    // create element icon user img
    const imgUser = document.createElement('img')
    imgUser.setAttribute('class', 'MyArticleUserIcon')
    imgUser.setAttribute('src', 'assets/user.png')

    // create element post time div
    let timeId = `time-${sectionList.childElementCount}`
    const textPostTime = document.createElement('div')
    textPostTime.setAttribute('class', 'MyArticlePostTime')
    textPostTime.setAttribute('id', timeId)
    textPostTime.innerText = time

    // create element icon post time img
    const imgPostTime = document.createElement('img')
    imgPostTime.setAttribute('class', 'MyArticleUserIcon')
    imgPostTime.setAttribute('src', 'assets/time.png')

    // create element btn action delete
    const btnDelete = document.createElement('img')
    btnDelete.setAttribute('class', 'MyArticleUserIcon')
    btnDelete.setAttribute('src', 'assets/del.png')

    // create element btn action update
    const btnUpdate = document.createElement('img')
    btnUpdate.setAttribute('class', 'MyArticleUserIcon')
    btnUpdate.setAttribute('src', 'assets/edit-1.png')

    // add event to delete
    btnDelete.addEventListener('click', () => {
        deleteNews(parentId)
    })

    // add event to open update form page
    btnUpdate.addEventListener('click', () => {
        let dataId = {
            imgId,
            titleId,
            descId,
            userId,
            timeId
        }
        let dataPrefilled = {
            title,
            desc,
            img,
            time,
            user
        }

        setupUpdateNews(dataId, dataPrefilled)
    })

    // append/add user, post time info & action to footer
    footerDiv.append(btnDelete)
    footerDiv.append(btnUpdate)
    footerDiv.append(imgUser)
    footerUserDiv.append(textUser)
    footerUserDiv.append(textPostTime)
    footerDiv.append(footerUserDiv)


    // add img, title, desc, footer news to parent div
    parentDiv.append(imgNews)
    parentDiv.append(textTitle)
    parentDiv.append(textDesc)
    parentDiv.append(footerDiv)

    // add parent div to section list
    sectionList.append(parentDiv)
}

// show static list news
function showNews(data) {
    for (let i = 0; i < data.length; i++) {
        let news = data[i]
        createNews(news.img, news.title, news.desc, news.user, news.time)
    }
}

// initialization create form
function setupCreateNews() {
    // get element input create
    const btnCreatePost = document.getElementById('btn-create-post')
    const inputTitle = document.getElementById('input-create-title')
    const inputDesc = document.getElementById('input-create-desc')
    const inputImg = document.getElementById('input-create-img')
    const inputTime = document.getElementById('input-create-time')
    const inputUser = document.getElementById('input-create-user')

    btnCreatePost.addEventListener('click', (e) => {
        e.preventDefault()

        if (inputTitle.value !== '' && inputDesc.value !== '' && inputImg.value !== '' && inputTime.value !== '' && inputUser.value !== '') {
            // create/add new data to html section list
            createNews(inputImg.value, inputTitle.value, inputDesc.value, inputUser.value, inputTime.value)

            // open home
            openHome()
        } else alert('input tidak boleh kosong')
    })
}

// initialization update form
function setupUpdateNews(dataId, dataPrefilled) {
    // get current news item element
    const imgNews = document.getElementById(dataId.imgId)
    const textTitle = document.getElementById(dataId.titleId)
    const textDesc = document.getElementById(dataId.descId)
    const textUser = document.getElementById(dataId.userId)
    const textPostTime = document.getElementById(dataId.timeId)

    // get input update element
    const btnUpdatePost = document.getElementById('btn-update-post')
    const inputTitle = document.getElementById('input-update-title')
    const inputDesc = document.getElementById('input-update-desc')
    const inputImg = document.getElementById('input-update-img')
    const inputTime = document.getElementById('input-update-time')
    const inputUser = document.getElementById('input-update-user')

    // prefilled input update from current data
    inputTitle.value = dataPrefilled.title
    inputDesc.value = dataPrefilled.desc
    inputImg.value = dataPrefilled.img
    inputTime.value = dataPrefilled.time
    inputUser.value = dataPrefilled.user

    // open update form
    openUpdateForm()

    // add event to update data from input update to current data
    btnUpdatePost.addEventListener('click', (e) => {
        e.preventDefault()

        if (inputTitle.value !== '' && inputDesc.value !== '' && inputImg.value !== '' && inputTime.value !== '' && inputUser.value !== '') {

            imgNews.setAttribute('src', inputImg.value)
            textTitle.innerText = inputTitle.value
            textDesc.innerText = inputDesc.value
            textUser.innerText = inputUser.value
            textPostTime.innerText = inputTime.value

            // open home
            openHome()
        } else alert('input tidak boleh kosong')
    })
}

// open home
function openHome() {
    showPage(1);
}

// open create form
function openCreateForm() {
    showPage(2);
}

// open update form
function openUpdateForm() {
    showPage(3);
}

// open selected page
function showPage(n) {
    let home = document.getElementById("pageHome");
    let createForm = document.getElementById("pageCreateForm");
    let updateForm = document.getElementById("pageUpdateForm");

    // open home
    if (n === 1) {
        createForm.style.display = "none";
        updateForm.style.display = "none";
        home.style.display = "block";
    }

    // open create form
    if (n === 2) {
        home.style.display = "none";
        updateForm.style.display = "none";
        createForm.style.display = "block";
    }

    // open update form
    if (n === 3) {
        home.style.display = "none";
        createForm.style.display = "none";
        updateForm.style.display = "block";
    }
}
