// document.writeln('Hello, wordl!');
if (typeof Object.create !== 'function') {
    Object.create = function(o) {
        var F = function() {};
        F.prototype = o;
        return new F();
    };
}

var stooge = {
    'first-name': 'Tang',
    'last-name': 'song'
};

var another_stooge = Object.create(stooge);
another_stooge['first-name'] = 'kaka';
// another_stooge['first-name'] = undefined;
delete another_stooge['first-name'];
another_stooge['middle-name'] = 'xiao';
another_stooge.nickname = 'songsong';

document.writeln();
document.writeln(another_stooge['first-name']);
document.writeln(another_stooge['middle-name']);
document.writeln(another_stooge['last-name']);
document.writeln(another_stooge.nickname);

document.writeln();
document.writeln(stooge['first-name']);
document.writeln(stooge['last-name']);

document.writeln();
document.writeln(stooge.hasOwnProperty('last-name'));
document.writeln(another_stooge.hasOwnProperty('last-name'));

another_stooge.c = function() {

};

document.writeln();
document.writeln(another_stooge.hasOwnProperty('c'));
