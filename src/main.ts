import { Post } from './components/Button/Button';

const app = document.getElementById('app')!;

const post1 = new Post("Hello World", "This is my first post!");
post1.attach(app);

const post2 = new Post("Second Post", "Learning TypeScript + Bootstrap is fun!");
post2.attach(app);
