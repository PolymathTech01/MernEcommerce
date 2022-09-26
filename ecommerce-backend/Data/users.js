import bcrypt from 'bcryptjs';
const users = [
  {
    name: 'Alli Olarinde',
    email: 'admin@example.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Robiah Adeniyi',
    email: 'youngachiever@example.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Umar User',
    email: 'umar@example.com',
    password: bcrypt.hashSync('12345', 10),
  },
];
export default users;
