import styles from './index.css';

const root = document.getElementById('root');

const dogs = ['spot', 'rover', 'bingo', 'joe'];

const dogList = document.createElement('ul');

dogs.forEach(dog => {
  const dogLi = document.createElement('li');
  dogLi.textContent = dog;
  dogList.appendChild(dogLi);
});

dogList.classList.add(styles.dogs);

root.appendChild(dogList);
