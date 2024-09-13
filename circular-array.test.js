// const LinkedList = require("./linked-list");

describe("addItem", function() {
  it("append a value to the array", function() {
    let lst = new CircularArray(['harry', 'hermione', 'ginny', 'ron']);

    lst.addItem('dobby');
    expect(lst.length).toBe(5);
    expect(lst.getByIndex(2)).toBe('ginny');
    expect(lst.getByIndex(15)).toBe(null);
  });
});

describe("rotate", function() {
  it("rotate the circular array in clockwise", function() {
    let lst = new CircularArray(['harry', 'hermione', 'ginny', 'ron']);

    lst.rotate(1);
    expect(lst.length).toBe(4);
    expect(lst.head).toBe(1);
    expect(lst.getByIndex(2)).toBe('ron');
    expect(lst.getByIndex(15)).toBe(null);

    lst.rotate(1);
    expect(lst.length).toBe(4);
    expect(lst.head).toBe(2);
    expect(lst.getByIndex(2)).toBe('harry');
    expect(lst.getByIndex(15)).toBe(null);

    lst.rotate(1);
    expect(lst.length).toBe(4);
    expect(lst.head).toBe(3);
    expect(lst.getByIndex(2)).toBe('hermione');
    expect(lst.getByIndex(15)).toBe(null);

    lst.rotate(1);
    expect(lst.length).toBe(4);
    expect(lst.head).toBe(0);
    expect(lst.getByIndex(2)).toBe('ginny');
    expect(lst.getByIndex(15)).toBe(null);

    lst.rotate(1);
    expect(lst.length).toBe(4);
    expect(lst.head).toBe(1);
    expect(lst.getByIndex(2)).toBe('ron');
    expect(lst.getByIndex(15)).toBe(null);
  });
});

describe("rotate", function() {
  it("rotate the circular array in counter-clockwise", function() {
    let lst = new CircularArray(['harry', 'hermione', 'ginny', 'ron']);

    lst.rotate(-1);
    expect(lst.length).toBe(4);
    expect(lst.head).toBe(3);
    expect(lst.getByIndex(2)).toBe('hermione');
    expect(lst.getByIndex(15)).toBe(null);

    lst.rotate(-1);
    expect(lst.length).toBe(4);
    expect(lst.head).toBe(2);
    expect(lst.getByIndex(2)).toBe('harry');
    expect(lst.getByIndex(15)).toBe(null);

    lst.rotate(-1);
    expect(lst.length).toBe(4);
    expect(lst.head).toBe(1);
    expect(lst.getByIndex(2)).toBe('ron');
    expect(lst.getByIndex(15)).toBe(null);

    lst.rotate(-1);
    expect(lst.length).toBe(4);
    expect(lst.head).toBe(0);
    expect(lst.getByIndex(2)).toBe('ginny');
    expect(lst.getByIndex(15)).toBe(null);

    lst.rotate(-1);
    expect(lst.length).toBe(4);
    expect(lst.head).toBe(3);
    expect(lst.getByIndex(2)).toBe('hermione');
    expect(lst.getByIndex(15)).toBe(null);

    lst.rotate(-16);
    expect(lst.length).toBe(4);
    expect(lst.head).toBe(3);
    expect(lst.getByIndex(1)).toBe('harry');
    expect(lst.getByIndex(15)).toBe(null);
  });
});

describe("addItem after rotation", function() {
  it("adding an item after rotation should go at the end of the list in its current rotation", function() {
    let lst = new CircularArray(['harry', 'hermione', 'ginny', 'ron']);

    lst.rotate(-2);
    lst.addItem('dobby')
    expect(lst.length).toBe(5);
    expect(lst.head).toBe(3);
    expect(lst.getByIndex(0)).toBe('ginny');
    expect(lst.getByIndex(1)).toBe('ron');
    expect(lst.getByIndex(2)).toBe('harry');
    expect(lst.getByIndex(3)).toBe('hermione');
    expect(lst.getByIndex(4)).toBe('dobby');
  });
});