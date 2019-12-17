import Character from '../js/character.js';

test('Успешно', () => {
  const recieved = new Character('Skywalker', 'Swordsman');
  const expected = {
    name: 'Skywalker',
    type: 'Swordsman',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(recieved).toEqual(expected);
});

test('Ошибка в типе имени', () => {
  const recieved = () => new Character(123, 'Magician');
  expect(recieved).toThrowError('Имя должно быть задано строкой');
});

test('Короткое имя', () => {
  const recieved = () => new Character('S', 'Magician');
  expect(recieved).toThrowError('Используйте имя от 2 до 10 символов');
});

test('Длинное имя', () => {
  const recieved = () => new Character('Luke Skywalker', 'Magician');
  expect(recieved).toThrowError('Используйте имя от 2 до 10 символов');
});

test('Неверный тип персонажа', () => {
  const recieved = () => new Character('Skywalker', 'Human');
  expect(recieved).toThrowError('Ошибка при выборе типа персонажа');
});
