const createForm = document.getElementById("create-form")
const createFormImageMsg = document.getElementById("image-create-msg")
const createFormTitleMsg = document.getElementById("title-create-msg")
const createFormDescMsg = document.getElementById("desc-create-msg")
const newsList = document.getElementById("news-list")
const btnCreate = document.getElementById("btn-create")

console.log(createForm);

// createForm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     createNews('', '', '')
// })

// createForm.addEventListener('submit', function (event) {
//     // ! untuk hide element
//     // event.target.parentElement.style.display = 'none'
//     createNews()
//     event.preventDefault()
// })

btnCreate.addEventListener('click', function (e) {
    createNews()
    e.preventDefault()
})

function deleteNews(id) {

}

function readNews(id) {

}

function updateNews(img, title, desc) {

}

function createNews() {
    let blankImg, blankTitle, blankDesc = false
    if (createForm.img.value === '') {
        blankImg = true
        createFormImageMsg.innerHTML = 'Image cannot be blank'
    } else {
        blankImg = false
        createFormImageMsg.innerHTML = ''
    }
    if (createForm.title.value === '') {
        blankTitle = true
        createFormTitleMsg.innerHTML = 'Title cannot be blank'
    } else {
        blankTitle = false
        createFormTitleMsg.innerHTML = ''
    }
    if (createForm.desc.value === '') {
        blankDesc = true
        createFormDescMsg.innerHTML = 'Description cannot be blank'
    } else {
        blankDesc = false
        createFormDescMsg.innerHTML = ''
    }

    if (!blankImg && !blankTitle && !blankDesc) {
        // alert('Success Create!!!')
    }
}

function showNews(data) {

}

function main(action, img, title, desc) {

}

let data = [
    {
        title: 'Lorem ipsum',
        desc: 'Lorem ipsum dolor',
        img: 'https://cdn.dribbble.com/userupload/3529806/file/original-370120c1b24eb2323c9c0a2a8dd4bf80.jpg?compress=1&resize=1200x900'
    },
    {
        title: 'Lorem ipsum',
        desc: 'Lorem ipsum dolor',
        img: 'https://cdn.dribbble.com/userupload/3529806/file/original-370120c1b24eb2323c9c0a2a8dd4bf80.jpg?compress=1&resize=1200x900'
    },
    {
        title: 'Lorem ipsum',
        desc: 'Lorem ipsum dolor',
        img: 'https://cdn.dribbble.com/userupload/3529806/file/original-370120c1b24eb2323c9c0a2a8dd4bf80.jpg?compress=1&resize=1200x900'
    },
    {
        title: 'Lorem ipsum',
        desc: 'Lorem ipsum dolor',
        img: 'https://cdn.dribbble.com/userupload/3529806/file/original-370120c1b24eb2323c9c0a2a8dd4bf80.jpg?compress=1&resize=1200x900'
    },
    {
        title: 'Lorem ipsum',
        desc: 'Lorem ipsum dolor',
        img: 'https://cdn.dribbble.com/userupload/3529806/file/original-370120c1b24eb2323c9c0a2a8dd4bf80.jpg?compress=1&resize=1200x900'
    }
]

