
const hero = document.getElementById('hero');
const enemy = document.getElementById('enemy');
document.addEventListener('keydown', function(event){
  jump();
});

function jump () {
  if (hero.classList !='jump') {
    hero.classList.add('jump')
  }
  setTimeout(function(){
    hero.classList.remove('jump')
  }, 100)

}

let isAlive = setInterval (function(){
  let hero1 = parseInt(window.getComputedStyle(hero).getPropertyValue('top'));
  let enemy1 = parseInt(window.getComputedStyle(enemy).getPropertyValue('left'));

  if(enemy1 = hero && hero.classList=='jump'){
    alert('you won')
    enemy.classList.remove('enemy')
  }
}, 10)
