const data = [
    {
        image: "https://tipsytoasts.com/cdn/shop/products/Santa_a642e6d3-e516-44d0-ab0e-4d80e1825d5e_1024x1024.jpg?v=1512773039",
        name: "Wine Bottle",
        price: 125.00
    },
    {
        image: "https://png.pngtree.com/png-clipart/20201209/original/pngtree-side-view-of-wearing-festive-short-haired-santa-hat-png-image_5663679.png",
        name: "Christmas cap",
        price: 25.00
    },
    {
        image: "https://www.thehappychristmasco.com.au/cdn/shop/products/Happy_Xmas_Trees_Hi_Res-015_1024x1024@2x.jpg?v=1439855378",
        name: "Christmas tree",
        price: 200.00
    },
    {
        image: "https://m.media-amazon.com/images/I/61kGjSpIRpL._SL500_.jpg",
        name: "Door decating",
        price: 10.00
    },
    {
        image: "https://sunshineconfectionery.com.au/cdn/shop/products/HG03CandyCanes15gsmall.jpg?v=1635200327",
        name: "Candy",
        price: 15.00
    },
    {
        image: "https://images.meesho.com/images/products/64778788/47try_512.webp",
        name: "Santa toy",
        price: 20.00
    },
]

const cardsCountainer = document.getElementById('countainer')

data.forEach(item => {
    const card = document.createElement('div')
    const cardImage = document.createElement('img')
    const cardName = document.createElement('h2')
    const price = document.createElement('span')


    cardImage.src = item.image
    cardName.textContent = item.name
    price.textContent = item.price + ' $'

    card.appendChild(cardImage)
    card.appendChild(cardName)
    card.appendChild(price)


    cardsCountainer.appendChild(card)

    card.classList.add('card')
})


const NUMBER_OF_SNOWFLAKES = 300;
const MAX_SNOWFLAKE_SIZE = 4;
const MAX_SNOWFLAKE_SPEED = 2;
const SNOWFLAKE_COLOUR = '#ddd';
const snowflakes = [];

const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.pointerEvents = 'none';
canvas.style.top = '0px';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');


const createSnowflake = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
    color: SNOWFLAKE_COLOUR,
    speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
    sway: Math.random() - 0.5 // next
});

const drawSnowflake = snowflake => {
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    ctx.fillStyle = snowflake.color;
    ctx.fill();
    ctx.closePath();
}

const updateSnowflake = snowflake => {
    snowflake.y += snowflake.speed;
    snowflake.x += snowflake.sway; // next
    if (snowflake.y > canvas.height) {
        Object.assign(snowflake, createSnowflake());
    }
}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(snowflake => {
        updateSnowflake(snowflake);
        drawSnowflake(snowflake);
    });

    requestAnimationFrame(animate);
}

for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
    snowflakes.push(createSnowflake());
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.addEventListener('scroll', () => {
    canvas.style.top = `${window.scrollY}px`; 
});

// setInterval(animate, 15);
animate()




const taskButton = document.getElementById('addButton')
const searchButton = document.getElementById('searchButton')
const todoList = document.getElementById('todoList')

taskButton.addEventListener('click', (event) => {
    event.preventDefault()

    const listItem = document.createElement('li')
    const deleteButton = document.createElement('button')
    const taskText = document.createElement('span')
    const taskInput = document.getElementById('addInput')

    if (taskInput.value !== '') {
        deleteButton.textContent = 'Өшіру'
        taskText.textContent = taskInput.value

        listItem.appendChild(taskText)
        listItem.appendChild(deleteButton)
        todoList.appendChild(listItem)

        listItem.style.listStyle = 'none'
        listItem.style.background = '#d6d4d4'
        listItem.style.width = '250px'
        listItem.style.display = 'flex'
        listItem.style.justifyContent = 'space-between'
        listItem.style.padding = '10px'
        listItem.style.borderRadius = '5px'
        

        deleteButton.addEventListener('click', () => {
            listItem.remove()
        })
        
        taskInput.value = ''
    }
})

searchButton.addEventListener('click', (event) => {
    event.preventDefault()

    const searchInput = document.getElementById('searchInput')

    console.log(searchInput.value)

    const tasks = document.querySelectorAll('li')

    console.log(tasks)

    tasks.forEach((task) => {
        console.log(task.textContent)

        if (!task.textContent.includes(searchInput.value)) {
            task.style.display = 'none'
        } else {
            task.style.display = 'flex'
        }
     })
})