var header = document.querySelector('header')
var headerLogo = document.querySelector('header .contain .logo')
var items = document.querySelectorAll('header .contain .tools .tool ul li')
var tool = document.querySelectorAll('header .contain .tools .tool a')
var scrollUp = document.getElementById('scrollUp')
var list = document.querySelector('header .contain .list')
var tools = document.querySelector('header .contain .tools')
var progress = document.querySelectorAll('.second .contain .content .progress .pro .line span')
var nums = document.querySelectorAll('.sixth .contain .box .info .num nav')
var sixth =document.querySelector('.sixth')
var second =document.querySelector('.second')
var i = 0
var started = false
window.onscroll = function () {
    if (this.scrollY > 0) {
        header.style.position = 'fixed'
        header.style.backgroundColor = ' rgb(0, 0, 0, .5)'
        headerLogo.style.color='var(--white)'
        list.style.color = 'var(--white)'
        scrollUp.style.zIndex='99'
        scrollUp.style.opacity = '1'
        tool.forEach((e) => {
        e.style.color='var(--white)'
        })
        items.forEach((e) => {
        e.style.color='var(--black)'
        })
    }
    else {
        header.style.position = 'relative'
        headerLogo.style.color='var(--black)'
        header.style.backgroundColor = 'var(--white)'
        list.style.color = 'var(--black)'
        scrollUp.style.zIndex='-99'
        scrollUp.style.opacity = '0'
        tool.forEach((e) => {
        e.style.color='var(--black)'
        })
    }

    if(window.scrollY >= sixth.offsetTop-200){
        if(!started){
            nums.forEach((num) => startCount(num));
        }
        started=true;
    }
    if(window.scrollY >= second.offsetTop-400){
        progress.forEach((e) => {
            e.style.width = e.dataset.width
        })
    }
    
}

list.addEventListener('click', function () {
    if (tools.style.display == 'grid') {
        tools.style.display = 'none'
        tools.style.zIndex = '-1'
    } else {
        tools.style.display = 'grid'
        tools.style.zIndex='999'
    }
})

var read = document.querySelectorAll('span.read')
var par = document.getElementById('par')
read.forEach((e)=>{
    e.addEventListener('click',function(){
        if(this.textContent =='Read Less'){
            this.previousElementSibling.innerHTML=`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam laudantium explicabo magni.....`
            this.textContent= 'Read More'
        }
        else{
            this.previousElementSibling.innerHTML=` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam laudantium explicabo magni doloremque consequatur eum nemo, asperiores facilis veritatis cum eveniet vero aliquam maiores soluta provident neque temporibus nisi dicta!`
            this.textContent= 'Read Less'
        }
    })
})



function startCount(el){
    let num = el.dataset.num;
    let count = setInterval(()=>{
        el.textContent++;
        if(el.textContent == num){
            clearInterval(count);   
        }
    },2000/num);
}

var slides = document.querySelectorAll('.eighth .contain .content .slides .slide .title')
slides.forEach((e) => {
    var status=false
    e.addEventListener('click', function () {
        status = !status
        slides.forEach((e) => {
            e.classList.remove('active')
            e.parentElement.lastElementChild.style.display = 'none'
            e.parentElement.style.boxShadow = 'none'
            e.style.color='var(--black)'
            e.style.backgroundColor='var(--white)'
        })
        if (status) {
            e.parentElement.style.boxShadow = 'var(--boxShadow)'
            e.parentElement.lastElementChild.style.display = 'grid'
            e.style.color = 'var(--generalColor)'
            e.style.backgroundColor='var(--white)'
        }
        else {
            e.parentElement.style.boxShadow = 'none'
            e.parentElement.lastElementChild.style.display = 'none'
            e.style.color='var(--white)'
            e.style.backgroundColor='var(--generalColor)'
        }
        e.classList.add('active')
    })
})


